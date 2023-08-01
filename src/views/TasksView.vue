<template>
	<section class="container">
		<div class="container-head">
			<h1>Задачи</h1>
			<button-cmp 
				icon="add"
				border
				@event="handlerAddTask"
			></button-cmp>
		</div>
		<div 
			class="tasks-cards cards" 
		>
			<task-item 
				v-for="task in tasks" 
				:key="task.id"
				:item="task"
			></task-item>
		</div>
	</section>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex';
import TaskItem from '@/components/TaskItem';
import ButtonCmp from '@/components/ButtonCmp';

export default {
	name: 'TasksView',
	data() {
		return {
		}
	},
	components: {
		TaskItem,
		ButtonCmp
	},
	computed: {
		...mapState('tasks', ['tasks'])
	},
	methods: {
		...mapActions('tasks', ['getTasks']),
		...mapMutations('tasks', ['addTask']),
		...mapMutations('modal', ['openModal']),

		handlerAddTask() {
			this.openModal({
				newState: 'ModalTask',
				props: {
					title: 'создать',
					type: 'add',
				},
			})
		}
	},
}
</script>


<style lang="sass">

</style>