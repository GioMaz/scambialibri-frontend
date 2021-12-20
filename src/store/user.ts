import { defineStore } from 'pinia'
import { ref } from 'vue';

import IUser from '../models/user.model';

import axios from 'axios';

export const useUserStore = defineStore('user', () => {
  const user = ref<IUser>();
  const url = process.env.VUE_APP_API_URL

  const login = async (mail: string, password: string) => {
    const response = await axios.post(`${url}/user/login`, {
      mail: mail,
      password: password
    })

    user.value = response.data as IUser;
  }

  const signup = async (mail: string, password: string) => {
    const response = await axios.post(`${url}/user/signup`, {
      mail: mail,
      password: password
    })

    return response.data
  }

  const logout = async () => {
    user.value = undefined;
  }

  return { user, login, signup, logout }
})
