import tasks from './modules/tasks';
import folders from './modules/folders';
import modal from './modules/modal';
import notification from './modules/notification';
import createPersistedState from 'vuex-persistedstate';

import { createStore } from 'vuex'

export default createStore({
    plugins: [
        createPersistedState({
            paths: ['tasks']
        })
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
        folders,
        modal,
        notification
    },
})
