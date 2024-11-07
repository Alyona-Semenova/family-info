import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      name: '',
      age: '',
      children: {},
    } 
  },
  getters: {
    user: state => state.user
  },
  mutations: {
    UPDATE_USER(state, user) {
      state.user = user;
    },
  },

  actions: {
  },

  modules: {
  }
})
