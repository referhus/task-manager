import Vue from 'vue'
import Vuex from 'vuex'
import tasks from './modules/tasks';
import modal from './modules/modal';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    tasks,
    modal,
  },
})
