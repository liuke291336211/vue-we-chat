webpackJsonp([1],{GgMJ:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("xd7I"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=n("C7Lr")({name:"App"},i,!1,function(t){n("cQZg")},null,null).exports,r=n("usm0"),c=n("4YfN"),o=n.n(c),l=n("R4Sj"),u={name:"Talk",components:{},computed:o()({},Object(l.b)(["friendInfo","userInfo","friendSockets"])),data:function(){return{preEditable:!1,chatContent:[]}},created:function(){},mounted:function(){this.sendMessageDiv=document.getElementById("sendMessage")},sockets:{chat:function(t){this.pushChatContentHandler(t,!1)},friendLogin:function(t){this.setUserFriend(t)}},methods:o()({sendChatMessage:function(){var t=this.sendMessageDiv.innerHTML;this.sendMessageDiv.innerHTML="",this.pushChatContentHandler(t,!0),this.$socket.emit("chat",{msg:t,socketId:this.friendSockets[this.friendInfo.userId]})},pushChatContentHandler:function(t,e){this.chatContent.push({time:new Date,avatar:e?this.userInfo.avatar:this.friendInfo.avatar,message:t,isSend:e})}},Object(l.c)({setUserFriend:"SET_USER_FRIEND"})),watch:{friendInfo:{handler:function(t){this.chatContent=[]},deep:!0}}},d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{ref:"wrapper",staticClass:"chat-box"},[n("div",{staticClass:"srcoll-wrapper"},t._l(t.chatContent,function(e){return n("div",{key:e.id},[n("div",{staticClass:"message",class:{you:!e.isSend,me:e.isSend}},[n("div",{staticClass:"message_system"},[n("div",{staticClass:"content"},[t._v(t._s(e.time))])]),t._v(" "),n("img",{staticClass:"avatar",attrs:{src:e.avatar}}),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"bubble",class:{right:e.isSend,left:!e.isSend,bubble_primary:e.isSend,bubble_default:!e.isSend}},[n("div",{staticClass:"bubble_cont"},[n("div",{staticClass:"plain"},[n("pre",{staticClass:"message_plain"},[t._v(t._s(e.message))]),t._v(" "),n("img",{staticClass:"ico_loading",attrs:{src:""}})])])])])])])}),0)]),t._v(" "),n("div",{staticClass:"footer"},[t._m(0),t._v(" "),n("div",{staticClass:"content"},[n("pre",{staticClass:"flex",attrs:{contenteditable:t.preEditable,id:"sendMessage"},on:{click:function(e){t.preEditable=!0}}})]),t._v(" "),n("div",{staticClass:"action"},[n("span",{staticClass:"desc"},[t._v("按下Cmd+Enter换行")]),t._v(" "),n("a",{staticClass:"btn btn_send",attrs:{href:"javascript:;"},on:{click:t.sendChatMessage}},[t._v("发送")])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"toolbar"},[e("i",{staticClass:"emoji"}),this._v(" "),e("i",{staticClass:"screencut"}),this._v(" "),e("i",{staticClass:"file"})])}]};var f=n("C7Lr")(u,d,!1,function(t){n("jTUD")},"data-v-51fea1d3",null).exports,p={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var v=n("C7Lr")({name:"Public",data:function(){return{}}},p,!1,function(t){n("wEMj")},"data-v-5fae7a2a",null).exports,m={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var h=n("C7Lr")({name:"Contact",data:function(){return{}}},m,!1,function(t){n("tDZk")},"data-v-b8d4790a",null).exports,g={name:"Input",props:{tip:{type:String,default:""},type:{type:String,default:"text"}},data:function(){return{inputValue:"",isFocus:!1,tipString:"",placeholderStr:""}},created:function(){this.placeholderStr=this.tip,this.tipString=this.tip},methods:{focusHandler:function(){this.isFocus=!0,this.placeholderStr=""},blurHandler:function(){this.isFocus=!1,this.placeholderStr=this.tipString}}},C={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-wrapper"},[n("div",{staticClass:"content-wrapper"},["checkbox"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input",attrs:{placeholder:t.placeholderStr,type:"checkbox"},domProps:{checked:Array.isArray(t.inputValue)?t._i(t.inputValue,null)>-1:t.inputValue},on:{focus:t.focusHandler,blur:t.blurHandler,change:function(e){var n=t.inputValue,a=e.target,i=!!a.checked;if(Array.isArray(n)){var s=t._i(n,null);a.checked?s<0&&(t.inputValue=n.concat([null])):s>-1&&(t.inputValue=n.slice(0,s).concat(n.slice(s+1)))}else t.inputValue=i}}}):"radio"===t.type?n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input",attrs:{placeholder:t.placeholderStr,type:"radio"},domProps:{checked:t._q(t.inputValue,null)},on:{focus:t.focusHandler,blur:t.blurHandler,change:function(e){t.inputValue=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],staticClass:"input",attrs:{placeholder:t.placeholderStr,type:t.type},domProps:{value:t.inputValue},on:{focus:t.focusHandler,blur:t.blurHandler,input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),t._v(" "),t.isFocus?n("div",{staticClass:"tips"},[t._v(t._s(t.tipString))]):t._e()]),t._v(" "),t.isFocus?n("div",{staticClass:"bottom-line-blue"}):n("div",{staticClass:"bottom-line-grey"})])},staticRenderFns:[]};var _=n("C7Lr")(g,C,!1,function(t){n("f7Kz")},"data-v-76682d77",null).exports,k={name:"Button",props:{text:{type:String,default:""},type:{type:String,default:"primary"},long:{type:String,default:"short"}},data:function(){return{}},methods:{btnClickHandler:function(){this.$emit("btnClick")}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button-wrapper"},[n("button",{staticClass:"button",class:{long:"long"===t.long,"button-primary":"primary"===t.type,"button-submit":"submit"===t.type,"button-delete":"delete"===t.type},on:{click:t.btnClickHandler}},[n("span",{staticClass:"button-text"},[t._v(t._s(t.text))])])])},staticRenderFns:[]};var y=n("C7Lr")(k,b,!1,function(t){n("QjwS")},"data-v-397c79e4",null).exports,E={name:"Login",components:{MyInput:_,MyButton:y},data:function(){return{}},methods:{goRegister:function(){this.$emit("goRegister")},loginBtnClick:function(){this.$emit("loginBtnClick",{userEmail:this.$refs.email.inputValue,password:this.$refs.password.inputValue})}}},S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form"},[e("div",{staticClass:"form-item"},[e("my-input",{ref:"email",attrs:{tip:"输入您的邮箱"}})],1),this._v(" "),e("div",{staticClass:"form-item"},[e("my-input",{ref:"password",attrs:{tip:"输入您的密码",type:"password"}})],1),this._v(" "),e("div",{staticClass:"form-item btn"},[e("my-button",{attrs:{text:"登录",type:"submit",long:"long"},on:{btnClick:this.loginBtnClick}})],1),this._v(" "),e("div",{staticClass:"form-item"},[e("div",{staticClass:"tip",on:{click:this.goRegister}},[this._v("没有账号?注册")])])])},staticRenderFns:[]};var I=n("C7Lr")(E,S,!1,function(t){n("QUqG")},"data-v-b6ff9396",null).exports,w={name:"Register",components:{MyInput:_,MyButton:y},data:function(){return{}},methods:{goLogin:function(){this.$emit("goLogin")},registerBtnClick:function(){var t={nickname:this.$refs.nickname.inputValue,userEmail:this.$refs.email.inputValue,password:this.$refs.password.inputValue};this.$emit("registerBtnClick",t)}}},R={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form register"},[e("div",{staticClass:"form-item"},[e("my-input",{ref:"nickname",attrs:{tip:"输入您的昵称"}})],1),this._v(" "),e("div",{staticClass:"form-item"},[e("my-input",{ref:"email",attrs:{tip:"输入您的邮箱"}})],1),this._v(" "),e("div",{staticClass:"form-item"},[e("my-input",{ref:"password",attrs:{tip:"输入您的密码",type:"password"}})],1),this._v(" "),e("div",{staticClass:"form-item btn"},[e("my-button",{attrs:{text:"注册",type:"submit",long:"long"},on:{btnClick:this.registerBtnClick}})],1),this._v(" "),e("div",{staticClass:"form-item"},[e("div",{staticClass:"tip register-tip",on:{click:this.goLogin}},[this._v("返回登录")])])])},staticRenderFns:[]};var x,T,$=n("C7Lr")(w,R,!1,function(t){n("ljba")},"data-v-fc1693da",null).exports,L=n("3cXf"),H=n.n(L),U=n("ZLEe"),F=n.n(U),A=n("KH7x"),D=n.n(A),V=n("rVsN"),j=n.n(V),B=n("a3Yh"),M=n.n(B),N={state:{userEmail:"",nickname:"",avatar:"",id:"",friends:{}},getters:{userInfo:function(t){return{nickname:t.nickname,userEmail:t.userEmail,avatar:t.avatar,id:t.id}},friendSockets:function(t){return t.friends}},mutations:(x={},M()(x,"SET_USER",function(t,e){t.userEmail=e.userEmail,t.nickname=e.nickname,t.avatar=e.avatar,t.id=e._id,e.friends.forEach(function(e){t.friends[e._id]=e.socketId})}),M()(x,"SET_USER_EMAIL",function(t,e){t.userEmail=e}),M()(x,"SET_USER_FRIEND",function(t,e){t.friends[e.userId]=e.socketId}),x),actions:{}},O={state:{token:localStorage.getItem("token")},mutations:(T={},M()(T,"CREATE_TOKEN",function(t,e){t.token=e,localStorage.setItem("token",e)}),M()(T,"DELETE_TOKEN",function(t){localStorage.removeItem("token"),t.token=null}),T)},P={state:{nickname:"",userId:"",avatar:"",loginStatus:!1},mutations:M()({},"SAVE_FRIEND_INFO",function(t,e){t.nickname=e.nickname,t.socketId=e.socketId,t.userId=e._id,t.avatar=e.avatar,t.loginStatus=t.loginStatus}),getters:{friendInfo:function(t){return{nickname:t.nickname,userId:t.userId,avatar:t.avatar,loginStatus:t.loginStatus}}}};a.default.use(l.a);var q=new l.a.Store({modules:{user:N,token:O,friend:P},strict:!1});function z(t){return j.a.all([t.status,t.statusText,t.json()])}function K(t){var e=D()(t,3),n=e[0],a=e[1],i=e[2];if(n>=200&&n<=300)return i;401===n&&q.commit("DELETE_TOKEN");var s=new Error(a);return s.status=n,s.errorMessage=i,j.a.reject(s)}n("WK9f").polyfill(),n("BUcb"),console.log("NODE_ENV","production");var Q=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=new Headers(n);a.append("Accept","application/json"),q.state.token.token&&a.append("Authorization","Bearer "+q.state.token.token);var i=[];return F()(e).forEach(function(t){i.push(t+"="+encodeURIComponent(e[t]))}),t+=i.length?"?"+i.join("&"):"",t="http://enable.dpdaidai.top:7001/url",fetch(t,{method:"GET",headers:a,credential:"include",cache:"default",mode:"cors"}).then(z).then(K)},G=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=new Headers(n);a.append("Content-Type","application/json"),a.append("Accept","application/json"),q.state.token.token&&a.append("Authorization","Bearer "+q.state.token.token);var i={method:"POST",headers:a,credential:"include",mode:"cors",body:H()(e)};return t="http://enable.dpdaidai.top:7001/url",fetch(t,i).then(z).then(K)},Z=function(t){return G("/api/register",t)},Y=function(t){return G("/api/login",t)},W=function(){return Q("/api/user/info")},J=function(t){return Q("/api/user/find/"+t)},X=function(t,e){return G("/api/request/add/"+t,e)},tt=function(t){return G("/api/friend/add/"+t)},et={name:"Index",components:{Login:I,Register:$},data:function(){return{tipStr:{nickname:"输入您的昵称",userEmail:"输入您的邮箱",password:"输入您的密码"},formType:"login"}},methods:o()({registerHandler:function(t){var e=this;Z(t).then(function(t){if(console.log("register",t),t.success){var n=t.msg.indexOf("成功")>-1?"success":"info";e.messageTipHandler(t.msg,n)}}).catch(function(t){e.messageTipHandler(t.errorMessage&&t.errorMessage.message,"error")})},loginHandler:function(t){var e=this;Y(t).then(function(n){n.success&&("登录成功"===n.msg?(e.createToken(n.data.token),e.setUserEmail(t.userEmail),e.$router.push("/talk")):e.messageTipHandler(n.msg,"error"))}).catch(function(t){e.messageTipHandler(t.errorMessage.message,"error")})},messageTipHandler:function(t,e){this.$message({message:t,type:e})}},Object(l.c)({createToken:"CREATE_TOKEN",setUserEmail:"SET_USER_EMAIL"}))},nt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"card"},[n("h2",{staticClass:"title"},[t._v("VUE-WE-CHAT")]),t._v(" "),"login"===t.formType?n("login",{on:{goRegister:function(e){t.formType="register"},loginBtnClick:t.loginHandler}}):n("register",{on:{goLogin:function(e){t.formType="login"},registerBtnClick:t.registerHandler}})],1)])},staticRenderFns:[]};var at=n("C7Lr")(et,nt,!1,function(t){n("GgMJ")},"data-v-667737e7",null).exports,it="http://bpic.588ku.com/element_origin_min_pic/17/06/23/f21e1f3b279c62d6f3469ca6c84e638f.jpg",st={name:"card",props:{searchResult:{type:Array,default:function(){return[]}},user:{type:Object,default:function(){return{nickname:"",userEmail:"",avatar:""}}}},data:function(){return{imgUrl:""}},created:function(){this.imgUrl=it,console.log("searchResult",this.searchResult)},methods:{goPage:function(t){this.$emit("go",t)},searchInput:function(){this.$emit("input",event.target.value)},clickUserHandler:function(t,e){this.$emit("click",t,e)}}},rt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"header"},[n("div",{staticClass:"avatar"},[n("img",{staticClass:"img",attrs:{src:t.user.avatar}})]),t._v(" "),n("div",{staticClass:"info"},[n("h3",{staticClass:"nickname"},[t._v(t._s(t.user.nickname))])])]),t._v(" "),n("div",{staticClass:"search"},[n("i",{staticClass:"search-icon"}),t._v(" "),n("input",{on:{input:t.searchInput}}),t._v(" "),t.searchResult&&t.searchResult.length>0?n("div",{staticClass:"search-list"},[n("div",{staticClass:"list-wrapper"},t._l(t.searchResult,function(e,a){return n("div",{key:a,staticClass:"list-content"},[n("p",{staticClass:"list-title"},[t._v(t._s(e.value.length>0?e.type:"没有数据"))]),t._v(" "),t._l(e.value,function(e,a){return n("div",{key:a,staticClass:"item",on:{click:function(n){return t.clickUserHandler(e,"add")}}},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:e.avatar}})]),t._v(" "),n("div",{staticClass:"info"},[n("h4",{staticClass:"nickname"},[t._v(t._s(e.nickname))])])])})],2)}),0)]):t._e()]),t._v(" "),n("div",{staticClass:"tab"},[n("div",{staticClass:"tab-item",on:{click:function(e){return t.goPage("chat")}}},[n("i",{staticClass:"chat"})]),t._v(" "),n("div",{staticClass:"tab-item",on:{click:function(e){return t.goPage("public")}}},[n("i",{staticClass:"public"})]),t._v(" "),n("div",{staticClass:"tab-item",on:{click:function(e){return t.goPage("contact")}}},[n("i",{staticClass:"contact"})])])])},staticRenderFns:[]};var ct=n("C7Lr")(st,rt,!1,function(t){n("ixp0")},"data-v-e20d5326",null).exports,ot=n("GRyI"),lt={name:"list",props:{lists:{type:Array,default:function(){return[]}},type:{type:String,default:"chat"},data:{type:Array,default:function(){return[]}},probeType:{type:Number,default:1},click:{type:Boolean,default:!0},listenScroll:{type:Boolean,default:!1},listenBeforeScroll:{type:Boolean,default:!1},listenScrollEnd:{type:Boolean,default:!1},direction:{type:String,default:"vertical"},scrollbar:{type:null,default:!1},pullDownRefresh:{type:null,default:!1},pullUpLoad:{type:null,default:!1},startY:{type:Number,default:0},refreshDelay:{type:Number,default:20},freeScroll:{type:Boolean,default:!1},mouseWheel:{type:Boolean,default:!1},bounce:{default:!0},zoom:{default:!1}},data:function(){return{scroll:""}},mounted:function(){var t=this;setTimeout(function(){t.initScroll()},20)},methods:{initScroll:function(){if(this.$refs.wrapper){var t={probeType:this.probeType,click:this.click,scrollY:this.freeScroll||"vertical"===this.direction,scrollX:this.freeScroll||"horizontal"===this.direction,scrollbar:this.scrollbar,pullDownRefresh:this.pullDownRefresh,pullUpLoad:this.pullUpLoad,startY:this.startY,freeScroll:this.freeScroll,mouseWheel:this.mouseWheel,bounce:this.bounce,zoom:this.zoom};this.scroll=new ot.a(this.$refs.wrapper,t)}},clickFriendHandler:function(t){this.$emit("click",t)}}},ut={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"wrapper",staticClass:"list"},[n("div",{staticClass:"scroll-wrapper"},[n("p",{staticClass:"ico-loading"}),t._v(" "),"chat"===t.type?n("div",{staticClass:"chat"},[t.lists.length>0?n("div",t._l(t.lists,function(e,a){return n("div",{key:a,staticClass:"chat-item"},[n("div",{on:{click:function(n){return t.clickFriendHandler(e)}}},[n("div",{staticClass:"avatar"},[n("img",{staticClass:"img",attrs:{src:e.avatar}})]),t._v(" "),n("div",{staticClass:"info"},[n("h3",{staticClass:"nickname"},[n("span",{staticClass:"nickname-txt"},[t._v(t._s(e.nickname))])])])])])}),0):n("div",{staticClass:"no-data"},[t._v("\n        暂无数据\n      ")])]):t._e(),t._v(" "),"contact"===t.type?n("div",{staticClass:"contact"},t._l(t.lists,function(e,a){return n("div",{key:a,staticClass:"contact-list"},[n("div",{staticClass:"letter-item"},[n("h4",{staticClass:"contact-title"},[t._v("\n            "+t._s(e.letter)+"\n          ")])]),t._v(" "),t._l(e.contact,function(e,i){return n("div",{key:a+"-"+i,staticClass:"contact-item"},[n("div",{staticClass:"avatar"},[n("img",{staticClass:"img",attrs:{src:e.avatar}})]),t._v(" "),n("div",{staticClass:"info"},[n("h4",{staticClass:"nickname"},[t._v(t._s(e.nickname))])])])})],2)}),0):t._e()])])},staticRenderFns:[]};var dt={name:"Layout",components:{Card:ct,List:n("C7Lr")(lt,ut,!1,function(t){n("NaCQ")},"data-v-f4cac7bc",null).exports},computed:o()({},Object(l.b)(["userInfo"])),data:function(){return{user:{nickname:"",userEmail:"",avatar:""},dialog:{title:"",visible:!1,type:"",content:""},listType:"chat",contactList:[{letter:"A",contact:[{avatar:it,nickname:"呆呆"},{avatar:it,nickname:"呆呆"},{avatar:it,nickname:"呆呆"}]},{letter:"B",contact:[{avatar:it,nickname:"呆呆"},{avatar:it,nickname:"呆呆"},{avatar:it,nickname:"呆呆"}]},{letter:"C",contact:[{avatar:it,nickname:"呆呆"},{avatar:it,nickname:"呆呆"},{avatar:it,nickname:"呆呆"}]},{letter:"D",contact:[{avatar:it,nickname:"呆呆"},{avatar:it,nickname:"呆呆"},{avatar:it,nickname:"呆呆"}]}],listData:[],preEditable:!1,searchResult:[],selectUser:"",clickUserData:"",title:""}},created:function(){this.getUserInfo()},sockets:{connect:function(t){this.socketId=this.$socket.id,console.log("connect server: socketId",this.socketId)},login:function(t){console.log("client receive messgae : login:  ",t)},addfriend:function(t){var e=this;console.log("client revice add friend request",t),this.$confirm(t.nickname+" 请求加你为好友，验证信息："+t.message,"添加好友请求",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){tt(t.userId).then(function(t){e.$message({message:"好友添加成功",type:"success"})})})},friends:function(t){this.listData=t,console.log("friends list",t)}},mounted:function(){},methods:o()({goPage:function(t){this.$emit("go",t)},getUserInfo:function(){var t=this;W().then(function(e){e.success&&(t.setUserInfo(e.data.user),t.listData=e.data.user.friends,t.clickFriendList(t.listData[0]),t.$socket.emit("login",e.data.user))})},findUserList:function(t){var e=this;t?J(t).then(function(t){t.success&&(e.searchResult=t.data)}):this.searchResult=[]},searchListClick:function(t,e){this.clickUserData=t,this.dialog.type=e,this.dialog.title="add"===e?"请填写验证信息":"",this.dialog.visible=!0,this.dialog.content=""},dialogCloseHandler:function(){this.clickUserData="",this.dialog.content=""},clickFriendList:function(t){this.saveFriendInfo(t),this.title=t.nickname},sendAddFriendHandler:function(){var t=this;this.dialog.visible=!1,X(this.clickUserData._id,{message:this.dialog.content}).then(function(e){e.success&&t.$message({type:"success",message:e.msg})})}},Object(l.c)({setUserInfo:"SET_USER",saveFriendInfo:"SAVE_FRIEND_INFO"}))},ft={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"panel"},[n("card",{attrs:{user:t.userInfo,searchResult:t.searchResult},on:{go:t.goPage,input:t.findUserList,click:t.searchListClick}}),t._v(" "),n("list",{attrs:{lists:t.listData,type:t.listType},on:{click:t.clickFriendList}})],1),t._v(" "),n("div",{staticClass:"box"},[n("div",{staticClass:"box-header"},[n("div",{staticClass:"title-wrap"},[n("div",{staticClass:"title"},[t._v(t._s(t.title))])])]),t._v(" "),n("div",{staticClass:"box-body"},[n("router-view")],1),t._v(" "),n("div",{staticClass:"box-footer"},[t._t("footer")],2)])]),t._v(" "),n("el-dialog",{attrs:{title:t.dialog.title,visible:t.dialog.visible,width:"30%"},on:{"update:visible":function(e){return t.$set(t.dialog,"visible",e)},close:t.dialogCloseHandler}},[n("p",[t._v("添加\n      "),n("span",{staticStyle:{"font-weight":"bolder","font-size":"18px"}},[t._v(t._s(t.clickUserData.nickname))]),t._v("\n      为好友\n    ")]),t._v(" "),n("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:t.dialog.content,callback:function(e){t.$set(t.dialog,"content",e)},expression:"dialog.content"}}),t._v(" "),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialog.visible=!1}}},[t._v("取 消")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.sendAddFriendHandler}},[t._v("确 定")])],1)],1)],1)},staticRenderFns:[]};var pt=n("C7Lr")(dt,ft,!1,function(t){n("ZAno")},"data-v-98d0bf18",null).exports;a.default.use(r.a);var vt=new r.a({routes:[{path:"/",component:pt,redirect:"/talk",children:[{path:"talk",name:"talk",component:f,meta:{requireAuth:!0}},{path:"/public",name:"public",component:v,meta:{requireAuth:!0}},{path:"/contact",name:"contact",component:h,meta:{requireAuth:!0}}]},{path:"/index",name:"index",component:at}]}),mt=n("Gir3"),ht=n.n(mt),gt=(n("hsAa"),n("EhIl")),Ct=n.n(gt);a.default.use(ht.a),a.default.use(l.a),a.default.use(Ct.a,"http://enable.dpdaidai.top:7001"),a.default.config.productionTip=!1,vt.beforeEach(function(t,e,n){t.meta.requireAuth?q.state.token.token?n():n({path:"/index"}):n()}),new a.default({el:"#app",router:vt,store:q,components:{App:s},template:"<App/>"})},NaCQ:function(t,e){},QUqG:function(t,e){},QjwS:function(t,e){},ZAno:function(t,e){},cQZg:function(t,e){},f7Kz:function(t,e){},hsAa:function(t,e){},ixp0:function(t,e){},jTUD:function(t,e){},ljba:function(t,e){},tDZk:function(t,e){},wEMj:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.8be8171ecb02154fd5ab.js.map