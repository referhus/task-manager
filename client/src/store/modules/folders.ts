import { $apiV1 } from "@/api";
import type { ITag } from "@/types";

interface IStateFolders {
  folders: ITag[]
}
const state: IStateFolders = {
  folders: []
}

const actions = {
  async getFolders ({ commit }) {
    const data = await $apiV1.folder.getFolders()

    commit('setFolders', data)
  }
}

const mutations = {
  setFolders(state: IStateFolders, data: ITag[]) {
    state.folders = data;
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
