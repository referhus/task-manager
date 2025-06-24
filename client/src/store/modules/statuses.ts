import { $apiV1 } from "@/api";
import type { IStatus } from "@/types";

interface IStateStatuses {
  statuses: IStatus[]
}

const state: IStateStatuses = {
  statuses: []
}

const actions = {
  async getStatuses ({ commit }) {
    const data = await $apiV1.status.getStatuses()

    commit('setStatuses', data)
  },
}

const mutations = {
  setStatuses(state: IStateStatuses, data: IStatus[]) {
    state.statuses = data;
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
