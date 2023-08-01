<template>
    <aside class="weather">
        <img class="weather-icon" :src="icon" alt="">
        <div class="weather-city" v-if="!edit"> 
            <span> {{ city }} </span>
            <button-cmp
                icon="edit"
                @event="edit = !edit"
            ></button-cmp>
        </div>
        <form 
            v-else 
            class="weather-city" 
            @submit.prevent="setWeather"
        >
            <input 
                type="text" 
                placeholder="введите город" 
                v-model="city" 
                autofocus 
                :class="{_error: error}"
            > 
            <button-cmp
                icon="done"
                type="submit"
                @event="setWeather"
            ></button-cmp>
            <p v-if="error" class="text-error"> {{ error }} </p>
        </form>
        <span class="weather-temp"> {{ temp }} &#8451; </span>
    </aside>
</template>

<script>

import axios from "axios";
import ButtonCmp from './ButtonCmp.vue';

export default {
    name: 'weather-block',
    data() {
        return {
            icon: null,
            temp: null,
            edit: false,
            error: '',
            city: 'Tomsk',
        }
    },
    components: {
        ButtonCmp,
    },
    watch: {
        city(newValue) {
            !newValue ? this.error = 'city is empty' : this.error = ''
        }    
    },
    methods: {
        setWeather() {
            if (this.city) {
                axios.get(`https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${this.city}&appid=790a96bd8bb9d8c93506ff43bb1b5b73`)
                    .then(res => {
                        this.icon = `https://openweathermap.org/img/wn/${(res.data.weather[0].icon)}@2x.png`
                        this.temp = Math.round(res.data.main.temp)
                        this.edit = false
                    })    
                    .catch(res => {
                        this.error = res.response.data.message
                    })             
            } 
        }
    },
    created() {
        this.setWeather()
    }
}
</script>

<style lang="sass">
.weather 
    grid-area: area-weather
    padding: 20px 0
    display: grid 
    gap: 10px
    justify-content: center
    align-items: center
    grid-template-columns: 100px 1fr
    grid-template-areas: 'area-icon area-temp' 'area-icon area-city'
    height: max-content
    position: sticky
    top: 0

    &-icon 
        grid-area: area-icon

    &-city 
        grid-area: area-city
        margin-bottom: auto
        display: flex
        align-items: center
        gap: 10px
        position: relative

        span 
            font-size: 16px

        input
            border: none
            max-width: 50px

    &-temp 
        grid-area: area-temp
        height: max-content
        margin-top: auto
        font-size: 20px

    .text-error
        color: red
        font-size: 12px
        position: absolute
        bottom: -20px

</style>