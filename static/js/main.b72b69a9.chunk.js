(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{16:function(t,e,c){},19:function(t,e,c){"use strict";c.r(e);var o=c(0),s=c.n(o),a=c(4),n=c.n(a),i=(c(16),c(3)),l=c.n(i),r=c(9),d=c(2),u=c(10),j=c(11),b=c(1),f=function(t){var e=t.inputText,c=t.setInputText,o=t.todos,s=t.setTodos,a=t.setFilter;return Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{onChange:function(t){c(t.target.value)},type:"text",className:"todo-input",value:e}),Object(b.jsx)("button",{onClick:function(t){t.preventDefault(),""!==e&&(s([].concat(Object(j.a)(o),[{text:e,completed:!1,id:1e3*Math.random()}])),c(""))},type:"submit",className:"todo-button",children:Object(b.jsx)("i",{className:"fas fa-plus-square"})}),Object(b.jsx)("div",{className:"select",children:Object(b.jsxs)("select",{name:"todos",className:"filter-todo",onChange:function(t){a(t.target.value)},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"completed",children:"Completed"}),Object(b.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},p=c(8),O=function(t){var e=t.todo,c=t.todos,o=t.setTodos;return Object(b.jsxs)("div",{className:"todo",children:[Object(b.jsx)("li",{className:"todo-item".concat(e.completed?" completed":""),children:e.text}),Object(b.jsx)("button",{onClick:function(t){o(c.map((function(t){return t.id===e.id?Object(p.a)(Object(p.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(b.jsx)("i",{className:"fas fa-check"})}),Object(b.jsx)("button",{onClick:function(t){o(c.filter((function(t){return t.id!==e.id})))},className:"trash-btn",children:Object(b.jsx)("i",{className:"fas fa-trash"})})]})},m=function(t){var e=t.todos,c=t.setTodos;return Object(b.jsx)("div",{className:"todo-container",children:Object(b.jsx)("ul",{className:"todo-list",children:e.map((function(t){return Object(b.jsx)(O,{todo:t,todos:e,setTodos:c},t.id)}))})})},x=function(){var t=Object(o.useState)(!1),e=Object(d.a)(t,2),c=e[0],s=e[1];return Object(b.jsxs)("div",{className:"fab-container",children:[Object(b.jsx)("div",{className:"floating-btn",onClick:function(){s(!c)},children:Object(b.jsx)("i",{className:"fas fa-".concat(c?"times":"info")})}),Object(b.jsxs)("div",{className:"floating-text",style:{display:"".concat(c?"block":"none")},children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fas fa-cookie-bite"}),"No cookies!"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fas fa-database"}),"No hidden cache!"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"far fa-hdd"}),"Data stored in your browser's local storage!"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fab fa-github"}),"Open source!"]})]})]})};var h=function(){var t=Object(o.useState)(""),e=Object(d.a)(t,2),c=e[0],s=e[1],a=Object(o.useState)([]),n=Object(d.a)(a,2),i=n[0],j=n[1],p=Object(o.useState)("all"),O=Object(d.a)(p,2),h=O[0],g=O[1],v=Object(o.useState)([]),N=Object(d.a)(v,2),S=N[0],k=N[1],C=Object(o.useState)("My Todo List"),T=Object(d.a)(C,2),I=T[0],y=T[1];Object(o.useEffect)((function(){E(),J(),console.groupCollapsed("Easteregg!"),console.info("Congratulations! You found me!"),console.groupEnd()}),[]),Object(o.useEffect)((function(){switch(w(),h){case"completed":k(i.filter((function(t){return!0===t.completed})));break;case"uncompleted":k(i.filter((function(t){return!1===t.completed})));break;default:k(i)}}),[i,h]),Object(o.useEffect)((function(){F()}),[I]);var w=function(){localStorage.setItem("todo-app.todos",JSON.stringify(i))},E=function(){if(null===localStorage.getItem("todo-app.todos"))localStorage.setItem("todo-app.todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todo-app.todos"));j(t)}},F=function(){localStorage.setItem("todo-app.title",I)},J=function(){if(null===localStorage.getItem("todo-app.title"))localStorage.setItem("todo-app.title",I);else{var t=localStorage.getItem("todo-app.title");y(t)}},B=function(){var t=Object(r.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(u.a)("Change list title",{defaultValue:I,isRequired:!0,okButtonText:"change"});case 2:void 0!==(e=t.sent)&&y(e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{onClick:B,children:[I,Object(b.jsx)("i",{className:"fas fa-pencil-alt"})]}),Object(b.jsx)(f,{inputText:c,setInputText:s,todos:i,setTodos:j,setFilter:g}),Object(b.jsx)(m,{todos:S,setTodos:j}),Object(b.jsx)(x,{})]})},g=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,20)).then((function(e){var c=e.getCLS,o=e.getFID,s=e.getFCP,a=e.getLCP,n=e.getTTFB;c(t),o(t),s(t),a(t),n(t)}))};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(h,{})}),document.getElementById("root")),g()}},[[19,1,2]]]);
//# sourceMappingURL=main.b72b69a9.chunk.js.map