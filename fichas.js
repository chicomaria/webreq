// Recipe sheets (collection `fichas`) and the ingredient price list (`ingredientes`), shared by
// pratos.html, cocktails.html and the Preços tab of fornecedores.html.
// fichasComuns(S, render): S holds { db, fichas: [], ing: Map, sel }, render() redraws the page.

const pctTxt = (p) => p == null ? "" : Math.round(p * 100) + "%";
const UNIDADES = [["Kg", "Kg"], ["L", "L"], ["un", "un"]];
const TIPOS_FICHA = [["prato", "Prato"], ["cocktail", "Cocktail"]];
const paginaFicha = (f) => (f.tipo === "cocktail" ? "cocktails.html#" : "pratos.html#") + encodeURIComponent(f.id);

// quantity as the kitchen and the bar read it: cL, g, units, or the written measure ("q.b.", "8 a 10 folhas")
function medidaTxt(r, i) {
  if (r.medida) return r.medida;
  if (r.qtd == null) return "?";
  const u = (i && i.unidade || "").toLowerCase();
  if (u === "l") return fmtNum(r.qtd * 100, 1) + " cL";
  if (u === "kg") return fmtNum(r.qtd * 1000, 0) + " g";
  return fmtNum(r.qtd);
}
// numbered steps written one per line ("1. Encher…")
const passos = (t) => String(t || "").split("\n").map((x) => x.replace(/^\s*\d+[.)]\s*/, "").trim()).filter(Boolean);

