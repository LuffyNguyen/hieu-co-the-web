import{a as e,n as t,o as n,r,t as i}from"./do-B-wBW4CB.js";var a=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),o=e=>e===null?`—`:`${Math.floor(e/60)}:${String(Math.floor(e%60)).padStart(2,`0`)}`,s={dung:`Shared ancestor (correct)`,mucDich:`It needed them, so they grew (need-based)`,tinhCo:`Chance resemblance`,vuMon:`The fish kept trying (Dragon Gate, effort-based)`};function c(e){switch(e.k){case`vao`:return`Entered the pond (${e.chang})`;case`rinh`:return`Sat in hide ${e.lau+1}`;case`quen`:return`Still long enough: animals returned`;case`dung-day`:return`Stood up`;case`ghi`:return`Notebook line: ${e.viec}`;case`xem`:return e.cai===`so`?`Opened notebook`:`Opened magnifier`;case`kho`:return e.nhip===0?`Drought started`:`Drought beat ${e.nhip+1}`;case`cam-on`:return`Thanked the carp`;case`ban-mo`:return`Went to dissection`;case`mo`:return e.e===`tim_thay`?`Dissection: found ${e.v}`:e.e===`nhac`?`Dissection: hint level ${e.v}`:e.e===`tra_loi`?`Dissection: answered question ${e.v}`:e.e===`thu_sai`?`Dissection: wrong try`:`Dissection: ${e.e===`vao_nhip`?`entered`:`finished`} beat ${e.v}`;case`mua-ve`:return`Rain came`;case`ke`:return`Chain ordering: step ${e.buoc+1} ${e.dung?`correct`:`wrong`}`;case`noi`:return`Joined ${e.soi} (${e.sai} wrong drops${e.goiY?`, after hint`:``})`;case`noi-sai`:return`Wrong drop for ${e.soi}: ${e.vao}`;case`vi-sao`:return`Why answer: ${s[e.tl]??e.tl}`}}function l(e,t,n=!1){return`<div class="o${n?` lech`:``}"><b>${a(e)}</b><span>${a(t)}</span></div>`}function u(e,t){let n=new Date(e.bat).toLocaleString(`en-GB`,{weekday:`short`,day:`numeric`,month:`short`,hour:`2-digit`,minute:`2-digit`}),r=[l(String(t.rinh),`sat in a hide · first at ${o(t.rinhDau)}`,t.rinh===0),l(t.rinh>=2?`Yes`:`No`,`went back to a hide on their own`),l(String(t.quen),`times still enough for animals to return`,t.rinh>0&&t.quen===0),l(String(t.dongSo),`notebook lines · first at ${o(t.dongDau)}`),l(o(t.lang),`longest gap with no event`,t.lang>360),l(t.khoXong?`Yes`:`No`,`drought finished`),l(String(t.timThay),`carp parts found`),l(String(t.cauMo),`dissection questions answered`),l(String(t.nhac3),`times hint reached level 3`,t.nhac3>2),l(t.xong4?`Yes`:`No`,`dissection beat 4 finished`),l(t.muaVe?`Yes`:`No`,`rain came`),l(t.keXong?`Yes · ${t.keSai} wrong`:`No · ${t.keSai} wrong`,`chain ordering`),l(`${t.noiNgay} / ${t.noi}`,`pairs joined first try`,t.noi>0&&t.noiNgay===0),l(String(t.noiGoiY),`pairs needing the glow hint`),l(t.viSao?t.viSao===`dung`?`Correct`:`Misconception`:`—`,t.viSao?s[t.viSao]??t.viSao:`why question not reached`,!!t.viSao&&t.viSao!==`dung`)].join(``),i=e.su.map(e=>`<li><time>${o(e.t)}</time>${a(c(e))}</li>`).join(``);return`<section class="buoi">
    <header><input data-ten="${a(e.id)}" value="${a(e.ten??``)}" placeholder="Child's name" aria-label="Child's name"><p>${a(n)} · ${t.phut} min · ${e.su.length} events</p></header>
    <div class="luoi">${r}</div>
    <details><summary>Timeline</summary><ol>${i}</ol></details>
  </section>`}var d=`
:root { --nen: #f5f5f7; --the: #ffffff; --chu: #1d1d1f; --phu: #6e6e73; --ke: #e5e5ea; --nhan: #0071e3; --lech: #b25000; color-scheme: light dark; }
@media (prefers-color-scheme: dark) { :root { --nen: #000; --the: #1c1c1e; --chu: #f5f5f7; --phu: #a1a1a6; --ke: #2c2c2e; --nhan: #2997ff; --lech: #ff9f0a; } }
body { margin: 0; background: var(--nen); color: var(--chu); font: 15px/1.45 -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif; }
.do { max-width: 880px; margin: 0 auto; padding: 48px 16px 80px; }
.do h1 { font-size: 40px; line-height: 1.1; letter-spacing: -0.02em; margin: 0 0 8px; }
.do > p { color: var(--phu); margin: 0 0 28px; }
.nut { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px; }
.nut button { appearance: none; border: 0; border-radius: 980px; padding: 10px 18px; font: inherit; font-weight: 600; background: var(--ke); color: var(--chu); cursor: pointer; }
.nut button.chinh { background: var(--nhan); color: #fff; }
.buoi { background: var(--the); border-radius: 18px; padding: 22px; margin-bottom: 18px; }
.buoi header { display: flex; flex-wrap: wrap; align-items: baseline; gap: 4px 14px; margin-bottom: 16px; }
.buoi input { font-family: inherit; font-size: 22px; font-weight: 600; line-height: 1.2; border: 0; background: transparent; color: var(--chu); padding: 0; min-width: 0; width: 14ch; }
.buoi input::placeholder { color: var(--phu); }
.buoi header p { margin: 0; color: var(--phu); }
.luoi { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); column-gap: 18px; }
.o { padding: 12px 0; display: grid; gap: 2px; align-content: start; border-top: 1px solid var(--ke); }
.o b { font-size: 20px; font-weight: 600; }
.o span { color: var(--phu); font-size: 13px; }
.o.lech b { color: var(--lech); }
details { margin-top: 14px; }
summary { cursor: pointer; color: var(--nhan); font-weight: 600; }
ol { list-style: none; padding: 0; margin: 10px 0 0; max-height: 420px; overflow: auto; }
li { display: flex; gap: 14px; padding: 5px 0; border-bottom: 1px solid var(--ke); font-size: 14px; }
time { color: var(--phu); font-variant-numeric: tabular-nums; min-width: 3.5em; }
.trong { color: var(--phu); }
`;function f(a){document.title=`Playtest log`;let o=document.createElement(`style`);o.textContent=d,document.head.append(o);function s(){let t=r().filter(e=>e.su.length||e===r().at(-1)).reverse();a.innerHTML=`<div class="do">
      <h1>Playtest log</h1>
      <p>Stored on this device only. Nothing is sent anywhere. Orange numbers miss a target from docs/17 §1 or docs/18 §8.</p>
      <div class="nut">
        <button type="button" class="chinh" data-v="moi">New session</button>
        <button type="button" data-v="chep">Copy JSON</button>
        <button type="button" data-v="choi">Back to the game</button>
        <button type="button" data-v="xoa">Clear all</button>
      </div>
      ${t.length?t.map(t=>u(t,e(t))).join(``):`<p class="trong">No sessions yet. Play the pond, then come back here.</p>`}
    </div>`}a.addEventListener(`click`,async e=>{let t=e.target.closest(`[data-v]`)?.dataset.v;if(t===`moi`&&(i(),s()),t===`chep`){let t=e.target.closest(`button`);try{await navigator.clipboard.writeText(JSON.stringify(r(),null,1)),t.textContent=`Copied`}catch{t.textContent=`Copy failed`}}t===`choi`&&(location.search=``),t===`xoa`&&confirm(`Delete every playtest session on this device?`)&&(n(),s())}),a.addEventListener(`change`,e=>{let n=e.target;n.dataset.ten&&t(n.dataset.ten,n.value)}),s()}export{f as moDo};