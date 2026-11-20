const COOKIE = 'color-scheme'
const MAX_AGE = 60 * 60 * 24 * 365

// Keeps the toggle's icon and label in step with the theme. Runs on load as well as
// on click, because the pre-paint script may have flipped the page to light before
// this module ran — the markup still ships the dark-mode icon.
function renderToggle(theme: 'dark' | 'light') {
  const btn = document.querySelector<HTMLButtonElement>('.theme-toggle')
  if (!btn) return
  // Labels are localized server-side (data attributes), so this works on every language route.
  const next = theme === 'dark' ? btn.dataset.labelToLight : btn.dataset.labelToDark
  if (next) btn.setAttribute('aria-label', next)
  const icon = btn.querySelector<HTMLElement>('.icon')
  if (icon) icon.className = `${theme === 'dark' ? 'i-material-symbols:light-mode' : 'i-material-symbols:dark-mode'} icon`
}

function apply(theme: 'dark' | 'light') {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
  document.cookie = `${COOKIE}=${theme}; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax`
  renderToggle(theme)
}

function triggerSpin() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const icon = document.querySelector<HTMLElement>('.theme-toggle .icon')
  if (!icon) return
  icon.classList.remove('theme-spin')
  void icon.offsetWidth
  icon.classList.add('theme-spin')
  icon.addEventListener('animationend', () => icon.classList.remove('theme-spin'), { once: true })
}

const toggleBtn = document.querySelector<HTMLButtonElement>('.theme-toggle')

toggleBtn?.addEventListener('click', () => {
  const next: 'dark' | 'light' = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const doc = document as Document & {
    startViewTransition?: (cb: () => void) => { ready: Promise<void> }
  }

  if (typeof doc.startViewTransition === 'function' && !prefersReduced) {
    const rect = toggleBtn.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    const r = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )
    const vt = doc.startViewTransition(() => apply(next))
    vt.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${r}px at ${x}px ${y}px)`
          ]
        },
        {
          duration: 460,
          easing: 'cubic-bezier(0.2, 0, 0, 1)',
          pseudoElement: '::view-transition-new(root)'
        }
      )
    }).catch(() => {
      // View transition aborted; theme is already applied.
    })
  } else {
    apply(next)
  }

  triggerSpin()
})

renderToggle(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark')
