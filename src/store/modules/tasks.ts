import { $apiV1 } from "@/api";
import type { ITask, statusesTypes, INewTask, IUpdateTask } from "@/types";
import { statusesEnum } from "@/types";

interface IStateTasks {
  tasks: ITask[]
  activeFilter: statusesTypes
}
const state: IStateTasks = {
  tasks: [],
  activeFilter: ''
}

const getters = {
  getFilteredTasks(state: IStateTasks) {
    return state.tasks.filter((el: ITask) => {
      switch (state.activeFilter) {
        case statusesEnum.completed: {
          return el.completed
        }

        case statusesEnum.active: {
          return !el.completed
        }

        default: {
          return el
        }
      }
    })
  }
}

const actions = {
  async getTasks ({ commit }) {
    const data = await $apiV1.task.getTasks()

    commit('setTasks', data)
  },

  async postNewTask({ commit }, task: ITask) {
    await $apiV1.task.addTask(task)

    commit('addTask', task)
  },

  async deleteTask({ commit }, id: number) {
    await $apiV1.task.deleteTask(id)

    commit('deleteTask', id)
  },

  async updateTask({ commit }, data: IUpdateTask) {
    await $apiV1.task.updateTask(data)

    console.log(data)
    commit('setCompleteTask', data.id)
  }
}

const mutations = {
  setTasks(state: IStateTasks, data: ITask[]) {
    state.tasks = data;
  },
  addTask(state: IStateTasks, data: INewTask) {
    const newTask = {
      id: state.tasks.length + 1,
      title: data.title,
      completed: false,
    }

    if (data.folderId)
      newTask.folderId = data.folderId

    state.tasks.push(newTask)
  },
  deleteTask(state: IStateTasks, id: number) {
    const index = state.tasks.map(el => el.id).indexOf(id);

    if (index > -1) {
      state.tasks.splice(index, 1)
    }
  },
  setCompleteTask(state: IStateTasks, id: number) {
    const completedValue = state.tasks.find(el => el.id == id).completed
    state.tasks.find(el => el.id == id).completed = !completedValue
  },
  setActiveFilter(state: IStateTasks, key: statusesTypes) {
    state.activeFilter = key
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
