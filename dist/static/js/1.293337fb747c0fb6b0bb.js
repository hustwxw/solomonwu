webpackJsonp([1],{Ntyz:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("Tej3"),s("thjQ");var n={name:"login",data:function(){return{labelPosition:"right",username:"hustwxw",password:"hustwxw"}},methods:{login:function(){var e=this;return e.$router.push({path:"/desc/index"}),!1},reset:function(){this.username="",this.password=""}},mounted:function(){this.$emit("hideHeaderAndLeft",{hide:!0})}},r={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login_wrap"},[s("p",{staticClass:"title"},[e._v("登录")]),e._v(" "),s("el-form",{attrs:{"label-position":e.labelPosition,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"用户名"}},[s("el-input",{model:{value:e.username,callback:function(t){e.username=t},expression:"username"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码"}},[s("el-input",{attrs:{type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.reset}},[e._v("重置")])],1)],1),e._v(" "),s("p",[e._v("推荐使用IE11+/chrome/firfox等浏览器访问本站")])],1)},staticRenderFns:[]};var a=s("VU/8")(n,r,!1,function(e){s("W5T5")},"data-v-caf2f4b6",null);t.default=a.exports},W5T5:function(e,t){}});
//# sourceMappingURL=1.293337fb747c0fb6b0bb.js.map