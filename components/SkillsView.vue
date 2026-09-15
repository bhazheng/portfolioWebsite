<template>
  <div class="py-4 md:py-6">
    <!-- Header -->
    <div class="border-b border-line pb-2 mb-6">
      <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
        Skills &amp; Technology
      </h2>
    </div>

    <!-- Capabilities Categories -->
    <div class="flex flex-col gap-6">
      <section
        v-for="cat in CATEGORIES_WITH_THEME"
        :key="cat.id"
        class="bg-ink-2 border border-line-dark rounded-2xl shadow-glass overflow-hidden"
      >
        <!-- Category header row -->
        <header class="flex items-center px-6 py-4 border-b border-line max-[640px]:px-5 bg-charcoal/30">
          <div class="flex items-center gap-2.5">
            <span class="w-2 h-2 rounded-full" :class="cat.dotClass"></span>
            <h4 class="font-display font-bold text-sm tracking-tight text-paper">{{ cat.title }}</h4>
          </div>
        </header>

        <!-- Skill rows -->
        <ul class="divide-y divide-line">
          <li
            v-for="skill in cat.skills"
            :key="skill.id"
            class="flex items-start justify-between gap-4 px-6 py-3.5 hover:bg-glass-hover transition-colors duration-150 max-[640px]:px-5 max-[640px]:flex-col max-[640px]:gap-1"
          >
            <div class="font-display font-semibold text-xs text-paper">{{ skill.name }}</div>
            <div class="font-mono text-[10px] text-text-secondary max-[640px]:text-left text-right shrink-0">
              <span class="text-text-faint uppercase mr-1 tracking-wider">Applied:</span>
              <span :class="cat.appliedClass">{{ skill.appliedIn }}</span>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { SkillCategory } from '~/types/skills';

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'business',
    title: 'Business & Data Analytics',
    icon: 'ph ph-chart-line',
    skills: [
      { id: 'rca', name: 'Root Cause Analysis (RCA)', appliedIn: 'Ajaib Kripto Thesis & Store Ops' },
      { id: 'market', name: 'Market Research & Analysis', appliedIn: 'OJK Digital Financial Assets RPOJK' },
      { id: 'strategy', name: 'Data Analysis & Strategy', appliedIn: 'PT. Pesta Pora Abadi MnR' },
      { id: 'doc', name: 'Process Documentation', appliedIn: 'System Analysis & Compliance' }
    ]
  },
  {
    id: 'visualization',
    title: 'Data Visualization & BI',
    icon: 'ph ph-projector-screen',
    skills: [
      { id: 'looker', name: 'Looker Studio', appliedIn: 'Store Operation Interactive Dashboards' },
      { id: 'powerbi', name: 'Power BI', appliedIn: 'Operating Document Request System' },
      { id: 'exec', name: 'Executive Dashboard Design', appliedIn: 'Stakeholder Reporting Systems' },
      { id: 'seaborn', name: 'Matplotlib / Seaborn', appliedIn: 'Python Data Storytelling' }
    ]
  },
  {
    id: 'technical',
    title: 'Technical & Database Tools',
    icon: 'ph ph-database',
    skills: [
      { id: 'excel', name: 'Excel & Google Sheets', appliedIn: 'Daily Operational Data Processing' },
      { id: 'sql', name: 'Advanced SQL', appliedIn: 'UB Database Lab & Analytics' },
      { id: 'python', name: 'Python Core', appliedIn: 'Data Pipelines & Machine Learning' },
      { id: 'rdbms', name: 'RDBMS & Data Modeling', appliedIn: 'ERD & System Architecture' }
    ]
  },
  {
    id: 'ml',
    title: 'Machine Learning & AI',
    icon: 'ph ph-brain',
    skills: [
      { id: 'indobert', name: 'IndoBERT & NLP', appliedIn: 'Sentiment Analysis Thesis' },
      { id: 'tf', name: 'TensorFlow & CNN', appliedIn: 'Semar Wayang Classifier (91% Acc)' },
      { id: 'pandas', name: 'Pandas & NumPy', appliedIn: 'Feature Engineering & Cleansing' },
      { id: 'predictive', name: 'Predictive Modeling', appliedIn: 'Bangkit ML Curriculum' }
    ]
  }
];

const CATEGORIES_WITH_THEME = computed(() => [
  {
    ...SKILL_CATEGORIES[0],
    dotClass: 'bg-brass shadow-[0_0_6px_var(--color-brass)]',
    appliedClass: 'text-brass font-medium'
  },
  {
    ...SKILL_CATEGORIES[1],
    dotClass: 'bg-teal shadow-[0_0_6px_var(--color-teal)]',
    appliedClass: 'text-teal font-medium'
  },
  {
    ...SKILL_CATEGORIES[2],
    dotClass: 'bg-paper-2',
    appliedClass: 'text-paper-2 font-medium'
  },
  {
    ...SKILL_CATEGORIES[3],
    dotClass: 'bg-red shadow-[0_0_6px_var(--color-red)]',
    appliedClass: 'text-red font-medium'
  }
]);

useHead({
  title: 'Skills & Technology — Akbar Lucky Basuki'
});
</script>