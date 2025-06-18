<script setup lang="ts">
import NotificationCmp from "./components/NotificationCmp.vue";
import SideMenu from "@/components/SideMenu.vue";
</script>

<template>
  <main class="main">
    <side-menu />
    <router-view/>
    <notification-cmp/>
  </main>
</template>


<style lang="sass">
*
  font-family: Avenir, Helvetica, Arial, sans-serif
  font-size: 16px
  color: #4F4F4F
  padding: 0
  margin: 0
  box-sizing: border-box
  user-select: none
  scrollbar-width: thin
  scrollbar-color: rgba(#000, 0.2) rgba(#000, 0)

body
  width: 100%

a
  text-decoration: none

input, textarea, select
  padding: 5px
  border-radius: 5px
  border: 1px solid gray
  width: 100%
  outline: none

.main
  display: grid
  grid-template-columns: 200px 1fr
  grid-template-areas: 'area-menu area-content'
  padding: 0 40px
  max-width: 1440px
  margin: 0 auto

  @media screen and ( max-width: 920px)
    padding: 0 16px
    grid-template-columns: 85px 1fr

.container
  grid-area: area-content
  width: 100%
  display: flex
  flex-direction: column
  gap: 20px
  padding: 20px
  background: #F9F8FF
  border-right: 1px solid #E6E4F0
  border-left: 1px solid #E6E4F0

  &-head
    background: #F9F8FF
    position: sticky
    top: 0
    padding: 10px 0
    display: flex
    align-items: center
    justify-content: space-between
    gap: 10px
    z-index: 1

    &-block
      display: flex
      flex-direction: column
      gap: 20px

.cards
  display: flex
  flex-wrap: wrap
  gap: 16px
  max-height: 500px
  overflow: auto

.item
  transition: .3s
  cursor: pointer
  height: max-content

  &:hover
    background: rgba(242, 241, 243, 0.7) !important

    &:before
      background: rgba(242, 241, 243, 0.7) !important
      border-bottom-color: rgba(242, 241, 243, 0.7) !important

  &-name
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
</style>
