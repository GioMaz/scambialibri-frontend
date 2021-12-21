<template>
  <div class="absolute bottom-0 right-0 w-full md:w-96" @click="notificationsStore.removeNotification">
    <div v-for="notification in notificationsStore.notifications" :key="notification">
      <div class="p-4 m-4 rounded-lg text-white cursor-pointer" :id="notification.type">
        {{ notification.value }}
      </div>
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
  background-color: #85B548;
}
</style>
