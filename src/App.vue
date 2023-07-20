<template>
    <div id="app">
        <side-menu></side-menu>
        <router-view/>
        <modal-cmp/>
        <notification-cmp/>
    </div>
</template>

<script>
import ModalCmp from './components/modals/ModalCmp.vue';
import SideMenu from './components/SideMenu.vue';
import NotificationCmp from './components/NotificationCmp.vue';
export default {
    data() {
        return {
        };
    },
    components: {
        ModalCmp,
        SideMenu,
        NotificationCmp
    },
}

</script>

<style lang="sass">
* 
    font-family: Avenir, Helvetica, Arial, sans-serif
    font-size: 16px
    padding: 0
    margin: 0
    box-sizing: border-box

    body
        width: 100%

.container 
    padding: 20px 0
    max-width: 650px
    width: 100%
    margin: 0 auto
    display: flex
    flex-direction: column
    gap: 10px

a 
    text-decoration: none

</style>
