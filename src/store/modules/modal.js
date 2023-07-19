import { disableScroll, enableScroll} from "@/utils/scroll";
export default {
    namespaced: true,
    state:  () => ({
        modalComponent: null,
        modalProps: null,
    }),
    getters: {
        modalComponent(state) {
            return state.modalComponent;
        },
        modalProps(state) {
            return state.modalProps;
        },
    },
    mutations: {
        openModal(state, data) {
            disableScroll();
            state.modalComponent = data.newState;
            state.modalProps = data.props;
        },
        closeModal(state) {
            enableScroll();
            state.modalComponent = null;
            state.modalProps = null;
        },
    },
};
