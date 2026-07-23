# Design Spec: Ambient Glowing Orbs & Dynamic Cursor Spotlight

## Overview
Enhance the portfolio's background aesthetics by introducing 3 animated floating ambient glowing orbs and a dynamic cursor spotlight tracker. As users move their mouse across the interface, a soft radial spotlight illuminates the background grid and glass cards.

## Goals & Objectives
1. **Dynamic Visual Depth**: Create a luxury dark glass aesthetic with 3 floating color-shifting ambient orbs (Gruvbox Orange, Aqua Teal, Amber Gold).
2. **Interactive Cursor Spotlight**: Track mouse position in `src/App.vue` and render a 600px radial glow spotlight following the cursor at 60 FPS.
3. **Performance Optimization**: Use CSS `will-change: transform` and hardware-accelerated GPU layers. Disable mouse spotlight on touch devices.

---

## Technical Architecture

### 1. CSS Ambient Orbs & Keyframe Animations (`src/styles/global.css`)
```css
/* Ambient Glowing Orbs */
.bg-orb {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: -2;
  will-change: transform;
}

.bg-orb-1 {
  top: -10%;
  left: -5%;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(254, 128, 25, 0.14) 0%, transparent 70%);
  filter: blur(100px);
  animation: float-orb-1 15s ease-in-out infinite alternate;
}

.bg-orb-2 {
  bottom: -10%;
  right: -5%;
  width: 550px;
  height: 550px;
  background: radial-gradient(circle, rgba(142, 192, 124, 0.12) 0%, transparent 70%);
  filter: blur(110px);
  animation: float-orb-2 18s ease-in-out infinite alternate;
}

.bg-orb-3 {
  top: 30%;
  left: 35%;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(250, 189, 47, 0.08) 0%, transparent 70%);
  filter: blur(90px);
  animation: float-orb-3 20s ease-in-out infinite alternate;
}

@keyframes float-orb-1 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(60px, 40px) scale(1.1); }
}

@keyframes float-orb-2 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(-50px, -30px) scale(1.08); }
}

@keyframes float-orb-3 {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(30px, -40px) scale(0.95); }
}
```

### 2. Mouse Cursor Spotlight in `src/App.vue`
```vue
<template>
  <div class="min-h-dvh flex flex-col bg-ink text-paper font-body selection:bg-brass/20 selection:text-brass-soft relative">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Ambient Orbs & Grid -->
    <div class="bg-grid"></div>
    <div class="bg-orb bg-orb-1"></div>
    <div class="bg-orb bg-orb-2"></div>
    <div class="bg-orb bg-orb-3"></div>
    
    <!-- Cursor Spotlight Tracker -->
    <div
      class="fixed inset-0 pointer-events-none z-[-1] transition-opacity duration-300"
      :style="{
        background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(254, 128, 25, 0.07), transparent 80%)`
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

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>
```

---

## Verification
- Run `npm run type-check` (`npx vue-tsc --noEmit`) to verify 0 type errors.
- Run `npm run build` (`npx vite build`) to verify clean production build.
