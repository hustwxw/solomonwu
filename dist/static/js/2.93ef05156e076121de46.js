webpackJsonp([2],{"+LZX":function(t,e){},Nnky:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("Tej3"),a("thjQ");var i=a("Quol"),n=a.n(i),s=a("7t+N"),r=a.n(s),o={name:"tipsToast",data:function(){return{map:{uedTipsToast:{flag:!0,html:'<button class="ued-button-basic ued-button-color1 m_r_20" id="tosat1">点击弹出toast（H5版本或者PC高端浏览器，仿微信体验）</button><button class="ued-button-basic ued-button-color2" id="tosat2">点击弹出toast（兼容IE低版本）</button>',scriptText:'以下是按钮一toast的html代码:\n\n<div class="ued-tips-toast"> \n    <div class="ued-tips-toast-mask"></div> \n    <div class="ued-tips-toast-content"> \n        <i class="ued-tips-toast-loading ued-tips-toast-icon"></i> \n        <p class="ued-tips-toast-text">加载中</p> \n    </div> \n</div> \n\n以下是按钮二toast的html代码 \n\n<div class="ued-tips-loadingie"> \n    <div class="ued-tips-loading"></div> \n    <div class="ued-tips-loadingcontent"></div> \n    <p>加载中......</p> \n</div>'},uedTipsLoading:{flag:!1,html:'<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"> \n    <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"></path> \n    <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z" transform="rotate(150.342 20 20)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 20 20" to="360 20 20" dur="0.5s" repeatCount="indefinite"></animateTransform> \n    </path> \n</svg> \n \n<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> \n    <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z" transform="rotate(215.285 25 25)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </path> \n</svg> \n \n<svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> \n    <path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z" transform="rotate(75.2854 25 25)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </path> \n</svg> \n \n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="-12 -12 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> \n    <rect x="0" y="0" width="4" height="7" fill="#333" transform="scale(1 1.27461)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0s" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </rect> \n    <rect x="10" y="0" width="4" height="7" fill="#333" transform="scale(1 2.60794)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0.2s" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </rect> \n    <rect x="20" y="0" width="4" height="7" fill="#333" transform="scale(1 2.05873)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="scale" values="1,1; 1,3; 1,1" begin="0.4s" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </rect> \n</svg> \n \n <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="-10 -10 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> \n    <rect x="0" y="0" width="4" height="10" fill="#333" transform="translate(0 16.1428)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </rect> \n    <rect x="10" y="0" width="4" height="10" fill="#333" transform="translate(0 2.80949)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.2s" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </rect> \n    <rect x="20" y="0" width="4" height="10" fill="#333" transform="translate(0 10.5238)"> \n        <animateTransform attributeType="xml" attributeName="transform" type="translate" values="0 0; 0 20; 0 0" begin="0.4s" dur="0.6s" repeatCount="indefinite"></animateTransform> \n    </rect> \n</svg> \n \n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="-10 -10 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> \n    <rect x="0" y="5.20954" width="4" height="20.5809" fill="#333"> \n        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n    <rect x="10" y="9.20954" width="4" height="12.5809" fill="#333"> \n        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n    <rect x="20" y="12.7905" width="4" height="5.41908" fill="#333"> \n        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n</svg> \n \n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="-10 -10 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> \n    <rect x="0" y="0" width="4" height="20" fill="#333"> \n        <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n    <rect x="7" y="0" width="4" height="20" fill="#333"> \n        <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n    <rect x="14" y="0" width="4" height="20" fill="#333"> \n        <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n</svg> \n \n<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40px" height="40px" viewBox="-10 -10 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> \n    <rect x="0" y="7.64682" width="4" height="14.7064" fill="#333" opacity="0.2"> \n        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n    <rect x="8" y="5.14682" width="4" height="19.7064" fill="#333" opacity="0.2"> \n        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n    <rect x="16" y="7.35318" width="4" height="15.2936" fill="#333" opacity="0.2"> \n        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate> \n        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate> \n    </rect> \n</svg>'}}}},methods:{view:function(t){for(var e in this.map)e!=t&&(this.map[e].flag=!1);this.map[t].flag?this.map[t].flag=!1:this.map[t].flag=!0},copy:function(t){var e=t.target.parentNode.getElementsByTagName("pre")[0].innerText;n()(e)}},mounted:function(){for(var t in this.$emit("hideHeaderAndLeft",{show:!0}),this.map)this.map[t].script&&this.map[t].script();r()("#tosat1").on("click",function(){r()(".ued-tips-toast").remove();r()("body").append('<div class="ued-tips-toast">\n\t\t\t\t\t        <div class="ued-tips-toast-mask"></div>\n\t\t\t\t\t        <div class="ued-tips-toast-content">\n\t\t\t\t\t            <i class="ued-tips-toast-loading ued-tips-toast-icon"></i>\n\t\t\t\t\t            <p class="ued-tips-toast-text">加载中</p>\n\t\t\t\t\t        </div>\n\t\t\t\t\t    </div>'),setTimeout(function(){r()(".ued-tips-toast").remove()},1e3)}),r()("#tosat2").on("click",function(){r()(".ued-tips-loadingie").remove();r()("body").append('<div class="ued-tips-loadingie">\n\t\t\t\t\t\t\t<div class="ued-tips-loading"></div>\n\t\t\t\t\t\t\t<div class="ued-tips-loadingcontent"></div>\n\t\t\t\t\t\t\t<p>加载中......</p>\n\t\t\t\t\t\t</div>'),setTimeout(function(){r()(".ued-tips-loadingie").remove()},1e3)})}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"comein-fade"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"row"},[a("span",{staticClass:"ued-tag-basic"},[t._v("基础用法")]),a("span",{domProps:{innerHTML:t._s(t.map.uedTipsToast.html)}}),a("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedTipsToast")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedTipsToast.flag?a("div",{staticClass:"row"},[a("span",{staticClass:"ued-tag-basic"}),t._v(" "),a("div",{staticClass:"code"},[a("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),a("pre",{domProps:{textContent:t._s(t.map.uedTipsToast.html)}}),t._v(" "),t.map.uedTipsToast.scriptText?a("pre",{domProps:{textContent:t._s(t.map.uedTipsToast.scriptText)}}):t._e()])]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("span",{staticClass:"ued-tag-basic"},[t._v("SVG加载")]),a("span",{domProps:{innerHTML:t._s(t.map.uedTipsLoading.html)}}),a("a",{staticClass:"view",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.view("uedTipsLoading")}}},[t._v("示例代码")])]),t._v(" "),t.map.uedTipsLoading.flag?a("div",{staticClass:"row"},[a("span",{staticClass:"ued-tag-basic"}),t._v(" "),a("div",{staticClass:"code"},[a("input",{staticClass:"copy",attrs:{type:"button",value:"复制代码"},on:{click:t.copy}}),t._v(" "),a("pre",{domProps:{textContent:t._s(t.map.uedTipsLoading.html)}}),t._v(" "),t.map.uedTipsLoading.scriptText?a("pre",{domProps:{textContent:t._s(t.map.uedTipsLoading.scriptText)}}):t._e()])]):t._e()])])},staticRenderFns:[]};var u=a("VU/8")(o,p,!1,function(t){a("+LZX")},null,null);e.default=u.exports}});
//# sourceMappingURL=2.93ef05156e076121de46.js.map