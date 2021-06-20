import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Vault from '../views/Vault.vue'
import Testing from '../views/Testing.vue'

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
    path: '/vault',
    name: 'Vault',
    component: () => import(/* webpackChunkName: "about" */ '../views/Vault.vue')
  },
  {
    path: '/testing',
    name: 'Test',
    component: () => import(/* webpackChunkName: "about" */ '../views/Testing.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
