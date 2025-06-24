import tasks from "./modules/tasks";
import folders from "./modules/folders";
import notification from "./modules/notification";
import statuses from "@/store/modules/statuses";

import { createStore } from "vuex"

export default createStore({
  modules: {
    tasks,
    folders,
    statuses,
    notification
  }
})
