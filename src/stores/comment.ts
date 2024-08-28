import { defineStore } from 'pinia'

export const useCommentStore = defineStore('commentStore', {
  state: () => ({
    comments: [] as { name: string; text: string }[]
  }),
  actions: {
    addComment(name: string, text: string) {
      this.comments.push({ name, text })
    }
  }
})
