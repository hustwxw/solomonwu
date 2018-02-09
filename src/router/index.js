import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Login = r => require.ensure([], () => r(require('@/page/login')), 'login_page');
const desc = r => require.ensure([], () => r(require('@/page/desc/desc')), 'desc_input');
const nofound = r => require.ensure([], () => r(require('@/page/nofound')), 'nofound_page');
const form_input = r => require.ensure([], () => r(require('@/page/content/form/input')), 'content_form_input');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
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
      path: '*',
      name: 'nofound',
      component: nofound
    }
  ]
})
