<template>
  <div id="app">
    <router-view/>
    <modal-cmp/>
  </div>
</template>

<script>
import modalCmp from './components/modals/modalCmp.vue';
export default {
  data() {
    return {
    };
  },
  components: {
    modalCmp
  },
}

</script>

<style lang="sass">
* 
  font-family: Avenir, Helvetica, Arial, sans-serif
  font-size: 16px
  padding: 0
  margin: 0

  body
    width: 100%

.container 
  max-width: 920px
  width: 100%
  margin: 0 auto
  display: flex
  flex-direction: column
  gap: 10px

</style>
