# Design Spec: Full Scrollable Home Page Summary Sections

## Overview
Restore the complete, scrollable multi-section editorial layout on the Vue 3 homepage (`src/views/HomeView.vue`). The page will feature the interactive Hero Dashboard, downward bounce arrow button, and four editorial summary sections (Recent Experience, Education & Certifications, Project Summary, Key Skills) matching the original Astro design.

## Goals & Objectives
1. **Full Editorial Parity**: Re-integrate the 4 editorial summary sections into `src/views/HomeView.vue` with stat highlight badges and timeline cards.
2. **Smooth Scroll Navigation**: Add a downward bounce arrow button that smooth-scrolls to `#summary-sections`.
3. **Router Links**: Replace static anchor tags in summary sections with Vue Router `<router-link>` tags pointing to `/experience`, `/education`, `/projects`, and `/skills`.
4. **TypeScript Parity**: Ensure clean `<script setup lang="ts">` execution with 0 type errors.

---

## Technical Architecture

### Component File: `src/views/HomeView.vue`
- Includes `<script setup lang="ts">` importing `HeroDashboard` from `@/components/HeroDashboard.vue`.
- Layout structure:
  - `<div class="snap-start min-h-dvh flex flex-col justify-center pt-16">`
    - Hero Grid (`#hero`)
    - Downward Bounce Arrow (`.animate-bounce-arrow`)
  - `<div id="summary-sections" class="mt-8 flex flex-col gap-0 scroll-mt-[90px]">`
    - Section 1: Recent Experience (`<section class="snap-start min-h-dvh...">`)
    - Section 2: Education & Certifications (`<section class="snap-start min-h-dvh...">`)
    - Section 3: Project Summary (`<section class="snap-start min-h-dvh...">`)
    - Section 4: Key Skills Summary (`<section class="snap-start min-h-dvh...">`)

---

## Verification
- Run `npm run type-check` (`npx vue-tsc --noEmit`) to verify 0 type errors.
- Run `npm run build` (`npx vite build`) to verify clean production build.
