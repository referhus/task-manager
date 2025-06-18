<script setup lang="ts">
import TaskItem from "@/components/task/TaskItem.vue";
import ButtonCmp from "@/components/ButtonCmp.vue";

import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import { useLoading } from "@/composables/useLoading.ts";
import AppLoader from "@/components/AppLoader.vue";
import TaskFilter from "@/components/task/TaskFilter.vue";

const store = useStore()

const tasks = computed(() => store.getters["tasks/getFilteredTasks"])
const folders = computed(() => store.state.folders.folders)
const postNewTask = (value) => store.dispatch("tasks/postNewTask", value);

const initialValues = {
  title: '',
  folder: ''
}
const newTask = ref({ ...initialValues })
const setNotification = (data) => store.dispatch("notification/setNotification", data)
const commonLoading = useLoading()

const handlerAddTask = async () => {
  if (!newTask.value.title)
    return

  await postNewTask({
    title: newTask.value.title,
    folderId: newTask.value.folder
  })

  await setNotification({
    type: 'success',
    text: 'Создана новая задача!'
  })

  newTask.value = { ...initialValues }
}

async function getRequests() {
  const requests = [
    await store.dispatch("tasks/getTasks"),
    await store.dispatch("folders/getFolders"),
    await store.dispatch("statuses/getStatuses")
  ]
  await Promise.all(requests)
}

onMounted(async () => {
  await commonLoading.loadingCallback(async () => await getRequests())
})
</script>

<template>
	<section class="container">
		<div class="container-head">
			<h1>Задачи</h1>
		</div>
    <form
      class="task-form"
      @submit.prevent="handlerAddTask"
    >
      <input
        v-model="newTask.title"
        type="text"
        name="task-title"
        placeholder="Введите название задачи"
      >
      <select
        name="folder"
        v-model="newTask.folder"
      >
        <option selected value="">
          Без папки
        </option>
        <option
          v-for="item in folders"
          :key="item.title"
          :value="item.id"
        >
          {{ item.title }}
        </option>
      </select>
      <button-cmp
        icon="add"
        border
        :disabled="commonLoading.isLoading.value"
      ></button-cmp>
    </form>
    <TaskFilter />
		<div class="tasks-cards cards">
      <template v-if="!commonLoading.isLoading.value" >
        <task-item
          v-for="task in tasks"
          :key="task.id"
          :item="task"
        ></task-item>
      </template>
      <AppLoader v-else />
		</div>
	</section>
</template>

<style lang="sass">
.task-form
  display: flex
  gap: 20px

  select
    min-width: 200px
    overflow: auto

</style>
