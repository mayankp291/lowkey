import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/vault",
    name: "Vault",
    component: () => import("../views/Vault.vue"),
  },
  {
    path: "/vault/add",
    name: "Add Details",
    component: () => import("../views/AddLogin.vue"),
  },
  {
    path: "/vault/edit/:id",
    name: "Edit Login Details",
    component: () => import("../views/Edit.vue"),
  },
  {
    path: "/generator",
    name: "Password Generator",
    component: () => import("../views/Generator.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
