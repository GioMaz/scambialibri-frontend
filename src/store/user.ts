import { defineStore } from 'pinia'
import { ref } from 'vue';

import IUser from '../models/user.model';

import axios from 'axios';

export const useUserStore = defineStore('user', () => {
  const API_URL = 'http://localhost:1337/user/login'
  const token = ref<string>()
  const authenticated = ref<boolean>()

  const user = ref<IUser>();

  const login = async (mail: string, password: string) => {
    const response = await axios.post(API_URL, {
      mail: mail,
      password: password
    })

    user.value = response.data as IUser;
    token.value = user.value.accessToken;
  }

  const logout = async () => {
    authenticated.value = false;
    user.value = undefined;
  }

  return { user, login, logout }
})
