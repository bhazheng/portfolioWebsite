<template>
  <footer class="rei-footer page-width">
    <span class="font-mono">© {{ currentYear }} Akbar Lucky Basuki. · All rights reserved.</span>
    <span class="font-mono">Nuxt 3 · Vuetify 4 · EVA-01</span>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
