<template>
  <navbar/>
  <router-view/>
  <notifications/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Navbar from '../components/Navbar.vue'
import Notifications from '../components/Notifications.vue'

import { useUserStore } from '../store/user'

import router from '../router'

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
    Notifications
  },
  setup() {
    const userStore = useUserStore()

    if (userStore.user == undefined) {
      // uncomment for debug
      // router.push('/login')
    }
  }
});
</script>
