import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-24',
  ssr: true,
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'scroll-smooth dark'
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:ital,wght@0,400..800;1,400..800&display=swap' },
        { rel: 'stylesheet', type: 'text/css', href: 'https://unpkg.com/@phosphor-icons/web@2.1.1/src/regular/style.css' }
      ]
    }
  },
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
