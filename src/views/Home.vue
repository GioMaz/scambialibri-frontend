<template>
  <navbar/>
  <router-view/>
  <notifications/>
</template>

<script lang="ts">
import { useAuthStore } from "@/store/auth";
import { defineComponent } from "@vue/runtime-core";
import Navbar from "../components/Navbar.vue"
import Notifications from "../components/Notifications.vue"

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
    Notifications
  },
  setup() {
    const userStore = useAuthStore()

    if (userStore.user === undefined) {
      // uncomment for debug
      // router.push('/login')
    }
  }
});
</script>
