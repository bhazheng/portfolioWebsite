<template>
  <div class="flex flex-col gap-0">
    <!-- HERO SECTION WRAPPER -->
    <div class="min-h-dvh flex flex-col justify-center pt-2 md:pt-6 pb-20 md:pb-6">
      <div class="grid grid-cols-[1.1fr_0.9fr] gap-8 items-center py-6 max-[960px]:grid-cols-1 max-[960px]:gap-6" id="hero">
        <div class="flex flex-col gap-4">
          <div class="font-mono text-[10px] font-semibold tracking-[0.16em] text-brass uppercase inline-flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-brass"></span>
            Business Analyst &amp; Data Storyteller
          </div>
          <h1 class="font-display font-normal text-[clamp(1.9rem,4vw,3rem)] leading-[1.08] tracking-tight text-paper">
            Hi, I'm<br />
            <span class="font-display font-bold text-brass tracking-tight whitespace-nowrap">Akbar <span class="underline decoration-brass decoration-2 underline-offset-4">Lucky</span> Basuki</span>.
          </h1>
          <p class="font-body text-base font-normal leading-relaxed text-text-secondary max-w-[54ch]">
            An Information Systems graduate from Universitas Brawijaya working as a Business &amp; Data Analyst. I focus on translating complex data points into intuitive dashboard systems, conducting strategic market analysis, and developing machine learning solutions to guide decision-making.
          </p>

          <div class="flex gap-3 flex-wrap">
            <button
              class="inline-flex items-center justify-center gap-2 font-mono text-xs font-bold tracking-wider bg-brass text-ink rounded-full min-h-10 px-5 py-2.5 shadow-btn-primary hover:-translate-y-0.5 hover:bg-brass-soft transition-all duration-150 ease-spring cursor-pointer"
              @click="activeTab = 'contact'"
            >
              Email me
            </button>
            <a
              class="inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold tracking-wider bg-glass-ghost text-paper rounded-full border border-line-dark min-h-10 px-5 py-2.5 shadow-glass-inner hover:border-brass hover:text-brass transition-all duration-150 ease-spring"
              href="#career-journey"
              @click.prevent="scrollToSection('career-journey')"
            >
              Interactive Map ↓
            </a>
          </div>

          <div class="flex gap-4 mt-2 flex-wrap">
            <a class="font-mono text-[10px] font-medium tracking-wide text-text-muted inline-flex items-center gap-1 hover:text-brass transition-all" href="https://www.linkedin.com/in/akbarlucky/" target="_blank" rel="noopener noreferrer">
              <i class="ph ph-linkedin-logo text-xs"></i> LinkedIn
            </a>
            <a class="font-mono text-[10px] font-medium tracking-wide text-text-muted inline-flex items-center gap-1 hover:text-brass transition-all" href="https://wa.me/6285172455808" target="_blank" rel="noopener noreferrer">
              <i class="ph ph-whatsapp-logo text-xs"></i> WhatsApp
            </a>
            <a class="font-mono text-[10px] font-medium tracking-wide text-text-muted inline-flex items-center gap-1 hover:text-brass transition-all" href="https://github.com/bhazheng" target="_blank" rel="noopener noreferrer">
              <i class="ph ph-github-logo text-xs"></i> GitHub
            </a>
          </div>
        </div>

        <div class="flex justify-center items-center relative max-[960px]:order-first">
          <HeroDashboard />
        </div>
      </div>

      <!-- Downward Arrow & Scroll Indicator -->
      <div class="flex flex-col items-center gap-2 mt-4">
        <a href="#career-journey" @click.prevent="scrollToSection('career-journey')" class="flex flex-col items-center gap-1.5 group cursor-pointer" aria-label="Scroll down to career journey map">
          <span class="font-mono text-[10px] uppercase tracking-widest text-text-muted group-hover:text-brass transition-colors">Scroll Down</span>
          <div class="animate-scroll-pulse p-2 rounded-full border border-line-dark bg-charcoal/80 group-hover:border-brass transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brass)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
          </div>
        </a>
      </div>
    </div>

    <!-- Section Divider -->
    <div class="w-full h-px bg-gradient-to-r from-transparent via-line-dark to-transparent my-6 pointer-events-none"></div>

    <!-- INTERACTIVE CAREER JOURNEY MAP SECTION -->
    <section id="career-journey" class="min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6">
      <div class="border-b border-line pb-2 mb-6">
        <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
          Interactive Career Map
        </h2>
      </div>

      <!-- Horizontal SVG Node Timeline Track -->
      <div class="bg-ink-2 border border-line-dark rounded-2xl p-6 shadow-glass mb-6">
        <div class="relative w-full">
          <!-- Desktop Connecting SVG Line -->
          <svg class="w-full h-8 max-[640px]:hidden" viewBox="0 0 800 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="100" y1="16" x2="700" y2="16" stroke="var(--color-line-dark)" stroke-width="2" stroke-dasharray="4 4" />
            <line x1="100" y1="16" x2="700" y2="16" stroke="var(--color-brass)" stroke-width="2" stroke-opacity="0.3" />
          </svg>

          <!-- Milestone Node Buttons -->
          <div class="grid grid-cols-4 gap-2 max-[640px]:grid-cols-2 max-[480px]:grid-cols-1">
            <button
              v-for="m in CAREER_MILESTONES"
              :key="m.id"
              type="button"
              @click="activeMilestoneId = m.id"
              :class="[
                'flex flex-col items-center p-3 rounded-xl border transition-all duration-200 cursor-pointer text-center relative',
                activeMilestoneId === m.id
                  ? 'bg-brass/10 border-brass shadow-glass-inner text-brass scale-[1.02]'
                  : 'bg-charcoal/50 border-line-dark text-text-muted hover:border-brass/40 hover:text-paper'
              ]"
            >
              <div class="font-mono text-[10px] font-bold uppercase tracking-wider text-teal mb-1">{{ m.period }}</div>
              <div class="font-display font-bold text-xs tracking-tight text-paper truncate max-w-full">{{ m.organization }}</div>
              <div class="font-mono text-[10px] text-text-faint truncate max-w-full mt-0.5">{{ m.role }}</div>
              <span v-if="activeMilestoneId === m.id" class="w-2 h-2 rounded-full bg-brass shadow-[0_0_8px_var(--color-brass)] mt-2"></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Active Milestone Inspector Card -->
      <div v-if="activeMilestone" class="bg-ink-2 border border-brass/30 rounded-2xl p-6 shadow-glass hover:border-brass/60 transition-all duration-300 ease-spring">
        <div class="flex justify-between items-start gap-4 flex-wrap pb-4 border-b border-line">
          <div>
            <div class="font-mono text-[10px] font-semibold tracking-widest text-brass uppercase flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-teal"></span> {{ activeMilestone.period }} · {{ activeMilestone.location }}
            </div>
            <h3 class="font-display font-bold text-xl text-paper tracking-tight mt-1">{{ activeMilestone.role }}</h3>
            <div class="font-mono text-xs text-text-secondary mt-0.5 font-medium">{{ activeMilestone.organization }}</div>
          </div>
          <span class="font-mono text-[10px] font-semibold text-teal">{{ activeMilestone.badge }}</span>
        </div>

        <p class="font-body text-xs text-text-secondary mt-4 leading-relaxed max-w-prose">
          {{ activeMilestone.summary }}
        </p>

        <!-- Impact Metrics Grid -->
        <div class="grid grid-cols-3 gap-3 mt-5 max-[640px]:grid-cols-1">
          <div v-for="(metric, idx) in activeMilestone.impactMetrics" :key="idx" class="bg-charcoal/60 border border-line-dark rounded-xl p-3 shadow-glass-inner">
            <div class="font-display font-bold text-base text-brass tabular-nums">{{ metric.value }}</div>
            <div class="font-mono text-[10px] text-text-muted mt-0.5 uppercase tracking-wider">{{ metric.label }}</div>
          </div>
        </div>

        <!-- Tech Badges & Detail CTA -->
        <div class="flex justify-between items-center flex-wrap gap-4 mt-6 pt-4 border-t border-line">
          <div class="font-mono text-[11px] text-text-secondary">
            Tech: {{ activeMilestone.techStack.join(' · ') }}
          </div>
          <button @click="activeTab = activeMilestone.detailTab" class="font-mono text-xs text-brass hover:text-paper inline-flex items-center gap-1 transition-colors duration-150 font-semibold cursor-pointer">
            Explore full history →
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { CareerMilestone } from '~/types/career';

