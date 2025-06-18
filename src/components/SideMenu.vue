<template>
  <aside class="navigation">
    <template
      v-for="(item, i) in nav"
      :key="i"
    >
      <router-link
        :to="item.link"
        class="navigation-link"
      >
        <span class="material-symbols-outlined">{{ item.icon }}</span>
        <span class="navigation-link__name">{{ item.name }}</span>
      </router-link>
    </template>
  </aside>
</template>

<script setup lang="ts">
const nav = [
  {
    link: '/',
    name: 'Задачи',
    icon: 'checklist'
  },
]
</script>

<style lang="sass">
.navigation
  grid-area: area-menu
  padding: 20px
  display: flex
  flex-direction: column
  gap: 10px
  background: white
  flex-shrink: 0
  width: 100%
  height: 100vh
  z-index: 2
  position: sticky
  top: 0

  &-link
    display: flex
    align-items: center
    gap: 10px
    color: gray
    padding: 10px
    border-radius: 10px
    transition: .3s

    &.router-link-active
      background: #57F

      & > span
        color: white

    &._disabled
      opacity: 0.5
      pointer-events: none
      background: #E9E8EC

    &__name
      @media screen and ( max-width: 920px)
        display: none
</style>
