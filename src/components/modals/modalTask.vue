<template>
    <div class="add-block">
        <h2 class="title add-block__title">
            {{ props.title }}
        </h2>
        <input 
          v-model="task.name"
          type="text" 
          placeholder="Заголовок"
          :disabled="props.type == 'view'"
        >
        <textarea
            v-model="task.desc"
            placeholder="Описание"
            :class="{ 'not-valid': !isValid }"
            class="add-block__desc"
            :disabled="props.type == 'view'"
        />
        <span 
          v-if="props.type !== 'view'" 
          class="add-block__desc-count"> {{ task.desc.length }}/200 символов </span>
        <button-cmp
          v-if="props.type !== 'view'" 
          class="add-block__btn"
          :text="'Отправить'"
          border
          @event="handlerBtn"
        ></button-cmp>
    </div>
</template>

<script>
import ButtonCmp from '@/components/ButtonCmp';
import { mapMutations } from "vuex";

export default {
  name: 'add-task',
  props: ['props'],
  components: {
    ButtonCmp,
  },
  data(){
    return {
      task: {
        name: '',
        desc: ''
      },
      isValid: true,
    }
  },
  methods: {
    ...mapMutations('modal', ['closeModal']),
    ...mapMutations('tasks', ['addTask', 'setTask']),

    handlerBtn() {
      switch (this.props.type) {
        case 'add':
          this.addTask(this.task)
          break
        case 'edit':
            this.setTask({
              ...this.props.item,
              ...this.task
            })
          break
      }

      this.closeModal()
    },

  },
  mounted() {
    if (this.props.item) {
      this.task.name = this.props.item.name
      this.props.item.desc && (this.task.desc = this.props.item.desc)
    }
  }

}
</script>

<style lang="sass">
.add-block
  display: flex
  flex-direction: column
  gap: 10px

  &__btn
    background: gray
    color: white
  
  input, textarea
    padding: 5px

  textarea
    resize: none
</style>