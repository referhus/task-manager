<template>
    <form class="add-block" @submit.prevent="handlerBtn">
        <h2 class="title add-block__title">
            {{ props.title }}
        </h2>
        <input 
            v-model="task.name"
            type="text" 
            placeholder="Заголовок"
            :disabled="props.type == 'view'"
            autofocus
        >
        <textarea
            v-model="task.desc"
            placeholder="Описание"
            :class="{ 'not-valid': !isValid }"
            class="add-block__desc"
            :disabled="props.type == 'view'"
            maxlength="200"
        />
        <span 
            v-if="props.type !== 'view'" 
            class="add-block__desc-count"> {{ task.desc.length }}/200 символов </span>

        <dropdown-search
            v-if="props.type !== 'view'"
            :item="results"
            placeholder="Поиск по папкам"
            :id="'folders'"
            dropdown-list
            @setElem="setElem"
            @search="search"
        ></dropdown-search>

        <div class="task-folders">
            <folder-item 
                v-for="item in task.folders" 
                :key="`folder-${item.id}`"
                :item="item"
            ></folder-item>
        </div>

        <button-cmp
            v-if="props.type !== 'view'" 
            class="add-block__btn"
            text="Отправить"
            border
            @event="handlerBtn"
        ></button-cmp>
    </form>
</template>

<script>
import ButtonCmp from '@/components/ButtonCmp';
import DropdownSearch from '@/components/DropdownSearch';
import FolderItem from '@/components/FolderItem';
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
    name: 'add-task',
    props: ['props'],
    components: {
        ButtonCmp,
        DropdownSearch,
        FolderItem
    },
    data() {
        return {
            task: {
                name: '',
                desc: '', 
                date: '',
                folders: []
            },
            isValid: true,
            results: []
        }
    },
    computed: {
        ...mapState('notification', ['notifications']),
        ...mapState('folders', ['folders']),
        ...mapGetters('folders', ['getFoldersByName'])
    },
    methods: {
        ...mapMutations('modal', ['closeModal']),
        ...mapMutations('tasks', ['addTask', 'setTask']),
        ...mapMutations('notification', ['setNotification', 'closeNotification']),

        handlerBtn() {
        // toDo: добавить валидацию
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
                default:
                    return false
            }
            this.closeModal()
        },

        setElem(el) {
            this.task.folders.push(el)
            console.log(this.task.folders)
        },

        search(el) {
            if (!el.value) {
                this.results = [...this.folders]
            } else {
                this.results = this.getFoldersByName(el.value)
            }
        },

    },
    mounted() {
        if (this.props.item) {
            this.task.name = this.props.item.name
            this.props.item.desc && (this.task.desc = this.props.item.desc)
            this.props.item.folders.length && (this.task.folders = [...this.props.item.folders])
        }
        this.results = [...this.folders]
        
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
        span
            color: white
  
    input, textarea
        padding: 5px
        border-radius: 5px
        border: 1px solid gray
        width: 100%

    textarea
        resize: none
    
</style>