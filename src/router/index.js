import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About.vue"
import Dashboard from "../views/User/Dashboard.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/user/dashboard',
    name: 'UserDashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
