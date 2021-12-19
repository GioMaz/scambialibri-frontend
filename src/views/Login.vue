<template>
  <div class="grid place-items-center md:h-screen">
    <div class="m-auto md:w-1/2 lg:w-1/3 bg-gray1 rounded-md">
      <div class="mx-auto mt-6 mb-2 w-1/2 md:w-2/3">
        <img src="../assets/logo.svg" alt="">
      </div>
      <form class="flex flex-col" v-on:submit.prevent="login">
        <input class="p-2 mx-4 mt-4 border-md rounded-md" v-model="email" placeholder="Email"/>
        <div class="mx-4 mt-1 text-sm text-red2" v-if="!isEmailValid()">
          <p>L'indirizzo email non è valido</p>
        </div>
        <input class="p-2 mx-4 mt-2 border-md rounded-md" v-model="password" type="password" placeholder="Password"/>
        <button class="p-2 mx-4 my-4 text-white bg-cyan rounded-md">Login</button>
      </form>
      <div class="flex flex-col items-center pb-6 text-sm">
        <a class="text-gray2 pt-2" href="">Hai dimenticato la password? Clicca qui!</a>
        <a class="text-gray2 pt-2" href="">Non sei ancora registrato? Clicca qui!</a>
      </div>
    </div>
  </div>
  <Notifications/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import router from '../router'

import { useNotificationStore } from '../store/notifications'
import { useUserStore } from '../store/user'

import Notifications from '../components/Notifications.vue'

export default defineComponent({
  name: 'Login',
  components: {
    Notifications
  },
  setup() {
    const notificationsStore = useNotificationStore();
    const userStore = useUserStore();

    const email = ref<string>()
    const password = ref<string>()

    const login = async () => {
      if (!isEmailValid()) return

      try {
        await userStore.login(email.value as string, password.value as string)

        if (userStore.user?.onboardingCompleted) {
          router.push('/books/to-buy')
          notificationsStore.addNotification('success', 'Login effettuato con successo')
        } else {
          notificationsStore.addNotification('error', 'Non hai completato la procedura di onboarding! Verifica la tua casella l\'e-mail di benvenuto!')
        }
      }
      catch (err: any) {
        if (err.response?.status === 400 || err.response?.status === 401) {
          notificationsStore.addNotification('error', 'Credenziali di login errate!')
        } else {
          notificationsStore.addNotification('error', 'Errore inaspettato!')
        }
      }
    }

    const isEmailValid = () => {
      const re = /\S+@\S+\.\S+/;
      if (re.test(email.value as string) || email.value?.length == undefined) {
        return true
      }

      return false
    }

    return { notificationsStore, email, password, login, isEmailValid };
  }
});
</script>
