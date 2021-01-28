import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import YearGreeting from '../views/yearGreeting/YearGreeting.vue'
import ChuWu from '../views/chuwu/chuwu.vue'
import HuanHua from '../views/huanhua/huanhua.vue'
import Login from '../views/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/yuanxiao/card5/index.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/yearGreeting/:id',
    name: 'yearGreeting',
    component: YearGreeting
  },
  {
    path: '/huanhua/:id',
    name: 'huanhua',
    component: HuanHua
  },
  {
    path: '/chuwu/:id',
    name: 'chuwu',
    component: ChuWu
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