const activeTab = useState('activeTab', () => 'home');

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const activeMilestoneId = ref<string>('pesta-pora');

const CAREER_MILESTONES: (CareerMilestone & { detailTab: string })[] = [
  {
    id: 'brawijaya',
    period: '2020 — 2025',
    role: 'Bachelor of Information Systems',
    organization: 'Universitas Brawijaya',
    location: 'Malang, ID',
    badge: 'GPA 3.77 / 4.00',
    summary: 'Focused on systems analysis, database architecture, business process modeling, and data visualization. Mentored 270+ students as a Laboratory Teaching Assistant in SQL database modeling.',
    impactMetrics: [
      { label: 'Academic GPA', value: '3.77 / 4.00' },
      { label: 'Thesis Research', value: 'IndoBERT NLP' },
      { label: 'Students Mentored', value: '270+ Scholars' }
    ],
    techStack: ['Systems Analysis', 'Advanced SQL', 'Data Modeling', 'Python NLP'],
    detailRoute: '/education',
    detailTab: 'education'
  },
  {
    id: 'bangkit',
    period: '2023',
    role: 'Machine Learning Cohort',
    organization: 'Bangkit Academy (Google, GoTo, Traveloka)',
    location: 'Remote / Online',
    badge: 'Grade 88.39 / 100',
    summary: 'Intensive 900-hour Machine Learning program. Led computer vision model development for Semar Wayang image classifier achieving high accuracy.',
    impactMetrics: [
      { label: 'Program Score', value: '88.39 / 100' },
      { label: 'Model Accuracy', value: '91% CV Precision' },
      { label: 'Learning Hours', value: '900 Intensive Hours' }
    ],
    techStack: ['TensorFlow', 'Python Core', 'CNN Architectures', 'Deep Learning'],
    detailRoute: '/education',
    detailTab: 'education'
  },
  {
    id: 'ojk',
    period: 'Nov 2025 — May 2026',
    role: 'Business Analyst Intern',
    organization: 'Otoritas Jasa Keuangan (OJK DPPM / DPAM)',
    location: 'Central Jakarta, ID',
    badge: 'Regulatory Research',
    summary: 'Assisted the Capital Market Regulation Directorate in comparative research on global digital financial asset frameworks and supported RPOJK Digital Asset formulation.',
    impactMetrics: [
      { label: 'Policy Impact', value: 'RPOJK Digital Asset' },
      { label: 'Compliance Focus', value: 'Global Assets' },
      { label: 'Research Scope', value: 'Cross-Agency Study' }
    ],
    techStack: ['Digital Financial Assets', 'OJK Regulations', 'Market Analysis', 'Compliance Study'],
    detailRoute: '/experience',
    detailTab: 'experience'
  },
  {
    id: 'pesta-pora',
    period: 'Jun 2026 — Present',
    role: 'Strategic Business Analytic Officer',
    organization: 'PT. Pesta Pora Abadi',
    location: 'Malang, ID',
    badge: 'Corporate BI Leader',
    summary: 'Managing daily MnR data for the Store Operation division and building executive Looker Studio & Power BI reporting dashboards for operational decision making.',
    impactMetrics: [
      { label: 'Live Systems', value: '5+ Deployed Dashboards' },
      { label: 'Ops Coverage', value: 'Store Operation MnR' },
      { label: 'BI Stack', value: 'Looker & Power BI' }
    ],
    techStack: ['Looker Studio', 'Power BI', 'Google Spreadsheets', 'Excel Analytics'],
    detailRoute: '/experience',
    detailTab: 'experience'
  }
];

const activeMilestone = computed(() => {
  return CAREER_MILESTONES.find(m => m.id === activeMilestoneId.value) || CAREER_MILESTONES[3];
});
</script>