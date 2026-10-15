import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2026-07-24',
  ssr: true,
  modules: ['@unocss/nuxt', 'vuetify-nuxt-module'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        class: 'scroll-smooth'
      },
      script: [
        {
          // Static (SSG) builds prerender the dark theme; apply the persisted
          // `color-scheme` cookie before first paint so a light-mode reload does not
          // flash dark. plugins/theme-persist.client.ts seeds Vuetify to match.
          innerHTML: `(function(){try{var m=document.cookie.match(/(?:^|;\\s*)color-scheme=(dark|light)/);if(!m||m[1]==='dark')return;var c=document.documentElement.classList;c.remove('v-theme--dark');c.add('v-theme--light');document.documentElement.style.colorScheme='light';document.querySelectorAll('.v-theme--dark').forEach(function(e){e.classList.remove('v-theme--dark');e.classList.add('v-theme--light')});}catch(e){}})();`,
          tagPosition: 'bodyClose'
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@300..800&family=Google+Sans+Code:wght@300..800&display=swap'
        }
      ]
    }
  },
  css: [
    '~/assets/styles/main.css'
  ],
  vuetify: {
    vuetifyOptions: {
      display: {
        thresholds: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920, xxl: 2560 }
      },
      icons: {
        defaultSet: 'custom'
      },
      theme: {
        defaultTheme: 'dark',
        themes: {
          light: {
            dark: false,
            colors: {
              background: '#fef7ff',
              'on-background': '#20172f',
              surface: '#fef7ff',
              'on-surface': '#20172f',
              'surface-variant': '#ebdcfe',
              'on-surface-variant': '#4c425c',
              'surface-container-lowest': '#ffffff',
              'surface-container-low': '#faf0ff',
              'surface-container': '#f5eaff',
              'surface-container-high': '#f0e3ff',
              'surface-container-highest': '#ebdcfe',
              'surface-bright': '#fef7ff',
              'surface-dim': '#e3d4f5',
              outline: '#7e728f',
              'outline-variant': '#cfc1e1',
              'inverse-surface': '#352c45',
              'inverse-on-surface': '#f7edff',
              'inverse-primary': '#d9b9ff',
              primary: '#7348aa',
              'on-primary': '#ffffff',
              'primary-container': '#eedcff',
              'on-primary-container': '#5a2f90',
              secondary: '#6b5197',
              'on-secondary': '#ffffff',
              'secondary-container': '#ecdcff',
              'on-secondary-container': '#53397e',
              tertiary: '#3e6a00',
              'on-tertiary': '#ffffff',
              'tertiary-container': '#9ffb29',
              'on-tertiary-container': '#2d5000',
              error: '#ba1a1a',
              'on-error': '#ffffff',
              'error-container': '#ffdad6',
              'on-error-container': '#93000a',
              'eva-orange': '#a83900',
              'on-eva-orange': '#ffffff',
              'eva-orange-container': '#ffdbcf',
              'on-eva-orange-container': '#380d00'
            }
          },
          dark: {
            dark: true,
            colors: {
              background: '#180f26',
              'on-background': '#ebdcfe',
              surface: '#180f26',
              'on-surface': '#ebdcfe',
              'surface-variant': '#4c425c',
              'on-surface-variant': '#cfc1e1',
              'surface-container-lowest': '#120921',
              'surface-container-low': '#20172f',
              'surface-container': '#241b33',
              'surface-container-high': '#2f263e',
              'surface-container-highest': '#3a304a',
              'surface-bright': '#3e354e',
              'surface-dim': '#180f26',
              outline: '#988ba9',
              'outline-variant': '#4c425c',
              'inverse-surface': '#ebdcfe',
              'inverse-on-surface': '#352c45',
              'inverse-primary': '#7348aa',
              primary: '#d9b9ff',
              'on-primary': '#431278',
              'primary-container': '#5a2f90',
              'on-primary-container': '#eedcff',
              secondary: '#d5bbff',
              'on-secondary': '#3b2166',
              'secondary-container': '#53397e',
              'on-secondary-container': '#ecdcff',
              tertiary: '#86dd00',
              'on-tertiary': '#1e3700',
              'tertiary-container': '#2d5000',
              'on-tertiary-container': '#9ffb29',
              error: '#ffb4ab',
              'on-error': '#690005',
              'error-container': '#93000a',
              'on-error-container': '#ffdad6',
              'eva-orange': '#ffb59a',
              'on-eva-orange': '#5b1b00',
              'eva-orange-container': '#802a00',
              'on-eva-orange-container': '#ffdbcf'
            }
          }
        }
      }
    }
  },
  components: true
})
