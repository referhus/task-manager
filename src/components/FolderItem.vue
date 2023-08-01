<template>
    <div class="folder item">
        <div class="folder-icon" :style="{background: item.color}">
            <div class="folder-icon-wrap"></div>
        </div>
        <span class="folder-name item-name">
            {{ item.name }}
            ({{ count }})
        </span>
        <div class="folder-date item-date">
            {{ item.date }}
        </div>
        <div 
            class="folder-buttons" 
            v-if="!noActions"
        >
            <action-list 
                :list="actionList"
                @handleItem="handleItem"
            >
            </action-list>
        </div>
    </div>
</template>

<script>
import ActionList from '@/components/ActionList';
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'folder-item',
    props: {
        item: {
            type: Object
        },
        noActions: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            actionList: [
                {
                    icon: 'delete',
                    action: 'delete'
                },
            ]
        }
    },
    components: {
        ActionList,
    },
    computed: {
        ...mapState('notification', ['notifications']),
        ...mapState('tasks', ['tasks']),
        count() {
            let count = 0
            this.tasks.map(item => {
                item.folders.map(el => {
                   (el.id == this.item.id) && count++
                })
            })
            return count
        }
    },
    methods: {
        ...mapMutations('tasks', ['setFoldersInTask']),
        ...mapMutations('folders', ['setFolder']),
        ...mapMutations('notification', ['setNotification', 'closeNotification']),

        deleteFolder() {
            this.setFolder({id: this.item.id})
            this.setFoldersInTask(this.item.id)
            this.setNotification({
                type: 'error',
                text: 'Папка успешно удалена!'
            })
            setTimeout(() => {
                this.closeNotification(this.notifications.length)
            }, 4000)
        },

        handleItem(item) {
            if (item.action === 'delete') {
                this.deleteFolder();
            } 
        },
    },
    mounted() {
        this.count
    }
}
</script>

<style scoped lang="sass">
.folder
    padding: 22px
    width: calc((100% - 22px) / 2)
    height: 139px
    border-radius: 0px 10px 10px 10px
    border: 1px solid #E6E4F0
    background: #FFF 
    position: relative
    display: grid
    grid-template-areas: 'area-icon area-name area-name' 'area-date area-date area-buttons'
    grid-template-columns: 28px 1fr 1fr
    gap: 7px
    margin-top: 20px
    line-height: 28px
    align-content: space-between

    @media screen and (max-width: 1024px)
        width: 100%

    &:before 
        position: absolute
        content: ''
        width: 45%
        height: 20px
        border: 1px solid #E6E4F0
        border-bottom-color: #fff
        border-radius: 10px 10px 0 0
        background: #fff
        transform: perspective(70px) rotateX(40deg)
        top: -20px
        left: 5px
        transition: .3s

    &-icon 
        grid-area: area-icon
        width: 28px
        height: 28px
        border-radius: 10px
        display: flex
        justify-content: center
        align-items: center
        &-wrap
            width: 8px
            height: 8px
            background: #fff

    &-name 
        grid-area: area-name

    &-date 
        grid-area: area-date
    
    &-buttons 
        grid-area: area-buttons
        margin-left: auto
</style>