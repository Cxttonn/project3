<script setup lang="ts">
import { defineProps } from 'vue'
import type { Event } from '@/types'

const props = defineProps<{
  event: Event | null
}>()
</script>

<template>
  <div class="text-left max-w-xs mx-auto" v-if="event">
    <p class="mb-4">Id: {{ event._id }}</p>
    <p class="mb-4">Name: {{ event.name }}</p>
    <p class="mb-4">Trips: {{ event.trips }}</p>
    <ul class="list-none p-0">
      <li v-for="(airline, index) in event.airline" :key="index" class="mb-2">
        <router-link
          :to="{ name: 'airline-detail-view', params: { airlineId: airline._id } }"
          class="text-black no-underline hover:underline"
        >
          <p>Airline: {{ airline.name }}</p>
        </router-link>
      </li>
    </ul>
  </div>

  <div v-else>
    <p class="text-center">Passenger not found or failed to load.</p>
  </div>
</template>
