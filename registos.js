// Rules shared by the record pages (receção, limpezas, óleos, horários) and the summary bar on the home page.
// Everything here works on plain arrays of documents, so the pages and the home page reach the same answer.

const AREAS_LIMPEZA = [["bar", "Bar"], ["cozinha", "Cozinha"], ["arrumos", "Arrumos"], ["wc", "WC"]];
// cleaning is only taken as done at 18:00 from the day the page went live; earlier days stay empty
const LIMPEZAS_DESDE = "2026-10-20";
const HORA_LIMPEZA_ASSUMIDA = "18:00";

const hojeKey = () => diaKey(new Date().toISOString());
const somaDias = (dia, n) => { const d = new Date(dia + "T12:00"); d.setDate(d.getDate() + n); return diaKey(d.toISOString()); };
// weeks run Monday to Sunday and are named by their Monday (YYYY-MM-DD)
const segundaDe = (dia) => somaDias(dia, -((new Date(dia + "T12:00").getDay() + 6) % 7));
const fmtSemana = (seg) => {
  const a = new Date(seg + "T12:00"), b = new Date(somaDias(seg, 6) + "T12:00");
  const m = (d) => d.toLocaleDateString("pt-PT", { month: "short" }).replace(".", "");
  return a.getMonth() === b.getMonth() ? a.getDate() + " a " + b.getDate() + " " + m(b) : a.getDate() + " " + m(a) + " a " + b.getDate() + " " + m(b);
};
const slugReg = (s) => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "x";

// ---------- Receção de mercadorias ----------
// An order is delivered the same week; one closed on Saturday or Sunday arrives the following week.
function semanaDaEncomenda(iso) {
  const dia = diaKey(iso), w = new Date(dia + "T12:00").getDay();
  return segundaDe(w === 6 ? somaDias(dia, 2) : w === 0 ? somaDias(dia, 1) : dia);
}
// lots can be validated until Saturday night; then the ones left are taken as conforme
const prazoSemana = (seg) => new Date(somaDias(seg, 6) + "T00:00");
const fornecedorDe = (l) => String(l.fornecedor || "").trim() || "Sem fornecedor";
const idRececao = (seg, fornecedor) => seg + "_" + slugReg(fornecedor);

// suppliers with ordered articles in a week: [{ fornecedor, itens: [{ pid, nome, qtd, unidade, enc }], encs: [order ids] }]
function fornecedoresDaSemana(encomendas, seg) {
  const by = new Map();
  for (const e of encomendas) {
    if (!e.criada || semanaDaEncomenda(e.criada) !== seg) continue;
    for (const l of e.itens || []) {
      const f = fornecedorDe(l);
      if (!by.has(f)) by.set(f, { fornecedor: f, itens: [], encs: new Set() });
      const g = by.get(f); g.itens.push({ ...l, enc: e.id }); g.encs.add(e.id);
    }
  }
  return [...by.values()].map((g) => ({ ...g, encs: [...g.encs] }))
    .sort((a, b) => (a.fornecedor === "Sem fornecedor") - (b.fornecedor === "Sem fornecedor") || a.fornecedor.localeCompare(b.fornecedor, "pt"));
}
// each supplier of the week with its state: conforme | nao_conforme (validated), auto (deadline passed), pendente
function rececaoDaSemana(encomendas, rececoes, seg, agora) {
  const reg = new Map(rececoes.filter((r) => r.semana === seg).map((r) => [r.id, r]));
  const passou = (agora || new Date()) >= prazoSemana(seg);
  return fornecedoresDaSemana(encomendas, seg).map((g) => {
    const r = reg.get(idRececao(seg, g.fornecedor));
    return { ...g, registo: r || null, estado: r ? r.estado : passou ? "auto" : "pendente" };
  });
}
const semanasComEncomendas = (encomendas) => [...new Set(encomendas.filter((e) => e.criada).map((e) => semanaDaEncomenda(e.criada)))].sort().reverse();
// articles of closed orders not yet in: not ticked as received (validating a lot ticks its articles), until the week's deadline
function artigosPorEntregar(encomendas, agora) {
  const now = agora || new Date();
  let n = 0;
  for (const e of encomendas) {
    if (!e.criada || now >= prazoSemana(semanaDaEncomenda(e.criada))) continue;
    for (const l of e.itens || []) if (!(e.recebidos || {})[l.pid]) n++;
  }
  return n;
}

