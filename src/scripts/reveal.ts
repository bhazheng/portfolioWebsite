const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const els = document.querySelectorAll<HTMLElement>('[data-reveal]')

if (prefersReduced || typeof IntersectionObserver === 'undefined') {
  els.forEach(el => el.classList.add('reveal-in'))
} else {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      const el = entry.target as HTMLElement
      const delay = el.dataset.revealDelay
      if (delay) el.style.transitionDelay = `${delay}ms`
      el.classList.add('reveal-in')
      observer.unobserve(el)
    }
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.08 })

  els.forEach((el) => {
    el.classList.add('reveal-init')
    observer.observe(el)
  })
}