function fichasComuns(S, render) {
  // cost of a sheet; a line with a written measure and no number ("q.b.") is not missing
  function custo(f) {
    let total = 0, falta = 0;
    for (const r of f.ingredientes || []) {
      const i = S.ing.get(r.ing);
      if (r.qtd == null && r.medida) continue;
      if (!i || i.preco == null || r.qtd == null) { falta++; continue; }
      total += r.qtd * i.preco;
    }
    const dose = f.doses ? total / f.doses : total;
    return { total, dose, falta, pct: f.pvp ? dose / f.pvp : null, sugerido: Math.ceil(dose * 3) };
  }
  const gravarFicha = (f, patch) => { const { id, ...d } = f; return S.db.collection("fichas").doc(id).set({ ...d, ...patch }); };
  const abrir = (f) => { S.sel = f.id; render(); window.scrollTo(0, 0); };

  // detail of one sheet: costs, ingredient lines (tap to change) and the method
  function viewFicha(f, { voltar, acoes } = {}) {
    const frag = document.createDocumentFragment();
    const k = custo(f), cocktail = f.tipo === "cocktail";
    frag.append(h("div", { class: "tools" }, h("button", { class: "btn", onclick: () => { S.sel = null; render(); } }, voltar || "‹ Voltar"),
      h("span", { style: "flex:1" }), acoes || null, h("button", { class: "btn", onclick: () => editarFicha(f) }, "Editar dados")));
    frag.append(h("div", { class: "card fhead" },
      h("div", { class: "s", style: "color:var(--muted);font-size:13px", text: [cocktail ? "Cocktail" : f.categoria, (f.doses || 1) + (f.doses > 1 ? " doses" : " dose")].filter(Boolean).join(" · ") }),
      h("h2", { text: f.nome }),
      h("div", { class: "kpis" },
        h("div", { class: "kpi" }, h("b", { text: eur(k.total) }), h("span", { text: "Custo receita" })),
        h("div", { class: "kpi" }, h("b", { text: eur(k.dose) }), h("span", { text: "Custo por dose" })),
        h("div", { class: "kpi" }, h("b", { text: f.pvp ? eur(f.pvp) : "—" }), h("span", { text: "PVP" + (f.pvp ? " · " + pctTxt(k.pct) : "") })),
        h("div", { class: "kpi" }, h("b", { text: k.dose ? eur(k.sugerido, 0) : "—" }), h("span", { text: "PVP sugerido (×3)" }))),
      f.obs ? h("p", { class: "note", style: "margin:2px 0 0", text: f.obs }) : null));
    frag.append(h("h2", { class: "sec" }, "Ingredientes", h("small", { text: "toque numa linha para mudar" })));
    const tb = h("tbody");
    (f.ingredientes || []).forEach((r, idx) => {
      const i = S.ing.get(r.ing) || { nome: r.ing + " (apagado)", unidade: "" };
      const tot = i.preco != null && r.qtd != null ? r.qtd * i.preco : null;
      tb.append(h("tr", { class: "tap", onclick: () => editarLinha(f, idx) },
        h("td", {}, i.nome, r.nota ? h("small", { class: "nt", text: " " + r.nota }) : null),
        h("td", { class: "n" }, r.qtd == null ? (r.medida ? r.medida : h("span", { class: "falta", text: "?" })) : fmtNum(r.qtd)), h("td", { text: i.unidade || "" }),
        h("td", { class: "n" }, i.preco == null ? h("span", { class: "falta", text: "sem preço" }) : eur(i.preco)), h("td", { class: "n", text: tot == null ? "—" : eur(tot) })));
    });
    const tbl = h("table", { class: "data" }, h("thead", {}, h("tr", {}, h("th", { text: "Ingrediente" }), h("th", { class: "n", text: "Qtd" }), h("th", { text: "Un" }), h("th", { class: "n", text: "Preço" }), h("th", { class: "n", text: "Total" }))),
      tb, h("tfoot", {}, h("tr", {}, h("td", { colspan: 4, text: "Total" + (k.falta ? " (" + k.falta + " sem preço ou quantidade)" : "") }), h("td", { class: "n", text: eur(k.total) }))));
    frag.append(h("div", { class: "card scroll" }, (f.ingredientes || []).length ? tbl : h("div", { class: "empty", text: "Ainda sem ingredientes." })));
    frag.append(h("div", { class: "tools" }, h("button", { class: "btn", onclick: () => editarLinha(f, -1) }, "+ Ingrediente"),
      h("a", { class: "note", href: "fornecedores.html#precos" }, "Os preços mudam-se em Fornecedores e preços ›")));
    frag.append(h("h2", { class: "sec" }, cocktail ? "Método" : "Preparação", h("button", { class: "btn", onclick: () => editarPrep(f) }, "Editar")));
    frag.append(h("div", { class: "card" }, f.preparacao ? h("pre", { class: "prep", text: f.preparacao }) : h("div", { class: "empty", text: "Sem preparação escrita." })));
    return frag;
  }

  function camposFicha(tipo) {
    const comuns = [{ k: "nome", label: "Nome" }, { k: "tipo", label: "Tipo", tipo: "select", opcoes: TIPOS_FICHA }];
    if (tipo === "cocktail") return [...comuns, { k: "pvp", label: "PVP (€)", tipo: "number" }, { k: "copo", label: "Copo" }, { k: "guarnicao", label: "Guarnição" },
      { k: "historia", label: "História", tipo: "textarea", rows: 3 }, { k: "dicas", label: "Dicas (uma por linha)", tipo: "textarea", rows: 3 },
      { k: "obs", label: "Observações", tipo: "textarea" }];
    return [...comuns, { k: "categoria", label: "Secção da carta", lista: "cats", dica: "Sustento, Paparicos, Comedeirices ou Lambarices" },
      { k: "atual", label: "Prato da carta atual", tipo: "check" },
      { k: "doses", label: "N.º de doses que a receita rende", tipo: "number" }, { k: "pvp", label: "PVP (€)", tipo: "number" },
      { k: "obs", label: "Observações", tipo: "textarea" }];
  }
  // cocktails are one dose with no menu section; a sheet turned from cocktail into dish loses "Coquetéis"
  const porTipo = (d, antes = {}) => d.tipo === "cocktail" ? { ...d, categoria: "Coquetéis", doses: 1 }
    : { ...d, categoria: d.categoria ?? (antes.tipo === "cocktail" ? "" : antes.categoria || ""), doses: d.doses || 1 };
  const outraPagina = (a, b) => (a === "cocktail") !== (b === "cocktail");
  function editarFicha(f) {
    abrirEditor({ titulo: "Editar ficha", campos: camposFicha(f.tipo), dados: f,
      guardar: async (d) => {
        await gravarFicha(f, porTipo(d, f));
        if (outraPagina(d.tipo, f.tipo)) location.href = paginaFicha({ id: f.id, tipo: d.tipo });
      },
      apagar: async () => { await S.db.collection("fichas").doc(f.id).delete(); S.sel = null; render(); } });
  }
  function novaFicha(tipo, dados) {
    abrirEditor({ titulo: tipo === "cocktail" ? "Novo cocktail" : "Nova ficha", campos: camposFicha(tipo), dados: { tipo, doses: 1, ...dados },
      guardar: async (d) => {
        let id = slugId(d.nome); while (S.fichas.some((x) => x.id === id)) id += "-2";
        await S.db.collection("fichas").doc(id).set({ ...porTipo(d), ingredientes: [], preparacao: "" });
        if (outraPagina(d.tipo, tipo)) { location.href = paginaFicha({ id, tipo: d.tipo }); return; }
        S.sel = id;
      } });
  }
  function editarPrep(f) {
    abrirEditor({ titulo: f.tipo === "cocktail" ? "Método" : "Preparação", campos: [{ k: "preparacao", label: "Passos (um por linha)", tipo: "textarea", rows: 16, obrigatorio: false }], dados: f, guardar: (d) => gravarFicha(f, d) });
  }
  // one ingredient line; a name that is not in the price list creates a new ingredient
  function editarLinha(f, idx) {
    const r = idx >= 0 ? f.ingredientes[idx] : { ing: "", qtd: null };
    const i = S.ing.get(r.ing);
    abrirEditor({ titulo: idx >= 0 ? "Ingrediente" : "Juntar ingrediente", dados: { nome: i ? i.nome : "", qtd: r.qtd, medida: r.medida || "", nota: r.nota || "", unidade: i ? i.unidade : (f.tipo === "cocktail" ? "L" : "Kg"), preco: i ? i.preco : null },
      campos: [{ k: "nome", label: "Ingrediente", lista: "ing-nomes", dica: "Escolha da lista. Um nome novo junta-o à lista de preços." },
        { k: "qtd", label: "Quantidade na receita", tipo: "number", dica: f.tipo === "cocktail" ? "Na unidade do ingrediente: 5 cL = 0,05 L." : null },
        { k: "medida", label: "Medida escrita (opcional)", dica: "Mostra isto em vez do número, ex.: q.b., 2 colheres de bar, 8 a 10 folhas." },
        { k: "nota", label: "Nota (opcional)", dica: "Ex.: fresco, opcional, em cubo." },
        { k: "unidade", label: "Unidade (só para ingrediente novo)", tipo: "select", opcoes: UNIDADES },
        { k: "preco", label: "Preço por unidade € (só para ingrediente novo)", tipo: "number" }],
      apagar: idx >= 0 ? () => gravarFicha(f, { ingredientes: f.ingredientes.filter((_, j) => j !== idx) }) : null,
      guardar: async (d) => {
        let id = [...S.ing].find(([, x]) => norm(x.nome) === norm(d.nome));
        id = id ? id[0] : null;
        if (!id) {
          id = slugId(d.nome); while (S.ing.has(id)) id += "-2";
          await S.db.collection("ingredientes").doc(id).set({ nome: d.nome, grupo: f.tipo === "cocktail" ? "Bar" : "Outros", unidade: d.unidade, preco: d.preco, fornecedor: "" });
        }
        const lin = [...(f.ingredientes || [])], nova = { ing: id, qtd: d.qtd };
        if (d.medida) nova.medida = d.medida;
        if (d.nota) nova.nota = d.nota;
        if (idx >= 0) lin[idx] = nova; else lin.push(nova);
        await gravarFicha(f, { ingredientes: lin });
      } });
  }

  // price list by group; changing a price here updates every sheet that uses it
  function viewIng() {
    const frag = document.createDocumentFragment();
    const uso = new Map();
    for (const f of S.fichas) for (const r of f.ingredientes || []) uso.set(r.ing, (uso.get(r.ing) || 0) + 1);
    const q = norm(S.qi);
    const busca = h("input", { type: "search", placeholder: "Procurar ingrediente ou fornecedor", value: S.qi || "", "aria-label": "Procurar ingrediente" });
    busca.addEventListener("input", () => { S.qi = busca.value; const p = busca.selectionStart; render(); const b = document.querySelector("input[type=search]"); b.focus(); b.setSelectionRange(p, p); });
    frag.append(h("div", { class: "tools" }, busca, h("button", { class: "btn primary", onclick: () => editarIng(null) }, "+ Ingrediente"),
      h("button", { class: "btn", onclick: () => downloadCsv("precos-ingredientes.csv", [["Ingrediente", "Grupo", "Unidade", "Preço (€)", "Fornecedor", "Fichas"], ...[...S.ing].map(([id, i]) => [i.nome, i.grupo, i.unidade, i.preco == null ? "" : String(i.preco).replace(".", ","), i.fornecedor, uso.get(id) || 0])]) }, "Excel")));
    const semPreco = [...S.ing.keys()].filter((id) => S.ing.get(id).preco == null && uso.get(id)).length;
    frag.append(h("p", { class: "note", text: "Preços sem IVA dos ingredientes das fichas técnicas. Mudar um preço aqui atualiza o custo de todos os pratos e cocktails que o usam." +
      (semPreco ? " " + semPreco + (semPreco === 1 ? " ingrediente usado está" : " ingredientes usados estão") + " sem preço." : "") }));
    const ids = [...S.ing.keys()].filter((id) => !q || norm([S.ing.get(id).nome, S.ing.get(id).fornecedor].join(" ")).includes(q));
    const grupos = [...new Set(ids.map((id) => S.ing.get(id).grupo || "Outros"))].sort((a, b) => a.localeCompare(b, "pt"));
    for (const g of grupos) {
      const tb = h("tbody");
      ids.filter((id) => (S.ing.get(id).grupo || "Outros") === g).sort((a, b) => S.ing.get(a).nome.localeCompare(S.ing.get(b).nome, "pt")).forEach((id) => {
        const i = S.ing.get(id);
        tb.append(h("tr", { class: "tap", onclick: () => editarIng(id) }, h("td", {}, i.nome, i.fornecedor ? h("small", { text: " · " + i.fornecedor }) : null),
          h("td", { class: "n" }, i.preco == null ? h("span", { class: "falta", text: "sem preço" }) : eur(i.preco)), h("td", { text: "/" + (i.unidade || "?") }), h("td", { class: "n", text: uso.get(id) || "" })));
      });
      frag.append(h("h2", { class: "sec", text: g }), h("div", { class: "card scroll" }, h("table", { class: "data" },
        h("thead", {}, h("tr", {}, h("th", { text: "Ingrediente" }), h("th", { class: "n", text: "Preço" }), h("th", { text: "Un" }), h("th", { class: "n", text: "Fichas" }))), tb)));
    }
    if (!ids.length) frag.append(h("div", { class: "card empty" }, h("strong", { text: "Nenhum ingrediente encontrado" })));
    return frag;
  }
  function editarIng(id) {
    const i = id ? S.ing.get(id) : { unidade: "Kg", grupo: "" };
    const usam = id ? S.fichas.filter((f) => (f.ingredientes || []).some((r) => r.ing === id)).sort((a, b) => a.nome.localeCompare(b.nome, "pt")) : [];
    const topo = usam.length ? h("p", { class: "note", style: "margin:0 0 10px" }, "Usado em: ",
      usam.map((f, n) => [n ? ", " : "", h("a", { href: paginaFicha(f) }, f.nome)])) : null;
    abrirEditor({ titulo: id ? i.nome : "Novo ingrediente", dados: i, topo,
      campos: [{ k: "nome", label: "Nome" }, { k: "preco", label: "Preço sem IVA (€)", tipo: "number" }, { k: "unidade", label: "Por", tipo: "select", opcoes: UNIDADES },
        { k: "grupo", label: "Grupo", lista: "grupos-ing", dica: "Proteínas, Legumes, Bar…" }, { k: "fornecedor", label: "Fornecedor", lista: "forn-nomes" }, { k: "obs", label: "Notas", tipo: "textarea" }],
      apagar: id && !usam.length ? () => S.db.collection("ingredientes").doc(id).delete() : null,
      guardar: (d) => {
        let nid = id; if (!nid) { nid = slugId(d.nome); while (S.ing.has(nid)) nid += "-2"; }
        return S.db.collection("ingredientes").doc(nid).set({ ...i, ...d });
      } });
  }

  return { custo, abrir, viewFicha, editarFicha, novaFicha, editarPrep, editarLinha, viewIng, editarIng };
}
