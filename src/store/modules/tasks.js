import { dateFormat } from "@/utils/dateFormat";

export default {
    namespaced: true,
    state: () => ({
        tasks: [],
    }),
    getters: {
        tasks(state) {
            return state.tasks;
        },
    },
    mutations: {
        /* eslint no-param-reassign: 'off' */
        setTasks(state, data) {
            state.tasks = data;
        },
        addTask(state, data) {
            state.tasks.push({
                id: state.tasks.length + 1,
                name: data.name,
                desc: data.desc ? data.desc : '',
                folders: data.folders ? data.folders : [],
                isDone: false,
                date: dateFormat()
            })
        },
        setTask(state, data) {
            const index = state.tasks.map(el => el.id).indexOf(data.id);
            if (index > -1) {
                !data.name ? state.tasks.splice(index, 1) : state.tasks.splice(index, 1, data)
            } 
        },
        setFoldersInTask(state, data) {
            state.tasks.map((el => {
                const index = el.folders.map(folder => folder.id).indexOf(data)
                if (index > -1) {
                    el.folders.splice(index, 1)
                }
            }))
        },
        setDoneTask(state, id) {
            state.tasks.find(el => el.id == id).isDone = !state.tasks.find(el => el.id == id).isDone
        }
    },
};
