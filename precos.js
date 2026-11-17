// One price per article. The order app's articles (produtos) hold the price; a recipe ingredient (ingredientes) or a wine
// (vinhos) can point to an article (field artigo) and then takes its price, converted to the unit it counts in.
// Also: finding an article that looks like an ingredient or a wine, and a supplier's sheet from the name the articles use.

const normP = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
// units an article can be priced in, as [base unit, factor]: 1 g = 0.001 kg
const UNID_BASE = { kg: ["kg", 1], g: ["kg", 0.001], l: ["l", 1], lt: ["l", 1], cl: ["l", 0.01], ml: ["l", 0.001], un: ["un", 1], uni: ["un", 1], unid: ["un", 1] };
const baseDe = (u) => UNID_BASE[normP(u).replace(/\.$/, "")] || null;
// what one piece of the article holds (a 70 cl bottle, a 2 kg bag): the conteudo field ("70 cl"), else read from the name
function conteudoDe(p) {
  const ler = (t) => {
    const m = String(t || "").replace(/(\d),(\d)/g, "$1.$2").match(/(\d+(?:\.\d+)?)\s*(kg|g|lt|l|cl|ml)(?![a-z])/i);
    if (!m) return null;
    const b = baseDe(m[2]);
    return b && Number(m[1]) > 0 ? { qtd: Number(m[1]) * b[1], base: b[0] } : null;
  };
  return ler(p && p.conteudo) || ler(p && p.nome);
}
// price of article p per Kg, L or un (the units the recipe sheets count in); null when the units cannot be compared
function precoArtigoPor(p, alvo) {
  if (!p || p.preco == null || p.preco === "" || isNaN(Number(p.preco))) return null;
  const a = baseDe(alvo); if (!a) return null;
  const b = baseDe(p.precoUnidade || p.unidade);
  if (b && b[0] === a[0]) return Number(p.preco) / b[1] * a[1];
  // priced per piece (un, saco, caixa, garrafa): through what one piece holds
  if (!b || b[0] === "un") { const c = conteudoDe(p); if (c && c.base === a[0]) return Number(p.preco) / c.qtd * a[1]; }
  return null;
}
const unidadePreco = (p) => p.precoUnidade || p.unidade || "";

// ---------- looking for the article that matches a name ----------
const VAZIAS = new Set(["de", "da", "do", "das", "dos", "e", "em", "com", "para", "a", "o", "the", "cl", "ml", "kg", "g", "l", "lt", "un", "uni"]);
const palavras = (s) => normP(s).replace(/[^a-z0-9]+/g, " ").split(" ").filter((w) => w.length > 1 && !VAZIAS.has(w) && !/^\d+([.,]\d+)?$/.test(w)).map((w) => w.length > 3 ? w.replace(/s$/, "") : w);
// 0 to 1: same id or name, every word of the name in the article's, or words in common; preco: a price that should match (wines)
function parecenca(nome, id, p, preco) {
  if (!p || !p.nome) return 0;
  let s;
  // same id, or an id that ends with the article's (bar-gin-adamvs and gin-adamvs); one-word ids (cafe, lima) are too loose for that
  if (id && (id === p.id || (p.id.includes("-") && id.endsWith("-" + p.id)))) s = 1;
  else if (normP(nome) === normP(p.nome)) s = 0.95;
  else {
    const a = palavras(nome), b = palavras(p.nome), sb = new Set(b), comuns = a.filter((w) => sb.has(w)).length;
    if (!a.length || !comuns) s = 0;
    else if (comuns === a.length) s = 0.6 + 0.3 * a.length / Math.max(b.length, a.length);
    else s = 0.55 * comuns / new Set([...a, ...b]).size;
  }
  if (s > 0 && preco != null && p.preco != null && Math.abs(Number(preco) - Number(p.preco)) < 0.01) s = Math.min(1, s + 0.3);
  return s;
}
// the articles that look most like a name, best first: [{ p, s }]
function artigosParecidos(nome, id, produtos, { preco, filtro, n } = {}) {
  return produtos.filter((p) => !filtro || filtro(p)).map((p) => ({ p, s: parecenca(nome, id, p, preco) })).filter((x) => x.s >= 0.35)
    .sort((a, b) => b.s - a.s || a.p.nome.length - b.p.nome.length).slice(0, n || 8);
}

// ---------- suppliers: the sheet behind a name used in the articles ----------
function mapaFornecedores(forn) { const m = new Map(); for (const f of forn) for (const n of [f.nome, ...(f.nomesApp || [])]) if (n) m.set(normP(n), f); return m; }
// the name an article stores for a supplier sheet: the first "nome na app" (as the team writes it), else the sheet's name
const nomeNaApp = (f) => (f.nomesApp || []).find(Boolean) || f.nome;
// phone numbers of a sheet without spaces or the +351 prefix; a mobile (9…) is the one WhatsApp can reach
const telefonesDe = (f) => String((f && f.telefone) || "").split(/[·;,/]| ou /).map((t) => t.replace(/[^\d+]/g, "").replace(/^(\+|00)351/, "")).filter((t) => /^\d{9}$/.test(t));
const telemovelDe = (f) => telefonesDe(f).find((t) => t[0] === "9") || null;

