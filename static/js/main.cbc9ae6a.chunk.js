(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{27:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),o=c(7),s=c.n(o),r=(c(27),c(2)),i=c.n(r),l=c(5),d=c(3),u=c(4),j=c(6),b=c(1);var f=function(e){var t=e.lastStep,c=e.setLastStep,n=e.setTodos;return Object(b.jsx)("div",{className:"undo-btn",onClick:function(){if(t.before.length===t.now.length)for(var e=function(e){t.before[e].text===t.now[e].text&&t.before[e].completed===t.now[e].completed&&t.before[e].sub===t.now[e].sub||(n(t.now.map((function(c){return c.id===t.now[e].id?t.before[e]:c}))),c({now:{},before:{}}))},a=0;a<t.before.length;a++)e(a);else n(t.before.filter((function(e){return"example-66666"!==e.text}))),c({now:{},before:{}})},style:{display:"".concat(t==={now:{},before:{}}||void 0===t.before[0]?"none":"flex")},children:Object(b.jsx)("i",{className:"fas fa-undo"})})},p=c(8);var O=function(e){e.title,e.todos,e.setTodos;var t=e.file,c=Object(j.c)(),a=Object(n.useState)([]),o=Object(u.a)(a,2),s=o[0],r=o[1],d=Object(n.useState)(),f=Object(u.a)(d,2),O=f[0];return f[1],Object(n.useEffect)((function(){var e=new FileReader;t?(e.onload=function(){var e=Object(l.a)(i.a.mark((function e(t){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=JSON.parse(t.target.result),r(c.todos);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.readAsText(t)):console.log("Failed to read the file!")}),[]),Object(b.jsxs)("div",{className:"import-menu",children:[Object(b.jsxs)("label",{children:["Imported from ",t.name]}),Object(b.jsx)("ul",{children:function(e){for(var t=[];e===[];)console.log("empty");var c,n=Object(p.a)(e);try{for(n.s();!(c=n.n()).done;){var a=c.value;t.push(Object(b.jsxs)("li",{children:[Object(b.jsx)("i",{className:a.sub?"fas fa-long-arrow-alt-right":""}),Object(b.jsx)("input",{type:"checkbox",checked:null===a||void 0===a?void 0:a.completed.replace(/"/g,""),disabled:!0}),Object(b.jsx)("h4",{children:a.text})]},Math.round(1e5*Math.random())))}}catch(o){n.e(o)}finally{n.f()}return t}(s)}),Object(b.jsxs)("button",{onClick:function(){console.log(s),c.close(O)},children:[Object(b.jsx)("i",{className:"fas fa-clipboard-list"}),Object(b.jsx)("h3",{children:"Import All"})]}),Object(b.jsxs)("button",{disabled:!0,children:[Object(b.jsx)("i",{className:"fas fa-clipboard-check"}),Object(b.jsx)("h3",{children:"Import Selected"})]})]})},h=c(20),x=c(18);var m=function(e){var t=e.title,c=e.todos,a=e.setOpened,o=Object(j.c)(),s=["todo","completed","sub"],r=Object(n.useState)(),d=Object(u.a)(r,2),f=d[0],O=(d[1],function(){return c.map((function(e){return{todo:e.text,completed:e.completed,sub:e.sub}}))}),m=function(e,c,n){var a=new Blob([e],{type:c}),o=window.URL.createObjectURL(a),s=document.createElement("a");s.setAttribute("hidden",""),s.setAttribute("href",o),s.setAttribute("download","".concat(t.toLowerCase().replace(/ /g,"-"),".").concat(n)),document.body.appendChild(s),s.click(),document.body.removeChild(s)};function v(){return(v=Object(l.a)(i.a.mark((function e(){var t,c,n,a,o,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=O(),(c=[]).push(s.join(",")),n=Object(p.a)(t);try{for(o=function(){var e=a.value,t=s.map((function(t){var c=(""+e[t]).replace(/"/g,'\\"');return'"'.concat(c,'"')}));c.push(t.join(","))},n.s();!(a=n.n()).done;)o()}catch(i){n.e(i)}finally{n.f()}r=c.join("\n"),m(r,"text/csv","csv");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(l.a)(i.a.mark((function e(){var c,n,a,o,r,l,d,u,j,b,f;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=O(),n='{"title":"'.concat(t,'","todos":['),a="",o=Object(p.a)(c);try{for(o.s();!(r=o.n()).done;){l=r.value,a=a.concat(",{"),d=Object(p.a)(s);try{for(d.s();!(u=d.n()).done;)j=u.value,b=(""+l[j]).replace(/"/g,'\\"'),a=a.concat('"'.concat(j,'":'),'"'.concat(b,'"')),s.indexOf(j)!==s.length-1&&(a=a.concat(","))}catch(i){d.e(i)}finally{d.f()}a=a.concat("}")}}catch(i){o.e(i)}finally{o.f()}f="".concat(n).concat(a.replace(",","").concat("]}")),m(f,"application/json","json");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(l.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(!1),c=document.getElementById("root"),x.a(c,{quality:.95}).then((function(e){var c=new h.a,n=c.getImageProperties(e),a=c.internal.pageSize.getWidth(),o=n.height*a/n.width;c.addImage(e,"PNG",0,0,a,o),c.save("".concat(t.toLowerCase().replace(/ /g,"-"),".pdf"))})).catch((function(e){console.error("Something went wrong!",e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(l.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(!1),c=document.getElementById("root"),x.a(c,{quality:.95}).then((function(e){var c=document.createElement("a");c.setAttribute("hidden",""),c.setAttribute("href",e),c.setAttribute("download","".concat(t.toLowerCase().replace(/ /g,"-"),".png")),document.body.appendChild(c),c.click(),document.body.removeChild(c)})).catch((function(e){console.error("Something went wrong!",e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(l.a)(i.a.mark((function e(){var t,c,n,a,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=O(),c="",n=Object(p.a)(t);try{for(n.s();!(a=n.n()).done;)o=a.value,s=(""+o.todo).replace(/"/g,'\\"'),c=(c=c.concat("".concat(o.sub?"\t":"").concat(o.completed?"&check;":"&cir;"," "),s)).concat("\n")}catch(r){n.e(r)}finally{n.f()}m(c,"text","txt");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("div",{className:"export-menu",children:[Object(b.jsxs)("button",{onClick:function(){!function(){v.apply(this,arguments)}(),o.close(f)},children:[Object(b.jsx)("i",{className:"fas fa-file-csv"}),Object(b.jsx)("h3",{children:"CSV"})]}),Object(b.jsxs)("button",{onClick:function(){!function(){g.apply(this,arguments)}(),o.close(f)},children:[Object(b.jsx)("i",{className:"fab fa-js"}),Object(b.jsx)("h3",{children:"JSON"})]}),Object(b.jsxs)("button",{onClick:function(){!function(){w.apply(this,arguments)}(),o.close(f)},children:[Object(b.jsx)("i",{className:"fas fa-file-pdf"}),Object(b.jsx)("h3",{children:"PDF"})]}),Object(b.jsxs)("button",{onClick:function(){!function(){y.apply(this,arguments)}(),o.close(f)},children:[Object(b.jsx)("i",{className:"fas fa-file-image"}),Object(b.jsx)("h3",{children:"Image"})]}),Object(b.jsxs)("button",{onClick:function(){!function(){N.apply(this,arguments)}(),o.close(f)},children:[Object(b.jsx)("i",{className:"fas fa-file-alt"}),Object(b.jsx)("h3",{children:"TXT"})]})]})},v=function(e){var t=e.title,c=e.todos,a=e.setTodos,o=Object(n.useState)(!1),s=Object(u.a)(o,2),r=s[0],d=s[1],f=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)(Object(b.jsx)(m,{title:t,todos:c,setOpened:d}),{title:"Export Options",showCloseIcon:!0});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(i.a.mark((function e(n){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.target.files[0],e.next=3,Object(j.a)(Object(b.jsx)(O,{title:t,todos:c,setTodos:a,file:o}),{title:"Import Options",showCloseIcon:!0});case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"settings-container",children:[Object(b.jsx)("div",{className:"settings-btn",onClick:function(){d(!r)},children:Object(b.jsx)("i",{className:"fas fa-".concat(r?"times":"cog")})}),Object(b.jsxs)("div",{className:"settings-menu",style:{display:"".concat(r?"flex":"none")},children:[Object(b.jsxs)("button",{onClick:function(){document.getElementById("file-input-import").click()},disabled:!0,children:[Object(b.jsx)("i",{className:"fas fa-file-upload"}),Object(b.jsx)("h3",{children:"Import"})]}),Object(b.jsxs)("button",{onClick:f,children:[Object(b.jsx)("i",{className:"fas fa-file-download"}),Object(b.jsx)("h3",{children:"Export"})]})]}),Object(b.jsx)("input",{id:"file-input-import",type:"file",accept:"application/JSON, application/json",style:{display:"none"},onChange:function(e){return p(e)}})]})},g=function(e){var t=e.title,c=e.changeTitleHandler;return Object(b.jsxs)("header",{onClick:c,children:[t,Object(b.jsx)("i",{className:"fas fa-pencil-alt"})]})},w=c(12),y=function(e){var t=e.inputText,c=e.setInputText,n=e.todos,a=e.setTodos,o=e.setFilter;return Object(b.jsxs)("form",{children:[Object(b.jsx)("input",{onChange:function(e){c(e.target.value)},type:"text",className:"todo-input",value:t}),Object(b.jsx)("button",{onClick:function(e){e.preventDefault(),""!==t&&(a([].concat(Object(w.a)(n),[{text:t,completed:!1,sub:!1,id:1e3*Math.random()}])),c(""))},type:"submit",className:"todo-button",children:Object(b.jsx)("i",{className:"fas fa-plus-square"})}),Object(b.jsx)("div",{className:"select",children:Object(b.jsxs)("select",{name:"todos",className:"filter-todo",onChange:function(e){o(e.target.value)},children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"completed",children:"Completed"}),Object(b.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},N=c(11);var S=function(e){var t=e.todo,c=e.todos,a=e.setTodos,o=e.lastStep,s=e.setLastStep,r=e.completeHandler,f=e.deleteHandler,p=Object(j.c)(),O=Object(n.useState)(),h=Object(u.a)(O,2),x=h[0],m=(h[1],function(){var e=Object(l.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)("Change todo item",{defaultValue:t.text,isRequired:!0,okButtonText:"change"});case 2:void 0!==(n=e.sent)&&(s(Object(d.a)(Object(d.a)({},o),{},{before:c})),a(c.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{text:n}):e}))));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(b.jsxs)("div",{className:"todo-item-context",children:[Object(b.jsxs)("button",{onClick:function(){m(),p.close(x)},children:[Object(b.jsx)("i",{className:"fas fa-pencil-alt"}),Object(b.jsx)("h3",{children:"Edit Text"})]}),Object(b.jsxs)("button",{onClick:function(){r(),p.close(x)},children:[Object(b.jsx)("i",{className:"fas fa-check"}),Object(b.jsx)("h3",{children:"".concat(t.completed?"Uncomplete":"Complete"," Todo")})]}),Object(b.jsxs)("button",{onClick:function(){f(),p.close(x)},children:[Object(b.jsx)("i",{className:"fas fa-trash"}),Object(b.jsx)("h3",{children:"Delete Todo"})]}),Object(b.jsxs)("button",{onClick:function(){s(Object(d.a)(Object(d.a)({},o),{},{before:c})),a(c.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{sub:!e.sub}):e}))),p.close(x)},children:[Object(b.jsx)("i",{className:"fas fa-angle-double-".concat((null===t||void 0===t?void 0:t.sub)?"left":"right")}),Object(b.jsx)("h3",{children:"Make ".concat((null===t||void 0===t?void 0:t.sub)?"normal ":"Sub-","Todo")})]})]})},k=function(e){var t=e.todo,c=e.todos,n=e.setTodos,a=e.lastStep,o=e.setLastStep,s=function(e){o(Object(d.a)(Object(d.a)({},a),{},{before:c})),n(c.filter((function(e){return e.id!==t.id})))},r=function(e){o(Object(d.a)(Object(d.a)({},a),{},{before:c})),n(c.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{completed:!e.completed}):e})))};return Object(b.jsx)(N.b,{draggableId:"draggable-".concat(t.id),index:function(){for(var e=0;e<c.length;e++)if(t.id===c[e].id)return e}(),children:function(e,u){return Object(b.jsxs)("div",Object(d.a)(Object(d.a)(Object(d.a)({className:"todo".concat((null===t||void 0===t?void 0:t.sub)?" sub":""),ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{style:Object(d.a)(Object(d.a)({},e.draggableProps.style),{},{boxShadow:u.isDraggingOver?"0 0 30px rgba(0, 0, 0, .3)":""}),children:[Object(b.jsx)("i",{className:"fas fa-equals"}),Object(b.jsx)("li",{className:"todo-item".concat(t.completed?" completed":""),onClick:Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.text,e.next=3,Object(j.a)(Object(b.jsx)(S,{todo:t,todos:c,setTodos:n,lastStep:a,setLastStep:o,completeHandler:r,deleteHandler:s}),{title:"Todo Options",showCloseIcon:!0});case 3:e.sent;case 4:case"end":return e.stop()}}),e)}))),children:t.text}),Object(b.jsx)("button",{onClick:r,className:"complete-btn",children:Object(b.jsx)("i",{className:"fas fa-check"})}),Object(b.jsx)("button",{onClick:s,className:"trash-btn",children:Object(b.jsx)("i",{className:"fas fa-trash"})})]}))}})},C=function(e){var t=e.todos,c=e.setTodos,n=e.lastStep,a=e.setLastStep;return Object(b.jsx)(N.a,{onDragEnd:function(e){var n,a=e.source.index,o=null===(n=e.destination)||void 0===n?void 0:n.index,s=Object(w.a)(t);o&&(s.splice(o,0,s.splice(a,1)[0]),c(s))},onDragStart:function(){var e=Object(w.a)(t);e.push({text:"example-66666"}),a(Object(d.a)(Object(d.a)({},n),{},{before:e}))},children:Object(b.jsx)("div",{className:"todo-container",children:Object(b.jsx)(N.c,{droppableId:"droppable-todos",type:"TODOS",children:function(e,o){return Object(b.jsxs)("ul",Object(d.a)(Object(d.a)({className:"todo-list",ref:e.innerRef},e.droppableProps),{},{children:[t.map((function(e){return Object(b.jsx)(k,{todo:e,todos:t,setTodos:c,lastStep:n,setLastStep:a},e.id)})),e.placeholder]}))}})})})},T=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(b.jsxs)("div",{className:"fab-container",children:[Object(b.jsx)("div",{className:"floating-btn",onClick:function(){a(!c)},children:Object(b.jsx)("i",{className:"fas fa-".concat(c?"times":"info")})}),Object(b.jsxs)("div",{className:"floating-text",style:{display:"".concat(c?"block":"none")},children:[Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fas fa-cookie-bite"}),"No cookies!"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fas fa-database"}),"No hidden cache!"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"far fa-hdd"}),"Data stored in your browser's local storage!"]}),Object(b.jsxs)("p",{children:[Object(b.jsx)("i",{className:"fab fa-github"}),"Open source!"]})]})]})};var I=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),r=s[0],p=s[1],O=Object(n.useState)("all"),h=Object(u.a)(O,2),x=h[0],m=h[1],w=Object(n.useState)([]),N=Object(u.a)(w,2),S=N[0],k=N[1],I=Object(n.useState)("My Todo List"),E=Object(u.a)(I,2),L=E[0],A=E[1],D=Object(n.useState)({now:{},before:{}}),J=Object(u.a)(D,2),B=J[0],H=J[1];Object(n.useEffect)((function(){R(),M(),console.groupCollapsed("Easteregg!"),console.info("Congratulations! You found me!"),console.groupEnd()}),[]),Object(n.useEffect)((function(){switch(P(),x){case"completed":k(r.filter((function(e){return!0===e.completed})));break;case"uncompleted":k(r.filter((function(e){return!1===e.completed})));break;default:k(r)}H(Object(d.a)(Object(d.a)({},B),{},{now:r}))}),[r,x]),Object(n.useEffect)((function(){q()}),[L]);var P=function(){localStorage.setItem("todo-app.todos",JSON.stringify(r))},R=function(){if(null===localStorage.getItem("todo-app.todos"))localStorage.setItem("todo-app.todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todo-app.todos"));p(e)}},q=function(){localStorage.setItem("todo-app.title",L)},M=function(){if(null===localStorage.getItem("todo-app.title"))localStorage.setItem("todo-app.title",L);else{var e=localStorage.getItem("todo-app.title");A(e)}},F=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.b)("Change list title",{defaultValue:L,isRequired:!0,okButtonText:"change"});case 2:void 0!==(t=e.sent)&&A(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{lastStep:B,setLastStep:H,setTodos:p}),Object(b.jsx)(v,{title:L,todos:r,setTodos:p}),Object(b.jsx)(g,{title:L,changeTitleHandler:F}),Object(b.jsx)(y,{inputText:c,setInputText:a,todos:r,setTodos:p,setFilter:m}),Object(b.jsx)(C,{todos:S,setTodos:p,lastStep:B,setLastStep:H}),Object(b.jsx)(T,{})]})};s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(I,{})}),document.getElementById("root"))}},[[34,1,3]]]);
//# sourceMappingURL=main.cbc9ae6a.chunk.js.map