import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoldersView from '../views/FoldersView.vue'
FoldersView
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/tasks',
        name: 'tasks',
        component: () => import('../views/TasksView.vue')
    },
    {
        path: '/folders',
        name: 'folders',
        component: () => import('../views/FoldersView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
