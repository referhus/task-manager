<template>
    <div class="container">
        <section class="container-block" v-if="tasks.length">
            <div class="container-head">
                <h2>Задачи</h2>
                <router-link 
                    to="/tasks" 
                    class="link"
                >
                    Смотреть все
                </router-link>
            </div>
            <div class="cards">
                <task-item 
                    v-for="task in tasks.slice(0, 4)" 
                    :key="`task-${task.id}`"
                    :item="task"
                    no-actions
                ></task-item>
            </div>
        </section>
        <section class="container-block" v-if="folders.length">
            <div class="container-head">
                <h2>Папки</h2>
                <router-link 
                    to="/folders"   
                    class="link"
                >
                    Смотреть все
                </router-link>
            </div>
            <div class="cards">
                <folder-item 
                    v-for="folder in folders.slice(0, 4)" 
                    :key="`folder-${folder.id}`"
                    :item="folder"
                    no-actions
                ></folder-item>
            </div>
        </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import TaskItem from '@/components/TaskItem';
import FolderItem from '@/components/FolderItem';

export default {
    name: 'HomeView',
	components: {
		TaskItem,
		FolderItem
	},
    computed: {
		...mapState('tasks', ['tasks']),
		...mapState('folders', ['folders']),
	},
}
</script>
