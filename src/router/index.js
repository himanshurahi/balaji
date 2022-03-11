import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from "../views/About.vue"
import Dashboard from "../views/User/Dashboard.vue"
import Auth from "../views/Auth.vue"
import Products from "../views/Products.vue"
import ProductDetails from "../views/ProductDetails.vue"

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
    path: '/dashboard',
    name: 'UserDashboard',
    component: Dashboard
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/product/:slug',
    name: 'ProductDetails',
    component: ProductDetails
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})

export default router
