import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type Event } from '@/type'

export const useEventStore = defineStore('event', () => {
  const events = ref<Event[]>([])
  const currentEvent = ref<Event | null>(null)

  function setEvents(newEvents: Event[]) {
    events.value = newEvents
  }

  function setEvent(event: Event) {
    currentEvent.value = event
  }

  function getEventById(id: string): Event | undefined {
    return events.value.find((event) => event.id === id)
  }

  return {
    events,
    currentEvent,
    setEvents,
    setEvent,
    getEventById
  }
})
