<template>
  <div class="m-auto md:w-2/5 bg-gray-50">
    <form class="flex flex-col">
      <input class="p-2 mx-4 mt-4 border-2 rounded-md"
        :value="email"
        placeholder="Email"
      />
      <input class="p-2 mx-4 mt-2 border-2 rounded-md"
        :value="password"
        placeholder="Password"
        show-password-on="mousedown"
      />
      <button class="p-2 mx-4 my-4 text-white bg-blue-600 rounded-md"
        @click="login()"
      >Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import router from '../router'

import AuthService from '../services/auth.service';

import IUser from '../models/user.model';

export default defineComponent({
  name: 'Login',
  components: {
  },
  setup() {
    const API_URL = 'http://localhost:1337/user/login/'

    const email = ref<string>()
    const password = ref<string>()
    const user = ref<IUser>()
    const auth = new AuthService(API_URL)

    const login = async () => {
      try {
        user.value = await auth.login(email.value as string, password.value as string)

        if (user.value.onboardingCompleted) {
          router.push('/books/buy')
          // message.success("Login effettuato con successo!")
        } else {
          // message.error('Non hai completato la procedura di onboarding! Verifica la tua casella l\'e-mail di benvenuto!')
        }
      }
      catch (err) {
        console.log(err)
        if (err === 401) {
          // message.error('Credenziali di login errate!')
        } else {
          // message.error('Errore inaspettato!')
        }
      }
    }
    return { email, password, login };
  }
});
</script>

<style scoped>
</style>
