import { ref } from "vue";

export function useLoading() {
  const isLoading = ref(false)

  async function loadingCallback(cb: () => Promise<void>) {
    try {
      isLoading.value = true
      await cb()
    } finally {
      isLoading.value = false
    }
  }

  return {
    isLoading,
    loadingCallback,
  }
}
