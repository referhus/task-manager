<template>
    <div class="container">
        <h1>Папки</h1>
        <div class="folders">
            <div 
                class="folder" 
                v-for="item in folders" 
                :key="item.id"
            >
                <div class="folder-icon" :style="{background: item.color}">
                    <div class="folder-icon-wrap"></div>
                </div>
                <span>
                    {{ item.name }}
                </span>
            </div>
        </div>
    </div>
</template>
<script> 

import { mapState } from 'vuex';

export default {
	name: 'FoldersView',
	data() {
		return {
		}
	},
	components: {
	},
	computed: {
		...mapState('folders', ['folders'])
	},
	methods: {
	},
}
</script>

<style lang="sass" scoped>
.folders
    display: flex
    gap: 22px
    flex-wrap: wrap
    .folder
        padding: 22px
        width: calc((100% - 22px) / 2)
        height: 139px
        border-radius: 0px 10px 10px 10px
        border: 1px solid #E6E4F0
        background: #FFF 
        position: relative
        display: flex
        gap: 7px
        margin-top: 24px
        line-height: 28px

        @media screen and (max-width: 1024px)
            width: 100%

        &:before 
            position: absolute
            content: ''
            width: 45%
            height: 24px
            border: 1px solid #E6E4F0
            border-bottom-color: #fff
            border-radius: 10px 10px 0 0
            background: #fff
            transform: perspective(70px) rotateX(40deg)
            top: -24px
            left: 7px

        &-icon 
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
</style>