import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = r => require.ensure([], () => r(require('@/page/login')), 'login_page');
const desc = r => require.ensure([], () => r(require('@/page/desc/desc')), 'desc_input');
const nofound = r => require.ensure([], () => r(require('@/page/nofound')), 'nofound_page');

const h5static = r => require.ensure([], () => r(require('@/page/content/H5/static')), 'h5static');


const form_input = r => require.ensure([], () => r(require('@/page/content/form/input')), 'content_form_input');
const form_radio = r => require.ensure([], () => r(require('@/page/content/form/radio')), 'content_form_radio');
const form_checkbox = r => require.ensure([], () => r(require('@/page/content/form/checkbox')), 'content_form_checkbox');
const basic_button = r => require.ensure([], () => r(require('@/page/content/basic/button')), 'content_basic_button');
const basic_box = r => require.ensure([], () => r(require('@/page/content/basic/box')), 'content_basic_box');
const tips_toast = r => require.ensure([], () => r(require('@/page/content/tips/toast')), 'content_tips_toast');

const normal_table = r => require.ensure([], () => r(require('@/page/content/table/normalTable')), 'content_table_normalTable');
const radio_table = r => require.ensure([], () => r(require('@/page/content/table/radioTable')), 'content_table_radioTable');
const check_table = r => require.ensure([], () => r(require('@/page/content/table/checkTable')), 'content_table_checkTable');

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
      path: '/tips/toast',
      name: 'toast',
      component: tips_toast
    },
    {
      path: '/nofound',
      name: 'nofound',
      component: nofound
    },
    {
      path: '/H5/static',
      name: 'H5static',
      component: h5static
    },
    {
      path: '/table/normalTable',
      name: 'normal_table',
      component: normal_table
    },
    {
      path: '/table/radioTable',
      name: 'radio_table',
      component: radio_table
    },
    {
      path: '/table/checkTable',
      name: 'check_table',
      component: check_table
    }
  ]
})
