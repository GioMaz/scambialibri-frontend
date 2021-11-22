<template>
  <div class="notification">
    {{ notification.message }}
    {{ notification.status }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Notification',
  props: [ 'notification' ],
  components: {
  },
  setup(props, { emit }) {
    setTimeout(function() { () => emit('deleteNotification', 0) }, 1000);
  }
});
</script>
