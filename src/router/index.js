import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import Money from '../views/money/index.vue'
import Ious from '../views/ious/index.vue'
import Raise from '../views/raise/index.vue'
import Special from '../views/special/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/money',
    name: 'money',
    component: Money
  },
  {
    path: '/ious',
    name: 'ious',
    component: Ious
  },
  {
    path: '/raise',
    name: 'raise',
    component: Raise
  },
  {
    path: '/special',
    name: 'special',
    component: Special
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
