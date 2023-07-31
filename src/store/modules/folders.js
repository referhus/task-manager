import { dateFormat } from "@/utils/dateFormat";

export default {
    namespaced: true,
    state: {
        folders: [
            {
                id: 1,
                name: 'папка',
                color: '#000000'
            },
            {
                id: 1,
                name: 'd',
                color: '#da3333'
            },
        ],
    },
    getters: {
        folders(state) {
            return state.folders;
        },
        getFoldersByName: (state) => (payload) => {
            if(state.folders) {
                console.log(state.folders.filter(x => x.name.includes(payload)))
                return state.folders.filter(x => x.name.includes(payload))
            } else {
                return null
            }
        },
    },
    mutations: {
        /* eslint no-param-reassign: 'off' */
        setFolders(state, data) {
            state.folders = data;
        },
        addFolder(state, data) {
            state.folders.push({
                id: state.folders.length + 1,
                name: data.name,
                desc: data.desc ? data.desc : '',
                color: data.color,
                date: dateFormat(),
                isDone: false
            })
        },
        setFolder(state, data) {
            const index = state.folders.map(el => el.id).indexOf(data.id);
            if (index > -1) {
                !data.name ? state.folders.splice(index, 1) : state.folders.splice(index, 1, data)
            } 
        },
        // setDoneTask(state, id) {
        //     state.folders.find(el => el.id == id).isDone = !state.folders.find(el => el.id == id).isDone
        // }
    },
};
