import type { ITask } from "@/types";
import { getMockData } from "@/utils/getMockData";
import type { IUpdateTask } from "@/types";

const tasks: ITask = [
  { id: 1, title: 'сделать уборку', completed: false, folderId: 1 },
  { id: 2, title: 'сделать домашку', completed: false, folderId: 3 },
  { id: 3, title: 'погладить котика', completed: true }
]

export default class Task {
  async getTasks() {
    try {
      const success = await fetch('http://localhost:3000/api/tasks')
      const result = await success.json()
      return result.data
    } catch (err) {
      return err
    }
  }

  async addTask(task: ITask) {
    try {
      const success = await getMockData(task)
      return success.data
    } catch (err) {
      return err
    }
  }

  async deleteTask(id: number) {
    try {
      const success = await getMockData({
        success: true,
        id,
      })
      return success.data
    } catch (err) {
      return err
    }
  }

  async updateTask(data: IUpdateTask) {
    try {
      const success = await getMockData({
        success: true,
        data,
      })
      return success.data
    } catch (err) {
      return err
    }
  }
}
