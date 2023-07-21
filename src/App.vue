<template>
    <div id="app">
        <main class="main">
            <side-menu></side-menu>
            <router-view/>
            <weather-block></weather-block>
            <modal-cmp/>
            <notification-cmp/>
        </main>
    </div>
</template>

<script>
import ModalCmp from './components/modals/ModalCmp.vue';
import SideMenu from './components/SideMenu.vue';
import NotificationCmp from './components/NotificationCmp.vue';
import WeatherBlock from './components/WeatherBlock.vue';
export default {
    data() {
        return {
        };
    },
    components: {
        ModalCmp,
        SideMenu,
        WeatherBlock,
        NotificationCmp
    },
}

</script>

<style lang="sass">
* 
    font-family: Avenir, Helvetica, Arial, sans-serif
    font-size: 16px
    color: #4F4F4F
    padding: 0
    margin: 0
    box-sizing: border-box
    user-select: none

    body
        width: 100%

.main
    display: grid
    grid-template-columns: 200px 1fr 200px
    gap: 10px
    grid-template-areas: 'area-menu area-content area-weather'
    padding: 0 40px

.container 
    grid-area: area-content
    width: 100%
    display: flex
    flex-direction: column
    gap: 10px
    padding: 20px

a 
    text-decoration: none

</style>
