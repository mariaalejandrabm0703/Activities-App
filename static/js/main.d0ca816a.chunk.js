(this["webpackJsonpactivities-app"]=this["webpackJsonpactivities-app"]||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(4),i=n.n(r),a=n(2),s=n(0),l=function(t){var e=t.currentAct,n=t.move,c=t.handleLeft,r=t.handleRight;return Object(s.jsxs)("div",{className:"container mt-2",children:[Object(s.jsx)("input",{defaultValue:e,type:"text"}),Object(s.jsx)("button",{disabled:!n.left,onClick:c,className:"btn btn-primary ms-3",children:"<"}),Object(s.jsx)("button",{disabled:!n.right,onClick:r,className:"btn btn-primary ms-1",children:">"})]})},u=n(5),o=n(6),h=n(8),j=n(7),b=function(t){var e=t.item,n=t.handleClick,c=t.currentAct;return Object(s.jsx)("div",{children:Object(s.jsx)("button",{style:{borderColor:"".concat(c===e?"red":"")},onClick:n,className:"btn btn-success m-2",children:e})})},d=function(t){var e=t.items,n=t.step,c=t.handleClick,r=t.currentAct;return Object(s.jsxs)("div",{className:"col",children:[Object(s.jsxs)("h3",{children:["Fase ",n,":"]}),e.map((function(t,e){return Object(s.jsx)(b,{item:t,currentAct:r,handleClick:c},e)}))]})},f=function(t){Object(h.a)(n,t);var e=Object(j.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(s.jsx)("div",{className:"row mt-2 border",children:this.props.activities.map((function(e,n){return Object(s.jsx)(d,{step:n+1,items:e,currentAct:t.props.currentAct,handleClick:t.props.handleClick},n)}))})}}]),n}(c.Component),p=function(t,e){for(var n=0,c=0;c<t.length;c++)t[c].includes(e)&&(n=c);return n},v=function(t,e){return t.map((function(t){return t.filter((function(t){return t!==e}))}))};var O=function(){var t=Object(c.useState)([["Act1-1","Act1-2","Act1-3"],["Act2-1"],["Act3-1","Act3-2","Act3-3","Act3-4"],["Act4-1","Act4-2"]]),e=Object(a.a)(t,2),n=e[0],r=e[1],i=Object(c.useState)(""),u=Object(a.a)(i,2),o=u[0],h=u[1],j=Object(c.useState)({right:!0,left:!0}),b=Object(a.a)(j,2),d=b[0],O=b[1];return Object(c.useEffect)((function(){if(""!==o){var t;0===(t=p(n,o))?O({right:!0,left:!1}):t===n.length-1?O({left:!0,right:!1}):O({left:!0,right:!0})}}),[o,n]),Object(s.jsxs)("div",{className:"container mt-2",children:[Object(s.jsx)("h2",{children:"Activities:"}),Object(s.jsx)("hr",{}),Object(s.jsx)(l,{currentAct:o,move:d,handleLeft:function(t){t.preventDefault();var e=n.slice(),c=0;c=p(e,o),e=v(e,o),(c-=1)<0?e[e.length-1][e[e.length-1].length]=o:e[c][e[c].length]=o,r((function(t){return e}))},handleRight:function(t){t.preventDefault();var e=n.slice(),c=0;c=p(e,o),(c+=1)>(e=v(e,o)).length-1?e[0][e[0].length]=o:e[c][e[c].length]=o,r((function(t){return e}))}}),Object(s.jsx)(f,{currentAct:o,activities:n,handleClick:function(t){t.preventDefault(),h(t.target.textContent)}})]})};i.a.render(Object(s.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d0ca816a.chunk.js.map