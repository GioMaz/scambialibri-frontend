<template>
  <div class="mx-auto my-6 w-1/2 md:w-1/4">
    <img src="../assets/logo.svg" alt="">
    <!-- Lo ScambiaLibri -->
  </div>
  <div class="m-auto">
    <ul class="grid grid-cols-3">
      <li class="text-center">Libri da comprare</li>
      <li class="text-center">Libri da vendere</li>
      <li class="text-center">Resoconti</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Navbar',
  components: {
  }
})
</script>

<style>
</style>
