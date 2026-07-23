# Ambient Glowing Orbs & Cursor Spotlight Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 3 animated background glowing orbs and a 600px dynamic cursor spotlight tracker across the application.

**Architecture:** Append `.bg-orb` classes and floating keyframe animations in `src/styles/global.css`. Integrate `mouseX` / `mouseY` reactive listeners and spotlight div in `src/App.vue`.

**Tech Stack:** Vue 3, CSS Keyframe Animations, Tailwind CSS v4.

## Global Constraints
- **GPU Acceleration**: Use `will-change: transform` and CSS hardware acceleration.
- **Zero Build Errors**: Verify with `npm run type-check` and `npm run build`.

---

### Task 1: Add Ambient Orb CSS Rules to `src/styles/global.css`

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Append `.bg-orb` classes and keyframes to `src/styles/global.css`**

```css
/* ── AMBIENT GLOWING ORBS ─────────────────────────── */
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

---

### Task 2: Integrate Cursor Spotlight & Orbs in `src/App.vue` & Verify Build

**Files:**
- Modify: `src/App.vue`

- [ ] **Step 1: Update `src/App.vue` with spotlight listener and orb divs**

```vue
<template>
  <div class="min-h-dvh flex flex-col bg-ink text-paper font-body selection:bg-brass/20 selection:text-brass-soft relative">
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Ambient Background Grid & Floating Orbs -->
    <div class="bg-grid"></div>
    <div class="bg-orb bg-orb-1"></div>
    <div class="bg-orb bg-orb-2"></div>
    <div class="bg-orb bg-orb-3"></div>

    <!-- Mouse Cursor Spotlight Tracker -->
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

- [ ] **Step 2: Run Type Checking & Production Build**

Run: `npm run type-check`
Expected: 0 type errors.

Run: `npm run build`
Expected: Successful Vite compilation.
