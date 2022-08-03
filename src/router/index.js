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
    path: '/movie/:id',
    name: 'movie',
    component: () => import('../views/MovieDetailsView.vue')
  },
  {
    path: '/filter',
    name: 'filter',
    component: () => import('../views/MovieFilterView.vue')
  },
  {
    path: '/genre/:genre',
    name: 'genre',
    component: () => import('../views/MovieGenreView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
