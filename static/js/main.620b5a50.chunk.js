(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{122:function(e,t,n){},127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(9),i=n.n(a),s=(n(96),n(29)),r=n(17),o=n.n(r),u=n(66),l=n(30),d=n(32),f=n(31),j=n.n(f),h=n(167),b=n(162),O=n(58),p=n.n(O),v=n(57),k=n.n(v),x=n(61),m=n(81),g=n(13),N=new function e(){var t=this;Object(m.a)(this,e),this.todos=[],this.addTodo=function(e){var n=!0;t.todos.map((function(t){t._id===e._id&&(n=!1)})),n&&(t.todos=[].concat(Object(s.a)(t.todos),[e]))},this.deleteTodo=function(e){var n=t.todos.filter((function(t){if(t._id!==e._id)return t}));t.todos=Object(s.a)(n)},this.changeTodo=function(e){var n=t.todos.map((function(t){return t._id===e?(t.isDone=!t.isDone,t):t}));t.todos=Object(s.a)(n)},Object(g.d)(this)},_=n(3),D=Object(x.a)((function(e){var t=e.changeCheck,n=e.deleteTask,a=e.tasks,i=e.setFilterMeaning,s=e.filerState,r=e.setTasks,o=Object(c.useMemo)((function(){return i(s)}),[a,s]);return Object(_.jsx)("div",{className:"to-do-list-tasks-div",children:0!==a.lenght&&o.map((function(e){return Object(_.jsxs)("div",{className:"tasks-div",children:[Object(_.jsx)(h.a,{type:"checkbox",checked:e.isDone,onChange:function(){return t(e.text,e.isCheck,e._id)}}),Object(_.jsx)(b.a,{className:e.isDone?"task-p-checked":"task-p",onDoubleClick:function(){return t(e.title,e.isDone,e._id)},children:e.title}),Object(_.jsx)(k.a,{className:e.selected?"selected-icon-active":"selected-icon",alt:"\u041f\u0438\u043a\u0447\u0438 \u043d\u0435\u0442",onClick:function(){N.addTodo(e),function(e){var t=a.map((function(t){return e===t._id?(t.selected=!t.selected,t):t}));r(t)}(e._id)}}),Object(_.jsx)(p.a,{className:"delete-icon",onClick:function(){return n(e)},alt:"\u041f\u0438\u043a\u0447\u0438 \u043d\u0435\u0442"})]},"task-".concat(e._id))}))})})),S=n(166),y=n(168),T=n(164),C=n(35),w=(n(122),function(e){var t=e.setFilterState,n=e.filterValue,c=e.filerState;return Object(_.jsxs)("div",{className:"filter-div",children:[Object(_.jsx)(S.a,{value:c,onChange:function(e){return t(e.target.value)},children:n.map((function(e){return Object(_.jsx)(y.a,{value:e,children:e},"filter-".concat(e))}))}),Object(_.jsx)(C.b,{to:"/to-do-selected",className:"link-selected",children:Object(_.jsx)(T.a,{className:"selected-task-button",children:"Selected"})})]})}),F=n(165),M=n(163),A=(n(127),function(){var e="https://exceed-todo-list.herokuapp.com/api/v1/todos",t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)([]),f=Object(d.a)(r,2),h=f[0],b=f[1],O=Object(c.useState)(""),p=Object(d.a)(O,2),v=p[0],k=p[1],x=Object(c.useState)("\u0412\u0441\u0435"),m=Object(d.a)(x,2),g=m[0],S=m[1];Object(c.useEffect)(Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.get("".concat(e),{headers:{apikey:"952773f1-e82c-465f-acd6-5c282e3a2a99"}}).then((function(e){b(e.data.map((function(e){return e=Object(u.a)(Object(u.a)({},e),{},{selected:!1})})))})).catch((function(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e))}));case 2:case"end":return t.stop()}}),t)}))),[v]);var y=function(){var t=Object(l.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.post("".concat(e),{title:a,isDone:!1,isSelected:!1},{headers:{apikey:"952773f1-e82c-465f-acd6-5c282e3a2a99"}}).then((function(e){i(""),k(e)})).catch((function(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.delete("".concat(e,"/").concat(n._id),{headers:{apikey:"952773f1-e82c-465f-acd6-5c282e3a2a99"}}).then((function(e){N.deleteTodo(n),k(e)})).catch((function(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),A=function(){var t=Object(l.a)(o.a.mark((function t(n,c,a){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.put("".concat(e,"/").concat(a,"/done"),{isDone:c},{headers:{apikey:"952773f1-e82c-465f-acd6-5c282e3a2a99"}}).then((function(e){N.changeTodo(a),k(e)})).catch((function(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e))}));case 2:case"end":return t.stop()}}),t)})));return function(e,n,c){return t.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:"main-to-do-list-div",children:[Object(_.jsx)(F.a,{variant:"h1",children:"To-do list"}),Object(_.jsxs)("div",{className:"creation-string-div",children:[Object(_.jsx)(M.a,{value:a,className:"to-do-list-input",onChange:function(e){return i(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&y()}}),Object(_.jsx)(T.a,{onClick:function(){return y()},className:"add-task-button",children:"Add"})]}),Object(_.jsx)(w,{setFilterState:S,filterValue:["\u0412\u0441\u0435","\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435","\u041d\u0435\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"],filerState:g}),Object(_.jsx)(D,{setFilterMeaning:function(e){var t=Object(s.a)(h);return"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"===e?t.filter((function(e){if(e.isDone)return e})):"\u041d\u0435\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"===e?t.filter((function(e){if(!e.isDone)return e})):t},deleteTask:C,changeCheck:A,setTasks:b,tasks:h,filerState:g})]})}),E=(n(128),Object(x.a)((function(e){var t=e.changeCheck,n=e.deleteTask,a=e.tasks,i=e.setFilterMeaning,s=e.filerState,r=e.setTasks,o=Object(c.useMemo)((function(){return i(s)}),[a,s]);return Object(_.jsx)("div",{className:"to-do-list-tasks-div",children:0!==a.lenght&&o.map((function(e){return Object(_.jsxs)("div",{className:"tasks-div",children:[Object(_.jsx)(h.a,{type:"checkbox",checked:e.isDone,onChange:function(){return t(e.title,e.isDone,e._id)}}),Object(_.jsx)(b.a,{className:e.isDone?"task-p-checked":"task-p",onDoubleClick:function(){return t(e.title,e.isDone,e._id)},children:e.title}),Object(_.jsx)(k.a,{className:"selected-icon-active",alt:"\u041f\u0438\u043a\u0447\u0438 \u043d\u0435\u0442",onClick:function(){return function(e){N.deleteTodo(e);var t=a.filter((function(t){if(t._id!==e._id)return e}));r(t)}(e)}}),Object(_.jsx)(p.a,{className:"delete-icon",onClick:function(){return n(e)},alt:"\u041f\u0438\u043a\u0447\u0438 \u043d\u0435\u0442"})]},"task-".concat(e._id))}))})}))),V=(n(129),function(e){var t=e.setFilterState,n=e.filterValue,c=e.filerState;return Object(_.jsxs)("div",{className:"filter-div",children:[Object(_.jsx)(S.a,{value:c,onChange:function(e){return t(e.target.value)},children:n.map((function(e){return Object(_.jsx)(y.a,{value:e,children:e},"filter-".concat(e))}))}),Object(_.jsx)(C.b,{to:"/to-do-list",className:"link-selected",children:Object(_.jsx)(T.a,{className:"selected-task-button",children:"All tasks"})})]})}),J=n(87),B=n.n(J),I=function(){var e="https://exceed-todo-list.herokuapp.com/api/v1/todos",t=Object(c.useState)([]),n=Object(d.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)("\u0412\u0441\u0435"),u=Object(d.a)(r,2),f=u[0],h=u[1];Object(c.useEffect)((function(){i(N.todos)}),[]);var b=function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.delete("".concat(e,"/").concat(n._id),{headers:{apikey:"952773f1-e82c-465f-acd6-5c282e3a2a99"}}).then((function(e){N.deleteTodo(n);var t=a.filter((function(e){if(e._id!==n._id)return n}));i(t)})).catch((function(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(l.a)(o.a.mark((function t(n,c,s){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.put("".concat(e,"/").concat(s,"/done"),{isDone:c},{headers:{apikey:"952773f1-e82c-465f-acd6-5c282e3a2a99"}}).then((function(e){var t=a.map((function(e){return e._id===s?(e.isDone=!e.isDone,e):e}));i(t)})).catch((function(e){alert("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e))}));case 2:case"end":return t.stop()}}),t)})));return function(e,n,c){return t.apply(this,arguments)}}();return Object(_.jsxs)("div",{className:"main-to-do-list-div",children:[Object(_.jsx)(F.a,{variant:"h1",children:"To-do list"}),Object(_.jsx)(F.a,{className:B.a.h3,variant:"h3",children:"Selected"}),Object(_.jsx)("div",{className:"creation-string-div"}),Object(_.jsx)(V,{setFilterState:h,filterValue:["\u0412\u0441\u0435","\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435","\u041d\u0435\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"],filerState:f}),Object(_.jsx)(E,{setFilterMeaning:function(e){var t=Object(s.a)(a);return"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"===e?t.filter((function(e){if(e.isDone)return e})):"\u041d\u0435\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435"===e?t.filter((function(e){if(!e.isDone)return e})):t},tasks:a,filerState:f,deleteTask:b,changeCheck:O,setTasks:i})]})},K=n(11);var Q=function(){return Object(_.jsx)("div",{className:"App",children:Object(_.jsxs)(K.d,{children:[Object(_.jsx)(K.b,{path:"/to-do-list",component:A}),Object(_.jsx)(K.b,{path:"/to-do-selected",component:I}),Object(_.jsx)(K.a,{to:"/to-do-list"})]})})};n(130);i.a.render(Object(_.jsx)(C.a,{children:Object(_.jsx)(Q,{})}),document.getElementById("root"))},87:function(e,t,n){e.exports={h3:"style_h3__2yAQs"}},96:function(e,t,n){}},[[131,1,2]]]);
//# sourceMappingURL=main.620b5a50.chunk.js.map