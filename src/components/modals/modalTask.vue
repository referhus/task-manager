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
import { mapState, mapMutations } from "vuex";

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
  computed: {
    ...mapState('notification', ['notifications']),
  },
  methods: {
    ...mapMutations('modal', ['closeModal']),
    ...mapMutations('tasks', ['addTask', 'setTask']),
    ...mapMutations('notification', ['setNotification', 'closeNotification']),

    handlerBtn() {
      switch (this.props.type) {
        case 'add':
          this.addTask(this.task)
          this.setNotification({
            type: 'success',
            text: 'Задача успешно создана!'
          })
          setTimeout(() => {
            this.closeNotification(this.notifications.length)
          }, 4000)
          break
        case 'edit':
            this.setTask({
              ...this.props.item,
              ...this.task
            })
            this.setNotification({
              type: 'success',
              text: 'Задача успешно изменена!'
            })
            setTimeout(() => {
              this.closeNotification(this.notifications.length)
            }, 4000)
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
    border-radius: 5px
    border: 1px solid gray
    outline: none

  textarea
    resize: none
    
</style>