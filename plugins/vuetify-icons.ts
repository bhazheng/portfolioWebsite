// @unocss-include
import { aliases, ms } from 'vuetify/iconsets/ms'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('vuetify:configuration', ({ vuetifyOptions }) => {
    vuetifyOptions.icons = { defaultSet: 'ms', aliases, sets: { ms } }
  })
})
