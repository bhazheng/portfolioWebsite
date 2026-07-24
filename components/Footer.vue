<template>
  <footer class="border-t border-line-dark mt-20 pt-12 pb-16 w-full">
    <!-- Top Grid Section (4 Columns) -->
    <div class="grid grid-cols-4 gap-8 pb-12 border-b border-line-dark max-[1024px]:grid-cols-2 max-[640px]:grid-cols-1 max-[640px]:gap-8">
      
      <!-- Column 1: Brand & Availability Status -->
      <div class="flex flex-col gap-3.5">
        <button 
          @click="activeTab = 'home'" 
          class="font-display font-bold text-sm tracking-widest text-paper hover:text-brass-soft transition-colors duration-200 uppercase flex items-center gap-2 active:scale-95 cursor-pointer w-fit"
        >
          AL<span class="text-brass-soft">B</span>
          <span class="w-1.5 h-1.5 rounded-full bg-brass-soft shadow-[0_0_8px_var(--color-brass-soft)]"></span>
        </button>
        
        <p class="font-body text-xs text-text-secondary leading-relaxed max-w-[28ch]">
          Business Analyst & Data Storyteller translating complex datasets into actionable executive decision frameworks.
        </p>

        <!-- Availability Badge -->
        <div class="inline-flex items-center gap-2 font-mono text-[10px] font-semibold text-teal bg-teal/10 border border-teal/20 px-3 py-1 rounded-full w-fit mt-1">
          <span class="w-2 h-2 rounded-full bg-teal animate-pulse"></span>
          Available for BI & Analytics Roles
        </div>
      </div>

      <!-- Column 2: Quick Navigation -->
      <div class="flex flex-col gap-3">
        <div class="font-mono text-[10px] font-bold uppercase tracking-widest text-brass-soft border-b border-line pb-1.5 w-fit">
          Navigation
        </div>
        <nav class="flex flex-col gap-2 font-mono text-xs text-text-secondary">
          <button 
            v-for="item in navItems" 
            :key="item.name" 
            @click="activeTab = item.name"
            class="hover:text-brass-soft text-left transition-colors duration-150 capitalize flex items-center gap-1.5 cursor-pointer"
            :class="activeTab === item.name ? 'text-brass-soft font-bold' : ''"
          >
            <span class="text-brass-soft text-[10px]" v-if="activeTab === item.name">→</span>
            {{ item.name }}
          </button>
        </nav>
      </div>

      <!-- Column 3: Core Specializations -->
      <div class="flex flex-col gap-3">
        <div class="font-mono text-[10px] font-bold uppercase tracking-widest text-brass-soft border-b border-line pb-1.5 w-fit">
          Specializations
        </div>
        <ul class="flex flex-col gap-2 font-mono text-[11px] text-text-muted">
          <li class="flex items-center gap-1.5"><span class="text-teal">◆</span> BI & Executive Dashboards</li>
          <li class="flex items-center gap-1.5"><span class="text-teal">◆</span> IndoBERT NLP & RCA Analytics</li>
          <li class="flex items-center gap-1.5"><span class="text-teal">◆</span> TensorFlow Computer Vision</li>
          <li class="flex items-center gap-1.5"><span class="text-teal">◆</span> OJK Digital Asset Research</li>
        </ul>
      </div>

      <!-- Column 4: Direct Connect & Socials -->
      <div class="flex flex-col gap-3">
        <div class="font-mono text-[10px] font-bold uppercase tracking-widest text-brass-soft border-b border-line pb-1.5 w-fit">
          Connect Directly
        </div>
        <p class="font-body text-xs text-text-secondary leading-relaxed">
          Open for collaborative opportunities, research studies, or analytics consultations.
        </p>

        <!-- Social Buttons Grid -->
        <div class="flex gap-2.5 flex-wrap mt-1">
          <a href="mailto:akbarlucky@protonmail.com" class="p-2.5 rounded-full bg-glass-card border border-line-dark text-paper hover:text-brass-soft hover:border-brass-soft hover:scale-110 transition-all duration-200" aria-label="Email Akbar Lucky">
            <i class="ph ph-envelope text-sm"></i>
          </a>
          <a href="https://www.linkedin.com/in/akbarlucky/" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-full bg-glass-card border border-line-dark text-paper hover:text-brass-soft hover:border-brass-soft hover:scale-110 transition-all duration-200" aria-label="LinkedIn Profile">
            <i class="ph ph-linkedin-logo text-sm"></i>
          </a>
          <a href="https://wa.me/6285172455808" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-full bg-glass-card border border-line-dark text-paper hover:text-brass-soft hover:border-brass-soft hover:scale-110 transition-all duration-200" aria-label="WhatsApp Contact">
            <i class="ph ph-whatsapp-logo text-sm"></i>
          </a>
          <a href="https://github.com/akbarlucky" target="_blank" rel="noopener noreferrer" class="p-2.5 rounded-full bg-glass-card border border-line-dark text-paper hover:text-brass-soft hover:border-brass-soft hover:scale-110 transition-all duration-200" aria-label="GitHub Profile">
            <i class="ph ph-github-logo text-sm"></i>
          </a>
        </div>
      </div>

    </div>

    <!-- Bottom Bar Section -->
    <div class="pt-8 flex justify-between items-center flex-wrap gap-4 max-[640px]:flex-col max-[640px]:text-center">
      <div>
        <div class="font-mono text-[9px] uppercase tracking-widest text-text-faint">
          © {{ currentYear }} Akbar Lucky Basuki.
        </div>
        <div class="font-mono text-[8px] text-text-muted mt-1 uppercase tracking-wider">
          ALL RIGHTS RESERVED. REGULATORY-GRADE DECISIONS.
        </div>
      </div>

      <div class="flex items-center gap-4 flex-wrap font-mono text-[9px] uppercase tracking-wider text-text-secondary">
        <button @click="activeTab = 'privacy'" class="hover:text-brass-soft transition-colors duration-150 cursor-pointer">
          Privacy Policy
        </button>
        <span class="text-text-faint">•</span>
        <button @click="activeTab = 'terms'" class="hover:text-brass-soft transition-colors duration-150 cursor-pointer">
          Terms of Service
        </button>
        <span class="text-text-faint">•</span>
        <span class="text-brass-soft/80 font-semibold bg-brass/10 border border-brass/20 px-2.5 py-0.5 rounded-full">
          Nuxt 3 & Tailwind v4
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
