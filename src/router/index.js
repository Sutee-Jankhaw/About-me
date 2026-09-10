import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'navbar',
    component: () => import('../views/Navbar.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue')
      }
    ]
  },
  {
    path: '/calculate',
    name: 'calculate',
    component: () => import('../views/Calculate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
