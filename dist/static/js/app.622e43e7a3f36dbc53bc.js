webpackJsonp([17],{FKpS:function(e,n){},FPvj:function(e,n){},HsPh:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),r={name:"App",data:function(){return{showHeader:!1,showLeft:!1,menus:[{name:"说明",first:!0,second:!1,third:!1,hash:"#/desc/index",hover:!0},{name:"H5页面",first:!0,second:!1,third:!1,hash:"#/H5/static",hover:!1},{name:"重构页面脚手架",first:!0,second:!1,third:!1,hash:"#/RefreshCss/index",hover:!1},{name:"组件",first:!0,second:!1,third:!1,hover:!1,hash:"#/basic/button"},{name:"Basic",first:!1,second:!0,third:!1,hover:!1},{name:"按钮 Button",first:!1,second:!1,third:!0,hover:!1,hash:"#/basic/button"},{name:"盒子模型 Box",first:!1,second:!1,third:!0,hover:!1,hash:"#/basic/box"},{name:"Form",first:!1,second:!0,third:!1,hover:!1},{name:"单选框 Radio",first:!1,second:!1,third:!0,hover:!1,hash:"#/form/radio"},{name:"复选框 Checkbox",first:!1,second:!1,third:!0,hover:!1,hash:"#/form/checkbox"},{name:"输入框 Input",first:!1,second:!1,third:!0,hash:"#/form/input",hover:!1},{name:"Table",first:!1,second:!0,third:!1,hover:!1},{name:"普通表格 Table",first:!1,second:!1,third:!0,hover:!1,hash:"#/table/normalTable"},{name:"单选表格 TableRadio",first:!1,second:!1,third:!0,hover:!1,hash:"#/table/radioTable"},{name:"多选表格 checkTable",first:!1,second:!1,third:!0,hover:!1,hash:"#/table/checkTable"},{name:"Tips",first:!1,second:!0,third:!1,hover:!1},{name:"加载提示 Toast",first:!1,second:!1,third:!0,hover:!1,hash:"#/tips/toast"},{name:"SVG",first:!1,second:!0,third:!1,hover:!1},{name:"SVG动画",first:!1,second:!1,third:!0,hover:!1,hash:"#/svg/animate"}]}},methods:{hideHeaderAndLeft:function(e){e.hide&&(this.showHeader=!1,this.showLeft=!1),e.show&&(this.showHeader=!0,this.showLeft=!0)},nav:function(e){var n=e.target.getAttribute("index"),t=this.menus[n];if(1==t.second)return!1;location.hash=e.target.getAttribute("hash")||"#/nofound",this.menus.forEach(function(e,n){e.hover=!1}),t.hover=!0,1==t.third&&(this.menus[3].hover=!0)}}},a={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-container",{staticClass:"wrap"},[t("el-header",{directives:[{name:"show",rawName:"v-show",value:e.showHeader,expression:"showHeader"}],staticClass:"header"},[t("div",{staticClass:"logo"}),e._v(" "),t("span",{staticClass:"webname"},[e._v("用户体验中心")])]),e._v(" "),t("el-container",[t("el-aside",{directives:[{name:"show",rawName:"v-show",value:e.showLeft,expression:"showLeft"}],staticClass:"aside",attrs:{width:"16%"}},[t("ul",{staticClass:"menu_ul"},e._l(e.menus,function(n,o){return t("li",{class:{menu_li:!0,first:n.first,second:n.second,third:n.third,hover:n.hover},attrs:{index:o,hash:n.hash},on:{click:e.nav}},[e._v(e._s(n.name))])}))]),e._v(" "),t("el-main",[t("router-view",{on:{hideHeaderAndLeft:e.hideHeaderAndLeft}})],1)],1)],1)},staticRenderFns:[]};var i=t("VU/8")(r,a,!1,function(e){t("yUaf"),t("HsPh"),t("FKpS"),t("FPvj")},"data-v-803a8bb8",null).exports,s=t("/ocq");o.default.use(s.a);var h=new s.a({routes:[{path:"/",name:"login",component:function(e){return Promise.all([t.e(0),t.e(2)]).then(function(){return e(t("Ntyz"))}.bind(null,t)).catch(t.oe)}},{path:"/basic/button",name:"basic_button",component:function(e){return Promise.all([t.e(0),t.e(15)]).then(function(){return e(t("S2cp"))}.bind(null,t)).catch(t.oe)}},{path:"/basic/box",name:"basic_box",component:function(e){return Promise.all([t.e(0),t.e(14)]).then(function(){return e(t("MXuG"))}.bind(null,t)).catch(t.oe)}},{path:"/form/input",name:"form_input",component:function(e){return Promise.all([t.e(0),t.e(7)]).then(function(){return e(t("OaoR"))}.bind(null,t)).catch(t.oe)}},{path:"/form/radio",name:"form_radio",component:function(e){return Promise.all([t.e(0),t.e(3)]).then(function(){return e(t("v5Uk"))}.bind(null,t)).catch(t.oe)}},{path:"/form/checkbox",name:"form_checkbox",component:function(e){return Promise.all([t.e(0),t.e(5)]).then(function(){return e(t("c07h"))}.bind(null,t)).catch(t.oe)}},{path:"/desc/index",name:"desc",component:function(e){return t.e(9).then(function(){return e(t("luOd"))}.bind(null,t)).catch(t.oe)}},{path:"/tips/toast",name:"toast",component:function(e){return Promise.all([t.e(0),t.e(4)]).then(function(){return e(t("Nnky"))}.bind(null,t)).catch(t.oe)}},{path:"/nofound",name:"nofound",component:function(e){return t.e(12).then(function(){return e(t("e9sF"))}.bind(null,t)).catch(t.oe)}},{path:"/H5/static",name:"H5static",component:function(e){return Promise.all([t.e(0),t.e(10)]).then(function(){return e(t("SQzv"))}.bind(null,t)).catch(t.oe)}},{path:"/table/normalTable",name:"normal_table",component:function(e){return Promise.all([t.e(0),t.e(13)]).then(function(){return e(t("eBBp"))}.bind(null,t)).catch(t.oe)}},{path:"/table/radioTable",name:"radio_table",component:function(e){return Promise.all([t.e(0),t.e(8)]).then(function(){return e(t("lJce"))}.bind(null,t)).catch(t.oe)}},{path:"/table/checkTable",name:"check_table",component:function(e){return Promise.all([t.e(0),t.e(11)]).then(function(){return e(t("rX/B"))}.bind(null,t)).catch(t.oe)}},{path:"/svg/animate",name:"svg_animate",component:function(e){return Promise.all([t.e(0),t.e(6)]).then(function(){return e(t("PuMm"))}.bind(null,t)).catch(t.oe)}},{path:"/RefreshCss/index",name:"refresh_index",component:function(e){return Promise.all([t.e(0),t.e(1)]).then(function(){return e(t("gTh1"))}.bind(null,t)).catch(t.oe)}}]}),c=t("zL8q"),u=t.n(c),d=(t("tvR6"),t("NYxO"));o.default.use(d.a);var l={store:new d.a.Store({state:{isLogin:!1,username:""},getters:{logined:function(e){return e.isLogin},username:function(e){return e.username}},mutations:{setLogined:function(e,n){e.isLogin=!0,e.username=n.username}},actions:{setLogined:function(e,n){e.commit("setLogined",n)}}})};o.default.config.productionTip=!1,o.default.use(u.a),new o.default({el:"#app",store:l.store,router:h,components:{App:i},template:"<App/>"})},tvR6:function(e,n){},yUaf:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.622e43e7a3f36dbc53bc.js.map