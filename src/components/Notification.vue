<template>
  <div class="notification">
    <div v-show="isVisible">
      {{ notification.message }}
      {{ notification.status }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Notification',
  props: [ 'notification' ],
  components: {
  },

  setup() {
    const isVisible = ref(true)

    return { isVisible };
  }

});
</script>