// ---------- Limpezas ----------
// the four areas of one day: registo (done by hand), or assumida (no record by midnight: taken as done at 18:00)
function limpezasDoDia(regs, dia) {
  const hoje = hojeKey();
  return AREAS_LIMPEZA.map(([id, nome]) => {
    const r = regs.find((x) => x.dia === dia && x.area === id) || null;
    return { id, nome, registo: r, assumida: !r && dia < hoje && dia >= LIMPEZAS_DESDE };
  });
}

// ---------- Óleos ----------
const TIPOS_OLEO = { substituicao: "Substituição de óleo", recolha: "Recolha de óleos" };
// the latest record of a type, and whether there was an oil change this week
const ultimoOleo = (regs, tipo) => regs.filter((r) => r.tipo === tipo).sort((a, b) => b.em.localeCompare(a.em))[0] || null;
const oleoNaSemana = (regs) => { const seg = segundaDe(hojeKey()); return regs.some((r) => r.tipo === "substituicao" && segundaDe(diaKey(r.em)) === seg); };

// ---------- Horários: automatic exit ----------
// a shift nobody closed ends at 01:00, the first 01:00 after the entrada
function limiteSaida(iso) { const d = new Date(iso), l = new Date(d); l.setHours(1, 0, 0, 0); if (l <= d) l.setDate(l.getDate() + 1); return l; }
// last clock event of each person
function ultimasPicagens(pics) {
  const last = new Map();
  for (const p of pics) if (p.em && p.pessoa && (!last.has(p.pessoa) || p.em > last.get(p.pessoa).em)) last.set(p.pessoa, p);
  return last;
}
// in the house: last event is an entrada whose 01:00 has not come yet
const aindaDentro = (p, agora) => !!p && p.tipo === "entrada" && (agora || new Date()) < limiteSaida(p.em);
const naCasa = (pics, agora) => [...ultimasPicagens(pics).values()].filter((p) => aindaDentro(p, agora));
// the saídas to add now: every entrada not followed by a saída gets one at its 01:00, once that hour has passed
// (an entrada followed by another entrada before 01:00 is a repeated tap, closed by the later one)
function saidasAutomaticas(pics, agora) {
  const now = agora || new Date(), by = new Map(), out = [];
  for (const p of pics) if (p.em && p.pessoa) { if (!by.has(p.pessoa)) by.set(p.pessoa, []); by.get(p.pessoa).push(p); }
  for (const ps of by.values()) {
    ps.sort((a, b) => a.em.localeCompare(b.em));
    ps.forEach((p, i) => {
      if (p.tipo !== "entrada") return;
      const lim = limiteSaida(p.em), next = ps[i + 1];
      if (now < lim || (next && (next.tipo !== "entrada" || new Date(next.em) <= lim))) return;
      const em = lim.toISOString();
      out.push({ id: "auto-" + p.id, data: { pessoa: p.pessoa, nome: p.nome, extra: !!p.extra, tipo: "saida", em, dia: diaKey(em), mes: mesKey(em), auto: true } });
    });
  }
  return out;
}
// writes them (the fixed id means two phones doing it at once write the same document)
const saidasFeitas = new Set();
function fecharTurnosAbertos(db, pics) {
  for (const s of saidasAutomaticas(pics)) {
    if (saidasFeitas.has(s.id)) continue;
    saidasFeitas.add(s.id);
    db.collection("picagens").doc(s.id).set(s.data).catch(() => saidasFeitas.delete(s.id));
  }
}
