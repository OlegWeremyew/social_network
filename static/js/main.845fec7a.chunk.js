(this.webpackJsonpmyWayTypeScript=this.webpackJsonpmyWayTypeScript||[]).push([[0],{12:function(e,t,n){e.exports={nav:"Navbar_nav__1Fdz2",item:"Navbar_item__1onIf",activeLink:"Navbar_activeLink__f94mN"}},122:function(e,t,n){e.exports={footer:"Footer_footer__mhg74"}},123:function(e,t,n){e.exports={news:"News_news__37yFc"}},124:function(e,t,n){e.exports={music:"Music_music__JnEwt"}},125:function(e,t,n){e.exports={friends:"Friends_friends__2_1Vc"}},126:function(e,t,n){e.exports={settings:"Settings_settings__Wu77x"}},127:function(e,t,n){e.exports={message:"Message_message__1_lWt"}},128:function(e,t,n){e.exports={dialog:"DialogsItem_dialog__26p68"}},130:function(e,t,n){e.exports={preloader:"Preloader_preloader__3C5_j"}},131:function(e,t,n){e.exports={profile:"Profile_profile__3rowZ",ava:"Profile_ava__3qkus"}},162:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),r=n(59),a=n.n(r),c=(n(162),n(9)),o=n(31),u=n(3),l=n(119),j=n.n(l).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"f5a121b3-d5d2-4866-a73a-ab1418f0e4d8"}}),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return j.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},b=function(e){return j.get("profile/".concat(e))},p=function(e){return j.get("profile/status/".concat(e))},f=function(e){return j.put("profile/status",{status:e})},O=function(){return j.get("auth/me")},h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return j.post("auth/login",{email:e,password:t,rememberMe:n})},m=function(){return j.delete("auth/login")},g={posts:[{message:"Hello",likesCount:12,id:1},{message:"Dinosaurs are great",likesCount:17,id:2}],profile:null,status:""},x=function(e){return{type:"SET-STATUS",status:e}},v={users:[{name:"Oleg",id:1,img:"https://avatars.mds.yandex.net/get-zen_doc/3986249/pub_607ecd1d13c71c1ca8a34192_607ee065330a4f14d551104b/scale_1200"},{name:"Diana",id:2,img:"https://avatars.mds.yandex.net/i?id=64b380ea3aa0d80cad94cb1a24a3b3f5-4233014-images-thumbs&ref=rim&n=33&w=150&h=150"},{name:"Fat cat",id:3,img:"https://data.whicdn.com/images/310252363/original.jpg"},{name:"Dimka",id:4,img:"https://i.pinimg.com/originals/b7/44/46/b744464dd3d970ad96745be8de69d755.jpg"},{name:"Ella",id:5,img:"https://st.depositphotos.com/1023162/5099/i/950/depositphotos_50991807-stock-photo-sexy-woman-in-fashion-sunglasses.jpg"},{name:"Makar",id:6,img:"https://avatars.mds.yandex.net/i?id=55d09aa1629f72a149098b2c3127e039-5222024-images-thumbs&ref=rim&n=33&w=150&h=150"}],messages:[{message:"Hi",id:1},{message:"Ho",id:2},{message:"He",id:3},{message:"Hu",id:4},{message:"Hio",id:5},{message:"Hia",id:6}]},_={},S={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},P=function(e){return{type:"FOLLOW",userID:e}},w=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},y=function(e){return{type:"TOGGLE-IS-FETCHING",isFetching:e}},N=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-IN-PROGRESS",followingInProgress:e,userId:t}},I=n(33),A={data:{},isFetching:!0,isAuth:!1},T=function(e,t,n,s){return{type:"SET-USER-DATA",payload:{userId:e,email:t,login:n,isAuth:s}}},E=function(){return function(e){return O().then((function(t){if(0===t.data.resultCode){var n=t.data.data,s=n.id,i=n.email,r=n.login;e(T(s,i,r,!0))}}))}},C=n(121),U=n(118),k={initialized:!1},L=Object(c.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={id:(new Date).getTime(),message:t.newPostText,likesCount:12};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n])});case"DELETED_POST":return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SET-USER-PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});default:return e}},messagesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":var n={id:(new Date).getTime(),message:t.newMessageText};return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(o.a)(e.messages),[n])});default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;return e},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(u.a)(Object(u.a)({},e),{},{users:Object(o.a)(t.users)});case"SET-CURRENT-PAGE":return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(u.a)(Object(u.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE-IS-FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-FOLLOWING-IN-PROGRESS":return Object(u.a)(Object(u.a)({},e),{},{followingInProgress:t.followingInProgress?[].concat(Object(o.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(u.a)(Object(u.a)({},e),{},{data:Object(u.a)(Object(u.a)({},e.data),{},{email:t.payload.email,login:t.payload.login,userId:t.payload.userId}),isAuth:t.payload.isAuth});case"TOGGLE-IS-FETCHING":return Object(u.a)(Object(u.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE-IS-AUTH":return Object(u.a)(Object(u.a)({},e),{},{isAuth:t.isAuth});default:return e}},form:U.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-INITIALIZED":return Object(u.a)(Object(u.a)({},e),{},{initialized:!0});default:return e}}}),F=Object(c.e)(L,Object(c.a)(C.a)),D=n(19),M=n(20),G=n(22),z=n(21),R=n(81),W=n.n(R),H=n(12),q=n.n(H),B=n(11),J=n(0),Y=function(){return Object(J.jsxs)("nav",{className:q.a.nav,children:[Object(J.jsx)("div",{className:q.a.item,children:Object(J.jsx)(B.b,{className:function(e){return e.isActive?q.a.activeLink:""},to:"/profile",children:"Profile"})}),Object(J.jsx)("div",{className:"".concat(q.a.item," ").concat(q.a.active),children:Object(J.jsx)(B.b,{className:function(e){return e.isActive?q.a.activeLink:""},to:"/messages",children:"Message"})}),Object(J.jsx)("div",{className:"".concat(q.a.item," ").concat(q.a.active),children:Object(J.jsx)(B.b,{className:function(e){return e.isActive?q.a.activeLink:""},to:"/users",children:"Users"})}),Object(J.jsx)("div",{className:q.a.item,children:Object(J.jsx)(B.b,{className:function(e){return e.isActive?q.a.activeLink:""},to:"/news",children:"News"})}),Object(J.jsx)("div",{className:q.a.item,children:Object(J.jsx)(B.b,{className:function(e){return e.isActive?q.a.activeLink:""},to:"/music",children:"Music"})}),Object(J.jsx)("div",{className:q.a.item,children:Object(J.jsx)(B.b,{className:function(e){return e.isActive?q.a.activeLink:""},to:"/settings",children:"Settings"})}),Object(J.jsx)("div",{className:q.a.item,children:Object(J.jsx)(B.b,{className:function(e){return e.isActive?q.a.activeLink:""},to:"/friends",children:"Friends"})})]})},Z=n(122),K=n.n(Z),V=function(){return Object(J.jsx)("div",{className:K.a.footer,children:"Footer"})},X=n(7),Q=n(123),$=n.n(Q),ee=function(){return Object(J.jsx)("div",{className:$.a.news,children:"News"})},te=n(124),ne=n.n(te),se=function(){return Object(J.jsx)("div",{className:ne.a.music,children:"Music"})},ie=n(125),re=n.n(ie),ae=function(){return Object(J.jsx)("div",{className:re.a.friends,children:"Friends"})},ce=n(126),oe=n.n(ce),ue=function(){return Object(J.jsx)("div",{className:oe.a.settings,children:"Settings"})},le=n(62),je=n.n(le),de=n(127),be=n.n(de),pe=function(e){return Object(J.jsx)("div",{className:be.a.message,children:e.message})},fe=n(128),Oe=n.n(fe),he=function(e){var t="/messages/"+e.id;return Object(J.jsxs)("div",{className:Oe.a.dialog,children:[Object(J.jsx)("div",{children:Object(J.jsx)("img",{src:e.img})}),Object(J.jsx)("div",{children:Object(J.jsx)(B.b,{to:t,children:e.name})})]})},me=n(116),ge=n(117),xe=n(27),ve=n(47),_e=n.n(ve),Se=function(e){e.input;var t=e.meta,n=(e.child,e.element,Object(xe.a)(e,["input","meta","child","element"])),s=t.touched&&t.error,i=s?_e.a.error:"";return Object(J.jsxs)("div",{className:_e.a.formControl+" "+i,children:[Object(J.jsx)("div",{children:n.children}),Object(J.jsx)("div",{children:s&&Object(J.jsx)("span",{children:t.error})})]})},Pe=function(e){var t=e.input,n=(e.meta,e.child,e.element,Object(xe.a)(e,["input","meta","child","element"]));return Object(J.jsx)(Se,Object(u.a)(Object(u.a)({},e),{},{children:Object(J.jsx)("textarea",Object(u.a)(Object(u.a)({},t),n))}))},we=function(e){var t=e.input,n=(e.meta,e.child,e.element,Object(xe.a)(e,["input","meta","child","element"]));return Object(J.jsx)(Se,Object(u.a)(Object(u.a)({},e),{},{children:Object(J.jsx)("input",Object(u.a)(Object(u.a)({},t),n))}))},ye=function(e){if(!e)return"Field is required"},Ne=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}},Ie=Ne(30),Ae=Object(ge.a)({form:"dialogAddMessageForm"})((function(e){return Object(J.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(J.jsx)("div",{children:Object(J.jsx)(me.a,{component:Pe,name:"newMessageText",placeholder:"Write your message",validate:[ye,Ie]})}),Object(J.jsx)("div",{children:Object(J.jsx)("button",{children:"Add message"})})]})})),Te=n(10),Ee=function(e){return{isAuth:e.auth.isAuth}};function Ce(e){return Object(Te.b)(Ee)((function(t){var n=t.isAuth,s=Object(xe.a)(t,["isAuth"]);return n?Object(J.jsx)(e,Object(u.a)({},s)):Object(J.jsx)(X.a,{to:"/login"})}))}var Ue=Object(c.d)(Object(Te.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:"ADD_MESSAGE",newMessageText:e}}(t))}}})),Ce)((function(e){var t=e.messagesPage.users.map((function(e){return Object(J.jsx)(he,{name:e.name,id:e.id,img:e.img},e.id)})),n=e.messagesPage.messages.map((function(e){return Object(J.jsx)(pe,{message:e.message,id:e.id},e.id)}));return Object(J.jsxs)("div",{className:je.a.dialogs,children:[Object(J.jsx)("div",{className:je.a.dialogItem,children:t}),Object(J.jsx)("div",{className:je.a.messages,children:n}),Object(J.jsx)(Ae,{onSubmit:function(t){e.addMessage(t.newMessageText)}})]})})),ke=n(84),Le=n.n(ke),Fe=n.p+"static/media/user.00d92f05.png",De=function(e){for(var t=Math.ceil(e.totalUsersCount/e.pageSize)/200,n=[],s=1;s<=t;s++)n.push(s);return Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{children:n.map((function(t){return Object(J.jsx)("span",{className:e.currentPage===t?Le.a.selectedPage:"",onClick:function(){e.onPageChanged(t)},children:t},t)}))}),e.users.map((function(t){return Object(J.jsxs)("div",{children:[Object(J.jsxs)("span",{children:[Object(J.jsx)("div",{children:Object(J.jsx)(B.b,{to:"/profile/"+t.id,children:Object(J.jsx)("img",{src:null!==t.photos.small?t.photos.small:Fe,className:Le.a.userPhoto,alt:"photo"})})}),Object(J.jsx)("div",{children:t.followed?Object(J.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.unfollow(t.id)},children:"Unfollow"}):Object(J.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){e.follow(t.id)},children:"Follow"})})]}),Object(J.jsxs)("span",{children:[Object(J.jsxs)("span",{children:[Object(J.jsx)("div",{children:t.name}),Object(J.jsx)("div",{children:t.status})]}),Object(J.jsxs)("span",{children:[Object(J.jsx)("div",{children:"m.location.country"}),Object(J.jsx)("div",{children:"m.location.city"})]})]})]},t.id)}))]})},Me=n.p+"static/media/preloader.1952935e.gif",Ge=n(130),ze=n.n(Ge),Re=function(){return Object(J.jsx)("div",{children:Object(J.jsx)("img",{src:Me,className:ze.a.preloader,alt:"preloader"})})},We=n(132),He=Object(We.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),qe=function(e){return e.usersPage.pageSize},Be=function(e){return e.usersPage.totalUsersCount},Je=function(e){return e.usersPage.currentPage},Ye=function(e){return e.usersPage.isFetching},Ze=function(e){return e.usersPage.followingInProgress},Ke=function(e){Object(G.a)(n,e);var t=Object(z.a)(n);function n(){var e;Object(D.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){e.props.requestUsers(t,e.props.pageSize)},e}return Object(M.a)(n,[{key:"componentDidMount",value:function(){this.props.requestUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(J.jsxs)(J.Fragment,{children:[this.props.isFetching?Object(J.jsx)(Re,{}):null,Object(J.jsx)(De,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.followSuccess,unfollow:this.props.unfollowSuccess,followingInProgress:this.props.followingInProgress,toggleFollowingProgress:this.props.toggleFollowingProgress})]})}}]),n}(i.a.Component),Ve=Object(c.d)(Object(Te.b)((function(e){return{users:He(e),pageSize:qe(e),totalUsersCount:Be(e),currentPage:Je(e),isFetching:Ye(e),followingInProgress:Ze(e)}}),{followSuccess:P,unfollowSuccess:function(e){return{type:"UNFOLLOW",userID:e}},setCurrentPage:w,toggleFollowingProgress:N,requestUsers:function(e,t){return function(n){n(y(!0)),n(w(e)),d(e,t).then((function(e){n(y(!1)),n({type:"SET-USERS",users:e.items}),n({type:"SET-TOTAL-USERS-COUNT",count:e.totalCount})}))}}}))(Ke),Xe=n(131),Qe=n.n(Xe),$e=n(64),et=n.n($e),tt=n.p+"static/media/avatar_for_profile.e4c1e159.jpg",nt=n(23),st=function(e){var t=Object(s.useState)(!1),n=Object(nt.a)(t,2),i=n[0],r=n[1],a=Object(s.useState)(e.status),c=Object(nt.a)(a,2),o=c[0],u=c[1];Object(s.useEffect)((function(){u(e.status)}),[e.status]);return Object(J.jsxs)("div",{children:[!i&&Object(J.jsx)("div",{children:Object(J.jsx)("span",{onDoubleClick:function(){r(!0)},children:e.status||"------"})}),i&&Object(J.jsx)("div",{children:Object(J.jsx)("input",{onChange:function(t){return function(t){u(t.currentTarget.value),e.updateUserStatus(o)}(t)},autoFocus:!0,value:o,onBlur:function(){r(!1)}})})]})},it=function(e){return Object(J.jsx)("div",{className:et.a.profile,children:Object(J.jsxs)("div",{className:et.a.avatarBlock,children:[Object(J.jsx)("div",{className:et.a.avatar,children:Object(J.jsx)("img",{alt:"ava",src:e.profile&&null!==e.profile.photos.large?e.profile.photos.large:tt})}),Object(J.jsx)(st,{status:e.status,updateUserStatus:e.updateUserStatus})]})})},rt=n(85),at=n.n(rt),ct=n(86),ot=n.n(ct),ut=function(e){return Object(J.jsxs)("div",{className:ot.a.item,children:[Object(J.jsx)("img",{src:"https://slovami.net/wp-content/uploads/thumbs_dir/the-most-beautiful-guys-russia-4-1-nwkkkydf2f1mhw9a4ijzfs2ktasvevyjiyi4xibqis.jpg",alt:"ava",title:"ava"}),Object(J.jsxs)("div",{className:ot.a.itemText,children:[e.message,Object(J.jsx)("div",{children:Object(J.jsxs)("span",{children:["like: ",e.likesCount]})})]})]},e.id)},lt=Ne(10),jt=i.a.memo((function(e){var t=e.profilePage.posts.map((function(e){return Object(J.jsx)(ut,{message:e.message,likesCount:e.likesCount,id:e.id},e.id)}));return Object(J.jsxs)("div",{className:at.a.myPosts,children:[Object(J.jsx)("h3",{children:"My posts"}),Object(J.jsx)(dt,{onSubmit:function(t){e.onAddPost(t.AddNewPost)}}),Object(J.jsx)("div",{className:at.a.posts,children:t})]})})),dt=Object(ge.a)({form:"ProfileAddNewPostForm"})((function(e){return Object(J.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(J.jsx)("div",{children:Object(J.jsx)(me.a,{component:Pe,name:"AddNewPost",placeholder:"Write your message",validate:[ye,lt]})}),Object(J.jsx)("div",{children:Object(J.jsx)("button",{children:"Add post"})})]})})),bt=Object(Te.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{onAddPost:function(t){e(function(e){return{type:"ADD_POST",newPostText:e}}(t))}}}))(jt),pt=function(e){return Object(J.jsxs)("div",{className:Qe.a.profile,children:[Object(J.jsx)(it,{profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus}),Object(J.jsx)(bt,{})]})},ft=function(e){Object(G.a)(n,e);var t=Object(z.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(M.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.userId;e||(e=this.props.authorizedUserID)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return Object(J.jsx)(pt,{profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus})}}]),n}(i.a.Component),Ot=Object(c.d)(Object(Te.b)((function(e){return{profile:e.profilePage.profile,isAuth:e.auth.isAuth,status:e.profilePage.status,authorizedUserID:e.auth.data.userId}}),{getUserProfile:function(e){return function(t){b(e).then((function(e){t({type:"SET-USER-PROFILE",profile:e.data})}))}},getUserStatus:function(e){return function(t){p(e).then((function(e){t(x(e.data))}))}},updateUserStatus:function(e){return function(t){f(e).then((function(n){0===n.data.resultCode&&t(x(e))}))}}}),(function(e){return function(t){var n=Object(X.h)(),s=Object(X.f)();return Object(J.jsx)(e,Object(u.a)(Object(u.a)({},t),{},{userId:n.userId,location:s}))}}),Ce)(ft),ht=n(87),mt=n.n(ht),gt=n.p+"static/media/logo.cbfad428.png",xt=function(e){return Object(J.jsxs)("header",{className:mt.a.header,children:[Object(J.jsx)("img",{src:gt,alt:"logo",title:"image logo"}),Object(J.jsx)("div",{className:mt.a.loginBlock,children:e.isAuth?Object(J.jsxs)("div",{children:[e.login," - ",Object(J.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(J.jsx)(B.b,{to:"/login",children:"Login"})})]})},vt=function(e){Object(G.a)(n,e);var t=Object(z.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(M.a)(n,[{key:"render",value:function(){return Object(J.jsx)(xt,{isAuth:this.props.isAuth,login:this.props.login,logout:this.props.logout})}}]),n}(i.a.Component),_t=Object(Te.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.data.login}}),{logout:function(){return function(e){m().then((function(t){0===t.data.resultCode&&e(T("","","",!1))}))}}})(vt),St=function(e){var t=e.isAuth,n=e.login;Object(xe.a)(e,["isAuth","login"]);return t?Object(J.jsx)(X.a,{to:"/profile"}):Object(J.jsxs)("div",{children:[Object(J.jsx)("h1",{children:"LOGIN"}),Object(J.jsx)(Pt,{onSubmit:function(e){n(e.email,e.password,e.rememberMe)}})]})},Pt=Object(ge.a)({form:"Login"})((function(e){return Object(J.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(J.jsx)("div",{children:Object(J.jsx)(me.a,{placeholder:"Email",name:"email",component:we,validate:[ye]})}),Object(J.jsx)("div",{children:Object(J.jsx)(me.a,{placeholder:"Password",name:"password",type:"password",component:we,validate:[ye]})}),Object(J.jsxs)("div",{children:[Object(J.jsx)(me.a,{component:"input",name:"rememberMe",type:"checkbox"})," Remember me"]}),e.error&&Object(J.jsx)("div",{className:_e.a.formSummuryError,children:e.error}),Object(J.jsx)("div",{children:Object(J.jsx)("button",{children:"Login"})})]})})),wt=function(e){Object(G.a)(n,e);var t=Object(z.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(M.a)(n,[{key:"render",value:function(){return Object(J.jsx)(St,{isAuth:this.props.isAuth,login:this.props.login})}}]),n}(i.a.Component),yt=Object(Te.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(s){h(e,t,n).then((function(e){if(0===e.data.resultCode)s(E());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error";s(Object(I.a)("Login",{_error:t}))}}))}}})(wt),Nt=function(e){Object(G.a)(n,e);var t=Object(z.a)(n);function n(){return Object(D.a)(this,n),t.apply(this,arguments)}return Object(M.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(J.jsxs)("main",{className:W.a.appContent,children:[Object(J.jsx)(_t,{}),Object(J.jsx)(Y,{}),Object(J.jsx)("div",{className:W.a.appContentWindow,children:Object(J.jsxs)(X.d,{children:[Object(J.jsx)(X.b,{path:"/profile/",element:Object(J.jsx)(Ot,{}),children:Object(J.jsx)(X.b,{path:":userId",element:Object(J.jsx)(Ot,{})})}),Object(J.jsx)(X.b,{path:"/messages/",element:Object(J.jsx)(Ue,{}),children:Object(J.jsx)(X.b,{path:":userId",element:Object(J.jsx)(Ue,{})})}),Object(J.jsx)(X.b,{path:"/users/*",element:Object(J.jsx)(Ve,{})}),Object(J.jsx)(X.b,{path:"/news/*",element:Object(J.jsx)(ee,{})}),Object(J.jsx)(X.b,{path:"/music/*",element:Object(J.jsx)(se,{})}),Object(J.jsx)(X.b,{path:"/settings/*",element:Object(J.jsx)(ue,{})}),Object(J.jsx)(X.b,{path:"/friends/*",element:Object(J.jsx)(ae,{})}),Object(J.jsx)(X.b,{path:"/login",element:Object(J.jsx)(yt,{})})]})}),Object(J.jsx)(V,{})]}):Object(J.jsx)(Re,{})}}]),n}(i.a.Component),It=Object(Te.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(E());Promise.all([t]).then((function(){e({type:"SET-INITIALIZED"})}))}}})(Nt);a.a.render(Object(J.jsx)(B.a,{children:Object(J.jsx)(Te.a,{store:F,children:Object(J.jsx)(It,{})})}),document.getElementById("root"))},47:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3bb8c",error:"FormsControls_error__17NH9",formSummuryError:"FormsControls_formSummuryError__7wSbe"}},62:function(e,t,n){e.exports={dialogs:"Messages_dialogs__2a5ir",dialogItem:"Messages_dialogItem__1fljT",dialog:"Messages_dialog__amYKR"}},64:function(e,t,n){e.exports={ground:"ProfileInfo_ground__tDaWn",ava:"ProfileInfo_ava__9e5p9",avatar:"ProfileInfo_avatar__WJ8zq"}},81:function(e,t,n){e.exports={appContent:"App_appContent__4mg9X",appContentWindow:"App_appContentWindow__dnoS0"}},84:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__33a3z",selectedPage:"Users_selectedPage__3noiy"}},85:function(e,t,n){e.exports={myPosts:"MyPosts_myPosts__1Dxws",posts:"MyPosts_posts__1WTYZ"}},86:function(e,t,n){e.exports={item:"Post_item__3IYxb",itemText:"Post_itemText__rOuHO"}},87:function(e,t,n){e.exports={header:"Header_header__3WLj3",loginBlock:"Header_loginBlock__3D_es"}}},[[289,1,2]]]);
//# sourceMappingURL=main.845fec7a.chunk.js.map