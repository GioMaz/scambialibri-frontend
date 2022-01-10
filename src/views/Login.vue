<template>
  <div class="grid place-items-center md:h-screen">
    <div class="m-auto md:w-96 bg-gray-100 rounded-lg">
      <div class="mx-auto my-8 w-1/2 md:w-2/3">
        <img src="../assets/logo.svg" alt="">
      </div>
      <form class="flex flex-col mx-6" v-on:submit.prevent="login">
        <input class="p-3 border-md rounded-lg" v-model="email" placeholder="Email"/>
        <div class="pl-3 mt-1 text-sm text-red-800" v-if="!isEmailValid()">
          <p>L'indirizzo email non è valido</p>
        </div>
        <input class="p-3 mt-4 border-md rounded-lg" v-model="password" type="password" placeholder="Password"/>
        <button class="p-3 mt-4 text-white bg-primary rounded-lg">Login</button>
      </form>
      <div class="flex flex-col items-center my-6 text-sm">
        <a class="text-gray-500" href="">Hai dimenticato la password? Clicca qui!</a>
        <a class="text-gray-500 mt-2" href="">Non sei ancora registrato? Clicca qui!</a>
      </div>
    </div>
  </div>
  <notifications/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import router from '../router';

import { useNotificationStore } from '../store/notifications';
import { useAuthStore } from '../store/auth';

import Notifications from '../components/Notifications.vue';

export default defineComponent({
  name: 'Login',
  components: {
    Notifications
  },
  setup() {
    const notificationsStore = useNotificationStore();
    const userStore = useAuthStore();

    const email = ref();
    const password = ref();

    const login = async () => {

      if (!isEmailValid())
        return;

      try {
        await userStore.login(email.value, password.value);

        if (userStore.user?.onboardingCompleted) {
          router.push('/books/to-buy');
          notificationsStore.addNotification('success', 'Login effettuato con successo');
        } else {
          notificationsStore.addNotification('alert', 'Non hai completato la procedura di onboarding! Verifica la tua casella l\'e-mail di benvenuto!');
        }
      }
      catch(err: any) {
        if (err.response?.status === 400 || err.response?.status === 401) {
          notificationsStore.addNotification('error', 'Credenziali di login errate!');
        } else {
          notificationsStore.addNotification('error', 'Errore inaspettato!');
        }
      }
    }

    const isEmailValid = () => {
      const re = /\S+@\S+\.\S+/;
      if (re.test(email.value) || email.value === undefined) {
        return true;
      }
      return false;
    }

    return { notificationsStore, email, password, login, isEmailValid };
  }
});
</script>
