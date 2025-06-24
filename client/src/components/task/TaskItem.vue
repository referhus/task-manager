<script setup lang="ts">
import TagItem from '@/components/TagItem.vue';
import type { INotification, ITask, IUpdateTask } from "@/types";
import { useStore } from "vuex";
import { useTaskFolder } from "@/composables/useTaskFolder";

const props = defineProps<{
  item: ITask
}>()

const store = useStore()

const deleteTask = (id: number) => store.dispatch('tasks/deleteTask', id)
const updateTask = (data: IUpdateTask) => store.dispatch('tasks/updateTask', data)
const setNotification = (data: INotification) => store.dispatch('notification/setNotification', data)

const deleteHandler = async () => {
  await deleteTask(props.item.id)
  await setNotification({
    type: 'success',
    text: 'Задача успешно удалена!'
  })
}

const changeCompleteTask = async () => {
  await updateTask({
    id: props.item.id,
    completed: props.item.completed
  })

  await setNotification({
    type: 'success',
    text: 'Статус задачи успешно изменен!'
  })
}

const { getFolder } = useTaskFolder(props.item.folderId)
</script>

<template>
    <div
      class="task item"
      :class="{
        done: item.completed
      }"
      @click="changeCompleteTask"
    >
      <div class="task-body">
        <div class="task-checkbox">
          <span
            v-if="item.completed"
            class="material-symbols-outlined"
          >
            check
          </span>
        </div>
        <span class="task-name item-name">
          {{ item.title }}
        </span>
      </div>
      <span
        class="material-symbols-outlined delete"
        @click.stop="deleteHandler"
      >
        delete
      </span>

      <div
        class="task-tags"
        v-if="getFolder"
      >
        <tag-item
          :item="getFolder"
        ></tag-item>
      </div>
    </div>
</template>

<style lang="sass">
.task
  display: grid
  grid-template-columns: 1fr 68px
  gap: 10px
  align-items: center
  border-radius: 10px
  border: 1px solid #E6E4F0
  background: #FFF
  padding: 16px
  width: calc((100% - 16px) / 2)
  grid-template-areas: 'area-body area-buttons' 'area-tags area-date'
  min-height: 40px

  @media screen and (max-width: 1024px)
    width: 100%

  &-body
    grid-area: area-body
    cursor: pointer
    display: flex
    align-items: center
    gap: 10px
    overflow: hidden

  &-checkbox
    width: 19px
    height: 19px
    flex-shrink: 0
    border-radius: 4px
    border: 2px solid #BBBBBE
    color: white
    display: flex
    justify-content: center
    align-items: center

  .tag
    max-width: 110px

  &-tags
    grid-area: area-tags
    width: 100%

  &.done
    .task
      &-name
        text-decoration: line-through
        color: rgba(85, 119, 255, 0.80)

        &-checkbox
          background: rgba(85, 119, 255, 0.80)
          border: none
          span
            color: white

        &-tags
          pointer-events: none
          opacity: .5

  .delete
    margin: 0 0 auto auto

    &:hover
      color: red
</style>
