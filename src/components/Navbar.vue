<template>
  <!-- navbar-upper -->
  <div class="flex justify-between items-center bg-primary text-white h-16">
    <!-- logo -->
    <div class="mx-4 md:mx-6">
    <router-link to="/books/to-buy">
      <img src="../assets/logo-white.svg" alt="" class="w-40">
    </router-link>
    </div>
    <!-- email -->
    <div class="mr-4 md:mx-6">
      <router-link to="/settings">
        email@email.com
      </router-link>
    </div>
  </div>

  <!-- navbar lower -->
    <ul class="flex space-x-6 items-center overflow-x-scroll h-16 mx-2 md:mx-4">
      <li class="text-gray-600 hover:text-black hover:bg-gray-100 p-2 rounded-lg cursor-pointer whitespace-nowrap">
        <router-link to="/books/to-buy" replace>Libri da comprare</router-link>
      </li>
      <li class="text-gray-600 hover:text-black hover:bg-gray-100 p-2 rounded-lg cursor-pointer whitespace-nowrap">
        <router-link to="/books/to-sell" replace>Libri da vendere</router-link>
      </li>
      <li class="text-gray-600 hover:text-black hover:bg-gray-100 p-2 rounded-lg cursor-pointer whitespace-nowrap">
        <router-link to="/books/purchases-report" replace>Resoconti</router-link>
      </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Navbar',
  components: {
  }
})
</script>