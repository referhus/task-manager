<template>
    <div class="material-icons" @click="$emit('event')">
        {{ icon }}
    </div>
</template>
<script>
export default {
  name: 'ButtonCmp',
  props: {
    icon: String
  }
}
</script>

<style scoped>
.material-icons {
  opacity: 0.7;
  cursor: pointer;
  transition: .3s;
}
.material-icons:hover {
  opacity: 1;
}

</style>
