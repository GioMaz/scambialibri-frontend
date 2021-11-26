<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider placement="bottom-right">
      <router-view/>
    </n-message-provider>
  </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  NMessageProvider,
  NConfigProvider,
} from 'naive-ui'

export default defineComponent({
  name: 'Login',
  components: {
    NMessageProvider,
    NConfigProvider
  },
  setup() {
    const themeOverrides = {
    }
    return { themeOverrides }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
