<template>
  <div class="login">
    <form @submit.prevent="login()">
      <input type="text" v-model="mail">
      <input type="password" v-model="password">
      <button>Login</button>
    </form>
    <NotificationList :notifications="notifications"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import router from '../router'

import AuthService from '../services/auth.service';

import IUser from '../models/user.model';

import NotificationList from '../components/NotificationList.vue'

export default defineComponent({
  name: 'Login',
  components: {
    NotificationList
  },

  setup() {
    const API_URL = 'http://localhost:1337/user/login/';

    const mail = ref<string>();
    const password = ref<string>();

    const user = ref<IUser>();

    const notifications = ref<[{message: string, status: string}]>([
      { message: "ciao", status: "completed" }
    ]);

    const auth = new AuthService(API_URL);

    const login = async () => {
      try {
        user.value = await auth.login(mail.value, password.value)

        if (user.value.onboardingCompleted) {
          router.push('/books/to-buy')

          notifications.value.push(
            { message: 'Login effettuato con successo!', status: 'completed' }
          )
        } else {
          notifications.value.push(
            { message: 'Non hai completato la procedura di onboarding!</b><br>Verifica la tua casella l\'e-mail di benvenuto!', status: 'not-completed' }
          )
        }
      }
      catch (err) {
        console.log(err)
      }
    }

    return { mail, password, notifications, login };
  }

});
</script>
