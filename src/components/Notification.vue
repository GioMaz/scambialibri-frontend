<template>
  <div class="notification">
    <div v-show="isVisible">
      {{ notification.message }}
      {{ notification.status }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Notification',
  props: [ 'notification' ],
  components: {
  }
});
</script>
