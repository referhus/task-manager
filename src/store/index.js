import tasks from './modules/tasks';
import modal from './modules/modal';
import createPersistedState from 'vuex-persistedstate';

import { createStore } from 'vuex'

export default createStore({
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
