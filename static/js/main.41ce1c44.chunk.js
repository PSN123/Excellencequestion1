(this.webpackJsonptesttodolist=this.webpackJsonptesttodolist||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(7),s=n.n(a),r=(n(13),n(14),n(8)),o=n(6),l=n(3),u=(n(15),n(0)),d=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),s=Object(l.a)(a,2),d=s[0],j=s[1],f=Object(c.useState)(""),b=Object(l.a)(f,2),O=b[0],m=b[1],h=Object(c.useState)(!1),v=Object(l.a)(h,2),x=v[0],g=v[1],p=function(e){if(n)if(n&&x)j(null===d||void 0===d?void 0:d.map((function(e){return e.id===O?Object(o.a)(Object(o.a)({},e),{},{name:n}):e}))),i(""),m(null),g(!1);else{var t={id:(new Date).getTime().toString(),name:n};j([].concat(Object(r.a)(d),[t])),i("")}else alert("Plz fill data")};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:"heading",children:"Todo-List"}),Object(u.jsx)("div",{className:"Maindiv",children:Object(u.jsxs)("div",{className:"In",children:[Object(u.jsx)("input",{type:"text",className:"InputStyle",placeholder:"Write your list",value:n,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&p()}}),x?Object(u.jsx)("i",{className:"fas fa-edit addbutton",onClick:p}):Object(u.jsx)("i",{className:"fas fa-plus addbutton",onClick:p}),Object(u.jsx)("div",{className:"showItems",children:null===d||void 0===d?void 0:d.map((function(e){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"eachItem",children:[Object(u.jsx)("h6",{children:e.name}),Object(u.jsx)("i",{className:"fas fa-edit edit",onClick:function(){return function(e){var t=d.find((function(t){return t.id===e}));i(t.name),m(e),g(!0)}(e.id)}}),Object(u.jsx)("i",{className:"fas fa-trash delete",onClick:function(){return function(e){var t=d.filter((function(t){return t.id!==e}));j(t)}(e.id)}})]},e.id)})}))})]})})]})};var j=function(){return Object(u.jsx)(d,{})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(j,{})}),document.getElementById("root")),f()}},[[17,1,2]]]);
//# sourceMappingURL=main.41ce1c44.chunk.js.map