(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{27:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),o=c(7),s=c.n(o),i=(c(27),c(2)),r=c.n(i),l=c(5),u=c(3),d=c(4),b=c(6),j=c(1);var f=function(e){var t=e.lastStep,c=e.setLastStep,n=e.setTodos;return Object(j.jsx)("div",{className:"undo-btn",onClick:function(){if(t.before.length===t.now.length)for(var e=function(e){t.before[e].text===t.now[e].text&&t.before[e].completed===t.now[e].completed&&t.before[e].sub===t.now[e].sub||(n(t.now.map((function(c){return c.id===t.now[e].id?t.before[e]:c}))),c({now:{},before:{}}))},a=0;a<t.before.length;a++)e(a);else n(t.before.filter((function(e){return"example-66666"!==e.text}))),c({now:{},before:{}})},style:{display:"".concat(t==={now:{},before:{}}||void 0===t.before[0]?"none":"flex")},children:Object(j.jsx)("i",{className:"fas fa-undo"})})},p=c(8);var O=function(e){e.title,e.todos,e.setTodos;var t=e.file,c=Object(b.c)(),a=Object(n.useState)([]),o=Object(d.a)(a,2),s=o[0],i=o[1],u=Object(n.useState)(),f=Object(d.a)(u,2),O=f[0];return f[1],Object(n.useEffect)((function(){var e=new FileReader;t?(e.onload=function(){var e=Object(l.a)(r.a.mark((function e(t){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=JSON.parse(t.target.result),i(c.todos);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.readAsText(t)):console.log("Failed to read the file!")}),[]),Object(j.jsxs)("div",{className:"import-menu",children:[Object(j.jsxs)("label",{children:["Imported from ",t.name]}),Object(j.jsx)("ul",{children:function(e){for(var t=[];e===[];)console.log("empty");var c,n=Object(p.a)(e);try{for(n.s();!(c=n.n()).done;){var a=c.value;t.push(Object(j.jsxs)("li",{children:[Object(j.jsx)("i",{className:a.sub?"fas fa-long-arrow-alt-right":""}),Object(j.jsx)("input",{type:"checkbox",checked:null===a||void 0===a?void 0:a.completed.replace(/"/g,""),disabled:!0}),Object(j.jsx)("h4",{children:a.text})]},Math.round(1e5*Math.random())))}}catch(o){n.e(o)}finally{n.f()}return t}(s)}),Object(j.jsxs)("button",{onClick:function(){console.log(s),c.close(O)},children:[Object(j.jsx)("i",{className:"fas fa-clipboard-list"}),Object(j.jsx)("h3",{children:"Import All"})]}),Object(j.jsxs)("button",{disabled:!0,children:[Object(j.jsx)("i",{className:"fas fa-clipboard-check"}),Object(j.jsx)("h3",{children:"Import Selected"})]})]})},h=c(20),x=c(18);var m=function(e){var t=e.title,c=e.todos,a=e.setOpened,o=Object(b.c)(),s=["todo","completed","sub"],i=Object(n.useState)(),u=Object(d.a)(i,2),f=u[0],O=(u[1],function(){return c.map((function(e){return{todo:e.text,completed:e.completed,sub:e.sub}}))}),m=function(e,c,n){var a=new Blob([e],{type:c}),o=window.URL.createObjectURL(a),s=document.createElement("a");s.setAttribute("hidden",""),s.setAttribute("href",o),s.setAttribute("download","".concat(t.toLowerCase().replace(/ /g,"-"),".").concat(n)),document.body.appendChild(s),s.click(),document.body.removeChild(s)};function v(){return(v=Object(l.a)(r.a.mark((function e(){var t,c,n,a,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=O(),(c=[]).push(s.join(",")),n=Object(p.a)(t);try{for(o=function(){var e=a.value,t=s.map((function(t){var c=(""+e[t]).replace(/"/g,'\\"');return'"'.concat(c,'"')}));c.push(t.join(","))},n.s();!(a=n.n()).done;)o()}catch(r){n.e(r)}finally{n.f()}i=c.join("\n"),m(i,"text/csv","csv");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(l.a)(r.a.mark((function e(){var c,n,a,o,i,l,u,d,b,j,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=O(),n='{"title":"'.concat(t,'","todos":['),a="",o=Object(p.a)(c);try{for(o.s();!(i=o.n()).done;){l=i.value,a=a.concat(",{"),u=Object(p.a)(s);try{for(u.s();!(d=u.n()).done;)b=d.value,j=(""+l[b]).replace(/"/g,'\\"'),a=a.concat('"'.concat(b,'":'),'"'.concat(j,'"')),s.indexOf(b)!==s.length-1&&(a=a.concat(","))}catch(r){u.e(r)}finally{u.f()}a=a.concat("}")}}catch(r){o.e(r)}finally{o.f()}f="".concat(n).concat(a.replace(",","").concat("]}")),m(f,"application/json","json");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(l.a)(r.a.mark((function e(){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(!1),c=document.getElementById("root"),x.a(c,{quality:.95}).then((function(e){var c=new h.a,n=c.getImageProperties(e),a=c.internal.pageSize.getWidth(),o=n.height*a/n.width;c.addImage(e,"PNG",0,0,a,o),c.save("".concat(t.toLowerCase().replace(/ /g,"-"),".pdf"))})).catch((function(e){console.error("Something went wrong!",e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(l.a)(r.a.mark((function e(){var c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(!1),c=document.getElementById("root"),x.a(c,{quality:.95}).then((function(e){var c=document.createElement("a");c.setAttribute("hidden",""),c.setAttribute("href",e),c.setAttribute("download","".concat(t.toLowerCase().replace(/ /g,"-"),".png")),document.body.appendChild(c),c.click(),document.body.removeChild(c)})).catch((function(e){console.error("Something went wrong!",e)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(l.a)(r.a.mark((function e(){var t,c,n,a,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=O(),c="",n=Object(p.a)(t);try{for(n.s();!(a=n.n()).done;)o=a.value,s=(""+o.todo).replace(/"/g,'\\"'),c=(c=c.concat("".concat(o.sub?"\t":"").concat(o.completed?"&check;":"&cir;"," "),s)).concat("\n")}catch(i){n.e(i)}finally{n.f()}m(c,"text","txt");case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(j.jsxs)("div",{className:"export-menu",children:[Object(j.jsxs)("button",{onClick:function(){!function(){v.apply(this,arguments)}(),o.close(f)},children:[Object(j.jsx)("i",{className:"fas fa-file-csv"}),Object(j.jsx)("h3",{children:"CSV"})]}),Object(j.jsxs)("button",{onClick:function(){!function(){g.apply(this,arguments)}(),o.close(f)},children:[Object(j.jsx)("i",{className:"fab fa-js"}),Object(j.jsx)("h3",{children:"JSON"})]}),Object(j.jsxs)("button",{onClick:function(){!function(){w.apply(this,arguments)}(),o.close(f)},children:[Object(j.jsx)("i",{className:"fas fa-file-pdf"}),Object(j.jsx)("h3",{children:"PDF"})]}),Object(j.jsxs)("button",{onClick:function(){!function(){y.apply(this,arguments)}(),o.close(f)},children:[Object(j.jsx)("i",{className:"fas fa-file-image"}),Object(j.jsx)("h3",{children:"Image"})]}),Object(j.jsxs)("button",{onClick:function(){!function(){N.apply(this,arguments)}(),o.close(f)},children:[Object(j.jsx)("i",{className:"fas fa-file-alt"}),Object(j.jsx)("h3",{children:"TXT"})]})]})},v=function(e){var t=e.title,c=e.todos,a=e.setTodos,o=Object(n.useState)(!1),s=Object(d.a)(o,2),i=s[0],u=s[1],f=function(){var e=Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)(Object(j.jsx)(m,{title:t,todos:c,setOpened:u}),{title:"Export Options",showCloseIcon:!0});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(r.a.mark((function e(n){var o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.target.files[0],e.next=3,Object(b.a)(Object(j.jsx)(O,{title:t,todos:c,setTodos:a,file:o}),{title:"Import Options",showCloseIcon:!0});case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"settings-container",children:[Object(j.jsx)("div",{className:"settings-btn",onClick:function(){u(!i)},children:Object(j.jsx)("i",{className:"fas fa-".concat(i?"times":"cog")})}),Object(j.jsxs)("div",{className:"settings-menu",style:{display:"".concat(i?"flex":"none")},children:[Object(j.jsxs)("button",{onClick:function(){document.getElementById("file-input-import").click()},disabled:!0,children:[Object(j.jsx)("i",{className:"fas fa-file-upload"}),Object(j.jsx)("h3",{children:"Import"})]}),Object(j.jsxs)("button",{onClick:f,children:[Object(j.jsx)("i",{className:"fas fa-file-download"}),Object(j.jsx)("h3",{children:"Export"})]})]}),Object(j.jsx)("input",{id:"file-input-import",type:"file",accept:"application/JSON, application/json",style:{display:"none"},onChange:function(e){return p(e)}})]})},g=function(e){var t=e.title,c=e.changeTitleHandler;return Object(j.jsxs)("header",{onClick:c,children:[t,Object(j.jsx)("i",{className:"fas fa-pencil-alt"})]})},w=c(12),y=function(e){var t=e.inputText,c=e.setInputText,n=e.todos,a=e.setTodos,o=e.setFilter;return Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{onChange:function(e){c(e.target.value)},type:"text",className:"todo-input",value:t}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),""!==t&&(a([].concat(Object(w.a)(n),[{text:t,completed:!1,sub:!1,id:1e3*Math.random()}])),c(""))},type:"submit",className:"todo-button",children:Object(j.jsx)("i",{className:"fas fa-plus-square"})}),Object(j.jsx)("div",{className:"select",children:Object(j.jsxs)("select",{name:"todos",className:"filter-todo",onChange:function(e){o(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"completed",children:"Completed"}),Object(j.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},N=c(11);var S=function(e){var t=e.todo,c=e.todos,a=e.setTodos,o=e.lastStep,s=e.setLastStep,i=e.completeHandler,f=e.deleteHandler,p=Object(b.c)(),O=Object(n.useState)(),h=Object(d.a)(O,2),x=h[0],m=(h[1],function(){var e=Object(l.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)("Change todo item",{defaultValue:t.text,isRequired:!0,okButtonText:"change"});case 2:void 0!==(n=e.sent)&&(s(Object(u.a)(Object(u.a)({},o),{},{before:c})),a(c.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{text:n}):e}))));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(j.jsxs)("div",{className:"todo-item-context",children:[Object(j.jsxs)("button",{onClick:function(){m(),p.close(x)},children:[Object(j.jsx)("i",{className:"fas fa-pencil-alt"}),Object(j.jsx)("h3",{children:"Edit Text"})]}),Object(j.jsxs)("button",{onClick:function(){i(),p.close(x)},children:[Object(j.jsx)("i",{className:"fas fa-check"}),Object(j.jsx)("h3",{children:"".concat(t.completed?"Uncomplete":"Complete"," Todo")})]}),Object(j.jsxs)("button",{onClick:function(){f(),p.close(x)},children:[Object(j.jsx)("i",{className:"fas fa-trash"}),Object(j.jsx)("h3",{children:"Delete Todo"})]}),Object(j.jsxs)("button",{onClick:function(){s(Object(u.a)(Object(u.a)({},o),{},{before:c})),a(c.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{sub:!e.sub}):e}))),p.close(x)},children:[Object(j.jsx)("i",{className:"fas fa-angle-double-".concat((null===t||void 0===t?void 0:t.sub)?"left":"right")}),Object(j.jsx)("h3",{children:"Make ".concat((null===t||void 0===t?void 0:t.sub)?"normal ":"Sub-","Todo")})]})]})},k=function(e){var t=e.todo,c=e.todos,n=e.setTodos,a=e.lastStep,o=e.setLastStep,s=e.subLayout,i=e.closeSubHandler,d=function(e){o(Object(u.a)(Object(u.a)({},a),{},{before:c})),n(c.filter((function(e){return e.id!==t.id})))},f=function(e){o(Object(u.a)(Object(u.a)({},a),{},{before:c})),n(c.map((function(e){return e.id===t.id?Object(u.a)(Object(u.a)({},e),{},{completed:!e.completed}):e})))};return void 0===s?"Loading...":Object(j.jsx)(N.b,{draggableId:"draggable-".concat(t.id),index:function(){for(var e=0;e<c.length;e++)if(t.id===c[e].id)return e}(),children:function(e,p){return Object(j.jsxs)("div",Object(u.a)(Object(u.a)(Object(u.a)({className:"todo".concat((null===t||void 0===t?void 0:t.sub)?" sub":"").concat(!0!==s.subHandler?!0===s.visible?"":" invisible":""),ref:e.innerRef},e.draggableProps),e.dragHandleProps),{},{style:Object(u.a)(Object(u.a)({},e.draggableProps.style),{},{boxShadow:p.isDraggingOver?"0 0 30px rgba(0, 0, 0, .3)":""}),children:[(null===s||void 0===s?void 0:s.subHandler)?s.closed?Object(j.jsx)("i",{className:"fas fa-angle-down",onClick:function(){return i(s.subs,t.id)}}):Object(j.jsx)("i",{className:"fas fa-angle-up",onClick:function(){return i(s.subs,t.id)}}):Object(j.jsx)("i",{className:"fas fa-equals"}),Object(j.jsx)("li",{className:"todo-item".concat(t.completed?" completed":""),onClick:Object(l.a)(r.a.mark((function e(){var s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.text,e.next=3,Object(b.a)(Object(j.jsx)(S,{todo:t,todos:c,setTodos:n,lastStep:a,setLastStep:o,completeHandler:f,deleteHandler:d}),{title:'Todo Options "'.concat(s,'"'),showCloseIcon:!0});case 3:e.sent;case 4:case"end":return e.stop()}}),e)}))),children:t.text}),Object(j.jsx)("button",{onClick:f,className:"complete-btn",children:Object(j.jsx)("i",{className:"fas fa-check"})}),Object(j.jsx)("button",{onClick:d,className:"trash-btn",children:Object(j.jsx)("i",{className:"fas fa-trash"})})]}))}})},C=function(e){var t=e.todos,c=e.setTodos,a=e.lastStep,o=e.setLastStep,s=Object(n.useState)([]),i=Object(d.a)(s,2),r=i[0],l=i[1],b=function(e,c){console.log(r,e),l(r.map((function(n,a){return t[a].id===c?(console.log("Handler: ",n),Object(u.a)(Object(u.a)({},n),{},{closed:!n.closed})):e.includes(a)&&n.sub?(console.log("Sub ",n),Object(u.a)(Object(u.a)({},n),{},{visible:!n.visible})):n}))),console.log(r)};return Object(n.useEffect)((function(){var e=t,c=[];e.map((function(t,n){if(void 0===e[n+1]||!0!==e[n+1].sub||!1!==t.sub&&void 0!==t.sub)c.push({subHandler:!1,visible:!0,sub:t.sub});else{for(var a=[],o=0;o<e.length-n&&(void 0!==e[n+o+1]&&!0===e[n+o+1].sub);o++)a.push(n+o+1);c.push({subHandler:!0,subs:a,closed:!1})}})),l(c)}),[t]),Object(j.jsx)(N.a,{onDragEnd:function(e){var n,a=e.source.index,o=null===(n=e.destination)||void 0===n?void 0:n.index,s=Object(w.a)(t);o&&(s.splice(o,0,s.splice(a,1)[0]),c(s))},onDragStart:function(){var e=Object(w.a)(t);e.push({text:"example-66666"}),o(Object(u.a)(Object(u.a)({},a),{},{before:e}))},children:Object(j.jsx)("div",{className:"todo-container",children:Object(j.jsx)(N.c,{droppableId:"droppable-todos",type:"TODOS",children:function(e,n){return Object(j.jsxs)("ul",Object(u.a)(Object(u.a)({className:"todo-list",ref:e.innerRef},e.droppableProps),{},{children:[t.map((function(e,n){return Object(j.jsx)(k,{todo:e,todos:t,setTodos:c,lastStep:a,setLastStep:o,subLayout:r[n],closeSubHandler:b},e.id)})),e.placeholder]}))}})})})},T=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(j.jsxs)("div",{className:"fab-container",children:[Object(j.jsx)("div",{className:"floating-btn",onClick:function(){a(!c)},children:Object(j.jsx)("i",{className:"fas fa-".concat(c?"times":"info")})}),Object(j.jsxs)("div",{className:"floating-text",style:{display:"".concat(c?"block":"none")},children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fas fa-cookie-bite"}),"No cookies!"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fas fa-database"}),"No hidden cache!"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"far fa-hdd"}),"Data stored in your browser's local storage!"]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("i",{className:"fab fa-github"}),"Open source!"]})]})]})};var I=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)([]),s=Object(d.a)(o,2),i=s[0],p=s[1],O=Object(n.useState)("all"),h=Object(d.a)(O,2),x=h[0],m=h[1],w=Object(n.useState)([]),N=Object(d.a)(w,2),S=N[0],k=N[1],I=Object(n.useState)("My Todo List"),E=Object(d.a)(I,2),L=E[0],H=E[1],A=Object(n.useState)({now:{},before:{}}),D=Object(d.a)(A,2),J=D[0],B=D[1];Object(n.useEffect)((function(){R(),M(),console.groupCollapsed("Easteregg!"),console.info("Congratulations! You found me!"),console.groupEnd()}),[]),Object(n.useEffect)((function(){switch(P(),x){case"completed":k(i.filter((function(e){return!0===e.completed})));break;case"uncompleted":k(i.filter((function(e){return!1===e.completed})));break;default:k(i)}B(Object(u.a)(Object(u.a)({},J),{},{now:i}))}),[i,x]),Object(n.useEffect)((function(){q()}),[L]);var P=function(){localStorage.setItem("todo-app.todos",JSON.stringify(i))},R=function(){if(null===localStorage.getItem("todo-app.todos"))localStorage.setItem("todo-app.todos",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("todo-app.todos"));p(e)}},q=function(){localStorage.setItem("todo-app.title",L)},M=function(){if(null===localStorage.getItem("todo-app.title"))localStorage.setItem("todo-app.title",L);else{var e=localStorage.getItem("todo-app.title");H(e)}},F=function(){var e=Object(l.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.b)("Change list title",{defaultValue:L,isRequired:!0,okButtonText:"change"});case 2:void 0!==(t=e.sent)&&H(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(f,{lastStep:J,setLastStep:B,setTodos:p}),Object(j.jsx)(v,{title:L,todos:i,setTodos:p}),Object(j.jsx)(g,{title:L,changeTitleHandler:F}),Object(j.jsx)(y,{inputText:c,setInputText:a,todos:i,setTodos:p,setFilter:m}),Object(j.jsx)(C,{todos:S,setTodos:p,lastStep:J,setLastStep:B}),Object(j.jsx)(T,{})]})};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root"))}},[[34,1,3]]]);
//# sourceMappingURL=main.be6edb8e.chunk.js.map