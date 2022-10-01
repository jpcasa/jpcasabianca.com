import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import VueSecureHTML from 'vue-html-secure'
import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'

import { createPinia } from 'pinia'
import VueWriter from 'vue-writer'

import 'virtual:windi.css'
import '~/assets/main.scss'

import App from './App.vue'

// META
const head = createHead()

// ROUTES
const routes = setupLayouts(generatedRoutes)
const router = createRouter({ history: createWebHistory(), routes })

// STORE
const pinia = createPinia()

// DEFINE APP
const app = createApp(App).use(router).use(head).use(pinia).use(VueWriter).use(VueSecureHTML)

// GLOBAL FILTERS
app.config.globalProperties.$filters = {
  image(id) {
    return `${import.meta.env.VITE_ASSETS_URL}/${id}.webp`
  }
}

app.mount('#app')
