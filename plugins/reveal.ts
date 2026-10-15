// Scroll-reveal directive: elements fade+slide in when they enter the viewport.
// Usage: <div v-reveal> or <div v-reveal="200"> (delay in ms)
export default defineNuxtPlugin((nuxtApp) => {
  const isClient = import.meta.client
  const prefersReduced = isClient && typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

  const observer = (isClient && typeof IntersectionObserver !== 'undefined' && !prefersReduced)
    ? new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement
              const delay = el.dataset.revealDelay
              if (delay) el.style.transitionDelay = `${delay}ms`
              el.classList.add('reveal-in')
              observer!.unobserve(el)
            }
          }
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
      )
    : null

  nuxtApp.vueApp.directive('reveal', {
    // SSR: render elements in their final state (no animation on server)
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement, binding) {
      if (prefersReduced || !observer) {
        el.classList.add('reveal-in')
        return
      }
      el.classList.add('reveal-init')
      if (binding.value) {
        el.dataset.revealDelay = String(binding.value)
      }
      observer.observe(el)
    },
    unmounted(el: HTMLElement) {
      observer?.unobserve(el)
    },
  })
})
