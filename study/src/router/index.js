import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '精品课程网站'
      },
      component: () => import('@/views/index')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '用户登陆'
      },
      component: () => import('@/views/login')
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        title: '用户注册'
      },
      component: () => import('@/views/register')
    },
  ]
})
