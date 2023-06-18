<template>
  <section class="container">
    <router-link to="/">Назад</router-link>
    <h1>Задачи</h1>
    <form @submit.prevent="handlerAddTask" class="tasks-add">
      <input 
        type="text" 
        placeholder="добавить задачу" 
        v-model="newTask"
      >
      <button-cmp 
        icon="add"
        @event="handlerAddTask"
      ></button-cmp>
    </form>
    <div class="tasks-cards" v-for="task in tasks" :key="task.id">
      <task-item 
        :item="task"
      ></task-item>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import TaskItem from '@/components/TaskItem';
import ButtonCmp from '@/components/ButtonCmp';

export default {
  name: 'TasksView',
  data() {
    return {
      newTask: ''
    }
  },
  components: {
    TaskItem,
    ButtonCmp
  },
  computed: {
      ...mapState('tasks', ['tasks'])
  },
  methods: {
    ...mapActions('tasks', ['getTasks']),
    ...mapMutations('tasks', ['addTask']),
    handlerAddTask() {
      if (this.newTask) {
        this.addTask(this.newTask)
        this.newTask = ''
      }
    }
  },
}
</script>

<style>
  .tasks-add {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
</style>
