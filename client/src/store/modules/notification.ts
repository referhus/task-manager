import type { INotification } from "@/types";

interface IStateNotification {
  notification: INotification[]
}

const state: IStateNotification = {
  notifications: []
}

const mutations = {
  setNotification(state: IStateNotification, data: INotification) {
    const id = state.notifications.length + 1
    state.notifications.push({
      ...data,
      id: id
    });
  },

  closeNotification(state: IStateNotification) {
    state.notifications.shift()
  }
}

const actions = {
  setNotification({ commit }, data: INotification) {
    commit('setNotification', data)

    setTimeout(() => {
      commit('closeNotification')
    }, 3000)
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
