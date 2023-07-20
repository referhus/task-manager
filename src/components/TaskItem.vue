<template>
    <div 
        @click.self="open(item.isDone)"
        :class="[
            'task',
            {
            done: item.isDone
            }
        ]"
    >
        <span 
            class="task-name"
            @click="changeDoneTask"
        >
            {{ item.name }}
        </span>
        <div class="task-buttons">
            <button-cmp 
                icon="edit"
                @event="editTask"
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
import { mapState, mapMutations } from 'vuex';
import ButtonCmp from '@/components/ButtonCmp';

export default {
    name: 'TaskItem',
    props: {
        item: Object
    },
    data() {
        return {
        }
    },
    components: {
        ButtonCmp
    },
    computed: {
        ...mapState('notification', ['notifications']),
    },
    methods: {
        ...mapMutations('tasks', ['setTask', 'setDoneTask']),
        ...mapMutations('modal', ['openModal']),
        ...mapMutations('notification', ['setNotification', 'closeNotification']),

        deleteItem() {
            this.setTask({id: this.item.id})
            this.setNotification({
                type: 'error',
                text: 'Задача успешно удалена!'
            })
            setTimeout(() => {
                this.closeNotification(this.notifications.length)
            }, 4000)
        },

        editTask() {
            this.openModal({
                newState: 'ModalTask',
                props: {
                    title: 'редактировать',
                    type: 'edit',
                    item: this.item
                },
            })
        },

        changeDoneTask() {
            this.setDoneTask(this.item.id)
        },

        open(done) {
            !done &&
                this.openModal({
                    newState: 'ModalTask',
                    props: {
                        title: 'просмотр',
                        type: 'view',
                        item: this.item
                    },
                })
        }
    }
}
</script>

<style lang="sass" scoped>
    .task 
        display: flex
        justify-content: space-between
        align-items: center
        border-radius: 10px
        border: 1px solid #E6E4F0
        background: #F9F8FF
        padding: 12px 10px

        &.done 
            opacity: 0.5

        &.done .task-name 
            text-decoration: line-through  

        &.done .task-buttons
            pointer-events: none

        & input
            padding: 8px

        &-name 
            padding: 10px
            cursor: pointer

        &-buttons, &-edit 
            display: flex
            align-items: center
            gap: 20px

        &-button 
            opacity: 0.7
            cursor: pointer
            transition: .3s

            &:hover 
            opacity: 1
</style>
