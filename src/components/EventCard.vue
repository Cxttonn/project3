<script setup lang="ts">
import { defineProps } from 'vue'
import { type Event } from '@/types'

const props = defineProps<{
  event: Event
}>()
</script>

<template>
  <div v-if="event && event.id" class="flex justify-center w-full">
    <div
      class="p-5 w-64 cursor-pointer border border-gray-800 mb-4 text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
    >
      <img :src="event.flag_url" alt="Flag" class="w-full h-auto mb-2" />
      <h2 class="text-xl font-semibold mb-2">{{ event.name }}</h2>
      <p class="mb-1">Gold: {{ event.gold_medals }}</p>
      <p class="mb-1">Silver: {{ event.silver_medals }}</p>
      <p class="mb-1">Bronze: {{ event.bronze_medals }}</p>
      <p>Total Medals: {{ event.total_medals }}</p>
    </div>
  </div>
</template>
