(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[7],{327:function(e,t,s){e.exports={chat__item:"Messages_chat__item__M8tP2"}},328:function(e,t,s){e.exports={message:"Message_message__3y-12",message__item:"Message_message__item__1P-zd",message__userName:"Message_message__userName__liBCF",message__img:"Message_message__img__2xFCT",message__text:"Message_message__text__1r__e"}},329:function(e,t,s){e.exports={form__btn:"AddMessageForm_form__btn__3NQLC",textarea:"AddMessageForm_textarea__2V23D"}},330:function(e,t,s){e.exports={chatBlock:"Chat_chatBlock__3zY-t"}},331:function(e,t,s){e.exports={chatPageBlock:"ChatPage_chatPageBlock__1x1-F",chatPage__title:"ChatPage_chatPage__title__3Es5P"}},337:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),r=s(16),n=s(327),i=s.n(n),_=s(328),o=s.n(_),j=s(0),m=c.a.memo((function(e){var t=e.message;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:o.a.message,children:[Object(j.jsxs)("div",{className:o.a.message__item,children:[Object(j.jsx)("img",{className:o.a.message__img,src:t.photo,alt:"avatar",title:"avatar ".concat(t.userName)}),Object(j.jsx)("div",{className:o.a.message__userName,children:t.userName}),Object(j.jsx)("br",{})]}),Object(j.jsx)("div",{className:o.a.message__text,children:t.message})]}),Object(j.jsx)("hr",{})]})})),l=s(10),u=function(){var e=Object(l.d)((function(e){return e.chat.messages})),t=Object(a.useRef)(null),s=Object(a.useState)(!1),c=Object(r.a)(s,2),n=c[0],_=c[1];return Object(a.useEffect)((function(){var e;n&&(null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[e]),Object(j.jsxs)("div",{className:i.a.chat__item,onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop)-t.clientHeight<300?!n&&_(!0):n&&_(!1)},children:[e.map((function(e){return Object(j.jsx)(m,{message:e},e.id)})),Object(j.jsx)("div",{ref:t})]})},b=s(329),g=s.n(b),h=s(68),d=function(){var e=Object(l.c)(),t=Object(a.useState)(""),s=Object(r.a)(t,2),c=s[0],n=s[1],i=Object(l.d)((function(e){return e.chat.status}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("textarea",{className:g.a.textarea,placeholder:"write your message",value:c,onChange:function(e){return function(e){n(e)}(e.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&(e(Object(h.b)(c)),n(""))}}),Object(j.jsx)("div",{className:g.a.form__btn,onClick:function(){c.trim()&&(e(Object(h.b)(c)),n(""))},children:Object(j.jsx)("button",{disabled:"ready"!==i,children:"Send"})})]})},O=s(330),x=s.n(O),f=function(){var e=Object(l.c)(),t=Object(l.d)((function(e){return e.chat.status}));return Object(a.useEffect)((function(){return e(Object(h.c)()),function(){e(Object(h.d)())}}),[]),Object(j.jsxs)(j.Fragment,{children:["error"===t&&Object(j.jsx)("div",{children:"Some error occurred. Please refresh this page"}),Object(j.jsxs)("div",{className:x.a.chatBlock,children:[Object(j.jsx)(u,{}),Object(j.jsx)(d,{})]})]})},v=s(331),N=s.n(v);t.default=function(){return Object(j.jsxs)("div",{className:N.a.chatPageBlock,children:[Object(j.jsx)("div",{className:N.a.chatPage__title,children:"Common chat"}),Object(j.jsx)(f,{})]})}}}]);
//# sourceMappingURL=7.3425d5db.chunk.js.map