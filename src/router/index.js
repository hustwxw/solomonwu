import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = r => require.ensure([], () => r(require('@/page/login')), 'login_page');
const desc = r => require.ensure([], () => r(require('@/page/desc/desc')), 'desc_input');
const nofound = r => require.ensure([], () => r(require('@/page/nofound')), 'nofound_page');
const form_input = r => require.ensure([], () => r(require('@/page/content/form/input')), 'content_form_input');
const basic_button = r => require.ensure([], () => r(require('@/page/content/basic/button')), 'content_basic_button');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/basic/button',
      name: 'basic_button',
      component: basic_button
    },
    {
      path: '/form/input',
      name: 'form_input',
      component: form_input
    },
    {
      path: '/desc/index',
      name: 'desc',
      component: desc
    },
    {
      path: '/nofound',
      name: 'nofound',
      component: nofound
    }
  ]
})
