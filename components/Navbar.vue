<template>
  <!-- Floating Island Wrapper (Desktop Only Header) -->
  <header 
    class="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[720px] z-[100] transition-all duration-300 ease-in-out max-md:hidden"
    :class="isNavbarVisible ? 'translate-y-0 opacity-100' : '-translate-y-28 opacity-0 pointer-events-none'"
  >
    <div class="bg-glass-nav backdrop-blur-xl border border-line-dark rounded-full h-12 flex items-center justify-between px-4 md:px-5 shadow-glass-nav">
      
      <!-- Brand Logo -->
      <button @click="activeTab = 'home'" class="font-display font-bold text-xs tracking-widest text-paper hover:text-brass-soft transition-colors duration-200 uppercase flex items-center gap-1.5 active:scale-95 cursor-pointer">
        AL<span class="text-brass-soft">B</span>
        <span class="w-1 h-1 rounded-full bg-brass-soft shadow-[0_0_8px_var(--color-brass-soft)]"></span>
      </button>
 
      <!-- Desktop Nav Links -->
      <nav class="flex items-center gap-1">
        <button
          v-for="item in navItems"
          :key="item.name"
          @click="activeTab = item.name"
          class="font-mono text-[9px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 ease-out active:scale-90 active:translate-y-0 relative cursor-pointer"
          :class="activeTab === item.name ? 'text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner' : 'text-text-secondary border border-transparent hover:text-paper hover:bg-glass-hover'"
        >
          {{ item.name }}
        </button>
      </nav>
 
      <!-- Right Side CTA -->
      <div class="flex items-center gap-2">
        <button
          @click="activeTab = 'contact'"
          class="flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-ink bg-brass px-4 py-1.5 rounded-full hover:bg-brass-soft hover:-translate-y-0.5 transition-all duration-200 active:scale-95 shadow-btn-primary cursor-pointer"
        >
          Hire Me
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Floating Dock (Mobile Only with Morphing UI) -->
  <nav 
    class="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] h-14 bg-glass-nav backdrop-blur-xl border border-line-dark rounded-full flex items-center justify-around shadow-glass-nav transition-all duration-300 ease-spring"
    :class="isDockMinimized ? 'w-14 px-0 cursor-pointer' : 'w-[92%] max-w-[420px] px-4'"
    @click="isDockMinimized ? isDockMinimized = false : null"
  >
    <button
      v-for="item in navItems"
      :key="item.name"
      @click.stop="activeTab = item.name"
      class="group relative flex items-center justify-center transition-all duration-200 ease-out cursor-pointer"
      :class="[
        activeTab === item.name ? 'text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner w-10 h-10 rounded-full' : 'text-text-secondary border border-transparent w-10 h-10 rounded-full hover:text-paper hover:bg-glass-hover',
        activeTab === item.name ? 'flex' : (isDockMinimized ? 'hidden' : 'flex')
      ]"
    >
      <!-- Floating Tooltip -->
      <span 
        v-if="!isDockMinimized"
        class="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-ink border border-line-dark text-[8px] font-mono uppercase tracking-wider rounded shadow-badge opacity-0 pointer-events-none group-hover:opacity-100 group-focus:opacity-100 group-hover:-translate-y-1 transition-all duration-200"
      >
        {{ item.name }}
      </span>

      <!-- Icon -->
      <i :class="[item.icon, 'text-lg transition-transform duration-200 group-hover:scale-125 group-hover:-translate-y-1']"></i>
    </button>
  </nav>
</template>
 
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const activeTab = useState('activeTab', () => 'home');
const isNavbarVisible = ref(true);
const isDockMinimized = ref(false);
let lastScrollY = 0;

function handleScroll() {
  const currentScrollY = window.scrollY;
  
  if (currentScrollY <= 20) {
    isNavbarVisible.value = true;
    isDockMinimized.value = false;
    return;
  }
  
  if (currentScrollY > lastScrollY && currentScrollY > 60) {
    isNavbarVisible.value = false;
    isDockMinimized.value = true;
  } else if (currentScrollY < lastScrollY) {
    isNavbarVisible.value = true;
    isDockMinimized.value = false;
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
  { name: 'home', icon: 'ph ph-house' },
  { name: 'experience', icon: 'ph ph-briefcase' },
  { name: 'education', icon: 'ph ph-graduation-cap' },
  { name: 'projects', icon: 'ph ph-code' },
  { name: 'skills', icon: 'ph ph-wrench' },
  { name: 'contact', icon: 'ph ph-paper-plane-tilt' }
];
</script>
