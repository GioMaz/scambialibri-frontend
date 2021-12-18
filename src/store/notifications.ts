import { defineStore } from 'pinia'
import { ref } from 'vue';

export const useNotificationStore = defineStore('notifications', () => {
  const notifications = ref<{type?: 'error' | 'success', value?: string}[]>([])

  const addNotification = async (type: 'error' | 'success', value: string) => {
    notifications.value.push({
      type,
      value
    })
    setTimeout(removeNotification, 3000);
  }

  const removeNotification = async () => {
    notifications.value.shift()
  }

  return { notifications, addNotification }
})
