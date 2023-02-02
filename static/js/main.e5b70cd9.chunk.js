(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(10),a=n(5),r=(n(20),n(21),n(22),n(2)),s=n(0),i=function(){return Object(s.jsx)("h1",{className:"title",children:"Home Page"})},j=function(){return Object(s.jsx)("h1",{className:"title",children:"Page not found"})},l=n(8),o=n(11),d=n(4),b=n(1);function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}n(24);var u=function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})},O=n(6),x=n.n(O),m=function(e){var t=e.person,n="f"===t.sex;return Object(s.jsx)(a.b,{to:t.slug,className:x()({"has-text-danger":n}),children:t.name})},p=[{id:1,fieldName:"Name"},{id:2,fieldName:"Sex"},{id:3,fieldName:"Born"},{id:4,fieldName:"Died"},{id:5,fieldName:"Mother"},{id:6,fieldName:"Father"}],f=function(e){var t=e.people,n=Object(r.h)().slug;return Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsx)("tr",{children:p.map((function(e){return Object(s.jsx)("th",{children:e.fieldName},e.id)}))})}),Object(s.jsx)("tbody",{children:t.map((function(e){var t,c;return Object(s.jsxs)("tr",{"data-cy":"person",className:x()({"has-background-warning":e.slug===n}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(m,{person:e})}),Object(s.jsx)("td",{children:e.sex}),Object(s.jsx)("td",{children:e.born}),Object(s.jsx)("td",{children:e.died}),Object(s.jsx)("td",{children:e.mother?Object(s.jsx)(m,{person:e.mother}):null!==(t=e.motherName)&&void 0!==t?t:"-"}),Object(s.jsx)("td",{children:e.father?Object(s.jsx)(m,{person:e.father}):null!==(c=e.fatherName)&&void 0!==c?c:"-"})]},e.slug)}))})]})},v=function(){var e=Object(b.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],a=Object(b.useState)(!1),r=Object(d.a)(a,2),i=r[0],j=r[1],O=Object(b.useState)(!1),x=Object(d.a)(O,2),m=x[0],p=x[1],v=function(){var e=Object(o.a)(Object(l.a)().mark((function e(){var t,n;return Object(l.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,h();case 4:t=e.sent,n=t.map((function(e){var n=t.find((function(t){return t.name===e.fatherName})),c=t.find((function(t){return t.name===e.motherName}));return Object.assign(e,{father:n,mother:c})})),c(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),p(!0);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();Object(b.useEffect)((function(){v()}),[]);var N=!i&&!n.length;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsx)("div",{className:"block",children:Object(s.jsxs)("div",{className:"box table-container",children:[i&&Object(s.jsx)(u,{}),m&&Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),N&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!i&&Object(s.jsx)(f,{people:n})]})})]})},N=function(e){var t=e.to,n=e.title;return Object(s.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return x()("navbar-item",{"has-background-grey-lighter":t})},children:n})},g=function(){return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(N,{to:"/",title:"Home"}),Object(s.jsx)(N,{to:"/people",title:"People"})]})})})},y=function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(g,{}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(r.d,{children:[Object(s.jsx)(r.b,{path:"*",element:Object(s.jsx)(j,{})}),Object(s.jsx)(r.b,{path:"/",element:Object(s.jsx)(i,{})}),Object(s.jsx)(r.b,{path:"/people",element:Object(s.jsx)(v,{}),children:Object(s.jsx)(r.b,{path:":slug",element:Object(s.jsx)(v,{})})}),Object(s.jsx)(r.b,{path:"/home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(s.jsx)(a.a,{children:Object(s.jsx)(y,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.e5b70cd9.chunk.js.map