<script setup lang="ts">
defineProps<{
  icon?: string
  text?: string
}>()
</script>

<template>
  <button class="button">
    <span
      class="material-symbols-outlined"
      v-if="icon"
    >
      {{ icon }}
    </span>
    <span v-if="text">
      {{ text }}
    </span>
  </button>
</template>


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

  &:hover
    opacity: 1

  &:disabled
    opacity: 0.4

</style>
