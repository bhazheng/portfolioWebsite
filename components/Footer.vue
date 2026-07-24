<template>
  <footer class="border-t border-line-dark mt-16 pt-8 pb-12 w-full">
    <div class="flex justify-between items-center flex-wrap gap-4 max-[640px]:flex-col max-[640px]:text-center">
      <div>
        <div class="font-mono text-[9px] uppercase tracking-widest text-text-faint">
          © {{ currentYear }} Akbar Lucky Basuki.
        </div>
        <div class="font-mono text-[8px] text-text-muted mt-1 uppercase tracking-wider">
          ALL RIGHTS RESERVED. REGULATORY-GRADE DECISIONS.
        </div>
      </div>
      <div class="flex gap-4 font-mono text-[9px] uppercase tracking-wider text-text-secondary">
        <button @click="activeTab = 'privacy'" class="hover:text-brass-soft transition-colors duration-150 cursor-pointer">
          Privacy Policy
        </button>
        <button @click="activeTab = 'terms'" class="hover:text-brass-soft transition-colors duration-150 cursor-pointer">
          Terms of Service
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const activeTab = useState('activeTab', () => 'home');
const currentYear = computed(() => new Date().getFullYear());
</script>
