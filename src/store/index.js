import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feeds: JSON.parse(localStorage.getItem('feeds')) ?? [{tweet: "Keep smiling, because life is a beautiful thing and there's so much to smile about",time: new Date('03/25/2020 12:50:44'), comments: 89, retweets: 80, loves: 70}],
  },
  getters: {
    feeds(state) {
      return state.feeds.sort((a, b) => new Date(b.time) - new Date(a.time))
    },
  },
  mutations: {
    SET_FEEDS(state, newValue) {
      state.feeds.push(newValue)
      localStorage.setItem('feeds', JSON.stringify(state.feeds))
    },
  },
  actions: {
    saveTweet({commit}, { params } = {}) {
      commit('SET_FEEDS', params)
    },
  },
  modules: {
  }
})
