const COOKIE = 'color-scheme'
const MAX_AGE = 60 * 60 * 24 * 365

// Keeps the toggle's icon and label in step with the theme. Runs on load as well as
// on click, because the pre-paint script may have flipped the page to light before
// this module ran — the markup still ships the dark-mode icon.
function renderToggle(theme: 'dark' | 'light') {
  const btn = document.querySelector<HTMLButtonElement>('.theme-toggle')
  if (!btn) return
  btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme')
  const icon = btn.querySelector<HTMLElement>('.icon')
  if (icon) icon.className = `${theme === 'dark' ? 'i-material-symbols:light-mode' : 'i-material-symbols:dark-mode'} icon`
}

function apply(theme: 'dark' | 'light') {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
  document.cookie = `${COOKIE}=${theme}; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax`
  renderToggle(theme)
}

document.querySelector<HTMLButtonElement>('.theme-toggle')?.addEventListener('click', () => {
  apply(document.documentElement.dataset.theme === 'light' ? 'dark' : 'light')
})

renderToggle(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
