<template>
  <footer class="snap-start border-t border-line-dark mt-16 pt-4 pb-6 w-full">
    <div class="bg-ink-2 border border-line-dark rounded-3xl shadow-glass overflow-hidden">
      <!-- Top Grid Section (4 Columns) -->
      <div class="grid grid-cols-4 gap-8 p-8 pb-10 border-b border-line max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1 max-[640px]:gap-8 max-[640px]:p-6">

        <!-- Column 1: Brand & Availability Status -->
        <div class="flex flex-col gap-3.5">
          <button
            @click="activeTab = 'home'"
            class="font-display font-bold text-base tracking-wide text-paper hover:text-brass transition-colors duration-200 uppercase flex items-center gap-1 active:scale-95 cursor-pointer w-fit"
            aria-label="Return to Home"
          >
            AL<span class="text-brass">B</span><span class="text-teal font-mono ml-0.5 font-bold">.</span>
          </button>

          <p class="font-body text-xs text-text-secondary leading-relaxed max-w-[28ch]">
            Business Analyst & Data Storyteller turning raw data into decisions leaders act on.
          </p>

          <div class="font-mono text-[10px] text-text-muted uppercase tracking-wider inline-flex items-center gap-1.5">
            <i class="ph ph-map-pin text-[11px] text-brass"></i>
            Malang, East Java, ID
          </div>

          <!-- Availability Status (Editorial Line, No Pill) -->
          <div class="font-mono text-[10px] text-text-muted mt-1 inline-flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-teal animate-pulse"></span>
            Status: Open for BI &amp; Analytics Roles
          </div>
        </div>

        <!-- Column 2: Quick Navigation -->
        <div class="flex flex-col gap-3">
          <div class="font-mono text-[10px] font-bold uppercase tracking-widest text-brass border-b border-line pb-1.5 w-fit">
            Navigation
          </div>
          <nav class="flex flex-col gap-2 font-mono text-xs text-text-secondary">
            <button
              v-for="item in navItems"
              :key="item.name"
              @click="activeTab = item.name"
              class="hover:text-brass text-left transition-colors duration-150 capitalize flex items-center gap-1.5 cursor-pointer"
              :class="activeTab === item.name ? 'text-brass font-bold' : ''"
            >
              <span class="text-brass text-[10px]" v-if="activeTab === item.name">→</span>
              {{ item.name }}
            </button>
          </nav>
        </div>

        <!-- Column 3: Core Specializations -->
        <div class="flex flex-col gap-3">
          <div class="font-mono text-[10px] font-bold uppercase tracking-widest text-brass border-b border-line pb-1.5 w-fit">
            Specializations
          </div>
          <ul class="flex flex-col gap-2 font-mono text-[10px] text-text-muted">
            <li class="flex items-center gap-1.5"><span class="text-teal">◆</span> BI & Executive Dashboards</li>
            <li class="flex items-center gap-1.5"><span class="text-teal">◆</span> IndoBERT NLP & RCA Analytics</li>
            <li class="flex items-center gap-1.5"><span class="text-teal">◆</span> TensorFlow Computer Vision</li>
            <li class="flex items-center gap-1.5"><span class="text-teal">◆</span> OJK Digital Asset Research</li>
          </ul>
        </div>

        <!-- Column 4: Direct Connect & Socials -->
        <div class="flex flex-col gap-3">
          <div class="font-mono text-[10px] font-bold uppercase tracking-widest text-brass border-b border-line pb-1.5 w-fit">
            Connect Directly
          </div>
          <p class="font-body text-xs text-text-secondary leading-relaxed">
            Open for collaborative opportunities, research studies, or analytics consultations.
          </p>

          <!-- Social Buttons Grid -->
          <div class="flex gap-2.5 flex-wrap mt-1">
            <a href="mailto:akbarlucky@protonmail.com" class="p-2.5 rounded-full bg-glass-card border border-line-dark text-paper hover:text-brass hover:border-brass hover:scale-110 transition-all duration-200" aria-label="Email Akbar Lucky">
              <i class="ph ph-envelope text-sm"></i>
            </a>
            <a href="https://www.linkedin.com/in/akbarlucky/" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-full bg-glass-card border border-line-dark text-paper hover:text-brass hover:border-brass hover:scale-110 transition-all duration-200" aria-label="LinkedIn Profile">
              <i class="ph ph-linkedin-logo text-sm"></i>
            </a>
            <a href="https://wa.me/6285172455808" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-full bg-glass-card border border-line-dark text-paper hover:text-teal hover:border-teal hover:scale-110 transition-all duration-200" aria-label="WhatsApp Contact">
              <i class="ph ph-whatsapp-logo text-sm"></i>
            </a>
            <a href="https://github.com/bhazheng" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-full bg-glass-card border border-line-dark text-paper hover:text-brass hover:border-brass hover:scale-110 transition-all duration-200" aria-label="GitHub Profile">
              <i class="ph ph-github-logo text-sm"></i>
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Bar Section (glass inner strip) -->
      <div class="px-8 py-5 flex justify-between items-center flex-wrap gap-4 bg-charcoal/50 border-t border-line max-[640px]:flex-col max-[640px]:text-center max-[640px]:px-6">
        <div>
          <div class="font-mono text-[10px] uppercase tracking-widest text-text-faint">
            © {{ currentYear }} Akbar Lucky Basuki.
          </div>
          <div class="font-mono text-[10px] text-text-muted mt-1 uppercase tracking-wider">
            All rights reserved.
          </div>
        </div>

        <div class="flex items-center gap-4 flex-wrap font-mono text-[10px] uppercase tracking-wider text-text-secondary">
          <button @click="activeTab = 'privacy'" class="hover:text-brass transition-colors duration-150 cursor-pointer">
            Privacy Policy
          </button>
          <span class="text-text-faint">•</span>
          <button @click="activeTab = 'terms'" class="hover:text-brass transition-colors duration-150 cursor-pointer">
            Terms of Service
          </button>
        </div>

        <span class="font-mono text-[10px] font-semibold text-text-faint uppercase tracking-wider">
          Nuxt 3 · Tailwind v4
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const activeTab = useState('activeTab', () => 'home');
const currentYear = computed(() => new Date().getFullYear());

const navItems = [
  { name: 'home' },
  { name: 'experience' },
  { name: 'education' },
  { name: 'projects' },
  { name: 'skills' },
  { name: 'contact' }
];
</script>
