export const toggle = {
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        toggle() {
            this.visible = !this.visible;
        },
        hide() {
            this.visible = false;
        },
        show() {
            this.visible = true;
        },
    },
};
