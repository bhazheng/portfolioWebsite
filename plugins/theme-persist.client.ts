import { watch } from 'vue'
import type { VuetifyOptions } from 'vuetify'

const COOKIE = 'color-scheme'
const MAX_AGE = 60 * 60 * 24 * 365

type SchemeName = 'dark' | 'light'

function readSchemeCookie(): SchemeName | null {
  const entry = document.cookie
    .split(';')
    .map(part => part.trim())
    .find(part => part.startsWith(`${COOKIE}=`))
  if (!entry) return null
  const value = entry.slice(COOKIE.length + 1)
  return value === 'dark' || value === 'light' ? value : null
}

// Static (SSG) builds disable the vuetify-nuxt-module's SSR client hints, so the
// `color-scheme` cookie is not applied on a hard reload. The inline script in
// `nuxt.config.ts` repaints the prerendered dark markup before hydration; this client
// plugin seeds the Vuetify instance from the same cookie so hydration agrees with that
// markup, then keeps the cookie in sync when the user toggles.
export default defineNuxtPlugin({
  name: 'app:theme-persist',
  order: -30,
  setup(nuxtApp) {
    const saved = readSchemeCookie()

    nuxtApp.hook('vuetify:configuration', ({ vuetifyOptions }) => {
      if (!saved) return
      const options = vuetifyOptions as VuetifyOptions
      options.theme = { ...options.theme, defaultTheme: saved }
    })

    nuxtApp.hook('vuetify:ready', (vuetify) => {
      const name = vuetify.theme.global.name
      if (saved && name.value !== saved) name.value = saved

      watch(name, (value) => {
        if (value !== 'dark' && value !== 'light') return
        document.cookie = `${COOKIE}=${value}; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax`
      })
    })
  }
})
