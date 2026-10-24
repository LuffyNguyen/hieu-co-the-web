import{$ as e,A as t,C as n,G as r,M as i,Q as a,U as o,V as s,Z as c,b as l,n as u,o as d,r as f,t as p,y as m}from"./canh-CwmNQLLM.js";import{t as h}from"./luat-CkqNIsf3.js";var g={1:`Question`,2:`Walk`,3:`Shadow`,4:`Open`,5:`Seals`,6:`Threads`,7:`Relic`,8:`Look out`},_={1:`Go`,2:`Walk to the node`,3:`Flip the shadow`,4:`Continue`,6:`Seen it`,7:`I tried it`,8:`Finish level`},v=[`Skin`,`Muscle`,`Organs`,`Bone`,`Nerves`,`Vessels`],y=e=>String(e??``).replace(/[&<>"]/g,e=>`&${{"&":`amp`,"<":`lt`,">":`gt`,'"':`quot`}[e]};`);function b(e){return e?e.k===`rach`?`cut along “${e.duong}”`:e.k===`boc`?`peel ${v[e.lop]?.toLowerCase()??`layer ${e.lop}`}`:e.k===`cham`?`tap ${e.cau_truc}${e.qua_kinh?` through the loupe`:``}`:e.k===`soi`?`look deeper for ${e.cau_truc}`:e.k===`nhac`?`lift ${e.cau_truc} to the tray`:e.k===`lat_nap`?`flip open ${e.nap}`:`continue`:`—`}function x(e){let{k:t,...n}=e,r=Object.values(n).map(e=>typeof e==`object`?JSON.stringify(e):String(e)).join(` `);return r?`${t} ${r}`:t}function S(S,C){let w=C.man.filter(e=>e.kieu===`mo_du`&&e.loai.some(e=>e.vai===`tru`&&C.loai[e.id])),T=performance.now(),E=()=>(performance.now()-T)/1e3,D=u(1),O=w[0],k,A,j=null,M=!1,N=[];function P(e){for(let t of e)(t.k===`tien`||t.k===`vao_nhip`)&&(j=null),(t.k===`nhac`||t.k===`ngon_giay`||t.k===`day`)&&(j=t.viec),N.unshift(`${E().toFixed(1).padStart(6)}  ${x(t)}`);N.length=Math.min(N.length,80)}function F(e){O=w.find(t=>t.id===e)??w[0],k=d(C,O.id);let t=p(k,D);A=t.s,P(t.suKien),V(t.suKien.length)}function I(e){let t=h(k,A,{...e,t:E()});A=t.s,D=A.hoSo,P(t.suKien),(t.suKien.length||e.k!==`gio`)&&V(t.suKien.length)}function L(e){return(C.loai[k.khuon.loai]?.bieu_hien.find(t=>t.cau_truc===e))?.ten_rieng?.vi??e.replace(/-/g,` `)}function R(){let t=A.ca,n=new Set(k.man.trien.map(e=>e.cau_truc)),o=new Set(C.loai[k.khuon.loai]?.bieu_hien.filter(e=>e.co===`khong`).map(e=>e.cau_truc));return k.khuon.lop.map(({so:l,bo_phan:u})=>{let d=t.lop[l],f=s(t,l),p=l>e[D.bac],m=j?.k===`boc`&&j.lop===l,h=l===0?`<div class="rach"><i style="width:${Math.round((t.rach.bung??0)*100)}%"></i></div>`:``,g=l===0&&(d===`kin`||d===`dang_rach`)?`<button class="nho${j?.k===`rach`?` nhac`:``}" data-rach="bung">Cut 30%</button>`:``,_=d!==`da_boc`&&(l!==0||d===`mo`)?`<button class="nho${m?` nhac`:``}" data-boc="${l}" ${p?`disabled`:``}>Peel</button>
           <button class="nho" data-boc-yeu="${l}" ${p?`disabled`:``}>Let go early</button>`:``,b=t.soi!==null&&a(t,l,t.soi.sau,e[D.bac]),x=u.map(e=>{let a=c(k,t,e),s=!a&&b&&!r(k,t,e)&&!i(k,t,e),l=[n.has(e)&&`trien`,A.man.timThay.includes(e)&&`thay`,o.has(e)&&`khong`,(j?.k===`cham`||j?.k===`soi`)&&j.cau_truc===e&&`nhac`].filter(Boolean).join(` `),u=a&&e in k.khuon.che&&!t.khay.includes(e)?`<button class="nho${j?.k===`nhac`&&j.cau_truc===e?` nhac`:``}" data-nhac="${y(e)}">Lift</button>`:``;return`<button class="${l}" data-cham="${y(e)}" ${s?`data-kinh`:``} ${a||s?``:`disabled`}>${y(L(e))}${s?` (loupe)`:``}</button>${u}`}).join(``);return`<section class="lop ${d} ${f?`lo`:``}">
        <header><b>${v[l]??`Layer ${l}`}</b><small>${p?`locked at tier ${D.bac}`:d.replace(`_`,` `)}</small>
          <span>${g}${_}</span></header>
        ${h}<div class="bo-phan">${x||`<small class="eyebrow">No parts in this profile yet</small>`}</div>
      </section>`}).join(``)+z()}function z(){let t=A.ca,n=Math.max(1,e[D.bac]-o(t)),r=t.soi?`<button class="nho" data-soi-tat>Loupe off</button>${Array.from({length:n},(e,t)=>t+1).map(e=>`<button class="nho${t.soi?.sau===e?` chinh`:``}" data-soi="${e}">Depth ${e}</button>`).join(``)}`:`<button class="nho${j?.k===`soi`?` nhac`:``}" data-soi="1">Loupe</button>`,i=k.khuon.nap.filter(e=>!t.nap.includes(e.id)).map(e=>`<button class="nho${j?.k===`lat_nap`&&j.nap===e.id?` nhac`:``}" data-nap="${y(e.id)}">Flip ${y(e.id)}</button>`).join(``),a=t.khay.map(e=>`<button class="nho" data-dat-lai="${y(e)}">Put back ${y(L(e))}</button>`).join(``);return`<section class="lop"><header><b>Tools</b><span>${r}${i}</span></header>
      ${a?`<div class="bo-phan"><small class="eyebrow">Tray</small> ${a}</div>`:``}</section>`}function B(e){let t=O.nhip,n={1:O.cau_hoi.vi,2:t.di_toi,3:t.bong_to_tien,6:t.soi_chi.map(e=>C.soi_chi.find(t=>t.id===e)?.ten.vi??e).join(` · `),7:[t.di_vat,t.soi_vao_em].filter(Boolean).join(`

`),8:t.cau_bo_ngo};return e===null?`<p>Level complete.</p>`:`<p style="white-space:pre-line">${y(n[e]??``)}</p>`}function V(e=0){let r=n(k,A),i=D,a=Object.values(i.muiKhau).reduce((e,t)=>e+t.length,0),o=A.man.cho.mui.length,s=C.soi_chi.filter(e=>Object.keys(e.bo_phan).length).length;S.innerHTML=`
      <p class="eyebrow">Level ${O.so} · ${y(f(O))} · atlas ${C.phien.ban} ${C.phien.ngay}</p>
      <h1>${y(O.ten.vi)}</h1>
      <p class="cau-hoi">${y(O.cau_hoi.vi)}</p>
      <div class="thanh">
        <select data-man>${w.map(e=>`<option value="${e.id}" ${e.id===O.id?`selected`:``}>${e.so} · ${y(e.ten.vi)}</option>`).join(``)}</select>
        <select data-bac>${[1,2,3].map(e=>`<option value="${e}" ${e===i.bac?`selected`:``}>Tier ${e} (ages ${[`8–10`,`11–13`,`14–16`][e-1]})</option>`).join(``)}</select>
        <button data-hoso-moi>New profile</button>
      </div>
      <div class="nhip">${k.man.thu_tu_nhip.map((e,t)=>`<span class="${t===A.man.i?`dang`:A.man.boQua.includes(e)?`bo`:A.man.xong.includes(e)?`xong`:``}">${e} · ${g[e]}</span>`).join(``)}</div>
      <div class="luoi">
        <div class="the">
          ${r===4?R():B(r)}
          <div class="thanh" style="margin:16px 0 0">
            ${r===4?`<button data-khep>Close up</button><button data-mo-lai ${A.khep?``:`disabled`}>Reopen as it was</button>`:``}
            ${r!==null&&r!==5?`<button class="chinh" data-tiep ${r===4&&!t(k,A)?`disabled`:``}>${_[r]}</button>`:``}
            ${r!==null&&l(k,A,r)?`<button data-de-sau>Later</button>`:``}
          </div>
        </div>
        <aside class="the">
          <h2>Profile</h2>
          <dl class="so">
            <dt>Seals</dt><dd>${i.trien.length}</dd>
            <dt>Stitches</dt><dd>${a}${o?` + ${o} waiting for beat 5`:``}</dd>
            <dt>Threads</dt><dd>${i.soiChi.length} <small class="eyebrow">(${s}/${C.soi_chi.length} threads have part data)</small></dd>
            <dt>Shadows</dt><dd>${i.bong.length}</dd>
            <dt>Relics</dt><dd>${i.diVat.length}</dd>
            <dt>Levels done</dt><dd>${i.manXong.length}</dd>
          </dl>
          <h2>Hint ladder</h2>
          <dl class="so">
            <dt>Step</dt><dd>${A.goiY.bac}${A.goiY.tu===null?` (not stuck)`:` · stuck since ${A.goiY.tu.toFixed(0)} s`}</dd>
            <dt>Next task</dt><dd>${y(b(m(k,A)))}</dd>
          </dl>
          <h2>Events</h2>
          <ol class="nhat-ky">${N.map((t,n)=>`<li class="${n<e?`moi`:``}">${y(t)}</li>`).join(``)}</ol>
        </aside>
      </div>`}S.addEventListener(`click`,e=>{let t=e.target.closest(`button`);if(!t||t.disabled)return;let n=t.dataset;n.rach?I({k:`rach`,duong:n.rach,phu:.3}):n.boc?I({k:`boc`,lop:Number(n.boc),keo:120,van_toc:0}):n.bocYeu?I({k:`boc`,lop:Number(n.bocYeu),keo:10,van_toc:0}):n.cham?I({k:`cham`,cau_truc:n.cham,qua_kinh:`kinh`in n}):n.soi?I({k:`soi`,x:0,y:0,sau:Number(n.soi)}):`soiTat`in n?I({k:`soi_tat`}):n.nhac?I({k:`nhac`,cau_truc:n.nhac,gan:!1}):n.datLai?I({k:`dat_lai`,cau_truc:n.datLai}):n.nap?I({k:`lat_nap`,nap:n.nap}):`khep`in n?I({k:`khep`}):`moLai`in n?I({k:`mo_lai`}):`tiep`in n?I({k:`tiep`}):`deSau`in n?I({k:`de_sau`}):`hosoMoi`in n&&(D=u(D.bac),F(O.id))}),S.addEventListener(`change`,e=>{let t=e.target;`man`in t.dataset&&F(t.value),`bac`in t.dataset&&(D={...D,bac:Number(t.value)},F(O.id))}),addEventListener(`pointerdown`,()=>M=!0),addEventListener(`pointerup`,()=>M=!1),addEventListener(`pointercancel`,()=>M=!1),setInterval(()=>I({k:`gio`,ngon_tren_man:M}),1e3),F(O.id)}export{S as mo};