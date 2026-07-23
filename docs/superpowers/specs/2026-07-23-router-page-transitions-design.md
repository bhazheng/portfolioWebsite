# Design Spec: Vue Router Page Transitions & Dynamic Title Management

## Overview
Implement smooth page transition animations (`fade + subtle slide up`) between route views in the Vue 3 Single Page Application (SPA), along with dynamic browser document title management on route navigation.

## Goals & Objectives
1. **Seamless Route Transitions**: Apply a 200ms `opacity + translateY` transition during route changes using Vue 3 `<router-view v-slot>` and `<transition mode="out-in">`.
2. **Dynamic Browser Title Updates**: Update `document.title` on every route change via `router.afterEach()` navigation guard and route `meta.title`.
3. **Accessibility**: Ensure `prefers-reduced-motion` automatically disables transition movement.
4. **Performance & Hardware Acceleration**: Use CSS transform properties for 60 FPS transition rendering without triggering layout reflow.

---

## Technical Architecture

### 1. Route Transition Wrapper in `src/App.vue`
```vue
<main class="flex-1 w-full max-w-[1100px] mx-auto px-6 py-6 max-[480px]:px-4">
  <router-view v-slot="{ Component }">
    <transition name="page-fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</main>
```

### 2. Transition CSS Rules in `src/styles/global.css`
```css
/* ── ROUTE TRANSITION ANIMATIONS ─────────────────── */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 200ms cubic-bezier(0.16, 1, 0.3, 1),
              transform 200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
```

### 3. Dynamic Meta Title Guard in `src/router/index.ts`
Attach `meta: { title: '...' }` to all route records and add an `afterEach` navigation guard:
```ts
router.afterEach((to) => {
  const pageTitle = to.meta.title as string | undefined;
  document.title = pageTitle ? `${pageTitle} — Akbar Lucky Basuki` : 'Akbar Lucky Basuki — Business Analyst & Data Storyteller';
});
```

---

## Verification
- Run `npm run type-check` (`npx vue-tsc --noEmit`) to verify 0 type errors.
- Run `npm run build` (`npx vite build`) to verify clean production build.
