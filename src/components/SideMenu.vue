<template>
    <aside class="navigation">
        <div 
            class="navigation-show"
            @click="hide = !hide"
        >
            <span :class="['material-icons ', {_active: !hide}]">apps</span>
            <span>Menu</span>
        </div>

        <template 
            v-for="(item, i) in nav" 
            :key="i"
        >
            <router-link 
                :to="item.link" 
                class="navigation-link"
                :class="{_disabled: item.disabled}"
            >
                <span class="material-icons">{{ item.icon }}</span>
                <span v-if="!hide">{{ item.name }}</span>
            </router-link>
        </template>
    </aside>
</template>

<script>
    export default {
        data() {
            return {
                hide: true,
                nav: [
                    {
                        link: '/',
                        name: 'Home',
                        icon: 'home'
                    },
                    {
                        link: '/tasks',
                        name: 'Tasks',
                        icon: 'task'
                    },
                    {
                        link: '/folders',
                        name: 'Folders',
                        icon: 'folder',
                        disabled: true
                    },
                    {
                        link: '/calendar',
                        name: 'Calendar',
                        icon: 'calendar_today',
                        disabled: true
                    },
                ]
            }
        },
    }
</script>

<style lang="sass">
    .navigation
        padding: 20px
        position: fixed
        top: 0
        left: 0
        display: flex
        flex-direction: column
        gap: 10px
        background: white
        max-width: 140px
        width: 100%
        z-index: 2

        &-link 
            display: flex
            align-items: center
            gap: 10px
            color: black

            &.router-link-active 
                color: #8dd1f8

            &._disabled
                opacity: 0.5
                pointer-events: none

        &-show 
            cursor: pointer
            width: max-content
            user-select: none
            display: flex
            align-items: center
            gap: 5px
            .material-icons 
                border-radius: 5px
                padding: 2px
                &._active
                    background: #ececec

        

</style>