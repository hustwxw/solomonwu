webpackJsonp([3],{"0sEc":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e("Tej3"),e("thjQ");var a=e("Quol"),i=e.n(a),r=e("7t+N"),n=e.n(r),o={name:"progeress",data:function(){return{map:{uedProgeressBasic:{flag:!1,html:['<div class="ued-progress-basic animate-tran">\n','  <div class="ued-progress-bar animate-tran" style="width:40%"></div>\n','  <div class="ued-progress-text">40%</div>\n',"</div>"].join(""),scriptText:""},uedProgeressNotxt:{flag:!1,html:['<div class="ued-progress-basic ued-progress-notext animate-tran">\n','  <div class="ued-progress-bar animate-tran" style="width:80%"></div>\n','  <div class="ued-progress-text">80%</div>\n',"</div>"].join(""),scriptText:""},uedProgeressDynamic:{flag:!1,html:['<div class="ued-progress-basic animate-tran">\n','  <div class="ued-progress-bar animate-tran" style="width:0%" id="dynamic"></div>\n','  <div class="ued-progress-text">0%</div>\n',"</div>"].join(""),scriptText:["进度条运行测试的脚本\n",'var bar = $("#dynamic");\n',"var text = bar.next();\n","var n = 0;\n","var flag = 0;\n","var handler = setInterval(() => {\n","  bar.width(`${n}%`);\n","  text.text(`${n}%`);\n","  if(n === 100){\n","    flag = -1;\n","  }\n","  if(n === 0){\n","    flag = 1;\n","  }\n","  if(flag === 1){n++;}\n","  if(flag === -1){n--;}\n","}, 200);\n"].join(""),script:function(){var t=n()("#dynamic"),s=t.next(),e=0,a=0;setInterval(function(){t.width(e+"%"),s.text(e+"%"),100===e&&(a=-1),0===e&&(a=1),1===a&&e++,-1===a&&e--},200)}}}}},methods:{view:function(t){for(var s in this.map)s!=t&&(this.map[s].flag=!1);this.map[t].flag?this.map[t].flag=!1:this.map[t].flag=!0},copy:function(t){var s=t.target.parentNode.getElementsByTagName("pre")[0].innerText;i()(s)}},mounted:function(){for(var t in this.$emit("hideHeaderAndLeft",{show:!0}),this.map)this.map[t].script&&this.map[t].script()}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"comein-fade"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[t._v("基础用法")]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.map.uedProgeressBasic.html)}}),t._v(" "),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.view("uedProgeressBasic")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedProgeressBasic.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),t._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),e("pre",{domProps:{textContent:t._s(t.map.uedProgeressBasic.html)}}),t._v(" "),t.map.uedProgeressBasic.scriptText?e("pre",{domProps:{textContent:t._s(t.map.uedProgeressBasic.scriptText)}}):t._e()])]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[t._v("无text用法")]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.map.uedProgeressNotxt.html)}}),t._v(" "),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.view("uedProgeressNotxt")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedProgeressNotxt.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),t._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),e("pre",{domProps:{textContent:t._s(t.map.uedProgeressNotxt.html)}}),t._v(" "),t.map.uedProgeressNotxt.scriptText?e("pre",{domProps:{textContent:t._s(t.map.uedProgeressNotxt.scriptText)}}):t._e()])]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[t._v("变化用法")]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.map.uedProgeressDynamic.html)}}),t._v(" "),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.view("uedProgeressDynamic")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedProgeressDynamic.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),t._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),e("pre",{domProps:{textContent:t._s(t.map.uedProgeressDynamic.html)}}),t._v(" "),t.map.uedProgeressDynamic.scriptText?e("pre",{domProps:{textContent:t._s(t.map.uedProgeressDynamic.scriptText)}}):t._e()])]):t._e()])])},staticRenderFns:[]};var d=e("VU/8")(o,c,!1,function(t){e("cuNf")},null,null);s.default=d.exports},cuNf:function(t,s){}});
//# sourceMappingURL=3.39b5c81cad096ee86e07.js.map