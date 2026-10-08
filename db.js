// Shared by every page of the back office: Supabase connection and a small document store on one table.
// Ligação ao Supabase (a chave "anon" é pública por natureza; o acesso é controlado pelas regras da tabela)
const SUPABASE_URL = "https://amzvovfwbfxaubotcrot.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtenZvdmZ3YmZ4YXVib3Rjcm90Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTEzNTc4NTYsImV4cCI6MjEwNjkzMzg1Nn0.3Mt_FyPero3urqNF6cbq0SVuCM3BWZZw-F-WMd-VvV8";

// Small document store on top of one Supabase table (docs: col, id, data jsonb), live via Realtime.
function supabaseDb(sb) {
  const T = "docs", cache = new Map(), subs = new Map();
  const emit = (col) => (subs.get(col) || []).forEach((fn) => fn());
  const fail = (error) => { const e = new Error(error.message || "erro"); e.code = error.code; throw e; };
  async function load(col) {
    const { data, error } = await sb.from(T).select("id,data").eq("col", col);
    if (error) fail(error);
    cache.set(col, new Map(data.map((r) => [r.id, r.data]))); emit(col);
  }
  const reloadAll = () => { for (const c of cache.keys()) load(c).catch(() => {}); };
  sb.channel("docs-live")
    .on("postgres_changes", { event: "*", schema: "public", table: T }, (p) => {
      const r = p.eventType === "DELETE" ? p.old : p.new;
      if (!r || !cache.has(r.col)) return;
      if (p.eventType === "DELETE") cache.get(r.col).delete(r.id); else cache.get(r.col).set(r.id, r.data);
      emit(r.col);
    })
    .subscribe((st) => { if (st === "SUBSCRIBED") reloadAll(); });
  // phones sleep and miss events: refresh when the app comes back to the screen
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") reloadAll(); });
  function watch(col, fn) {
    if (!subs.has(col)) subs.set(col, []);
    subs.get(col).push(fn);
    if (!cache.has(col)) { cache.set(col, new Map()); load(col).catch(() => { const el = document.getElementById("sub"); if (el) el.textContent = "Sem ligação à base de dados"; }); } else fn();
  }
  // writes only touch collections already cached; one that is not loaded yet is read fresh by the first watch()
  // (creating an empty entry here made a later watch() show that collection as empty)
  const local = (col, fn) => { const m = cache.get(col); if (m) { fn(m); emit(col); } };
  const merge = (a, b) => {
    if (!a || typeof a !== "object" || Array.isArray(a) || !b || typeof b !== "object" || Array.isArray(b)) return b;
    const o = { ...a }; for (const k of Object.keys(b)) o[k] = merge(a[k], b[k]); return o;
  };
  function doc(col, id) {
    return {
      async set(data) { const { error } = await sb.from(T).upsert({ col, id, data, atualizado: new Date().toISOString() }); if (error) fail(error); local(col, (m) => m.set(id, data)); },
      async update(patch) { const { error } = await sb.rpc("doc_update", { p_col: col, p_id: id, p_patch: patch }); if (error) fail(error); local(col, (m) => { if (m.has(id)) m.set(id, merge(m.get(id), patch)); }); },
      async delete() { const { error } = await sb.from(T).delete().eq("col", col).eq("id", id); if (error) fail(error); local(col, (m) => m.delete(id)); },
      onSnapshot(fn) { watch(col, () => { const d = cache.get(col).get(id); fn({ exists: d !== undefined, data: () => d }); }); },
    };
  }
  function query(col, order) {
    return {
      orderBy(field, dir) { return query(col, { ...order, field, dir }); },
      limit(n) { return query(col, { ...order, n }); },
      onSnapshot(fn) {
        watch(col, () => {
          let docs = [...cache.get(col)].map(([id, d]) => ({ id, data: () => d }));
          if (order && order.field) { const f = order.field, s = order.dir === "desc" ? -1 : 1; docs.sort((a, b) => String(a.data()[f] ?? "").localeCompare(String(b.data()[f] ?? "")) * s); }
          if (order && order.n) docs = docs.slice(0, order.n);
          fn({ docs });
        });
      },
    };
  }
  // one fresh read of a collection (also fills the cache), and many upserts in one request
  async function carregar(col) { await load(col); return new Map(cache.get(col)); }
  async function gravarVarios(rows) {
    for (let i = 0; i < rows.length; i += 200) {
      const part = rows.slice(i, i + 200), em = new Date().toISOString();
      const { error } = await sb.from(T).upsert(part.map((r) => ({ col: r.col, id: r.id, data: r.data, atualizado: em })));
      if (error) fail(error);
      for (const r of part) { const m = cache.get(r.col); if (m) m.set(r.id, r.data); }
    }
    new Set(rows.map((r) => r.col)).forEach(emit);
  }
  // calls a Supabase Edge Function with the team's session (e.g. "expandir", which asks Claude)
  async function funcao(nome, body) {
    const { data, error } = await sb.functions.invoke(nome, { body });
    if (error) fail(error);
    return data;
  }
  return {
    carregar, gravarVarios, funcao,
    doc: (path) => { const [c, i] = path.split("/"); return doc(c, i); },
    collection: (col) => Object.assign(query(col), {
      doc: (id) => doc(col, id),
      async add(data) { const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8); await doc(col, id).set(data); return { id }; },
    }),
  };
}
const fileDownloads = {
  async save({ filename, data }) {
    const url = URL.createObjectURL(new Blob([data], { type: "application/pdf" }));
    const a = document.createElement("a"); a.href = url; a.download = filename; document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
  },
};

