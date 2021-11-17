<template>
  <div class="login">
    <form @submit.prevent="login()">
      <div>
        <input type="text" v-model="mail" placeholder="Indirizzo e-mail">
      </div>
      <div>
        <input type="password" v-model="password" placeholder="Password">
      </div>
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

<style>
body {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
}

img {
  width: 80%;
}

form {
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  padding: 20px;
  width: 320px;
}

input {
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  padding: 15px 20px;
  margin: 0px 0px 10px 0px;
  width: 100%;
}

button {
  background-color: #489FB5;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  padding: 15px 20px;
  margin: 0px 0px 10px 0px;
  width: 100%;
  filter: drop-shadow(0px 4px 0px #16697A);
}
</style>