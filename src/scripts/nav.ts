import { NAV_SECTIONS } from '../data/nav'

const mobileWrap = document.querySelector<HTMLElement>('.mobile-nav-wrap')
const dock = document.querySelector<HTMLElement>('.mobile-dock')
const label = document.querySelector<HTMLElement>('.active-label')
const shrunkItem = document.querySelector<HTMLAnchorElement>('.mobile-dock-item[data-shrunk-item]')
const shrunkIcon = shrunkItem?.querySelector<HTMLElement>('.icon')
const floatingNav = document.querySelector<HTMLElement>('.floating-nav')
const navIndicator = floatingNav?.querySelector<HTMLElement>('.nav-indicator')
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

let currentId = ''

function positionIndicator() {
  if (!floatingNav || !navIndicator) return
  const active = floatingNav.querySelector<HTMLAnchorElement>('a.current')
  if (!active || active.offsetWidth === 0) return
  navIndicator.style.width = `${active.offsetWidth}px`
  navIndicator.style.transform = `translateX(${active.offsetLeft}px)`
  floatingNav.classList.add('has-indicator')
}

function setActive(id: string) {
  const section = NAV_SECTIONS.find(s => s.id === id) ?? NAV_SECTIONS[0]
  const changed = currentId !== '' && currentId !== section.id
  currentId = section.id

  document.querySelectorAll<HTMLAnchorElement>('.floating-nav a, .mobile-dock-item:not([data-shrunk-item])').forEach((a) => {
    const on = a.getAttribute('href') === `#${section.id}`
    a.classList.toggle('current', on)
    if (on) a.setAttribute('aria-current', 'page')
    else a.removeAttribute('aria-current')
  })
  // Labels are localized server-side and carried on the anchors; never hard-code them here.
  const localized = document.querySelector<HTMLElement>(`.floating-nav a[href="#${section.id}"]`)?.dataset.label
  if (label && localized) {
    label.textContent = localized
    if (changed && !prefersReduced) {
      label.classList.remove('label-pulse')
      void label.offsetWidth
      label.classList.add('label-pulse')
      label.addEventListener('animationend', () => label.classList.remove('label-pulse'), { once: true })
    }
  }
  if (shrunkIcon) shrunkIcon.className = `${section.icon} icon`
  // CSS hides the floating label on the hero (the dock already highlights Home there).
  if (mobileWrap) mobileWrap.dataset.active = section.id
  positionIndicator()
}

if (typeof ResizeObserver !== 'undefined' && floatingNav) {
  new ResizeObserver(() => positionIndicator()).observe(floatingNav)
}
window.addEventListener('resize', positionIndicator, { passive: true })
document.fonts?.ready.then(positionIndicator)

const observer = new IntersectionObserver((entries) => {
  for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
}, { rootMargin: '-45% 0px -50% 0px' })

for (const s of NAV_SECTIONS) {
  const el = document.getElementById(s.id)
  if (el) observer.observe(el)
}

// Desktop (≥960px) shows the pill nav; below it, the mobile dock.
const desktopMq = window.matchMedia('(min-width: 960px)')

// Dock shrinks while scrolling and re-expands 500ms after scrolling stops.
// Only touch the class when it actually changes, and skip it entirely on desktop
// (the dock is display:none there).
let timer: number | undefined
let shrunk = false
function expandDock() {
  shrunk = false
  mobileWrap?.classList.remove('shrunk')
}
function onDockScroll() {
  if (!mobileWrap || desktopMq.matches) return
  if (!shrunk) {
    shrunk = true
    mobileWrap.classList.add('shrunk')
  }
  window.clearTimeout(timer)
  timer = window.setTimeout(expandDock, 500)
}

// Shrunk pill: tapping expands instead of navigating.
shrunkItem?.addEventListener('click', (e) => {
  e.preventDefault()
  expandDock()
})

// Dock tap: if shrunk, tapping the shrunk active pill expands it instead of jumping;
// if expanded, navigating collapses the dock.
dock?.addEventListener('click', (e) => {
  const item = (e.target as HTMLElement).closest('.mobile-dock-item:not([data-shrunk-item])')
  if (!item) return
  if (shrunk) {
    e.preventDefault()
    expandDock()
  } else {
    shrunk = true
    mobileWrap?.classList.add('shrunk')
  }
})

// Scroll progress for the pill nav's thin scarlet bar (CSS reads --scroll-progress).
// Written on the pill itself, not <html>: a custom property on the root inherits into
// every element, so updating it there restyled the whole document on each scroll frame.
// The pill is hidden below 960px, so mobile skips the work entirely.
const root = document.documentElement
function updateProgress() {
  if (!floatingNav || !desktopMq.matches) return
  const max = root.scrollHeight - window.innerHeight
  floatingNav.style.setProperty('--scroll-progress', String(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0))
}

// One passive scroll listener, coalesced to one update per frame.
let ticking = false
window.addEventListener('scroll', () => {
  onDockScroll()
  if (!ticking) {
    ticking = true
    requestAnimationFrame(() => {
      ticking = false
      updateProgress()
    })
  }
}, { passive: true })

desktopMq.addEventListener('change', (e) => {
  if (e.matches) {
    window.clearTimeout(timer)
    expandDock()
    updateProgress()
  }
})
updateProgress()

setActive('hero')
