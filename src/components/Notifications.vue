<template>
  <div v-for="notification in notificationsStore.notifications" :key="notification">
    <div class="p-4 mx-4 mt-4 lg:w-1/4 bottom-0 right-0 rounded-md text-white" :id="notification.type">
      {{ notification.value }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useNotificationStore } from '../store/notifications'

export default defineComponent({
  name: 'Notifications',
  components: {
  },
  setup() {
    const notificationsStore = useNotificationStore();
    return { notificationsStore }
  }
})
</script>

<style>
#error {
  background-color: #DA7373;
}

#success {
  background-color: #6BB748;
}
</style>
