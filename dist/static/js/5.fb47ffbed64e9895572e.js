webpackJsonp([5],{NjCO:function(t,o){},S2cp:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});s("Tej3"),s("thjQ");var n=s("Quol"),u=s.n(n),a=(s("7t+N"),{name:"basicButton",data:function(){return{map:{uedButtonBasic:{flag:!1,html:' <button class="ued-button-basic ued-button-color1">BUTTON</button> \n <button class="ued-button-basic ued-button-color2">BUTTON</button> \n <button class="ued-button-basic ued-button-color3">BUTTON</button> \n <button class="ued-button-basic ued-button-color4">BUTTON</button> \n <button class="ued-button-basic">BUTTON</button>',scriptText:"ued-button-color1到ued-button-color4是对应四种默认颜色，如果需要自定义颜色class请按照如下规则： \n     .selfcolor{ \n         color:white;/*字体颜色*/ \n         border:0px;/*border大小*/ \n         background-color: #0486FE;/*背景颜色*/ \n     }"},uedButtonEmpty:{flag:!1,html:' <button class="ued-button-empty ued-button-color1">BUTTON</button> \n <button class="ued-button-empty ued-button-color2">BUTTON</button> \n <button class="ued-button-empty ued-button-color3">BUTTON</button> \n <button class="ued-button-empty ued-button-color4">BUTTON</button> \n <button class="ued-button-empty ">BUTTON</button>',scriptText:"ued-button-color1到ued-button-color4是对应四种默认颜色，如果需要自定义颜色class请按照如下规则： \n     .selfcolor{ \n         color:#0486FE;/*字体颜色*/ \n         background-color: #E6F1FC;/*背景色*/ \n         border: 1px solid #A3D0FD;\t/*边框*/ \n     }"},uedButtonRound:{flag:!1,html:' <button class="ued-button-basic ued-button-round ued-button-color1">BUTTON</button> \n <button class="ued-button-basic ued-button-round ued-button-color2">BUTTON</button> \n <button class="ued-button-basic ued-button-round ued-button-color3">BUTTON</button> \n <button class="ued-button-basic ued-button-round ued-button-color4">BUTTON</button> \n <button class="ued-button-basic ued-button-round ">BUTTON</button>',scriptText:"ued-button-color1到ued-button-color4是对应四种默认颜色，如果需要自定义颜色class请按照如下规则： \n     .selfcolor{ \n         color:white;/*字体颜色*/ \n         border:0px;/*border大小*/ \n         background-color: #0486FE;/*背景颜色*/ \n     }"},uedButtonDisabledBasic:{flag:!1,html:' <button class="ued-button-basic ued-button-color1" disabled>BUTTON</button> \n <button class="ued-button-basic ued-button-color2" disabled>BUTTON</button> \n <button class="ued-button-basic ued-button-color3" disabled>BUTTON</button> \n <button class="ued-button-basic ued-button-color4" disabled>BUTTON</button> \n <button class="ued-button-basic" disabled>BUTTON</button>',scriptText:"ued-button-color1到ued-button-color4是对应四种默认颜色，如果需要自定义颜色class请按照如下规则： \n     .selfcolor{ \n         color:white;/*字体颜色*/ \n         border:0px;/*border大小*/ \n         background-color: #0486FE;/*背景颜色*/ \n     }"},uedButtonDisabledEmpty:{flag:!1,html:' <button class="ued-button-empty ued-button-color1" disabled>BUTTON</button> \n <button class="ued-button-empty ued-button-color2" disabled>BUTTON</button> \n <button class="ued-button-empty ued-button-color3" disabled>BUTTON</button> \n <button class="ued-button-empty ued-button-color4" disabled>BUTTON</button> \n <button class="ued-button-empty " disabled>BUTTON</button>',scriptText:"ued-button-color1到ued-button-color4是对应四种默认颜色，如果需要自定义颜色class请按照如下规则： \n     .selfcolor{ \n         color:#0486FE;/*字体颜色*/ \n         background-color: #E6F1FC;/*背景色*/ \n         border: 1px solid #A3D0FD;\t/*边框*/ \n     }"},uedButtonDisabledRound:{flag:!1,html:' <button class="ued-button-basic ued-button-round ued-button-color1" disabled>BUTTON</button> \n <button class="ued-button-basic ued-button-round ued-button-color2" disabled>BUTTON</button> \n <button class="ued-button-basic ued-button-round ued-button-color3" disabled>BUTTON</button> \n <button class="ued-button-basic ued-button-round ued-button-color4" disabled>BUTTON</button> \n <button class="ued-button-basic ued-button-round " disabled>BUTTON</button>',scriptText:"ued-button-color1到ued-button-color4是对应四种默认颜色，如果需要自定义颜色class请按照如下规则： \n     .selfcolor{ \n         color:white;/*字体颜色*/ \n         border:0px;/*border大小*/ \n         background-color: #0486FE;/*背景颜色*/ \n     }"},uedButtonText:{flag:!1,html:' <a href="javascript:void(0)" class="ued-button-text ued-button-style1">文字按钮</a> \n <a href="javascript:void(0)" class="ued-button-text ued-button-style2">文字按钮</a> \n <a href="javascript:void(0)" class="ued-button-text ued-button-style3">文字按钮</a> \n <a href="javascript:void(0)" class="ued-button-text ued-button-style4">文字按钮</a> \n <a href="javascript:void(0)" class="ued-button-text ued-button-style5" disabled>文字按钮</a>',scriptText:""}}}},methods:{view:function(t){for(var o in this.map)o!=t&&(this.map[o].flag=!1);this.map[t].flag?this.map[t].flag=!1:this.map[t].flag=!0},copy:function(t){var o=t.target.parentNode.getElementsByTagName("pre")[0].innerText;u()(o)}},mounted:function(){for(var t in this.$emit("hideHeaderAndLeft",{show:!0}),this.map)this.map[t].script&&this.map[t].script()}}),e={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("transition",{attrs:{name:"comein-fade"}},[s("div",{staticClass:"content"},[s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"},[t._v("基础按钮")]),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.map.uedButtonBasic.html)}}),t._v(" "),s("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(o){t.view("uedButtonBasic")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedButtonBasic.flag?s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("div",{staticClass:"code"},[s("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),s("pre",{domProps:{textContent:t._s(t.map.uedButtonBasic.html)}}),t._v(" "),t.map.uedButtonBasic.scriptText?s("pre",{domProps:{textContent:t._s(t.map.uedButtonBasic.scriptText)}}):t._e()])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.map.uedButtonEmpty.html)}}),t._v(" "),s("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(o){t.view("uedButtonEmpty")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedButtonEmpty.flag?s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("div",{staticClass:"code"},[s("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),s("pre",{domProps:{textContent:t._s(t.map.uedButtonEmpty.html)}}),t._v(" "),t.map.uedButtonEmpty.scriptText?s("pre",{domProps:{textContent:t._s(t.map.uedButtonEmpty.scriptText)}}):t._e()])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.map.uedButtonRound.html)}}),t._v(" "),s("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(o){t.view("uedButtonRound")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedButtonRound.flag?s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("div",{staticClass:"code"},[s("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),s("pre",{domProps:{textContent:t._s(t.map.uedButtonRound.html)}}),t._v(" "),t.map.uedButtonRound.scriptText?s("pre",{domProps:{textContent:t._s(t.map.uedButtonRound.scriptText)}}):t._e()])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"},[t._v("禁用按钮")]),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.map.uedButtonDisabledBasic.html)}}),t._v(" "),s("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(o){t.view("uedButtonDisabledBasic")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedButtonDisabledBasic.flag?s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("div",{staticClass:"code"},[s("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),s("pre",{domProps:{textContent:t._s(t.map.uedButtonDisabledBasic.html)}}),t._v(" "),t.map.uedButtonDisabledBasic.scriptText?s("pre",{domProps:{textContent:t._s(t.map.uedButtonDisabledBasic.scriptText)}}):t._e()])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.map.uedButtonDisabledEmpty.html)}}),t._v(" "),s("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(o){t.view("uedButtonDisabledEmpty")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedButtonDisabledEmpty.flag?s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("div",{staticClass:"code"},[s("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),s("pre",{domProps:{textContent:t._s(t.map.uedButtonDisabledEmpty.html)}}),t._v(" "),t.map.uedButtonDisabledEmpty.scriptText?s("pre",{domProps:{textContent:t._s(t.map.uedButtonDisabledEmpty.scriptText)}}):t._e()])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.map.uedButtonDisabledRound.html)}}),t._v(" "),s("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(o){t.view("uedButtonDisabledRound")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedButtonDisabledRound.flag?s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("div",{staticClass:"code"},[s("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),s("pre",{domProps:{textContent:t._s(t.map.uedButtonDisabledRound.html)}}),t._v(" "),t.map.uedButtonDisabledRound.scriptText?s("pre",{domProps:{textContent:t._s(t.map.uedButtonDisabledRound.scriptText)}}):t._e()])]):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"},[t._v("文字按钮")]),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.map.uedButtonText.html)}}),t._v(" "),s("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(o){t.view("uedButtonText")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedButtonText.flag?s("div",{staticClass:"row"},[s("span",{staticClass:"ued-tag-basic"}),t._v(" "),s("div",{staticClass:"code"},[s("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),s("pre",{domProps:{textContent:t._s(t.map.uedButtonText.html)}}),t._v(" "),t.map.uedButtonText.scriptText?s("pre",{domProps:{textContent:t._s(t.map.uedButtonText.scriptText)}}):t._e()])]):t._e()])])},staticRenderFns:[]};var d=s("VU/8")(a,e,!1,function(t){s("NjCO")},null,null);o.default=d.exports}});
//# sourceMappingURL=5.fb47ffbed64e9895572e.js.map