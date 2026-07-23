<template>
  <div class="min-h-dvh flex flex-col bg-ink text-paper font-body selection:bg-brass/20 selection:text-brass-soft relative overflow-hidden">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Ambient Background Grid & Floating Glowing Orbs -->
    <div class="bg-grid"></div>
    <div class="bg-orb bg-orb-1"></div>
    <div class="bg-orb bg-orb-2"></div>
    <div class="bg-orb bg-orb-3"></div>
    <div class="bg-orb bg-orb-4"></div>
    <div class="bg-orb bg-orb-5"></div>

    <!-- Tech Particles Array -->
    <div class="particles-container">
      <div v-for="i in 40" :key="i" class="particle" :style="getParticleStyle(i)"></div>
    </div>

    <!-- Mouse Cursor Spotlight Tracker -->
    <div
      class="fixed inset-0 pointer-events-none z-[-1] transition-opacity duration-300 max-[768px]:hidden"
      :style="{
        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(254, 128, 25, 0.08), transparent 80%)`
      }"
    ></div>

    <div class="noise-overlay" aria-hidden="true"></div>

    <Navbar />

    <main id="main-content" class="max-w-[960px] w-full mx-auto px-6 pt-16 pb-8 min-h-dvh flex flex-col scroll-mt-[90px]">
      <div class="flex-1 flex flex-col w-full">
        <router-view v-slot="{ Component }">
          <transition name="page-fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
      <Footer />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

const mouseX = ref(-1000);
const mouseY = ref(-1000);

function handleMouseMove(e: MouseEvent) {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
}

// Pre-compute particle styles to avoid reactivity overhead
const particles = Array.from({ length: 40 }).map(() => {
  const size = Math.random() * 2.5 + 1; // 1px to 3.5px
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const duration = Math.random() * 30 + 20; // 20s to 50s for very slow drift
  const delay = Math.random() * -30; // negative delay so they start immediately
  const opacity = Math.random() * 0.3 + 0.1;
  const color = Math.random() > 0.5 ? 'var(--color-brass-soft)' : 'var(--color-teal)';
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    top: `${top}%`,
    opacity,
    backgroundColor: color,
    boxShadow: `0 0 ${size * 2}px ${color}`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`
  };
});

function getParticleStyle(i: number) {
  return particles[i - 1];
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>
