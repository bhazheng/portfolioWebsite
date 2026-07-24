<template>
  <!-- Floating Island Wrapper (Desktop Only Header) -->
  <header 
    class="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[720px] z-[100] transition-all duration-300 ease-in-out max-md:hidden"
    :class="isNavbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0 pointer-events-none'"
  >
    <div class="bg-glass-nav backdrop-blur-xl border border-line-dark rounded-full h-12 flex items-center justify-between px-4 md:px-5 shadow-glass-nav">
      
      <!-- Brand Logo -->
      <NuxtLink to="/" class="font-display font-bold text-xs tracking-widest text-paper hover:text-brass-soft transition-colors duration-200 uppercase flex items-center gap-1.5 active:scale-95">
        AL<span class="text-brass-soft">B</span>
        <span class="w-1 h-1 rounded-full bg-brass-soft shadow-[0_0_8px_var(--color-brass-soft)]"></span>
      </NuxtLink>
 
      <!-- Desktop Nav Links -->
      <nav class="flex items-center gap-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="font-mono text-[9px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 ease-out active:scale-90 active:translate-y-0 relative"
          active-class="text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner"
          :class="route.path === item.path ? 'text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner' : 'text-text-secondary border border-transparent hover:text-paper hover:bg-glass-hover'"
        >
          {{ item.name }}
        </NuxtLink>
      </nav>
 
      <!-- Right Side CTA -->
      <div class="flex items-center gap-2">
        <NuxtLink
          to="/contact"
          class="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-ink bg-brass px-4 py-1.5 rounded-full hover:bg-brass-soft hover:-translate-y-0.5 transition-all duration-200 active:scale-95 shadow-btn-primary"
        >
          Hire Me
        </NuxtLink>
      </div>
    </div>
  </header>

  <!-- Mobile Floating Dock (Mobile Only) -->
  <nav 
    class="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] h-14 w-[92%] max-w-[420px] bg-glass-nav backdrop-blur-xl border border-line-dark rounded-full px-4 flex items-center justify-around gap-1 shadow-glass-nav transition-all duration-300 ease-in-out"
    :class="isNavbarVisible ? 'translate-y-0 opacity-100' : 'translate-y-28 opacity-0 pointer-events-none'"
  >
    <NuxtLink
      v-for="item in navItems"
      :key="item.path"
      :to="item.path"
      class="group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ease-out active:scale-90 active:translate-y-0"
      active-class="text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner"
      :class="route.path === item.path ? 'text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner' : 'text-text-secondary border border-transparent hover:text-paper hover:bg-glass-hover'"
    >
      <!-- Floating Tooltip -->
      <span class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-ink border border-line-dark text-[8px] font-mono uppercase tracking-wider rounded shadow-badge opacity-0 pointer-events-none group-hover:opacity-100 group-focus:opacity-100 group-hover:-translate-y-1 transition-all duration-200">
        {{ item.name }}
      </span>

      <!-- Icon -->
      <i :class="[item.icon, 'text-lg transition-transform duration-200 group-hover:scale-125 group-hover:-translate-y-1']"></i>
    </NuxtLink>
  </nav>
</template>
 
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const route = useRoute();
const isNavbarVisible = ref(true);
let lastScrollY = 0;

function handleScroll() {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY <= 20) {
    isNavbarVisible.value = true;
    return;
  }
  
  if (currentScrollY > lastScrollY && currentScrollY > 60) {
    isNavbarVisible.value = false;
  } else if (currentScrollY < lastScrollY) {
    isNavbarVisible.value = true;
  }
  
  lastScrollY = currentScrollY;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
 
const navItems = [
  { name: 'home', path: '/', icon: 'ph ph-house' },
  { name: 'experience', path: '/experience', icon: 'ph ph-briefcase' },
  { name: 'education', path: '/education', icon: 'ph ph-graduation-cap' },
  { name: 'projects', path: '/projects', icon: 'ph ph-code' },
  { name: 'skills', path: '/skills', icon: 'ph ph-wrench' },
  { name: 'contact', path: '/contact', icon: 'ph ph-paper-plane-tilt' }
];
</script>
