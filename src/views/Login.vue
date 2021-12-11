<template>
  <div class="grid place-items-center md:h-screen">
    <div class="m-auto md:w-1/2 lg:w-1/3 bg-gray-10 rounded-md">
      <div class="mx-auto mt-6 mb-2 w-1/2 md:w-2/3">
        <img src="../assets/logo.svg" alt="">
      </div>
      <form class="flex flex-col" v-on:submit.prevent="login">
        <input class="p-2 mx-4 mt-4 border-md rounded-md" v-model="email" placeholder="Email"/>
        <input class="p-2 mx-4 mt-2 border-md rounded-md" v-model="password" type="password" placeholder="Password" />
        <button class="p-2 mx-4 my-4 text-white bg-cyan rounded-md">Login</button>
      </form>
      <div class="flex flex-col items-center pb-6 text-sm">
        <a class="text-gray-20 pt-2" href="">Hai dimenticato la password? Clicca qui!</a>
        <a class="text-gray-20 pt-2" href="">Non sei ancora registrato? Clicca qui!</a>
      </div>
    </div>
  </div>
  <Notifications/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import router from '../router'

import AuthService from '../services/auth.service';

import IUser from '../models/user.model';

import { useNotificationStore } from '../store/notifications'

import Notifications from '../components/Notifications.vue'

export default defineComponent({
  name: 'Login',
  components: {
    Notifications
  },
  setup() {
    const notificationsStore = useNotificationStore();

    const API_URL = 'http://localhost:1337/user/login'

    const email = ref<string>()
    const password = ref<string>()

    const user = ref<IUser>()
    const auth = new AuthService(API_URL)

    const login = async () => {
      try {
        console.log(email.value)
        console.log(password.value)

        user.value = await auth.login(email.value as string, password.value as string)

        if (user.value.onboardingCompleted) {
          router.push('/books/to-buy')
          notificationsStore.addNotification('success', 'Login effettuato con successo')
        } else {
          notificationsStore.addNotification('error', 'Non hai completato la procedura di onboarding! Verifica la tua casella l\'e-mail di benvenuto!')
        }
      }
      catch (err) {
        if (err === 401) {
          notificationsStore.addNotification('error', 'Credenziali di login errate!')
        } else {
          notificationsStore.addNotification('error', 'Errore inaspettato!')
        }
      }
    }
    return { email, password, login, notificationsStore };
  }
});
</script>
