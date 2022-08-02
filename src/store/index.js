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
  },
  mutations: {
    SET_GENRES: (state, genres) => {
      state.genres = genres;
    },
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
    }
  },
})
