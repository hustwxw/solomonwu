webpackJsonp([4],{"1xP6":function(t,s){},OaoR:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Tej3"),n=(e("thjQ"),e("Quol")),i=e.n(n),p=e("7t+N"),u=e.n(p),c={name:"formInput",data:function(){return{map:{uedInputBasic:{flag:!1,html:'<input type="text" class="ued-input-basic" placeholder="请输入内容">'},uedInputCalendar:{flag:!1,html:'<input type="text" class="ued-input-basic" placeholder="点击出现日历" id="calendar">',scriptText:"示例脚本： \n var initParam = { \n   input: $(\"#calendar\"), \n   isDoubleMonth: true, \n   zIndex: true, \n   minDate: '1990/01/01', \n   maxDate: '2050/12/31', \n }; \n new Calendar(initParam);",scriptHtml:'脚本依赖于jquery和<a href="http://underscorejs.org/underscore-min.js" target="_blank">underscore</a>两个库文件 \n\n >> <a href="https://hustwxw.github.io/solomonwu/src/lib/calendar.js" target="_blank">Calendar脚本下载</a>'},uedInputCity:{flag:!1,html:'<input type="text" class="ued-input-basic" placeholder="点击出现城市" id="city">',scriptText:'示例脚本： \n var initParam = { \n   input: $("#city"), \n   isShowHot: true, \n   isShowAll: true, \n   tab: ["ABCDEF", "GHIJ", "KLMN", "PQST", "WXYZ"], \n   width: 432, \n   onSelectCity: function(data) { \n     $(\'#city\').val(data.city + "(" + data.code + ")"); \n   }}; \n\n new Calendar(initParam);',scriptHtml:'脚本依赖于jquery和<a href="http://underscorejs.org/underscore-min.js" target="_blank">underscore</a>两个库文件 \n\n >> <a href="https://hustwxw.github.io/solomonwu/src/lib/city.js" target="_blank">city脚本下载</a>'},uedInputNoAllowed:{flag:!1,html:'<input type="text" class="ued-input-basic" disabled placeholder="内容" value="这里禁止输入">'},uedInputCompose:{flag:!1,html:'<div class="ued-input-compose" id="ued-input-compose" onselectstart="return false"> \n     <div class="ued-input-compose-tag">请选择<i></i></div> \n     <input type="text" class="ued-input-basic" placeholder="请输入内容"> \n     <ul class="none"> \n         <li>选项一</li> \n         <li>选项二</li> \n         <li>选项三</li> \n     </ul> \n</div>',script:function(){u()("#ued-input-compose .ued-input-compose-tag").on("click",function(){u()(this).parent().find("ul").hasClass("none")?u()(this).parent().find("ul").removeClass("none"):u()(this).parent().find("ul").addClass("none")}),u()("#ued-input-compose li").on("click",function(){u()(this).parent("ul").addClass("none"),u()("#ued-input-compose .ued-input-compose-tag").html(u()(this).html()+"<i></i>")})},scriptText:"示例脚本：\n $(\"#ued-input-compose .ued-input-compose-tag\").on(\"click\",function(){ \n     if($(this).parent().find('ul').hasClass('none')){ \n         $(this).parent().find('ul').removeClass('none') \n     }else{ \n         $(this).parent().find('ul').addClass('none') \n     } \n }); \n $(\"#ued-input-compose li\").on(\"click\",function(){ \n     $(this).parent(\"ul\").addClass('none'); \n     $(\"#ued-input-compose .ued-input-compose-tag\").html($(this).html() + \"<i></i>\"); \n });"},uedInputSelect:{flag:!1,html:'<div class="ued-input-basic ued-input-select" id="ued-input-select" onselectstart="return false">\n    <span>--请选择--</span>\n    <div class="ued-input-selectarrow"><i></i>\n    </div>\n    <ul class="none"> \n         <li>选项一</li> \n         <li>选项二</li> \n         <li>选项三</li> \n    </ul> \n</div>',script:function(){u()("#ued-input-select .ued-input-selectarrow").on("click",function(){u()(this).parent().find("ul").hasClass("none")?u()(this).parent().find("ul").removeClass("none"):u()(this).parent().find("ul").addClass("none")}),u()("#ued-input-select li").on("click",function(){u()(this).parent("ul").addClass("none"),u()("#ued-input-select span").html(u()(this).html())})},scriptText:"示例脚本：\n$(\"#ued-input-select .ued-input-selectarrow\").on(\"click\",function(){\n    if($(this).parent().find('ul').hasClass('none')){\n        $(this).parent().find('ul').removeClass('none')\n    }else{\n        $(this).parent().find('ul').addClass('none')\n    }\n});\n$(\"#ued-input-select li\").on(\"click\",function(){\n    $(this).parent(\"ul\").addClass('none');\n    $(\"#ued-input-select span\").html($(this).html());\n});"},uedInputComposeBg:{flag:!1,html:'<div class="ued-input-compose ued-input-compose_bg"> \n     <div class="ued-input-compose-tag">Http://</div> \n     <input type="text" class="ued-input-basic" placeholder="请输入内容"> \n</div>'},uedInputSuccess:{flag:!1,html:'<div class="ued-input-normal ued-input-success"> \n     <input type="text" class="ued-input-basic"><i></i> \n</div>',scriptText:"恢复正常输入框，可以去掉ued-input-success样式类即可"},uedInputError:{flag:!1,html:'<div class="ued-input-normal ued-input-error"> \n     <input type="text" class="ued-input-basic"><i></i> \n</div>',scriptText:"恢复正常输入框，可以去掉ued-input-error样式类即可"},uedInputTextarea:{flag:!1,html:'<textarea class="ued-input-basic ued-input-textarea"></textarea>'}}}},methods:{view:function(t){for(var s in this.map)s!=t&&(this.map[s].flag=!1);this.map[t].flag?this.map[t].flag=!1:this.map[t].flag=!0},copy:function(t){var s=t.target.parentNode.getElementsByTagName("pre")[0].innerText;i()(s)}},mounted:function(){for(var t in this.$emit("hideHeaderAndLeft",{show:!0}),this.map)this.map[t].script&&this.map[t].script();var s={input:u()("#calendar"),isDoubleMonth:!0,zIndex:!0,minDate:"1990/01/01",maxDate:"2050/12/31"};new a.a.calendar(s);var e={input:u()("#city"),isShowHot:!0,isShowAll:!0,tab:["ABCDEF","GHIJ","KLMN","PQST","WXYZ"],width:432,onSelectCity:function(t){u()("#city").val(t.city+"("+t.code+")")}};new a.a.city(e)}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"comein-fade"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[t._v("基础用法")]),e("span",{domProps:{innerHTML:t._s(t.map.uedInputBasic.html)}}),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.view("uedInputBasic")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedInputBasic.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),t._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),e("pre",{domProps:{textContent:t._s(t.map.uedInputBasic.html)}}),t._v(" "),t.map.uedInputBasic.scriptText?e("pre",{domProps:{textContent:t._s(t.map.uedInputBasic.scriptText)}}):t._e()])]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[t._v("下拉框")]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.map.uedInputSelect.html)}}),t._v(" "),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.view("uedInputSelect")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedInputSelect.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),t._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),e("pre",{domProps:{textContent:t._s(t.map.uedInputSelect.html)}}),t._v(" "),t.map.uedInputSelect.scriptText?e("pre",{domProps:{textContent:t._s(t.map.uedInputSelect.scriptText)}}):t._e()])]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[t._v("日历组件")]),e("span",{domProps:{innerHTML:t._s(t.map.uedInputCalendar.html)}}),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.view("uedInputCalendar")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedInputCalendar.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),t._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),e("pre",{domProps:{textContent:t._s(t.map.uedInputCalendar.html)}}),t._v(" "),t.map.uedInputCalendar.scriptText?e("pre",{domProps:{textContent:t._s(t.map.uedInputCalendar.scriptText)}}):t._e(),t._v(" "),t.map.uedInputCalendar.scriptHtml?e("pre",{domProps:{innerHTML:t._s(t.map.uedInputCalendar.scriptHtml)}}):t._e()])]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[t._v("城市组件")]),e("span",{domProps:{innerHTML:t._s(t.map.uedInputCity.html)}}),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.view("uedInputCity")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedInputCity.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),t._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),e("pre",{domProps:{textContent:t._s(t.map.uedInputCity.html)}}),t._v(" "),t.map.uedInputCity.scriptText?e("pre",{domProps:{textContent:t._s(t.map.uedInputCity.scriptText)}}):t._e(),t._v(" "),t.map.uedInputCity.scriptHtml?e("pre",{domProps:{innerHTML:t._s(t.map.uedInputCity.scriptHtml)}}):t._e()])]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[t._v("基础用法 -- 禁用")]),e("span",{domProps:{innerHTML:t._s(t.map.uedInputNoAllowed.html)}}),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.view("uedInputNoAllowed")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedInputNoAllowed.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),t._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),e("pre",{domProps:{textContent:t._s(t.map.uedInputNoAllowed.html)}}),t._v(" "),t.map.uedInputNoAllowed.scriptText?e("pre",{domProps:{textContent:t._s(t.map.uedInputNoAllowed.scriptText)}}):t._e()])]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[t._v("基础用法 -- 成功")]),e("span",{domProps:{innerHTML:t._s(t.map.uedInputSuccess.html)}}),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.view("uedInputSuccess")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedInputSuccess.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),t._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),e("pre",{domProps:{textContent:t._s(t.map.uedInputSuccess.html)}}),t._v(" "),t.map.uedInputSuccess.scriptText?e("pre",{domProps:{textContent:t._s(t.map.uedInputSuccess.scriptText)}}):t._e()])]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[t._v("基础用法 -- 错误")]),e("span",{domProps:{innerHTML:t._s(t.map.uedInputError.html)}}),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.view("uedInputError")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedInputError.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),t._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),e("pre",{domProps:{textContent:t._s(t.map.uedInputError.html)}}),t._v(" "),t.map.uedInputError.scriptText?e("pre",{domProps:{textContent:t._s(t.map.uedInputError.scriptText)}}):t._e()])]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[t._v("复合型输入框")]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.map.uedInputCompose.html)}}),t._v(" "),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.view("uedInputCompose")}}},[t._v("示例代码")]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.map.uedInputComposeBg.html)}}),t._v(" "),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.view("uedInputComposeBg")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedInputCompose.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),t._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),e("pre",{domProps:{textContent:t._s(t.map.uedInputCompose.html)}}),t._v(" "),t.map.uedInputCompose.scriptText?e("pre",{domProps:{textContent:t._s(t.map.uedInputCompose.scriptText)}}):t._e()])]):t._e(),t._v(" "),t.map.uedInputComposeBg.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),t._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),e("pre",{domProps:{textContent:t._s(t.map.uedInputComposeBg.html)}}),t._v(" "),t.map.uedInputComposeBg.scriptText?e("pre",{domProps:{textContent:t._s(t.map.uedInputComposeBg.scriptText)}}):t._e()])]):t._e(),t._v(" "),e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"},[t._v("文本域")]),t._v(" "),e("span",{domProps:{innerHTML:t._s(t.map.uedInputTextarea.html)}}),t._v(" "),e("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(s){t.view("uedInputTextarea")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedInputTextarea.flag?e("div",{staticClass:"row"},[e("span",{staticClass:"ued-tag-basic"}),t._v(" "),e("div",{staticClass:"code"},[e("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),e("pre",{domProps:{textContent:t._s(t.map.uedInputTextarea.html)}}),t._v(" "),t.map.uedInputTextarea.scriptText?e("pre",{domProps:{textContent:t._s(t.map.uedInputTextarea.scriptText)}}):t._e()])]):t._e()])])},staticRenderFns:[]};var l=e("VU/8")(c,o,!1,function(t){e("1xP6")},null,null);s.default=l.exports}});
//# sourceMappingURL=4.885c2aba182f4b2d5c45.js.map