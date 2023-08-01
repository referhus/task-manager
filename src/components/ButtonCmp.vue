<template>
    <div 
        :class="['button', {'_border': border}]" 
        @click="$emit('event')"
    >
        <span 
            class="material-icons" 
            :style="color ? `color: ${color}` : ''"
            v-if="icon"
        >{{ icon }}</span>
        <span v-if="text"> {{ text }}</span>
    </div>
</template>

<script>
export default {
    name: 'ButtonCmp',
    props: {
        icon: String,
        text: String,
        border: Boolean,
        color: String
    }
}
</script>

<style lang="sass" scoped>
.button 
    opacity: 0.7
    cursor: pointer
    transition: .3s
    display: flex
    align-items: center
    gap: 10px
    width: max-content
    color: gray
    transition: .3s


    &:hover 
        opacity: 1

    &._border
        padding: 5px
        border: 1px solid gray 
        border-radius: 5px

</style>
