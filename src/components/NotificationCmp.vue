<template>
    <div class="notification-wrap">
        <div 
            v-for="notification in notifications"
            class="notification"
            :class="notification.type"
            :key="notification.id"
            @click="closeNotification(notification.id)"
        >
            <span 
                class="notification-icon material-icons" 
                v-text="notification.type == 'success' ? 'check_circle_outline' : 'report_problem'"
            ></span>
            <span class="notification-body">{{ notification.text }}</span>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    name: 'notification-cmp',
    data() {
        return {
        }
    },
    computed: {
        ...mapState('notification', ['notifications']),
    },
    methods: {
        ...mapMutations('notification', ['closeNotification']),
    },
}
</script>



<style lang="sass">
.notification
    display: flex
    align-items: center 
    gap: 10px
    padding: 10px
    word-wrap: break-word
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12)
    border-radius: 5px
    pointer-events: auto

    &-wrap
        max-width: 300px
        width: 100%
        max-height: calc(100vh - 24px - 30px)
        height: 100%
        overflow: hidden
        position: fixed
        bottom: 30px
        right: 30px
        display: flex
        flex-direction: column-reverse
        gap: 10px
        z-index: 10
        pointer-events: none

    &.success
        color: #02B36E
        background: #e3fbe3  
        
    &.error 
        color: #e75d5d
        background: #fbe3e3
</style>
