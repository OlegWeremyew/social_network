(this.webpackJsonpmyWayTypeScript=this.webpackJsonpmyWayTypeScript||[]).push([[0],{18:function(e,t,s){e.exports={ground:"ProfileInfo_ground__1iuZd",ava:"ProfileInfo_ava__1jSav",avatar:"ProfileInfo_avatar__22Iyr"}},22:function(e,t,s){e.exports={dialogs:"Messages_dialogs__3WgMj",dialogItem:"Messages_dialogItem__3jFPD",dialog:"Messages_dialog__GFzRM"}},24:function(e,t,s){e.exports={appContent:"App_appContent__31heF",appContentWindow:"App_appContentWindow__2gnhC"}},26:function(e,t,s){e.exports={userPhoto:"Users_userPhoto__jEelu",selectedPage:"Users_selectedPage__2nEHL"}},27:function(e,t,s){e.exports={myPosts:"MyPosts_myPosts__FQQlZ",posts:"MyPosts_posts__YPrmi"}},28:function(e,t,s){e.exports={item:"Post_item__1LZi-",itemText:"Post_itemText__3jxIt"}},29:function(e,t,s){e.exports={header:"Header_header__2rKXS",loginBlock:"Header_loginBlock__1OEPA"}},40:function(e,t,s){e.exports={footer:"Footer_footer__3XO3I"}},41:function(e,t,s){e.exports={news:"News_news__16Ki9"}},42:function(e,t,s){e.exports={music:"Music_music__20urC"}},43:function(e,t,s){e.exports={friends:"Friends_friends__2fVYI"}},44:function(e,t,s){e.exports={settings:"Settings_settings__ZkkZz"}},45:function(e,t,s){e.exports={message:"Message_message__1KS8B"}},46:function(e,t,s){e.exports={dialog:"DialogsItem_dialog__2sybv"}},48:function(e,t,s){e.exports={preloader:"Preloader_preloader__1Oc1j"}},49:function(e,t,s){e.exports={profile:"Profile_profile__3Z-pR",ava:"Profile_ava__3Hnfg"}},5:function(e,t,s){e.exports={nav:"Navbar_nav__ySm9p",item:"Navbar_item__2xv0e",activeLink:"Navbar_activeLink__1hYAc"}},55:function(e,t,s){},81:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(21),c=s.n(i),r=(s(55),s(9)),o=s(10),l=s(2),u=s(38),j=s.n(u).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"f5a121b3-d5d2-4866-a73a-ab1418f0e4d8"}}),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return j.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},g=function(e){return j.get("profile/"+e)},b=function(){return j.get("auth/me")},p={posts:[{message:"Hello",likesCount:12,id:1},{message:"Dinosaurus are great",likesCount:17,id:2}],newPostText:"",profile:null},O=function(e){return{type:"UPDATE_NEW_POST_TEXT",newText:e}},h={users:[{name:"Oleg",id:1,img:"https://avatars.mds.yandex.net/get-zen_doc/3986249/pub_607ecd1d13c71c1ca8a34192_607ee065330a4f14d551104b/scale_1200"},{name:"Diana",id:2,img:"https://avatars.mds.yandex.net/i?id=64b380ea3aa0d80cad94cb1a24a3b3f5-4233014-images-thumbs&ref=rim&n=33&w=150&h=150"},{name:"Fat cat",id:3,img:"https://data.whicdn.com/images/310252363/original.jpg"},{name:"Dimka",id:4,img:"https://i.pinimg.com/originals/b7/44/46/b744464dd3d970ad96745be8de69d755.jpg"},{name:"Ella",id:5,img:"https://st.depositphotos.com/1023162/5099/i/950/depositphotos_50991807-stock-photo-sexy-woman-in-fashion-sunglasses.jpg"},{name:"Makar",id:6,img:"https://avatars.mds.yandex.net/i?id=55d09aa1629f72a149098b2c3127e039-5222024-images-thumbs&ref=rim&n=33&w=150&h=150"}],messages:[{message:"Hi",id:1},{message:"Ho",id:2},{message:"He",id:3},{message:"Hu",id:4},{message:"Hio",id:5},{message:"Hia",id:6}],newMessageText:""},f=function(e){return{type:"UPDATE_NEW_MESSAGE_TEXT",newMessage:e}},m={},x={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},v=function(e){return{type:"FOLLOW",userID:e}},_=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},P=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-IN-PROGRESS",followingInProgress:e,userId:t}},w={data:{},isFetching:!0,isAuth:!1},T=s(39),N=Object(r.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var s={id:(new Date).getTime(),message:e.newPostText,likesCount:12};return Object(l.a)(Object(l.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[s]),newPostText:""});case"UPDATE_NEW_POST_TEXT":return Object(l.a)(Object(l.a)({},e),{},{newPostText:t.newText});case"SET-USER-PROFILE":return Object(l.a)(Object(l.a)({},e),{},{profile:t.profile});default:return e}},messagesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":var s={id:(new Date).getTime(),message:e.newMessageText};return Object(l.a)(Object(l.a)({},e),{},{messages:[].concat(Object(o.a)(e.messages),[s]),newMessageText:""});case"UPDATE_NEW_MESSAGE_TEXT":return Object(l.a)(Object(l.a)({},e),{},{newMessageText:t.newMessage});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(l.a)(Object(l.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(l.a)(Object(l.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(l.a)(Object(l.a)({},e),{},{users:Object(o.a)(t.users)});case"SET-CURRENT-PAGE":return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(l.a)(Object(l.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-IN-PROGRESS":return Object(l.a)(Object(l.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(l.a)(Object(l.a)({},e),{},{data:Object(l.a)(Object(l.a)({},e.data),{},{email:t.data.email,login:t.data.login,userId:t.data.userId}),isAuth:!0});case"TOGGLE-IS-FETCHING":return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-AUTH":return Object(l.a)(Object(l.a)({},e),{},{isAuth:t.isAuth});default:return e}}}),S=Object(r.d)(N,Object(r.a)(T.a)),E=s(24),I=s.n(E),y=s(5),A=s.n(y),C=s(4),k=s(0),U=function(){return Object(k.jsxs)("nav",{className:A.a.nav,children:[Object(k.jsx)("div",{className:A.a.item,children:Object(k.jsx)(C.b,{className:function(e){return e.isActive?A.a.activeLink:""},to:"/profile",children:"Profile"})}),Object(k.jsx)("div",{className:"".concat(A.a.item," ").concat(A.a.active),children:Object(k.jsx)(C.b,{className:function(e){return e.isActive?A.a.activeLink:""},to:"/messages",children:"Message"})}),Object(k.jsx)("div",{className:"".concat(A.a.item," ").concat(A.a.active),children:Object(k.jsx)(C.b,{className:function(e){return e.isActive?A.a.activeLink:""},to:"/users",children:"Users"})}),Object(k.jsx)("div",{className:A.a.item,children:Object(k.jsx)(C.b,{className:function(e){return e.isActive?A.a.activeLink:""},to:"/news",children:"News"})}),Object(k.jsx)("div",{className:A.a.item,children:Object(k.jsx)(C.b,{className:function(e){return e.isActive?A.a.activeLink:""},to:"/music",children:"Music"})}),Object(k.jsx)("div",{className:A.a.item,children:Object(k.jsx)(C.b,{className:function(e){return e.isActive?A.a.activeLink:""},to:"/settings",children:"Settings"})}),Object(k.jsx)("div",{className:A.a.item,children:Object(k.jsx)(C.b,{className:function(e){return e.isActive?A.a.activeLink:""},to:"/friends",children:"Friends"})})]})},F=s(40),L=s.n(F),M=function(){return Object(k.jsx)("div",{className:L.a.footer,children:"Footer"})},D=s(3),G=s(41),R=s.n(G),W=function(){return Object(k.jsx)("div",{className:R.a.news,children:"News"})},H=s(42),z=s.n(H),B=function(){return Object(k.jsx)("div",{className:z.a.music,children:"Music"})},X=s(43),Z=s.n(X),K=function(){return Object(k.jsx)("div",{className:Z.a.friends,children:"Friends"})},Y=s(44),J=s.n(Y),Q=function(){return Object(k.jsx)("div",{className:J.a.settings,children:"Settings"})},q=s(22),V=s.n(q),$=s(45),ee=s.n($),te=function(e){return Object(k.jsx)("div",{className:ee.a.message,children:e.message})},se=s(46),ne=s.n(se),ae=function(e){var t="/messages/"+e.id;return Object(k.jsxs)("div",{className:ne.a.dialog,children:[Object(k.jsx)("div",{children:Object(k.jsx)("img",{src:e.img})}),Object(k.jsx)("div",{children:Object(k.jsx)(C.b,{to:t,children:e.name})})]})},ie=function(e){var t=e.messagesPage.users.map((function(e){return Object(k.jsx)(ae,{name:e.name,id:e.id,img:e.img},e.id)})),s=e.messagesPage.messages.map((function(e){return Object(k.jsx)(te,{message:e.message,id:e.id},e.id)}));return Object(k.jsxs)("div",{className:V.a.dialogs,children:[Object(k.jsx)("div",{className:V.a.dialogItem,children:t}),Object(k.jsxs)("div",{className:V.a.messages,children:[s,Object(k.jsx)("div",{children:Object(k.jsx)("textarea",{onChange:function(t){var s=t.currentTarget.value;e.onMessagePost(s)},value:e.messagesPage.newMessageText,rows:10,cols:44,placeholder:"Write your message"})}),Object(k.jsx)("div",{children:Object(k.jsx)("button",{disabled:""===e.messagesPage.newMessageText.trim(),onClick:function(){e.addMessage()},children:"Add message"})})]})]})},ce=s(6),re=s(50),oe=function(e){return{isAuth:e.auth.isAuth}};function le(e){return Object(ce.b)(oe)((function(t){var s=t.isAuth,n=Object(re.a)(t,["isAuth"]);return s?Object(k.jsx)(e,Object(l.a)({},n)):Object(k.jsx)(D.a,{to:"/login"})}))}var ue=Object(r.c)(Object(ce.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{addMessage:function(){e({type:"ADD_MESSAGE"})},onMessagePost:function(t){e(f(t||""))}}})),le)(ie),je=s(12),de=s(13),ge=s(15),be=s(14),pe=s(26),Oe=s.n(pe),he=s.p+"static/media/user.00d92f05.png",fe=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize)/200,s=[],n=1;n<=t;n++)s.push(n);return Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{children:s.map((function(t){return Object(k.jsx)("span",{className:e.currentPage===t?Oe.a.selectedPage:"",onClick:function(){e.onPageChanged(t)},children:t},t)}))}),e.users.map((function(t){return Object(k.jsxs)("div",{children:[Object(k.jsxs)("span",{children:[Object(k.jsx)("div",{children:Object(k.jsx)(C.b,{to:"/profile/"+t.id,children:Object(k.jsx)("img",{src:null!==t.photos.small?t.photos.small:he,className:Oe.a.userPhoto,alt:"photo"})})}),Object(k.jsx)("div",{children:t.followed?Object(k.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(k.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(k.jsxs)("span",{children:[Object(k.jsxs)("span",{children:[Object(k.jsx)("div",{children:t.name}),Object(k.jsx)("div",{children:t.status})]}),Object(k.jsxs)("span",{children:[Object(k.jsx)("div",{children:"m.location.country"}),Object(k.jsx)("div",{children:"m.location.city"})]})]})]},t.id)}))]})},me=s.p+"static/media/preloader.1952935e.gif",xe=s(48),ve=s.n(xe),_e=function(){return Object(k.jsx)("div",{children:Object(k.jsx)("img",{src:me,className:ve.a.preloader,alt:"preloader"})})},Pe=function(e){Object(ge.a)(s,e);var t=Object(be.a)(s);function s(){var e;Object(je.a)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(de.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(k.jsxs)(k.Fragment,{children:[this.props.isFetching?Object(k.jsx)(_e,{}):null,Object(k.jsx)(fe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.followSuccess,unfollow:this.props.unfollowSuccess,followingInProgress:this.props.followingInProgress,toggleFollowingProgress:this.props.toggleFollowingProgress})]})}}]),s}(a.a.Component),we=Object(r.c)(Object(ce.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{followSuccess:v,unfollowSuccess:function(e){return{type:"UNFOLLOW",userID:e}},setCurrentPage:function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},toggleFollowingProgress:P,getUsers:function(e,t){return function(s){s(_(!0)),d(e,t).then((function(e){s(_(!1)),s({type:"SET-USERS",users:e.items}),s({type:"SET-TOTAL-USERS-COUNT",count:e.totalCount})}))}}}),le)(Pe),Te=s(49),Ne=s.n(Te),Se=s(18),Ee=s.n(Se),Ie=s.p+"static/media/avatar_for_profile.e4c1e159.jpg",ye=function(e){return Object(k.jsxs)("div",{className:Ee.a.profile,children:[Object(k.jsx)("div",{className:Ee.a.ground,children:Object(k.jsx)("img",{src:"https://img.lovepik.com/photo/50066/7884.jpg_wh860.jpg",alt:"fon image",title:"fon image"})}),Object(k.jsxs)("div",{className:Ee.a.avatarBlock,children:[Object(k.jsx)("div",{className:Ee.a.avatar,children:Object(k.jsx)("img",{alt:"ava",src:e.profile&&null!==e.profile.photos.large?e.profile.photos.large:Ie})}),Object(k.jsx)("div",{children:"ava + description"})]})]})},Ae=s(27),Ce=s.n(Ae),ke=s(28),Ue=s.n(ke),Fe=function(e){return Object(k.jsxs)("div",{className:Ue.a.item,children:[Object(k.jsx)("img",{src:"https://slovami.net/wp-content/uploads/thumbs_dir/the-most-beautiful-guys-russia-4-1-nwkkkydf2f1mhw9a4ijzfs2ktasvevyjiyi4xibqis.jpg",alt:"ava",title:"ava"}),Object(k.jsxs)("div",{className:Ue.a.itemText,children:[e.message,Object(k.jsx)("div",{children:Object(k.jsxs)("span",{children:["like: ",e.likesCount]})})]})]},e.id)},Le=function(e){var t=e.profilePage.posts.map((function(e){return Object(k.jsx)(Fe,{message:e.message,likesCount:e.likesCount,id:e.id},e.id)}));return Object(k.jsxs)("div",{className:Ce.a.myPosts,children:[Object(k.jsx)("h3",{children:"My posts"}),Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{children:Object(k.jsx)("textarea",{onChange:function(t){var s=t.currentTarget.value;e.updateNewPostText(s)},value:e.profilePage.newPostText,placeholder:"Write your message"})}),Object(k.jsx)("div",{children:Object(k.jsx)("button",{disabled:""===e.profilePage.newPostText.trim(),onClick:function(){e.onAddPost()},children:"Add post"})})]}),Object(k.jsx)("div",{className:Ce.a.posts,children:t})]})},Me=Object(ce.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{onAddPost:function(){e({type:"ADD_POST"})},updateNewPostText:function(t){e(O(t||""))}}}))(Le),De=function(e){return Object(k.jsxs)("div",{className:Ne.a.profile,children:[Object(k.jsx)(ye,{profile:e.profile}),Object(k.jsx)(Me,{})]})},Ge=function(e){Object(ge.a)(s,e);var t=Object(be.a)(s);function s(){return Object(je.a)(this,s),t.apply(this,arguments)}return Object(de.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.userId;e||(e="2"),this.props.getUserProfile(+e)}},{key:"render",value:function(){return Object(k.jsx)(De,{profile:this.props.profile})}}]),s}(a.a.Component),Re=Object(r.c)(Object(ce.b)((function(e){return{profile:e.profilePage.profile,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){g(e).then((function(e){t({type:"SET-USER-PROFILE",profile:e.data})}))}}}),(function(e){return function(t){var s=Object(D.h)(),n=Object(D.f)();return Object(k.jsx)(e,Object(l.a)(Object(l.a)({},t),{},{userId:s.userId,location:n}))}}),le)(Ge),We=s(29),He=s.n(We),ze=s.p+"static/media/logo.cbfad428.png",Be=function(e){return Object(k.jsxs)("header",{className:He.a.header,children:[Object(k.jsx)("img",{src:ze,alt:"logo",title:"image logo"}),Object(k.jsx)("div",{className:He.a.loginBlock,children:e.isAuth?e.login:Object(k.jsx)(C.b,{to:"/login",children:"Login"})})]})},Xe=function(e){Object(ge.a)(s,e);var t=Object(be.a)(s);function s(){return Object(je.a)(this,s),t.apply(this,arguments)}return Object(de.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuthUserData()}},{key:"render",value:function(){return Object(k.jsx)(Be,{isAuth:this.props.isAuth,login:this.props.login})}}]),s}(a.a.Component),Ze=Object(ce.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.data.login}}),{getAuthUserData:function(){return function(e){b().then((function(t){if(0===t.data.resultCode){var s=t.data.data,n=s.id,a=s.email,i=s.login;e(function(e,t,s){return{type:"SET-USER-DATA",data:{userId:e,email:t,login:s}}}(n,a,i))}}))}}})(Xe),Ke=function(e){return Object(k.jsx)("h1",{children:"LOGIN"})};var Ye=function(){return Object(k.jsxs)("main",{className:I.a.appContent,children:[Object(k.jsx)(Ze,{}),Object(k.jsx)(U,{}),Object(k.jsx)("div",{className:I.a.appContentWindow,children:Object(k.jsxs)(D.d,{children:[Object(k.jsx)(D.b,{path:"/profile/",element:Object(k.jsx)(Re,{}),children:Object(k.jsx)(D.b,{path:":userId",element:Object(k.jsx)(Re,{})})}),Object(k.jsx)(D.b,{path:"/messages/",element:Object(k.jsx)(ue,{}),children:Object(k.jsx)(D.b,{path:":userId",element:Object(k.jsx)(ue,{})})}),Object(k.jsx)(D.b,{path:"/users/*",element:Object(k.jsx)(we,{})}),Object(k.jsx)(D.b,{path:"/news/*",element:Object(k.jsx)(W,{})}),Object(k.jsx)(D.b,{path:"/music/*",element:Object(k.jsx)(B,{})}),Object(k.jsx)(D.b,{path:"/settings/*",element:Object(k.jsx)(Q,{})}),Object(k.jsx)(D.b,{path:"/friends/*",element:Object(k.jsx)(K,{})}),Object(k.jsx)(D.b,{path:"/login",element:Object(k.jsx)(Ke,{})})]})}),Object(k.jsx)(M,{})]})};c.a.render(Object(k.jsx)(C.a,{children:Object(k.jsx)(ce.a,{store:S,children:Object(k.jsx)(Ye,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.39bffe6b.chunk.js.map