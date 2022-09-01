import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

function scrollBehavior () {
  return { x: 0, y: 0 }
}

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
    component: () => import('../views/MovieDetailsView.vue'),
    props: true,
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
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior,
  routes
})

export default router
