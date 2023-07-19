export default {
    namespaced: true,
    state:  () => ({
        notifications: [],
    }),
    getters: {
        notifications(state) {
            return state.notifications;
        },
    },
    mutations: {
        setNotification(state, data) {
            const id = state.notifications.length + 1
            state.notifications.push({
                ...data,
                id: id
            });
        },

        closeNotification(state, data) {
            const index = state.notifications.map(el => el.id).indexOf(data);
            if (index > -1) {
                state.notifications.splice(index, 1) 
            } 
        }
    },
};
