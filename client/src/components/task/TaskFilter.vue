<script setup lang="ts">
import TagItem from "@/components/TagItem.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import type { IStatus, statusesTypes } from "@/types";

const store = useStore()

const activeFilter = computed(() => store.state.tasks.activeFilter)
const setActiveFilter = (key: statusesTypes) => store.commit('tasks/setActiveFilter', key)
const statuses = computed(() => store.state.statuses.statuses)

function getItem(item: IStatus) {
  return {
    id: item.key,
    title: item.title,
    bg: activeFilter.value === item.key ? '#57F' : ''
  }
}
</script>

<template>
  <div class="filters">
    <tag-item
      v-for="item in statuses"
      :key="`filter${item.key}`"
      :item="getItem(item)"
      @click="setActiveFilter(item.key)"
    />
  </div>
</template>

<style lang="sass" scoped>
.filters
  display: flex
  flex-wrap: wrap
  align-items: center
  gap: 10px
</style>
