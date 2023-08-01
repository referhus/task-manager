<template>
    <div 
        class="tag" 
        :style="[
            {color: item.color}, 
            {background: color}
        ]"
    >
        <span>
            {{ item.name }}
        </span>
        <button-cmp
            v-if="deleteIcon"
            icon="delete"
            :color="item.color"
            @event="handler"
        >
        </button-cmp>
    </div>    
</template>

<script>
import { hexToRGB } from '@/utils/hexToRGB';
import ButtonCmp from './ButtonCmp.vue';

export default {
    name: 'folder-item',
    props: {
        item: {
            type: Object,
            default: () =>({})
        },
        deleteIcon: {
            type: Boolean,
            default: false
        },
        id: {
            type: Number
        }
    },
    components: {
        ButtonCmp
    },
    computed: {
        color() {
            return hexToRGB(this.item.color, 0.2)
        }
    },
    methods: {
        handler() {
            this.$emit('delete-item', this.id)
        }
    }
}

</script>

<style lang="sass" scoped>
.tag
    border-radius: 30px
    padding: 4px 10px
    width: max-content
    font-size: 12px
    font-weight: 600
    display: flex 
    gap: 5px
    align-items: center

    span
        color: inherit
        font-size: inherit
        white-space: nowrap
        text-overflow: ellipsis
        overflow: hidden
</style>