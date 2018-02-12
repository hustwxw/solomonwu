import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = r => require.ensure([], () => r(require('@/page/login')), 'login_page');
const desc = r => require.ensure([], () => r(require('@/page/desc/desc')), 'desc_input');
const nofound = r => require.ensure([], () => r(require('@/page/nofound')), 'nofound_page');
const form_input = r => require.ensure([], () => r(require('@/page/content/form/input')), 'content_form_input');
const form_radio = r => require.ensure([], () => r(require('@/page/content/form/radio')), 'content_form_radio');
const form_checkbox = r => require.ensure([], () => r(require('@/page/content/form/checkbox')), 'content_form_checkbox');
const basic_button = r => require.ensure([], () => r(require('@/page/content/basic/button')), 'content_basic_button');
const basic_box = r => require.ensure([], () => r(require('@/page/content/basic/box')), 'content_basic_box');

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
      path: '/basic/box',
      name: 'basic_box',
      component: basic_box
    },
    {
      path: '/form/input',
      name: 'form_input',
      component: form_input
    },
    {
      path: '/form/radio',
      name: 'form_radio',
      component: form_radio
    },
    {
      path: '/form/checkbox',
      name: 'form_checkbox',
      component: form_checkbox
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
