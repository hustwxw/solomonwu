webpackJsonp([15],{S8W0:function(t,e){},eVyP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("thjQ");var l=a("Quol"),n=a.n(l),s={name:"formCheckbox",data:function(){return{model:"",num:1,val:"",dataArr:[{value:"test1",label:"test1"},{value:"test2",label:"test2"},{value:"test3",label:"test3"}],map:{elementInput:{flag:!1,html:["\x3c!-- clearable: 可清除属性 boolean; maxlength: 输入框最大的输入长度 number; --\x3e",'<el-input placeholder="设定最大输入长度输入框" v-model="model" :clearable="true" :maxlength="50"/>'],scriptText:["export default{","\tdata() {","\t\treturn {",'        \tmodel: "",',"      \t};","    }","}"].join("\n")},elementTextarea:{flag:!1,html:['\x3c!-- clearable: 可清除属性 boolean; maxlength: 输入框最大的输入长度 number; autosize: 自适应内容高度，只对 type="textarea" 有效 --\x3e','<el-input type="textarea" :maxlength="200" :autosize="{ minRows: 2, maxRows: 4}" placeholder="文本域textarea" v-model="model" :clearable="true"/>'],scriptText:["export default{","\tdata() {","\t\treturn {",'        \tmodel: "",',"      \t};","    }","}"].join("\n")},elementInputnum:{flag:!1,html:["\x3c!-- min: 最小值 number; max: 最大值 number --\x3e",'<el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" ></el-input-number>'],scriptText:["export default{","\tdata() {","\t\treturn {",'        \tnum: "",',"      \t};","    }","\tmethods: {","      handleChange(value) {","        console.log(value);","      }","    }","}"].join("\n")},elementSelect:{flag:!1,html:['<el-select v-model="val" placeholder="请选择" :clearable="true">',"    <el-option",'      v-for="item in dataArr"','      :key="item.value"','      :label="item.label"','      :value="item.value">',"    </el-option>","</el-select>"],scriptText:["export default{","\tdata() {","\t\treturn {",'        \tval: "",',"\t\t\tdataArr: [{",'\t\t      \tvalue: "test1",','\t\t      \tlabel: "test1"',"\t\t    },{",'\t\t      \tvalue: "test2",','\t\t      \tlabel: "test2"',"\t\t    },{",'\t\t      \tvalue: "test3",','\t\t      \tlabel: "test3"',"\t\t    }]","      \t};","    }","\tmethods: {","      handleChange(value) {","        console.log(value);","      }","    }","}"].join("\n")}}}},methods:{view:function(t){for(var e in this.map)e!=t&&(this.map[e].flag=!1);this.map[t].flag?this.map[t].flag=!1:this.map[t].flag=!0},handleChange:function(t){console.log(t)},copy:function(t){var e=t.target.parentNode.getElementsByTagName("pre")[0].innerText;n()(e)}},mounted:function(){for(var t in this.$emit("hideHeaderAndLeft",{show:!0}),this.map)this.map[t].script&&this.map[t].script()}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"comein-fade"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"c-row"},[a("p",{staticClass:"title"},[t._v("官方地址链接")]),t._v(" "),a("div",[a("a",{attrs:{href:"http://element-cn.eleme.io/#/zh-CN/component/installation"}},[t._v("http://element-cn.eleme.io/#/zh-CN/component/installation")])])]),t._v(" "),a("div",{staticClass:"c-row"},[a("p",{staticClass:"title"},[t._v("element UI 安装")]),t._v(" "),a("div",[a("p",[t._v("npm install element-ui -s")]),t._v(" "),a("p",[t._v("( 备注：此安装方式仅适用于vue框架下安装，其他框架的具体引入方式参考官网 )")])])]),t._v(" "),a("div",{staticClass:"row"},[a("span",{staticClass:"ued-tag-basic"},[t._v("输入框")]),t._v(" "),a("span",[a("el-input",{attrs:{placeholder:"设定最大输入长度输入框",clearable:!0,maxlength:50},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),t._v(" "),a("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("elementInput")}}},[t._v("示例代码")])]),t._v(" "),t.map.elementInput.flag?a("div",{staticClass:"row"},[a("span",{staticClass:"ued-tag-basic"}),t._v(" "),a("div",{staticClass:"code"},[a("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),a("pre",{domProps:{textContent:t._s(t.map.elementInput.html.join("\n"))}}),t._v(" "),t.map.elementInput.scriptText?a("pre",{domProps:{textContent:t._s(t.map.elementInput.scriptText)}}):t._e()])]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("span",{staticClass:"ued-tag-basic"},[t._v("文本域输入框")]),t._v(" "),a("span",[a("el-input",{attrs:{type:"textarea",maxlength:200,autosize:{minRows:2,maxRows:4},placeholder:"文本域textarea",clearable:!0},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}})],1),t._v(" "),a("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("elementTextarea")}}},[t._v("示例代码")])]),t._v(" "),t.map.elementTextarea.flag?a("div",{staticClass:"row"},[a("span",{staticClass:"ued-tag-basic"}),t._v(" "),a("div",{staticClass:"code"},[a("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),a("pre",{domProps:{textContent:t._s(t.map.elementTextarea.html.join("\n"))}}),t._v(" "),t.map.elementTextarea.scriptText?a("pre",{domProps:{textContent:t._s(t.map.elementTextarea.scriptText)}}):t._e()])]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("span",{staticClass:"ued-tag-basic"},[t._v("计数器")]),t._v(" "),a("span",[a("el-input-number",{attrs:{"controls-position":"right",min:1},on:{change:t.handleChange},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),t._v(" "),a("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("elementInputnum")}}},[t._v("示例代码")])]),t._v(" "),t.map.elementInputnum.flag?a("div",{staticClass:"row"},[a("span",{staticClass:"ued-tag-basic"}),t._v(" "),a("div",{staticClass:"code"},[a("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),a("pre",{domProps:{textContent:t._s(t.map.elementInputnum.html.join("\n"))}}),t._v(" "),t.map.elementInputnum.scriptText?a("pre",{domProps:{textContent:t._s(t.map.elementInputnum.scriptText)}}):t._e()])]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("span",{staticClass:"ued-tag-basic"},[t._v("下拉框")]),t._v(" "),a("span",[a("el-select",{attrs:{placeholder:"请选择",clearable:!0},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}},t._l(t.dataArr,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),a("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("elementSelect")}}},[t._v("示例代码")])]),t._v(" "),t.map.elementSelect.flag?a("div",{staticClass:"row"},[a("span",{staticClass:"ued-tag-basic"}),t._v(" "),a("div",{staticClass:"code"},[a("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),a("pre",{domProps:{textContent:t._s(t.map.elementSelect.html.join("\n"))}}),t._v(" "),t.map.elementSelect.scriptText?a("pre",{domProps:{textContent:t._s(t.map.elementSelect.scriptText)}}):t._e()])]):t._e()])])},staticRenderFns:[]};var o=a("VU/8")(s,i,!1,function(t){a("S8W0")},"data-v-347c40ea",null);e.default=o.exports}});
//# sourceMappingURL=15.6663b36a80e43c85549e.js.map