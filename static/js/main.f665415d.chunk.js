(this.webpackJsonpmyWayTypeScript=this.webpackJsonpmyWayTypeScript||[]).push([[0],[,,,function(e,s,t){e.exports={nav:"Navbar_nav__1Fdz2",item:"Navbar_item__1onIf",activeLink:"Navbar_activeLink__f94mN"}},,,,,function(e,s,t){e.exports={dialogs:"Messages_dialogs__2a5ir",dialogItem:"Messages_dialogItem__1fljT",dialog:"Messages_dialog__amYKR"}},,function(e,s,t){e.exports={appContent:"App_appContent__4mg9X",appContentWindow:"App_appContentWindow__dnoS0"}},function(e,s,t){e.exports={myPosts:"MyPosts_myPosts__1Dxws",posts:"MyPosts_posts__1WTYZ"}},function(e,s,t){e.exports={item:"Post_item__3IYxb",itemText:"Post_itemText__rOuHO"}},,,function(e,s,t){e.exports={header:"Header_header__3WLj3"}},function(e,s,t){e.exports={footer:"Footer_footer__mhg74"}},function(e,s,t){e.exports={news:"News_news__37yFc"}},function(e,s,t){e.exports={music:"Music_music__JnEwt"}},function(e,s,t){e.exports={friends:"Friends_friends__2_1Vc"}},function(e,s,t){e.exports={settings:"Settings_settings__Wu77x"}},function(e,s,t){e.exports={profile:"Profile_profile__3rowZ",ava:"Profile_ava__3qkus"}},function(e,s,t){e.exports={profile:"ProfileInfo_profile__2ViAK",ava:"ProfileInfo_ava__9e5p9"}},function(e,s,t){e.exports={message:"Message_message__1_lWt"}},function(e,s,t){e.exports={dialog:"DialogsItem_dialog__26p68"}},,,,,function(e,s,t){},,function(e,s,t){"use strict";t.r(s);t(1);var n=t(14),i=t.n(n),a=(t(29),t(13)),c={posts:[{message:"Hello",likesCount:12,id:1},{message:"Dinosaurus are great",likesCount:17,id:2}],newPostText:""},o=function(e){return{type:"UPDATE_NEW_POST_TEXT",newText:e}},r={users:[{name:"Oleg",id:1,img:"https://avatars.mds.yandex.net/get-zen_doc/3986249/pub_607ecd1d13c71c1ca8a34192_607ee065330a4f14d551104b/scale_1200"},{name:"Diana",id:2,img:"https://avatars.mds.yandex.net/i?id=64b380ea3aa0d80cad94cb1a24a3b3f5-4233014-images-thumbs&ref=rim&n=33&w=150&h=150"},{name:"Fat cat",id:3,img:"https://data.whicdn.com/images/310252363/original.jpg"},{name:"Dimka",id:4,img:"https://i.pinimg.com/originals/b7/44/46/b744464dd3d970ad96745be8de69d755.jpg"},{name:"Ella",id:5,img:"https://st.depositphotos.com/1023162/5099/i/950/depositphotos_50991807-stock-photo-sexy-woman-in-fashion-sunglasses.jpg"},{name:"Makar",id:6,img:"https://avatars.mds.yandex.net/i?id=55d09aa1629f72a149098b2c3127e039-5222024-images-thumbs&ref=rim&n=33&w=150&h=150"}],messages:[{message:"Hi",id:1},{message:"Ho",id:2},{message:"He",id:3},{message:"Hu",id:4},{message:"Hio",id:5},{message:"Hia",id:6}],newMessageText:""},d=function(e){return{type:"UPDATE_NEW_MESSAGE_TEXT",newMessage:e}},j={},l=Object(a.a)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"ADD_POST":var t={id:(new Date).getTime(),message:e.newPostText,likesCount:12};return e.posts.push(t),e.newPostText="",e;case"UPDATE_NEW_POST_TEXT":return e.newPostText=s.newText,e;default:return e}},messagesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,s=arguments.length>1?arguments[1]:void 0;switch(s.type){case"ADD_MESSAGE":var t={id:(new Date).getTime(),message:e.newMessageText};return e.messages.push(t),e.newMessageText="",e;case"UPDATE_NEW_MESSAGE_TEXT":return e.newMessageText=s.newMessage,e;default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;return e}}),m=Object(a.b)(l),u=t(10),g=t.n(u),x=t(15),p=t.n(x),b=t.p+"static/media/logo.cbfad428.png",h=t(0),f=function(){return Object(h.jsx)("header",{className:p.a.header,children:Object(h.jsx)("img",{src:b,alt:"logo",title:"image logo"})})},_=t(3),v=t.n(_),O=t(5),w=function(){return Object(h.jsxs)("nav",{className:v.a.nav,children:[Object(h.jsx)("div",{className:v.a.item,children:Object(h.jsx)(O.b,{className:function(e){return e.isActive?v.a.activeLink:""},to:"/profile",children:"Profile"})}),Object(h.jsx)("div",{className:"".concat(v.a.item," ").concat(v.a.active),children:Object(h.jsx)(O.b,{className:function(e){return e.isActive?v.a.activeLink:""},to:"/messages",children:"Message"})}),Object(h.jsx)("div",{className:v.a.item,children:Object(h.jsx)(O.b,{className:function(e){return e.isActive?v.a.activeLink:""},to:"/news",children:"News"})}),Object(h.jsx)("div",{className:v.a.item,children:Object(h.jsx)(O.b,{className:function(e){return e.isActive?v.a.activeLink:""},to:"/music",children:"Music"})}),Object(h.jsx)("div",{className:v.a.item,children:Object(h.jsx)(O.b,{className:function(e){return e.isActive?v.a.activeLink:""},to:"/settings",children:"Settings"})}),Object(h.jsx)("div",{className:v.a.item,children:Object(h.jsx)(O.b,{className:function(e){return e.isActive?v.a.activeLink:""},to:"/friends",children:"Friends"})})]})},N=t(16),T=t.n(N),P=function(){return Object(h.jsx)("div",{className:T.a.footer,children:"Footer"})},y=t(2),k=t(17),M=t.n(k),A=function(){return Object(h.jsx)("div",{className:M.a.news,children:"News"})},E=t(18),S=t.n(E),D=function(){return Object(h.jsx)("div",{className:S.a.music,children:"Music"})},C=t(19),W=t.n(C),H=function(){return Object(h.jsx)("div",{className:W.a.friends,children:"Friends"})},I=t(20),L=t.n(I),F=function(){return Object(h.jsx)("div",{className:L.a.settings,children:"Settings"})},X=t(21),G=t.n(X),U=t(22),z=t.n(U),J=function(){return Object(h.jsx)("div",{className:z.a.profile,children:Object(h.jsx)("img",{src:"https://img.lovepik.com/photo/50066/7884.jpg_wh860.jpg",alt:"fone",title:"fon image"})})},Y=t(11),q=t.n(Y),K=t(12),V=t.n(K),Z=function(e){return Object(h.jsxs)("div",{className:V.a.item,children:[Object(h.jsx)("img",{src:"https://slovami.net/wp-content/uploads/thumbs_dir/the-most-beautiful-guys-russia-4-1-nwkkkydf2f1mhw9a4ijzfs2ktasvevyjiyi4xibqis.jpg",alt:"ava",title:"ava"}),Object(h.jsxs)("div",{className:V.a.itemText,children:[e.message,Object(h.jsx)("div",{children:Object(h.jsxs)("span",{children:["like: ",e.likesCount]})})]})]},e.id)},B=function(e){var s=e.posts.map((function(e){return Object(h.jsx)(Z,{message:e.message,likesCount:e.likesCount,id:e.id},e.id)}));return Object(h.jsxs)("div",{className:q.a.myPosts,children:[Object(h.jsx)("h3",{children:"My posts"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("textarea",{onChange:function(s){var t=s.currentTarget.value;e.updateNewPostText(t)},value:e.newPostText,placeholder:"Write your message"})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){e.onAddPost()},children:"Add post"})})]}),Object(h.jsx)("div",{className:q.a.posts,children:s})]})},R=function(e){var s=e.store.getState();return Object(h.jsx)("div",{children:Object(h.jsx)(B,{updateNewPostText:function(s){s?e.store.dispatch(o(s)):e.store.dispatch(o(""))},onAddPost:function(){e.store.dispatch({type:"ADD_POST"})},posts:s.profilePage.posts,newPostText:s.profilePage.newPostText})})},Q=function(e){return Object(h.jsxs)("div",{className:G.a.profile,children:[Object(h.jsx)(J,{}),Object(h.jsx)(R,{store:e.store})]})},$=t(8),ee=t.n($),se=t(23),te=t.n(se),ne=function(e){return Object(h.jsx)("div",{className:te.a.message,children:e.message})},ie=t(24),ae=t.n(ie),ce=function(e){var s="/messages/"+e.id;return Object(h.jsxs)("div",{className:ae.a.dialog,children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:e.img})}),Object(h.jsx)("div",{children:Object(h.jsx)(O.b,{to:s,children:e.name})})]})},oe=function(e){var s=e.store.users.map((function(e){return Object(h.jsx)(ce,{name:e.name,id:e.id,img:e.img},e.id)})),t=e.store.messages.map((function(e){return Object(h.jsx)(ne,{message:e.message,id:e.id},e.id)}));return Object(h.jsxs)("div",{className:ee.a.dialogs,children:[Object(h.jsx)("div",{className:ee.a.dialogItem,children:s}),Object(h.jsxs)("div",{className:ee.a.messages,children:[t,Object(h.jsx)("div",{children:Object(h.jsx)("textarea",{onChange:function(s){var t=s.currentTarget.value;e.onMessagePost(t)},value:e.store.newMessageText,rows:10,cols:44,placeholder:"Write your message"})}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:function(){e.addMessage()},children:"Add message"})})]})]})},re=function(e){var s=e.store.getState().messagesPage;return Object(h.jsx)(oe,{addMessage:function(){e.store.dispatch({type:"ADD_MESSAGE"})},onMessagePost:function(s){s?e.store.dispatch(d(s)):e.store.dispatch(d(""))},store:s})};var de=function(e){return Object(h.jsxs)("main",{className:g.a.appContent,children:[Object(h.jsx)(f,{}),Object(h.jsx)(w,{}),Object(h.jsx)("div",{className:g.a.appContentWindow,children:Object(h.jsxs)(y.c,{children:[Object(h.jsx)(y.a,{path:"/profile/*",element:Object(h.jsx)(Q,{store:e.store})}),Object(h.jsx)(y.a,{path:"/messages/*",element:Object(h.jsx)(re,{store:e.store})}),Object(h.jsx)(y.a,{path:"/news/*",element:Object(h.jsx)(A,{})}),Object(h.jsx)(y.a,{path:"/music/*",element:Object(h.jsx)(D,{})}),Object(h.jsx)(y.a,{path:"/settings/*",element:Object(h.jsx)(F,{})}),Object(h.jsx)(y.a,{path:"/friends/*",element:Object(h.jsx)(H,{})})]})}),Object(h.jsx)(P,{})]})},je=function(e){i.a.render(Object(h.jsx)(O.a,{children:Object(h.jsx)(de,{store:m})}),document.getElementById("root"))};je(m.getState()),m.subscribe((function(){m.getState();je()}))}],[[31,1,2]]]);
//# sourceMappingURL=main.f665415d.chunk.js.map