import { createStore } from 'vuex'
import { API_KEY } from './api_key'
import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  params: {
    api_key: API_KEY,
  },
});

export default createStore({
  state: {
    movies: [],
    movie: {},
    genres: [],
    data: {},
  },
  getters: {
    getFirstThreeMovies: state => {
      return Array.from(state.movies)
        .filter(movie => movie.original_language === "en")
        .slice(0, 3);
    },
  },
  mutations: {
    SET_GENRES: (state, genres) => {
      state.genres = genres;
    },
    SET_MOVIES: (state, movies) => {
      state.movies = movies;
    }
  },
  actions: {
    async fetchGenres({ commit }) {
      try {
        const data = await api('genre/movie/list');
        commit('SET_GENRES', data.data.genres)
        }
        catch (error) {
            alert(error);
            console.log(error);
        }
    },
    async fetchTopMovies({ commit }) {
      try {
        const data = await api('movie/top_rated');
        commit('SET_MOVIES', data.data.results)
        }
        catch (error) {
            alert(error);
            console.log(error);
        }
    }
  },
})
