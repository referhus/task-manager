export interface ITask {
  id: number
  title: string
  completed: boolean
  folderId?: number
}

export type INewTask = Pick<ITask, 'title' | 'folderId'>

export type IUpdateTask = Pick<ITask, 'id' | 'completed'>
