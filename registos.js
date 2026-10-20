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
// weeks before the page existed have no receção record (nobody could validate them)
const RECECAO_DESDE = "2026-10-19";
// An order is delivered the same week; one closed on Saturday or Sunday arrives the following week.
function semanaDaEncomenda(iso) {
  const dia = diaKey(iso), w = new Date(dia + "T12:00").getDay();
  return segundaDe(w === 6 ? somaDias(dia, 2) : w === 0 ? somaDias(dia, 1) : dia);
}
// lots can be validated until Saturday night; then the ones left are taken as conforme
const prazoSemana = (seg) => new Date(somaDias(seg, 6) + "T00:00");
const fornecedorDe = (l) => String(l.fornecedor || "").trim() || "Sem fornecedor";
const idRececao = (seg, fornecedor) => seg + "_" + slugReg(fornecedor);
const fmtQtd = (v) => v == null || v === "" ? "" : Number(v).toLocaleString("pt-PT", { maximumFractionDigits: 3 });
const textoArtigos = (itens) => itens.map((l) => l.nome + (l.qtd ? " " + fmtQtd(l.qtd) + (l.unidade ? " " + l.unidade : "") : "")).join(" · ");

// suppliers with ordered articles in a week: [{ fornecedor, itens: [{ pid, nome, qtd, unidade, enc }], encs: [order ids] }]
// (spellings that differ only in case or accents are one supplier, as they share one record)
function fornecedoresDaSemana(encomendas, seg) {
  const by = new Map();
  for (const e of encomendas) {
    if (!e.criada || semanaDaEncomenda(e.criada) !== seg) continue;
    for (const l of e.itens || []) {
      const f = fornecedorDe(l), k = slugReg(f);
      if (!by.has(k)) by.set(k, { fornecedor: f, itens: [], encs: new Set() });
      const g = by.get(k); g.itens.push({ ...l, enc: e.id }); g.encs.add(e.id);
    }
  }
  return [...by.values()].map((g) => ({ ...g, encs: [...g.encs] }))
    .sort((a, b) => (a.fornecedor === "Sem fornecedor") - (b.fornecedor === "Sem fornecedor") || a.fornecedor.localeCompare(b.fornecedor, "pt"));
}
// each supplier of the week with its state: conforme | nao_conforme (validated), auto (deadline passed), pendente.
// A validation covers the orders it saw (encs): an order closed after it is a new lot and needs its own check.
// A record whose orders were deleted stays in the list (history), with the articles it saved.
function rececaoDaSemana(encomendas, rececoes, seg, agora) {
  const reg = new Map(rececoes.filter((r) => r.semana === seg).map((r) => [r.id, r]));
  const passou = (agora || new Date()) >= prazoSemana(seg);
  const out = fornecedoresDaSemana(encomendas, seg).map((g) => {
    const id = idRececao(seg, g.fornecedor), r = reg.get(id) || null;
    reg.delete(id);
    const novas = r ? g.encs.filter((e) => !(r.encs || []).includes(e)) : g.encs;
    return { ...g, id, registo: r, novas, estado: r && (!novas.length || passou) ? r.estado : passou ? "auto" : "pendente" };
  });
  for (const r of reg.values()) out.push({ fornecedor: r.fornecedor, itens: [], encs: [], id: r.id, registo: r, novas: [], estado: r.estado, semEncomenda: true });
  return out;
}
const semanasComEncomendas = (encomendas) => [...new Set(encomendas.filter((e) => e.criada).map((e) => semanaDaEncomenda(e.criada)))].filter((s) => s >= RECECAO_DESDE).sort().reverse();
// weeks for the history: with orders, or with records kept after their orders were deleted
const semanasDaRececao = (encomendas, rececoes) => [...new Set([...semanasComEncomendas(encomendas), ...rececoes.map((r) => r.semana).filter(Boolean)])].sort().reverse();
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
// shifts started before this day are left as they were (an open one stays "falta" for a manager to fix)
const SAIDA_AUTO_DESDE = "2026-10-19";
// a shift nobody closed ends at 01:00, the first 01:00 after the entrada
function limiteSaida(iso) { const d = new Date(iso), l = new Date(d); l.setHours(1, 0, 0, 0); if (l <= d) l.setDate(l.getDate() + 1); return l; }
// until 06:00 that night someone closed automatically can still clock out: the tap replaces the 01:00
const fimSaidaTardia = (lim) => { const f = new Date(lim); f.setHours(6, 0, 0, 0); return f; };
const comSaidaAuto = (p) => diaKey(p.em) >= SAIDA_AUTO_DESDE;
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
      if (p.tipo !== "entrada" || !comSaidaAuto(p)) return;
      const lim = limiteSaida(p.em), next = ps[i + 1];
      if (now < lim || (next && (next.tipo !== "entrada" || new Date(next.em) <= lim))) return;
      const em = lim.toISOString();
      out.push({ id: "auto-" + p.id, data: { pessoa: p.pessoa, nome: p.nome, extra: !!p.extra, tipo: "saida", em, dia: diaKey(em), mes: mesKey(em), auto: true } });
    });
  }
  return out;
}
// writes them. A phone that slept holds a copy that can be hours old, so the decision is taken again on a fresh read,
// and the write never replaces a document with that id (a late exit or a correction made in the meantime).
let fechoEmCurso = false, fechoFalhou = 0;
async function fecharTurnosAbertos(db, pics) {
  if (fechoEmCurso || Date.now() - fechoFalhou < 5 * 60e3 || !saidasAutomaticas(pics).length) return;
  fechoEmCurso = true;
  try {
    const m = await db.carregar("picagens");
    const frescas = [...m].map(([id, d]) => ({ id, ...d }));
    for (const s of saidasAutomaticas(frescas)) if (!m.has(s.id)) await db.collection("picagens").doc(s.id).criar(s.data);
  } catch (e) { fechoFalhou = Date.now(); }
  fechoEmCurso = false;
}
