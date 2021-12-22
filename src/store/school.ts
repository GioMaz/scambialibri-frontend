import { defineStore } from 'pinia';
import { ref } from 'vue';

import axios from 'axios';

import ISchool from '../models/school.model';
import ISpecialization from '../models/specialization.model';

export const useSchoolStore = defineStore('school', () => {
  const url = process.env.VUE_APP_API_URL

  const schools = ref<ISchool[]>()
  const specialization = ref<ISpecialization[]>()
  const grades = ref<ISpecialization[]>()

  const getSchools = async () => {
    const response = await axios.get(`${url}/school`)
    schools.value = response.data as ISchool[]
  }

  const getSpecializations = async (school: ISchool) => {
    const response = await axios.get(`${url}/school/${school.id}/specialization`)
    specialization.value = response.data as ISpecialization[]
  }

  const getGrades = async (school: ISchool, specialization: ISpecialization, populate?: string[]) => {
    const response = await axios.get(`${url}/school/${school.id}/specialization/${specialization.id}/grade?` + (populate || []).map(e => `populate[]=${e}`).join('&'))
    grades.value = response.data as ISpecialization[]
  }

  return {
    schools,
    specialization,
    grades,
    getSchools,
    getSpecializations,
    getGrades
  }
})
