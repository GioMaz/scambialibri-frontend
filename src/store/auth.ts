import IUser from '@/models/user.model';
import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<IUser>();
  const token = ref<string>();
  const authenticated = ref<boolean>();

  const url = process.env.VUE_APP_API_URL;

  const saveToLocalStorage = () => {
    localStorage.setItem('token', token.value as string);
    localStorage.setItem('user', JSON.stringify(user.value));
  }

  const loadFromLocalStorage = () => {
    const tokenStored = localStorage.getItem('token');

    if (tokenStored) {
      user.value = JSON.parse(localStorage.getItem('user') as string) as IUser;
      token.value = localStorage.getItem('token') as string;
      authenticated.value = true;
    } else {
      user.value = undefined;
      token.value = undefined;
      authenticated.value = false;
    }
  }

  const clearLocalStorage = () => {
    localStorage.clear();
  }

  const clearToken = () => {
    clearLocalStorage();
    loadFromLocalStorage();
  }

  loadFromLocalStorage();

  const login = async (mail: string, password: string) => {
    clearToken();

    await axios.post(`${url}/user/login`, {
      mail: mail,
      password: password
    })
    .then(response =>
      user.value = response.data as IUser
    );

    token.value = user.value?.accessToken;

    saveToLocalStorage();
    loadFromLocalStorage();
  }

  const signup = async (mail: string, password: string) => {
    const response = await axios.post(`${url}/user/signup`, {
      mail: mail,
      password: password
    });

    return response.data;
  }

  const logout = async () => {
    clearLocalStorage();
    user.value = undefined;
    token.value = undefined;
    authenticated.value = false;
  }

  return { user, token, login, signup, logout }
})
