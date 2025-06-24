import { getMockData } from "@/utils/getMockData";
import { type IStatus, statusesEnum } from "@/types";

const statuses: IStatus = [
  { key: '', title: 'Все' },
  { key: statusesEnum.completed, title: 'Выполненные' },
  { key: statusesEnum.active, title: 'Активные' },
]

export default class Status {
  async getStatuses() {
    try {
      const success = await getMockData(statuses)
      return success.data
    } catch (err) {
      return err
    }
  }
}
