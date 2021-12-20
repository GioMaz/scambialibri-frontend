<template>
  <div class="mx-auto my-8 w-64">
    <img src="../assets/logo.svg" alt="">
  </div>
  <div class="mb-4 overflow-x-auto">
    <ul class="flex justify-left md:justify-center">
      <li class="mx-4 text-center whitespace-nowrap">
        <router-link to="/books/to-buy" replace>Libri da comprare</router-link>
      </li>
      <li class="mx-4 text-center whitespace-nowrap">
        <router-link to="/books/to-sell" replace>Libri da vendere</router-link>
      </li>
      <li class="mx-4 text-center whitespace-nowrap">
        <router-link to="/books/purchases-report" replace>Resoconti</router-link>
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
