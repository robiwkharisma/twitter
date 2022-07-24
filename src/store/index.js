import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    feeds: [
      {
        tweet: "Keep smiling, because life is a beautiful thing and there's so much to smile about",
        time: new Date()
      }
    ]
  },
  getters: {
    feeds(state) {
      return state.feeds
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
