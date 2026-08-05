<template>
  <div class="min-h-dvh flex flex-col bg-ink text-paper font-body selection:bg-brass/20 selection:text-brass relative overflow-x-hidden">
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <!-- Background Effects Layer (z-0) -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="bg-grid"></div>
      <div class="bg-orb bg-orb-1"></div>
      <div class="bg-orb bg-orb-2"></div>

      <!-- Paper Dust Motes -->
      <div class="particles-container">
        <div v-for="i in 10" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>

      <!-- Paper Grain -->
      <div class="noise-overlay" aria-hidden="true"></div>
    </div>

    <!-- Main Content Layer (z-10) -->
    <div class="relative z-10 flex flex-col min-h-dvh">
      <Navbar />

      <main id="main-content" class="max-w-[960px] w-full mx-auto px-6 pt-6 md:pt-16 pb-28 md:pb-8 flex-1 flex flex-col scroll-mt-[90px]">
        <div class="flex-1 flex flex-col w-full">
          <NuxtPage />
        </div>
        <Footer />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const particles = Array.from({ length: 10 }).map(() => {
  const size = Math.random() * 2 + 0.8;
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const duration = Math.random() * 40 + 30;
  const delay = Math.random() * -40;
  const opacity = Math.random() * 0.12 + 0.04;
  const color = Math.random() > 0.5 ? 'var(--color-brass)' : 'var(--color-teal)';

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
</script>
