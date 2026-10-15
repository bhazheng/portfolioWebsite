// @unocss-include
import { ref, onMounted, onUnmounted } from 'vue'

export const NAV_SECTIONS = [
  { id: 'hero', label: 'Home', icon: 'i-material-symbols:home' },
  { id: 'projects', label: 'Projects', icon: 'i-material-symbols:code' },
  { id: 'experience', label: 'Experience', icon: 'i-material-symbols:work' },
  { id: 'education', label: 'Education', icon: 'i-material-symbols:school' },
  { id: 'skills', label: 'Skills', icon: 'i-material-symbols:build' },
  { id: 'contact', label: 'Contact', icon: 'i-material-symbols:mail' }
] as const

export function useActiveSection() {
  const active = ref<string>('hero')
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const els = NAV_SECTIONS
      .map(s => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[]
    observer = new IntersectionObserver(
      entries => {
        for (const e of entries) if (e.isIntersecting) active.value = e.target.id
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    els.forEach(el => observer!.observe(el))
  })

  onUnmounted(() => observer?.disconnect())

  return { active, sections: NAV_SECTIONS }
}
