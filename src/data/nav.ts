// Ids and icons only. Visible labels are localized in `src/i18n/index.ts` (`UI[locale].nav`)
// and rendered onto the nav anchors as `data-label`, which `src/scripts/nav.ts` reads.
export const NAV_SECTIONS = [
  { id: 'hero', icon: 'i-material-symbols:home' },
  { id: 'experience', icon: 'i-material-symbols:work' },
  { id: 'education', icon: 'i-material-symbols:school' },
  { id: 'projects', icon: 'i-material-symbols:code' },
  { id: 'skills', icon: 'i-material-symbols:build' },
  { id: 'contact', icon: 'i-material-symbols:mail' }
] as const
