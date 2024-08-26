<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useEventStore } from '@/stores/event'
import { useMessageStore } from '@/stores/message'
import type { Event } from '@/types'

const route = useRoute()
const countryId = route.params.id as string
const eventStore = useEventStore()
const messageStore = useMessageStore()

const event = computed(() => eventStore.currentEvent || eventStore.getEventById(countryId))
const commenterName = ref('')
const commentText = ref('')
const comments = ref<{ name: string; text: string; date: string }[]>([])

async function submitComment() {
  if (commentText.value.trim() === '' || commenterName.value.trim() === '') {
    alert('Please enter both your name and a comment.')
    return
  }

  const newComment = {
    name: commenterName.value,
    text: commentText.value,
    date: new Date().toLocaleString()
  }

  comments.value.push(newComment)
  messageStore.updateMessage('Comment successfully posted!')

  commenterName.value = ''
  commentText.value = ''
}

onMounted(async () => {
  if (!event.value) {
    try {
      const fetchedEvent = await eventStore.getEventById(countryId)
      if (fetchedEvent) {
        eventStore.setEvent(fetchedEvent)
      } else {
        console.error(`Country with ID ${countryId} not found.`)
      }
    } catch (error) {
      console.error('Error fetching country data:', error)
    }
  }
})
</script>
<template>
  <div class="p-4">
    <div v-if="event">
      <h1 class="text-3xl font-bold mb-4">{{ event.name }}</h1>
      <nav class="mb-4">
        <RouterLink
          :to="{ name: 'country-detail-view', params: { id: event.id } }"
          class="text-blue-600 hover:underline mr-4"
          >Country Detail</RouterLink
        >
        |
        <RouterLink
          :to="{ name: 'medal-detail-view', params: { id: event.id } }"
          class="text-blue-600 hover:underline ml-4"
          >Medal Detail</RouterLink
        >
      </nav>
      <RouterView v-if="event" :key="event.id" :event="event" />
    </div>
    <div v-else>
      <p>Country not found or failed to load.</p>
    </div>
    <div class="max-w-lg mx-auto mt-8 p-6 border border-gray-300 rounded-lg shadow-sm">
      <h3 class="text-lg font-bold mb-4">Leave a Comment</h3>
      <input
        v-model="commenterName"
        placeholder="Your name"
        class="w-full mb-4 p-2 border border-gray-300 rounded-lg"
      />
      <textarea
        v-model="commentText"
        placeholder="Your comment"
        class="w-full mb-4 p-2 border border-gray-300 rounded-lg"
      ></textarea>
      <button
        @click="submitComment"
        class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Submit Comment
      </button>

      <ul class="mt-6">
        <li v-for="(comment, index) in comments" :key="index" class="mb-4">
          <strong>{{ comment.name }}</strong>
          <span class="text-gray-600">({{ comment.date }})</span>: {{ comment.text }}
        </li>
      </ul>
    </div>
  </div>
</template>
