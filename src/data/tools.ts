/**
 * Tools shown as logo + name chips in the hero ticker. Names are proper nouns (identical in every locale) and all
 * appear in the CV. Icons resolve through UnoCSS `presetIcons`; their class strings are also safelisted
 * in `uno.config.ts`. There is no official SQL logo and no Looker Studio mark in the icon sets, so SQL
 * uses a generic database glyph and Looker Studio uses the Looker logo.
 */
export interface Tool {
  name: string
  icon: string
  /** Brand colour (dark theme); the light theme darkens it in CSS. */
  color: string
}

export const TOOLS: Tool[] = [
  { name: 'Google Sheets', icon: 'i-simple-icons:googlesheets', color: '#34A853' },
  { name: 'Excel', icon: 'i-simple-icons:microsoftexcel', color: '#21A366' },
  { name: 'Power BI', icon: 'i-simple-icons:powerbi', color: '#F2C811' },
  { name: 'Looker Studio', icon: 'i-simple-icons:looker', color: '#4285F4' },
  { name: 'Tableau', icon: 'i-simple-icons:tableau', color: '#E97627' },
  { name: 'SQL', icon: 'i-mdi:database', color: '#86DD00' },
  { name: 'IBM DB2', icon: 'i-simple-icons:ibm', color: '#4589FF' },
  { name: 'Python', icon: 'i-simple-icons:python', color: '#4B8BBE' },
  { name: 'Pandas', icon: 'i-simple-icons:pandas', color: '#A78BFA' },
  { name: 'Matplotlib', icon: 'i-mdi:chart-scatter-plot', color: '#5CA4D6' },
  { name: 'Seaborn', icon: 'i-mdi:chart-areaspline', color: '#67B7DC' },
  { name: 'TensorFlow', icon: 'i-simple-icons:tensorflow', color: '#FF6F00' }
]
