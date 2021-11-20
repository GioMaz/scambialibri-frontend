<template>
  <div class="notification-list" v-for="notification in notificationList" :key="notification">
    <Notification class="notification" :notification="notification" @click="deleteNotification(index)"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Notification from './Notification.vue'

export default defineComponent({
  name: 'NotificationList',
  props: [ 'notifications' ],
  components: {
    Notification
  },
  setup(props) {
    const notificationList = ref(props.notifications)

    const deleteNotification = (index: number) => {
      notificationList.value.pop(index)
    }

    return { notificationList, deleteNotification }
  }
});
</script>

<style scoped>
</style>
