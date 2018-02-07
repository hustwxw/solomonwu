import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Login = r => require.ensure([], () => r(require('@/page/login')), 'login_page');
const ColorPage = r => require.ensure([], () => r(require('@/page/content/colorPage')), 'colorPage_page');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/page/color',
      name: 'colorPage',
      component: ColorPage
    }
  ]
})
