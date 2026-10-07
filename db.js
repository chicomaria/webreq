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
  const local = (col) => cache.get(col) || cache.set(col, new Map()).get(col);
  const merge = (a, b) => {
    if (!a || typeof a !== "object" || Array.isArray(a) || !b || typeof b !== "object" || Array.isArray(b)) return b;
    const o = { ...a }; for (const k of Object.keys(b)) o[k] = merge(a[k], b[k]); return o;
  };
  function doc(col, id) {
    return {
      async set(data) { const { error } = await sb.from(T).upsert({ col, id, data, atualizado: new Date().toISOString() }); if (error) fail(error); local(col).set(id, data); emit(col); },
      async update(patch) { const { error } = await sb.rpc("doc_update", { p_col: col, p_id: id, p_patch: patch }); if (error) fail(error); const m = local(col); if (m.has(id)) { m.set(id, merge(m.get(id), patch)); emit(col); } },
      async delete() { const { error } = await sb.from(T).delete().eq("col", col).eq("id", id); if (error) fail(error); local(col).delete(id); emit(col); },
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
  return {
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

function openDb() {
  try { return supabaseDb(window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } })); } catch (e) { return null; }
}
// rows: array of arrays; first row is the header. Semicolons and a BOM so Excel in Portugal opens it straight away.
function downloadCsv(filename, rows) {
  const esc = (v) => { v = v == null ? "" : String(v); return /[;"\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v; };
  const csv = "﻿" + rows.map((r) => r.map(esc).join(";")).join("\r\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const a = document.createElement("a"); a.href = url; a.download = filename; document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}