// The whole team shares one Supabase user; each phone types the team code once and stays signed in.
const TEAM_EMAIL = "equipa@chicomaria.pt";
async function abrirDb() {
  let sb;
  try { sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: true, autoRefreshToken: true, storageKey: "chicomaria-auth" } }); }
  catch (e) { return null; }
  try { const { data } = await sb.auth.getSession(); if (data && data.session) return supabaseDb(sb); } catch (e) {}
  await pedirCodigo(sb);
  return supabaseDb(sb);
}
function pedirCodigo(sb) {
  return new Promise((resolve) => {
    const el = (t, css, txt) => { const x = document.createElement(t); if (css) x.style.cssText = css; if (txt) x.textContent = txt; return x; };
    const ov = el("div", "position:fixed;inset:0;z-index:100;background:var(--bg,#eef1ee);display:flex;align-items:center;justify-content:center;padding:16px");
    const form = el("form", "width:100%;max-width:340px;display:grid;gap:12px;background:var(--paper,#fff);border:1px solid var(--line,#ddd);border-radius:14px;padding:20px");
    const t = el("div", "font-family:var(--font-display,sans-serif);font-weight:700;font-size:24px;text-transform:uppercase;letter-spacing:.03em", "Chico Maria");
    const p = el("div", "color:var(--muted,#666);font-size:14px", "Escreva o código da equipa. Só é preciso uma vez neste telemóvel.");
    const inp = el("input", "padding:12px;font-size:20px;border:1px solid var(--line,#ccc);border-radius:10px;background:var(--paper,#fff);color:var(--ink,#000)");
    inp.type = "password"; inp.autocomplete = "current-password"; inp.setAttribute("aria-label", "Código da equipa"); inp.placeholder = "Código da equipa";
    const err = el("div", "color:var(--warn,#a5532a);font-size:14px;min-height:18px");
    const b = el("button", "padding:12px;border:0;border-radius:10px;background:var(--accent,#2a47a8);color:#fff;font-weight:700;font-size:16px", "Entrar");
    b.type = "submit";
    form.append(t, p, inp, err, b); ov.append(form); document.body.append(ov); inp.focus();
    form.addEventListener("submit", async (ev) => {
      ev.preventDefault();
      if (!inp.value.trim()) { err.textContent = "Escreva o código."; return; }
      b.disabled = true; b.textContent = "A verificar…"; err.textContent = "";
      const { error } = await sb.auth.signInWithPassword({ email: TEAM_EMAIL, password: inp.value.trim() });
      if (error) { b.disabled = false; b.textContent = "Entrar"; err.textContent = /fetch|network/i.test(error.message || "") ? "Sem internet. Tente de novo." : "Código errado."; inp.select(); return; }
      ov.remove(); resolve();
    });
  });
}
// rows: array of arrays; first row is the header. Semicolons and a BOM so Excel in Portugal opens it straight away.
function downloadCsv(filename, rows) {
  const esc = (v) => { v = v == null ? "" : String(v); return /[;"\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
  const csv = "﻿" + rows.map((r) => r.map(esc).join(";")).join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a"); a.href = url; a.download = filename; document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}
