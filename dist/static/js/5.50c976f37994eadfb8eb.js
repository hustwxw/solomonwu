webpackJsonp([5],{MXuG:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("Tej3"),s("thjQ");var a=s("Quol"),i=s.n(a),n=(s("7t+N"),{name:"basicBox",data:function(){return{map:{uedBoxBasic:{flag:!1,html:'<div class="ued-box-basic">测试文字-无内外边距</div>',scriptText:"为了显示盒子模型，给盒子加上了颜色和边框颜色方便展示，实际使用不会有这些颜色。\n ued-box-basic默认宽高200px,如果不符合需求则需要自己调整宽高"},uedBoxPadding:{flag:!1,html:'<div class="ued-box-basic ued-box-padding">测试文字-有20px内边距</div>',scriptText:"ued-box-padding默认内边距20px，如不符合需求则需要自己调整"},uedBoxMargin:{flag:!1,html:'<div class="ued-box-basic ued-box-margin"><span>测试文字-有20px外边距</span></div>',scriptText:"ued-box-margin默认外边距20px，如不符合需求则需要自己调整"},uedFlexBasic:{flag:!1,html:['<div class="ued-flex-basic ued-flex-coloumn ued-flex-inline ">\n','  <div class="ued-flex-basic-title ued-flex-center">\n',"\t\t\ttitle\n","  </div>\n",'  <div class="ued-flex-inner">\n','    <div class="ued-flex-basic ued-flex-basic-left ued-flex-center">\n',"\t\t\t\tleft\n","    </div>\n",'    <div class="ued-flex-basic ued-flex-basic-right ued-flex-center">\n',"\t\t\t\tright\n","    </div>\n","  </div>\n","</div>"].join(""),scriptText:""},uedFlexRow:{flag:!1,html:['<div class="ued-flex-basic ued-flex-coloumn ued-flex-inline">\n','  <div class="ued-flex-row ued-flex-center">\n',"\t\t\t1\n","  </div>\n",'  <div class="ued-flex-row ued-flex-center">\n',"\t\t\t2\n","  </div>\n",'  <div class="ued-flex-row ued-flex-center">\n',"\t\t\t3\n","  </div>\n",'  <div class="ued-flex-row ued-flex-center">\n',"\t\t\t4\n","  </div>\n","</div>"].join(""),scriptText:""},uedFlexColumn:{flag:!1,html:['<div class="ued-flex-basic ued-flex-inline">\n','  <div class="ued-flex-row ued-flex-center">\n',"\t\t\t1\n","  </div>\n",'  <div class="ued-flex-row ued-flex-center">\n',"\t\t\t2\n","  </div>\n",'  <div class="ued-flex-row ued-flex-center">\n',"\t\t\t3\n","  </div>\n",'  <div class="ued-flex-row ued-flex-center">\n',"\t\t\t4\n","  </div>\n","</div>"].join(""),scriptText:""}}}},methods:{view:function(t){for(var e in this.map)e!=t&&(this.map[e].flag=!1);this.map[t].flag?this.map[t].flag=!1:this.map[t].flag=!0},copy:function(t){var e=t.target.parentNode.getElementsByTagName("pre")[0].innerText;i()(e)}},mounted:function(){for(var t in this.$emit("hideHeaderAndLeft",{show:!0}),this.map)this.map[t].script&&this.map[t].script()}}),d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"comein-fade"}},[s("div",{staticClass:"content"},[s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"},[t._v("盒子")]),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.map.uedBoxBasic.html)}}),t._v(" "),s("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedBoxBasic")}}},[t._v("示例代码")]),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.map.uedBoxPadding.html)}}),t._v(" "),s("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedBoxPadding")}}},[t._v("示例代码")]),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.map.uedBoxMargin.html)}}),t._v(" "),s("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedBoxMargin")}}},[t._v("示例代码")])]),t._v(" "),s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("div",{staticClass:"code"},[s("pre",[t._v(" ued-box-basic: 基础box样式 "),s("br"),t._v(" ued-box-padding: 默认内边距样式，20px "),s("br"),t._v(" ued-box-margin: 默认外边距样式，20px")])])]),t._v(" "),t.map.uedBoxBasic.flag?s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("div",{staticClass:"code"},[s("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),s("pre",{domProps:{textContent:t._s(t.map.uedBoxBasic.html)}}),t._v(" "),t.map.uedBoxBasic.scriptText?s("pre",{domProps:{textContent:t._s(t.map.uedBoxBasic.scriptText)}}):t._e()])]):t._e(),t._v(" "),t.map.uedBoxPadding.flag?s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("div",{staticClass:"code"},[s("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),s("pre",{domProps:{textContent:t._s(t.map.uedBoxPadding.html)}}),t._v(" "),t.map.uedBoxPadding.scriptText?s("pre",{domProps:{textContent:t._s(t.map.uedBoxPadding.scriptText)}}):t._e()])]):t._e(),t._v(" "),t.map.uedBoxMargin.flag?s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("div",{staticClass:"code"},[s("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),s("pre",{domProps:{textContent:t._s(t.map.uedBoxMargin.html)}}),t._v(" "),t.map.uedBoxMargin.scriptText?s("pre",{domProps:{textContent:t._s(t.map.uedBoxMargin.scriptText)}}):t._e()])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"},[t._v("Flex布局")]),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.map.uedFlexBasic.html)}}),t._v(" "),s("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedFlexBasic")}}},[t._v("示例代码")]),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.map.uedFlexRow.html)}}),t._v(" "),s("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedFlexRow")}}},[t._v("示例代码")]),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.map.uedFlexColumn.html)}}),t._v(" "),s("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedFlexColumn")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedFlexBasic.flag?s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("div",{staticClass:"code"},[s("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),s("pre",{domProps:{textContent:t._s(t.map.uedFlexBasic.html)}}),t._v(" "),t.map.uedFlexBasic.scriptText?s("pre",{domProps:{textContent:t._s(t.map.uedFlexBasic.scriptText)}}):t._e()])]):t._e(),t._v(" "),t.map.uedFlexRow.flag?s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("div",{staticClass:"code"},[s("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),s("pre",{domProps:{textContent:t._s(t.map.uedFlexRow.html)}}),t._v(" "),t.map.uedFlexRow.scriptText?s("pre",{domProps:{textContent:t._s(t.map.uedFlexRow.scriptText)}}):t._e()])]):t._e(),t._v(" "),t.map.uedFlexColumn.flag?s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("div",{staticClass:"code"},[s("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),s("pre",{domProps:{textContent:t._s(t.map.uedFlexColumn.html)}}),t._v(" "),t.map.uedFlexColumn.scriptText?s("pre",{domProps:{textContent:t._s(t.map.uedFlexColumn.scriptText)}}):t._e()])]):t._e()])])},staticRenderFns:[]};var c=s("VU/8")(n,d,!1,function(t){s("P834")},null,null);e.default=c.exports},P834:function(t,e){}});
//# sourceMappingURL=5.50c976f37994eadfb8eb.js.map