import { dateFormat } from "@/utils/dateFormat";

export default {
    namespaced: true,
    state: {
        folders: [],
    },
    getters: {
        folders(state) {
            return state.folders;
        },
        getFoldersByName: (state) => (payload) => {
            if(state.folders) {
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
                color: data.color ? data.color : '#000000',
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
    },
};
