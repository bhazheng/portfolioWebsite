<template>
  <!-- Floating Island Wrapper -->
  <header class="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-[720px] z-[100] transition-all duration-300">
    <div class="bg-glass-nav backdrop-blur-xl border border-line-dark rounded-full h-12 flex items-center justify-between px-4 md:px-5 shadow-glass-nav">
      
      <!-- Brand Logo -->
      <router-link to="/" class="font-display font-bold text-xs tracking-widest text-paper hover:text-brass-soft transition-colors duration-200 uppercase flex items-center gap-1.5">
        AL<span class="text-brass-soft">B</span>
        <span class="w-1 h-1 rounded-full bg-brass-soft shadow-[0_0_8px_var(--color-brass-soft)] hidden md:block"></span>
      </router-link>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-1">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="font-mono text-[9px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 relative"
          active-class="text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner"
          :class="$route.path === item.path ? 'text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner' : 'text-text-secondary border border-transparent hover:text-paper hover:bg-glass-hover'"
        >
          {{ item.name }}
        </router-link>
      </nav>

      <!-- Right Side CTA / Menu Toggle -->
      <div class="flex items-center gap-2">
        <!-- Hire Me CTA (Desktop) -->
        <router-link
          to="/contact"
          class="hidden md:flex items-center gap-1.5 font-mono text-[9px] font-bold uppercase tracking-wider text-ink bg-brass px-4 py-1.5 rounded-full hover:bg-brass-soft hover:-translate-y-0.5 transition-all duration-200 shadow-btn-primary"
        >
          Hire Me
        </router-link>

        <!-- Hamburger Menu Button (Mobile) -->
        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden w-8 h-8 rounded-full border border-line-dark bg-glass-card flex items-center justify-center text-paper hover:border-brass-soft transition-colors duration-200 shadow-glass-inner"
          :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <i :class="isMobileMenuOpen ? 'ph ph-x text-sm' : 'ph ph-list text-sm'"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Menu Dropdown -->
    <transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-14 left-0 w-full bg-glass-mobile backdrop-blur-2xl border border-line-dark rounded-2xl p-2 shadow-badge flex flex-col gap-1 overflow-hidden">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          @click="isMobileMenuOpen = false"
          class="font-mono text-[10px] font-semibold uppercase tracking-wider px-4 py-3 rounded-xl transition-all duration-200 flex items-center gap-2"
          active-class="text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner"
          :class="$route.path === item.path ? 'text-brass-soft bg-brass/10 border border-brass/20 shadow-glass-inner' : 'text-text-secondary border border-transparent hover:text-paper hover:bg-glass-hover'"
        >
          <i v-if="$route.path === item.path" class="ph ph-caret-right text-brass-soft"></i>
          {{ item.name }}
        </router-link>
        <div class="w-full h-px bg-line-dark my-1"></div>
        <router-link
          to="/contact"
          @click="isMobileMenuOpen = false"
          class="font-mono text-[10px] font-bold uppercase tracking-wider text-ink bg-brass px-4 py-3 rounded-xl text-center shadow-[0_4px_12px_rgba(254,128,25,0.25)] hover:bg-brass-soft transition-colors"
        >
          Hire Me
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const navItems = [
  { name: 'home', path: '/' },
  { name: 'experience', path: '/experience' },
  { name: 'education', path: '/education' },
  { name: 'projects', path: '/projects' },
  { name: 'skills', path: '/skills' }
];
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 250ms cubic-bezier(0.16, 1, 0.3, 1), transform 250ms cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-8px) scale(0.98);
}

.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-4px) scale(0.98);
}
</style>
