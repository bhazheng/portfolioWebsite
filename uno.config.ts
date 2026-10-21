import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
  presets: [presetIcons({ scale: 1.2 })],
  content: { filesystem: ['src/**/*.{astro,ts,js,html}'] },
  safelist: [
    'i-material-symbols:home', 'i-material-symbols:code', 'i-material-symbols:work',
    'i-material-symbols:school', 'i-material-symbols:build', 'i-material-symbols:mail',
    'i-material-symbols:monitoring', 'i-material-symbols:dashboard',
    'i-material-symbols:database', 'i-material-symbols:neurology',
    'i-material-symbols:image-search',
    'i-material-symbols:light-mode', 'i-material-symbols:dark-mode',
  ],
})
