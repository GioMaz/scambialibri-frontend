import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useNotificationStore = defineStore('notifications', () => {
  const notifications = ref<{type?: 'error' | 'alert' | 'success', value?: string}[]>([])
  const modal = ref<{title: string, value: string}>()

  const addNotification = async (type: 'error' | 'alert' | 'success', value: string) => {
    notifications.value.push({
      type,
      value
    })
    setTimeout(removeNotification, 3000);
  }

  const removeNotification = async () => {
    notifications.value.shift()
  }

  const addModal = async (title: string, value: string) => {
    modal.value = { title, value }
  }

  return {
    notifications,
    addNotification,
    removeNotification,
    modal,
    addModal
  }
})
