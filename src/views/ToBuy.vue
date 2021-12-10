<template>
  <Navbar/>
  <Notifications/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Navbar from '../components/Navbar.vue'
import Notifications from '../components/Notifications.vue'

export default defineComponent({
  name: 'ToBuy',
  components: {
    Navbar,
    Notifications
  }
})
</script>
