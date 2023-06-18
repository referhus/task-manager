<template>
  <div :class="[
      'task',
      {
        done: item.isDone
      }
    ]"
  >
    <span 
      class="task-name"
      v-if="!edit"
      @click="changeDoneTask"
    >
      {{ item.name }}
    </span>
    <form 
      v-else 
      class="task-edit"
      @submit.prevent="editTask"
    >
      <input 
        v-click-outside="clickOut"
        type="text" 
        placeholder="Редактировать" 
        autofocus
        v-model="editTaskInput" 
      >
      <button-cmp 
        v-if="editTaskInput !== item.name"
        icon="check"
        @event="editTask"
      >
      </button-cmp>
    </form>
    <div class="task-buttons">
      <button-cmp 
        icon="edit"
        @event="edit = true"
      >
      </button-cmp>
      <button-cmp 
        icon="delete"
        @event="deleteItem"
      >
      </button-cmp>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ButtonCmp from '@/components/ButtonCmp';

export default {
  name: 'TaskItem',
  props: {
    item: Object
  },
  data() {
    return {
      editTaskInput: '',
      edit: false,
    }
  },
  components: {
    ButtonCmp
  },
  methods: {
    ...mapMutations('tasks', ['setTask', 'setDoneTask']),

    deleteItem() {
      this.setTask({id: this.item.id})
    },

    editTask() {
      this.setTask({
        ...this.item,
        name: this.editTaskInput,
      })
      this.edit = false
    },

    changeDoneTask() {
      this.setDoneTask(this.item.id)
    },

    clickOut() {
      this.edit = false
    },
  },
  mounted() {
    this.editTaskInput = this.item.name
  }
}
</script>

<style scoped>
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.task.done {
  opacity: 0.5;
}
.task.done .task-name {
  text-decoration: line-through;
}

.task.done .task-buttons {
  pointer-events: none;
}

.task input {
  padding: 8px;
}

.task-name {
  padding: 10px;
  cursor: pointer;
}

.task-buttons, .task-edit {
  display: flex;
  align-items: center;
  gap: 20px;
}

.task-button {
  opacity: 0.7;
  cursor: pointer;
  transition: .3s;
}
.task-button:hover {
  opacity: 1;
}

</style>
