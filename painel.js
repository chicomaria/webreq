// Shared by the kitchen/management pages (fichas, fornecedores, manual, vinhos, redes, mercearia):
// one-off data loading from dados.js, an edit form in a sheet, and number formatting.

// Applies each entry of window.DADOS once per database (recorded in config/dados).
// novos: only creates documents that do not exist yet, so the team's edits are never overwritten.
// atualizar: merges the given fields; apagar: deletes. Returns when done.
async function aplicarDados(db) {
  const lista = window.DADOS || [];
  if (!lista.length) return;
  const cfg = await db.carregar("config");
  const feitas = new Set(((cfg.get("dados") || {}).feitas) || []);
  const falta = lista.filter((d) => !feitas.has(d.id));
  if (!falta.length) return;
  const sub = $("sub"), antes = sub ? sub.textContent : "";
  if (sub) sub.textContent = "A preparar os dados…";
  for (const d of falta) {
    const rows = [];
    for (const [col, docs] of Object.entries(d.novos || {})) {
      const existe = col === "config" ? cfg : await db.carregar(col);
      for (const [id, data] of Object.entries(docs)) if (!existe.has(id)) rows.push({ col, id, data });
    }
    if (rows.length) await db.gravarVarios(rows);
    for (const [col, docs] of Object.entries(d.atualizar || {})) for (const [id, patch] of Object.entries(docs)) await db.collection(col).doc(id).update(patch);
    for (const [col, ids] of Object.entries(d.apagar || {})) for (const id of ids) await db.collection(col).doc(id).delete();
    feitas.add(d.id);
    await db.doc("config/dados").set({ feitas: [...feitas] });
  }
  if (sub) sub.textContent = antes;
}

// Common start of every page: connect, load the data file, then hand over the db (null when offline).
async function abrirPainel() {
  const db = await abrirDb();
  if (!db) { $("sub").textContent = "Sem ligação"; return null; }
  try { await aplicarDados(db); } catch (e) { toast("Não foi possível carregar os dados iniciais."); }
  return db;
}

const eur = (v, casas = 2) => v == null || v === "" || isNaN(v) ? "—" : Number(v).toLocaleString("pt-PT", { minimumFractionDigits: casas, maximumFractionDigits: casas }) + " €";
const num = (s) => { if (s == null) return null; s = String(s).trim().replace(/\s/g, "").replace("€", "").replace(",", "."); return s === "" || isNaN(Number(s)) ? null : Number(s); };
const fmtNum = (v, casas = 3) => v == null ? "" : Number(v).toLocaleString("pt-PT", { maximumFractionDigits: casas });
const norm = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
const slugId = (s) => norm(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || newId();
const linkHref = (u) => !u ? null : /^https?:\/\//i.test(u) ? u : "https://" + u;

// Edit sheet. campos: [{k, label, tipo: text|textarea|number|select|check|url|email|tel, opcoes, dica, lista}]
// guardar(data) and apagar() are async; the sheet closes when they succeed.
function abrirEditor({ titulo, campos, dados, guardar, apagar, extra }) {
  const d = dados || {}, inputs = {};
  const form = h("form", { class: "form" });
  for (const c of campos) {
    const v = d[c.k];
    let el;
    if (c.tipo === "textarea") el = h("textarea", { rows: c.rows || 3 }, v == null ? "" : String(v));
    else if (c.tipo === "select") el = h("select", {}, c.opcoes.map(([val, lab]) => h("option", { value: val, selected: String(v ?? "") === val }, lab)));
    else if (c.tipo === "check") el = h("input", { type: "checkbox", checked: !!v });
    else el = h("input", { type: c.tipo === "number" ? "text" : (c.tipo || "text"), inputmode: c.tipo === "number" ? "decimal" : null, list: c.lista || null,
      value: v == null ? "" : (c.tipo === "number" ? String(v).replace(".", ",") : String(v)), autocomplete: "off" });
    inputs[c.k] = el;
    form.append(c.tipo === "check" ? h("label", { class: "chk" }, el, c.label) : h("label", {}, c.label, el, c.dica ? h("small", { class: "dica", text: c.dica }) : null));
  }
  if (extra) form.append(extra);
  const err = h("p", { class: "note", style: "color:var(--warn)" }); err.hidden = true;
  const ok = h("button", { type: "submit", class: "btn primary" }, "Guardar");
  const ov = h("div", { class: "overlay", role: "dialog", "aria-modal": "true", "aria-label": titulo });
  const fechar = () => { ov.remove(); document.removeEventListener("keydown", esc); };
  const esc = (e) => { if (e.key === "Escape") fechar(); };
  form.append(err, h("div", { class: "row-actions" },
    apagar ? confirmBtn("Apagar", "Toque de novo para apagar", async () => { try { await apagar(); fechar(); toast("Apagado"); } catch (e) { toast("Não foi possível apagar."); } }, "left") : null,
    h("button", { type: "button", class: "btn", onclick: fechar }, "Cancelar"), ok));
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const out = {};
    for (const c of campos) {
      const el = inputs[c.k];
      out[c.k] = c.tipo === "check" ? el.checked : c.tipo === "number" ? num(el.value) : el.value.trim();
      if (c.tipo === "number" && el.value.trim() !== "" && out[c.k] == null) { err.textContent = c.label + ": escreva só o número."; err.hidden = false; el.focus(); return; }
    }
    if (campos[0] && campos[0].obrigatorio !== false && !out[campos[0].k] && campos[0].tipo !== "check" && campos[0].tipo !== "select") { err.textContent = "Preencha " + campos[0].label.toLowerCase() + "."; err.hidden = false; return; }
    ok.disabled = true;
    try { await guardar(out); fechar(); toast("Guardado"); } catch (e) { ok.disabled = false; err.textContent = "Não foi possível guardar. Tente de novo."; err.hidden = false; }
  });
  ov.addEventListener("click", (e) => { if (e.target === ov) fechar(); });
  document.addEventListener("keydown", esc);
  ov.append(h("div", { class: "panel" }, h("h3", { class: "ptit", text: titulo }), form));
  document.body.append(ov);
  const first = form.querySelector("input,textarea,select"); if (first && window.innerWidth > 700) first.focus();
  return { fechar, inputs };
}

// Re-render without stealing focus from someone typing in a sheet.
function agendar(render) {
  let t;
  const tentar = () => { if (document.querySelector(".overlay")) t = setTimeout(tentar, 300); else render(); };
  return () => { clearTimeout(t); t = setTimeout(tentar, 60); };
}
