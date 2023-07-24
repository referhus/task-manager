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
            <!-- <dropdown-search
                :item="category"
                :id="i"
                :dropdownList="category.id === 'region' ? true : false"
                @setElem="setElem"
                @search="search"
                classContainer="t-input t-filter-list__item-search"
            ></dropdown-search> -->

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
import { mapState, mapMutations } from "vuex";

export default {
    name: 'add-task',
    props: ['props'],
    components: {
        ButtonCmp,
    },
    data() {
        return {
            task: {
                name: '',
                desc: '', 
                date: ''
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
            this.checkedCheckbox[el.id] = el.el.id ? [el.el.id] : [];
            this.arrFilterSearch[el.id].active = el.el;
            this.changeCheckbox(el.item, el.id, this.checkedCheckbox[el.id]);
        },

        changeCheckbox(item, i, arrChecked) {
            // если тип checkbox
            if (arrChecked && Array.isArray(arrChecked)) {
                this.query[item.id] = arrChecked.length ? arrChecked.join() : undefined;
                // если тип radio
            } else if (item.type === 'radio') {
                this.query[item.id] = this.checkedRadio[i] ? this.checkedRadio[i] : undefined;
            } 
        },

        search(el) {
            const index = this.arrFilterSearch.map((el) => el.id).indexOf(el.id);
            if (!el.value) {
                this.arrFilterSearch[index].value = this.defaultListCategories;
            } else {
                // this.arrFilterSearch[index].value = response.data;
            }
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
        span
            color: white
  
    input, textarea
        padding: 5px
        border-radius: 5px
        border: 1px solid gray

    textarea
        resize: none
    
</style>