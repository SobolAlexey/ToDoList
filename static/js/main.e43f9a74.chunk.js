(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{20:function(t,e,c){},40:function(t,e,c){},59:function(t,e,c){},60:function(t,e,c){},61:function(t,e,c){},62:function(t,e,c){},68:function(t,e,c){"use strict";c.r(e);var n=c(0),s=c(1),a=c(33),i=c.n(a),o=(c(40),c(23)),l=c(8),r=c(4),d=c.n(r),u=(c(59),c(16)),j=c(17),m=c.n(j),b=(c(60),function(t){var e=t.color,c=t.onClick,s=t.className;return Object(n.jsx)("i",{onClick:c,className:m()("badge",Object(u.a)({},"badge--".concat(e),e),s)})}),h=c.p+"static/media/remove.f5660af3.svg",f=(c(61),function(t){var e=t.items,c=t.onClick,s=t.isRemovable,a=t.onRemove,i=t.onClickItem,o=t.activeItem;return Object(n.jsx)("ul",{onClick:c,className:"list",children:e.map((function(t,e){return Object(n.jsxs)("li",{onClick:i?function(){return i(t)}:null,className:m()(t.className,{active:o&&o.id===t.id}),children:[Object(n.jsx)("i",{children:t.icon?t.icon:Object(n.jsx)(b,{color:t.color.name})}),Object(n.jsxs)("span",{children:[t.name,t.tasks&&t.tasks.length>0&&" (".concat(t.tasks.length,")")]}),s&&Object(n.jsx)("img",{src:h,alt:"Remove icon",className:"list__removeSvg",onClick:function(){return function(t){window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a?")&&d.a.delete("http://localhost:3001/lists/"+t.id).then((function(){a(t.id)}))}(t)}})]},e)}))})}),O=c(14),p=(c(62),c.p+"static/media/plus.89fe7bf6.svg"),x=c.p+"static/media/close.b83c2023.svg",k=function(t){var e=t.colors,c=t.onAdd,a=Object(s.useState)(!1),i=Object(l.a)(a,2),o=i[0],r=i[1],u=Object(s.useState)(3),j=Object(l.a)(u,2),m=j[0],h=j[1],k=Object(s.useState)(""),v=Object(l.a)(k,2),g=v[0],N=v[1],C=Object(s.useState)(!1),_=Object(l.a)(C,2),w=_[0],T=_[1];Object(s.useEffect)((function(){Array.isArray(e)&&h(e[0].id)}),[e]);var E=function(){r(!1),N(""),h(e[0].id)};return Object(n.jsxs)(s.Fragment,{children:[Object(n.jsx)(f,{onClick:function(){return r(!0)},items:[{icon:Object(n.jsx)("img",{src:p,alt:"List icon",width:"10px",height:"10px"}),name:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a",active:!1}],className:"addList"}),o&&Object(n.jsxs)("div",{className:"addListPopup",children:[Object(n.jsx)("img",{onClick:E,src:x,className:"addListPopup__closeBtn"}),Object(n.jsx)("input",{value:g,onChange:function(t){return N(t.target.value)},className:"field",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430"}),Object(n.jsx)("div",{className:"addListPopup__colors",children:e.map((function(t){return Object(n.jsx)(b,{onClick:function(){return h(t.id)},color:t.name,className:m===t.id&&"active"},t.id)}))}),Object(n.jsx)("button",{onClick:function(){g?(T(!0),d.a.post("http://localhost:3001/lists",{name:g,colorId:m}).then((function(t){var n=t.data,s=e.filter((function(t){return t.id===m}))[0],a=Object(O.a)(Object(O.a)({},n),{},{color:s,task:[]});c(a),E()})).finally((function(){T(!1)}))):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435")},className:"button",children:w?"...\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})},v=(c(20),c.p+"static/media/edit.1bda04de.svg"),g=c.p+"static/media/add.c4fa83e1.svg",N=function(t){var e=t.lists,c=t.onAddTask,a=Object(s.useState)(!1),i=Object(l.a)(a,2),o=i[0],r=i[1],u=Object(s.useState)(""),j=Object(l.a)(u,2),m=j[0],b=j[1],h=Object(s.useState)(!1),f=Object(l.a)(h,2),O=f[0],p=f[1],x=function(){r(!o),b("")};return Object(n.jsx)("div",{className:"tasks__form",children:o?Object(n.jsxs)("div",{className:"tasks__form-block",children:[Object(n.jsx)("input",{className:"field",onChange:function(t){return b(t.target.value)},value:m,type:"text",placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0437\u0430\u0434\u0430\u0447\u0438"}),Object(n.jsx)("button",{disabled:O,onClick:function(){p(!0);var t={listId:e.id,text:m,completed:!1};d.a.post("http://localhost:3001/tasks",t).then((function(t){var n=t.data;c(e.id,n),x()})).catch((function(){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0441\u043f\u0438\u0441\u043a\u0430")})).finally((function(){p(!1)}))},className:"button",children:O?"...\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(n.jsx)("button",{onClick:x,className:"button button--grey",children:"\u041e\u0442\u043c\u0435\u043d\u0430"})]}):Object(n.jsxs)("div",{onClick:x,className:"tasks__form-new",children:[Object(n.jsx)("img",{src:g,alt:"add"}),Object(n.jsx)("span",{children:"\u041d\u043e\u0432\u0430\u044f \u0437\u0430\u0434\u0430\u0447\u0430"})]})})},C=c(11),_=function(t){var e=t.onRemove,c=t.onEdit,s=t.lists,a=t.id,i=t.text,o=t.onCompleted,l=t.completed;return Object(n.jsxs)("div",{className:"tasks__items-row",children:[Object(n.jsxs)("div",{className:"checkbox",children:[Object(n.jsx)("input",{checked:l,onChange:function(t){o(s.id,a,t.target.checked)},id:"task-".concat(a),type:"checkbox"}),Object(n.jsx)("label",{htmlFor:"task-".concat(a),children:Object(n.jsx)("svg",{width:"11",height:"8",viewBox:"0 0 11 8",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(n.jsx)("path",{d:"M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001",stroke:"black",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),Object(n.jsx)("input",{readOnly:!0,value:i}),Object(n.jsxs)("div",{className:"tasks__items-row-actions",children:[Object(n.jsx)("div",{onClick:function(){return c(s.id,{id:a,text:i})},children:Object(n.jsx)("img",{src:v,alt:"edit text"})}),Object(n.jsx)("div",{onClick:function(){return e(s.id,a)},children:Object(n.jsx)("img",{src:h,alt:"remove text"})})]})]})},w=function(t){var e=t.onCompletedTask,c=t.lists,s=t.onEditTitle,a=t.onAddTask,i=t.withoutEmpty,o=t.onRemoveTask,l=t.onEditTask;return Object(n.jsxs)("div",{className:"tasks",children:[Object(n.jsx)(C.b,{style:{textDecoration:"none"},to:"/lists/".concat(c.id),children:Object(n.jsxs)("h2",{style:{color:c.color.hex},className:"tasks__title",children:[c.name,Object(n.jsx)("img",{onClick:function(){var t=window.prompt("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u043f\u0438\u0441\u043a\u0430",c.name);t&&(s(c.id,t),d.a.patch("http://localhost:3001/lists/"+c.id,{name:t}).catch((function(){alert("\u041d\u0435\u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0438\u0437-\u0437\u0430 \u0432\u043e\u0437\u043d\u0438\u043a\u043e\u0432\u0435\u043d\u0438\u044f \u043e\u0448\u0438\u0431\u043a\u0438")})))},src:v,alt:"Edit icon"})]})}),Object(n.jsxs)("div",{className:"tasks__items",children:[!i&&c.tasks&&!c.tasks.length&&Object(n.jsx)("h2",{children:"\u0417\u0430\u0434\u0430\u0447\u0438 \u043e\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u044e\u0442"}),c.tasks&&c.tasks.map((function(t){return Object(n.jsx)(_,Object(O.a)({onCompleted:e,lists:c,onRemove:o,onEdit:l},t),t.id)})),Object(n.jsx)(N,{onAddTask:a,lists:c},c.id)]})]})},T=c.p+"static/media/list.fbd75cad.svg",E=c(2);var y=function(){var t=Object(s.useState)(null),e=Object(l.a)(t,2),c=e[0],a=e[1],i=Object(s.useState)(null),r=Object(l.a)(i,2),u=r[0],j=r[1],m=Object(s.useState)(null),b=Object(l.a)(m,2),h=b[0],O=b[1],p=Object(E.e)();Object(s.useEffect)((function(){d.a.get("http://localhost:3001/lists?_expand=color&_embed=tasks").then((function(t){var e=t.data;a(e)})),d.a.get("http://localhost:3001/colors").then((function(t){var e=t.data;j(e)}))}),[]);var x=function(t,e){var n=c.map((function(c){return c.id===t&&(c.name=e),c}));a(n)},v=function(t,e){var n=c.map((function(c){return c.id===t&&(c.tasks=[].concat(Object(o.a)(c.tasks),[e])),c}));a(n)},g=function(t,e){if(window.confirm("\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443")){var n=c.map((function(c){return c.id===t&&(c.tasks=c.tasks.filter((function(t){return t.id!==e}))),c}));a(n),d.a.delete("http://localhost:3001/tasks/"+e).catch((function(){alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443")}))}},N=function(t,e){var n=window.prompt("\u0422\u0435\u043a\u0441\u0442 \u0417\u0430\u0434\u0430\u0447\u0438",e.text);if(n){var s=c.map((function(c){return c.id===t&&(c.tasks=c.tasks.map((function(t){return t.id===e.id&&(t.text=n),t}))),c}));a(s),d.a.patch("http://localhost:3001/tasks/"+e.id,{text:n}).catch((function(){alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0437\u0430\u0434\u0430\u0447\u0443")}))}},C=function(t,e,n){var s=c.map((function(c){return c.id===t&&(c.tasks=c.tasks.map((function(t){return t.id===e&&(t.completed=n),t}))),c}));a(s),d.a.patch("http://localhost:3001/tasks/"+e,{completed:n}).catch((function(){alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0447\u0442\u043e \u0437\u0430\u0434\u0430\u0447\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0430")}))};return Object(s.useEffect)((function(){var t=p.location.pathname.split("lists/")[1];if(c){var e=c.find((function(e){return e.id===Number(t)}));O(e)}}),[c,p.location.pathname]),Object(n.jsxs)("div",{className:"todo",children:[Object(n.jsxs)("div",{className:"sidebar",children:[Object(n.jsx)(f,{onClickItem:function(t){p.push("/")},items:[{active:"/"===p.location.pathname,icon:Object(n.jsx)("img",{src:T,alt:"List icon",width:"18px",height:"18px"}),name:"\u0412\u0441\u0435 \u0437\u0430\u0434\u0430\u0447\u0438"}]}),c?Object(n.jsx)(f,{items:c,isRemovable:!0,onRemove:function(t){var e=c.filter((function(e){return e.id!==t}));a(e)},onClickItem:function(t){p.push("/lists/".concat(t.id)),O(t)},activeItem:h}):"...\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",Object(n.jsx)(k,{onAdd:function(t){var e=[].concat(Object(o.a)(c),[t]);a(e)},colors:u})]}),Object(n.jsxs)("div",{className:"todo__tasks",children:[Object(n.jsx)(E.a,{exact:!0,path:"/",children:c&&c.map((function(t){return Object(n.jsx)(w,{onCompletedTask:C,onRemoveTask:g,onEditTask:N,lists:t,onAddTask:v,onEditTitle:x,withoutEmpty:!0},t.id)}))}),Object(n.jsx)(E.a,{path:"/lists/:id",children:c&&h&&Object(n.jsx)(w,{onCompletedTask:C,onEditTask:N,onRemoveTask:g,onAddTask:v,onEditTitle:x,lists:h})})]})]})};i.a.render(Object(n.jsx)(C.a,{children:Object(n.jsx)(y,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.e43f9a74.chunk.js.map