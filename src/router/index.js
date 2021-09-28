import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/main",
    children: [
      {
        path: "main",
        name: "Main",
        component: () => import('../views/Main')
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
