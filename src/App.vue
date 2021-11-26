<template>
  <n-message-provider>
    <router-view/>
  </n-message-provider>
</template>

<script>
import { defineComponent } from 'vue';
import { NMessageProvider } from 'naive-ui'
export default defineComponent({
  name: 'Login',
  components: { NMessageProvider }
})
</script>
    

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
