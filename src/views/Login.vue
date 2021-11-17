<template>
  <div class="login">
    <form @submit.prevent="login()">
      <input type="text" v-model="mail">
      <input type="password" v-model="password">
      <button @click="login">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AuthService } from '../services/auth.service';

export default defineComponent({
  name: 'Login',
  components: {
  },

  setup() {
    const mail = ref(null)
    const password = ref(null)
    const API_URL = 'http://localhost:1337/user/login/'

    const auth = new AuthService(API_URL);

    const login = () => {
      auth.login(mail.value, password.value)
    }

    return { mail, password, login };
  }

});
</script>
