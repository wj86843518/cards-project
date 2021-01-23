import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import YearGreeting10 from '../views/yearGreeting/card10.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/yearGreeting',
    name: 'yearGreeting',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/yearGreeting/cardOne.vue')
  },
  {
    path: '/yearGreeting10',
    name: 'yearGreeting10',
    component: YearGreeting10
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
