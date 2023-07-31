<template>
    <div class="folder__item" :style="[{color: item.color}, {background: color}]">{{ item.name }}</div>    
</template>

<script>
import { hexToRGB } from '@/utils/hexToRGB';

export default {
    name: 'folder-item',
    props: ['item'],
    computed: {
        color() {
            return hexToRGB(this.item.color, 0.2)
        }
    }
}

</script>

<style lang="sass" scoped>
.folder__item 
    border-radius: 30px
    padding: 4px 10px
    width: max-content
    font-size: 12px
    font-weight: 600
</style>