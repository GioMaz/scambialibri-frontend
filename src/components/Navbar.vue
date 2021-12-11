<template>
  <div class="mx-auto my-6 w-1/2 md:w-1/4">
    <img src="../assets/logo.svg" alt="">
  </div>
  <div class="">
    <ul class="flex justify-center">
      <li class="text-center mx-4 text-lg">
        <router-link to="/books/to-buy" replace>Libri da comprare</router-link>
      </li>
      <li class="text-center mx-4 text-lg">
        <router-link to="/books/to-sell" replace>Libri da vendere</router-link>
      </li>
      <li class="text-center mx-4 text-lg">
        <router-link to="/books/to-sell" replace>Resoconti</router-link>
      </li>
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
