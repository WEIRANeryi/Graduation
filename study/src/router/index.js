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
      path: '/details/:id',
      name: 'details',
      meta: {
        title: '书籍目录信息'
      },
      component: () => import('@/views/details')
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
    {
      path: '/personal',
      name: 'personal',
      meta: {
        title: '个人中心'
      },
      redirect: '/personal/course',
      component: () => import('@/views/personal'),
      children: [
        {
          path: 'course',
          name: 'course',
          meta: {
            title: '我的课程',
          },
          component: () => import('@/views/course')
        },
        {
          path: 'note',
          name: 'note',
          meta: {
            title: '我的笔记',
          },
          component: () => import('@/views/note')
        },
        {
          path: 'question',
          name: 'question',
          meta: {
            title: '我的疑问',
          },
          component: () => import('@/views/question')
        },
        {
          path: 'change',
          name: 'change',
          meta: {
            title: '我的信息'
          },
          component: () => import('@/views/change')
        }
      ]
    },
    {
      path: '/post',
      name: 'post',
      meta: {
        title: '讨论区'
      },
      component: () => import('@/views/post')
    },
    {
      path: '/comment/:id',
      name: 'comment',
      meta: {
        title: '评论'
      },
      component: () => import('@/views/comment')
    },
  ]
})
