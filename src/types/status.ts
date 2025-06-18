export enum statusesEnum {
  active = 'active',
  completed = 'completed',
}

export type statusesTypes = statusesEnum.active | statusesEnum.completed | ''

export interface IStatus {
  key: statusesTypes
  title: string
}

