<template>
  <Notifications/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Notifications from '../components/Notifications.vue'

export default defineComponent({
  name: 'ToBuy',
  components: {
    Notifications
  }
})
</script>
