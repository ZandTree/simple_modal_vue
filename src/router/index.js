import { createRouter, createWebHistory } from 'vue-router'

import Play from '@/views/Play.vue'
import SignUpView from '@/views/SignUp.vue'
import Home from '@/views/Home.vue'
import notFound from '@/views/notFound.vue'
const routes = [   
  {
    path:'/test-it',
    name:'Play',
    component:Play
  }, 
  {
    path:'/',
    name:'Home',
    component:Home
  }, 
  {
    path:'/sign-up-form',
    name:'SignUpView',
    component:SignUpView
  }, 
  {
    path:'/old-sign-up-form',
    redirect:'/sign-up-form'
  }, 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // catchAll= 404; just '*' no longer supported in vue.js 3
  {
    path:'/:catchAll(.*)',
    name:'notFound',
    component:notFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
