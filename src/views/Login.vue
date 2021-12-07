<template>
  <form>
    <input
      :value="email"
      placeholder="Email"
      class="input-field"
    />
    <input
      :value="password"
      placeholder="Password"
      type="password"
      show-password-on="mousedown"
      class="input-field"
    />
    <button
      type="primary" 
      @click="login()"
      block
    >Login</button>
  </form>
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
          router.push('/books/tbuy')
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
