<template>
  <select v-model="school">
    <option v-for="school in schoolStore.schools" :key="school" :value="school">
      {{ school.name }}
    </option>
  </select>
  <select v-model="specialization">
    <option v-for="specialization in schoolStore.specializations" :key="specialization" :value="specialization">
      {{ specialization.name }}
    </option>
  </select>
  <select v-model="grade">
    <option v-for="grade in schoolStore.grades" :key="grade" :value="grade">
      {{ grade.year + grade.section }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';

import { useSchoolStore } from '../store/school';

import ISchool from '../models/school.model';
import ISpecialization from '../models/specialization.model';

export default defineComponent({
  name: 'ToBuy',
  components: {
  },
  setup() {
    const schoolStore = useSchoolStore();
    const school = ref<ISchool>();
    const specialization = ref<ISpecialization>();
    const grades = ref<ISpecialization>();

    onMounted(async () => {
      await schoolStore.getSchools();
    });

    const onSelectSchool = watch(school, async () => {
      await schoolStore.getSpecializations(school.value as ISchool);
    })

    const onSelectSpecialization = watch(specialization, async () => {
      await schoolStore.getGrades(school.value as ISchool, specialization.value as ISpecialization);
    })

    return {
      schoolStore,
      school,
      specialization,
      grades,
      onSelectSchool,
      onSelectSpecialization
    }
  }
})
</script>
