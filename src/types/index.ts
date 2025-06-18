export type { ITask, INewTask, IUpdateTask } from './task'
export type { IStatus, statusesTypes } from './status'
export { statusesEnum } from './status'
export type { INotification } from './notification'

export interface ITag {
  id: number
  title: string
  bg: string
}
