(this["webpackJsonpstrive-app"]=this["webpackJsonpstrive-app"]||[]).push([[0],{49:function(t,n,e){},61:function(t,n,e){"use strict";e.r(n);var i=e(2),r=e(3),c=e.n(r),a=e(39),o=e.n(a),s=e(10),d=(e(49),e(36));e(53);d.a.initializeApp({apiKey:"AIzaSyDT_duR9tJxaKbMTTGAr7v_KaR6FggBb7M",authDomain:"strive-441ff.firebaseapp.com",projectId:"strive-441ff",storageBucket:"strive-441ff.appspot.com",messagingSenderId:"224807487302",appId:"1:224807487302:web:c8d3e387cf39d57870c747"});var u=d.a,l=e(15),j=e(13),h=e(5),x=e(6),b=e(8),p=e(7);function f(){var t=Object(h.a)(["\n\theight: 2px;\n\twidth: 100px;\n\topacity: 0;\n\tmargin-top: 15px;\n\tmargin-bottom: 0;\n"]);return f=function(){return t},t}function m(){var t=Object(h.a)(["\n\theight: 2px;\n\tbackground-color: #fc5200;\n\twidth: 100px;\n\tmargin-top: 15px;\n\tmargin-bottom: 0;\n"]);return m=function(){return t},t}function g(){var t=Object(h.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: left;\n\twidth: 50%;\n\tpadding-left: 3%;\n\t@media (max-width: 800px) {\n\t\tdisplay: none;\n\t}\n\th2 {\n\t\tcolor: #fc5200;\n\t\tfont-family: 'Changa', sans-serif;\n\t\tpadding-right: 10px;\n\t}\n\ta {\n\t\twidth: 100px;\n\t\theight: auto;\n\t\tpadding-left: 10px;\n\t\tpadding-bottom: 0;\n\t\ttext-decoration: none;\n\t\tcolor: #555555;\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\tflex-wrap: wrap;\n\t\talign-items: center;\n\t\tjustify-content: space-evenly;\n\t\tmargin-bottom: -15px;\n\t}\n"]);return g=function(){return t},t}var O=function(){var t=Object(j.g)();return Object(i.jsxs)(v,{children:[Object(i.jsx)("h2",{children:"STRIVE"}),Object(i.jsxs)(l.b,{to:"/",children:["Dashboard ",Object(i.jsx)(b.a,{icon:p.a}),"/"===t.pathname?Object(i.jsx)(w,{}):Object(i.jsx)(y,{})]}),Object(i.jsxs)(l.b,{to:"/explore",children:["Nutrition ",Object(i.jsx)(b.a,{icon:p.a}),"/explore"===t.pathname?Object(i.jsx)(w,{}):Object(i.jsx)(y,{})]}),Object(i.jsxs)(l.b,{to:"/training",children:["Training ",Object(i.jsx)(b.a,{icon:p.a}),"/training"===t.pathname?Object(i.jsx)(w,{}):Object(i.jsx)(y,{})]}),Object(i.jsxs)(l.b,{to:"/challenges",children:["Profile ",Object(i.jsx)(b.a,{icon:p.a}),"/challenges"===t.pathname?Object(i.jsx)(w,{}):Object(i.jsx)(y,{})]})]})},v=x.a.div(g()),w=x.a.div(m()),y=x.a.div(f()),k=e(29);function S(){var t=Object(h.a)(["\n\twidth: 80%;\n\tmargin: auto;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tflex-wrap: nowrap;\n"]);return S=function(){return t},t}function C(){var t=Object(h.a)(["\n\twidth: auto;\n\tposition: fixed;\n\tbackground: white;\n\ttop: 80px;\n\tright: 80px;\n\tdisplay: flex;\n\tflex-direction: column;\n\ttext-align: center;\n\tpadding-bottom: 10px;\n"]);return C=function(){return t},t}var U=function(t){var n=t.users,e=t.setCurrentUser;return Object(i.jsx)(z,{children:n.map((function(t){return Object(i.jsxs)(A,{onClick:function(){return function(t){var i=n.filter((function(n){return n.name===t}));e(i[0])}(t.name)},children:[Object(i.jsx)("img",{src:t.image,alt:"userpic"}),Object(i.jsx)("p",{children:t.name})]},t.name)}))})},z=x.a.div(C()),A=x.a.div(S());function D(){var t=Object(h.a)(["\n\tdisplay: flex;\n\theight: auto;\n\twidth: 30%;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tcolor: #626262;\n\tpadding-right: 6%;\n\tbackground-color: white;\n\t@media (max-width: 1000px) {\n\t\tpadding-right: 2%;\n\t}\n\th2 {\n\t\tdisplay: none;\n\t\tcolor: #fc5200;\n\t\tfont-family: 'Changa', sans-serif;\n\t}\n\t@media (max-width: 800px) {\n\t\twidth: 100%;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tflex-direction: row;\n\t\tborder-bottom: solid 1px #d8d8d8;\n\t\talign-items: center;\n\t\tbutton {\n\t\t\tdisplay: none;\n\t\t}\n\t\th2 {\n\t\t\tdisplay: inline-flex;\n\t\t}\n\t}\n\tdiv {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t}\n\n\timg {\n\t\twidth: 30px;\n\t\theight: 30px;\n\t\tborder-radius: 50%;\n\t\tpadding-right: 5px;\n\t}\n"]);return D=function(){return t},t}var E=function(t){var n=t.currentUser,e=t.users,c=t.setCurrentUser,a=Object(r.useState)(!1),o=Object(s.a)(a,2),d=o[0],u=o[1];return Object(i.jsxs)(I,{children:[Object(i.jsx)("button",{children:"Subscribe"}),Object(i.jsx)("h2",{children:"STRIVE"}),Object(i.jsx)(b.a,{icon:k.a}),Object(i.jsxs)("div",{onClick:function(){u(!d)},children:[Object(i.jsx)("img",{src:n.image,alt:"profilepic"}),Object(i.jsx)(b.a,{icon:p.a}),!0===d?Object(i.jsx)(U,{users:e,setCurrentUser:c}):""]}),Object(i.jsx)(l.b,{to:"/upload",children:Object(i.jsx)(b.a,{color:"#fc5200",size:"2x",icon:p.i})})]})},I=x.a.div(D());function F(){var t=Object(h.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\theight: auto;\n\tcolor: #626262;\n\talign-items: center;\n\tjustify-content: space-between;\n\tborder-bottom: solid 1px #d8d8d8;\n\tposition: fixed;\n\tz-index: 10;\n\tbackground: white;\n\ttop: 0;\n"]);return F=function(){return t},t}var T=function(t){var n=t.users,e=t.currentUser,r=t.setCurrentUser;return Object(i.jsxs)(N,{children:[Object(i.jsx)(O,{}),Object(i.jsx)(E,{users:n,currentUser:e,setCurrentUser:r})]})},N=x.a.div(F());function B(){var t=Object(h.a)(["\n\tdisplay: flex;\n\twidth: 100%;\n\theight: auto;\n\tmargin: 0;\n\tpadding: 5%;\n\tbackground: #f0efef;\n\tjustify-content: space-evenly;\n"]);return B=function(){return t},t}function K(){var t=Object(h.a)(["\n\twidth: 100%;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr 1fr;\n\th5 {\n\t\tpadding: 0;\n\t\tmargin-top: 0;\n\t}\n"]);return K=function(){return t},t}function M(){var t=Object(h.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tflex-direction: column;\n\tbackground-color: white;\n\theight: auto;\n\tmargin-top: 40px;\n\tborder-radius: 0.5rem;\n\n\timg {\n\t\twidth: 80px;\n\t\theight: 80px;\n\t\tborder-radius: 50%;\n\t\tmargin-top: -40px;\n\t}\n\th2 {\n\t\tcolor: #8ce98c;\n\t}\n\th4 {\n\t\tcolor: #888888;\n\t\tfont-weight: 400;\n\t}\n"]);return M=function(){return t},t}function P(){var t=Object(h.a)(["\n\twidth: 80%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tmargin: 10%;\n\tmargin-top: 15%;\n\t@media (max-width: 800px) {\n\t\tmargin-top: 20%;\n\t\tmargin-bottom: 20%;\n\t}\n\t@media (max-width: 600px) {\n\t\tmargin-top: 25%;\n\t\tmargin-bottom: 25%;\n\t}\n"]);return P=function(){return t},t}var R=function(t){var n=t.currentUser,e=t.activities,c=Object(r.useState)([]),a=Object(s.a)(c,2),o=a[0],d=a[1],u=Object(r.useState)(0),l=Object(s.a)(u,2),j=l[0],h=l[1];return Object(r.useEffect)((function(){var t=e.filter((function(t){return t.user===n.name}));d(t);var i=Array.from(t);if(1===i.length){var r=i[0].distance;h(r)}else{if(0===i.length)return j;if(i.length>1){var c=i.reduce((function(t,n){return Number(t.distance)+Number(n.distance)}));h(c)}}}),[n]),Object(i.jsxs)(Y,{children:[Object(i.jsxs)(G,{children:[Object(i.jsx)("img",{src:n.image,alt:"userpic"}),Object(i.jsx)("h3",{children:n.name}),Object(i.jsxs)(H,{children:[Object(i.jsx)("p",{children:"Following"}),Object(i.jsx)("p",{children:"Followers"}),Object(i.jsx)("p",{children:"Activities"}),Object(i.jsx)("h5",{children:n.followers}),Object(i.jsx)("h5",{children:n.following}),Object(i.jsx)("h5",{children:o.length})]})]}),Object(i.jsxs)(G,{children:[Object(i.jsxs)(J,{children:[Object(i.jsx)(b.a,{color:"#888888",size:"2x",icon:p.c}),Object(i.jsx)(b.a,{color:"#888888",size:"2x",icon:p.j})]}),Object(i.jsx)("h4",{children:"Total Distance"}),Object(i.jsx)("h2",{children:j})]})]})},Y=x.a.div(P()),G=x.a.div(M()),H=x.a.div(K()),J=x.a.div(B()),W=e(43),L=e(23),V=e.n(L),Z=e(30);function _(){var t=Object(h.a)(["\n\twidth: 100%;\n\theight: 50%;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\talign-items: center;\n"]);return _=function(){return t},t}var q=function(t){var n=t.city,e=t.things,c=Object(r.useState)(0),a=Object(s.a)(c,2),o=a[0],d=a[1],u=Object(r.useState)(50),l=Object(s.a)(u,2),j=l[0],h=l[1],x=Object(r.useState)(0),f=Object(s.a)(x,2),m=f[0],g=f[1],O=Object(r.useState)(p.f),v=Object(s.a)(O,2),w=v[0],y=v[1],k=e[1].key,S=function(){var t=Object(Z.a)(V.a.mark((function t(n){var e,i;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q="+n+"&units=metric&APPID="+k);case 3:return e=t.sent,t.next=6,e.json();case 6:i=t.sent,d(i.main.temp.toFixed(0)),g(i.wind.speed.toFixed(0)),h(i.clouds.all),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0,"not worked this");case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(n){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){S(n)}),[]),Object(r.useEffect)((function(){y(j>70?p.f:j>70?p.e:j>30&&j<70?p.g:j<=30?p.k:p.e)}),[j]),Object(i.jsxs)(Q,{children:[Object(i.jsx)(b.a,{size:"2x",icon:w}),Object(i.jsxs)("h3",{children:["Temp: ",o,"C"]}),Object(i.jsxs)("h3",{children:["Wind: ",m,"mph"]})]})},Q=x.a.div(_());function X(){var t=Object(h.a)(["\n\twidth: 49%;\n\theight: 200px;\n\tborder-bottom: 1px lightgray solid;\n\t@media (max-width: 1000px) {\n\t\twidth: 100%;\n\t}\n"]);return X=function(){return t},t}function $(){var t=Object(h.a)(["\n\twidth: 100%;\n\n\theight: 100px;\n\n\tdisplay: grid;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\tgrid-template-columns: 1fr 1fr 1fr 1fr;\n\tgrid-template-rows: 2fr 1fr;\n"]);return $=function(){return t},t}function tt(){var t=Object(h.a)(["\n\twidth: 30%;\n\theight: auto;\n\tmargin: auto;\n\timg {\n\t\tmargin: 10%;\n\t\twidth: 80%;\n\t\theight: 80%;\n\t\tborder-radius: 50%;\n\t}\n"]);return tt=function(){return t},t}function nt(){var t=Object(h.a)(["\n\twidth: 50%;\n\n\theight: 200px;\n\tpadding: 0;\n\tborder-bottom: 1px lightgray solid;\n\tborder-right: 1px lightgray solid;\n\tdisplay: flex;\n\talign-items: center;\n\th1 {\n\t\tmargin: 0% 5% 0% 5%;\n\t\tpadding: 0;\n\t}\n\t@media (max-width: 1000px) {\n\t\twidth: 100%;\n\t}\n\t@media (max-width: 600px) {\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\th1 {\n\t\t\tfont-size: large;\n\t\t\ttext-align: center;\n\t\t}\n\t}\n"]);return nt=function(){return t},t}function et(){var t=Object(h.a)(["\n\twidth: 80%;\n\theight: auto;\n\tbackground: white;\n\tborder: 1px lightgray solid;\n\tmargin-left: 10%;\n\tmargin-bottom: 5%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\t@media (max-width: 1000px) {\n\t\tflex-direction: column;\n\t\tjustify-content: center;\n\t\tmargin-bottom: 10%;\n\t\tpadding-bottom: 10%;\n\t}\n"]);return et=function(){return t},t}function it(){var t=Object(h.a)(["\n\twidth: 80%;\n\tmargin: 5% 10% 0% 10%;\n\theight: 50px;\n\tbackground-color: #eeeeee;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tborder: 1px lightgray solid;\n\t@media (max-width: 1000px) {\n\t\theight: auto;\n\t}\n"]);return it=function(){return t},t}function rt(){var t=Object(h.a)(["\n\twidth: 100%;\n\tposition: fixed;\n\toverflow: scroll;\n\tz-index: 20;\n\theight: 100%;\n\tbackground-color: white;\n\ttop: 80px;\n\tleft: 0;\n\th1 {\n\t\tpadding-left: 5%;\n\t}\n"]);return rt=function(){return t},t}var ct=function(t){var n=t.detailActivity,e=t.things,r=t.detailDisplay,c=t.setDetailDisplay;return Object(i.jsxs)(at,{onClick:function(){return c(!r)},children:[Object(i.jsxs)(ot,{children:[Object(i.jsxs)("h1",{children:[" ",n[0].user," "]}),n[0].type?Object(i.jsx)(b.a,{size:"2x",icon:p.c}):Object(i.jsx)(b.a,{size:"2x",icon:p.j})]}),Object(i.jsxs)(st,{children:[Object(i.jsxs)(dt,{children:[Object(i.jsx)(ut,{children:Object(i.jsx)("img",{src:n[0].userImage,alt:""})}),Object(i.jsx)("h1",{children:n[0].title})]}),Object(i.jsxs)(jt,{children:[Object(i.jsxs)(lt,{children:[Object(i.jsxs)("h3",{children:[n[0].distance,"Km"]}),Object(i.jsx)("h3",{children:n[0].time}),Object(i.jsxs)("h3",{children:[(n[0].time/n[0].distance).toFixed(2),"/km"]}),Object(i.jsxs)("h3",{children:[""!==n[0].elevation?n[0].elevation:"N/A","m"]}),Object(i.jsx)("p",{children:"Distance"}),Object(i.jsx)("p",{children:"Duration"}),Object(i.jsx)("p",{children:"Pace"}),Object(i.jsx)("p",{children:"Elevation"})]}),Object(i.jsx)(q,{city:n[0].location,things:e})]}),Object(i.jsx)("img",{src:n[0].images,alt:"userpic"})]})]})},at=x.a.div(rt()),ot=x.a.div(it()),st=x.a.div(et()),dt=x.a.div(nt()),ut=x.a.div(tt()),lt=x.a.div($()),jt=x.a.div(X());function ht(){var t=Object(h.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\ttextarea {\n\t\twidth: 60%;\n\t}\n\tbutton {\n\t\tbackground-color: #fc5200;\n\t\tcolor: white;\n\t\tborder: none;\n\t\tpadding: 5px 10px 5px 10px;\n\t\tborder-radius: 0.3rem;\n\t}\n"]);return ht=function(){return t},t}function xt(){var t=Object(h.a)(["\n\twidth: 25px;\n\theight: 25px;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tbackground: #dddddd;\n\n\tmargin-left: 10px;\n"]);return xt=function(){return t},t}function bt(){var t=Object(h.a)(["\n\tdisplay: grid;\n\twidth: 90%;\n\n\talign-items: center;\n\tgrid-template-columns: 100px 100px auto 50px 50px;\n\tp {\n\t\tmargin-top: 5px;\n\t}\n"]);return bt=function(){return t},t}function pt(){var t=Object(h.a)(["\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 0% 5% 2% 5%;\n"]);return pt=function(){return t},t}function ft(){var t=Object(h.a)(["\n\twidth: 150px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tp {\n\t\tpadding-top: 20px;\n\t\tmargin-bottom: 0;\n\t}\n\t@media (max-width: 800px) {\n\t\twidth: 80px;\n\t}\n"]);return ft=function(){return t},t}function mt(){var t=Object(h.a)(["\n\tdisplay: flex;\n"]);return mt=function(){return t},t}function gt(){var t=Object(h.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-right: 5%;\n\th3 {\n\t\tfont-weight: 600;\n\t\tmargin: 0px;\n\t\t@media (max-width: 800px) {\n\t\t\tfont-size: smaller;\n\t\t}\n\t}\n"]);return gt=function(){return t},t}function Ot(){var t=Object(h.a)(["\n\twidth: 15%;\n\theight: 100px;\n\tdisplay: flex;\n\n\tpadding-right: 1%;\n\talign-items: center;\n\tflex-direction: column;\n\timg {\n\t\twidth: 40px;\n\t\theight: 40px;\n\t\tborder-radius: 50%;\n\t\tmargin-bottom: 20px;\n\t}\n"]);return Ot=function(){return t},t}function vt(){var t=Object(h.a)(["\n\twidth: 100%;\n\theight: auto;\n\tdisplay: flex;\n"]);return vt=function(){return t},t}function wt(){var t=Object(h.a)(["\n\twidth: 90%;\n\tmargin: 4% 5% 5% 5%;\n\tbackground: white;\n\tpadding: 5% 2% 5% 2%;\n\ttext-align: left;\n\tborder-radius: 0.5rem;\n\timg {\n\t\twidth: 90%;\n\t\theight: auto;\n\t\tmargin: 0% 5% 0% 5%;\n\t}\n\tp {\n\t\tcolor: #888888;\n\t\tfont-weight: 300;\n\t}\n\t@media (max-width: 1000px) {\n\t\tmargin: auto;\n\t\tmargin-bottom: 5%;\n\t}\n"]);return wt=function(){return t},t}var yt=function(t){var n=t.activity,e=t.activities,c=t.things,a=t.currentUser,o=Object(r.useState)(!1),d=Object(s.a)(o,2),l=d[0],j=d[1],h=Object(r.useState)(),x=Object(s.a)(h,2),f=x[0],m=x[1],g=Object(r.useState)(!1),O=Object(s.a)(g,2),v=O[0],w=O[1],y=Object(r.useState)(""),S=Object(s.a)(y,2),C=S[0],U=S[1];return n?Object(i.jsxs)(kt,{children:[Object(i.jsxs)(St,{children:[Object(i.jsxs)(Ct,{children:[Object(i.jsx)("img",{src:n.userImage,alt:"nick pic"}),!0===n.type?Object(i.jsx)(b.a,{size:"1x",icon:p.c}):Object(i.jsx)(b.a,{size:"2x",icon:p.j})]}),Object(i.jsxs)(Ut,{onClick:function(){return function(t){var n=e.filter((function(n){return n.title===t}));m(n),console.log(n),j(!l)}(n.title)},children:[Object(i.jsxs)("h3",{children:[" ",n.user," "]}),Object(i.jsx)("p",{children:n.date}),Object(i.jsx)("h3",{children:n.title}),Object(i.jsxs)(zt,{children:[Object(i.jsxs)(At,{children:[Object(i.jsx)("p",{children:"Distance"}),Object(i.jsxs)("h4",{children:[n.distance,"Km"]})]}),Object(i.jsxs)(At,{children:[Object(i.jsx)("p",{children:"Duration"}),Object(i.jsx)("h4",{children:n.time})]}),Object(i.jsxs)(At,{children:[Object(i.jsx)("p",{children:"Pace"}),Object(i.jsxs)("h4",{children:[(n.time/n.distance).toFixed(2)," /Km"]})]})]})]})]}),Object(i.jsx)("img",{src:n.images,alt:"userpic"}),Object(i.jsxs)(Dt,{children:[Object(i.jsxs)(Et,{children:[Object(i.jsxs)("p",{children:[n.likes," Kudos"]}),Object(i.jsxs)("p",{children:[n.comments.length," Comments"]}),Object(i.jsx)("p",{}),Object(i.jsx)(It,{children:Object(i.jsx)(b.a,{icon:p.l,color:"#555555",onClick:function(){!function(t){a.name!==t.user&&u.firestore().collection("activities").doc(t.id).set({likes:t.likes+1},{merge:!0}).catch((function(t){console.error("Error writing document: ",t)}))}(n)}})}),Object(i.jsx)(It,{children:Object(i.jsx)(b.a,{icon:k.b,onClick:function(){w(!v)}})})]}),v?Object(i.jsxs)(Ft,{children:[Object(i.jsx)("textarea",{value:C,onChange:function(t){U(t.target.value)}}),Object(i.jsx)("button",{onClick:function(){!function(t){var n=a.name+" - "+C;u.firestore().collection("activities").doc(t.id).set({comments:[].concat(Object(W.a)(t.comments),[n])},{merge:!0}).then((function(){U(""),w(!v)})).catch((function(t){console.error("Error writing document: ",t)}))}(n)},children:"Add"})]}):"",n.comments.map((function(t){return Object(i.jsx)("p",{children:t},t)}))]}),l?Object(i.jsx)(ct,{detailActivity:f,things:c,setDetailDisplay:j,detailDisplay:l}):""]},n.id):""},kt=x.a.div(wt()),St=x.a.div(vt()),Ct=x.a.div(Ot()),Ut=x.a.div(gt()),zt=x.a.div(mt()),At=x.a.div(ft()),Dt=x.a.div(pt()),Et=x.a.div(bt()),It=x.a.div(xt()),Ft=x.a.div(ht());function Tt(){var t=Object(h.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 100%;\n\theight: auto;\n\tmargin-top: 3%;\n\tbutton {\n\t\tbackground: none;\n\t\tcolor: #555555;\n\t\tborder: none;\n\t\ttext-align: left;\n\t\tmargin-top: 5%;\n\t\tmargin-left: 5%;\n\t\tfont-size: large;\n\t\twidth: 20%;\n\t\toutline: none;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tmargin-bottom: 0;\n\t}\n\n\t@media (max-width: 800px) {\n\t\tbutton {\n\t\t\tmargin: auto;\n\t\t\twidth: 50%;\n\t\t\tmargin-top: 5%;\n\t\t}\n\t}\n"]);return Tt=function(){return t},t}var Nt=function(t){var n=t.activities,e=t.currentUser,c=t.things,a=Object(r.useState)(!0),o=Object(s.a)(a,2),d=o[0],u=o[1],l=n;return Object(i.jsxs)(Bt,{children:[Object(i.jsxs)("button",{onClick:function(){u(!d)},children:[d?"Following ":"Your Activities "," ",Object(i.jsx)(b.a,{icon:p.a})]}),d?l.map((function(t){return Object(i.jsx)(yt,{activity:t,activities:n,things:c,currentUser:e},t.id)})):l.filter((function(t){return t.user===e.name})).map((function(t){return Object(i.jsx)(yt,{activity:t,things:c,activities:n,currentUser:e},t.id)}))]})},Bt=x.a.div(Tt());function Kt(){var t=Object(h.a)(["\n\tdisplay: flex;\n\twidth: 80%;\n\tpadding: 3% 10% 3% 10%;\n\talign-items: center;\n\th4 {\n\t\tmargin-bottom: 0;\n\t\tmargin-top: 5%;\n\t}\n\timg {\n\t\twidth: 40px;\n\t\theight: 40px;\n\t\tborder-radius: 50%;\n\t\tmargin-right: 20px;\n\t}\n\th5 {\n\t\tcolor: #fc5200;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\tdiv {\n\t\ttext-align: left;\n\t}\n"]);return Kt=function(){return t},t}function Mt(){var t=Object(h.a)(["\n\twidth: 100%;\n\theight: auto;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-top: 10%;\n\t@media (max-width: 1000px) {\n\t\tdisplay: none;\n\t}\n"]);return Mt=function(){return t},t}var Pt=function(t){var n=t.users,e=t.setCurrentUser;return Object(i.jsxs)(Rt,{children:[Object(i.jsx)("h3",{children:"Atheletes"}),n.map((function(t){return Object(i.jsxs)(Yt,{onClick:function(){return function(t){var i=n.filter((function(n){return n.name===t}));e(i[0])}(t.name)},children:[Object(i.jsx)("img",{src:t.image,alt:"profile pic"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:t.name}),Object(i.jsx)("h5",{children:t.location})]})]},t.name)}))]})},Rt=x.a.div(Mt()),Yt=x.a.div(Kt());function Gt(){var t=Object(h.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 2fr 1fr;\n\tbackground: #f0efef;\n\twidth: 100%;\n\theight: auto;\n\tmargin-top: 50px;\n\t@media (max-width: 1000px) {\n\t\tgrid-template-columns: 2fr 3fr;\n\t}\n\t@media (max-width: 800px) {\n\t\tdisplay: flex;\n\t\tflex-direction: column-reverse;\n\t}\n"]);return Gt=function(){return t},t}var Ht=function(t){var n=t.activities,e=t.users,r=t.currentUser,c=t.setCurrentUser,a=t.things;return Object(i.jsxs)(Jt,{children:[Object(i.jsx)(R,{currentUser:r,activities:n,users:e}),Object(i.jsx)(Nt,{activities:n,currentUser:r,things:a}),Object(i.jsx)(Pt,{users:e,setCurrentUser:c,currentUser:r})]})},Jt=x.a.div(Gt());function Wt(){var t=Object(h.a)(["\n\twidth: 80%;\n\tmargin: 8% 10% 5% 10%;\n\t@media (max-width: 800px) {\n\t\tmargin-top: 20%;\n\t\tmargin-bottom: 20%;\n\t}\n\t@media (max-width: 800px) {\n\t\tmargin-top: 25%;\n\t}\n\tform {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\tborder: 1px solid #555555;\n\t\tpadding: 3% 10% 3% 10%;\n\t\tmargin-bottom: 2%;\n\t}\n\ttextarea {\n\t\toutline: none;\n\t\tborder-radius: 0.5rem;\n\t\ttext-align: center;\n\t\tfont-family: 'MaisonNeue', 'Segoe UI', 'Helvetica Neue', -apple-system, system-ui, BlinkMacSystemFont, Roboto,\n\t\t\tArial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';\n\t\tfont-size: large;\n\t}\n\tfieldset {\n\t\tborder-radius: 0.5rem;\n\t\tdisplay: flex;\n\t\tjustify-content: space-evenly;\n\t\talign-items: center;\n\t}\n"]);return Wt=function(){return t},t}var Lt=function(t){var n=t.currentUser,e=(t.activities,new Date),c=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate(),a=Object(r.useState)(0),o=Object(s.a)(a,2),d=o[0],l=o[1],h=Object(r.useState)(0),x=Object(s.a)(h,2),b=x[0],p=x[1],f=Object(r.useState)(""),m=Object(s.a)(f,2),g=m[0],O=m[1],v=Object(r.useState)(""),w=Object(s.a)(v,2),y=w[0],k=w[1],S=Object(r.useState)(!0),C=Object(s.a)(S,2),U=C[0],z=C[1],A=Object(r.useState)(""),D=Object(s.a)(A,2),E=D[0],I=D[1],F=Object(j.f)();return Object(i.jsxs)(Vt,{children:[Object(i.jsx)("h1",{children:"Add Activity"}),Object(i.jsxs)("form",{children:[Object(i.jsxs)("p",{children:["User Name : ",n.name]}),Object(i.jsxs)("p",{children:["Activity Date : ",c]}),Object(i.jsx)("h2",{children:"Activity Title"}),Object(i.jsx)("textarea",{onChange:function(t){k(t.target.value)},cols:"30",rows:"1"}),Object(i.jsx)("h2",{children:"Distance in kilometres"}),Object(i.jsx)("textarea",{onChange:function(t){l(Number(t.target.value))},type:"number",cols:"30",rows:"1"}),Object(i.jsx)("h2",{children:"Where did your activity start?"}),Object(i.jsx)("textarea",{onChange:function(t){O(t.target.value)},cols:"30",rows:"1"}),Object(i.jsx)("h2",{children:"How long did it take in minutes?"}),Object(i.jsx)("textarea",{onChange:function(t){p(Number(t.target.value))},cols:"30",type:"number",rows:"1"}),Object(i.jsx)("h2",{children:"Add a photo"}),Object(i.jsx)("textarea",{onChange:function(t){I(t.target.value)},cols:"30",rows:"1",pattern:"/(https?:\\/\\/).*/g"}),Object(i.jsx)("h2",{children:"Type of Activity Run/Cycle"}),Object(i.jsx)("button",{type:"radio",onClick:function(){return z(!U)},children:U?"Cycle":"Run"})]}),Object(i.jsx)("button",{onClick:function(){if(""===d||""===b||""===y){console.log("not correct");F.push("/")}else{u.firestore().collection("activities").add({user:n.name,userImage:n.image,likes:0,time:b,distance:d,title:y,date:c,location:g,comments:[],type:U,images:E});F.push("/")}},children:"Upload"})]})},Vt=x.a.div(Wt());function Zt(){var t=Object(h.a)(["\n\twidth: 30%;\n\theight: auto;\n\tbox-shadow: 10px 10px 5px rgba(0, 0, 0, 0.05);\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\tmargin: 5%;\n\t@media (max-width: 800px) {\n\t\twidth: 80%;\n\t}\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: #555555;\n\t}\n\th3 {\n\t\ttext-decoration: none;\n\t}\n\timg {\n\t\twidth: 100%;\n\t\theight: auto;\n\t}\n"]);return Zt=function(){return t},t}function _t(){var t=Object(h.a)(["\n\tmargin-top: 5%;\n\twidth: 80%;\n\theight: auto;\n\tmargin-left: 10%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-evenly;\n\t@media (max-width: 800px) {\n\t\tflex-direction: column;\n\t\tmargin-top: 15%;\n\t\tmargin-bottom: 15%;\n\t}\n\t@media (max-width: 500px) {\n\t\tflex-direction: column;\n\t\tmargin-top: 23%;\n\t\tmargin-bottom: 20%;\n\t}\n"]);return _t=function(){return t},t}var qt=function(t){var n=t.things,e=Object(r.useState)(!1),c=Object(s.a)(e,2),a=c[0],o=c[1],d=Object(r.useState)(),u=Object(s.a)(d,2),l=u[0],j=u[1],h=n[0].key,x=function(){var t=Object(Z.a)(V.a.mark((function t(){var n,e;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.spoonacular.com/recipes/random?number=10&tags=vegan/information&apiKey="+h+"&includeNutrition=false.");case 3:return n=t.sent,t.next=6,n.json();case 6:return e=t.sent,j.apply(void 0,[e]),console.log(e),o(!0),t.abrupt("return",l);case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0,"not worked this");case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}();return Object(r.useEffect)((function(){x()}),[]),!0===a?Object(i.jsx)(Qt,{children:l.recipes.map((function(t){return Object(i.jsx)(Xt,{children:Object(i.jsxs)("a",{href:t.sourceUrl,children:[Object(i.jsx)("img",{src:t.image,alt:"foodpic"}),Object(i.jsx)("h3",{children:t.title})]})})}))}):Object(i.jsx)(Qt,{})},Qt=x.a.div(_t()),Xt=x.a.div(Zt());function $t(){var t=Object(h.a)(["\n\tmargin-top: 10%;\n\t@media (max-width: 800px) {\n\t\tmargin-top: 15%;\n\t}\n"]);return $t=function(){return t},t}var tn=function(t){var n=t.currentUser,e=t.activities;return Object(i.jsx)(nn,{children:Object(i.jsx)(R,{currentUser:n,activities:e})})},nn=x.a.div($t());function en(){var t=Object(h.a)(["\n\twidth: 40%;\n\theight: auto;\n\tmargin: 5%;\n\theight: auto;\n\t@media (max-width: 800px) {\n\t\twidth: 80%;\n\t\tmargin-top: 20%;\n\t\tmargin: 10%;\n\t}\n\t@media (max-width: 500px) {\n\t\tmargin-top: 25%;\n\t}\n"]);return en=function(){return t},t}function rn(){var t=Object(h.a)(["\n\tmargin-top: 5%;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\t@media (max-width: 800px) {\n\t\tflex-direction: column;\n\t}\n"]);return rn=function(){return t},t}var cn=function(){var t=[Object(i.jsx)("iframe",{src:"https://www.youtube.com/embed/YWzRE1BiAvw",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",title:"1"}),Object(i.jsx)("iframe",{src:"https://www.youtube.com/embed/MKuZOwYukho",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",title:"2"}),Object(i.jsx)("iframe",{src:"https://www.youtube.com/embed/Fgz7Ikf7ATk",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",title:"3"}),Object(i.jsx)("iframe",{src:"https://www.youtube.com/embed/nzCMptGGZt8",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",title:"4"})];return Object(i.jsx)(an,{children:t.map((function(t){return Object(i.jsx)(on,{children:t},t.title)}))})},an=x.a.div(rn()),on=x.a.div(en());function sn(){var t=Object(h.a)(["\n\tposition: fixed;\n\tbottom: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: auto;\n\tbackground-color: white;\n\tborder-top: 1px #d8d8d8 solid;\n\tdisplay: flex;\n\tjustify-content: space-evenly;\n\talign-items: center;\n\t@media (min-width: 800px) {\n\t\tdisplay: none;\n\t}\n\ta {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tmargin-top: 10px;\n\t\ttext-decoration: none;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tcolor: #555555;\n\t\tp {\n\t\t\tfont-size: small;\n\t\t}\n\t}\n"]);return sn=function(){return t},t}var dn=function(){var t=Object(j.g)();return Object(i.jsxs)(un,{children:[Object(i.jsxs)(l.b,{to:"/",children:["/"===t.pathname?Object(i.jsx)(b.a,{color:"#fc5200",size:"2x",icon:p.h}):Object(i.jsx)(b.a,{color:"#555555",size:"2x",icon:p.h}),Object(i.jsx)("p",{children:"Home"})]}),Object(i.jsxs)(l.b,{to:"/explore",children:["/explore"===t.pathname?Object(i.jsx)(b.a,{color:"#fc5200",size:"2x",icon:p.b}):Object(i.jsx)(b.a,{color:"#555555",size:"2x",icon:p.b}),Object(i.jsx)("p",{children:"Nutrition"})]}),Object(i.jsxs)(l.b,{to:"/challenges",children:["/challenges"===t.pathname?Object(i.jsx)(b.a,{color:"#fc5200",size:"2x",icon:p.m}):Object(i.jsx)(b.a,{color:"#555555",size:"2x",icon:p.m}),Object(i.jsx)("p",{children:"Profile"})]}),Object(i.jsxs)(l.b,{to:"/training",children:["/training"===t.pathname?Object(i.jsx)(b.a,{color:"#fc5200",size:"2x",icon:p.d}):Object(i.jsx)(b.a,{color:"#555555",size:"2x",icon:p.d}),Object(i.jsx)("p",{children:"Training"})]})]})},un=x.a.div(sn());var ln=function(){var t=Object(r.useState)([]),n=Object(s.a)(t,2),e=n[0],c=n[1],a=Object(r.useState)([]),o=Object(s.a)(a,2),d=o[0],h=o[1],x=Object(r.useState)([]),b=Object(s.a)(x,2),p=b[0],f=b[1],m=Object(r.useState)([]),g=Object(s.a)(m,2),O=g[0],v=g[1],w=u.firestore().collection("users"),y=u.firestore().collection("activities"),k=u.firestore().collection("things");return Object(r.useEffect)((function(){w.onSnapshot((function(t){var n=[];t.forEach((function(t){n.push(t.data())})),c(n),v(n[1])})),y.onSnapshot((function(t){var n=[];t.forEach((function(t){var e=t.data();e.id=t.id,n.push(e)})),n.sort((function(t,n){return t.date<n.date?1:-1})),h(n)})),k.onSnapshot((function(t){var n=[];t.forEach((function(t){n.push(t.data())})),f(n)}))}),[]),Object(i.jsx)(l.a,{basename:"/",children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(T,{users:e,currentUser:O,setCurrentUser:v}),Object(i.jsxs)(j.c,{children:[Object(i.jsx)(j.a,{exact:!0,path:"/",render:function(){return Object(i.jsx)(Ht,{users:e,activities:d,currentUser:O,setCurrentUser:v,things:p})}}),Object(i.jsx)(j.a,{path:"/explore",render:function(){return Object(i.jsx)(qt,{things:p})}}),Object(i.jsx)(j.a,{path:"/challenges",render:function(){return Object(i.jsx)(tn,{currentUser:O,activities:d})}}),Object(i.jsx)(j.a,{path:"/training",render:function(){return Object(i.jsx)(cn,{})}}),Object(i.jsx)(j.a,{exact:!0,path:"/upload",render:function(){return Object(i.jsx)(Lt,{currentUser:O,activities:d})}})]}),Object(i.jsx)(dn,{})]})})},jn=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,62)).then((function(n){var e=n.getCLS,i=n.getFID,r=n.getFCP,c=n.getLCP,a=n.getTTFB;e(t),i(t),r(t),c(t),a(t)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(ln,{})}),document.getElementById("root")),jn()}},[[61,1,2]]]);
//# sourceMappingURL=main.004d4d15.chunk.js.map