// ---------- sheets (pages with ui.js and painel.js: h, toast, eur) ----------
// an article as one line: name, supplier, its price, and the price it gives per un
const linhaArtigo = (p, un) => { const v = precoArtigoPor(p, un); return [p.nome, p.fornecedor, p.preco == null || p.preco === "" ? "sem preço" : eur(p.preco) + "/" + unidadePreco(p), v == null ? "unidade diferente de " + un : "= " + eur(v) + "/" + un].filter(Boolean).join(" · "); };
const folha = (titulo, ...corpo) => {
  const ov = h("div", { class: "overlay", role: "dialog", "aria-modal": "true", "aria-label": titulo, onclick: (e) => { if (e.target === ov) ov.remove(); } }, h("div", { class: "panel" }, h("h3", { class: "ptit", text: titulo }), ...corpo));
  document.body.append(ov); return ov;
};
// choose the article a record (doc id of collection col) takes its price from; un: the unit the record counts in
function abrirEscolhaArtigo({ db, produtos, col, id, nome, un, preco, depois }) {
  const busca = h("input", { type: "search", placeholder: "Procurar artigo", "aria-label": "Procurar artigo", style: "width:100%" });
  const lista = h("div", { class: "list", style: "margin-top:8px" });
  const ligar = async (p) => { try { await db.collection(col).doc(id).update({ artigo: p.id }); toast("Ligado a " + p.nome); ov.remove(); if (depois) depois(); } catch (e) { toast("Não foi possível guardar."); } };
  const desenhar = () => {
    const q = normP(busca.value);
    const res = q ? produtos.filter((p) => normP(p.nome + " " + (p.fornecedor || "")).includes(q)).sort((a, b) => a.nome.localeCompare(b.nome, "pt")).slice(0, 40)
      : artigosParecidos(nome, id, produtos, { preco, n: 12 }).map((x) => x.p);
    lista.replaceChildren(...(res.length ? res.map((p) => h("button", { type: "button", class: "card item click", style: "text-align:left;width:100%", onclick: () => ligar(p) }, h("strong", { text: p.nome }), h("span", { class: "s", style: "display:block", text: linhaArtigo(p, un) })))
      : [h("p", { class: "note", text: q ? "Nenhum artigo com esse nome." : "Nenhum artigo parecido. Procure pelo nome." })]));
  };
  busca.addEventListener("input", desenhar); desenhar();
  const ov = folha("Artigo das encomendas para " + nome, busca, lista,
    h("div", { class: "row-actions", style: "margin-top:12px" }, h("button", { type: "button", class: "btn", onclick: () => ov.remove() }, "Cancelar")));
  if (window.innerWidth > 700) busca.focus();
}
// one sheet with every record that has a likely article: itens [{ id, nome, un, proprio (own price), sug: { p, s } }].
// Ticked: nearly the same name, or the same words and the same price; the rest waits for a tap.
const marcarLigacao = (x) => { const v = precoArtigoPor(x.sug.p, x.un); if (v == null) return false; const perto = x.proprio != null && Math.abs(v - x.proprio) <= Math.max(0.01, 0.02 * x.proprio); return x.sug.s >= 0.9 || (x.sug.s >= 0.75 && perto); };
function abrirRevisaoLigacoes({ db, col, itens, nota }) {
  const caixas = itens.map((x) => {
    const conv = precoArtigoPor(x.sug.p, x.un) != null;
    const cb = h("input", { type: "checkbox", checked: marcarLigacao(x) });
    return { x, cb, el: h("label", { class: "chk", style: "align-items:flex-start;padding:8px 0;border-top:1px solid var(--line)" }, cb,
      h("span", {}, h("b", { text: x.nome }), h("small", { style: "display:block;color:var(--muted)", text: "Agora: " + (x.proprio == null ? "sem preço" : eur(x.proprio) + "/" + x.un) }),
        h("small", { style: "display:block;color:" + (conv ? "var(--ink)" : "var(--warn)"), text: "Artigo: " + linhaArtigo(x.sug.p, x.un) }))) };
  });
  const ok = h("button", { type: "button", class: "btn primary" }, "Ligar os marcados");
  const conta = () => { const n = caixas.filter((c) => c.cb.checked).length; ok.textContent = n ? "Ligar " + n + (n === 1 ? " marcado" : " marcados") : "Ligar os marcados"; ok.disabled = !n; };
  caixas.forEach((c) => c.cb.addEventListener("change", conta)); conta();
  const ov = folha("Ligar aos artigos das encomendas",
    h("p", { class: "note", style: "margin:0 0 8px", text: nota }),
    h("div", { class: "form", style: "gap:0" }, caixas.map((c) => c.el)),
    h("div", { class: "row-actions", style: "margin-top:12px" }, h("button", { type: "button", class: "btn", onclick: () => ov.remove() }, "Cancelar"), ok));
  ok.addEventListener("click", async () => {
    ok.disabled = true; ok.textContent = "A ligar…";
    try { for (const c of caixas) if (c.cb.checked) await db.collection(col).doc(c.x.id).update({ artigo: c.x.sug.p.id }); toast("Ligados"); ov.remove(); }
    catch (e) { conta(); toast("Não foi possível guardar. Tente de novo."); }
  });
}
