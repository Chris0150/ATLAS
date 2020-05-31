(this["webpackJsonpmy-typescript-app"]=this["webpackJsonpmy-typescript-app"]||[]).push([[1],{73:function(e,t,a){e.exports=a(82)},82:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),m=a(10),o=a(126),i=a(40),u=a(120),s=a(124),E=a(125),d=a(58),b=a.n(d),g=function(e){var t=p();return l.a.createElement("div",{className:t.root},l.a.createElement(u.a,{position:"static"},l.a.createElement(s.a,{variant:"dense",className:t.toolbar},e.title?l.a.createElement(E.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(b.a,null)):null,l.a.createElement(i.a,{variant:"h6",color:"inherit"},e.title))))},p=Object(o.a)((function(e){return{toolbar:{backgroundColor:"#1b2f47"},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}})),f=a(131),h=a(129),N=a(132),x=a(136),y=a(133),v=a(134),O=a(135),P=a(59),j=a.n(P),w=a(60),L=a.n(w),k=a(61),S=a.n(k),T=a(62),C=a.n(T),z=a(63),M=a.n(z),R=a(64),F=a.n(R),A=a(29),W=a.n(A),Y=a(30),B=a.n(Y),I=a(138),V=function(e){var t=D();return l.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},l.a.createElement(I.a,{label:e.text}))},D=Object(o.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}})),G=function(e){var t=H();return l.a.createElement("form",{className:t.container,noValidate:!0},l.a.createElement(I.a,{id:"datetime-local",label:e.text,type:"datetime-local",defaultValue:"2017-05-24T10:30",className:t.textField,InputLabelProps:{shrink:!0}}))},H=Object(o.a)((function(){return{container:{display:"flex",flexWrap:"wrap"},textField:{width:225}}})),J=a(139),U=a(140),q=a(130),Z=a(127),K=a(128),Q=function(e){var t=Object(n.useState)(e.label1),a=Object(m.a)(t,2),r=a[0],c=a[1];return l.a.createElement(Z.a,{component:"fieldset"},l.a.createElement(K.a,{component:"legend"},e.field),l.a.createElement(U.a,{style:{flexDirection:"row"},name:"selection",value:r,onChange:function(e){c(e.target.value)}},e.label1?l.a.createElement(q.a,{labelPlacement:"end",value:e.label1,control:l.a.createElement(J.a,null),label:e.label1}):null,e.label2?l.a.createElement(q.a,{labelPlacement:"end",value:e.label2,control:l.a.createElement(J.a,null),label:e.label2}):null,e.label3?l.a.createElement(q.a,{labelPlacement:"end",value:e.label3,control:l.a.createElement(J.a,null),label:e.label3}):null,e.label4?l.a.createElement(q.a,{labelPlacement:"end",value:e.label4,control:l.a.createElement(J.a,null),label:e.label4}):null))},X=function(e){var t=$(),a=Object(n.useState)(!1),r=Object(m.a)(a,2),c=r[0],o=r[1],i=Object(n.useState)(!1),u=Object(m.a)(i,2),s=u[0],E=u[1],d=Object(n.useState)(!1),b=Object(m.a)(d,2),g=b[0],p=b[1],P=Object(n.useState)(!1),w=Object(m.a)(P,2),k=w[0],T=w[1],z=Object(n.useState)(!1),R=Object(m.a)(z,2),A=R[0],Y=R[1],I=Object(n.useState)(!1),D=Object(m.a)(I,2),H=D[0],J=D[1];return l.a.createElement(h.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:l.a.createElement(f.a,{component:"div",id:"nested-list-subheader"},"New Project 01"),className:t.root},l.a.createElement(N.a,{button:!0,onClick:function(){o(!c)}},l.a.createElement(y.a,null,l.a.createElement(j.a,{className:t.icons})),l.a.createElement(v.a,{primary:"Basic Information"}),c?l.a.createElement(W.a,null):l.a.createElement(B.a,null)),l.a.createElement(O.a,{in:c,timeout:"auto",unmountOnExit:!0},l.a.createElement(h.a,{component:"div",disablePadding:!0},l.a.createElement(N.a,{style:{marginTop:15},button:!0,className:t.nested},l.a.createElement(G,{text:"Simulation start"})),l.a.createElement(N.a,{style:{marginTop:15},button:!0,className:t.nested},l.a.createElement(G,{text:"Simulation end"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Time step (s)"})),l.a.createElement(N.a,{style:{marginTop:30,marginLeft:10},className:t.nested},l.a.createElement(Q,{field:"Restart",label1:"Yes",label2:"No"})))),l.a.createElement(N.a,{button:!0,onClick:function(){E(!s)}},l.a.createElement(y.a,null,l.a.createElement(L.a,{className:t.icons})),l.a.createElement(v.a,{primary:"Computational Domain"}),s?l.a.createElement(W.a,null):l.a.createElement(B.a,null)),l.a.createElement(O.a,{in:s,timeout:"auto",unmountOnExit:!0},l.a.createElement(h.a,{component:"div",disablePadding:!0},l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Max. Latitude (deg)"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Min. Latitude (deg)"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Max. Longitude (deg)"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Min. Longitude (deg)"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Z-top (m)"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Vertical Resolution (m)"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Longitude Resolution (deg)"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Latitude Resolution (deg)"})))),l.a.createElement(N.a,{button:!0,onClick:function(){p(!g)}},l.a.createElement(y.a,null,l.a.createElement(S.a,{className:t.icons})),l.a.createElement(v.a,{primary:"Physics"}),g?l.a.createElement(W.a,null):l.a.createElement(B.a,null)),l.a.createElement(O.a,{in:g,timeout:"auto",unmountOnExit:!0},l.a.createElement(h.a,{component:"div",disablePadding:!0},l.a.createElement(N.a,{style:{marginTop:5,height:115},className:t.nested},l.a.createElement(Q,{field:"Terminal velocity model",label1:"Stokes",label2:"Arastoopour",label3:"Wilson",label4:"Dellino"})))),l.a.createElement(N.a,{button:!0,onClick:function(){T(!k)}},l.a.createElement(y.a,null,l.a.createElement(C.a,{className:t.icons})),l.a.createElement(v.a,{primary:"Output Grid"}),k?l.a.createElement(W.a,null):l.a.createElement(B.a,null)),l.a.createElement(O.a,{in:k,timeout:"auto",unmountOnExit:!0},l.a.createElement(h.a,{component:"div",disablePadding:!0},l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Max. Latitude"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Min. Latitude"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Max. Longitude"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Min. Longitude"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Frequency"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Vertical Layers"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Longitude Resolution"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Latitude Resolution"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Classes"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Phases"})),l.a.createElement(N.a,{button:!0,className:t.nested},l.a.createElement(V,{text:"Track Points"})))),l.a.createElement(N.a,{button:!0,onClick:function(){Y(!A)}},l.a.createElement(y.a,null,l.a.createElement(M.a,{className:t.icons})),l.a.createElement(v.a,{primary:"Meteorological Model"}),A?l.a.createElement(W.a,null):l.a.createElement(B.a,null)),l.a.createElement(O.a,{in:A,timeout:"auto",unmountOnExit:!0},l.a.createElement(h.a,{component:"div",disablePadding:!0},l.a.createElement(N.a,{style:{marginTop:10,marginLeft:10},className:t.nested},l.a.createElement(Q,{field:"Activate",label1:"Yes",label2:"No"})),l.a.createElement(N.a,{style:{height:100,marginTop:10,marginLeft:10},className:t.nested},l.a.createElement(Q,{field:"Model type",label1:"WRF",label2:"GFS",label3:"DEBUG"})),l.a.createElement(N.a,{className:t.nested},l.a.createElement(x.a,{style:{backgroundColor:"#2196f32e",width:200,marginTop:20}},"Upload File")),l.a.createElement(N.a,{style:{marginTop:30,marginLeft:10},className:t.nested},l.a.createElement(Q,{field:"Post-process",label1:"Yes",label2:"No"})))),l.a.createElement(N.a,{button:!0,onClick:function(){J(!H)}},l.a.createElement(y.a,null,l.a.createElement(F.a,{className:t.icons})),l.a.createElement(v.a,{primary:"Source Term(s)"}),H?l.a.createElement(W.a,null):l.a.createElement(B.a,null)),l.a.createElement(O.a,{in:H,timeout:"auto",unmountOnExit:!0},l.a.createElement(h.a,{component:"div",disablePadding:!0},l.a.createElement(N.a,{style:{marginTop:15,marginLeft:10},className:t.nested},l.a.createElement(Q,{field:"Activate",label1:"Yes",label2:"No"})),l.a.createElement(N.a,{className:t.nested},l.a.createElement(x.a,{style:{backgroundColor:"#2196f32e",width:200,marginTop:20}},"Source Term")))),l.a.createElement(x.a,{className:t.button,onClick:e.runSimulation},"Run Simulation"))},$=Object(o.a)((function(e){return{root:{zIndex:1,left:0,width:350,maxWidth:360,overflowY:"scroll",backgroundColor:"darkgrey",height:window.innerHeight-120},nested:{height:50,paddingLeft:75},button:{width:300,height:50,margin:15,marginTop:50,backgroundColor:"#888585"},icons:{color:"#1b2f47"}}})),_=a(137),ee=function(e){var t=te();return l.a.createElement("div",{className:t.root},l.a.createElement("h3",null,"Running simulation.. please wait.."),l.a.createElement("br",null),l.a.createElement(_.a,{size:80}))},te=Object(o.a)((function(){return{root:{top:"6%",width:"98%",textAlign:"center",position:"absolute",backgroundColor:"lightgrey",height:window.innerHeight-120}}})),ae=l.a.lazy((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,153))})),ne=l.a.lazy((function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,154))})),le=l.a.lazy((function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,155))})),re=l.a.lazy((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,156))})),ce=l.a.lazy((function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,157))})),me=l.a.lazy((function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,158))})),oe=l.a.lazy((function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,159))})),ie=l.a.lazy((function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,160))})),ue=l.a.lazy((function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,161))})),se=l.a.lazy((function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,162))})),Ee=l.a.lazy((function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,163))})),de=function(){var e=be(),t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],c=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,{title:"ATLASWeb 1.1"}),l.a.createElement(X,{runSimulation:function(){return c(!0)}}),l.a.createElement(n.Suspense,{fallback:l.a.createElement(ee,null)},l.a.createElement("div",{className:e.graphs},r?l.a.createElement(l.a.Fragment,null,l.a.createElement(i.a,{className:e.title},"Simulation results:"),l.a.createElement(ce,null),l.a.createElement(ue,null),l.a.createElement(le,null),l.a.createElement(se,null),l.a.createElement(oe,null),l.a.createElement(ae,null),l.a.createElement(ne,null),l.a.createElement(ie,null),l.a.createElement(Ee,null),l.a.createElement(re,null),l.a.createElement(me,null)):null)),l.a.createElement(g,null))},be=Object(o.a)((function(){return{title:{zIndex:1,top:"3%",fontWeight:"bold",position:"absolute"},graphs:{top:"6%",left:"16%",width:"80%",paddingTop:"3%",paddingLeft:"3%",overflowY:"auto",textAlign:"center",position:"absolute",backgroundColor:"lightgrey",height:window.innerHeight-170}}}));c.a.render(l.a.createElement(de,null),document.getElementById("root"))}},[[73,2,3]]]);
//# sourceMappingURL=main.e5abf20e.chunk.js.map