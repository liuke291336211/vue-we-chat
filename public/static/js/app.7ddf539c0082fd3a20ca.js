webpackJsonp([1],{"0DzJ":function(t,e){},"1dPb":function(t,e){},"9fVX":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("xd7I"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=s("C7Lr")({name:"App"},n,!1,function(t){s("cQZg")},null,null).exports,r=s("usm0"),c=s("4YfN"),o=s.n(c),l=s("R4Sj"),u={name:"Talk",components:{},computed:o()({},Object(l.b)(["friendInfo","userInfo","friendSockets"])),data:function(){return{preEditable:!1,chatContent:[]}},created:function(){},mounted:function(){this.sendMessageDiv=document.getElementById("sendMessage")},sockets:{chat:function(t){this.pushChatContentHandler(t,!1)},friendLogin:function(t){this.setUserFriend(t)}},methods:o()({sendChatMessage:function(){var t=this.sendMessageDiv.innerHTML;this.sendMessageDiv.innerHTML="",this.pushChatContentHandler(t,!0),this.$socket.emit("chat",{msg:t,socketId:this.friendSockets[this.friendInfo.userId]}),console.log("this.friendInfo.userId",this.friendInfo.userId,this.friendSockets)},pushChatContentHandler:function(t,e){this.chatContent.push({time:new Date,avatar:e?this.userInfo.avatar:this.friendInfo.avatar,message:t,isSend:e})}},Object(l.c)({setUserFriend:"SET_USER_FRIEND"})),watch:{friendInfo:{handler:function(t){this.chatContent=[]},deep:!0}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"wrapper",staticClass:"chat-box"},[s("div",{staticClass:"srcoll-wrapper"},t._l(t.chatContent,function(e){return s("div",{key:e.id},[s("div",{staticClass:"message",class:{you:!e.isSend,me:e.isSend}},[s("div",{staticClass:"message_system"},[s("div",{staticClass:"content"},[t._v(t._s(e.time))])]),t._v(" "),s("img",{staticClass:"avatar",attrs:{src:e.avatar}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"bubble",class:{right:e.isSend,left:!e.isSend,bubble_primary:e.isSend,bubble_default:!e.isSend}},[s("div",{staticClass:"bubble_cont"},[s("div",{staticClass:"plain"},[s("pre",{staticClass:"message_plain"},[t._v(t._s(e.message))]),t._v(" "),s("img",{staticClass:"ico_loading",attrs:{src:""}})])])])])])])}),0)]),t._v(" "),s("div",{staticClass:"footer"},[t._m(0),t._v(" "),s("div",{staticClass:"content"},[s("pre",{staticClass:"flex",attrs:{contenteditable:t.preEditable,id:"sendMessage"},on:{click:function(e){t.preEditable=!0}}})]),t._v(" "),s("div",{staticClass:"action"},[s("span",{staticClass:"desc"},[t._v("按下Cmd+Enter换行")]),t._v(" "),s("a",{staticClass:"btn btn_send",attrs:{href:"javascript:;"},on:{click:t.sendChatMessage}},[t._v("发送")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"toolbar"},[e("i",{staticClass:"emoji"}),this._v(" "),e("i",{staticClass:"screencut"}),this._v(" "),e("i",{staticClass:"file"})])}]};var f=s("C7Lr")(u,d,!1,function(t){s("1dPb")},"data-v-58c54149",null).exports,p={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var h=s("C7Lr")({name:"Public",data:function(){return{}}},p,!1,function(t){s("wEMj")},"data-v-5fae7a2a",null).exports,v={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var m=s("C7Lr")({name:"Contact",data:function(){return{}}},v,!1,function(t){s("tDZk")},"data-v-b8d4790a",null).exports,g={name:"Input",props:{tip:{type:String,default:""},type:{type:String,default:"text"}},data:function(){return{inputValue:"",isFocus:!1,tipString:"",placeholderStr:""}},created:function(){this.placeholderStr=this.tip,this.tipString=this.tip},methods:{focusHandler:function(){this.isFocus=!0,this.placeholderStr=""},blurHandler:function(){this.isFocus=!1,this.placeholderStr=this.tipString}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-wrapper"},[s("div",{staticClass:"content-wrapper"},["checkbox"===t.type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input",attrs:{placeholder:t.placeholderStr,type:"checkbox"},domProps:{checked:Array.isArray(t.inputValue)?t._i(t.inputValue,null)>-1:t.inputValue},on:{focus:t.focusHandler,blur:t.blurHandler,change:function(e){var s=t.inputValue,i=e.target,n=!!i.checked;if(Array.isArray(s)){var a=t._i(s,null);i.checked?a<0&&(t.inputValue=s.concat([null])):a>-1&&(t.inputValue=s.slice(0,a).concat(s.slice(a+1)))}else t.inputValue=n}}}):"radio"===t.type?s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input",attrs:{placeholder:t.placeholderStr,type:"radio"},domProps:{checked:t._q(t.inputValue,null)},on:{focus:t.focusHandler,blur:t.blurHandler,change:function(e){t.inputValue=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input",attrs:{placeholder:t.placeholderStr,type:t.type},domProps:{value:t.inputValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),t._v(" "),t.isFocus?s("div",{staticClass:"tips"},[t._v(t._s(t.tipString))]):t._e()]),t._v(" "),t.isFocus?s("div",{staticClass:"bottom-line-blue"}):s("div",{staticClass:"bottom-line-grey"})])},staticRenderFns:[]};var C=s("C7Lr")(g,_,!1,function(t){s("f7Kz")},"data-v-76682d77",null).exports,k={name:"Button",props:{text:{type:String,default:""},type:{type:String,default:"primary"},long:{type:String,default:"short"}},data:function(){return{}},methods:{btnClickHandler:function(){this.$emit("btnClick")}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"button-wrapper"},[s("button",{staticClass:"button",class:{long:"long"===t.long,"button-primary":"primary"===t.type,"button-submit":"submit"===t.type,"button-delete":"delete"===t.type},on:{click:t.btnClickHandler}},[s("span",{staticClass:"button-text"},[t._v(t._s(t.text))])])])},staticRenderFns:[]};var y=s("C7Lr")(k,b,!1,function(t){s("QjwS")},"data-v-397c79e4",null).exports,E={name:"Login",components:{MyInput:C,MyButton:y},data:function(){return{}},methods:{goRegister:function(){this.$emit("goRegister")},loginBtnClick:function(){this.$emit("loginBtnClick",{userEmail:this.$refs.email.inputValue,password:this.$refs.password.inputValue})}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form"},[e("div",{staticClass:"form-item"},[e("my-input",{ref:"email",attrs:{tip:"输入您的邮箱"}})],1),this._v(" "),e("div",{staticClass:"form-item"},[e("my-input",{ref:"password",attrs:{tip:"输入您的密码",type:"password"}})],1),this._v(" "),e("div",{staticClass:"form-item btn"},[e("my-button",{attrs:{text:"登录",type:"submit",long:"long"},on:{btnClick:this.loginBtnClick}})],1),this._v(" "),e("div",{staticClass:"form-item"},[e("div",{staticClass:"tip",on:{click:this.goRegister}},[this._v("没有账号?注册")])])])},staticRenderFns:[]};var I=s("C7Lr")(E,S,!1,function(t){s("QUqG")},"data-v-b6ff9396",null).exports,w={name:"Register",components:{MyInput:C,MyButton:y},data:function(){return{}},methods:{goLogin:function(){this.$emit("goLogin")},registerBtnClick:function(){var t={nickname:this.$refs.nickname.inputValue,userEmail:this.$refs.email.inputValue,password:this.$refs.password.inputValue};this.$emit("registerBtnClick",t)}}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form register"},[e("div",{staticClass:"form-item"},[e("my-input",{ref:"nickname",attrs:{tip:"输入您的昵称"}})],1),this._v(" "),e("div",{staticClass:"form-item"},[e("my-input",{ref:"email",attrs:{tip:"输入您的邮箱"}})],1),this._v(" "),e("div",{staticClass:"form-item"},[e("my-input",{ref:"password",attrs:{tip:"输入您的密码",type:"password"}})],1),this._v(" "),e("div",{staticClass:"form-item btn"},[e("my-button",{attrs:{text:"注册",type:"submit",long:"long"},on:{btnClick:this.registerBtnClick}})],1),this._v(" "),e("div",{staticClass:"form-item"},[e("div",{staticClass:"tip register-tip",on:{click:this.goLogin}},[this._v("返回登录")])])])},staticRenderFns:[]};var L,T,x=s("C7Lr")(w,R,!1,function(t){s("ljba")},"data-v-fc1693da",null).exports,$=s("3cXf"),F=s.n($),H=s("ZLEe"),U=s.n(H),D=s("KH7x"),A=s.n(D),V=s("rVsN"),B=s.n(V),N=s("a3Yh"),j=s.n(N),M={state:{userEmail:"",nickname:"",avatar:"",id:"",friends:{}},getters:{userInfo:function(t){return{nickname:t.nickname,userEmail:t.userEmail,avatar:t.avatar,id:t.id}},friendSockets:function(t){return t.friends}},mutations:(L={},j()(L,"SET_USER",function(t,e){t.userEmail=e.userEmail,t.nickname=e.nickname,t.avatar=e.avatar,t.id=e._id,e.friends.forEach(function(e){t.friends[e._id]=e.socketId})}),j()(L,"SET_USER_EMAIL",function(t,e){t.userEmail=e}),j()(L,"SET_USER_FRIEND",function(t,e){t.friends[e.userId]=e.socketId}),j()(L,"SET_USER_FRIENDS_LIST",function(t,e){e.forEach(function(e){t.friends[e._id]=e.socketId})}),L),actions:{}},O={state:{token:localStorage.getItem("token")},mutations:(T={},j()(T,"CREATE_TOKEN",function(t,e){t.token=e,localStorage.setItem("token",e)}),j()(T,"DELETE_TOKEN",function(t){localStorage.removeItem("token"),t.token=null}),T)},P={state:{nickname:"",userId:"",avatar:"",loginStatus:!1},mutations:j()({},"SAVE_FRIEND_INFO",function(t,e){t.nickname=e.nickname,t.socketId=e.socketId,t.userId=e._id,t.avatar=e.avatar,t.loginStatus=t.loginStatus}),getters:{friendInfo:function(t){return{nickname:t.nickname,userId:t.userId,avatar:t.avatar,loginStatus:t.loginStatus}}}};i.default.use(l.a);var z=new l.a.Store({modules:{user:M,token:O,friend:P},strict:!1});function q(t){return B.a.all([t.status,t.statusText,t.json()])}function K(t){var e=A()(t,3),s=e[0],i=e[1],n=e[2];if(s>=200&&s<=300)return n;401===s&&z.commit("DELETE_TOKEN");var a=new Error(i);return a.status=s,a.errorMessage=n,B.a.reject(a)}s("WK9f").polyfill(),s("BUcb");var Q=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=new Headers(s);i.append("Accept","application/json"),z.state.token.token&&i.append("Authorization","Bearer "+z.state.token.token);var n=[];return U()(e).forEach(function(t){n.push(t+"="+encodeURIComponent(e[t]))}),t="http://enable.dpdaidai.top:7001"+(t+=n.length?"?"+n.join("&"):""),fetch(t,{method:"GET",headers:i,credential:"include",cache:"default",mode:"cors"}).then(q).then(K)},Y=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=new Headers(s);i.append("Content-Type","application/json"),i.append("Accept","application/json"),z.state.token.token&&i.append("Authorization","Bearer "+z.state.token.token);var n={method:"POST",headers:i,credential:"include",mode:"cors",body:F()(e)};return t="http://enable.dpdaidai.top:7001"+t,fetch(t,n).then(q).then(K)},G=function(t){return Y("/api/register",t)},W=function(t){return Y("/api/login",t)},Z=function(){return Q("/api/user/info")},J=function(t){return Q("/api/user/find/"+t)},X=function(t,e){return Y("/api/request/add/"+t,e)},tt=function(t){return Y("/api/friend/add/"+t)},et={name:"Index",components:{Login:I,Register:x},data:function(){return{tipStr:{nickname:"输入您的昵称",userEmail:"输入您的邮箱",password:"输入您的密码"},formType:"login"}},methods:o()({registerHandler:function(t){var e=this;G(t).then(function(t){if(t.success){var s=t.msg.indexOf("成功")>-1?"success":"info";e.messageTipHandler(t.msg,s)}}).catch(function(t){e.messageTipHandler(t.errorMessage&&t.errorMessage.message,"error")})},loginHandler:function(t){var e=this;W(t).then(function(s){s.success&&("登录成功"===s.msg?(e.createToken(s.data.token),e.setUserEmail(t.userEmail),e.$router.push("/talk")):e.messageTipHandler(s.msg,"error"))}).catch(function(t){e.messageTipHandler(t.errorMessage.message,"error")})},messageTipHandler:function(t,e){this.$message({message:t,type:e})}},Object(l.c)({createToken:"CREATE_TOKEN",setUserEmail:"SET_USER_EMAIL"}))},st={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("div",{staticClass:"card"},[s("h2",{staticClass:"title"},[t._v("VUE-WE-CHAT")]),t._v(" "),"login"===t.formType?s("login",{on:{goRegister:function(e){t.formType="register"},loginBtnClick:t.loginHandler}}):s("register",{on:{goLogin:function(e){t.formType="login"},registerBtnClick:t.registerHandler}})],1)])},staticRenderFns:[]};var it=s("C7Lr")(et,st,!1,function(t){s("i/o/")},"data-v-1833a5a8",null).exports,nt={name:"card",props:{searchResult:{type:Array,default:function(){return[]}},user:{type:Object,default:function(){return{nickname:"",userEmail:"",avatar:""}}},show:Boolean},data:function(){return{imgUrl:""}},created:function(){this.imgUrl="http://bpic.588ku.com/element_origin_min_pic/17/06/23/f21e1f3b279c62d6f3469ca6c84e638f.jpg"},methods:{goPage:function(t){this.$emit("go",t)},searchInput:function(){this.$emit("input",event.target.value)},clickUserHandler:function(t,e){this.$emit("click",t,e)}}},at={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"header"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img",attrs:{src:t.user.avatar}})]),t._v(" "),s("div",{staticClass:"info"},[s("h3",{staticClass:"nickname"},[t._v(t._s(t.user.nickname))])])]),t._v(" "),s("div",{staticClass:"search"},[s("i",{staticClass:"search-icon"}),t._v(" "),s("input",{on:{input:t.searchInput}}),t._v(" "),t.show&&t.searchResult&&t.searchResult.length>0?s("div",{staticClass:"search-list"},[s("div",{staticClass:"list-wrapper"},t._l(t.searchResult,function(e,i){return s("div",{key:i,staticClass:"list-content"},[s("p",{staticClass:"list-title"},[t._v(t._s(e.value.length>0?e.type:"没有数据"))]),t._v(" "),t._l(e.value,function(e,i){return s("div",{key:i,staticClass:"item",on:{click:function(s){return t.clickUserHandler(e,"add")}}},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:e.avatar}})]),t._v(" "),s("div",{staticClass:"info"},[s("h4",{staticClass:"nickname"},[t._v(t._s(e.nickname))])])])})],2)}),0)]):t._e()]),t._v(" "),s("div",{staticClass:"tab"},[s("div",{staticClass:"tab-item",on:{click:function(e){return t.goPage("chat")}}},[s("i",{staticClass:"chat"})]),t._v(" "),s("div",{staticClass:"tab-item",on:{click:function(e){return t.goPage("public")}}},[s("i",{staticClass:"public"})]),t._v(" "),s("div",{staticClass:"tab-item",on:{click:function(e){return t.goPage("contact")}}},[s("i",{staticClass:"contact"})])])])},staticRenderFns:[]};var rt=s("C7Lr")(nt,at,!1,function(t){s("9fVX")},"data-v-41a11b5d",null).exports,ct=s("GRyI"),ot={name:"list",props:{lists:{type:Array,default:function(){return[]}},type:{type:String,default:"chat"},data:{type:Array,default:function(){return[]}},probeType:{type:Number,default:1},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},listenBeforeScroll:{type:Boolean,default:!1},listenScrollEnd:{type:Boolean,default:!1},direction:{type:String,default:"vertical"},scrollbar:{type:null,default:!1},pullDownRefresh:{type:null,default:!1},pullUpLoad:{type:null,default:!1},startY:{type:Number,default:0},refreshDelay:{type:Number,default:20},freeScroll:{type:Boolean,default:!1},mouseWheel:{type:Boolean,default:!1},bounce:{default:!0},zoom:{default:!1}},data:function(){return{scroll:""}},mounted:function(){var t=this;setTimeout(function(){t.initScroll()},20)},methods:{initScroll:function(){if(this.$refs.wrapper){var t={probeType:this.probeType,click:this.click,scrollY:this.freeScroll||"vertical"===this.direction,scrollX:this.freeScroll||"horizontal"===this.direction,scrollbar:this.scrollbar,pullDownRefresh:this.pullDownRefresh,pullUpLoad:this.pullUpLoad,startY:this.startY,freeScroll:this.freeScroll,mouseWheel:this.mouseWheel,bounce:this.bounce,zoom:this.zoom};this.scroll=new ct.a(this.$refs.wrapper,t)}},clickFriendHandler:function(t){this.$emit("click",t)}}},lt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"wrapper",staticClass:"list"},[s("div",{staticClass:"scroll-wrapper"},[s("p",{staticClass:"ico-loading"}),t._v(" "),"chat"===t.type?s("div",{staticClass:"chat"},[t.lists.length>0?s("div",t._l(t.lists,function(e,i){return s("div",{key:i,staticClass:"chat-item"},[s("div",{on:{click:function(s){return t.clickFriendHandler(e)}}},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img",attrs:{src:e.avatar}})]),t._v(" "),s("div",{staticClass:"info"},[s("h3",{staticClass:"nickname"},[s("span",{staticClass:"nickname-txt"},[t._v(t._s(e.nickname))])])])])])}),0):s("div",{staticClass:"no-data"},[t._v("\n        暂无数据\n      ")])]):t._e(),t._v(" "),"contact"===t.type?s("div",{staticClass:"contact"},t._l(t.lists,function(e,i){return s("div",{key:i,staticClass:"contact-list"},[s("div",{staticClass:"letter-item"},[s("h4",{staticClass:"contact-title"},[t._v("\n            "+t._s(e.letter)+"\n          ")])]),t._v(" "),t._l(e.contact,function(e,n){return s("div",{key:i+"-"+n,staticClass:"contact-item"},[s("div",{staticClass:"avatar"},[s("img",{staticClass:"img",attrs:{src:e.avatar}})]),t._v(" "),s("div",{staticClass:"info"},[s("h4",{staticClass:"nickname"},[t._v(t._s(e.nickname))])])])})],2)}),0):t._e()])])},staticRenderFns:[]};var ut={name:"Layout",components:{Card:rt,List:s("C7Lr")(ot,lt,!1,function(t){s("NaCQ")},"data-v-f4cac7bc",null).exports},computed:o()({},Object(l.b)(["userInfo"])),data:function(){return{user:{nickname:"",userEmail:"",avatar:""},dialog:{title:"",visible:!1,type:"",content:""},listType:"chat",contactList:[],listData:[],preEditable:!1,searchResult:[],selectUser:"",clickUserData:"",title:"",showSearchList:!1}},created:function(){this.getUserInfo()},sockets:{connect:function(t){this.socketId=this.$socket.id,console.log("connect server: socketId",this.socketId)},login:function(t){console.log("client receive messgae : login:  ",t)},addfriend:function(t){var e=this;console.log("client revice add friend request",t),this.$confirm(t.nickname+" 请求加你为好友，验证信息："+t.message,"添加好友请求",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){tt(t.userId).then(function(t){e.$message({message:"好友添加成功",type:"success"})})})},friends:function(t){this.listData=JSON.parse(F()(t)),this.setUserFriendsList(t),this.clickFriendList(this.listData[0])}},mounted:function(){},methods:o()({goPage:function(t){this.$emit("go",t)},getUserInfo:function(){var t=this;Z().then(function(e){e.success&&(t.setUserInfo(e.data.user),t.listData=e.data.user.friends,t.$socket.emit("login",e.data.user),t.clickFriendList(t.listData[0]))})},findUserList:function(t){var e=this;t?J(t).then(function(t){t.success&&(e.searchResult=t.data,e.showSearchList=!0)}):this.searchResult=[]},searchListClick:function(t,e){this.clickUserData=t,this.dialog.type=e,this.dialog.title="add"===e?"请填写验证信息":"",this.dialog.visible=!0,this.dialog.content=""},dialogCloseHandler:function(){this.clickUserData="",this.dialog.content=""},clickFriendList:function(t){t&&(this.saveFriendInfo(t),this.title=t.nickname)},sendAddFriendHandler:function(){var t=this;this.dialog.visible=!1,this.showSearchList=!1,X(this.clickUserData._id,{message:this.dialog.content}).then(function(e){e.success&&t.$message({type:"success",message:e.msg})})}},Object(l.c)({setUserInfo:"SET_USER",saveFriendInfo:"SAVE_FRIEND_INFO",setUserFriendsList:"SET_USER_FRIENDS_LIST"}))},dt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"layout"},[s("div",{staticClass:"content-wrapper"},[s("div",{staticClass:"panel"},[s("card",{attrs:{user:t.userInfo,show:t.showSearchList,searchResult:t.searchResult},on:{go:t.goPage,input:t.findUserList,click:t.searchListClick}}),t._v(" "),s("list",{attrs:{lists:t.listData,type:t.listType},on:{click:t.clickFriendList}})],1),t._v(" "),s("div",{staticClass:"box"},[s("div",{staticClass:"box-header"},[s("div",{staticClass:"title-wrap"},[s("div",{staticClass:"title"},[t._v(t._s(t.title))])])]),t._v(" "),s("div",{staticClass:"box-body"},[s("router-view")],1),t._v(" "),s("div",{staticClass:"box-footer"},[t._t("footer")],2)])]),t._v(" "),s("el-dialog",{attrs:{title:t.dialog.title,visible:t.dialog.visible,width:"30%"},on:{"update:visible":function(e){return t.$set(t.dialog,"visible",e)},close:t.dialogCloseHandler}},[s("p",[t._v("添加\n      "),s("span",{staticStyle:{"font-weight":"bolder","font-size":"18px"}},[t._v(t._s(t.clickUserData.nickname))]),t._v("\n      为好友\n    ")]),t._v(" "),s("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.dialog.content,callback:function(e){t.$set(t.dialog,"content",e)},expression:"dialog.content"}}),t._v(" "),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(e){t.dialog.visible=!1}}},[t._v("取 消")]),t._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:t.sendAddFriendHandler}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var ft=s("C7Lr")(ut,dt,!1,function(t){s("0DzJ")},"data-v-7a06d674",null).exports;i.default.use(r.a);var pt=new r.a({routes:[{path:"/",component:ft,redirect:"/talk",children:[{path:"talk",name:"talk",component:f,meta:{requireAuth:!0}},{path:"/public",name:"public",component:h,meta:{requireAuth:!0}},{path:"/contact",name:"contact",component:m,meta:{requireAuth:!0}}]},{path:"/index",name:"index",component:it}]}),ht=s("Gir3"),vt=s.n(ht),mt=(s("hsAa"),s("EhIl")),gt=s.n(mt);i.default.use(vt.a),i.default.use(l.a),i.default.use(gt.a,"http://enable.dpdaidai.top:7001"),i.default.config.productionTip=!1,pt.beforeEach(function(t,e,s){t.meta.requireAuth?z.state.token.token?s():s({path:"/index"}):s()}),new i.default({el:"#app",router:pt,store:z,components:{App:a},template:"<App/>"})},NaCQ:function(t,e){},QUqG:function(t,e){},QjwS:function(t,e){},cQZg:function(t,e){},f7Kz:function(t,e){},hsAa:function(t,e){},"i/o/":function(t,e){},ljba:function(t,e){},tDZk:function(t,e){},wEMj:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7ddf539c0082fd3a20ca.js.map