export class Task {
  id?: number;
  title: string;
  completed: boolean;
  folderId?: number;

  constructor(
    title: string,
    completed: boolean,
    id?: number,
    folderId?: number,
  ) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.folderId = folderId;
  }
}
