import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// TODO: Add links
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/top_movies',
    name: 'top_movies',
    component: () => import('../views/TopMoviesView.vue')
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('../views/MovieDetailsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
