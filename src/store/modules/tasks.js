export default {
    namespaced: true,
    state: () => ({
        tasks: [],
    }),
    getters: {
        tasks(state) {
            return state.tasks;
        },
        tasksResults(state, data) {
            return state.tasks.filter(item => item.name.toLowerCase().includes(data))
        }
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
                isDone: false
            })
        },
        setTask(state, data) {
            const index = state.tasks.map(el => el.id).indexOf(data.id);
            if (index > -1) {
                !data.name ? state.tasks.splice(index, 1) : state.tasks.splice(index, 1, data)
            } 
        },
        setDoneTask(state, id) {
            state.tasks.find(el => el.id == id).isDone = !state.tasks.find(el => el.id == id).isDone
        }
    },
};
