import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Agregar from '../views/AgregarView.vue'
import Login from '../views/LoginView.vue'
import Peliculas from '../views/PelicilasView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/movies',
    name: 'peliculas',
    component: Peliculas
  },
  {
    path: '/add',
    name: 'add',
    component: Agregar
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
