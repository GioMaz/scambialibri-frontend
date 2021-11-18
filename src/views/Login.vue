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

import router from '../router'

import AuthService from '../services/auth.service';

import Alert from '../components/Alert.vue'

import IUser from '../models/user.model';

export default defineComponent({
  name: 'Login',
  components: {
  },

  setup() {
    const mail = ref();
    const password = ref();
    const API_URL = 'http://localhost:1337/user/login/';
    const user = ref();
    // const messages = ref();

    const auth = new AuthService(API_URL);

    const login = async () => {
      try {
        user.value = await auth.login(mail.value, password.value) as IUser

        if (user.value.onboardingCompleted) {
          router.push('/')
          // messages.value.push(
          //   {message: 'Login effettuato con successo!', status: 'completed'})
        } else {
          // messages.value.push(
          //   {message: 'Non hai completato la procedura di onboarding!</b><br>Verifica la tua casella l\'e-mail di benvenuto!', status: 'completed'})
        }
      }
      catch (err) {
        console.log(err)
      }
    }

    return { mail, password, login };
  }

});
</script>
