(this["webpackJsonpbetter-calc"]=this["webpackJsonpbetter-calc"]||[]).push([[0],{13:function(e,t,a){e.exports={ButtonPad:"ButtonPad_ButtonPad__3CGbL"}},19:function(e,t,a){e.exports=a(28)},24:function(e,t,a){},25:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),l=a(10),r=a.n(l),i=(a(24),a(11)),s=a(12),o=a(18),m=a(17),u=(a(25),a(6)),d=a.n(u),k=function(e){return n.a.createElement("div",{className:d.a.Display},n.a.createElement("div",{className:d.a.history},e.lastExpression),n.a.createElement("div",null,e.expression),n.a.createElement("hr",null))},E=a(5),p=a.n(E),v=function(e){var t=p.a.Button;return e.blue&&(t=p.a.Button+" "+p.a.blue),n.a.createElement("div",{className:t,onClick:function(){return e.click(e.name)}},e.name)},x=a(13),f=a.n(x),h=function(e){return n.a.createElement("div",{className:f.a.ButtonPad},n.a.createElement("div",null,n.a.createElement(v,{name:"AC",click:e.clicked}),n.a.createElement(v,{name:"\u232b",click:e.clicked}),n.a.createElement(v,{name:"%",click:e.clicked}),n.a.createElement(v,{name:"/",blue:!0,click:e.clicked})),n.a.createElement("div",null,n.a.createElement(v,{name:"1",click:e.clicked}),n.a.createElement(v,{name:"2",click:e.clicked}),n.a.createElement(v,{name:"3",click:e.clicked}),n.a.createElement(v,{name:"*",blue:!0,click:e.clicked})),n.a.createElement("div",null,n.a.createElement(v,{name:"4",click:e.clicked}),n.a.createElement(v,{name:"5",click:e.clicked}),n.a.createElement(v,{name:"6",click:e.clicked}),n.a.createElement(v,{name:"-",blue:!0,click:e.clicked})),n.a.createElement("div",null,n.a.createElement(v,{name:"7",click:e.clicked}),n.a.createElement(v,{name:"8",click:e.clicked}),n.a.createElement(v,{name:"9",click:e.clicked}),n.a.createElement(v,{name:"+",blue:!0,click:e.clicked})),n.a.createElement("div",null,n.a.createElement(v,{name:"+/-",click:e.clicked}),n.a.createElement(v,{name:"0",click:e.clicked}),n.a.createElement(v,{name:".",click:e.clicked}),n.a.createElement(v,{name:"=",blue:!0,click:e.clicked})))},b=a(27);var _=function(e){var t;switch(e){case"+":case"-":case"*":case"/":t=!0;break;default:t=!1}return t},y=function(e,t){if("AC"===t)return{expr:"",lastPressed:"",lastExpr:""};if("="===t){var a=b.evaluate(e.expr);if(""!==e.expr)return{lastExpr:e.expr,expr:a.toString()}}return/[0-9]+/.test(t)?{expr:e.expr+t,lastPressed:t}:_(t)?_(e.lastPressed)?{}:{expr:e.expr+t,lastPressed:t}:void 0},B=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var c=arguments.length,n=new Array(c),l=0;l<c;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={expr:"",lastPressed:"",lastExpr:""},e.takeExpressionHandler=function(t){e.setState(y(e.state,t))},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(k,{expression:this.state.expr,lastExpression:this.state.lastExpr}),n.a.createElement(h,{clicked:this.takeExpressionHandler}))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports={Button:"Button_Button__1Vv68",blue:"Button_blue__BcF9k"}},6:function(e,t,a){e.exports={Display:"Display_Display__3Pri_",history:"Display_history__9gC_K"}}},[[19,1,2]]]);
//# sourceMappingURL=main.3ca20ffa.chunk.js.map