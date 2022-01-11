import ISchool from '@/models/school.model';
import IUser from '@/models/user.model';
import axios  from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useAuthStore } from './auth';

export const useUserStore = defineStore('user', () => {
  const authStore = useAuthStore();
  const currentUser = ref<IUser>();
  const currentUserSchool = ref<ISchool>();
  const url = process.env.VUE_APP_API_URL;

  const getUser = async (id: string, populate: string[] = []) => {
    await axios.get(`${url}/user/${id}?` + populate.map(e => `populate[]=${e}`).join('&'), {
    headers: {
      Authorization: `bearer ${authStore.token}` }
    })
    .then(response =>
      currentUser.value = response.data as IUser
    );
  }

  const completeOnboarding = async (token: string, data: any) => {
    await axios.get(`${url}/user/onboarding?token=${token}`)
    .then(function (response) {
      return response.data;
    })
  }

  const getUserSchool = async (id: string) => {
    await axios.get(`${url}/user/${id}/school`)
    .then(response =>
      currentUserSchool.value = response.data as ISchool
    );
  }

  return {
    currentUser,
    currentUserSchool,
    getUser,
    completeOnboarding,
  };
})