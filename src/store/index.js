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
    top_movies: [],
    movies: [],
    movie: {},
    genres: [],
    data: {},
    log: {}
  },
  getters: {
    getFirstThreeMovies: state => {
      return Array.from(state.top_movies)
        .filter(movie => movie.original_language === "en")
        .slice(0, 3);
    },
  },
  mutations: {
    SET_GENRES: (state, genres) => {
      state.genres = genres;
    },
    SET_TOP_MOVIES: (state, movies) => {
      state.top_movies = movies;
    },
    SET_MOVIES: (state, movies) => {
      state.movies = movies;
    },
    SET_LOG: (state, log) => {
      state.log = log;
    },
    SET_MOVIE: (state, movie) => {
      state.movie = movie;
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
        commit('SET_TOP_MOVIES', data.data.results)
        }
        catch (error) {
            alert(error);
            console.log(error);
        }
    },
    async moviesSearch({ commit }, query) {
      try {
        commit('SET_LOG', query );
        const data = await api('search/movie', {
          params: {
            query: query.query,
            page: query.page
          }
        });
        commit('SET_MOVIES', data.data.results)
        }
        catch (error) {
            alert(error);
            console.log(error);
        }
    },
    async movieDetails({ commit }, id) {
      try {
        const data = await api('movie/' + id);
        const similar = await api('movie/' + id + '/similar');
        commit('SET_MOVIE', data.data)
        commit('SET_MOVIES', similar.data.results)
        }
        catch (error) {
            alert(error);
            console.log(error);
        }
    }
  },
})
