webpackJsonp([4],{DPZh:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("bOdI"),n=i.n(a),o=(i("Tej3"),i("thjQ"),i("Quol")),s=i.n(o),r=(i("7t+N"),i("K/Iw")),l=i.n(r),c={name:"echart_bar",data:function(){return{map:{uedLineBasic:(t={color:["#3398DB"],tooltip:{show:!1},grid:{left:"3%",right:"4%",bottom:"8%",top:"15%",containLabel:!0}},n()(t,"tooltip",{show:!0}),n()(t,"xAxis",[{type:"category",data:["海南","首都","天津","香港","祥鹏","西部","福州","北部湾","乌航","金鹏","长安","桂林"],axisLabel:{formatter:function(t){return t.split("").join("\n")},fontSize:.2*window.FONTSIZE,color:"#999999",fontFamily:"PingFang Regular"},axisTick:{show:!1},axisLine:{show:!0,lineStyle:{color:"#dddddd"}}}]),n()(t,"yAxis",{type:"value",name:"直销额\n占比(%)",nameTextStyle:{fontSize:.2*window.FONTSIZE,color:"#999999",fontFamily:"PingFang Regular"},axisLabel:{fontSize:.2*window.FONTSIZE,color:"#999999",fontFamily:"PingFang Regular",formatter:function(t){return new Number(t).toFixed(1)}},axisLine:{show:!1},axisTick:{show:!1},min:0,max:1}),n()(t,"series",[{name:"收入",type:"line",barWidth:"60%",data:[100,520,200,334,390,330,10,52,200,334,390,330].map(function(t){return new Number(t/1e3*1.5).toFixed(2)}),label:{show:!0,position:"top",fontSize:.2*window.FONTSIZE,color:"#3a404c",fontFamily:"PingFang Regular"},itemStyle:{color:new echarts.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#0091ff"},{offset:1,color:"#00e4ff"}])}}]),e=t,{flag:!1,html:'<div class="block" id="basic"></div>',scriptText:l.a.plain(e),script:function(){echarts.init(document.getElementById("basic")).setOption(e)}}),uedLineHorizontal:function(){var t={normal:{position:"right"}},e={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:80,bottom:30},xAxis:{type:"value",splitLine:{lineStyle:{type:"dashed"}}},yAxis:{type:"category",axisLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},splitLine:{show:!1},data:["ten","nine","eight","seven","six","five","four","three","two","one"]},series:[{name:"生活费",type:"line",stack:"总量",label:{normal:{show:!0,formatter:"{b}"}},data:[{value:.07,label:t},{value:-.09,label:t},.2,.44,{value:-.23,label:t},.08,{value:-.17,label:t},.47,{value:-.36,label:t},.18]}]};return{flag:!1,html:'<div class="block" id="horizontal"></div>',scriptText:l.a.plain(e),script:function(){echarts.init(document.getElementById("horizontal")).setOption(e)}}}()}};var t,e},methods:{view:function(t){for(var e in this.map)e!=t&&(this.map[e].flag=!1);this.map[t].flag?this.map[t].flag=!1:this.map[t].flag=!0},copy:function(t){var e=t.target.parentNode.getElementsByTagName("pre")[1].innerText;s()(e),alert("复制成功")}},mounted:function(){for(var t in this.$emit("hideHeaderAndLeft",{show:!0}),this.map)this.map[t].script&&this.map[t].script()}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"comein-fade"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"row"},[i("span",{staticClass:"ued-tag-basic"},[t._v("基础用法")]),t._v(" "),i("span",{domProps:{innerHTML:t._s(t.map.uedLineBasic.html)}}),t._v(" "),i("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedLineBasic")}}},[t._v("示例代码")]),t._v(" "),i("span",{staticClass:"ued-tag-basic"},[t._v("横向用法")]),t._v(" "),i("span",{domProps:{innerHTML:t._s(t.map.uedLineHorizontal.html)}}),t._v(" "),i("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedLineHorizontal")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedLineBasic.flag?i("div",{staticClass:"row"},[i("span",{staticClass:"ued-tag-basic"}),t._v(" "),i("div",{staticClass:"code"},[i("input",{staticClass:"copy",attrs:{type:"button",value:"复制option"},on:{click:t.copy}}),t._v(" "),i("pre",{domProps:{textContent:t._s(t.map.uedLineBasic.html)}}),t._v("\n        optoin参数："),t.map.uedLineBasic.scriptText?i("pre",{domProps:{innerHTML:t._s(t.map.uedLineBasic.scriptText)}}):t._e()])]):t._e(),t._v(" "),t.map.uedLineHorizontal.flag?i("div",{staticClass:"row"},[i("span",{staticClass:"ued-tag-basic"}),t._v(" "),i("div",{staticClass:"code"},[i("input",{staticClass:"copy",attrs:{type:"button",value:"复制option"},on:{click:t.copy}}),t._v(" "),i("pre",{domProps:{textContent:t._s(t.map.uedLineHorizontal.html)}}),t._v("\n        optoin参数："),t.map.uedLineHorizontal.scriptText?i("pre",{domProps:{innerHTML:t._s(t.map.uedLineHorizontal.scriptText)}}):t._e()])]):t._e()])])},staticRenderFns:[]};var d=i("VU/8")(c,p,!1,function(t){i("zz4l")},null,null);e.default=d.exports},bOdI:function(t,e,i){"use strict";e.__esModule=!0;var a,n=i("C4MV"),o=(a=n)&&a.__esModule?a:{default:a};e.default=function(t,e,i){return e in t?(0,o.default)(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}},zz4l:function(t,e){}});
//# sourceMappingURL=4.611763daddfc8c40fc32.js.map