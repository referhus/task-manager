import { useStore } from "vuex";
import { computed } from "vue";

export function useTaskFolder(id: number) {
  const store = useStore()
  const folders = computed(() => store.state.folders.folders)
  const getFolder = computed(() => folders.value.find((el) => el.id === id) || null)

  return {
    getFolder
  }
}
