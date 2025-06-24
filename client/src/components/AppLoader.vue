<script setup lang="ts"></script>

<template>
  <div class="loader">
    <span class="material-symbols-outlined">
      progress_activity
    </span>
  </div>
</template>

<style lang="sass" scoped>
.loader
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 200px

  span
    display: flex
    align-items: center
    justify-content: center
    font-size: 80px
    color: #57F
    animation: loader-animate 0.6s ease-in-out infinite

@keyframes loader-animate
  0%
    transform: rotate(0deg)
  25%
    transform: rotate(90deg)
  50%
    transform: rotate(180deg)
  75%
    transform: rotate(270deg)
  100%
    transform: rotate(360deg)
</style>
