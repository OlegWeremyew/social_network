(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[5],{235:function(e,t,s){"use strict";s.d(t,"b",(function(){return m})),s.d(t,"a",(function(){return l})),s.d(t,"c",(function(){return u}));var a=s(3),n=s(241),r=(s(1),s(236)),i=s.n(r),c=s(114),o=s(0),d=function(e){var t=e.meta,s=t.touched,a=t.error,n=e.children,r=s&&a,c=r?i.a.error:"";return Object(o.jsxs)("div",{className:i.a.formControl+" "+c,children:[Object(o.jsx)("div",{children:n}),Object(o.jsx)("div",{children:r&&Object(o.jsx)("span",{children:a})})]})},m=function(e){var t=e.input,s=(e.meta,Object(n.a)(e,["input","meta"]));return Object(o.jsx)(d,Object(a.a)(Object(a.a)({},e),{},{children:Object(o.jsx)("textarea",Object(a.a)(Object(a.a)({className:i.a.textarea},t),s))}))},l=function(e){var t=e.input,s=(e.meta,Object(n.a)(e,["input","meta"]));return Object(o.jsx)(d,Object(a.a)(Object(a.a)({},e),{},{children:Object(o.jsx)("input",Object(a.a)(Object(a.a)({},t),s))}))};function u(e,t,s,n,r,i){return Object(o.jsxs)("div",{children:[Object(o.jsx)(c.a,Object(a.a)({placeholder:e,name:t,component:n,validate:s},r))," ",i]})}},236:function(e,t,s){e.exports={formControl:"FormsControls_formControl__2wdsi",error:"FormsControls_error__2ik_3",formSummaryError:"FormsControls_formSummaryError__3OqQc",textarea:"FormsControls_textarea__NbXeH"}},238:function(e,t,s){"use strict";s.d(t,"b",(function(){return a})),s.d(t,"a",(function(){return n}));var a=function(e){if(!e)return"Field is required"},n=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},248:function(e,t,s){"use strict";s.d(t,"a",(function(){return m}));var a=s(3),n=s(241),r=(s(1),s(4)),i=s(10),c=s(20),o=s(0),d=function(e){return{isAuth:e.auth.isAuth}};function m(e){return Object(i.b)(d)((function(t){var s=t.isAuth,i=Object(n.a)(t,["isAuth"]);return s?Object(o.jsx)(e,Object(a.a)({},i)):Object(o.jsx)(r.a,{to:c.a.LOGIN})}))}},265:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__20A_6",dialogs__dialog:"Dialogs_dialogs__dialog__38nt5",dialogItem:"Dialogs_dialogItem__1wspN",messages:"Dialogs_messages__1PjPt"}},266:function(e,t,s){e.exports={dialog:"DialogsItem_dialog__1le_4",dialog__name:"DialogsItem_dialog__name__2FvYj"}},267:function(e,t,s){e.exports={addMessage:"AddMessageForm_addMessage__1Vf3v",form__btn:"AddMessageForm_form__btn__2Q18i",textField:"AddMessageForm_textField__QxSmG"}},311:function(e,t,s){e.exports={message:"Dialog_message__1t1cf",message__item:"Dialog_message__item__1abb2"}},335:function(e,t,s){"use strict";s.r(t);var a=s(78),n=(s(1),s(265)),r=s.n(n),i=s(266),c=s.n(i),o=s(0),d=function(e){e.id;var t=e.img,s=e.name;return Object(o.jsxs)("div",{className:c.a.dialog,children:[Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:t,alt:"dialogs item"})}),Object(o.jsx)("div",{className:c.a.dialog__name,children:s})]})},m=s(267),l=s.n(m),u=s(114),j=s(115),_=s(235),b=s(238),g=Object(b.a)(30),O=Object(j.a)({form:"dialogAddMessageForm"})((function(e){var t=e.handleSubmit,s=e.reset;return Object(o.jsxs)("form",{className:l.a.addMessage,onSubmit:function(e){t(e),s()},children:[Object(o.jsx)("div",{children:Object(o.jsx)(u.a,{component:_.b,name:"newMessageText",placeholder:"Write your message",validate:[b.b,g]})}),Object(o.jsx)("div",{className:l.a.form__btn,children:Object(o.jsx)("button",{children:"Add message"})})]})})),f=s(311),x=s.n(f),h=function(e){return Object(o.jsx)("div",{className:x.a.message,children:Object(o.jsx)("div",{className:x.a.message__item,children:e.message})})},v=s(10),p=s(43),N=s(248),M=Object(p.d)(Object(v.b)((function(e){return{messagesPage:e.messagesPage}}),{addMessage:a.a.addMessage}),N.a)((function(e){var t=e.messagesPage,s=e.addMessage,a=t.users.map((function(e){return Object(o.jsx)(d,{name:e.name,id:e.id,img:e.img},e.id)})),n=t.messages.map((function(e){return Object(o.jsx)(h,{message:e.message,id:e.id},e.id)}));return Object(o.jsxs)("div",{className:r.a.dialogs,children:[Object(o.jsxs)("div",{className:r.a.dialogs__dialog,children:[Object(o.jsx)("div",{className:r.a.dialogItem,children:a}),Object(o.jsx)("div",{className:r.a.messages,children:n})]}),Object(o.jsx)(O,{onSubmit:function(e){s(e.newMessageText)}})]})}));t.default=M}}]);
//# sourceMappingURL=5.3739cde6.chunk.js.map