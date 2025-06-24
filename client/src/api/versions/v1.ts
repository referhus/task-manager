import Task from "@/api/entities/task";
import Folder from "@/api/entities/folder";
import Status from "@/api/entities/status";

export default {
  task: new Task(),
  folder: new Folder(),
  status: new Status()
}
