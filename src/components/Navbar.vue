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
      <router-link to="/settings" replace>
        {{ userStore.currentUser?.mail }}
      </router-link>
    </div>
  </div>

  <!-- navbar lower -->
  <ul class="flex space-x-6 items-center overflow-x-scroll h-16 mx-2 md:mx-4">
    <li>
      <router-link to="/books/to-buy" class="text-gray-600 hover:text-black hover:bg-gray-100 p-2 rounded-lg cursor-pointer whitespace-nowrap" replace>Libri da comprare</router-link>
    </li>
    <li>
      <router-link to="/books/to-sell" class="text-gray-600 hover:text-black hover:bg-gray-100 p-2 rounded-lg cursor-pointer whitespace-nowrap" replace>Libri da vendere</router-link>
    </li>
    <li>
      <router-link to="/books/purchases-report" class="text-gray-600 hover:text-black hover:bg-gray-100 p-2 rounded-lg cursor-pointer whitespace-nowrap" replace>Resoconti</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { useAuthStore } from '@/store/auth';
import { useUserStore } from '@/store/user';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'Navbar',
  components: {
  },
  setup() {
    const authStore = useAuthStore();
    const userStore = useUserStore();

    onMounted(async () => {
      await userStore.getUser(authStore.user?.id as string, ['currentGrade', 'futureGrade']);
    });

    return { userStore };
  }
})
</script>