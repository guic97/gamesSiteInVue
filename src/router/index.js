import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import('../views/Support.vue')
  },
  {
    path: '/tictactoe',
    name: 'ticTacToe',
    component: () => import('../views/ticTacToeView.vue')
  },
  {
    path: '/sixtrys',
    name: 'sixTrys',
    component: () => import('../views/sixTrys.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
