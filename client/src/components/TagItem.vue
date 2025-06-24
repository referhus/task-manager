<script setup lang="ts">
import type { ITag } from "@/types";
import { computed } from "vue";

const props = defineProps<{
  item: ITag
}>()

const bg = computed(() => props.item.bg)
</script>

<template>
  <div class="tag">
    <span>
      {{ item.title }}
    </span>
  </div>
</template>


<style lang="sass" scoped>
.tag
  border-radius: 30px
  padding: 4px 10px
  width: max-content
  font-size: 12px
  font-weight: 600
  display: flex
  gap: 5px
  align-items: center
  background-color: v-bind(bg)

  span
    color: inherit
    font-size: inherit
    white-space: nowrap
    text-overflow: ellipsis
    overflow: hidden
</style>
