import Vue from 'vue'
import VueRouter from 'vue-router'
import FormView from '../views/FormView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'form',
    component: FormView
  },
  {
    path: '/preview',
    name: 'preview',
    component: () => import(/* webpackChunkName: "about" */ '../views/PreviewView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
