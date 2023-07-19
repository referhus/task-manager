<template>
  <section class="container">
    <h1>Задачи</h1>
    <button-cmp 
      icon="add"
      text="Добавить задачу"
      border
      @event="handlerAddTask"
    ></button-cmp>
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
    ...mapMutations('modal', ['openModal']),
    handlerAddTask() {
      this.openModal({
        newState: 'ModalTask',
        props: {
            title: 'создать',
            type: 'add',
        },
      })
    }
  },
}
</script>

<style lang="sass">
  .tasks-add 
    display: flex
    gap: 20px
    justify-content: center
</style>
