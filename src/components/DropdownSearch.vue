<template>
    <div
        @click="dropdown"
        class="dropdown"
    >
        <input
            type="text"
            :placeholder="placeholder"
            :name="item.id"
            v-model="search"
            @input="
                $emit('search', {
                    value: $event.target.value,
                    id: id,
                })
            "
        />
        <div
            v-show="dropdownList && visible"
            @click.stop
            class="dropdown-list"
        >
            <template v-if="item && item.length">
                <div
                    v-for="(el, key) in item"
                    :key="key"
                    class="dropdown-list__item"
                    @click="sendToParent(el)"
                >
                    {{ el.name }}
                </div>
            </template>
            <template v-else>
                <p class="dropdown-list__item __empty">
                    Совпадений не найдено
                </p>
            </template>
        </div>
    </div>
</template>

<script>
import { toggle } from '@/utils/mixins/toggle';

export default {
    name: 'dropdown-search',
    mixins: [toggle],
    props: {
        item: {
            type: Array,
            default: () => ([]),
        },
        classContainer: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: 'Поиск'
        },
        dropdownList: {
            type: Boolean,
            default: false
        },
        closeDropdown: {
            type: Boolean,
            default: true
        },
        id: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            search: ''
        };
    },
    methods: {
        sendToParent(el) {
            this.search = ''
            this.$emit('setElem', el);
            this.hide();
        },
        dropdown() {
            if (this.dropdownList) {
                this.show()
            }
        },
        dropdownHide() {
            if (this.visible && this.dropdownList && this.closeDropdown) {
                this.hide()
            }
        }
    },
    mounted() {
    }
};
</script>


<style lang="sass" scoped>
.dropdown 
    width: 100%
    position: relative

    &-list
        position: absolute
        top: 115%
        width: 100%
        z-index: 1
        background: rgba(255, 255, 255, 0.8)
        box-shadow: 0 0 1px rgba(16, 14, 28, 0.04), 0 2px 16px rgba(16, 14, 28, 0.06)
        backdrop-filter: blur(8px)
        border-radius: 16px
        max-height: 56px
        overflow: auto

        &__item
            cursor: pointer
            padding: 4px 10px
            &.__empty
                pointer-events: none

</style>