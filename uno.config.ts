import { defineConfig, presetIcons } from 'unocss'

export default defineConfig({
  presets: [presetIcons({ scale: 1.2 })],
  content: { filesystem: ['src/**/*.{astro,ts,js,html}'] },
  safelist: [
    'i-material-symbols:home', 'i-material-symbols:code', 'i-material-symbols:work',
    'i-material-symbols:school', 'i-material-symbols:build', 'i-material-symbols:mail',
    'i-material-symbols:monitoring', 'i-material-symbols:dashboard',
    'i-material-symbols:database', 'i-material-symbols:neurology',
    'i-material-symbols:image-search', 'i-material-symbols:gavel',
    'i-material-symbols:groups', 'i-material-symbols:translate', 'i-material-symbols:workspace-premium',
    'i-material-symbols:light-mode', 'i-material-symbols:dark-mode',
    'i-material-symbols:content-copy', 'i-material-symbols:check',
    'i-material-symbols:close', 'i-material-symbols:keyboard-arrow-down', 'i-material-symbols:add',
    'i-simple-icons:googlesheets', 'i-simple-icons:microsoftexcel', 'i-simple-icons:powerbi',
    'i-simple-icons:looker', 'i-simple-icons:tableau', 'i-mdi:database',
    'i-simple-icons:ibm', 'i-simple-icons:python', 'i-simple-icons:pandas',
    'i-mdi:chart-scatter-plot', 'i-mdi:chart-areaspline', 'i-simple-icons:tensorflow',
  ],
})
