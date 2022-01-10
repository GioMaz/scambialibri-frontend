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
import { useNotificationStore } from '@/store/notifications';
import { defineComponent } from 'vue';

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

#alert {
  background-color: #EEA33C;
}

#success {
  background-color: #71BE56;
}
</style>
