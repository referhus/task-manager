<template>
    <div 
      :class="['button', {'_border': border}]" 
      @click="$emit('event')"
    >
      <span class="material-icons" v-if="icon">{{ icon }}</span>
      <span v-if="text"> {{ text }}</span>
    </div>
</template>
<script>
export default {
  name: 'ButtonCmp',
  props: {
    icon: String,
    text: String,
    border: Boolean
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

    &:hover 
      opacity: 1

    &._border
      padding: 5px 10px
      border: 1px solid gray 
      border-radius: 10px

</style>
