import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import receitas from '../components/receita.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/receitas/:id',
    name: 'Receitas',
    component: receitas,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router