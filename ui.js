// Small DOM helpers shared by the back office pages.
const $ = (id) => document.getElementById(id);
function h(tag, attrs, ...kids) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v == null || v === false) continue;
    if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else if (k === "class") el.className = v;
    else if (k === "text") el.textContent = v;
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (const c of kids.flat(Infinity)) if (c != null && c !== false) el.append(c.nodeType ? c : document.createTextNode(String(c)));
  return el;
}
function toast(msg) { const t = h("div", { class: "toast", role: "status", text: msg }); document.body.append(t); setTimeout(() => t.remove(), 2600); }
const pad = (n) => String(n).padStart(2, "0");
const hora = (iso) => { const d = new Date(iso); return pad(d.getHours()) + ":" + pad(d.getMinutes()); };
const diaKey = (iso) => { const d = new Date(iso); return d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate()); };
const mesKey = (iso) => diaKey(iso).slice(0, 7);
const fmtDia = (key) => new Date(key + "T12:00").toLocaleDateString("pt-PT", { weekday: "short", day: "2-digit", month: "2-digit" });
const fmtMes = (key) => { const s = new Date(key + "-15T12:00").toLocaleDateString("pt-PT", { month: "long", year: "numeric" }); return s.charAt(0).toUpperCase() + s.slice(1); };
const newId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
// a button that needs a second tap within 4 s, for anything that deletes
function confirmBtn(label, armedLabel, onConfirm, cls) {
  const b = h("button", { type: "button", class: "btn danger " + (cls || "") }, label);
  let armed = false, t;
  b.addEventListener("click", () => {
    if (!armed) { armed = true; b.classList.add("armed"); b.textContent = armedLabel; t = setTimeout(() => { armed = false; b.classList.remove("armed"); b.textContent = label; }, 4000); return; }
    clearTimeout(t); onConfirm();
  });
  return b;
}
