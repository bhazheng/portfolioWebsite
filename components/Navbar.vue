<template>
  <div>
    <!-- Top header — scrolls away normally -->
    <header class="site-header page-width">
      <div class="site-header-inner">
        <a href="#hero" class="brand-mark" aria-label="Akbar Lucky Basuki — home">
          AL<span class="text-primary">B</span><span class="text-tertiary font-mono">.</span>
        </a>

        <div class="header-actions">
          <button
            class="theme-toggle"
            :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
            @click="toggleTheme"
          >
            <v-icon :icon="isDark ? 'i-material-symbols:light-mode' : 'i-material-symbols:dark-mode'" size="22" />
          </button>
          <a v-if="mdAndUp" href="#contact" class="header-contact">
            Get in touch
            <v-icon icon="i-material-symbols:arrow-up-right" size="16" />
          </a>
        </div>
      </div>
    </header>

    <!-- Desktop/tablet sticky pill nav — floats at top on scroll -->
    <nav v-if="mdAndUp" class="floating-nav sticky-pill" aria-label="Main navigation">
      <a
        v-for="s in sections"
        :key="s.id"
        :href="'#' + s.id"
        :class="{ current: active === s.id }"
        :aria-current="active === s.id ? 'page' : undefined"
      >
        <v-icon :icon="s.icon" size="18" />
        <span>{{ s.label }}</span>
      </a>
    </nav>

    <!-- Mobile bottom dock: shrinks to 1 icon on scroll, expands when stopped -->
    <div v-if="!mdAndUp" class="mobile-nav-wrap" :class="{ shrunk }">
      <Transition name="label-slide">
        <span v-if="!shrunk" :key="activeSection?.id" class="active-label font-mono">
          {{ activeSection?.label }}
        </span>
      </Transition>
      <nav class="mobile-dock" aria-label="Main navigation" @click="onDockTap">
        <!-- Shrunk: only active icon -->
        <a
          v-if="shrunk"
          href="#"
          class="mobile-dock-item current"
          @click.prevent="expanded = true"
        >
          <v-icon :icon="activeSection?.icon ?? 'i-material-symbols:home'" size="24" />
        </a>
        <!-- Expanded: all icons -->
        <a
          v-for="s in sections"
          v-else
          :key="s.id"
          :href="'#' + s.id"
          class="mobile-dock-item"
          :class="{ current: active === s.id }"
          :aria-current="active === s.id ? 'page' : undefined"
          @click="expanded = false"
        >
          <v-icon :icon="s.icon" size="22" />
        </a>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useTheme, useDisplay } from 'vuetify'

const theme = useTheme()
const { mdAndUp } = useDisplay()

const isDark = computed(() => theme.global.name.value === 'dark')

function toggleTheme() {
  theme.toggle()
}

const { active, sections } = useActiveSection()

const activeSection = computed(() =>
  sections.find(s => s.id === active.value) ?? sections[0]
)

// shrunk = show 1 icon, expanded = show all icons
const expanded = ref(true)
const shrunk = computed(() => !expanded.value)
let scrollTimer: ReturnType<typeof setTimeout> | null = null

function onScroll() {
  expanded.value = false
  if (scrollTimer) clearTimeout(scrollTimer)
  scrollTimer = setTimeout(() => {
    expanded.value = true
  }, 500)
}

// Tap shrunk pill to expand manually
function onDockTap(e: MouseEvent) {
  if (!expanded.value) {
    e.preventDefault()
    expanded.value = true
  }
}

watch(mdAndUp, (up) => { if (up) expanded.value = true })

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (scrollTimer) clearTimeout(scrollTimer)
})
</script>

<style scoped>
/* ── Shared header (normal flow, scrolls away) ────────────── */
.site-header {
  display: block;
  padding-block: 12px;
}
.site-header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  height: 76px;
}
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* ── Desktop/tablet sticky pill — fixed at top on scroll ──── */
.sticky-pill {
  position: fixed;
  top: 14px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12);
  transition: box-shadow 0.3s, top 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
}

/* ── Mobile bottom dock: icon-only pill + floating label ──── */

.mobile-nav-wrap {
  position: fixed;
  bottom: max(14px, env(safe-area-inset-bottom));
  left: 50%;
  transform: translateX(-50%);
  z-index: 200;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

/* Floating active label — above the pill */
.active-label {
  background: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
  font-size: 11px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  white-space: nowrap;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}
/* Label transitions when active section changes */
.label-slide-enter-active,
.label-slide-leave-active {
  transition: opacity 0.25s cubic-bezier(0.2, 0.8, 0.2, 1),
              transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.label-slide-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.label-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* Icon-only pill — animates between shrunk (1 icon) and expanded (all) */
.mobile-dock {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 6px;
  border-radius: 30px;
  background: rgb(var(--v-theme-surface-container));
  border: 1px solid rgb(var(--v-theme-outline-variant));
  box-shadow: 0 6px 28px rgba(0, 0, 0, 0.18);
  max-width: calc(100vw - 32px);
  transition: gap 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
              padding 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
              border-radius 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
              box-shadow 0.3s;
}

/* Shrunk: single round icon */
.mobile-nav-wrap.shrunk .mobile-dock {
  gap: 0;
  padding: 5px;
  border-radius: 50%;
}
.mobile-nav-wrap.shrunk .mobile-dock-item {
  width: 52px;
  height: 52px;
}

/* Expanded: all icons in a row */
.mobile-nav-wrap:not(.shrunk) .mobile-dock {
  gap: 3px;
  padding: 7px;
  border-radius: 34px;
}

.mobile-dock-item {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: rgb(var(--v-theme-on-surface-variant));
  text-decoration: none;
  transition: background 0.25s cubic-bezier(0.2, 0.8, 0.2, 1),
              color 0.25s,
              transform 0.25s cubic-bezier(0.2, 0.8, 0.2, 1),
              width 0.4s cubic-bezier(0.2, 0.8, 0.2, 1),
              height 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.mobile-dock-item.current {
  background: rgb(var(--v-theme-primary-container));
  color: rgb(var(--v-theme-on-primary-container));
  transform: scale(1.1);
}
.mobile-dock-item:active {
  transform: scale(0.92);
}

/* ── Responsive ────────────────────────────────────────────── */
@media (max-width: 767px) {
  .site-header-inner { height: 64px; gap: 10px; }

  .header-actions .header-contact { display: none; }
}
</style>
