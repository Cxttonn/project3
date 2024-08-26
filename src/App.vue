<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from './stores/message'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

const store = useMessageStore()
const { message } = storeToRefs(store)

const flashMessageVisible = ref(false)

watch(message, (newValue) => {
  if (newValue) {
    flashMessageVisible.value = true
    setTimeout(() => {
      flashMessageVisible.value = false
      store.resetMessage()
    }, 3000) // Flash message will disappear after 3 seconds
  }
})
</script>

<template>
  <div id="layout" class="font-sans text-center text-gray-800">
    <header>
      <div
        v-if="flashMessageVisible"
        class="fixed top-5 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-white px-4 py-2 rounded-lg shadow-lg z-50 animate-fade"
      >
        <h4>{{ message }}</h4>
      </div>
      <div class="p-8">
        <nav>
          <RouterLink
            :to="{ name: 'event-list-view' }"
            class="font-bold text-gray-800 hover:text-green-500 transition"
          >
            Home
          </RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>
