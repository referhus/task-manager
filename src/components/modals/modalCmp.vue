<template>
    <transition name="fade">
        <div v-if="modalComponent" :key="modalComponent" class="t-modal t-dfc" @click="closeModal()">
            <div class="t-modal__content" @click.stop="">
                <div class="t-modal__close" @click="closeModal()"></div>
                <component v-bind:is="modalComponent" :props="modalProps"></component>
            </div>
        </div>
    </transition>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';
    import ModalTask from '@/components/modals/ModalTask.vue';

    export default {
        data() {
            return {}
        },
        components: {
            ModalTask,
        },
        computed: {
            ...mapGetters('modal', ['modalComponent', 'modalProps']),
        },
        methods: {
            ...mapMutations('modal', ['closeModal']),
        },
    }
</script>

<style lang="sass">
@import "@/assets/styles/params"

.t-modal
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    width: 100vw
    display: flex
    justify-content: center
    align-items: center
    background: rgba(#000000, 0.5)
    backdrop-filter: blur(3px)
    z-index: 100
    &__content
        position: relative
        padding: 40px
        border-radius: 10px
        border: 1px solid #E6E4F0
        background: #F9F8FF
        padding: 12px 10px
        max-width: 500px
        width: 100%
        overflow: hidden
    &__close
        position: absolute
        top: 0
        right: 0
        width: rem(48)
        height: rem(48)
        cursor: pointer
        &::after,
        &::before
            content: ''
            position: absolute
            top: 50%
            left: 50%
            display: block
            height: 2px
            width: rem(20)
            background-color: rgba(#000000, 0.3)
            transform: translate(-50%, -50%) rotate(-45deg)
            transition: all .3s
        &::before
            transform: translate(-50%, -50%) rotate(45deg)
        &:hover
            &::after,
            &::before
                background-color: rgba(#000000, 0.6)

    &__title
        margin-bottom: rem(16)
        font-size: rem(36)
        font-weight: 600
    &__desc
        margin-bottom: rem(32)
        line-height: 1.4
    &__text
        margin-bottom: rem(32)
        & > i
            padding-bottom: rem(2)
            display: inline-block
            font-style: normal
            border-bottom: 1px solid #EB271B
    &__btn
        display: inline-block
        width: rem(193)
        padding: 0 rem(16)
        text-align: center
        color: #FEFEFE
        font-weight: 500
        line-height: rem(40)
        background-color: #222125
        transition: all .3s
        &:hover
            background-color: #333236


    @media screen and ( max-width: $tablet-size)
        &__content
            max-width: 400px
            padding: 24px
        &__title
            font-size: 20px
            margin-bottom: 16px
        &__desc
            font-size: 14px
            margin-bottom: 24px
    @media screen and ( max-width: $mobile-size )
        display: block
        overflow-y: auto
        height: calc(100vh - calc(100vh - 100%))
        &__content
            padding: 24px 16px 100px
            width: 100%
            min-height: 100%
            min-width: 200px
        &__close
            position: fixed
        &__title
            font-size: 24px
        &__desc
            font-size: 12px

</style>