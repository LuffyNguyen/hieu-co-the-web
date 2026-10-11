import{i as e,n as t,o as n,r,t as i}from"./net-fe7UQRFb.js";var a={diep:`#FDF6E8`,than:`#33291F`,hoe:`#F7C23A`,vang:`#EE5A40`,cham:`#2F66B0`,tram:`#4FB08A`,sen:`#F5A3A6`,go:`#80654A`};function o(e){let t=parseInt(e.slice(1),16);return[t>>16&255,t>>8&255,t&255]}function s(e,t,n){let r=o(e),i=o(t);return`#`+r.map((e,t)=>Math.round(e+(i[t]-e)*n).toString(16).padStart(2,`0`)).join(``).toUpperCase()}function c(e){let t=e.diep;return{...e,diep2:s(e.go,t,.84),bong:s(e.go,t,.7),giay:s(`#FFFFFF`,t,.35),hoe2:s(e.hoe,t,.55),vang2:s(e.vang,t,.6),cham2:s(e.cham,t,.6),tram2:s(e.tram,t,.6),sen2:s(e.sen,t,.55),go2:s(e.go,t,.55),hoe3:s(e.hoe,t,.72),vang3:s(e.vang,t,.78),cham3:s(e.cham,t,.8),tram3:s(e.tram,t,.76),sen3:s(e.sen,t,.66),go3:s(e.go,t,.8)}}var l=c(a),u={w:1180,h:820},d={chinh:`#3B3128`,dam:`#5C5040`,phu:`#7A6C58`,mo:`#978870`},f={ten:`'Baloo 2', 'Nunito', ui-rounded, system-ui, sans-serif`,chu:`'Nunito', ui-rounded, system-ui, -apple-system, sans-serif`,so:`'IBM Plex Mono', ui-monospace, 'SF Mono', Menlo, monospace`},p={vien:2.6,vienChip:2.2,bong:4,bongCongCu:2,caoChinh:64,caoPhu:52,caoChip:40,cham:48,nhoa:.42},m={tuc:90,nhanh:180,vua:280,cham:420,xa:560,tran:600,soLe:30,roi:.8},h={den:`cubic-bezier(.2,.8,.2,1)`,di:`cubic-bezier(.4,0,1,1)`,doi:`cubic-bezier(.4,0,.2,1)`},g={tren:{x:0,y:0,w:u.w,h:64},v1:{x:24,y:10,w:380,h:44,r:22},v7:{x:480,y:22,w:220,h:20,r:10},v2:{x:846,y:12,w:310,h:40,r:20},v4:{x:408,y:740,w:364,h:68,r:22},v6:{x:24,y:742,w:64,h:64,r:32},gay:{x:300,y:66,w:580,h:42,r:12},v5:{x:834,y:74,w:330,h:644,r:22},vuot:{x:0,y:64,w:24,h:u.h-64}},_={tua:{x:330,y:92,w:520,h:118,r:20},huyHieu:{cx:590,cy:440,r:168},chinh:{x:500,y:728,w:180,h:64,r:32},sau:{x:994,y:740,w:162,h:52,r:26}},v=1.5,y=e=>String(Math.round(e*100)/100),b=e=>`${y(e[0])} ${y(e[1])}`;function x(e,t,n,r,i){return i=Math.min(i,n/2,r/2),`M${y(e+i)} ${y(t)}H${y(e+n-i)}A${y(i)} ${y(i)} 0 0 1 ${y(e+n)} ${y(t+i)}V${y(t+r-i)}A${y(i)} ${y(i)} 0 0 1 ${y(e+n-i)} ${y(t+r)}H${y(e+i)}A${y(i)} ${y(i)} 0 0 1 ${y(e)} ${y(t+r-i)}V${y(t+i)}A${y(i)} ${y(i)} 0 0 1 ${y(e+i)} ${y(t)}Z`}function S(e,t,n){return`M${y(e-n)} ${y(t)}A${y(n)} ${y(n)} 0 1 0 ${y(e+n)} ${y(t)}A${y(n)} ${y(n)} 0 1 0 ${y(e-n)} ${y(t)}Z`}function C(e,t,n,r,i=0){let a=i*Math.PI/180,o=[e-n*Math.cos(a),t-n*Math.sin(a)],s=[e+n*Math.cos(a),t+n*Math.sin(a)];return`M${b(o)}A${y(n)} ${y(r)} ${y(i)} 1 0 ${b(s)}A${y(n)} ${y(r)} ${y(i)} 1 0 ${b(o)}Z`}function w(e,t){let n=e.length,r=``;for(let i=0;i<n;i++){let a=e[(i-1+n)%n],o=e[i],s=e[(i+1)%n],c=Math.hypot(a[0]-o[0],a[1]-o[1]),l=Math.hypot(s[0]-o[0],s[1]-o[1]),u=Math.min(Array.isArray(t)?t[i]:t,c/2,l/2),d=[o[0]+(a[0]-o[0])/c*u,o[1]+(a[1]-o[1])/c*u],f=[o[0]+(s[0]-o[0])/l*u,o[1]+(s[1]-o[1])/l*u];r+=`${i?`L`:`M`}${b(d)}Q${b(o)} ${b(f)}`}return r+`Z`}function T(e,t,n){let r=Math.hypot(t[0]-e[0],t[1]-e[1])||1,i=-(t[1]-e[1])/r*(n/2),a=(t[0]-e[0])/r*(n/2),o=y(n/2);return`M${b([e[0]+i,e[1]+a])}L${b([t[0]+i,t[1]+a])}A${o} ${o} 0 0 0 ${b([t[0]-i,t[1]-a])}L${b([e[0]-i,e[1]-a])}A${o} ${o} 0 0 0 ${b([e[0]+i,e[1]+a])}Z`}var E=(e,t,n,r)=>[e+n*Math.cos(r*Math.PI/180),t-n*Math.sin(r*Math.PI/180)];function D(e,t,n,r,i,a,o=[!0,!0]){let s=+(a-i>180),c=y((r-n)/2),l=E(e,t,r,i),u=E(e,t,r,a),d=E(e,t,n,a),f=E(e,t,n,i);return`M${b(l)}A${y(r)} ${y(r)} 0 ${s} 0 ${b(u)}`+(o[1]?`A${c} ${c} 0 0 0 ${b(d)}`:`L${b(d)}`)+`A${y(n)} ${y(n)} 0 ${s} 1 ${b(f)}`+(o[0]?`A${c} ${c} 0 0 0 ${b(l)}`:`Z`)+`Z`}var O=(...e)=>`M`+e.map(b).join(`L`),k=(e,t,n,r,i)=>{let a=E(e,t,n,r),o=E(e,t,n,i);return`M${b(a)}A${y(n)} ${y(n)} 0 ${+(i-r>180)} 0 ${b(o)}`};function ee(e,t){let n=t*Math.PI/180,r=[Math.cos(n),-Math.sin(n)],i=[Math.sin(n),Math.cos(n)];return(t,n)=>[e[0]+t*r[0]+n*i[0],e[1]+t*r[1]+n*i[1]]}function A(e,t,n=11,r=9.8){let i=n*.23;return[[e,t],[e+n,t+i],[e+n,t+i+r],[e,t+r]]}var j=[A(10.4,7.8),A(6.4,6.3),A(2.4,4.8)].map(e=>w(e,1.6)),M=ee([12.6,11.4],45),te=ee([20.6,3.4],-135),ne=[te(0,-1.9),te(7.4,-1.9),te(10.6,0),te(7.4,1.9),te(0,1.9)],re=x(2.8,5.4,14.4,15.8,2),ie=[[4.2,19.8],[4.6,11],[9.6,5.2],[19.8,4.2],[18.8,14.4],[13,19.4]],ae=e=>x(8.8,e+.6,6.4,4.4,1.4)+T([4.2,e+.9],[10,e+2.4],2.2)+T([19.8,e+.9],[14,e+2.4],2.2),oe=C(12,10,9.2,6.8),se=`M-2 -2H10.8Q10.4 6.4 8.4 10.6T6 20L-2 26Z`,ce=`M10.8 -2H26V26H6L6 20Q6.4 14.8 8.4 10.6T10.8 -2Z`,le=T([12,2.4],[12,9.6],3)+T([12,9.2],[8.4,12.8],2.4)+T([12,9.2],[15.6,12.8],2.4),ue=ee([17.4,16.9],74),de=w([ue(0,-1.3),ue(9.6,-1.3),ue(14,0),ue(9.6,1.3),ue(0,1.3)],[.8,.4,.5,.4,.8]),fe=e=>[4.6,10.4,16.2].map(t=>x(t,e,3.2,3.8,1.2)).join(``),pe={rach:{ten:`Rạch`,nghia:`kéo dao theo đường chấm; chạm để rạch hộ`,nhom:`cong-cu`,am:`rach`,khoi:[{d:T(M(-10.6,0),M(-3.6,0),4)},{d:`M${b(M(-1.6,-2))}L${b(M(6.4,-2))}L${b(M(9.6,-1.5))}Q${b(M(7.6,2.8))} ${b(M(1.2,2.3))}Q${b(M(-1.6,2.2))} ${b(M(-1.6,0))}Z`}],dong:[{khoi:0,to:`translate(1px,-1px)`},{khoi:1,to:`translate(1.6px,-1.6px)`}]},boc:{ten:`Bóc`,nghia:`bóc lớp trên cùng ra, lộ lớp dưới`,nhom:`cong-cu`,am:`boc`,khoi:[{d:w([[3.4,3.4],[12.6,3.4],[20.6,11.4],[20.6,20.6],[3.4,20.6]],[2.2,.6,.6,2.2,2.2]),lo:w([[12.6,3.4],[20.6,11.4],[12.6,11.4]],.4),loVien:3},{d:w([[13.4,4.6],[19.4,10.6],[13.4,10.6]],[.6,.6,1.4])}],dong:[{khoi:1,to:`translate(-1.4px,1.4px) scale(.86)`,goc:[16.4,7.6]}]},tach:{ten:`Tách`,nghia:`các tờ lớp rời nhau theo chiều sâu`,nhom:`cong-cu`,am:`tach`,khoi:[{d:j[0]},{d:j[1],lo:j[0],loVien:3},{d:j[2],lo:j[1]+j[0],loVien:3}],dong:[{khoi:0,to:`translate(.6px,.2px)`},{khoi:1,to:`translate(-.6px,-.2px)`},{khoi:2,to:`translate(-1.8px,-.6px)`}],t:420},chong:{ten:`Chồng`,nghia:`các tờ lớp xếp sát lại như lúc đầu`,nhom:`cong-cu`,am:`khep`,khoi:[{d:w(A(8.6,7.6),1.6)},{d:w(A(6.6,6.2),1.6),lo:w(A(8.6,7.6),1.6),loVien:3},{d:w(A(4.6,4.8),1.6),lo:w(A(6.6,6.2),1.6)+w(A(8.6,7.6),1.6),loVien:3}],dong:[{khoi:2,to:`translate(1px,.4px)`},{khoi:1,to:`translate(.5px,.2px)`}],t:180},soi:{ten:`Soi`,nghia:`kính soi thấy lớp nằm dưới`,nhom:`cong-cu`,am:`soi`,khoi:[{d:S(9.6,9.6,7.2),khoet:S(9.6,9.6,4.7).replace(/Z$/,``)+k(9.6,9.6,2.5,105,165)},{d:T([17.1,17.1],[20.3,20.3],3.8)}],dong:[{khoi:0,to:`rotate(-14deg)`,goc:[20.3,20.3]},{khoi:1,to:`rotate(-14deg)`,goc:[20.3,20.3]}]},khay:{ten:`Khay`,nghia:`khay đựng các bộ phận đã nhấc ra`,nhom:`cong-cu`,am:`dat`,khoi:[{d:w([[2.4,11.6],[21.6,11.6],[18.6,20],[5.4,20]],[1,1,1.6,1.6]),khoet:O([5.4,14.4],[18.6,14.4])},{d:C(12,6.4,3.8,2.6,-12)}],dong:[{khoi:1,to:`translate(0,2.2px)`}]},khep:{ten:`Khép lại`,nghia:`mọi thứ về như lúc đầu (6 giây để mở lại)`,nhom:`cong-cu`,am:`khep`,khoi:[{d:w([[3,4],[11.25,4],[11.25,20],[3,20]],[2,.8,.8,2]),lo:S(9,12,1.1)},{d:w([[12.75,4],[21,4],[21,20],[12.75,20]],[.8,2,2,.8]),lo:S(15,12,1.1)}],dong:[{khoi:0,to:`scaleX(.72)`,goc:[3,12]},{khoi:1,to:`scaleX(.72)`,goc:[21,12]}]},tuoi:{ten:`Tuổi`,nghia:`tô mỗi bộ phận theo lúc nó xuất hiện`,nhom:`xem`,am:`bat`,khoi:[{d:S(12,12,9.4),khoet:S(12,12,6.5).replace(/Z$/,``)+S(12,12,3.5).replace(/Z$/,``)+O([14.3,8],[17.4,2.6])}],dong:[{khoi:0,to:`rotate(28deg) scale(1.06)`,goc:[12,12]}]},so:{ten:`So`,nghia:`đặt hai loài cạnh nhau, tìm chỗ cùng gốc`,nhom:`xem`,am:`truot`,khoi:[{d:x(2.8,4,8.4,16,2),lo:S(7,9.4,1.9)},{d:x(12.8,4,8.4,16,2),lo:S(17,9.4,1.9)}],dong:[{khoi:0,to:`translate(-1.2px,0)`},{khoi:1,to:`translate(1.2px,0)`}]},thoiGian:{ten:`Thời gian thật`,nghia:`duỗi trục gãy về đúng tỉ lệ`,nhom:`xem`,am:`truot`,khoi:[{d:x(2.4,8,19.2,8.4,2),khoet:O([6,7],[6,11.6])+O([10,7],[10,9.6])+O([14,7],[14,11.6])+O([18,7],[18,9.6])}],dong:[{khoi:0,to:`translate(1.6px,0)`}]},latMat:{ten:`Lật mặt`,nghia:`xem con vật từ phía bên kia`,nhom:`xem`,am:`lat`,khoi:[{d:`M11.25 2.6V21.4A9.4 9.4 0 0 1 11.25 2.6Z`},{d:`M12.75 2.6A9.4 9.4 0 0 1 12.75 21.4Z`,khoet:k(12.4,12,5.6,-80,80)}],dong:[{khoi:0,to:`scaleX(-1)`,goc:[12,12]},{khoi:1,to:`scaleX(-1)`,goc:[12,12]}]},soTay:{ten:`Sổ`,nghia:`sổ Họ hàng: mọi con em đã thấy, đã bắt, đã mở`,nhom:`xem`,am:`lat`,khoi:[{d:x(4,2.4,16.4,19.2,2.2),khoet:O([7.8,2.4],[7.8,21.6])+O([11.4,8.6],[16.8,8.6])+O([11.4,12],[15,12])}],dong:[{khoi:0,to:`scaleX(.92)`,goc:[4,12]}]},nhan:{ten:`Nhãn`,nghia:`hiện tên các bộ phận`,nhom:`xem`,am:`bat`,khoi:[{d:`M3 4.5A1.5 1.5 0 0 1 4.5 3h7.4c.4 0 .8.2 1.1.4l8.6 8.6c.6.6.6 1.5 0 2.1l-7.4 7.4c-.6.6-1.5.6-2.1 0L3.4 13a1.5 1.5 0 0 1-.4-1.1Z`,lo:S(7.6,7.6,2)}],dong:[{khoi:0,to:`rotate(10deg)`,goc:[7.6,7.6]}]},hien:{ten:`Hiện đủ`,nghia:`hiện lại mọi lớp đã ẩn`,nhom:`xem`,am:`bat`,khoi:[{d:`M12 4.6c5.3 0 9.1 4.7 10.1 7.4-1 2.7-4.8 7.4-10.1 7.4S2.9 14.7 1.9 12C2.9 9.3 6.7 4.6 12 4.6Z`,khoet:S(12,12,4.6).replace(/Z$/,``),lo:S(13.3,10.7,1.2)}],dong:[{khoi:0,to:`scaleY(.12)`,goc:[12,12]}],t:180},song:{ten:`Lớp sống`,nghia:`tim đập, mang phập phồng`,nhom:`xem`,am:`bat`,khoi:[{d:`M12 20.6C5.6 16.4 2.6 12.9 2.6 9.1A4.9 4.9 0 0 1 12 6.8a4.9 4.9 0 0 1 9.4 2.3c0 3.8-3 7.3-9.4 11.5Z`,khoet:O([3.6,12.4],[8,12.4],[9.8,9.2],[12.6,15.4],[14.4,12.4],[20.4,12.4])}],dong:[{khoi:0,to:`scale(1.1)`,goc:[12,13]}],t:420},lui:{ten:`Lùi`,nghia:`về chặng trước, đúng đường lúc vào`,nhom:`di`,am:`truot`,khoi:[{d:T([5,12],[19.8,12],3.4)+T([4.2,12],[10.6,5.6],3.4)+T([4.2,12],[10.6,18.4],3.4)}],dong:[{khoi:0,to:`translate(-2px,0)`}],t:180},tiep:{ten:`Tiếp`,nghia:`sang chặng sau`,nhom:`di`,am:`truot`,khoi:[{d:T([4.2,12],[19,12],3.4)+T([19.8,12],[13.4,5.6],3.4)+T([19.8,12],[13.4,18.4],3.4)}],dong:[{khoi:0,to:`translate(2px,0)`}],t:180},dong:{ten:`Đóng`,nghia:`cất thẻ, về bàn mổ`,nhom:`di`,am:`truot`,khoi:[{d:T([5.6,5.6],[18.4,18.4],3.3)+T([18.4,5.6],[5.6,18.4],3.3)}],dong:[{khoi:0,to:`rotate(90deg) scale(.86)`,goc:[12,12]}],t:180},moLai:{ten:`Mở lại như cũ`,nghia:`đặt lại đúng như trước khi khép`,nhom:`di`,am:`lat`,khoi:[{d:T([7.6,7.6],[13.2,7.6],3.2)+D(13.2,12.85,3.65,6.85,-90,90,[!1,!1])+T([13.2,18.1],[6.4,18.1],3.2)+T([4.4,7.6],[8.4,3.8],3.2)+T([4.4,7.6],[8.4,11.4],3.2)}],dong:[{khoi:0,to:`rotate(-24deg)`,goc:[12,12]}]},xong:{ten:`Xong`,nghia:`đã làm xong bước này`,nhom:`di`,am:`trien`,khoi:[{d:T([4.4,12.6],[9.6,17.8],3.4)+T([9.6,17.8],[19.6,6.4],3.4)}],dong:[{khoi:0,to:`scale(1.16)`,goc:[10,16]}],t:180},chay:{ten:`Chạy`,nghia:`chạy thử chuyển động, phát tiếng`,nhom:`di`,am:`cham`,khoi:[{d:w([[6.4,3.8],[20.4,12],[6.4,20.2]],[2.4,2,2.4])}],dong:[{khoi:0,to:`translate(1.4px,0)`}],t:180},am:{ten:`Âm thanh`,nghia:`bật tiếng giấy, gỗ, triện`,nhom:`he`,am:`bat`,khoi:[{d:w([[2.4,8.9],[7.2,8.9],[12.4,4.4],[12.4,19.6],[7.2,15.1],[2.4,15.1]],[1.2,.8,1.2,1.2,.8,1.2])},{d:D(12.4,12,3.9,5.9,-42,42)},{d:D(12.4,12,7.4,9.4,-46,46)}],dong:[{khoi:1,to:`translate(1px,0)`},{khoi:2,to:`translate(1.8px,0)`}]},amTat:{ten:`Tắt tiếng`,nghia:`im lặng; mọi tiếng đều có hình đi kèm`,nhom:`he`,am:`tat`,khoi:[{d:w([[2.4,8.9],[7.2,8.9],[12.4,4.4],[12.4,19.6],[7.2,15.1],[2.4,15.1]],[1.2,.8,1.2,1.2,.8,1.2])},{d:T([15.6,9.2],[21,14.8],2.4)+T([21,9.2],[15.6,14.8],2.4)}],dong:[{khoi:1,to:`scale(.8)`,goc:[18.3,12]}],t:180},khoa:{ten:`Khoá`,nghia:`chưa mở được; chạm để nghe vì sao`,nhom:`he`,am:`khoa`,khoi:[{d:x(4.4,10.6,15.2,10.6,2.4),lo:S(12,14.8,1.6)+T([12,15.4],[12,18],1.4)},{d:`M6.3 9.6V8.4a5.7 5.7 0 0 1 11.4 0v1.2h-2.4V8.4a3.3 3.3 0 0 0-6.6 0v1.2Z`}],dong:[{khoi:1,to:`translate(0,-1.4px)`}],t:180},nguoiLon:{ten:`Khu người lớn`,nghia:`hồ sơ, tuỳ chọn; có hỏi lại`,nhom:`he`,am:`nha`,khoi:[{d:S(7.6,12,5.2)+T([11.6,12],[21,12],3.2)+x(16,12,2.2,5.2,.8)+x(19,12,2.2,4,.8),lo:S(7.6,12,1.9)}],dong:[{khoi:0,to:`rotate(22deg)`,goc:[7.6,12]}]},coc:{ten:`Thầy Cóc`,nghia:`người dẫn; chạm để hỏi`,nhom:`he`,am:`coc`,khoi:[{d:C(12,14.6,9.6,6.2)+S(7.2,8.8,3.6)+S(16.8,8.8,3.6),khoet:S(7.2,8.8,2.1).replace(/Z$/,``)+S(16.8,8.8,2.1).replace(/Z$/,``)+`M5.4 15.2Q12 19.4 18.6 15.2`}],dong:[{khoi:0,to:`scale(1.06,.94)`,goc:[12,20]}],t:180},hoiSau:{ten:`Hỏi sâu`,nghia:`hỏi Thầy Cóc thêm một bậc`,nhom:`the`,am:`coc`,khoi:[{d:x(2.6,3,18.8,14.2,4.4)+w([[6,15],[11.4,15],[5.4,21.2]],[.6,.6,1]),khoet:`M9.3 8.2a2.8 2.8 0 1 1 4 2.5c-.8.4-1.3 1-1.3 1.8`,lo:S(12,14.1,1.05)}],dong:[{khoi:0,to:`scale(1.08)`,goc:[6,20]}],t:180},giaSu:{ten:`Giả sử…`,nghia:`đổi một điều, xem thế giới ra sao`,nhom:`the`,am:`mucChay`,khoi:[{d:re,khoet:O([5.4,11.6],[12.2,11.6])+O([5.4,15.8],[14.6,15.8])+O([9,8.4],[9,18.6]),lo:w(ne,.6),loVien:3},{d:w(ne,[.8,.4,.6,.4,.8])}],dong:[{khoi:1,to:`translate(-1.2px,1.2px)`}]},xoay:{ten:`Xoay`,nghia:`xoay nhánh cây quanh mắt gỗ`,nhom:`the`,am:`lat`,khoi:[{d:D(12,12,5.3,8.5,130,384,[!0,!1])+w([E(12,12,2.4,22),E(12,12,11.4,22),E(12,12,6.9,58)],[.8,.8,1])}],dong:[{khoi:0,to:`rotate(-45deg)`,goc:[12,12]}]},cay:{ten:`Cây`,nghia:`về cây sự sống, nhà của mọi chương`,nhom:`cay`,am:`phongRa`,khoi:[{d:S(12,9.2,7.4)+w([[10.1,13.6],[13.9,13.6],[14.5,19.2],[17.6,21.2],[6.4,21.2],[9.5,19.2]],[.4,.4,1.4,.8,.8,1.4]),khoet:O([12,17],[12,10.4],[8.6,7])+O([12,10.4],[15.6,7.4])}],dong:[{khoi:0,to:`rotate(5deg)`,goc:[12,21]}]},coTu:{ten:`Có từ`,nghia:`bộ phận này xuất hiện ở đoạn cành nào`,nhom:`cay`,am:`trien`,khoi:[{d:T([12,21.4],[12,8.6],3)+T([12,8.6],[5.6,3],3)+T([12,8.6],[18.4,3],3),lo:x(8,11.2,8,8,1.6),loVien:3},{d:x(8,11.2,8,8,1.6),khoet:O([10.6,15.2],[13.4,15.2])}],dong:[{khoi:1,to:`scale(1.3)`,goc:[12,15.2]}],t:180},hoHang:{ten:`Họ hàng`,nghia:`hai loài gặp nhau ở nút chung nào`,nhom:`cay`,am:`mucChay`,khoi:[{d:S(5.8,5.8,3.4)+S(18.2,5.8,3.4)+T([7.4,8.4],[12,15.4],2.6)+T([16.6,8.4],[12,15.4],2.6)+S(12,17.4,3.6),khoet:S(12,17.4,1.7).replace(/Z$/,``)}],dong:[{khoi:0,to:`translate(0,.8px) scale(.96)`,goc:[12,17.4]}]},aiCo:{ten:`Ai có…?`,nghia:`mọi loài có cùng đặc điểm này`,nhom:`cay`,am:`trien`,khoi:[{d:x(2.8,2.8,18.4,18.4,2.6),khoet:S(10.4,10.4,3.7).replace(/Z$/,``)+O([13.2,13.2],[17,17])}],dong:[{khoi:0,to:`scale(1.12)`,goc:[12,12]}],t:180},datVaoCay:{ten:`Đặt vào cây`,nghia:`đoán chỗ của loài này trên cây`,nhom:`cay`,am:`dat`,khoi:[{d:`M12 17.6L7.8 12.2A6 6 0 1 1 16.2 12.2Z`,lo:S(12,8,2.2)},{d:T([4,20.8],[20,20.8],2.4)}],dong:[{khoi:0,to:`translate(0,-3px)`}]},dauChan:{ten:`Dấu chân`,nghia:`đường em đã đi trên cây`,nhom:`cay`,am:`cham`,khoi:[{d:C(7.4,16.2,5,3.2,84)+C(8,8.8,2.8,1.7,-6)},{d:C(16.6,11.6,5,3.2,96)+C(16,4.2,2.8,1.7,6)}],dong:[{khoi:0,to:`translate(0,-1.2px)`},{khoi:1,to:`translate(0,-1.2px)`}],t:180},dotSong:{ten:`Đốt sống`,nghia:`cột sống: chuỗi đốt xương dọc lưng`,nhom:`trien`,am:`trien`,khoi:[{d:ae(2.6)},{d:ae(9.2)},{d:ae(15.8)}],dong:[{khoi:0,to:`translate(-.8px,0)`},{khoi:2,to:`translate(.8px,0)`}],t:180},ham:{ten:`Hàm`,nghia:`hàm trên, hàm dưới có răng, khép lại để cắn`,nhom:`trien`,am:`trien`,khoi:[{d:`M3.4 7.4V6.6c0-1.8 1.4-3.2 3.2-3.2h10.8c1.8 0 3.2 1.4 3.2 3.2v.8Z`+fe(6.6)},{d:`M3.4 16.6v.8c0 1.8 1.4 3.2 3.2 3.2h10.8c1.8 0 3.2-1.4 3.2-3.2v-.8Z`+fe(13.6)}],dong:[{khoi:0,to:`translate(0,.8px)`},{khoi:1,to:`translate(0,-.8px)`}],t:180},phoi:{ten:`Phổi`,nghia:`hai lá phổi thở không khí, nối khí quản`,nhom:`trien`,am:`trien`,khoi:[{d:`M9.8 5.4C5.2 6.6 2.6 12 2.6 17c0 2.6 1.4 4 3.6 4 2.6 0 4-1.2 4.2-3.4V6c0-.4-.2-.7-.6-.6Z`,lo:le,loVien:3},{d:`M14.2 5.4C18.8 6.6 21.4 12 21.4 17c0 2.6-1.4 4-3.6 4-2.6 0-4-1.2-4.2-3.4V6c0-.4.2-.7.6-.6Z`,lo:le,loVien:3},{d:le}],dong:[{khoi:0,to:`scale(1.06)`,goc:[6.4,13]},{khoi:1,to:`scale(1.06)`,goc:[17.6,13]}],t:420},bongBoi:{ten:`Bóng bơi`,nghia:`túi khí hai ngăn giúp cá nổi, chìm`,nhom:`trien`,am:`trien`,khoi:[{d:C(7.4,11.4,5,5)+T([11,12],[13.6,12.6],2.6)+C(16.4,12.8,5.2,4.2,8),khoet:k(7.4,11.4,3,105,165)+k(16.4,12.8,2.2,110,160)}],dong:[{khoi:0,to:`scale(1.08)`,goc:[12,12]}],t:180},daDay:{ten:`Dạ dày`,nghia:`túi chứa và nghiền thức ăn`,nhom:`trien`,am:`trien`,khoi:[{d:T([12.8,2.4],[13,8],3)+`M14 7.6C12.8 4.2 6.6 3.8 4.2 7.6 2 11 2.4 17 6.6 19.8 10.4 22.2 16.4 21.4 19.2 17.8L20.6 16C21.4 14.8 21.2 13.4 20.2 12.8 19.2 12.2 17.8 12.4 17 13.4 15.8 14.8 14 15.2 12.6 14.4 11.2 13.6 10.6 12 11.2 10.6 11.6 9.4 12.6 8.6 14 7.6Z`,khoet:k(8.6,12,3.8,100,160)}],dong:[{khoi:0,to:`scale(1.06,.94)`,goc:[12,12]}],t:180},diThang:{ten:`Đi thẳng`,nghia:`đứng và bước trên hai chân`,nhom:`trien`,am:`trien`,khoi:[{d:S(13,4.7,2.7)},{d:T([12.6,11.4],[11.8,13.8],5)+T([11.8,13.8],[7.8,19.9],3.9)+T([11.8,13.8],[14.2,16.8],3.9)+T([14.2,16.8],[15,20.1],3.9)+T([12.8,11],[16.4,13.8],3.2)+T([12.2,11],[8.4,13.6],3.2)}],dong:[{khoi:0,to:`translate(1px,0)`},{khoi:1,to:`translate(1px,0)`}],t:180},tranTruoc:{ten:`Trán trước`,nghia:`phần não sau trán: tính trước, nghĩ xa`,nhom:`trien`,am:`trien`,khoi:[{d:oe,lo:ce},{d:oe+C(16.4,16.8,3.4,2.3)+T([12.8,15.6],[13.4,20.8],2.6),lo:se,loVien:3,khoet:`M9.6 12Q13.4 9.8 18.2 10.8`}],dong:[{khoi:0,to:`scale(1.1)`,goc:[5,10]}],t:180},bongToTien:{ten:`Bóng tổ tiên`,nghia:`thẻ in bóng con vật tổ tiên, chưa lộ mặt`,nhom:`nhip`,am:`lat`,khoi:[{d:x(2.4,4.4,19.2,15.2,2.2),lo:x(4.6,6.6,14.8,10.8,.8)},{d:C(11.2,12,4.6,2.8)+w([[14.6,12],[17.8,9.2],[17.8,14.8]],[.6,.8,.8])}],dong:[{khoi:1,to:`translate(.8px,0)`}],t:180},muiKhau:{ten:`Mũi khâu`,nghia:`khâu một sợi chỉ nối hai bộ phận cùng gốc`,nhom:`nhip`,am:`mucChay`,khoi:[{d:x(2.4,12.6,19.2,8.6,2),lo:de,loVien:3,khoet:O([5.2,16.9],[7.2,16.9])+O([10,16.9],[12,16.9])},{d:de}],dong:[{khoi:1,to:`translate(.5px,-1.4px)`}],t:180},diVat:{ten:`Di vật`,nghia:`thứ tổ tiên để lại, em mang trong người`,nhom:`nhip`,am:`dat`,khoi:[{d:S(12,5.6,3.4)},{d:`M3.4 21.4V17.4c0-3.8 3-6.8 6.8-6.8h3.6c3.8 0 6.8 3 6.8 6.8v4Z`,lo:x(10.3,14.2,3.4,3.4,.8),loVien:3},{d:x(10.3,14.2,3.4,3.4,.8)}],dong:[{khoi:2,to:`scale(1.3)`,goc:[12,15.9]}],t:180},giot:{ten:`Giọt nước`,nghia:`vi khuẩn, tế bào đầu tiên`,nhom:`noi`,am:`cham`,khoi:[{d:`M12 2.6C12 2.6 5 10.4 5 14.8a7 7 0 0 0 14 0C19 10.4 12 2.6 12 2.6Z`,khoet:k(12,14.8,4,188,250),lo:S(14.2,16.2,1.3)}],dong:[{khoi:0,to:`scale(.94,1.06)`,goc:[12,21.8]}],t:180},nam:{ten:`Khúc gỗ mục`,nghia:`nấm, sợi nấm dưới đất`,nhom:`noi`,am:`cham`,khoi:[{d:`M2.6 12.4C2.6 7 6.8 3.4 12 3.4s9.4 3.6 9.4 9c0 .6-.4 1-1 1H3.6c-.6 0-1-.4-1-1Z`,lo:S(8.4,8.6,1.35)+S(14.6,7.2,1.1)},{d:x(9.4,14.9,5.2,6.4,2)}],dong:[{khoi:0,to:`translate(0,-1.2px)`}],t:180},lua:{ten:`Ruộng lúa`,nghia:`thực vật: lúa, ánh sáng thành hạt`,nhom:`noi`,am:`cham`,khoi:[{d:T([12,21.2],[12,7],2.2)+C(12,4.6,1.8,2.8)+C(9.2,8.4,1.8,3,-38)+C(14.8,8.4,1.8,3,38)+C(9.2,12.6,1.8,3,-38)+C(14.8,12.6,1.8,3,38)+C(9.2,16.8,1.8,3,-38)+C(14.8,16.8,1.8,3,38)}],dong:[{khoi:0,to:`rotate(5deg)`,goc:[12,21.2]}]},bien:{ten:`Biển`,nghia:`bọt biển, sứa, lưỡng tiêm, cá heo`,nhom:`noi`,am:`cham`,khoi:[{d:`M2.4 16.2C5.2 15.6 6.8 8.4 13 7.8c4.4-.4 7.2 2.4 7.2 5.4 0 2.2-1.8 3.6-3.6 3.2-1.4-.3-1.8-1.9-.9-2.8.6-.6 1.6-.5 2 .1-.1-1.6-1.6-3-3.8-2.8-3.4.3-4.8 4.4-6.2 5.6H21.6v4.2c0 .6-.4 1-1 1H3.4c-.6 0-1-.4-1-1Z`,khoet:O([5,18.2],[8,17.6],[11,18.2],[14,17.6],[17,18.2],[19.4,17.8])}],dong:[{khoi:0,to:`translate(-1.2px,0)`}]},dat:{ten:`Đất vườn`,nghia:`giun đất, rễ, những đường hầm`,nhom:`noi`,am:`cham`,khoi:[{d:x(2.4,8.4,19.2,3.4,1.4)+T([12,9],[12,5.2],2)+C(9.4,4.6,2.6,1.5,-24)+C(14.6,4.6,2.6,1.5,24)},{d:x(2.4,13.3,19.2,3.2,1.4)},{d:x(2.4,18,19.2,3.6,1.6),lo:S(8,19.8,1)+S(15.4,19.8,1)}],dong:[{khoi:0,to:`translate(0,-1px)`},{khoi:2,to:`translate(0,.6px)`}],t:180},sen:{ten:`Ao làng`,nghia:`tôm, cá chép, ếch`,nhom:`noi`,am:`cham`,khoi:[{d:`M12 2.8C14.6 5.4 15.4 9.4 12 16.2 8.6 9.4 9.4 5.4 12 2.8Z`},{d:`M3 7.6c4.2.4 7.2 3.4 8.4 9.2C6.2 15.6 3.4 12.4 3 7.6ZM21 7.6c-4.2.4-7.2 3.4-8.4 9.2 5.2-1.2 8-4.4 8.4-9.2Z`,lo:`M12 2.8C14.6 5.4 15.4 9.4 12 16.2 8.6 9.4 9.4 5.4 12 2.8Z`,loVien:3},{d:T([3.4,20.2],[20.6,20.2],2.2)}],dong:[{khoi:1,to:`scale(1.08,1)`,goc:[12,16]}],t:180},rao:{ten:`Sân nhà`,nghia:`gà, chuột`,nhom:`noi`,am:`cham`,khoi:[{d:`M6 5.6l1.6-1.8 1.6 1.8V21H6ZM10.4 4.2L12 2.4l1.6 1.8V21h-3.2ZM14.8 5.6l1.6-1.8L18 5.6V21h-3.2Z`,lo:x(2.6,13,18.8,3.2,1.6),loVien:3,khoet:O([6.4,9.2],[8.8,9.2])+O([10.8,8],[13.2,8])+O([15.2,9.2],[17.6,9.2])},{d:x(2.6,13,18.8,3.2,1.6)}],dong:[{khoi:1,to:`translate(0,-.8px)`}],t:180},rung:{ten:`Rừng`,nghia:`tinh tinh và họ hàng trên cây`,nhom:`noi`,am:`cham`,khoi:[{d:w(ie,[.6,3,4,.8,4,3]),khoet:O([5.2,18.8],[17.6,6.4])+O([9.6,14.4],[9.4,9.4])+O([12.6,11.4],[16.2,11.6])}],dong:[{khoi:0,to:`rotate(-6deg)`,goc:[4.2,19.8]}]},nui:{ten:`Núi`,nghia:`núi cao, suối lạnh`,nhom:`noi`,am:`cham`,khoi:[{d:w([[11.4,20.6],[16.6,10.4],[22.2,20.6]],[.8,1.4,.8]),lo:w([[1.8,20.6],[9.6,5.2],[17.4,20.6]],[.8,1.6,.8]),loVien:3},{d:w([[1.8,20.6],[9.6,5.2],[17.4,20.6]],[.8,1.6,.8]),khoet:O([7.2,10.8],[8.4,12],[9.6,10.8],[10.8,12],[12,10.8])}],dong:[{khoi:0,to:`translate(0,-.8px)`}]},nha:{ten:`Nhà em`,nghia:`người: em`,nhom:`noi`,am:`cham`,khoi:[{d:`M1.8 11.2c1.2 0 1.8-.6 2.4-1.6L7 5.4c.3-.5.8-.8 1.4-.8h7.2c.6 0 1.1.3 1.4.8l2.8 4.2c.6 1 1.2 1.6 2.4 1.6Z`},{d:x(4.8,12.7,14.4,8.5,1.4),lo:x(10,15,4,8,1.6)}],dong:[{khoi:0,to:`translate(0,-1px)`}],t:180},sau:{ten:`Sâu`,nghia:`đầu thanh Biến thái: con sâu`,nhom:`xem`,am:`truot`,khoi:[{d:S(4.2,13.8,2.6)},{d:w([[7.2,11.6],[9.4,8.8],[14,9.6],[19.6,10.4],[21.8,12.4],[21.8,18],[20,18],[20,19.4],[18,19.4],[18,18],[15.4,18],[15.4,19.4],[13.4,19.4],[13.4,18],[7.2,18]],[1.6,2.6,2,2,2,1.2,.3,.5,.5,.3,.3,.5,.5,.3,1.6]),lo:S(4.2,13.8,2.6),loVien:3,khoet:O([11.4,10.2],[11.4,15])+O([15,10.6],[15,15.2])+O([18.6,11.2],[18.6,15.4])}],dong:[{khoi:1,to:`scale(.93,1)`,goc:[21.8,18]},{khoi:0,to:`translate(1.2px,0)`}],t:260},nhong:{ten:`Nhộng`,nghia:`nấc giữa: nhộng treo bằng vòng tơ`,nhom:`xem`,am:`cham`,khoi:[{d:w([[18.8,20.2],[14.4,16.6],[10.2,12.6],[7.2,8.6],[6.6,5.4],[7.6,2.6],[9.6,4.4],[11.4,3],[12.4,5.8],[15.2,9.6],[18.2,14.4],[19.4,18.6]],[.8,3,3,2,1.2,.4,.8,.4,1.2,2,2,.8]),khoet:`M8.8 7.4C11.4 7.8 13.6 10.6 14.6 15.6`+O([16,12.6],[17.8,11.6])+O([16.8,15.4],[18.6,14.8])},{d:x(20.2,2.4,2.4,19.6,1.2),lo:w([[18.8,20.2],[14.4,16.6],[10.2,12.6],[7.2,8.6],[6.6,5.4],[7.6,2.6],[9.6,4.4],[11.4,3],[12.4,5.8],[15.2,9.6],[18.2,14.4],[19.4,18.6]],1),loVien:3}],dong:[{khoi:0,to:`rotate(-6deg)`,goc:[19,19.8]}],t:240},buom:{ten:`Bướm`,nghia:`đầu thanh Biến thái: con bướm`,nhom:`xem`,am:`lat`,khoi:[{d:w([[10.2,9.4],[7.6,3.8],[3,3],[2.2,5],[3,9.2],[5.4,12],[3.4,15.2],[4.2,19],[7.4,20.8],[10.2,18.2]],[.6,1.6,1.6,2,2,.4,2,2,2,.6]),khoet:O([3.8,12.4],[9.8,12.6]),lo:x(10.7,8.6,2.6,11.4,1.3),loVien:3},{d:w([[13.8,9.4],[16.4,3.8],[21,3],[21.8,5],[21,9.2],[18.6,12],[20.6,15.2],[19.8,19],[16.6,20.8],[13.8,18.2]],[.6,1.6,1.6,2,2,.4,2,2,2,.6]),khoet:O([20.2,12.4],[14.2,12.6]),lo:x(10.7,8.6,2.6,11.4,1.3),loVien:3},{d:S(12,6.6,1.7)+x(10.7,8.6,2.6,11.4,1.3)+T([11.2,5.2],[9.4,2.4],1.6)+T([12.8,5.2],[14.6,2.4],1.6)}],dong:[{khoi:0,to:`scale(.72,1)`,goc:[10.6,12]},{khoi:1,to:`scale(.72,1)`,goc:[13.4,12]}],t:200}};function me(e,t,n=`ic`){let r=`<svg class="${n}" viewBox="0 0 24 24" aria-hidden="true" focusable="false">`;return e.khoi.forEach((e,n)=>{let i=e.khoet||e.lo;i&&(r+=`<mask id="${t}k${n}" maskUnits="userSpaceOnUse" x="-6" y="-6" width="36" height="36"><rect x="-6" y="-6" width="36" height="36" fill="#fff"/>`,e.lo&&(r+=`<path d="${e.lo}" fill="#000"${e.loVien?` stroke="#000" stroke-width="${e.loVien}" stroke-linejoin="round"`:``}/>`),e.khoet&&(r+=`<path d="${e.khoet}" fill="none" stroke="#000" stroke-width="${v}" stroke-linecap="round" stroke-linejoin="round"/>`),r+=`</mask>`),r+=`<g class="k k${n}"${i?` mask="url(#${t}k${n})"`:``}><path d="${e.d}"/></g>`}),r+`</svg>`}var he=[9.75,2.1],ge=`M8 3.85A1.75 1.75 0 0 1 11.5 3.85V9.7C11.6 8.35 14.3 8.35 14.4 10.15C14.5 8.95 17.1 9.05 17.2 10.95C17.3 9.95 19.6 10.15 19.6 12.15V15.9C19.6 19.35 17.6 21.6 14.6 21.6H11.7C9.95 21.6 8.95 20.8 8.05 19.55L4.85 15.55C4.05 14.55 5.15 12.95 6.35 13.65L8 14.85Z`,_e=`M14.4 10.9V13.6M17.2 11.7V14.3M8.3 16.1L9.9 17.4`,ve={ten:`Tay`,nghia:`việc kế tiếp: em làm gì bằng ngón tay`,nhom:`he`,am:`giay`,khoi:[{d:ge,khoet:_e}],dong:[{khoi:0,to:`translate(0 1.2) scale(.94)`,goc:he}]},ye={ten:`Em`,nghia:`Ở em: thứ em và con vật cùng giữ từ tổ tiên chung`,nhom:`the`,am:`giay`,khoi:[{d:S(12,5.5,3.6)},{d:w([[6.9,11],[17.1,11],[16.2,17.4],[7.8,17.4]],[2.6,2.6,1.6,1.6])+T([10,16.4],[10,21.2],3)+T([14,16.4],[14,21.2],3),khoet:`M12 17.6V21.6`}],dong:[{khoi:0,to:`translate(0 -1)`}]},be=(()=>{let e=148*Math.PI/180,t=9.6,n=[12+t*Math.cos(e),20.5-t*Math.sin(e)],r=[-Math.sin(e),-Math.cos(e)],i=[-r[1],r[0]],a=[n[0]+r[0]*5.4,n[1]+r[1]*5.4];return w([[n[0]+i[0]*4.8,n[1]+i[1]*4.8],a,[n[0]-i[0]*4.8,n[1]-i[1]*4.8]],.9)})(),xe={tay:ve,em:ye,keoNap:{ten:`Kéo nắp`,nghia:`kéo mép sau của nắp mang ra phía trước`,nhom:`cong-cu`,am:`giay`,khoi:[{d:D(12,20.5,7.8,11.4,22,148,[!0,!1])+be}],dong:[{khoi:0,to:`rotate(-24)`,goc:[12,20.5]}]},mang:{ten:`Mang`,nghia:`lá mang đỏ dưới nắp mang: cá thở bằng nước`,nhom:`trien`,am:`trien`,khoi:[{d:D(2,12,5,7.2,-60,60)},{d:D(2,12,8.8,14.6,-42,42),khoet:`M11.71 6.84L15.42 4.86M12.85 10.18L16.99 9.49M12.85 13.82L16.99 14.51M11.71 17.16L15.42 19.14`}],dong:[{khoi:1,to:`translate(.8 0)`}]}},Se={ms:1600,lap:3,cho:6e3,px:78},Ce=Se.px/24,we={x:he[0]*Ce,y:he[1]*Ce},Te=e=>Math.round(e*10)/10,N=e=>String(Te(e));function Ee(e={}){let t=ge,[n,r]=he,i=2*Math.PI*9.5;return`<div class="${`bm-ngon${e.giu?` giu`:``}${e.tinh?` tinh`:``}`}"${e.tinh?` style="transform:translate(${N(e.tinh.x)}px,${N(e.tinh.y)}px)"`:``} aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><g class="vong-giu"><circle cx="${n}" cy="${r}" r="9.5" fill="none" stroke="${l.giay}" stroke-width="3.4"/><circle class="vong" cx="${n}" cy="${r}" r="9.5" fill="none" stroke="${l.than}" stroke-width="1.7" stroke-linecap="round" stroke-dasharray="${N(i)}" stroke-dashoffset="${N(i)}" transform="rotate(-90 ${n} ${r})"/></g><path class="bong" d="${t}" transform="translate(0 1)" fill="${l.than}" fill-opacity=".26" stroke="${l.than}" stroke-opacity=".26" stroke-width="2.3" stroke-linejoin="round"/><path d="${t}" fill="${l.giay}" stroke="${l.than}" stroke-width="2.3" stroke-linejoin="round" paint-order="stroke"/><path d="M8.95 4.05Q8.95 2.95 9.75 2.95Q10.55 2.95 10.55 4.05V5.1H8.95Z" fill="${l.bong}"/><path d="${_e}" fill="none" stroke="${l.than}" stroke-width=".85" stroke-linecap="round"/></svg></div>`}var De=0;function Oe(){return me(xe.tay,`bmt${De++}_`,`bm-tay`)}var ke=(e,t)=>Math.hypot(t.x-e.x,t.y-e.y);function Ae(e,t){if(e.length<2)return Array.from({length:t},()=>({...e[0]}));let n=[0];for(let t=1;t<e.length;t++)n.push(n[t-1]+ke(e[t-1],e[t]));let r=n.at(-1),i=[],a=1;for(let o=0;o<t;o++){let s=r*o/(t-1);for(;a<e.length-1&&n[a]<s;)a++;let c=(s-n[a-1])/(n[a]-n[a-1]||1);i.push({x:e[a-1].x+(e[a].x-e[a-1].x)*c,y:e[a-1].y+(e[a].y-e[a-1].y)*c})}return i}function je(e,t,n=14){let[r,i]=e,a=i.x-r.x,o=i.y-r.y,s=Math.hypot(a,o)||1,c=a/s,l=o/s,u=(t.x-r.x)*c+(t.y-r.y)*l,d={x:r.x+c*u,y:r.y+l*u},f={x:2*d.x-t.x,y:2*d.y-t.y},p=ke(t,d)*.44,m=[];for(let e=0;e<n;e++){let r=e/(n-1),i=t.x+(f.x-t.x)*r,a=t.y+(f.y-t.y)*r,o=Math.sin(Math.PI*r)*p;m.push({x:i-c*o,y:a-l*o})}return m}function Me(e,t={x:46,y:-128},n=12){return Array.from({length:n},(r,i)=>{let a=i/(n-1),o=1-(1-a)*(1-a);return{x:e.x+t.x*o+Math.sin(Math.PI*a)*18,y:e.y+t.y*a}})}function Ne(e,t={x:e.x-90,y:e.y-130},n=10){return Array.from({length:n},(r,i)=>{let a=i/(n-1);return{x:e.x+(t.x-e.x)*a,y:e.y+(t.y-e.y)*a-Math.sin(Math.PI*a)*14}})}var P={toi:.12,an:.2,keo:.82,nha:.9},F=(e,t)=>`translate(${N(e.x)}px,${N(e.y)}px) scale(${t})`;function Pe(e,t){let n=t[0],r=t.at(-1),i=[{offset:0,transform:F({x:n.x+26,y:n.y+34},1.06),opacity:0,easing:h.den},{offset:P.toi,transform:F(n,1),opacity:1,easing:h.doi}],a=.9;if(e===`cham`)i.push({offset:.2,transform:F(n,a),opacity:1},{offset:.3,transform:F(n,1),opacity:1},{offset:.42,transform:F(n,a),opacity:1},{offset:.52,transform:F(n,1),opacity:1},{offset:P.nha,transform:F(n,1),opacity:1});else if(e===`soi`)i.push({offset:P.an,transform:F(n,a),opacity:1},{offset:P.keo,transform:F(n,a),opacity:1,easing:h.den},{offset:P.nha,transform:F(n,1),opacity:1});else{i.push({offset:P.an,transform:F(n,a),opacity:1,easing:`linear`});let o=P.an;e===`nhac`&&(i.push({offset:.32,transform:F({x:n.x,y:n.y-6},.96),opacity:1,easing:`linear`}),o=.32);let s=Ae(t,Math.min(24,Math.max(6,Math.round(ke(n,r)/18)+4)));s.slice(1).forEach((t,n)=>{let r=o+(P.keo-o)*(n+1)/(s.length-1);i.push({offset:Te(r*1e3)/1e3,transform:F(t,e===`nhac`?.96:a),opacity:1,easing:`linear`})}),i.push({offset:P.nha,transform:F(r,1),opacity:1})}return i.push({offset:1,transform:F({x:r.x+10,y:r.y+14},1),opacity:0}),i}function Fe(){let e=Te(2*Math.PI*9.5);return[{offset:0,strokeDashoffset:e},{offset:P.an,strokeDashoffset:e},{offset:P.keo,strokeDashoffset:0},{offset:1,strokeDashoffset:0}]}function Ie(e,t){let n=t[0];if(e===`cham`||e===`soi`)return{svg:`<g class="bm-muiten"><circle cx="${N(n.x)}" cy="${N(n.y)}" r="30" class="dg"/></g>`,ngon:Ee({tinh:n,giu:e===`soi`})};let r=Ae(t,16),i=r.at(-1),a=r.at(-3),o=ke(a,i)||1,s=(i.x-a.x)/o,c=(i.y-a.y)/o,l={x:i.x-s*12,y:i.y-c*12},u=`M`+[...r.slice(0,-1),l].map(e=>`${N(e.x)} ${N(e.y)}`).join(`L`);return{svg:`<g class="bm-muiten"><path class="nen" d="${u}"/><path class="dg" d="${u}"/><path class="dau" d="${`M${N(i.x+s*4)} ${N(i.y+c*4)}L${N(l.x-c*9)} ${N(l.y+s*9)}L${N(l.x+c*9)} ${N(l.y-s*9)}Z`}"/></g>`,ngon:Ee({tinh:n})}}var Le=`
.bm-ngon{position:absolute;left:0;top:0;width:0;height:0;pointer-events:none;z-index:30;transform-origin:0 0;opacity:0;will-change:transform,opacity}
.bm-ngon svg{position:absolute;left:${N(-we.x)}px;top:${N(-we.y)}px;width:${Se.px}px;height:${Se.px}px;overflow:visible;display:block}
.bm-ngon .vong-giu{display:none}
.bm-ngon.giu .vong-giu{display:inline}
.bm-ngon.tinh{opacity:1;display:none}
.bm-ngon.tinh .vong{stroke-dashoffset:${N(Math.PI*9.5)}}
.bm-muiten{display:none;pointer-events:none}
.bm-muiten .nen{fill:none;stroke:${l.giay};stroke-width:8;stroke-linecap:round;stroke-linejoin:round}
.bm-muiten .dg{fill:none;stroke:${l.than};stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:.1 9}
.bm-muiten circle.dg{stroke-width:4;stroke-dasharray:.1 10;paint-order:stroke}
.bm-muiten .dau{fill:${l.than};stroke:${l.giay};stroke-width:2.6;stroke-linejoin:round;paint-order:stroke}
.bm-tay{fill:currentColor;flex:none;display:block}
/* Giảm chuyển động: ngón chạy ẩn đi, bàn tay đứng yên và mũi tên chấm hiện ra. Bản xem ép bằng .bm-giam */
@media (prefers-reduced-motion:reduce){.bm-ngon:not(.tinh){display:none}.bm-ngon.tinh{display:block}.bm-muiten{display:inline}}
.bm-giam .bm-ngon:not(.tinh){display:none}.bm-giam .bm-ngon.tinh{display:block}.bm-giam .bm-muiten{display:inline}
`,I={hoe:`#D9A11C`,hoe2:`#E6C25C`,giay:l.bong,vang:`#C4412B`},Re=`
.gg{
  --diep:${l.diep}; --giay:${l.giay}; --than:${l.than}; --hoe:${l.hoe}; --hoe2:${l.hoe2};
  --hoe-sam:${I.hoe}; --hoe2-sam:${I.hoe2}; --bong:${l.bong}; --vang:${l.vang}; --vang-sam:${I.vang};
  --cham:${l.cham}; --tram:${l.tram}; --go2:${l.go2}; --diep2:${l.diep2};
  --chu:${d.chinh}; --chu-dam:${d.dam}; --chu-phu:${d.phu}; --chu-mo:${d.mo};
  --ke:rgba(51,41,31,.10); --ke2:rgba(51,41,31,.18); --mat-chip:#F6EFE2;
  --tuc:${m.tuc}ms; --nhanh:${m.nhanh}ms; --vua:${m.vua}ms; --cham-t:${m.cham}ms; --xa:${m.xa}ms;
  --den:${h.den}; --di:${h.di}; --doi:${h.doi};
  --f-ten:${f.ten}; --f-chu:${f.chu}; --f-so:${f.so};
  color:var(--chu); font-family:var(--f-chu);
}
.gg .ic{width:24px;height:24px;fill:currentColor;flex:none;overflow:visible;display:block}
.gg .ic .k{transform-box:view-box}

/* ── Nút: Chính · Phụ · Tròn ── */
.gg .n{--s:${p.bong-1}px;--sc:var(--bong);position:relative;display:inline-flex;align-items:center;justify-content:center;gap:9px;
  border:0;margin:0;padding:0 20px 0 16px;height:${p.caoPhu}px;border-radius:${p.caoPhu/2}px;cursor:pointer;
  background:var(--giay);color:var(--than);font:800 18px/1 var(--f-ten);letter-spacing:.005em;
  box-shadow:inset 0 0 0 1px var(--ke),0 var(--s) 0 var(--sc);
  transition:transform var(--tuc) var(--doi),box-shadow var(--tuc) var(--doi),background-color var(--nhanh) var(--doi),opacity var(--nhanh) var(--doi);
  -webkit-tap-highlight-color:transparent;touch-action:manipulation;user-select:none;-webkit-user-select:none}
.gg .n::after{content:"";position:absolute;inset:-6px;border-radius:inherit}
.gg .n .ic{width:22px;height:22px}
.gg .n-chinh{--s:${p.bong}px;--sc:var(--hoe-sam);height:${p.caoChinh}px;border-radius:${p.caoChinh/2}px;padding:0 30px 0 24px;
  background:var(--hoe);font-size:22px;box-shadow:0 var(--s) 0 var(--sc)}
.gg .n-chinh .ic{width:28px;height:28px}
.gg .n-tron{width:${p.cham}px;height:${p.cham}px;padding:0;border-radius:50%}
.gg .n-tron .ic{width:24px;height:24px}
.gg .n-tron.lon{width:64px;height:64px}
.gg .n-tron.lon .ic{width:30px;height:30px}
.gg .n-tron.nho{width:40px;height:40px;--s:2px}
.gg .n-tron.nho .ic{width:20px;height:20px}
.gg .n.nhan{transform:translateY(var(--s));box-shadow:inset 0 0 0 1px var(--ke),0 0 0 var(--sc)}
.gg .n-chinh.nhan{box-shadow:0 0 0 var(--sc)}
.gg .n.bat{background:var(--hoe2);--sc:var(--hoe2-sam)}
.gg .n.khoa{opacity:${p.nhoa};transform:translateY(var(--s));box-shadow:inset 0 0 0 1px var(--ke),0 0 0 var(--sc)}
.gg .n.khoa.nhan{transform:translateY(calc(var(--s) + 2px))}
.gg .n:focus-visible,.gg .cc:focus-visible,.gg .chip:focus-visible,.gg .ct:focus-visible,.gg .gay-lop:focus-visible{outline:3px solid var(--cham);outline-offset:3px}

/* triện "mới": con dấu son nhỏ, lệch 8°, một chấm khoét giữa — đóng xuống một lần */
.gg .moi{position:absolute;top:-6px;right:-6px;width:17px;height:17px;border-radius:4px;background:var(--vang);transform:rotate(8deg);
  box-shadow:0 2px 0 var(--vang-sam);pointer-events:none}
.gg .moi::after{content:"";position:absolute;left:50%;top:50%;width:5px;height:5px;margin:-2.5px 0 0 -2.5px;border-radius:50%;background:var(--giay)}
.gg .moi.dong{animation:dongTrien var(--vua) var(--den) both}
@keyframes dongTrien{0%{transform:rotate(8deg) scale(1.7);opacity:0}55%{transform:rotate(8deg) scale(.9);opacity:1}100%{transform:rotate(8deg) scale(1)}}

/* ── Dock công cụ (V4) ── */
.gg .dock{display:inline-flex;gap:2px;padding:5px 8px;background:var(--giay);border-radius:24px;box-shadow:inset 0 0 0 1px var(--ke),0 3px 0 var(--bong)}
.gg .cc{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;width:68px;height:60px;padding:0;border:0;
  background:none;color:var(--than);cursor:pointer;font:700 12.5px/1 var(--f-chu);-webkit-tap-highlight-color:transparent;touch-action:manipulation;user-select:none;-webkit-user-select:none;
  transition:opacity var(--nhanh) var(--doi)}
.gg .cc .dia{position:relative;display:grid;place-items:center;width:46px;height:34px;border-radius:12px;transition:transform var(--tuc) var(--doi)}
.gg .cc .dia::before{content:"";position:absolute;inset:0;border-radius:inherit;background:var(--hoe2);transform:scale(.35);opacity:0;
  transition:transform var(--nhanh) var(--di),opacity var(--nhanh) var(--di)}
.gg .cc.bat .dia::before{transform:none;opacity:1;transition:transform var(--nhanh) var(--den),opacity var(--nhanh) var(--den)}
.gg .cc .ic{position:relative;width:26px;height:26px}
.gg .cc span{color:var(--chu-dam);white-space:nowrap}
.gg .cc.nhan .dia{transform:translateY(2px)}
.gg .cc.khoa{opacity:${p.nhoa}}
.gg .cc .dem{position:absolute;top:1px;right:7px;min-width:19px;height:19px;padding:0 5px;border-radius:10px;background:var(--than);color:var(--giay);font:500 12px/19px var(--f-so);text-align:center}
.gg .cc .moi{top:0;right:8px}

/* ── Chip: luôn dẫn tới một chỗ ── */
.gg .chip{position:relative;display:inline-flex;align-items:center;gap:8px;height:${p.caoChip}px;padding:0 12px 0 10px;border:0;border-radius:${p.caoChip/2}px;
  background:var(--mat-chip);box-shadow:inset 0 0 0 1px var(--ke);color:var(--than);font:700 15px/1 var(--f-chu);cursor:pointer;
  transition:background-color var(--nhanh) var(--doi),transform var(--tuc) var(--doi);-webkit-tap-highlight-color:transparent;user-select:none;-webkit-user-select:none}
.gg .chip::after{content:"";position:absolute;inset:-4px}
.gg .chip .ic{width:20px;height:20px}
.gg .chip .mui{width:14px;height:14px;opacity:.55}
.gg .chip.nhan{background:var(--hoe2);transform:translateY(1px)}
.gg .chip.khoa{opacity:${p.nhoa}}
.gg .chip.hoan{background:var(--hoe2);box-shadow:inset 0 0 0 1px var(--ke),0 3px 0 var(--hoe2-sam)}

/* ── Công tắc (khu người lớn) ── */
.gg .ct{position:relative;display:inline-flex;align-items:center;gap:10px;border:0;background:none;padding:0;cursor:pointer;font:700 15px/1.2 var(--f-chu);color:var(--than)}
.gg .ct .ray{position:relative;width:50px;height:30px;border-radius:15px;background:#E6DCCB;box-shadow:inset 0 0 0 1px var(--ke);transition:background-color var(--nhanh) var(--doi)}
.gg .ct .num{position:absolute;top:2px;left:2px;width:26px;height:26px;border-radius:50%;background:var(--giay);box-shadow:inset 0 0 0 1px var(--ke),0 2px 0 var(--bong);
  display:grid;place-items:center;transition:transform var(--vua) var(--den)}
.gg .ct .num .ic{width:15px;height:15px}
.gg .ct[aria-checked="true"] .ray{background:var(--hoe)}
.gg .ct[aria-checked="true"] .num{transform:translateX(20px)}

/* ── Gáy lớp: tab treo dưới dải trên ── */
.gg .gay{display:flex;gap:6px}
.gg .gay-lop{position:relative;display:inline-flex;align-items:center;gap:7px;height:38px;padding:0 13px 0 11px;border:0;border-radius:0 0 13px 13px;
  background:var(--giay);box-shadow:inset 0 0 0 1px var(--ke),0 3px 0 var(--bong);font:700 14px/1 var(--f-chu);color:var(--than);cursor:pointer;
  transition:transform var(--vua) var(--den),background-color var(--nhanh) var(--doi)}
.gg .gay-lop i{width:10px;height:10px;border-radius:50%;flex:none}
.gg .gay-lop b{font:500 12px/1 var(--f-so);color:var(--chu-phu)}
.gg .gay-lop.tren{background:var(--hoe2);box-shadow:inset 0 0 0 1px var(--ke),0 3px 0 var(--hoe2-sam)}
.gg .gay-lop.boc{transform:translateY(-7px);opacity:.6}

/* ── Thanh Tách: icon hai đầu thay chữ ── */
.gg .thanh{display:inline-flex;align-items:center;gap:12px;height:52px;padding:0 16px;border-radius:26px;background:var(--giay);box-shadow:inset 0 0 0 1px var(--ke),0 3px 0 var(--bong)}
.gg .thanh input{-webkit-appearance:none;appearance:none;width:170px;height:28px;background:none;margin:0}
.gg .thanh input::-webkit-slider-runnable-track{height:4px;border-radius:2px;background:linear-gradient(90deg,var(--than) var(--p,100%),#E6DCCB var(--p,100%))}
.gg .thanh input::-moz-range-track{height:4px;border-radius:2px;background:#E6DCCB}
.gg .thanh input::-moz-range-progress{height:4px;border-radius:2px;background:var(--than)}
.gg .thanh input::-webkit-slider-thumb{-webkit-appearance:none;width:26px;height:26px;margin-top:-11px;border-radius:50%;background:var(--giay);box-shadow:inset 0 0 0 1px var(--ke2),0 2px 0 var(--bong)}
.gg .thanh input::-moz-range-thumb{width:26px;height:26px;border:0;border-radius:50%;background:var(--giay);box-shadow:inset 0 0 0 1px var(--ke2),0 2px 0 var(--bong)}
.gg .thanh output{font:500 15px/1 var(--f-so);min-width:36px;text-align:right}

/* ── Thẻ bộ phận (V5) ── */
.gg .the{position:relative;display:flex;flex-direction:column;gap:12px;padding:20px 18px 18px;background:var(--giay);border-radius:22px;box-shadow:inset 0 0 0 1px var(--ke),0 3px 0 var(--bong)}
.gg .the .mat{display:flex;align-items:center;gap:8px;font:700 13px/1 var(--f-chu);color:var(--chu-phu)}
.gg .the .mat i{width:10px;height:10px;border-radius:50%}
.gg .the h4{margin:0;font:800 28px/1.05 var(--f-ten);color:var(--than)}
.gg .the .en{margin:-6px 0 0;font:italic 400 15px/1.25 var(--f-chu);color:var(--chu-phu)}
.gg .the p{margin:0;font:400 17px/1.45 var(--f-chu);color:var(--chu)}
.gg .the .hang{display:flex;flex-wrap:wrap;gap:8px}
.gg .the .hanh{display:flex;gap:10px;margin-top:auto;align-items:center}
.gg .the .dong{position:absolute;top:12px;right:12px}

/* nhãn tạm: nhấn giữ nút icon thì hiện tên (T3) */
.gg .nhan-tam{position:absolute;z-index:40;padding:7px 12px 6px;border-radius:999px;background:var(--than);color:var(--giay);font:800 15px/1 var(--f-ten);
  white-space:nowrap;pointer-events:none;transform:translate(-50%,calc(-100% - 10px)) scale(.92);opacity:0;transition:opacity var(--nhanh) var(--di),transform var(--nhanh) var(--di)}
.gg .nhan-tam.mo{opacity:1;transform:translate(-50%,calc(-100% - 10px));transition:opacity var(--nhanh) var(--den),transform var(--nhanh) var(--den)}

/* người dẫn: triện son có con cóc khoét */
.gg .coc{position:relative;width:64px;height:64px;border:0;padding:0;border-radius:50%;background:var(--giay);cursor:pointer;display:grid;place-items:center;
  box-shadow:inset 0 0 0 1px var(--ke),0 3px 0 var(--bong);transition:transform var(--tuc) var(--doi),box-shadow var(--tuc) var(--doi)}
.gg .coc .trien{width:44px;height:44px;border-radius:12px;background:var(--vang);transform:rotate(-4deg);display:grid;place-items:center;box-shadow:0 2px 0 var(--vang-sam)}
.gg .coc .ic{width:32px;height:32px;fill:var(--giay)}
.gg .coc.nhan{transform:translateY(3px);box-shadow:inset 0 0 0 1px var(--ke),0 0 0 var(--bong)}

@media (prefers-reduced-motion:reduce){.gg *{transition-duration:120ms!important}.gg .moi.dong{animation:none}}
`,ze=e=>String(Math.round(e*10)/10),Be=0,Ve={ms:4e3,phong:1.06,chay:m.tran};function He(e){let t=e.nhan??`Kéo nắp mang ra`;return`<button type="button" class="bm-nap${e.tho?` bm-tho`:``}" data-nap="${e.nap??`nap-mang`}" aria-label="${t}" style="left:${ze(e.x)}px;top:${ze(e.y)}px${e.goc?`;--goc:${e.goc}deg`:``}">${me(xe.keoNap,`bmn${Be++}_`)}</button>`}function Ue(e){let t=e.d??72;return`<span class="bm-vong" aria-hidden="true" style="left:${ze(e.x-t/2)}px;top:${ze(e.y-t/2)}px;width:${t}px;height:${t}px"></span>`}var We=`
.bm-nap{position:absolute;z-index:12;width:52px;height:52px;margin:-26px 0 0 -26px;padding:0;border:0;border-radius:50%;cursor:grab;
  display:grid;place-items:center;background:${l.giay};color:${l.than};
  box-shadow:inset 0 0 0 ${p.vienChip}px ${l.than},0 3px 0 ${l.than};
  transition:transform ${m.tuc}ms ${h.doi},box-shadow ${m.tuc}ms ${h.doi};touch-action:none;-webkit-tap-highlight-color:transparent}
.bm-nap::after{content:"";position:absolute;inset:-10px;border-radius:50%}
.bm-nap .ic{width:34px;height:34px;fill:currentColor;transform:rotate(var(--goc,0deg))}
.bm-nap.nhan{transform:translateY(3px);box-shadow:inset 0 0 0 ${p.vienChip}px ${l.than},0 0 0 ${l.than}}
.bm-nap:focus-visible{outline:3px solid ${l.cham};outline-offset:3px}

.bm-rach{pointer-events:none}
.bm-rach path{fill:none;stroke-linecap:round;stroke-linejoin:round}
.bm-rach .nen{stroke:${l.giay};stroke-width:11}
.bm-rach .cho{stroke:${I.vang};stroke-width:5.2;stroke-dasharray:12 8}
.bm-rach .xong{stroke:${l.than};stroke-width:4.2}
.bm-rach .dau{fill:${l.giay};stroke:${l.than};stroke-width:3}
.bm-rach .dau-trong{fill:${I.vang}}

.bm-vong{position:absolute;z-index:11;border-radius:50%;pointer-events:none;box-shadow:0 0 0 3px ${l.than},0 0 0 7px ${l.giay}}

/* phập phồng mỗi 4 giây khi em lặng tay; game thêm .bm-tho cho đích của câu đang hỏi và gỡ khi tay chạm */
.bm-tho{animation:bmTho ${Ve.ms}ms ${h.doi} infinite}
g.bm-tho,path.bm-tho{transform-box:fill-box;transform-origin:center}
.bm-vong{animation:bmLoang ${Ve.ms}ms ${h.den} infinite}
@keyframes bmTho{0%,100%{transform:scale(1)}7.5%{transform:scale(${Ve.phong})}15%{transform:scale(1)}}
@keyframes bmLoang{0%{transform:scale(.86);opacity:0}6%{opacity:1}22%{transform:scale(1.32);opacity:0}100%{transform:scale(1.32);opacity:0}}
.bm-rach.bm-tho{animation:none}
.bm-rach.bm-tho .cho{animation:bmRachTho ${Ve.ms}ms ${h.doi} infinite}
.bm-rach.bm-tho .nen{animation:bmRachNen ${Ve.ms}ms ${h.doi} infinite}
@keyframes bmRachTho{0%,15%,100%{stroke-width:5.2}7.5%{stroke-width:8}}
@keyframes bmRachNen{0%,15%,100%{stroke-width:11}7.5%{stroke-width:15}}
/* Giảm chuyển động: không phồng; vòng đích đứng yên, đủ đậm */
@media (prefers-reduced-motion:reduce){.bm-tho,.bm-rach.bm-tho .cho,.bm-rach.bm-tho .nen{animation:none}.bm-vong{animation:none;opacity:1;transform:none}}
.bm-giam .bm-tho,.bm-giam .bm-rach.bm-tho .cho,.bm-giam .bm-rach.bm-tho .nen{animation:none}.bm-giam .bm-vong{animation:none;opacity:1;transform:none}
`,Ge={cauSo:{vi:`Câu {0} / {1}`,en:`Question {0} of {1}`},daTraLoi:{vi:`Đã trả lời`,en:`Answered`},oEm:{vi:`Ở cơ thể em`,en:`In your body`},cauKe:{vi:`Câu tiếp theo`,en:`Next question`},veAo:{vi:`Về ao làng`,en:`Back to the pond`},xemTrenCay:{vi:`Xem trên Cây Đời`,en:`See it on the Tree of Life`},duCau:{vi:`Em đã trả lời đủ năm câu.`,en:`You answered all five questions.`},hoiLon:{vi:`Em còn giữ gì của tổ tiên cá?`,en:`What do you still carry from your fish ancestors?`},namThu:{vi:`Năm thứ em còn giữ từ tổ tiên cá`,en:`Five things you still carry from fish ancestors`},khongCo:{vi:`cá chép không có bộ phận này`,en:`the carp does not have this`},cau:{vi:`Câu {0}`,en:`Question {0}`},conLai:{vi:`Câu {0} trên {1}, đã trả lời {2}`,en:`Question {0} of {1}, {2} answered`}};function L(e,t,...n){return n.reduce((e,t,n)=>e.replaceAll(`{${n}}`,String(t)),Ge[e][t])}var Ke=0,R=(e,t=`ic`)=>{let n=xe[e]??pe[e];return n?me(n,`bm${Ke++}_`,t):``},qe=(e=``)=>`<i class="bm-dau-trien${e?` `+e:``}">${R(`xong`)}</i>`;function Je(e){let t=e.cau.length,n=e.da.findIndex(e=>!e),r=e.so??(n<0?t-1:n),i=e.da.filter(Boolean).length,a=e.du??i===t,o=e.cau.map((t,n)=>{let i=e.da[n]?`da`:n===r&&!e.traLoi&&!a?`nay`:`cho`,o=`${L(`cau`,e.ngon,n+1)}${e.da[n]?`, `+L(`daTraLoi`,e.ngon).toLowerCase():``}`;return`<li class="${i}${e.vua===n?` vua`:``}" title="${o}">${i===`da`?qe():``}</li>`}).join(``),s=a?L(`hoiLon`,e.ngon):e.cau[r].hoi[e.ngon],c=a?`<p class="bm-viec xong">${qe()}<span>${L(`duCau`,e.ngon)}</span></p>`:e.traLoi?`<p class="bm-viec xong">${qe()}<span>${L(`daTraLoi`,e.ngon)}</span></p>`:`<p class="bm-viec">${Oe()}<span>${e.viec??e.cau[r].viec[e.ngon]}</span></p>`;return`<header class="bm-dau" lang="${e.ngon}" aria-label="${L(`conLai`,e.ngon,Math.min(r+1,t),t,i)}"><div class="bm-mi"><span class="bm-so">${L(`cauSo`,e.ngon,a?t:r+1,t)}</span><ol class="bm-hang" aria-hidden="true">${o}</ol></div><h2 class="bm-hoi">${s}</h2>${c}</header>`}function Ye(e){let t=e.cau,n=e.ngon,r=`<span class="bm-trien${t.mat?` mat-di`:``}${e.no?` no`:``}" role="img" aria-label="${t.ten[n]}${t.mat?`, `+L(`khongCo`,n):``}">${R(t.trien)}</span>`;return`<article class="the bm-the${e.lop?` `+e.lop:``}" lang="${n}"><i class="keo" aria-hidden="true"></i><div class="mat" title="${L(`daTraLoi`,n)}">${qe()}${L(`cau`,n,e.so+1)}</div>${r}<h4>${t.ten[n]}</h4>${t.mat?`<p class="en bm-khong">${L(`khongCo`,n)}</p>`:n===`vi`?`<p class="en">${t.ten.en}</p>`:``}<p class="bm-dap">${t.dap[n]}</p><div class="bm-oem"><span class="dia">${R(`em`)}</span><div><b>${L(`oEm`,n)}</b><p>${t.oEm[n]}</p></div></div>`+(e.cuoi?``:`<div class="hanh"><button type="button" class="n n-chinh">${L(`cauKe`,n)}${R(`tiep`)}</button></div>`)+`</article>`}function Xe(e){let t=e.ngon;return`<article class="the bm-the bm-du${e.lop?` `+e.lop:``}" lang="${t}"><i class="keo" aria-hidden="true"></i><div class="mat">${qe()}${L(`cauSo`,t,e.cau.length,e.cau.length)}</div><h4>${L(`namThu`,t)}</h4><ol class="bm-nam">${e.cau.map(e=>`<li><span class="bm-trien nho${e.mat?` mat-di`:``}" aria-hidden="true">${R(e.trien)}</span><div><b>${e.ten[t]}</b><span>${e.ngan[t]}</span></div></li>`).join(``)}</ol></article>`}function Ze(e){return`<div class="bm-cuoi"><button type="button" class="n">${R(`cay`)}${L(`xemTrenCay`,e)}</button><button type="button" class="n n-chinh">${R(`sen`)}${L(`veAo`,e)}</button></div>`}var Qe=`
.bm-dau{display:grid;justify-items:center;gap:4px;text-align:center;color:${d.chinh}}
.bm-mi{display:flex;align-items:center;gap:14px;min-height:28px}
.bm-so{font:800 13px/1.4 ${f.chu};letter-spacing:.14em;text-transform:uppercase;color:${d.phu};padding-top:2px;white-space:nowrap}
.bm-hang{display:flex;align-items:center;gap:9px;list-style:none;margin:0;padding:0}
.bm-hang li{position:relative;flex:none;width:12px;height:12px;border-radius:50%;box-shadow:inset 0 0 0 2px ${d.mo};display:grid;place-items:center}
.bm-hang li.nay{width:18px;height:18px;background:${l.hoe};box-shadow:inset 0 0 0 2.4px ${l.than}}
.bm-hang li.da{width:22px;height:22px;box-shadow:none}
.bm-dau-trien{display:grid;place-items:center;width:20px;height:20px;border-radius:5px;background:${l.vang};transform:rotate(-6deg);box-shadow:0 2px 0 ${I.vang};flex:none}
.bm-dau-trien .ic{width:14px;height:14px;fill:${l.giay}}
.bm-hang li.vua .bm-dau-trien{animation:bmNoNho ${m.vua}ms ${h.den} both}
@keyframes bmNoNho{0%{transform:rotate(-6deg) scale(1.8);opacity:0}55%{transform:rotate(-6deg) scale(.9);opacity:1}100%{transform:rotate(-6deg) scale(1)}}
.bm-hoi{margin:2px 0 0;font:800 32px/1.3 ${f.ten};letter-spacing:-.005em;color:${l.than};text-wrap:balance;max-width:24em}
.bm-viec{display:inline-flex;align-items:center;gap:10px;margin:2px 0 0;font:700 18px/1.4 ${f.chu};color:${d.dam}}
.bm-viec .bm-tay{width:24px;height:24px;color:${l.than}}
.bm-viec.xong .bm-dau-trien{width:22px;height:22px}

.gg .bm-the{gap:14px;padding:24px 22px 20px}
.gg .bm-the .mat{gap:9px;font:800 12.5px/1.4 ${f.chu};letter-spacing:.12em;text-transform:uppercase;color:${d.phu};padding-right:78px}
.gg .bm-the .mat .bm-dau-trien{width:18px;height:18px;border-radius:4px}
.gg .bm-the .mat .bm-dau-trien .ic{width:12px;height:12px}
.gg .bm-the h4{font-size:34px;line-height:1.15;padding-right:78px;margin-top:2px}
.gg .bm-the .en{margin-top:-10px}
.gg .bm-the .bm-khong{font-style:normal;font-weight:700;color:${I.vang}}
.gg .bm-the .bm-dap{font:400 17px/1.45 ${f.chu};color:${d.chinh}}
.bm-trien{position:absolute;top:20px;right:20px;width:62px;height:62px;border-radius:16px;background:${l.vang};transform:rotate(-6deg);
  display:grid;place-items:center;box-shadow:0 3px 0 ${I.vang};overflow:hidden}
.bm-trien .ic{width:40px;height:40px;fill:${l.giay}}
.bm-trien.mat-di::after{content:"";position:absolute;left:-4px;right:-4px;top:50%;height:5px;margin-top:-2.5px;background:${l.giay};transform:rotate(-45deg)}
.bm-trien.no{animation:bmNo ${m.vua}ms ${h.den} both}
@keyframes bmNo{0%{transform:rotate(-6deg) scale(1.7);opacity:0}55%{transform:rotate(-6deg) scale(.92);opacity:1}100%{transform:rotate(-6deg) scale(1)}}
.bm-oem{display:grid;grid-template-columns:40px minmax(0,1fr);gap:12px;align-items:start;padding:14px 16px 15px 12px;border-radius:16px;background:var(--mat-chip,#F6EFE2);box-shadow:inset 0 0 0 1px var(--ke)}
.bm-oem .dia{width:40px;height:40px;border-radius:50%;background:${l.giay};display:grid;place-items:center;box-shadow:inset 0 0 0 1px var(--ke)}
.bm-oem .dia .ic{width:26px;height:26px;fill:${l.than}}
.bm-oem b{display:block;font:800 12.5px/1.4 ${f.chu};letter-spacing:.12em;text-transform:uppercase;color:${d.phu};padding-top:1px}
.bm-oem p{margin:2px 0 0;font:600 16px/1.45 ${f.chu};color:${d.chinh}}
.gg .bm-the .hanh{margin-top:auto}
.gg .bm-the .hanh .n-chinh{width:100%;gap:10px;padding:0 22px 0 28px}

.gg .bm-du h4{font-size:28px;line-height:1.2;padding-right:0}
.bm-nam{list-style:none;margin:0;padding:0;display:grid;gap:12px}
.bm-nam li{display:grid;grid-template-columns:34px minmax(0,1fr);gap:12px;align-items:center}
.bm-nam b{display:block;font:800 18px/1.25 ${f.ten};color:${l.than}}
.bm-nam span{display:block;font:400 15px/1.4 ${f.chu};color:${d.dam}}
.bm-trien.nho{position:relative;top:auto;right:auto;width:32px;height:32px;border-radius:9px;box-shadow:0 2px 0 ${I.vang}}
.bm-trien.nho .ic{width:21px;height:21px}
.bm-trien.nho.mat-di::after{height:3px;margin-top:-1.5px}
.bm-cuoi{display:flex;gap:12px;align-items:center;justify-content:flex-end}

@media (prefers-reduced-motion:reduce){.bm-trien.no,.bm-hang li.vua .bm-dau-trien{animation:bmMo 120ms linear both}}
@keyframes bmMo{from{opacity:0}to{opacity:1}}
`,$e=Le+We+Qe;function et(e,t,n){let r=e*374761393+t*668265263+n*0x14057b7ef7678100;return r=(r^r>>>13)>>>0,r=Math.imul(r,1274126177)>>>0,((r^r>>>16)>>>0)/4294967295}var tt=e=>e*e*(3-2*e);function nt(e){return(t,n)=>{let r=Math.floor(t),i=Math.floor(n),a=tt(t-r),o=tt(n-i),s=et(r,i,e),c=et(r+1,i,e),l=et(r,i+1,e),u=et(r+1,i+1,e),d=s+(c-s)*a;return(d+(l+(u-l)*a-d)*o)*2-1}}function rt(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return(t>>>0)%1e5}function it(e){let t=e>>>0||1;return()=>(t^=t<<13,t>>>=0,t^=t>>17,t^=t<<5,t>>>=0,t/4294967295)}var z={amp:2.8,freq:.02,run:.7,runFreq:.09,lech:[-5,3.6],lechLac:1.6,day:.3,inkFloor:.74,buoc:3.5},at=nt(4099),ot=nt(7717);function st(t,n,i=z.amp){let a=z.freq,o=z.runFreq,s=z.run*(i/z.amp),c=Math.min(z.buoc,Math.max(.8,r(t,n)/16));return e(t,n,c).map(([e,t])=>[e+at(e*a,t*a)*i+at(e*o+17.3,t*o)*s,t+at(e*a+91.7,t*a+43.1)*i+at(e*o,t*o+57.9)*s])}var B=e=>(Math.round(e*10)/10).toString();function V(e,t){if(!e.length)return``;let n=`M${B(e[0][0])} ${B(e[0][1])}`;for(let t=1;t<e.length;t++)n+=`L${B(e[t][0])} ${B(e[t][1])}`;return t?n+`Z`:n}function ct(e,t,n,r=!t){let i=e.length;if(i<2)return``;let a=[0];for(let t=1;t<i;t++)a.push(a[t-1]+Math.hypot(e[t][0]-e[t-1][0],e[t][1]-e[t-1][1]));let o=a[i-1]||1,s=Math.min(o*.3,n*4),c=[],l=[],u=[];for(let d=0;d<i;d++){let f=t?e[(d-1+i)%i]:e[Math.max(0,d-1)],p=t?e[(d+1)%i]:e[Math.min(i-1,d+1)],m=p[0]-f[0],h=p[1]-f[1],g=Math.hypot(m,h)||1,_=-h/g,v=m/g,y=n*(1+z.day*ot(e[d][0]*.013,e[d][1]*.013+a[d]*.004));if(r&&!t){let e=Math.min(a[d],o-a[d]);e<s&&(y*=.35+.65*Math.sin(e/s*Math.PI/2))}y=Math.max(.6,y)/2,u.push([_*y,v*y]),c.push([e[d][0]+_*y,e[d][1]+v*y]),l.push([e[d][0]-_*y,e[d][1]-v*y])}if(t)return V(c,!0)+V(l.reverse(),!0);let d=(e,t,n)=>{let r=[],[i,a]=t,o=-a*n,s=i*n;for(let t=1;t<8;t++){let c=t/8*Math.PI;r.push([e[0]-i*Math.cos(c)*n+o*Math.sin(c),e[1]-a*Math.cos(c)*n+s*Math.sin(c)])}return r};return V([...c,...d(e[i-1],u[i-1],-1),...l.reverse(),...d(e[0],u[0],1)],!0)}function lt(e,t){let n=it(rt(e)+1);return[(z.lech[0]+(n()*2-1)*z.lechLac)*t,(z.lech[1]+(n()*2-1)*z.lechLac)*t]}function ut(e){let t=Object.entries(e.the??{}).map(([e,t])=>` ${e}="${t}"`).join(``),n=`<g id="${e.id}"${t}>`;e.cat&&(n+=`<clipPath id="cat-${e.id}"><path d="${V(e.cat,!0)}"/></clipPath><g clip-path="url(#cat-${e.id})">`);let r=e.mang??[],i=r.filter(e=>!e.sac);if(i.length&&!e.trongSuot){n+=`<g class="khoet">`;for(let e of i)n+=`<path class="m-diep" d="${V(st(e.pts,!0,(e.amp??1)*z.amp),!0)}"/>`;n+=`</g>`}if(i.length){let[t,r]=lt(e.lechTheo??e.id,e.lechK??1);n+=`<g class="ban-mau" transform="translate(${B(t)} ${B(r)})" filter="url(#loang)">`;for(let e of i)n+=`<path class="m-${e.muc}" d="${V(st(e.pts,!0,(e.amp??1)*z.amp),!0)}"/>`;n+=`</g>`}for(let e of r.filter(e=>e.sac))n+=`<path class="m-${e.muc}" d="${V(st(e.pts,!0,(e.amp??1)*z.amp*.5),!0)}"/>`;let a=e.net??[];if(a.length){n+=`<g class="ban-net" filter="url(#tho)">`;for(let e of a){let t=!!e.kin,r=st(e.pts,t,(e.amp??1)*z.amp*.92);n+=`<path class="m-${e.muc??`than`}" d="${ct(r,t,e.w,e.nhon??!t)}"/>`}n+=`</g>`}return e.cat&&(n+=`</g>`),n+`</g>`}function dt(e,t){let n=z.inkFloor,r=1-n;return`
<filter id="loang" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" baseFrequency="0.018 0.03" numOctaves="3" seed="11" result="rong"/>
  <feTurbulence type="fractalNoise" baseFrequency="0.55 0.09" numOctaves="2" seed="23" result="hat"/>
  <feComposite in="rong" in2="hat" operator="arithmetic" k1="0" k2="0.78" k3="0.22" k4="0" result="tron"/>
  <feColorMatrix in="tron" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  ${B(r*3.2)} 0 0 0 ${(n-r*1.1).toFixed(3)}" result="a"/>
  <feComposite in="SourceGraphic" in2="a" operator="in"/>
</filter>
<filter id="tho" x="-2%" y="-2%" width="104%" height="104%">
  <feTurbulence type="fractalNoise" baseFrequency="0.21" numOctaves="2" seed="5" result="n"/>
  <feDisplacementMap in="SourceGraphic" in2="n" scale="2.6" xChannelSelector="R" yChannelSelector="G"/>
</filter>
<filter id="soGiay" x="0" y="0" width="${e}" height="${t}" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feTurbulence type="fractalNoise" baseFrequency="0.62 0.007" numOctaves="2" seed="4021" result="so"/>
  <feColorMatrix in="so" type="matrix" values="0 0 0 0 0.36  0 0 0 0 0.27  0 0 0 0 0.16  -0.07 0 0 0 0.042" result="soMau"/>
  <feTurbulence type="fractalNoise" baseFrequency="0.045 0.004" numOctaves="1" seed="5507" result="rong"/>
  <feColorMatrix in="rong" type="matrix" values="0 0 0 0 0.45  0 0 0 0 0.33  0 0 0 0 0.2  0.07 0 0 0 -0.026" result="rongMau"/>
  <feTurbulence type="turbulence" baseFrequency="0.9" numOctaves="1" seed="9137" result="hat"/>
  <feColorMatrix in="hat" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 0.97  4 0 0 0 -2.7" result="diep"/>
  <feMerge><feMergeNode in="rongMau"/><feMergeNode in="soMau"/><feMergeNode in="diep"/></feMerge>
</filter>`}var ft=1.9,pt=1.15,mt=.7,ht=.45,gt=.32,_t=()=>({mang:[],net:[]});function vt(e,t,n,r=ft,i){e.mang.push({pts:t,muc:n,amp:i}),e.net.push({pts:t,w:r,kin:!0,muc:`go`,amp:i})}function yt(e,t,n=pt,r=`go`,i){e.net.push({pts:t,w:n,muc:r,amp:i})}function bt(e,t,n,r,a=`giay`){e.mang.push({pts:i(t,n,r,r),muc:a,sac:!0},{pts:i(t-r*.18,n,r*.58,r*.62),muc:`than`,sac:!0}),e.net.push({pts:i(t,n,r,r),w:Math.max(.6,r*.32),kin:!0,muc:`go`,amp:.3})}var xt=(e,t,n={})=>({id:e,mang:t.mang,net:t.net,...n});function St(e,t){return{...e,mang:e.mang?.map(e=>({...e,pts:e.pts.map(t)})),net:e.net?.map(e=>({...e,pts:e.pts.map(t)})),cat:e.cat?.map(t)}}function Ct(e,t=0,n=0){let r=e*Math.PI/180,i=Math.cos(r),a=Math.sin(r);return([e,r])=>{let o=e-t,s=r-n;return[t+o*i-s*a,n+o*a+s*i]}}var wt=(e,t)=>([n,r])=>[n+e,r+t],Tt=(e,t=e)=>([n,r])=>[n*e,r*t],Et=(...e)=>t=>e.reduce((e,t)=>t(e),t),Dt={hoe:`hoe2`,vang:`vang2`,tram:`tram2`,cham:`cham2`,sen:`sen2`,go:`go2`,hoe2:`hoe3`,vang2:`vang3`,tram2:`tram3`,cham2:`cham3`,sen2:`sen3`,go2:`go3`,bong:`diep2`};function Ot(e){return{...e,mang:e.mang?.map(e=>e.sac&&(e.muc===`than`||e.muc===`giay`)?e:{...e,muc:Dt[e.muc]??e.muc}),net:e.net?.map(e=>({...e,muc:Dt[e.muc??`than`]??e.muc}))}}function kt(e,t){let n=Math.sqrt(t);return{...e,net:e.net?.map(e=>({...e,w:Math.max(.55,e.w*n)}))}}function At(e,t,n){return e.map(e=>{let r=n(e);return[r[0]+(e[0]-r[0])*t,r[1]+(e[1]-r[1])*t]})}function jt(e,t,n,r=0){let i=.25,a=Math.max(1,Math.ceil((n-t)/i)),o=new Float64Array(a+1);for(let n=1;n<=a;n++)o[n]=o[n-1]+i*Math.cos(e(t+(n-.5)*i));let s=r=>{if(r<=t)return(r-t)*Math.cos(e(t));if(r>=t+a*i)return o[a]+(r-t-a*i)*Math.cos(e(n));let s=(r-t)/i,c=Math.floor(s);return o[c]+(o[c+1]-o[c])*(s-c)},c=s(r)-r;return([e,t])=>[s(e)-c,t]}function Mt(e,t,n,r,i,a=1){return o=>{let s=Math.max(0,Math.min(1,(o-e)/t)),c=t*(r[0]+r[1]*s+r[2]*s*s)*a,l=(r[1]+2*r[2]*s)*a,u=2*Math.PI*(s*t/n-i);return Math.atan(l*Math.sin(u)+2*Math.PI/n*c*Math.cos(u))}}function Nt(e,t,n,r,i){let a=t[0]-e[0],o=t[1]-e[1],s=Math.hypot(a,o)||1e-6,c=Math.min(s,n+r-1e-6),l=a/s,u=o/s,d=(n*n-r*r+c*c)/(2*c),f=Math.sqrt(Math.max(0,n*n-d*d)),p=-u*i[0]+l*i[1]>=0?1:-1;return[e[0]+l*d-u*f*p,e[1]+u*d+l*f*p]}function Pt(e,t,n,r){e=(e%1+1)%1;let i=n*t;if(e<t)return[-i/2+i*e/t,0];let a=(e-t)/(1-t);return[i/2-i*a*a*(3-2*a),-r*Math.sin(Math.PI*a)]}function Ft(e,t,n,r,i,a=!1,o=0){let s=Math.PI/180,c=Math.sin(n*s),l=Math.cos(n*s),u=Math.sin(r*s),d=Math.cos(r*s),f=Math.sin(i*s),p=Math.cos(i*s),m=Math.sin(o*s),h=Math.cos(o*s),g=[c*u,-c*d,l],_=[-l*u,l*d,c],v=[d,u,0],y=[v[0]*p+_[0]*f,v[1]*p+_[1]*f,_[2]*f],b=g[0]*h-g[2]*m,x=y[0]*h-y[2]*m,S=a?.9:1,C=a?-.9:0;return t.map(([t,n])=>[e[0]+S*(t*b+n*x),e[1]+C+S*(t*g[1]+n*y[1])])}var It=(e,t,n)=>[e[0]+Math.cos(t*Math.PI/180)*n,e[1]-Math.sin(t*Math.PI/180)*n];function Lt(e,t,n=3){let r=1/0,i=1/0,a=-1/0,o=-1/0;for(let n of Object.keys(t))for(let s=0;s<t[n].so;s++)for(let t of e(n,s))for(let e of[...(t.mang??[]).map(e=>e.pts),...(t.net??[]).map(e=>e.pts)])for(let[t,n]of e)t<r&&(r=t),t>a&&(a=t),n<i&&(i=n),n>o&&(o=n);let s=Math.floor((r-n)/2)*2,c=Math.floor((i-n)/2)*2;return[s,c,Math.ceil((a+n)/2)*2-s,Math.ceil((o+n)/2)*2-c]}function Rt(e){let t=-1/0;for(let n of e)for(let e of n.mang??[])for(let[,n]of e.pts)n>t&&(t=n);return Math.round(t*10)/10}var zt=42,Bt=e=>e.lap&&(!!e.buoc||!!e.doi);function Vt(e){let t=e.so*e.ms;if(!Bt(e)&&!(!e.lap&&t<=600))return e.so;let n=Math.min(Math.floor(24/e.so),Math.round(t/zt/e.so));return e.so*Math.max(1,n)}var Ht=e=>e.hoa??(e.lap&&!Bt(e)&&e.so*e.ms>1e3);function Ut(e,t,n=!1){let r=n?Vt(e):e.so,i=r===e.so?Math.floor(t):Math.floor(t*r/e.so+1e-9)*e.so/r;return e.lap?(i%e.so+e.so)%e.so:Math.max(0,Math.min(e.so-1,i))}var Wt=(e,t)=>t.muot??!!e.muot,Gt=e=>Number.isInteger(e)?`k${e}`:`k${e.toFixed(2)}`;function Kt(e,t,n={}){let r=e.dong[t],i=Ut(r,n.khung??0,Wt(e,r)),a=(n.huong??1)===1,o=Math.round((n.xoay??0)/15)*15%360,s=$t(e.ve(t,i),`${e.id}-${t}-${Gt(i)}${a?`-p`:`-t`}${o?`-r${o}`:``}`,e,!!e.chet?.includes(t),a);return o?s.map(e=>St(e,Ct(o))):s}function qt(e,t=!1){let n=t?Vt(e):e.so;return Array.from({length:n},(t,r)=>n===e.so?r:r*e.so/n)}function Jt(e,t,n){if(n){let n=(t%e+e)%e,r=Math.floor(n);return[r,(r+1)%e,n-r]}let r=Math.max(0,Math.min(e-1,t)),i=Math.floor(r);return[i,Math.min(e-1,i+1),r-i]}function Yt(e,t,n=!0){let[r,i,a]=Jt(e.length,t,n);return e[r]+(e[i]-e[r])*a}function Xt(e,t,n=!0){let[r,i,a]=Jt(e.length,t,n);return[e[r][0]+(e[i][0]-e[r][0])*a,e[r][1]+(e[i][1]-e[r][1])*a]}function Zt(e,t,n){if(n<=0||e===t)return e;if(n>=1)return t;let r=n<.5?e:t;if(typeof e==`number`&&typeof t==`number`)return e+(t-e)*n;if(Array.isArray(e)&&Array.isArray(t))return e.length!==t.length||!e.every(e=>typeof e==`number`||Array.isArray(e))?r:e.map((e,r)=>Zt(e,t[r],n));if(e&&t&&typeof e==`object`&&typeof t==`object`&&Object.getPrototypeOf(e)===Object.prototype){let i={},a=e,o=t;for(let e of new Set([...Object.keys(a),...Object.keys(o)]))i[e]=e in a&&e in o?Zt(a[e],o[e],n):r[e];return i}return r}function Qt(e,t,n){let r=Math.round(e);if(Math.abs(e-r)<1e-9)return t(n?(r%n+n)%n:r);let i=Math.floor(e),a=e-i;return Zt(t(n?(i%n+n)%n:i),t(n?((i+1)%n+n)%n:i+1),a)}function $t(e,t,n,r,i){let a=n.netK??1,o=ht*(n.ampK??1);return e.map(e=>{let s=i?St(e,([e,t])=>[-e,t]):e;return r&&(s=Ot(s)),{...s,id:`${t}-${e.id}`,lechTheo:`con-${n.id}`,lechK:(e.lechK??1)*gt,mang:s.mang?.map(e=>({...e,amp:(e.amp??1)*o})),net:s.net?.map(e=>({...e,w:Math.max(.45,e.w*a),amp:(e.amp??1)*o}))}})}function H(t,n,r=n,i=!0){let a=e(t,!1,3),o=a.length,s=[],c=[],l=[],u=[],d=[];for(let e=0;e<o;e++){let t=a[Math.max(0,e-1)],i=a[Math.min(o-1,e+1)],f=Math.hypot(i[0]-t[0],i[1]-t[1])||1,p=[(i[0]-t[0])/f,(i[1]-t[1])/f],m=[-p[1],p[0]],h=(n+(r-n)*(e/(o-1)))/2;l.push(p),u.push(m),d.push(h),s.push([a[e][0]+m[0]*h,a[e][1]+m[1]*h]),c.push([a[e][0]-m[0]*h,a[e][1]-m[1]*h])}let f=(e,t)=>{if(!i||d[e]<.8)return[];let n=[];for(let r=1;r<10;r++){let i=r/10*Math.PI,o=Math.cos(i)*t,s=Math.sin(i)*t;n.push([a[e][0]+d[e]*(u[e][0]*o+l[e][0]*s),a[e][1]+d[e]*(u[e][1]*o+l[e][1]*s)])}return n};return{vung:[...s,...f(o-1,1),...c.slice().reverse(),...f(0,-1)],trai:s,phai:c}}var en=2.6,U=1.5,W=.9,tn=`go`,G=`hoe2`,nn=`hoe`,rn=`go2`,K=()=>({mang:[],net:[]});function q(e,t,n,r=en){e.mang.push({pts:t,muc:n}),e.net.push({pts:t,w:r,kin:!0,muc:tn})}var J=(e,t,n=U,r=tn)=>{e.net.push({pts:t,w:n,muc:r})},Y=(e,t,n,r,a)=>{e.mang.push({pts:i(t,n,r,r*.86,0,18),muc:a,sac:!0})},X=(e,t)=>({id:e,mang:t.mang,net:t.net}),an={nghieng:0,cui:0,mieng:0,hong:0,tui:0,mat:`mo`,nhin:[0,0],tayT:`goi`,tayP:`goi`},on=[[-40,6],[-41.5,-6],[-37,-16],[-25,-22.5],[0,-24.5],[25,-22.5],[37,-16],[41.5,-6],[40,6],[31,14],[15,19.5],[0,20.5],[-15,19.5],[-31,14]],sn=19,cn=-20,Z=9.5,ln=[[-31.5,-8,6.6,12.5,30],[31.5,-8,6.6,12.5,-30]];function un(e,t){return!(t>3||t<-21||Math.abs(e)>34-Math.max(0,-t-12)*.9||Math.hypot(Math.abs(e)-sn,t-cn)<12.9||Math.abs(e)<9&&t>-10)}var dn=(()=>{let e=it(7351),t=[];for(let n=0;n<400&&t.length<30;n++){let n=(e()*2-1)*36,r=-22+e()*25,i=.9+e()*1.4;un(n,r)&&(ln.some(([e,t])=>Math.hypot(n-e,r-t)<11)||t.some(([e,t,a])=>Math.hypot(e-n,t-r)<a+i+2.2)||t.push([n,r,i,e()<.6]))}return t})(),fn=e=>e*Math.PI/180,pn=(e,t,n)=>[e[0]+Math.cos(fn(t))*n,e[1]-Math.sin(fn(t))*n];function mn(e,t,r,a,o=[0,0]){let s=[t*29,-58],[c,l,u,d]={goi:[[44,-36],[36,-17],262,`nam`],mo:[[51,-41],[55,-58],112,`xoe`],tro:[[48,-43],[47,-64],94,`mot`],chap:[[40,-29],[9,-35],84,`chum`],dui:[[50,-52],[50,-74],100,`nam`]}[r],f=r===`goi`?0:o[0]*t,p=r===`goi`?0:o[1],m=[t*c[0],c[1]],h=[t*l[0]+f,l[1]+p],g=t<0?u:180-u,_=pn(h,g,7);a?q(e,H(n([s,m,h],!1,6),10,7).vung,G,U):q(e,H(n([s,m,h],!1,6),13,r===`goi`?19:17).vung,`cham`,U),q(e,H([h,_],9,8.4).vung,G,U);let v=(t,n,r=4.4)=>{let i=pn(_,t,3+n*1.45);q(e,H([pn(_,t,2),i],r,r*.9).vung,G,W),Y(e,i[0]-Math.cos(fn(t))*1.1,i[1]+Math.sin(fn(t))*1.1,1.3,`go`)},y=e=>g+e*(t<0?1:-1);if(d===`xoe`)for(let[e,t]of[[-40,6.4],[-14,8.2],[10,8],[34,6.6]])v(y(e),t);else if(d===`nam`)for(let[e,t]of[[-34,5.6],[-12,6.8],[10,6.6],[32,5.6]])v(y(e),t);else if(d===`mot`){for(let e of[-70,-100,-130])v(y(e),1.6,4.6);v(g,10.5)}else for(let[e,t]of[[-12,7.4],[-4,8.4],[4,8.2],[12,7]])v(y(e),t,3.8);if(q(e,i(_[0],_[1],7.4,6.6,0,28),G,U),r===`dui`){let t=pn(_,g-140,6),n=pn(_,g+4,26);q(e,H([t,n],2.6,2.2).vung,`hoe2`,U),q(e,i(n[0],n[1],3.4,3.4),`vang2`,U)}}function hn(e,t){let r=[t*34,-5];q(e,n([[t*24,-12],[t*40,-13],[t*47,-6],[t*44,-1],[t*28,-1.4],[t*22,-6]],!0,6),G,U);for(let[n,i]of[[-12,8],[-30,10],[-50,10.5],[-72,9],[-96,6]]){let a=t<0?180-n:n,o=pn([r[0]+t*6,r[1]+2],a,i);q(e,H([[r[0]+t*6,r[1]+2],o],2.8,2.3).vung,G,W),Y(e,o[0],o[1],.8,`go`)}J(e,n([[t*38,-2],[t*46,1],[t*50,0]],!1,3),W,`go`)}var gn=[0,-83],_n=[0,-62];function vn(e){let r=!!e.tran,a=Et(([t,n])=>[t,n*(1-.15*e.cui)],wt(gn[0],gn[1]+7*e.cui),Ct(-e.nghieng,_n[0],_n[1])),o=e=>e.map(a),s=(e,t)=>a([e,t]),c=K(),l=K(),u=K(),d=K(),f=K(),p=K(),m=K();hn(c,-1),hn(c,1);let h=1-.035*e.tui,g=[[-25,-63],[-36,-57],[-44,-42],[-48,-24],[-50,-9],[-30,-4.5],[0,-3.5],[30,-4.5],[50,-9],[48,-24],[44,-42],[36,-57],[25,-63],[0,-61]].map(([e,t])=>[e*(t>-52?h:1),t]);if(r){q(l,n(g,!0,6),G),l.mang.push({pts:n([[-30,-40],[-34,-20],[-26,-7],[0,-5.5],[26,-7],[34,-20],[30,-40],[0,-48]],!0,6),muc:`diep2`});for(let[e,t,n]of[[-38,-40,1.6],[-42,-26,1.4],[38,-44,1.5],[41,-28,1.7],[-31,-52,1.3],[32,-53,1.4]])Y(l,e,t,n,`go`)}else{q(l,n(g,!0,6),`cham`),J(l,n([[1,-58],[-12,-53],[-24,-47],[-31,-40]],!1,5),U,tn),J(l,n([[-31,-40],[-33,-24],[-34,-6]],!1,5),W,`cham2`);for(let[e,t]of[[-6,-55.6],[-15.5,-51.4],[-24.5,-46.8]])q(l,i(e,t,1.7,1.7,0,16),`hoe`,W);for(let e of[-16,6,24])J(l,n([[e,-26],[e+1.4,-16],[e+.6,-7]],!1,4),W,`cham2`);q(l,H(n([[-24,-61.5],[-12,-58.5],[0,-57.6],[12,-58.5],[24,-61.5]],!1,5),4.2,4.2,!1).vung,`giay`,W)}let _=e.nhich??[0,0];for(let[t,n]of[[-1,e.tayT],[1,e.tayP]])mn(n===`goi`?u:m,t,n,r,_);if(e.tui>.04){let n=s(0,22+e.tui*9),r=7+17*e.tui,a=4+12.5*e.tui;q(d,i(n[0],n[1],r,a,-e.nghieng,48),`hoe3`,U),J(d,t(n[0],n[1]-a*.1,r*.72,200,340,10,a*.62),W,`go2`),J(d,t(n[0],n[1]-a*.25,r*.4,215,325,8,a*.36),W,`go2`)}if(!r){q(p,o(n([[-31,-24],[-33,-31],[-27,-38.5],[-13,-42.5],[0,-43.5],[13,-42.5],[27,-38.5],[33,-31],[31,-24],[0,-26]],!0,6)),`go`,U);for(let e=0;e<3;e++){let t=-27-e*4.6;J(p,o(n([[-30+e*2.4,t+1.6],[-16,t-3.6],[-1,t-6]],!1,4)),U,`go2`),J(p,o(n([[30-e*2.4,t+1.6],[16,t-3.6],[1,t-6]],!1,4)),U,`go2`)}}q(f,o(n(on,!0,6)),G),f.mang.push({pts:o(n([[-34,9],[-18,11.6],[0,12.2],[18,11.6],[34,9],[28,14.6],[14,19],[0,20],[-14,19],[-28,14.6]],!0,6)),muc:`diep2`});for(let[e,t,n,r,a]of ln){q(f,o(i(e,t,n,r,a,40)),nn,U);for(let[i,o]of[[-.3,-.45],[.25,-.15],[-.2,.15],[.2,.45],[-.05,.7]]){let c=Math.cos(fn(-a)),l=Math.sin(fn(-a)),u=s(e+i*n*c-o*r*l,t+i*n*l+o*r*c);Y(f,u[0],u[1],.8,`go`)}}for(let[e,t,n,r]of dn){let a=s(e,t);r?Y(f,a[0],a[1],n*.8,`go`):(f.mang.push({pts:i(a[0],a[1],n,n*.9,0,18),muc:rn,sac:!0}),Y(f,a[0],a[1]-n*.15,n*.42,`go`))}for(let e of[-1,1]){let t=s(e*5,-3);f.mang.push({pts:i(t[0],t[1],1.4,1,e*20,16),muc:`go`,sac:!0})}let v=e.mieng,y=o(n([[-38,4.4],[-20,8.4],[0,9.6],[20,8.4],[38,4.4]],!1,6));if(v>.05){let e=o(n([[38,4.4],[24,9+6*v],[0,10.2+9*v],[-24,9+6*v],[-38,4.4]],!1,6));q(f,[...y,...e],`sen2`,U),v>.3&&f.mang.push({pts:o(i(0,10.4+6.6*v,9+4*v,1.8+2*v,0,30)),muc:`sen`})}else J(f,y,1.7);J(f,o(t(-38.5,6.6,2.4,110,250,6)),W),J(f,o(t(38.5,6.6,2.4,-70,70,6)),W),e.hong>.04&&e.tui<.04&&q(f,o(i(0,20+e.hong*1.6,13,1.8+2.6*e.hong,0,36)),`diep2`,W);for(let r of[-1,1]){let a=r*sn,s=cn,c=r<0?e.nhuong??0:0;q(f,o(i(a,-19.2,12.1,11.5,0,40)),G,U);let l=o(i(a,s,Z,Z,0,40));if(e.mat===`nham`)f.mang.push({pts:l,muc:G}),J(f,o(t(a,-21.5,Z*.8,200,340,10,3.4)),1.7);else{f.mang.push({pts:l,muc:`hoe`,sac:!0});let[n,r]=e.nhin;f.mang.push({pts:o(i(a+n*2.4,-19+r*2,4.8,2.3,0,30)),muc:`than`,sac:!0}),f.mang.push({pts:o(i(a-2.6,-23.3,1.5,1.5,0,14)),muc:`giay`,sac:!0}),f.mang.push({pts:o([...t(a,s,9.8,160,20,14),...t(a,-24.6+c*.4,Z*.92,18,162,14,2.8)]),muc:G,sac:!0}),e.mat===`hip`?f.mang.push({pts:o([...t(a,s,9.8,200,340,14),...t(a,-13.5,Z*.95,340,200,14,4.4)]),muc:G,sac:!0}):e.mat===`chop`&&(f.mang.push({pts:o([...t(a,s,9.7,192,348,14),...t(a,-18.4,Z*.98,348,192,14,3.2)]),muc:`giay`,sac:!0}),J(f,o(t(a,-18.4,Z*.92,192,348,12,3)),W,`go2`))}f.net.push({pts:l,w:U,kin:!0,muc:tn,amp:.4}),J(f,o(n([[r*8.6,-24-c],[r*15,-31-c*1.4],[r*24,-31.5-c],[r*30,-26]],!1,5)),2),J(f,o(n([[r*9.4,-16],[r*7.6,-10],[r*6,-5.4]],!1,4)),U),J(f,o(n([[r*30,-24],[r*31.4,-18],[r*31,-14]],!1,4)),W)}return[X(`sau`,c),X(`tay-sau`,u),X(`ao`,l),X(`tui`,d),X(`khan`,p),X(`dau`,f),X(`tay`,m)].filter(e=>e.mang?.length||e.net?.length)}function yn(e,t){switch(e){case`ke`:return{...an,nhin:[.1,.1],tayT:`mo`,mieng:[.18,.62,.32,.74][t],hong:[.2,.5,.3,.6][t],nhich:[[0,0],[-1.2,-1.6],[-.4,-.6],[-1.6,-2]][t]};case`hoi`:return{...an,nghieng:9,nhuong:2.2,nhin:[-.35,-.2],tayT:`tro`,mieng:[.22,0,0,0][t],hong:[0,0,.55,0][t],nhich:[[0,0],[0,-1.4],[0,-.6],[0,-1.2]][t]};case`lang`:return{...an,cui:1,mat:`nham`,tayT:`chap`,tayP:`chap`,hong:[0,.45][t]};case`vui`:return{...an,mat:`hip`,tui:[.08,.62,1,.84][t],nghieng:[0,-1.5,-2,-1][t]};case`nghe`:return{...an,nghieng:3,nhin:[.25,0],hong:[0,.55,0,.55,0,.55][t],mat:t===4?`chop`:`mo`}}}var bn=(e,t)=>vn(yn(e,t)),xn={ke:{so:4,ms:150,lap:!0,ghi:`Nói: miệng mở khép, sàn miệng động theo, tay phải ngửa ra phía em nhích theo nhịp câu. Game chạy khi cuộn giấy đang mở và giọng đang đọc, xong thì sang "nghe".`},hoi:{so:4,ms:240,lap:!0,ghi:`Hỏi: đầu nghiêng 9°, gờ trên mắt bên tay giơ nhướng, một ngón trỏ lên. Khung 0 khép miệng sau câu hỏi; khung 1–3 chờ, họng thở một lần.`},lang:{so:2,ms:1100,lap:!0,ghi:`Lặng (nhịp 7, cảm ơn con cá trước khi mổ): cúi đầu, nhắm mắt, chắp tay. Chỉ họng thở chậm. Không chữ, không nhạc.`},vui:{so:4,ms:170,lap:!0,ghi:`Mưa về (nhịp 8): miệng và mũi NGẬM, khí phổi dồn sang túi kêu dưới cằm — phồng, căng, rung, chớm xẹp; hông xẹp khi túi căng. Mắt híp. Cóc nhà đực có một túi kêu đơn.`},nghe:{so:6,ms:300,lap:!0,ghi:`Nghe, chờ em làm: họng phập phồng đều (thở bằng sàn miệng), khung 4 chớp màng mắt thứ ba từ dưới lên.`}},Sn={id:`thay-coc`,vi:`Thầy Cóc`,en:`Master Toad`,la:`Duttaphrynus melanostictus`,noi:`ao`,co:{dai:100,cao:128,day:0,ghi:`ngồi: chạm nền ở y 0, đỉnh khăn y −127 · cóc nhà thật 6–15 cm`},xem:Lt(bn,xn),dong:xn,ve:bn,netK:1,ampK:1.6},Cn=[-46,-133,92,92],wn=0;function Tn(e){let t=wn++;return e.map(e=>ut({...e,id:`${e.id}-${t}`})).join(``)}var En=(e,t=0,n=-1)=>Kt(Sn,e,{khung:t,huong:n}),Dn=()=>Object.entries(c(a)).map(([e,t])=>`.m-${e}{fill:${t}}`).join(``),On=(e,t)=>`<defs><style>${Dn()}</style>${dt(e,t)}</defs>`,kn=e=>e?` role="img" aria-label="${e}"`:` aria-hidden="true"`;function An(e,t){let n=e.length;if(n<2)return e[0]??``;let r=n*t;return e.map((e,i)=>`<g class="tc-k${i===0?` tc-k0`:``}" style="animation:tc-p${n} ${r}ms step-end infinite;animation-delay:${i*t-r}ms">${e}</g>`).join(``)}function jn(){return[2,3,4,5,6,8].map(e=>`@keyframes tc-p${e}{0%{visibility:visible}${(100/e).toFixed(3)}%{visibility:hidden}100%{visibility:hidden}}`).join(``)+`.tc-k{visibility:hidden}html.giam .tc-k{animation:none!important}html.giam .tc-k0{visibility:visible}@media (prefers-reduced-motion:reduce){.tc-k{animation:none!important}.tc-k0{visibility:visible}}`}function Mn(e=`nghe`,t={}){let[n,r,i,a]=Cn,o=t.px??64,s=n+i/2,c=r+a/2,l=i/2,u=`tc-av-${wn++}`,d=Sn.dong[e],f=t.khung===void 0?An(Array.from({length:d.so},(n,r)=>Tn(En(e,r,t.huong??-1))),d.ms):Tn(En(e,t.khung,t.huong??-1));return`<svg class="tc-avatar" viewBox="${n} ${r} ${i} ${a}" width="${o}" height="${o}"${kn(t.nhan)}>${t.tuDu?On(i,a):``}<clipPath id="${u}"><circle cx="${s}" cy="${c}" r="${l-1}"/></clipPath><circle cx="${s}" cy="${c}" r="${l-1}" class="m-diep"/><g clip-path="url(#${u})"><circle cx="${s}" cy="${c+l*.95}" r="${l*.9}" class="m-hoe3" opacity=".55"/>${f}</g><circle cx="${s}" cy="${c}" r="${l-2.2}" fill="none" class="tc-vien" stroke-width="3.4"/></svg>`}var Nn=`.tc-avatar .tc-vien{stroke:var(--vang,${a.vang})}.tc-avatar{display:block;border-radius:50%}`,Pn=String.raw`
window.AM = (() => {
  let ctx = null, ra = null, nen = null, bat = false
  const lan = {}
  function taoNhieu(c) {
    const b = c.createBuffer(1, c.sampleRate, c.sampleRate), d = b.getChannelData(0)
    let s = 1234567
    for (let i = 0; i < d.length; i++) { s = (s * 16807) % 2147483647; d[i] = s / 1073741823.5 - 1 }
    return b
  }
  function nh(c, o, t, p) {
    const { dai, loc = 'bandpass', f = 2000, f2, q = 1, g = .3, len = .002 } = p
    const src = c.createBufferSource(); src.buffer = c.__n || (c.__n = taoNhieu(c)); src.loop = true
    const bq = c.createBiquadFilter(); bq.type = loc; bq.Q.value = q
    bq.frequency.setValueAtTime(f, t); if (f2) bq.frequency.exponentialRampToValueAtTime(f2, t + dai)
    const v = c.createGain(); v.gain.setValueAtTime(.0001, t); v.gain.exponentialRampToValueAtTime(g, t + len); v.gain.exponentialRampToValueAtTime(.0001, t + dai)
    src.connect(bq).connect(v).connect(o); src.start(t, Math.random() * .5); src.stop(t + dai + .03)
  }
  // gỗ: một hoạ âm chính rơi cao độ + một hoạ âm lệch (2,76×) tắt nhanh — tiếng mõ, không phải chuông
  function go(c, o, t, p) {
    const { f, f2 = f * .8, dai = .06, g = .3, kieu = 'sine', bo = 2.76, gb = .25 } = p
    for (const [ff, gg, dd] of [[f, g, dai], [f * bo, g * gb, dai * .5]]) {
      const x = c.createOscillator(); x.type = kieu
      x.frequency.setValueAtTime(ff, t); x.frequency.exponentialRampToValueAtTime(Math.max(30, ff * f2 / f), t + dd)
      const v = c.createGain(); v.gain.setValueAtTime(.0001, t); v.gain.exponentialRampToValueAtTime(gg, t + .003); v.gain.exponentialRampToValueAtTime(.0001, t + dd)
      x.connect(v).connect(o); x.start(t); x.stop(t + dd + .03)
    }
  }
  const T = {
    cham: (c, o, t, k) => nh(c, o, t, { dai: .022, f: 2600 * k, q: 1.4, g: .22 }),
    nha: (c, o, t, k) => { go(c, o, t, { f: 880 * k, f2: 640 * k, dai: .07, g: .34 }); nh(c, o, t, { dai: .012, f: 3200, g: .12 }) },
    bat: (c, o, t, k) => { go(c, o, t, { f: 620 * k, dai: .05, g: .24 }); go(c, o, t + .055, { f: 830 * k, dai: .07, g: .3 }) },
    tat: (c, o, t, k) => { go(c, o, t, { f: 830 * k, dai: .05, g: .22 }); go(c, o, t + .055, { f: 620 * k, dai: .07, g: .26 }) },
    khoa: (c, o, t, k) => { go(c, o, t, { f: 300 * k, f2: 255 * k, dai: .05, g: .26, bo: 3.1 }); go(c, o, t + .09, { f: 290 * k, f2: 245 * k, dai: .05, g: .2, bo: 3.1 }) },
    trien: (c, o, t, k) => { go(c, o, t, { f: 120 * k, f2: 62 * k, dai: .12, g: .62, gb: .1 }); nh(c, o, t, { dai: .09, loc: 'lowpass', f: 1100, q: .7, g: .28 }); nh(c, o, t + .012, { dai: .06, f: 2000, q: .9, g: .1 }) },
    dung: (c, o, t, k) => { T.trien(c, o, t, k * 1.05); go(c, o, t + .08, { f: 660 * k, dai: .14, g: .2, kieu: 'triangle' }); go(c, o, t + .15, { f: 990 * k, dai: .18, g: .18, kieu: 'triangle' }) },
    rach: (c, o, t, k, d = .32) => { nh(c, o, t, { dai: d, f: 4300 * k, q: 3.2, g: .12, len: .03 }); nh(c, o, t, { dai: d, f: 1800, q: 2, g: .05, len: .03 }) },
    lat: (c, o, t, k, d = .28) => nh(c, o, t, { dai: d, f: 700, f2: 2800 * k, q: .8, g: .2, len: d * .3 }),
    boc: (c, o, t, k, d = .3) => { nh(c, o, t, { dai: d, f: 1200, f2: 900, q: .7, g: .07, len: .05 }); for (let i = 0; i < 16; i++) nh(c, o, t + d * Math.sqrt(i / 16), { dai: .006, loc: 'highpass', f: 3800 * k, q: .7, g: .05 + .14 * ((i * 7919) % 13) / 13 }) },
    tach: (c, o, t, k) => { for (let i = 0; i < 5; i++) nh(c, o, t + i * .03, { dai: .09, f: (1700 - i * 90) * k, f2: 1100, q: .9, g: .12 }) },
    truot: (c, o, t, k, d = .18) => nh(c, o, t, { dai: d, loc: 'lowpass', f: 1500 * k, q: .6, g: .16, len: d * .35 }),
    phong: (c, o, t, k, d = .42) => nh(c, o, t, { dai: d, loc: 'lowpass', f: 320, f2: 1700 * k, q: .9, g: .2, len: d * .45 }),
    phongRa: (c, o, t, k, d = .34) => nh(c, o, t, { dai: d, loc: 'lowpass', f: 1700 * k, f2: 320, q: .9, g: .18, len: d * .2 }),
    mucChay: (c, o, t, k, d = .56) => { nh(c, o, t, { dai: d, f: 700, f2: 1100 * k, q: .6, g: .08, len: d * .3 }); nh(c, o, t, { dai: d, loc: 'highpass', f: 5200, q: .5, g: .03, len: d * .4 }) },
    nhac: (c, o, t, k) => nh(c, o, t, { dai: .06, loc: 'highpass', f: 2600 * k, q: .7, g: .1, len: .01 }),
    dat: (c, o, t, k) => { go(c, o, t, { f: 520 * k, f2: 420 * k, dai: .06, g: .3 }); nh(c, o, t, { dai: .04, loc: 'lowpass', f: 1200, q: .7, g: .14 }) },
    hut: (c, o, t, k) => { go(c, o, t, { f: 700 * k, dai: .035, g: .2 }); go(c, o, t + .05, { f: 940 * k, dai: .04, g: .22 }) },
    soi: (c, o, t, k) => { nh(c, o, t, { dai: .12, f: 2200, f2: 3400 * k, q: 2.4, g: .07 }); go(c, o, t + .02, { f: 1400 * k, dai: .03, g: .1 }) },
    khep: (c, o, t, k) => { T.truot(c, o, t, k, .2); go(c, o, t + .2, { f: 420 * k, f2: 360 * k, dai: .07, g: .3 }); go(c, o, t + .245, { f: 470 * k, f2: 400 * k, dai: .07, g: .24 }) },
    // cóc gỗ: que miết dọc lưng con cóc gỗ — chín tiếng tách sít dần. Tiếng riêng của người dẫn (S10).
    coc: (c, o, t, k) => { let x = t; for (let i = 0; i < 9; i++) { nh(c, o, x, { dai: .012, f: 1500 * k, q: 5, g: .3 }); go(c, o, x, { f: 420 * k, dai: .012, g: .08, bo: 2 }); x += .028 - i * .0015 } },
  }
  function mo() {
    if (!ctx) {
      const C = window.AudioContext || window.webkitAudioContext
      if (!C) return null
      ctx = new C()
      const nen2 = ctx.createDynamicsCompressor(); nen2.threshold.value = -18; nen2.ratio.value = 6
      ra = ctx.createGain(); ra.gain.value = .9; ra.connect(nen2).connect(ctx.destination)
    }
    if (ctx.state === 'suspended') ctx.resume()
    return ctx
  }
  function phat(id, p = {}) {
    if (!bat || !T[id]) return
    const c = mo(); if (!c) return
    const now = c.currentTime
    if (lan[id] && now - lan[id] < .06) return
    lan[id] = now
    const k = (p.k || 1) * (1 + (Math.random() * 2 - 1) * .03)
    const o = c.createGain(); o.gain.value = 1 + (Math.random() * 2 - 1) * .1; o.connect(ra)
    T[id](c, o, now + .004, k, p.d)
  }
  async function song(id) {
    const C = window.OfflineAudioContext || window.webkitOfflineAudioContext
    if (!C) return null
    const sr = 11025, c = new C(1, Math.round(sr * .62), sr)
    T[id](c, c.destination, .004, 1)
    const b = await c.startRendering()
    return b.getChannelData(0)
  }
  // âm nền của cảnh (N16): gió qua bộ lọc thấp, phập phồng rất chậm; cảnh nước thêm giọt rơi thưa
  let nenNode = null, henGiot = 0
  function amNen(canh, mo2) {
    if (nenNode) { const n = nenNode; nenNode = null; n.v.gain.setTargetAtTime(.0001, ctx.currentTime, .3); setTimeout(() => n.src.stop(), 1500); clearInterval(henGiot) }
    if (!mo2 || !bat) return
    const c = mo(); if (!c) return
    const src = c.createBufferSource(); src.buffer = c.__n || (c.__n = taoNhieu(c)); src.loop = true
    const bq = c.createBiquadFilter(); bq.type = 'lowpass'; bq.frequency.value = { bien: 520, ao: 380, ruong: 900, rung: 1100, san: 700, nha: 300, dat: 260, giot: 340, 'go-muc': 460 }[canh] || 500
    const v = c.createGain(); v.gain.value = .0001
    const lfo = c.createOscillator(); lfo.frequency.value = canh === 'bien' ? .09 : .05
    const lg = c.createGain(); lg.gain.value = .012
    lfo.connect(lg).connect(v.gain)
    src.connect(bq).connect(v).connect(ra); src.start(); lfo.start()
    v.gain.setTargetAtTime(.02, c.currentTime, .6)
    nenNode = { src, v }
    nen = v
    if (['ao', 'giot', 'go-muc', 'bien'].includes(canh)) henGiot = setInterval(() => {
      if (!nenNode || Math.random() < .5) return
      const t = c.currentTime; go(c, nenNode.v, t, { f: 1300 + Math.random() * 600, f2: 700, dai: .05, g: 1.2, gb: .05 })
    }, 1700)
  }
  // nhỏ đi 12 dB khi tay đang kéo hay người dẫn nói (S7)
  function nho(co) { if (nen && ctx) nen.gain.setTargetAtTime(co ? .005 : .02, ctx.currentTime, .12) }
  return { phat, song, amNen, nho, bat: v => { bat = v; if (v) mo(); else amNen(null, false) }, dangBat: () => bat, co: id => !!T[id] }
})()
`,Fn=new URL(`Baloo2-latin-B1mgmdyl.woff2`,import.meta.url).href,In=new URL(`Baloo2-vietnamese-DATnqMJa.woff2`,import.meta.url).href,Ln=new URL(`Nunito-latin-CjueodBP.woff2`,import.meta.url).href,Rn=new URL(`Nunito-vietnamese-DRvBUXbr.woff2`,import.meta.url).href,zn=new URL(`IBMPlexMono-latin-C820gu2e.woff2`,import.meta.url).href,Bn=`data:font/woff2;base64,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`,Vn=`/* Trang bày bộ nhận diện — khung quanh các bảng giấy. Bảng giấy (.bang) luôn là giấy điệp, cả
   khi trang tối: đó là mặt của game, không phải của trang. */
:root{
  --nen:#F3F2EF; --mat:#FFFFFF; --mat2:#EAE8E3; --chu:#1D1C1A; --phu:#6B6760; --mo:#9A958D; --vach:rgba(29,28,26,.09);
  --nhan:#F7C23A; --nhan-chu:#33291F; --bong-mem:0 1px 2px rgba(40,30,20,.05),0 12px 32px -12px rgba(40,30,20,.14);
  --gg-diep:#FDF6E8;
  color-scheme:light;
}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){
  --nen:#141312; --mat:#1E1D1B; --mat2:#2A2926; --chu:#F2F0EC; --phu:#A7A29B; --mo:#77726B; --vach:rgba(255,255,255,.10);
  --bong-mem:0 1px 2px rgba(0,0,0,.4),0 12px 32px -12px rgba(0,0,0,.5); color-scheme:dark;
}}
:root[data-theme="dark"]{
  --nen:#141312; --mat:#1E1D1B; --mat2:#2A2926; --chu:#F2F0EC; --phu:#A7A29B; --mo:#77726B; --vach:rgba(255,255,255,.10);
  --bong-mem:0 1px 2px rgba(0,0,0,.4),0 12px 32px -12px rgba(0,0,0,.5); color-scheme:dark;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
body{margin:0;background:var(--nen);color:var(--chu);font:16px/1.55 'Nunito',ui-rounded,system-ui,-apple-system,sans-serif;-webkit-font-smoothing:antialiased}
.trang{max-width:1240px;margin:0 auto;padding-inline:max(16px,3.2vw);padding-block:0 96px}
.sprite{position:absolute;width:0;height:0;overflow:hidden}
h1,h2,h3{font-family:'Baloo 2','Nunito',ui-rounded,system-ui,sans-serif;font-weight:800;letter-spacing:-.01em;margin:0;text-wrap:balance}
p{margin:0}
code{font:500 .9em 'IBM Plex Mono',ui-monospace,Menlo,monospace}

/* đầu trang */
.dau{padding:64px 0 28px;display:grid;gap:18px}
.dau .nho{font:800 13px/1 'Nunito',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--phu)}
.dau h1{font-size:clamp(44px,7vw,84px);line-height:.95}
.dau .loi{max-width:62ch;font-size:clamp(17px,1.6vw,19px);color:var(--phu)}
.dau .loi b{color:var(--chu);font-weight:700}
.dieu-khien{position:sticky;top:env(safe-area-inset-top,0px);z-index:30;display:flex;flex-wrap:wrap;align-items:center;gap:8px 16px;justify-content:space-between;
  padding:10px 0;margin:0 0 8px;background:color-mix(in srgb,var(--nen) 88%,transparent);-webkit-backdrop-filter:saturate(1.4) blur(14px);backdrop-filter:saturate(1.4) blur(14px);
  border-bottom:1px solid var(--vach)}
.muc{display:flex;gap:2px;overflow-x:auto;scrollbar-width:none;margin:0 -4px}
.muc::-webkit-scrollbar{display:none}
.muc a{flex:none;display:inline-flex;align-items:center;gap:7px;padding:8px 11px;border-radius:10px;color:var(--phu);text-decoration:none;font:700 14px/1 'Nunito',sans-serif;white-space:nowrap}
.muc a b{font:500 12px/1 'IBM Plex Mono',monospace;color:var(--mo)}
.muc a:hover{background:var(--mat2);color:var(--chu)}
.muc a[aria-current="true"]{background:var(--mat);color:var(--chu);box-shadow:inset 0 0 0 1px var(--vach)}
.cong-tac-trang{display:flex;gap:6px}
.nut-trang{appearance:none;display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 12px 0 10px;border:0;border-radius:10px;background:var(--mat);color:var(--chu);
  box-shadow:inset 0 0 0 1px var(--vach);font:700 14px/1 'Nunito',sans-serif;cursor:pointer}
.nut-trang .ic{width:18px;height:18px;fill:currentColor}
.nut-trang[aria-pressed="true"]{background:var(--nhan);color:var(--nhan-chu);box-shadow:none}
.nut-trang:focus-visible,.muc a:focus-visible{outline:2px solid var(--chu);outline-offset:2px}

/* mục */
section{padding:72px 0 8px;scroll-margin-top:56px}
.dau-muc{display:grid;grid-template-columns:auto 1fr;gap:6px 18px;align-items:baseline;margin-bottom:26px}
.dau-muc .so{font:500 15px/1 'IBM Plex Mono',monospace;color:var(--mo);grid-row:span 2;padding-top:10px}
.dau-muc h2{font-size:clamp(30px,4vw,46px);line-height:1}
.dau-muc p{grid-column:2;max-width:68ch;color:var(--phu);font-size:17px}
h3{font-size:22px;line-height:1.15;margin-bottom:10px}
.luoi{display:grid;gap:16px;align-items:start}
.hai{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
.ba{grid-template-columns:repeat(3,minmax(0,1fr))}
@media (max-width:900px){.hai,.ba{grid-template-columns:minmax(0,1fr)}}

/* bảng giấy */
.bang{background:var(--gg-diep);border-radius:22px;padding:24px;box-shadow:var(--bong-mem);position:relative;overflow:hidden;
  --vach:rgba(51,41,31,.10);--chu:#33291F;--phu:#6B5E4C;--mo:#978870;--mat:#FEFCF7;--mat2:#F2E9D8;color:#33291F}
@media (max-width:640px){.bang{padding:16px;border-radius:18px}}
.bang.sat{padding:0}
.o-mat{background:var(--mat);border-radius:18px;padding:20px 22px;box-shadow:inset 0 0 0 1px var(--vach)}
.nhan-nho{font:800 12px/1 'Nunito',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:var(--phu)}
.bang .nhan-nho{color:#7A6C58}

/* luật */
.luat{list-style:none;margin:0;padding:0;display:grid;gap:0}
.luat li{display:grid;grid-template-columns:52px 1fr;gap:14px;padding:14px 0;border-top:1px solid var(--vach)}
.luat li:first-child{border-top:0}
.luat .ma{font:500 13px/1.6 'IBM Plex Mono',monospace;color:var(--mo)}
.luat b{display:block;font:800 17px/1.3 'Baloo 2','Nunito',sans-serif;margin-bottom:2px}
.luat span{color:var(--phu);font-size:15.5px}
.luat.cot{columns:2 380px;column-gap:40px;display:block}
.luat.cot li{break-inside:avoid}

/* ngôn ngữ chung */
.vat-lieu{display:grid;gap:14px;align-content:start}
.vat-lieu .mau{height:150px;border-radius:16px;display:grid;place-items:center;position:relative;overflow:hidden}
.vat-lieu h3{margin:4px 0 0}
.vat-lieu p{color:var(--phu);font-size:15.5px}
.chu-mau{display:grid;gap:10px}
.chu-mau div{display:flex;align-items:baseline;gap:14px;justify-content:space-between;border-top:1px solid var(--vach);padding-top:10px}
.chu-mau small{color:var(--phu);font-size:13px;white-space:nowrap}

/* icon */
.giai-phau{display:grid;grid-template-columns:minmax(0,340px) minmax(0,1fr);gap:28px;align-items:start}
@media (max-width:900px){.giai-phau{grid-template-columns:minmax(0,1fr)}}
.giai-phau svg.luoi24{width:100%;height:auto;display:block}
.bo-icon{display:grid;gap:22px}
.nhom-icon{display:grid;gap:10px}
.nhom-icon .ten-nhom{display:flex;gap:10px;align-items:baseline}
.nhom-icon .ten-nhom b{font:800 17px/1 'Baloo 2',sans-serif;color:#33291F}
.nhom-icon .ten-nhom span{font-size:13.5px;color:#7A6C58}
.o-icon{display:grid;grid-template-columns:repeat(auto-fill,minmax(92px,1fr));gap:8px}
.o-icon button{appearance:none;border:0;background:#FEFCF7;border-radius:14px;padding:14px 6px 10px;display:grid;justify-items:center;gap:8px;cursor:pointer;
  color:#33291F;font:700 12.5px/1.15 'Nunito',sans-serif;box-shadow:inset 0 0 0 1px rgba(51,41,31,.08);transition:transform 90ms cubic-bezier(.4,0,.2,1),background-color 180ms}
.o-icon button .ic{width:30px;height:30px}
.o-icon button[aria-pressed="true"]{background:#FADF9A}
.o-icon button:active{transform:translateY(1px)}
.o-icon button:focus-visible{outline:3px solid #2F66B0;outline-offset:2px}
.nheo .o-icon .ic{filter:blur(1.3px)}
.co16 .o-icon button .ic{width:16px;height:16px}
.chi-tiet{display:grid;grid-template-columns:150px minmax(0,1fr);gap:22px;align-items:center}
@media (max-width:640px){.chi-tiet{grid-template-columns:minmax(0,1fr)}}
.chi-tiet .to{width:150px;height:150px;border-radius:24px;background:#FEFCF7;display:grid;place-items:center;box-shadow:inset 0 0 0 1px rgba(51,41,31,.08)}
.chi-tiet .to .ic{width:96px;height:96px}
.chi-tiet h3{color:#33291F;margin:0}
.chi-tiet p{color:#5C5040;font-size:15.5px}
.co-thang{display:flex;gap:18px;align-items:end;flex-wrap:wrap;margin-top:10px}
.co-thang figure{margin:0;display:grid;justify-items:center;gap:6px;font:500 11.5px/1 'IBM Plex Mono',monospace;color:#7A6C58}
.trang-thai-icon{display:flex;gap:14px;flex-wrap:wrap;margin-top:12px;align-items:center}
.trang-thai-icon figure{margin:0;display:grid;justify-items:center;gap:8px;font:700 12px/1 'Nunito',sans-serif;color:#7A6C58}
.do-dam{font:500 12.5px/1.5 'IBM Plex Mono',monospace;color:#7A6C58}

/* nút */
.ma-tran{width:100%;border-collapse:separate;border-spacing:0}
.ma-tran th{font:800 12px/1 'Nunito',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#7A6C58;text-align:left;padding:0 10px 14px}
.ma-tran td{padding:14px 10px;border-top:1px solid rgba(51,41,31,.08);vertical-align:middle}
.ma-tran td:first-child{width:150px}
.ma-tran .ten-hang b{display:block;font:800 17px/1.1 'Baloo 2',sans-serif;color:#33291F}
.ma-tran .ten-hang span{font-size:13px;color:#7A6C58}
.ma-tran .khong{color:#B8AD9C;font:500 14px 'IBM Plex Mono',monospace}
.cuon-ngang{overflow-x:auto;margin:0 -24px;padding:0 24px}
.so-do{display:flex;flex-wrap:wrap;gap:8px 18px;margin-top:14px;font:500 12.5px/1.5 'IBM Plex Mono',monospace;color:#7A6C58}
.so-do b{color:#33291F;font-weight:500}
.ghep{display:flex;flex-wrap:wrap;gap:22px 28px;align-items:flex-end}
.ghep figure{margin:0;display:grid;gap:10px;justify-items:start}
.ghep figcaption{font:700 13px/1.3 'Nunito',sans-serif;color:#7A6C58;max-width:300px}

/* chuyển động */
.dong-tu{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px}
.dong-tu article{background:#FEFCF7;border-radius:18px;padding:12px;display:grid;gap:10px;box-shadow:inset 0 0 0 1px rgba(51,41,31,.08)}
.san-khau{position:relative;height:150px;border-radius:12px;background:#FDF6E8;overflow:hidden;perspective:520px}
.dong-tu .dong{display:flex;align-items:center;gap:10px}
.dong-tu h3{font-size:19px;margin:0;color:#33291F}
.dong-tu p{font-size:14px;color:#5C5040;line-height:1.4}
.dong-tu .so{font:500 12px/1.4 'IBM Plex Mono',monospace;color:#7A6C58}
.dong-tu .dong .n-tron{margin-left:auto}
.duong-cong{width:42px;height:42px;flex:none}
.thoi-luong{display:grid;gap:8px;margin-top:6px}
.thoi-luong div{display:grid;grid-template-columns:90px 1fr 64px;gap:12px;align-items:center;font:700 13px 'Nunito',sans-serif;color:#5C5040}
.thoi-luong i{display:block;height:10px;border-radius:5px;background:#33291F;transform-origin:left center}
.thoi-luong span{font:500 12.5px 'IBM Plex Mono',monospace;color:#7A6C58;text-align:right}

/* âm thanh */
.bo-am{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:12px}
.the-am{appearance:none;text-align:left;border:0;background:#FEFCF7;border-radius:18px;padding:14px;display:grid;gap:10px;cursor:pointer;color:#33291F;
  box-shadow:inset 0 0 0 1px rgba(51,41,31,.08),0 3px 0 #D8CBB9;transition:transform 90ms cubic-bezier(.4,0,.2,1),box-shadow 90ms cubic-bezier(.4,0,.2,1)}
.the-am.nhan{transform:translateY(3px);box-shadow:inset 0 0 0 1px rgba(51,41,31,.08),0 0 0 #D8CBB9}
.the-am:focus-visible{outline:3px solid #2F66B0;outline-offset:3px}
.the-am .dong{display:flex;gap:10px;align-items:center}
.the-am .dong .ic{width:22px;height:22px}
.the-am b{font:800 17px/1 'Baloo 2',sans-serif}
.the-am .vat{margin-left:auto;font:700 11.5px/1 'Nunito',sans-serif;padding:5px 8px;border-radius:999px;background:#F6EFE2;color:#5C5040}
.the-am canvas{width:100%;height:46px;display:block}
.the-am p{font-size:13.5px;line-height:1.4;color:#5C5040}
.the-am .so{font:500 11.5px/1 'IBM Plex Mono',monospace;color:#7A6C58;display:flex;gap:12px}
.the-am.dang canvas{animation:nhip .3s cubic-bezier(.2,.8,.2,1)}
@keyframes nhip{0%{opacity:.4}100%{opacity:1}}

/* cảnh */
.gioi{display:grid;gap:12px;margin-bottom:26px}
.gioi > .nhan-nho{color:var(--phu)}
.bo-canh{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
@media (max-width:980px){.bo-canh{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:620px){.bo-canh{grid-template-columns:minmax(0,1fr)}}
.ghi-gioi{display:flex;flex-wrap:wrap;gap:6px 22px;font-size:14.5px;color:var(--phu)}
.ghi-gioi b{color:var(--chu);font-weight:800;margin-right:6px}
.the-canh{appearance:none;border:0;text-align:left;padding:0;background:var(--mat);border-radius:20px;overflow:hidden;cursor:pointer;color:var(--chu);box-shadow:var(--bong-mem);display:grid}
.the-canh:focus-visible{outline:2px solid var(--chu);outline-offset:3px}
.the-canh svg{width:100%;height:auto;display:block;aspect-ratio:1180/820;background:#FDF6E8}
.the-canh .chu{padding:14px 16px 16px;display:grid;gap:8px}
.the-canh .dong{display:flex;align-items:center;gap:10px}
.the-canh .dong .ic{width:22px;height:22px;fill:currentColor}
.the-canh b{font:800 19px/1 'Baloo 2',sans-serif}
.the-canh .ch{margin-left:auto;font:500 12px/1 'IBM Plex Mono',monospace;color:var(--phu)}
.the-canh .muc2{display:flex;gap:8px;align-items:center;font:500 12px/1 'IBM Plex Mono',monospace;color:var(--phu)}
.the-canh .muc2 i{width:18px;height:18px;border-radius:6px;box-shadow:inset 0 0 0 1px var(--vach)}
.the-canh small{color:var(--phu);font-size:13.5px;line-height:1.4}
.bac-muc{width:100%;border-collapse:collapse;font-size:14.5px}
.bac-muc td,.bac-muc th{padding:10px 8px;border-top:1px solid var(--vach);text-align:left;vertical-align:middle}
.bac-muc th{font:800 12px/1 'Nunito',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--phu);border-top:0}
.bac-muc .o{display:inline-block;width:22px;height:22px;border-radius:6px;vertical-align:middle;margin-right:4px;box-shadow:inset 0 0 0 1px var(--vach)}
.bac-muc .so{font:500 13px 'IBM Plex Mono',monospace}

/* chạy thử */
.chay-thu{display:grid;grid-template-columns:minmax(0,1fr) 280px;gap:18px;align-items:start}
@media (max-width:1060px){.chay-thu{grid-template-columns:minmax(0,1fr)}}
.may{background:#1E1914;border-radius:clamp(16px,2.6vw,34px);padding:clamp(6px,1vw,12px)}
.khung-may{position:relative;width:100%;aspect-ratio:1180/820;overflow:hidden;border-radius:clamp(10px,1.8vw,24px);background:#FDF6E8}
.khung-may > .man{position:absolute;left:0;top:0;width:1180px;height:820px;transform-origin:0 0}
.bang-dk{display:grid;gap:16px}
.bang-dk .o-mat{display:grid;gap:10px;padding:16px}
.chon-canh{display:grid;grid-template-columns:repeat(5,1fr);gap:6px}
.chon-canh button,.chon-man button{appearance:none;border:0;display:grid;place-items:center;height:46px;border-radius:12px;background:var(--mat2);color:var(--chu);cursor:pointer;position:relative}
.chon-canh button .ic,.chon-man button .ic{width:24px;height:24px;fill:currentColor}
.chon-canh button[aria-pressed="true"],.chon-man button[aria-pressed="true"]{background:var(--nhan);color:var(--nhan-chu)}
.chon-man{display:grid;grid-template-columns:repeat(5,1fr);gap:6px}
.bat-tat{display:flex;align-items:center;justify-content:space-between;gap:10px;font-size:14.5px}
.bat-tat button{appearance:none;width:46px;height:28px;border-radius:14px;border:0;background:var(--mat2);position:relative;cursor:pointer;flex:none}
.bat-tat button::after{content:"";position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:var(--mat);box-shadow:0 1px 2px rgba(0,0,0,.2);transition:transform 280ms cubic-bezier(.2,.8,.2,1)}
.bat-tat button[aria-checked="true"]{background:var(--nhan)}
.bat-tat button[aria-checked="true"]::after{transform:translateX(18px)}
.nhat-ky{list-style:none;margin:0;padding:0;display:grid;gap:8px;font-size:13.5px;min-height:140px}
.nhat-ky li{display:grid;grid-template-columns:40px 1fr;gap:8px;animation:vao .28s cubic-bezier(.2,.8,.2,1)}
.nhat-ky li b{font:500 12px/1.5 'IBM Plex Mono',monospace;color:var(--chu);background:var(--mat2);border-radius:6px;text-align:center;height:20px}
.nhat-ky li span{color:var(--phu)}
@keyframes vao{from{opacity:0;transform:translateY(-4px)}}
.goi-y{font-size:13.5px;color:var(--phu)}

/* màn trong máy */
.man .lop{position:absolute;inset:0}
.man svg.nen-man{position:absolute;inset:0;width:1180px;height:820px}
.man .vs{cursor:pointer}
.man .vs-than{transform-box:fill-box;transform-origin:50% 90%}
.man .vs.yen-lac .vs-than{animation:lac 3.4s ease-in-out infinite alternate}
.man .vs.yen-tho .vs-than{animation:tho 3.8s ease-in-out infinite alternate}
.man .vs.yen-troi .vs-than{animation:troi 5.2s ease-in-out infinite alternate}
@keyframes lac{from{transform:rotate(-2.5deg)}to{transform:rotate(2.5deg)}}
@keyframes tho{from{transform:scale(1)}to{transform:scale(1.03)}}
@keyframes troi{from{transform:translate(-3px,1px)}to{transform:translate(3px,-2px)}}
.man.dung .vs-than,.man.giam .vs-than{animation-play-state:paused!important}
.man.giam .vs-than{animation:none!important}
.man .canh-mo{transition:opacity 224ms cubic-bezier(.4,0,1,1)}
.man .day{transition:opacity 280ms cubic-bezier(.4,0,.2,1)}
.man.mong .day{opacity:0;pointer-events:none}
.man .nhoa-nen{position:absolute;inset:0;background:#FDF6E8;opacity:0;pointer-events:none;transition:opacity 180ms cubic-bezier(.4,0,.2,1)}
.man.dung .nhoa-nen{opacity:.15}
.man .tranh{position:absolute;inset:0;pointer-events:none;transition:transform 280ms cubic-bezier(.2,.8,.2,1)}
.man.co-the .tranh{transform:translateX(-200px)}
.man .vat-chinh{pointer-events:auto;cursor:pointer}
.man .tua{position:absolute;left:330px;top:92px;width:520px;height:118px;display:grid;place-items:center;text-align:center;align-content:center;gap:6px;pointer-events:none}
.man .tua small{font:800 13px/1 'Nunito',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#7A6C58}
.man .tua h3{font:800 40px/1.02 'Baloo 2',sans-serif;color:#33291F;margin:0}
.man .tren{position:absolute;left:0;right:0;top:0;height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 16px 0 24px;z-index:6}
.man .v1{display:flex;align-items:center;gap:10px}
.man .vet{display:flex;align-items:center;gap:6px;font:700 15px/1 'Nunito',sans-serif;color:#7A6C58}
.man .vet b{color:#33291F;font-weight:800}
.man .vet .ic{width:14px;height:14px;fill:#B8AD9C}
.man .v7{position:absolute;left:50%;top:0;height:64px;transform:translateX(-50%);display:flex;align-items:center;gap:7px;pointer-events:none}
.man .v7 i{width:9px;height:9px;border-radius:50%;background:#D8CBB9}
.man .v7 i.xong{background:#33291F}
.man .v7 i.nay{background:#F7C23A;box-shadow:0 0 0 2px #33291F}
.man .v7 .gia-su{font:800 14px/1 'Baloo 2',sans-serif;color:#2F66B0;margin-left:6px}
.man .v2{display:flex;align-items:center;gap:8px}
.man .ho-so{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:#B7DAC2;color:#33291F;font:800 16px/1 'Baloo 2',sans-serif;box-shadow:inset 0 0 0 1px rgba(51,41,31,.1)}
.man .v4{position:absolute;left:50%;bottom:12px;transform:translateX(-50%);z-index:7;transition:transform 280ms cubic-bezier(.2,.8,.2,1),opacity 180ms}
.man:not(.ban-mo) .v4{transform:translate(-50%,120px);opacity:0;pointer-events:none}
.man .v6{position:absolute;left:24px;bottom:14px;z-index:9}
.man .chinh{position:absolute;left:500px;top:728px;width:180px;z-index:7;transition:opacity 180ms,transform 280ms cubic-bezier(.2,.8,.2,1)}
.man .chinh .n{width:180px}
.man .sau{position:absolute;left:994px;top:740px;z-index:7;transition:opacity 180ms}
.man.ban-mo .chinh,.man.ban-mo .sau,.man.dac-biet .chinh,.man.dac-biet .sau{opacity:0;pointer-events:none;transform:translateY(20px)}
.man .gay{position:absolute;left:50%;top:64px;transform:translateX(-50%);z-index:5;transition:opacity 180ms}
.man:not(.ban-mo) .gay{opacity:0;pointer-events:none}
.man .v5{position:absolute;left:834px;top:74px;width:330px;height:644px;z-index:8;transform:translateX(360px);visibility:hidden;
  transition:transform 224ms cubic-bezier(.4,0,1,1),visibility 0s linear 224ms}
.man.co-the .v5{transform:none;visibility:visible;transition:transform 280ms cubic-bezier(.2,.8,.2,1),visibility 0s}
.man .v5 .the{height:100%}
.man .cuon{position:absolute;left:24px;bottom:94px;width:360px;padding:16px 18px;background:#FEFCF7;border-radius:18px;z-index:9;
  box-shadow:inset 0 0 0 1px rgba(51,41,31,.1),0 3px 0 #D8CBB9;clip-path:inset(100% 0 0 0 round 18px);visibility:hidden;
  transition:clip-path 224ms cubic-bezier(.4,0,1,1),visibility 0s linear 224ms}
.man .cuon.mo{clip-path:inset(0 0 0 0 round 18px);visibility:visible;transition:clip-path 280ms cubic-bezier(.2,.8,.2,1),visibility 0s}
.man .cuon b{display:block;font:800 12px/1 'Nunito',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#7A6C58;margin-bottom:6px}
.man .cuon p{font:600 18px/1.4 'Nunito',sans-serif;color:#3B3128}
.man .nhan-vs{position:absolute;z-index:12;padding:6px 11px 5px;border-radius:999px;background:#33291F;color:#FEFCF7;font:800 14px/1 'Baloo 2',sans-serif;
  transform:translate(-50%,-100%);pointer-events:none;opacity:0;transition:opacity 180ms}
.man .nhan-vs.mo{opacity:1}
.man .phu-o{position:absolute;inset:0;pointer-events:none;opacity:0;transition:opacity 180ms;z-index:20}
.man.xem-o .phu-o{opacity:1}
.man .man-giay{position:absolute;inset:0;opacity:0;pointer-events:none;transition:opacity 280ms}
.man .man-giay.hien{opacity:1}
.man .mat-giay{position:absolute;inset:0;pointer-events:none}
.man .quet{position:absolute;inset:0;pointer-events:none;background:#FDF6E8;clip-path:inset(0 0 0 100%)}

/* chú giải giải phẫu icon */
.chu-giai{list-style:none;margin:0;padding:0;display:grid;gap:8px;font-size:14.5px;color:#5C5040}
.chu-giai li{display:grid;grid-template-columns:24px 1fr;gap:10px;align-items:baseline}
.chu-giai b{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:#C4412B;color:#FEFCF7;font:500 11.5px/1 'IBM Plex Mono',monospace}
.gg .chip[aria-pressed="true"]{background:var(--hoe2)}

/* sai / đúng */
.sai-dung{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:18px}
.sai-dung figure{margin:0;display:grid;grid-template-columns:1fr 1fr;gap:8px}
.sai-dung figcaption{grid-column:1/-1;font-size:14px;line-height:1.45;color:#5C5040}
.o-sd{position:relative;display:grid;place-items:center;height:104px;border-radius:14px;background:#FEFCF7;box-shadow:inset 0 0 0 1px rgba(51,41,31,.08);color:#33291F}
.gg .o-sd .ic{width:44px;height:44px}
.o-sd span{position:absolute;top:8px;left:10px;font:800 11px/1 'Nunito',sans-serif;letter-spacing:.1em;text-transform:uppercase}
.o-sd .sai{color:#C4412B}.o-sd .dung{color:#2E7D4F}

/* sân khấu động từ */
.dong-tu .san-khau{cursor:pointer}
.dong-tu .san-khau svg{display:block}

/* dock: nhãn rụng (T12) */
.gg .cc span{transition:opacity var(--cham-t) var(--doi),transform var(--cham-t) var(--doi)}
.gg .cc.rung span{opacity:0;transform:translateY(-3px)}

/* lớp ô chữ trong màn chạy thử */
.man .phu-o .oc{fill:rgba(253,246,232,.55);stroke:#2F66B0;stroke-width:1.5;stroke-dasharray:6 5}
.man .phu-o .vg{fill:rgba(47,102,176,.12);stroke:#2F66B0;stroke-width:1.5}
.man .phu-o .vt{fill:none;stroke:#C4412B;stroke-width:2;stroke-dasharray:10 7}
.man .phu-o .vuot{fill:rgba(196,65,43,.10)}
.man .phu-o text{font:500 15px 'IBM Plex Mono',monospace;fill:#2F66B0}
.man .phu-o .o-ban-mo{display:none}
.man.ban-mo .phu-o .o-ban-mo{display:inline}
.man.ban-mo .phu-o .o-chuong{display:none}
.man.dac-biet .phu-o .vt{display:none}
.man #vat-chinh{transition:none}

/* gáy lớp: dấu hình */
.gg .gay-lop .dl{width:12px;height:12px;flex:none;display:block}

/* mắt mù màu */
.mu{width:100%;border-collapse:collapse;font-size:14px;min-width:640px}
.mu th{font:800 12px/1 'Nunito',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--phu);text-align:left;padding:0 8px 10px}
.mu td{padding:9px 8px;border-top:1px solid var(--vach);vertical-align:middle}
.mu code{font-size:12px;color:var(--phu)}
.mu .cap{display:inline-flex;margin-right:8px;vertical-align:middle}
.mu .cap i{width:26px;height:26px;border-radius:7px;box-shadow:inset 0 0 0 1px rgba(51,41,31,.10)}
.mu .cap i+i{margin-left:-6px}
.mu .hang-lop{display:flex;gap:6px;margin-bottom:6px}
.mu .hang-lop .dl{width:22px;height:22px}
.mu small{font-size:12.5px;color:var(--phu)}
.mu .ten-lop{display:inline-flex;align-items:center;gap:5px;margin:0 10px 4px 0;white-space:nowrap}
.mu .ten-lop .dl{width:12px;height:12px}
.de{display:inline-block;min-width:28px;padding:3px 6px;border-radius:6px;font:500 12px/1 'IBM Plex Mono',monospace;text-align:center;vertical-align:middle}
.de.ro{background:#DDEEDF;color:#1F5A34}.de.gan{background:#FBEBC4;color:#6B4A00}.de.lan{background:#F8D8CF;color:#7A2616}

/* ba phút đầu */
.buoc{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
@media (max-width:980px){.buoc{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media (max-width:560px){.buoc{grid-template-columns:minmax(0,1fr)}}
.buoc article{position:relative;background:var(--mat);border-radius:18px;padding:12px 14px 16px;box-shadow:inset 0 0 0 1px var(--vach);display:grid;gap:6px;align-content:start}
.buoc .khung-buoc svg{display:block;width:100%;height:auto;border-radius:12px}
.buoc .so-buoc{position:absolute;top:20px;left:22px;width:24px;height:24px;border-radius:50%;background:#33291F;color:#FEFCF7;display:grid;place-items:center;font:500 12px/1 'IBM Plex Mono',monospace}
.buoc h3{margin:6px 0 0;font-size:20px}
.buoc p{font-size:14.5px;color:var(--phu);line-height:1.45}
.buoc small{font:500 12px/1.4 'IBM Plex Mono',monospace;color:var(--mo)}

/* khổ màn */
.kho{display:grid;gap:22px}
.kho figure{margin:0;display:grid;gap:10px}
.kho figcaption{display:flex;gap:12px;align-items:baseline}
.kho figcaption b{font:800 18px/1 'Baloo 2',sans-serif}
.kho figcaption code{font-size:12.5px;color:var(--phu)}
.cap-kho{display:flex;gap:14px;flex-wrap:wrap;align-items:flex-start}
.cap-kho svg{height:300px;width:auto;max-width:100%;display:block}
@media (max-width:640px){.cap-kho svg{height:auto;width:100%}}

/* màn: ngón giấy, triện xong, cổng và khu người lớn */
.man .ngon{position:absolute;left:0;top:0;width:64px;height:64px;margin:-32px 0 0 -32px;border-radius:50%;z-index:15;pointer-events:none;opacity:0;
  background:rgba(254,252,247,.94);box-shadow:inset 0 0 0 4px #F7C23A,0 3px 0 rgba(217,161,28,.45)}
.man .ngon svg{position:absolute;inset:-6px;width:76px;height:76px;transform:rotate(-90deg)}
.man .ngon circle{fill:none;stroke:#33291F;stroke-width:3;stroke-linecap:round;stroke-dasharray:183;stroke-dashoffset:183}
.man.hoc .tren,.man.hoc .chinh,.man.hoc .sau,.man.hoc .v4,.man.hoc .gay{opacity:.4;transition:opacity 280ms cubic-bezier(.4,0,.2,1)}
.man.hoc[data-hoc="giu"] .tren{opacity:1}
.man .trien-xong{position:absolute;left:706px;top:520px;width:96px;height:96px;border-radius:22px;background:#C4412B;display:grid;place-items:center;z-index:14;pointer-events:none;opacity:0;
  box-shadow:0 4px 0 #9E2F1E;transform:rotate(8deg)}
.man .trien-xong .ic{width:58px;height:58px;fill:#FEFCF7}
.man .trien-xong.dong{animation:dongXong 1.8s cubic-bezier(.2,.8,.2,1) both}
@keyframes dongXong{0%{opacity:0;transform:rotate(8deg) scale(1.8)}14%{opacity:1;transform:rotate(8deg) scale(.92)}22%{transform:rotate(8deg) scale(1)}80%{opacity:1}100%{opacity:0;transform:rotate(8deg) scale(1)}}
.man .v2 .ho-so{position:relative;cursor:pointer;touch-action:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}
.man .v2 .ho-so .vong{position:absolute;left:-5px;top:-5px;width:50px;height:50px;transform:rotate(-90deg);pointer-events:none}
.man .v2 .ho-so .vong circle{fill:none;stroke:#33291F;stroke-width:3;stroke-linecap:round;stroke-dasharray:145;stroke-dashoffset:145;transition:stroke-dashoffset 180ms cubic-bezier(.4,0,1,1)}
.man .v2 .ho-so.giu .vong circle{stroke-dashoffset:0;transition:stroke-dashoffset 2s linear}
.man .nguoi-lon{position:absolute;inset:0;z-index:30;background:rgba(51,41,31,.28);opacity:0;visibility:hidden;transition:opacity 224ms cubic-bezier(.4,0,1,1),visibility 0s linear 224ms}
.man .nguoi-lon.mo{opacity:1;visibility:visible;transition:opacity 280ms cubic-bezier(.2,.8,.2,1),visibility 0s}
.man .to-nl{position:absolute;left:50%;top:50%;width:540px;transform:translate(-50%,-46%);background:#FEFCF7;border-radius:26px;padding:24px 28px 22px;display:grid;gap:16px;
  box-shadow:inset 0 0 0 1px rgba(51,41,31,.1),0 4px 0 #D8CBB9;transition:transform 280ms cubic-bezier(.2,.8,.2,1)}
.man .nguoi-lon.mo .to-nl{transform:translate(-50%,-50%)}
.man .dau-nl{display:flex;justify-content:space-between;align-items:flex-start}
.man .dau-nl b{display:block;font:800 28px/1.05 'Baloo 2',sans-serif;color:#33291F}
.man .dau-nl small{font-size:15px;color:#7A6C58}
.man .ds-hs{display:flex;gap:10px;align-items:center}
.man .ho-so.lon{width:52px;height:52px;font-size:20px}
.man .ds-hs .ghi{font-size:15px;color:#5C5040;margin-left:4px}
.man .hang-nl{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:10px 0;border-top:1px solid rgba(51,41,31,.08);font:600 17px/1.2 'Nunito',sans-serif;color:#3B3128}
.man .to-nl .goi-y{color:#7A6C58;font-size:14px}
.man.tron #man-canh,.man.tron #man-vat{opacity:0!important;transition:opacity 280ms}

/* 11 · bản mẫu màn nhà và thẻ bộ phận — khung máy tĩnh, co theo bề rộng cột (trang.js) */
.mm-luoi{display:grid;grid-template-columns:minmax(0,2.07fr) minmax(0,1fr);gap:18px;align-items:start;margin-bottom:22px}
@media (max-width:760px){.mm-luoi{grid-template-columns:minmax(0,1fr)}}
.mm-may{margin:0;display:grid;gap:10px}
.mm-may figcaption{display:grid;gap:3px}
.mm-may figcaption b{font:800 17px/1.2 'Baloo 2',sans-serif}
.mm-may figcaption span{color:var(--phu);font-size:14.5px;line-height:1.4}
.khung-mau{position:relative;width:100%;overflow:hidden;border-radius:clamp(10px,1.6vw,22px);background:#FDF6E8;box-shadow:0 0 0 clamp(5px,.7vw,9px) #1E1914;margin:clamp(5px,.7vw,9px)}
.khung-mau > .mm{position:absolute;left:0;top:0;transform-origin:0 0}
.mm.ngang{width:1180px;height:820px}
.mm.doc{width:820px;height:1180px}
.mm .mm-nen{position:absolute;inset:0;width:100%;height:100%}
.mm .mm-tren{position:absolute;left:0;right:0;top:0;height:64px;display:flex;align-items:center;justify-content:space-between;padding:0 16px 0 24px;z-index:6}
.mm .v1,.mm .v2{display:flex;align-items:center;gap:10px}
.mm .mm-lua{font:800 13px/1 'Nunito',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#7A6C58}
.mm .ho-so{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:#B7DAC2;color:#33291F;font:800 16px/1 'Baloo 2',sans-serif;box-shadow:inset 0 0 0 1px rgba(51,41,31,.1)}

.mm-hh{appearance:none;border:0;background:none;padding:0;margin:0;display:grid;justify-items:center;gap:10px;cursor:pointer;color:var(--than);-webkit-tap-highlight-color:transparent}
.mm-hh .dia{position:relative;display:block;width:var(--d,170px);height:var(--d,170px);border-radius:50%}
.mm-hh .dia svg{position:absolute;inset:0;width:100%;height:100%}
.mm-hh.chon .dia::before{content:"";position:absolute;inset:3%;border-radius:50%;background:var(--hoe2)}
.mm-hh .ten{display:grid;justify-items:center;gap:5px;font:800 22px/1 var(--f-ten)}
.mm-hh .ten small{font:500 13px/1 var(--f-so);color:var(--chu-phu)}
.mm-hh.chon .ten{font-size:30px}
.mm-hh.khoa{opacity:.42}
.mm-hh .dau-xong{position:absolute;right:9%;bottom:9%;width:27%;height:27%;border-radius:18%;background:var(--vang);transform:rotate(-8deg);display:grid;place-items:center;box-shadow:0 2px 0 var(--vang-sam)}
.mm-hh .dau-xong .ic{width:62%;height:62%;fill:var(--giay)}
.mm-hh .dau-khoa{position:absolute;left:50%;bottom:4%;width:44px;height:44px;margin-left:-22px;border-radius:50%;background:var(--giay);display:grid;place-items:center;box-shadow:inset 0 0 0 1px var(--ke),0 3px 0 var(--bong)}
.gg.mm .mm-hh .moi{top:16%;right:16%;transform:rotate(8deg) scale(1.7)}
.mm .mm-ke{position:absolute;left:0;right:0;display:flex;justify-content:center;align-items:center;gap:26px}
.mm.ngang .mm-ke{top:118px}
.mm.ngang .mm-ke .mm-hh:nth-child(1),.mm.ngang .mm-ke .mm-hh:nth-child(5){--d:130px}
.mm.ngang .mm-ke .mm-hh.chon{--d:320px}
.mm.doc .mm-lon{position:absolute;left:0;right:0;top:150px;display:flex;justify-content:center}
.mm.doc .mm-lon .mm-hh{--d:420px}
.mm.doc .mm-lon .mm-hh .ten{font-size:34px}
.mm.doc .mm-ke{top:690px;gap:18px}
.mm.doc .mm-ke .mm-hh{--d:132px}
.mm .mm-chinh{position:absolute;left:50%;margin-left:-90px;width:180px;z-index:7}
.mm .mm-chinh .n{width:180px}
.mm.ngang .mm-chinh{top:600px}
.mm.doc .mm-chinh{top:900px}
.mm .mm-coc{position:absolute;left:24px;bottom:14px;z-index:9}
.mm .mm-cuon{position:absolute;left:24px;bottom:94px;width:340px;padding:14px 18px;background:#FEFCF7;border-radius:18px;z-index:9;box-shadow:inset 0 0 0 1px var(--ke),0 3px 0 var(--bong)}
.mm .mm-cuon b{display:block;font:800 14px/1 var(--f-ten);color:var(--vang);margin-bottom:6px}
.mm .mm-cuon p{margin:0;font:400 17px/1.45 var(--f-chu);color:var(--chu)}

.mm .mm-gay{position:absolute;top:64px;left:50%;transform:translateX(-50%);z-index:5;white-space:nowrap}
.mm.ngang .mm-gay{left:400px}
.mm .mm-mau{position:absolute;width:460px;height:640px}
.mm.ngang .mm-mau{left:185px;top:114px;width:431px;height:600px}
.mm.doc .mm-mau{left:201px;top:118px;width:417px;height:580px}
.mm .mm-the{position:absolute;z-index:8}
.mm.ngang .mm-the{left:806px;top:74px;width:350px;height:644px}
.mm.doc .mm-the{left:0;right:0;bottom:0;height:472px}
.mm .mm-the .the{height:100%;overflow:auto}
.mm .mm-the .the .phu{font-size:15.5px;line-height:1.45;color:var(--chu-dam)}
.mm .mm-the .the .keo{display:none}
.mm .mm-the .the.tam{border-radius:26px 26px 0 0;padding:34px 28px 24px}
.mm .mm-the .the.tam .keo{display:block;position:absolute;top:12px;left:50%;width:44px;height:5px;margin-left:-22px;border-radius:3px;background:var(--ke2)}
.mm .mm-the .the.tam .dong{top:18px;right:18px}
.mm .mm-dock{position:absolute;left:184px;bottom:14px;z-index:7}
`,Hn=`hieu-co-the/ngon`;function Un(){try{return localStorage.getItem(Hn)===`en`?`en`:`vi`}catch{return`vi`}}var Q=Un(),Wn={get:()=>Q,kia:()=>Q===`vi`?`en`:`vi`,dat(e){Q=e,document.documentElement.lang=e;try{localStorage.setItem(Hn,e)}catch{}}};document.documentElement.lang=Q;function Gn(e,t=Q){return e==null?``:typeof e==`string`?e:(t===`en`?e.en||e.vi:e.vi||e.en)??``}var Kn={tenGame:{vi:`Họ Hàng`,en:`Kin`},phuDe:{vi:`Mở từng con vật ra xem bên trong, tìm những bộ phận em cũng có`,en:`Open each animal to see inside, and find the parts you have too`},chuong:{vi:`Chương {0}`,en:`Chapter {0}`},banMo:{vi:`Bàn mổ`,en:`Table`},vao:{vi:`Vào chơi`,en:`Play`},tiepTuc:{vi:`Chơi tiếp`,en:`Continue`},moLai:{vi:`Chơi lại`,en:`Play again`},chuongSau:{vi:`Chương sau`,en:`Next chapter`},chuongTruoc:{vi:`Chương trước`,en:`Previous chapter`},lui:{vi:`Quay lại`,en:`Back`},dangVe:{vi:`Chưa vẽ xong`,en:`Still being drawn`},daXong:{vi:`Đã xong`,en:`Done`},dangDo:{vi:`Đang chơi dở`,en:`In progress`},lop:{vi:[`Da`,`Cơ`,`Nội tạng`,`Xương`,`Thần kinh`,`Mạch`],en:[`Skin`,`Muscle`,`Organs`,`Bone`,`Nerves`,`Vessels`]},lopSo:{vi:`Lớp {0}`,en:`Layer {0}`},soi:{vi:`Kính soi`,en:`Lens`},khay:{vi:`Khay`,en:`Tray`},khayTha:{vi:`Kéo bộ phận thả vào đây`,en:`Drag a part and drop it here`},datVe:{vi:`Đặt {0} về lại chỗ cũ trên con vật`,en:`Put the {0} back on the animal`},khep:{vi:`Đóng lại`,en:`Close up`},moLaiNhuCu:{vi:`Mở lại như cũ`,en:`Undo`},nac:{vi:`Nhìn xuyên {0} lớp`,en:`See {0} layers deep`},boc:{vi:`bóc`,en:`peel`},latNap:{vi:`Lật nắp lên`,en:`Lift the flap`},dong:{vi:`Đóng`,en:`Close`},docChoEm:{vi:`Đọc cho em`,en:`Read to me`},hoHang:{vi:`Họ hàng`,en:`Kin`},muiKhau:{vi:`{0} mũi khâu nối với họ hàng`,en:`{0} stitches to your kin`},thayCoc:{vi:`Thầy Cóc`,en:`Master Toad`},nhip:{vi:{1:`Bắt đầu`,2:`Đi theo dấu chân`,3:`Lật thẻ ra xem`,6:`Xem xong`,7:`Em đã thử`,8:`Xong chương này`},en:{1:`Start`,2:`Follow the footprints`,3:`Turn the card over`,6:`Done looking`,7:`I tried it`,8:`Finish the chapter`}},luiXemCay:{vi:`Xem trên Cây Đời`,en:`See it on the Tree of Life`},tiep:{vi:`Đi tiếp`,en:`Next`},deSau:{vi:`Để sau`,en:`Later`},veChuong:{vi:`Về trang chương`,en:`Back to the chapter`},luiRaXemCay:{vi:`Lùi ra xem Cây Đời`,en:`Step back to the Tree of Life`},oTrenCay:{vi:`{0} ở trên Cây Đời`,en:`{0} on the Tree of Life`},dauChanDi:{vi:`Dấu chân đi từ gốc cây lên tới chỗ cành rẽ ra của chương này`,en:`Footprints climb from the root to the fork where this chapter’s branch splits off`},dauVuotRanh:{vi:`Dấu vượt ranh trên cành này`,en:`Border crossings on this branch`},trieuNam:{vi:`{0} triệu năm trước`,en:`{0} million years ago`},tamBong:{vi:`Hình tổ tiên chung, hiện dần mỗi khi em tìm ra một thứ`,en:`Your shared ancestor, filling in each time you find something`},bongToTien:{vi:`Tổ tiên chung`,en:`Shared ancestor`},vuaMangVe:{vi:`Em vừa tìm được`,en:`You just found`},soiChi:{vi:`Sợi chỉ nối bộ phận giống nhau giữa các loài`,en:`Threads join matching parts across animals`},soiQua:{vi:`Những sợi chỉ đi qua {0}`,en:`Threads that run through the {0}`},diVat:{vi:`Thứ em mang từ tổ tiên`,en:`Something from your ancestors`},motThuEmMang:{vi:`Tổ tiên để lại, em vẫn mang trong người`,en:`Left by your ancestors, still in your body`},thuNgay:{vi:`Thử ngay`,en:`Try it now`},cauBoNgo:{vi:`Câu chưa ai trả lời được`,en:`A question no one has answered yet`},nhinSang:{vi:`Họ hàng bên cạnh`,en:`Close relatives`},xongChuong:{vi:`Xong chương`,en:`Chapter done`},trienVeCanh:{vi:`Những con dấu em tìm được đã đóng lên cành Cây Đời, sợi chỉ nối em thêm với họ hàng.`,en:`The stamps you found are on the branches of the Tree of Life, and the thread ties you closer to your kin.`},dauChanMoi:{vi:`Chương mới mở`,en:`New chapters open`},lang:{vi:`Làng`,en:`Village`},diDau:{vi:`Hôm nay em muốn đi đâu?`,en:`Where to today?`},veNoi:{vi:`Về {0}`,en:`Back to {0}`},moCon:{vi:`Mở {0}`,en:`Open the {0}`},daMo:{vi:`Đã mở`,en:`Opened`},conDaMo:{vi:`Đã mở {0}/{1} con vật`,en:`{0} of {1} animals opened`},nhinGan:{vi:`Nhìn gần qua kính lúp`,en:`Up close through the magnifier`},moXong:{vi:`Đã mở hết`,en:`All opened`},soCham:{vi:`Em đã xem`,en:`Seen up close`},soNep:{vi:`Ngày và đêm`,en:`Day and night`},soBienCo:{vi:`Em ngồi xem`,en:`Watched`},nguoiLon:{vi:`Khu người lớn`,en:`Grown-ups`},nguoiLonPhu:{vi:`Tuỳ chọn trên máy này`,en:`Settings on this device`},giuDeMo:{vi:`Khu người lớn: nhấn giữ 2 giây để mở`,en:`Grown-ups: press and hold for 2 seconds`},tiengVan:{vi:`Ngôn ngữ`,en:`Language`},tiengDong:{vi:`Tiếng động`,en:`Sound effects`},giongThay:{vi:`Giọng Thầy Cóc`,en:`Master Toad’s voice`},giamDong:{vi:`Giảm chuyển động`,en:`Reduce motion`},tuoi:{vi:`Tuổi người chơi`,en:`Player’s age`},tuoiBac:{vi:[`8–10`,`11–13`,`14–16`],en:[`8–10`,`11–13`,`14–16`]},choiLai:{vi:`Chơi lại từ đầu`,en:`Start over`},khongMuaBan:{vi:`Không mua bán, không quảng cáo, không bảng điểm. Tiến độ của em nằm trên máy này.`,en:`No purchases, no ads, no scoreboards. Progress stays on this device.`},banThu:{vi:`Bản chơi thử`,en:`Playtest build`},taiKhoan:{vi:`Tài khoản`,en:`Account`},luuTienDo:{vi:`Lưu tiến độ`,en:`Save progress`},luuTienDoPhu:{vi:`Chơi tiếp ở máy khác, không mất khi trình duyệt dọn dữ liệu.`,en:`Keep playing on another device, and never lose progress when the browser clears data.`},taoHayVao:{vi:`Tạo hoặc vào`,en:`Create or sign in`},quanLy:{vi:`Quản lý`,en:`Manage`},daLuu:{vi:`Đã lưu`,en:`Saved`},dangLuu:{vi:`Đang lưu…`,en:`Saving…`},chuaLuuDuoc:{vi:`Chưa lưu được, sẽ thử lại`,en:`Not saved yet, will retry`},goLaiPin:{vi:`Gõ lại mã bốn số để lưu tiếp`,en:`Enter your PIN again to keep saving`},tenDangNhap:{vi:`Tên đăng nhập`,en:`Username`},tenGoiY:{vi:`ví dụ muoi`,en:`e.g. muoi`},maPin:{vi:`Mã bốn số`,en:`4-digit PIN`},pinCu:{vi:`Mã bốn số cũ`,en:`Current PIN`},pinMoi:{vi:`Mã bốn số mới`,en:`New PIN`},vaoTk:{vi:`Đăng nhập`,en:`Sign in`},taoMoi:{vi:`Tạo tài khoản mới`,en:`Create account`},doiPin:{vi:`Đổi mã bốn số`,en:`Change PIN`},luu:{vi:`Lưu`,en:`Save`},thoatTk:{vi:`Thoát tài khoản trên máy này`,en:`Sign out on this device`},oMayKhac:{vi:`Ở máy khác, gõ đúng tên đăng nhập này và mã bốn số là chơi tiếp được.`,en:`On another device, enter this username and PIN to carry on.`},tkXau:{vi:`Tên đăng nhập dài từ 3 đến 16 chữ cái hoặc chữ số, mã gồm đúng bốn chữ số.`,en:`Username 3–16 letters or digits, PIN exactly four digits.`},tkTrung:{vi:`Tên này có người dùng rồi. Chọn tên khác, hoặc bấm Đăng nhập nếu là của em.`,en:`That name is taken. Pick another, or tap Sign in if it is yours.`},tkLoi:{vi:`Không nối được máy chủ. Thử lại sau nhé.`,en:`Could not reach the server. Try again later.`},tkKhong:{vi:`Chưa có tài khoản tên này. Bấm Tạo tài khoản mới.`,en:`No account with that name. Tap Create account.`},tkSai:{vi:`Sai mã bốn số. Còn {0} lần thử.`,en:`Wrong PIN. {0} tries left.`},tkKhoa:{vi:`Thử sai nhiều quá. Đợi {0} phút rồi thử lại.`,en:`Too many tries. Wait {0} minutes.`},tkDaTao:{vi:`Đã tạo tài khoản. Tiến độ trên máy này đã được lưu lên mạng.`,en:`Account created. Progress on this device is now saved online.`},tkDaDoiPin:{vi:`Đã đổi mã bốn số.`,en:`PIN changed.`}};function qn(e,...t){let n=Kn[e][Q];return t.reduce((e,t,n)=>e.replace(`{${n}}`,String(t)),n)}var Jn=e=>Kn.lop[Q][e]??qn(`lopSo`,e),Yn=e=>Kn.nhip[Q][e],Xn=e=>Kn.tuoiBac[Q][e-1],Zn={rach:{vi:`Kéo ngón tay theo đường chấm trên bụng con vật để mở nó ra nhé.`,en:`Drag your finger along the dotted line on the belly to open it up.`},boc:{vi:`Nắm lấy cả lớp ấy, kéo nó vào khay ở dưới.`,en:`Grab that whole layer and drag it into the tray below.`},chamKinh:{vi:`Chạm vào chỗ bên trong vòng kính soi xem.`,en:`Tap inside the lens circle.`},tim:{vi:`Em tìm {0} trên con vật rồi chạm vào nó xem.`,en:`Find the {0} on the animal and tap it.`},soi:{vi:`Nhấn giữ ngón tay yên trên con vật để soi vào bên trong.`,en:`Press and hold still on the animal to look inside.`},nhac:{vi:`Kéo bộ phận ấy vào khay ở dưới xem.`,en:`Drag that part into the tray below.`},datLop:{vi:`Lớp ấy đang nằm trong khay. Kéo nó về lại con vật.`,en:`That layer is in the tray. Drag it back onto the animal.`},latNap:{vi:`Kéo cái nắp lật ra để xem bên dưới.`,en:`Pull the flap open to see underneath.`},luiRa:{vi:`Giờ lùi ra xem con vật này ở đâu trên Cây Đời.`,en:`Now step back and see where this animal sits on the Tree of Life.`},toXong:{vi:`Đủ cả tờ rồi. Tờ này vào sổ, em về xem nó sống tiếp.`,en:`The whole page is found. It goes in the notebook; go back and watch it live.`},rachTruoc:{vi:`Em rạch bụng con vật theo đường chấm trước đã.`,en:`Open the belly along the dotted line first.`},bocTruoc:{vi:`Kéo lớp {0} vào khay trước đã.`,en:`Drag the {0} layer into the tray first.`},khoaBac:{vi:`Lớp này dành cho các bạn lớn tuổi hơn. Người lớn đổi tuổi được trong Khu người lớn.`,en:`This layer is for older players. A grown-up can change the age in the Grown-ups area.`},thoiChi:{vi:`Thầy thôi chỉ tay nhé.`,en:`I’ll stop pointing now.`},thuLam:{vi:`Em thử làm theo lời trên tờ giấy xem nào.`,en:`Try what the sheet says.`},giongCa:{vi:`Còn con vật nào giống cá nữa không? Em nghĩ thử xem.`,en:`What other animals are like a fish? Have a think.`},dangVe:{vi:`Chương này Thầy còn đang vẽ. Em chơi chương {0} trước nhé.`,en:`I am still drawing this chapter. Try chapter {0} first.`},noiDangVe:{vi:`Nơi này Thầy còn đang khắc. Em đi chỗ khác trước nhé.`,en:`I am still carving this place. Try somewhere else first.`},lang:{vi:`Mỗi nơi có những con sống theo nếp riêng. Chạm vào một nơi để đi tới đó.`,en:`Every place has animals living their own way. Tap a place to walk there.`},chamCon:{vi:`Chạm vào một con vật để nhìn nó gần hơn.`,en:`Tap an animal to look closer.`},soGhiNoi:{vi:`Sổ tay vừa ghi lại điều em thấy. Chạm nút Sổ tay ở dưới để đọc.`,en:`Your notebook just wrote down what you saw. Tap Notebook below to read it.`},moBanSoNoi:{vi:`Giờ đặt {0} cạnh em. Có những thứ nó có thì em cũng có.`,en:`Now put {0} next to you. Some things it has, you have too.`},hetSoNoi:{vi:`Em vừa dùng sợi chỉ nối từng bộ phận của {0} với bộ phận giống nó ở em.`,en:`You used threads to join each part of the {0} to the matching part in you.`},coBanSo:{vi:`Em đã mở {0}. Bàn so sánh đã bày ra, em đặt nó cạnh em xem.`,en:`You have opened the {0}. The compare table is ready: put it next to you.`},chaoMung:{vi:`Chạm vào con vật để mở nó ra.`,en:`Tap the animal to open it.`}};function Qn(e,...t){return t.reduce((e,t,n)=>e.replace(`{${n}}`,String(t)),Zn[e][Q])}var $n={vi:{giong:`vi-VN-NamMinhNeural`,nhip:`-8%`,cao:`-4Hz`},en:{giong:`en-GB-RyanNeural`,nhip:`-5%`,cao:`-2Hz`}},er=e=>e.replace(/\s+/g,` `).trim();function tr(e,t){let n=$n[e],r=`${n.giong}|${n.nhip}|${n.cao}|${er(t)}`,i=2166136261;for(let e=0;e<r.length;e++)i^=r.charCodeAt(e),i=Math.imul(i,16777619)>>>0;return`${e}-${i.toString(16).padStart(8,`0`)}${r.length.toString(36)}`}var nr=`U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD`,rr=`U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB`;function ir(){let e=(e,t,n,r)=>`@font-face{font-family:'${e}';font-weight:${n};font-display:swap;src:url(${t}) format('woff2');unicode-range:${r}}`;return e(`Baloo 2`,Fn,`400 800`,nr)+e(`Baloo 2`,In,`400 800`,rr)+e(`Nunito`,Ln,`400 800`,nr)+e(`Nunito`,Rn,`400 800`,rr)+e(`IBM Plex Mono`,zn,`500`,nr)+e(`IBM Plex Mono`,Bn,`500`,rr)}function ar(){let e=new CSSStyleSheet;e.replaceSync(Vn);let t=e=>[...e].map(e=>{if(e instanceof CSSStyleRule)return e.selectorText.split(`,`).every(e=>e.trim().startsWith(`.man`))?e.cssText:``;if(e instanceof CSSKeyframesRule)return e.cssText;if(e instanceof CSSMediaRule){let n=t(e.cssRules);return n?`@media ${e.conditionText}{${n}}`:``}return``}).join(`
`);return t(e.cssRules)}function or(){let e=document.createElement(`style`);e.textContent=ir()+Re+$e+Nn+jn()+ar(),document.head.append(e),Function(Pn)()}var sr=0;function cr(e,t=`ic`){let n=pe[e];return n?me(n,`i${sr++}-`,t):``}var lr=()=>window.AM,ur={phat:(e,t)=>lr()?.phat(e,{k:t}),bat:e=>lr()?.bat(e),dangBat:()=>lr()?.dangBat()??!1,nho:e=>lr()?.nho(e)},$=typeof Audio>`u`?null:new Audio,dr=(()=>{let e=new Uint8Array(124),t=new DataView(e.buffer),n=(t,n)=>[...n].forEach((n,r)=>e[t+r]=n.charCodeAt(0));return n(0,`RIFF`),t.setUint32(4,116,!0),n(8,`WAVEfmt `),t.setUint32(16,16,!0),t.setUint16(20,1,!0),t.setUint16(22,1,!0),t.setUint32(24,8e3,!0),t.setUint32(28,8e3,!0),t.setUint16(32,1,!0),t.setUint16(34,8,!0),n(36,`data`),t.setUint32(40,80,!0),e.fill(128,44),`data:audio/wav;base64,`+btoa(String.fromCharCode(...e))})(),fr=45e3,pr=-1/0;if($){let e=()=>{pr=performance.now(),!$.src&&($.src=dr,$.play().catch(()=>{}))};addEventListener(`pointerdown`,e,!0),addEventListener(`keydown`,e,!0)}var mr=()=>!document.hidden&&document.hasFocus()&&performance.now()-pr<fr,hr={bat:!0,co:()=>!!$,noi(e){if(!this.bat||!$||!mr())return;this.im();let t=`giong/${tr(Wn.get(),e)}.mp3`;$.onerror=()=>console.warn(`giọng thầy chưa thu: ${e}`),$.src=t,$.play().catch(()=>{})},im(){$&&($.onerror=null,$.pause())}};addEventListener(`blur`,()=>hr.im());export{it as $,Tt as A,_ as At,xt as B,ft as C,w as Ct,St as D,T as Dt,pt as E,me as Et,bt as F,c as Ft,_t as G,It as H,Rt as I,dt as J,Lt as K,Ot as L,At as M,l as Mt,vt as N,g as Nt,Pt as O,S as Ot,Nt as P,a as Pt,nt as Q,Et as R,ht as S,k as St,mt as T,x as Tt,jt as U,kt as V,yt as W,st as X,V as Y,ut as Z,Wt as _,Ie as _t,qn as a,Ye as at,Zt as b,pe as bt,Nn as c,Ue as ct,H as d,Se as dt,or as dungNen,rt as et,qt as f,Me as ft,Ut as g,hr as giongThay,Fe as gt,Ht as h,Pe as ht,Yn as i,cr as icon,Xe as it,wt as j,u as jt,Ft as k,d as kt,Mn as l,I as lt,$t as m,Ne as mt,Qn as n,Je as nt,Jn as o,L as ot,Qt as p,je as pt,Ct as q,Wn as r,Ze as rt,Xn as s,He as st,Gn as t,ur as tieng,$e as tt,Sn as u,P as ut,Xt as v,Ee as vt,gt as w,O as wt,Kt as x,C as xt,Yt as y,xe as yt,Mt as z};