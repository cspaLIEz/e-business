import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
//按需加载,当渲染其他页面时才加载其组件,并缓存,减少首屏加载时间
const Index = resolve => require(['@/views/index/index.vue'], resolve)
const Hot = resolve => require(['@/views/hot/hot.vue'], resolve)
const Classlist = resolve => require(['@/views/classlist/classlist.vue'], resolve)
export default new Router({
  routes: [{
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path: '/hot',
      name: '热卖',
      component: Hot
    },
    {
      path: '/Classlist',
      name: '分类列表',
      component: Classlist
    }
  ]
})
