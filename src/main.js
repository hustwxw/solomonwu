// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

import vuex from '@/vuex/index.js'

import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件

Vue.directive('highlight',function (el) {
// debugger
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:vuex.store,
  router,
  components: { App },
  template: '<App/>'
})
