import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-24',
  ssr: true,
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  css: [
    '~/assets/styles/global.css'
  ],
  components: true
})
