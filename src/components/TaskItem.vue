<template>
    <div 
        @click.self="openTask(item.isDone)"
        :class="[
            'task',
            { done: item.isDone }
        ]"
    >
        <span class="task-date">
            {{ item.date }}
        </span>
        <div class="task-buttons">
            <action-list 
                :list="actionList"
                @handleItem="handleItem"
            >
            </action-list>
            <!-- <button-cmp 
                icon="edit"
                @event="editTask"
            >
            </button-cmp>
            <button-cmp 
                icon="delete"
                @event="deleteItem"
            >
            </button-cmp> -->
        </div>
        <div 
            class="task-body"
            @click="changeDoneTask"
        >
            <div class="task-checkbox" >
                <span 
                    v-if="item.isDone"
                    class="material-icons"
                >
                    done
                </span> 
            </div>
            <span class="task-name">
                {{ item.name }}
            </span>
        </div>

    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import ActionList from '@/components/ActionList';
// import ButtonCmp from '@/components/ButtonCmp';

export default {
    name: 'TaskItem',
    props: {
        item: Object
    },
    data() {
        return {
            actionList: [
                {
                    icon: 'edit',
                    action: 'edit'
                },
                {
                    icon: 'delete',
                    action: 'delete'
                },
            ]
        }
    },
    components: {
        ActionList
        // ButtonCmp,
    },
    computed: {
        ...mapState('notification', ['notifications']),
    },
    methods: {
        ...mapMutations('tasks', ['setTask', 'setDoneTask']),
        ...mapMutations('modal', ['openModal']),
        ...mapMutations('notification', ['setNotification', 'closeNotification']),

        deleteTask() {
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

        handleItem(item) {
            if (item.action === 'edit') {
                this.editTask();
            } else if (item.action === 'delete') {
                this.deleteTask();
            } 
        },

        changeDoneTask() {
            this.setDoneTask(this.item.id)
        },

        openTask(done) {
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
        display: grid
        grid-template-columns: 1fr 68px
        gap: 10px
        align-items: center
        border-radius: 10px
        border: 1px solid #E6E4F0
        background: #FFF
        padding: 16px
        width: calc((100% - 16px) / 2)
        grid-template-areas: 'area-body area-buttons' '. area-date' 
        cursor: pointer
        transition: .3s

        &:hover 
            background: rgba(242,241,243, .7)

        & input
            padding: 8px

        &-date 
            grid-area: area-date
            font-size: 12px
            color: #A3A3A3
            pointer-events: none

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
            .material-icons
                font-size: 16px
            
        &-name 
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis

        &-buttons
            grid-area: area-buttons
            display: flex
            align-items: center
            justify-content: flex-end
            gap: 20px
            color: gray

        &-button 
            opacity: 0.7
            cursor: pointer
            transition: .3s

            &:hover 
                opacity: 1

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
                
                &-buttons
                    pointer-events: none
                    opacity: .5

</style>
