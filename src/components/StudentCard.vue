<script setup lang="ts">
import { defineProps } from 'vue'
import type { Student } from '@/types'

const props = defineProps<{
  student: Student
}>()
</script>

<template>
  <div
    class="p-5 w-64 border border-gray-800 mb-4 text-center transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
  >
    <h2 class="text-xl font-semibold mb-2">{{ student.name }} {{ student.surname }}</h2>
    <p class="text-lg">GPA: {{ student.gpa }}</p>
  </div>
</template>
