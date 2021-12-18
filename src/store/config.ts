import { defineStore } from 'pinia'

export const useConfigStore = defineStore('config', () => {
  const apiUrl = process.env.API_URL;
  return { apiUrl }
})
