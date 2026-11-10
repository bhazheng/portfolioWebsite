import { NAV_SECTIONS } from '../data/nav'

const mobileWrap = document.querySelector<HTMLElement>('.mobile-nav-wrap')
const dock = document.querySelector<HTMLElement>('.mobile-dock')
const label = document.querySelector<HTMLElement>('.active-label')
const shrunkItem = document.querySelector<HTMLAnchorElement>('.mobile-dock-item[data-shrunk-item]')
const shrunkIcon = shrunkItem?.querySelector<HTMLElement>('.icon')

function setActive(id: string) {
  const section = NAV_SECTIONS.find(s => s.id === id) ?? NAV_SECTIONS[0]
  document.querySelectorAll<HTMLAnchorElement>('.floating-nav a, .mobile-dock-item:not([data-shrunk-item])').forEach((a) => {
    const on = a.getAttribute('href') === `#${section.id}`
    a.classList.toggle('current', on)
    if (on) a.setAttribute('aria-current', 'page')
    else a.removeAttribute('aria-current')
  })
  // Labels are localized server-side and carried on the anchors; never hard-code them here.
  const localized = document.querySelector<HTMLElement>(`.floating-nav a[href="#${section.id}"]`)?.dataset.label
  if (label && localized) label.textContent = localized
  if (shrunkIcon) shrunkIcon.className = `${section.icon} icon`
}

const observer = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
}, { rootMargin: '-45% 0px -50% 0px' })

for (const s of NAV_SECTIONS) {
  const el = document.getElementById(s.id)
  if (el) observer.observe(el)
}

let timer: number | undefined
window.addEventListener('scroll', () => {
  mobileWrap?.classList.add('shrunk')
  window.clearTimeout(timer)
  timer = window.setTimeout(() => mobileWrap?.classList.remove('shrunk'), 500)
}, { passive: true })

// Shrunk pill: tapping expands instead of navigating.
shrunkItem?.addEventListener('click', (e) => {
  e.preventDefault()
  mobileWrap?.classList.remove('shrunk')
})

// Expanded dock: navigating collapses the dock.
dock?.addEventListener('click', (e) => {
  if ((e.target as HTMLElement).closest('.mobile-dock-item:not([data-shrunk-item])')) {
    mobileWrap?.classList.add('shrunk')
  }
})

window.matchMedia('(min-width: 960px)').addEventListener('change', (e) => {
  if (e.matches) mobileWrap?.classList.remove('shrunk')
})

// Scroll progress for the pill nav's thin lime bar (CSS reads --scroll-progress).
const root = document.documentElement
let ticking = false
function updateProgress() {
  const max = root.scrollHeight - window.innerHeight
  root.style.setProperty('--scroll-progress', String(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0))
  ticking = false
}
window.addEventListener('scroll', () => {
  if (!ticking) {
    ticking = true
    requestAnimationFrame(updateProgress)
  }
}, { passive: true })
updateProgress()

setActive('hero')
