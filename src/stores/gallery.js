// create a pinia store for gallery
import { defineStore } from 'pinia'

export const useGalleryStore = defineStore({
  id: 'gallery',
  state: () => ({
    items: null
  }),
  actions: {
    setItems(items) {
      this.items = items
    }
  }
})