<template>
  <div class="login">
    <n-form>
      <n-form-item label="Email" path="email">
        <n-input :value="email" placeholder="Email" />
      </n-form-item>
      <n-form-item label="Password" path="password">
        <n-input :value="password" placeholder="Password" type="password"/>
      </n-form-item>
      <n-form-item>
        <n-button type="primary" @click="login()">Login</n-button>
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { 
    NButton,
    NInput,
    useMessage,
} from 'naive-ui'

import router from '../router'

import AuthService from '../services/auth.service';

import IUser from '../models/user.model';

export default defineComponent({
  name: 'Login',
  components: {
    NButton,
    NInput,
  },

  setup() {
    const API_URL = 'http://localhost:1337/user/login/'

    const mail = ref<string>()
    const password = ref<string>()

    const user = ref<IUser>()

    const message = useMessage()

    const auth = new AuthService(API_URL)

    const login = async () => {
      try {
        user.value = await auth.login(mail.value as string, password.value as string)

        if (user.value.onboardingCompleted) {
          router.push('/books/to-buy')

          message.success("Login effettuato con successo!")
        } else {
          message.error('Non hai completato la procedura di onboarding!</b><br>Verifica la tua casella l\'e-mail di benvenuto!')
        }
      }
      catch (err) {
        console.log(err)
        if (err === 401) {
          message.error('Credenziali di login errate!')
        // } else if (err.body.error === 'onboarding_not_completed') {
        //   message.error('<b>Non hai completato la procedura di onboarding!</b><br>Verifica sulla tua casella l\'e-mail di benvenuto!')
        } else {
          message.error('Errore inaspettato!')
        }
      }
    }

    const warning = () => {
      message.success('ciao')
    }

    return { mail, password, login, warning };
  }

});
</script>
