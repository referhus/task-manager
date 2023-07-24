<template>
    <div
        class="t-action-list"
    >
        <div
            class="t-action-list__button"
            @click="toggleComp"
        >
            <span class="material-icons">
                more_horiz
            </span>
        </div>
        <div v-if="visible" class="t-action-list__list">
            <button-cmp
                v-for="item in list"
                class="t-action-list__item"
                @click.stop="handleActionItem(item)"
                :key="item.icon"
                :text="item.text"
                :icon="item.icon"
            ></button-cmp>
        </div>
    </div>
</template>

<script>
import { toggle } from '@/utils/mixins/toggle';
import ButtonCmp from './ButtonCmp.vue';

export default {
    name: 'action-list',
    mixins: [toggle],
    props: {
        list: {
            type: Array,
            default: () => ([])
        },
    },
    components: {
        ButtonCmp,
    },
    data() {
        return {
        }
    },
    methods: {
        toggleComp() {
            this.toggle()
        },
        hideComp() {
            this.hide()
        },
        handleActionItem(item) {
            this.$emit("handleItem", item);
            this.hideComp();
        }
    },
    mounted() {
    }
};
</script>


<style lang="sass">
.t-action-list
    position: relative

    &__button
        position: relative
        padding: 0
        display: flex
        justify-content: center
        align-items: center
        border-radius: 10px
        transition: .3s
        cursor: pointer

    &__list
        position: absolute
        display: flex
        gap: 5px
        z-index: 5
        top: 20px
        right: 0
        background: rgba(255, 255, 255, 0.8)
        box-shadow: 0 0 1px rgba(16, 14, 28, 0.04), 0 2px 16px rgba(16, 14, 28, 0.06)
        backdrop-filter: blur(8px)
        border-radius: 16px

    &__item
        position: relative
        list-style: none
        padding: 8px
        height: 40px
        border-radius: 16px
        font-weight: 500
        font-size: 16px
        line-height: 24px
        color: gray
        cursor: pointer
        transition: color .3s

        &:last-child
            &::after
                content: ""
                position: absolute
                width: 107%
                height: 1px
                bottom: 100%
                left: -8px

        &:hover
            background: #57F
            span
                color: white

</style>