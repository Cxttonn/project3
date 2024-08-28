<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import EventService from '@/services/EventService'

const route = useRoute()
const country = ref(null)
const error = ref(null)

onMounted(async () => {
  try {
    const id = route.params.id as string
    country.value = await EventService.getCountryDetails(id)
  } catch (err) {
    error.value = err.message
  }
})
</script>

<template>
  <div>
    <h2>Country Details</h2>
    <div v-if="country">
      <p>Country Name: {{ country.name }}</p>
      <p>Description: {{ country.description }}</p>
    </div>
    <div v-else>
      <p v-if="error">{{ error }}</p>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>
