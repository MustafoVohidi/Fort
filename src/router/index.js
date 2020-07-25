import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: () => import( '../pages/Contacts.vue')
  },
  {
    path: '/Design',
    name: 'Design',
    component: () => import( '../pages/Design.vue')
  },
  {
    path: '/Expantions',
    name: 'Expantions',
    component: () => import( '../pages/Expantions.vue')
  },
  {
    path: '/Help',
    name: 'Help',
    component: () => import( '../pages/Help.vue')
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: () => import( '../pages/Logout.vue')
  },
  {
    path: '/Marketing',
    name: 'Marketing',
    component: () => import( '../pages/Marketing.vue')
  },
  {
    path: '/Panel',
    name: 'Panel',
    component: () => import( '../pages/Panel.vue')
  },
  {
    path: '/Sales',
    name: 'Sales',
    component: () => import( '../pages/Sales.vue')
  },
  {
    path: '/Settings',
    name: 'Settings',
    component: () => import( '../pages/Settings.vue')
  },
  {
    path: '/Shoppers',
    name: 'Shoppers',
    component: () => import( '../pages/Shoppers.vue')
  },
  {
    path: '/System',
    name: 'System',
    component: () => import( '../pages/System.vue')
  },
  {
    path: '/Themes',
    name: 'Themes',
    component: () => import( '../pages/Themes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
