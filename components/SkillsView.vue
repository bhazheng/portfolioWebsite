<template>
  <div class="py-4 md:py-6">
    <!-- Header -->
    <div class="flex items-baseline justify-between border-b border-line pb-2 mb-6">
      <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
        Skills &amp; Technology
      </h2>
    </div>

    <!-- Capabilities -->
    <div class="flex flex-col gap-6">
      <section
        v-for="cat in SKILL_CATEGORIES"
        :key="cat.id"
        class="bg-glass border border-line-dark rounded-2xl shadow-glass overflow-hidden"
      >
        <!-- Category header row -->
        <header class="flex items-baseline justify-between px-6 py-4 border-b border-line max-[640px]:px-5">
          <h4 class="font-display font-bold text-sm tracking-tight text-paper">{{ cat.title }}</h4>
          <span class="font-mono text-[10px] uppercase tracking-widest text-text-faint">{{ cat.skills.length }} entries</span>
        </header>

        <!-- Skill rows -->
        <ul class="divide-y divide-line">
          <li
            v-for="skill in cat.skills"
            :key="skill.id"
            class="flex items-start gap-3 px-6 py-3.5 hover:bg-glass-hover transition-colors duration-150 max-[640px]:px-5"
          >
            <div class="flex-1">
              <div class="font-display font-semibold text-xs text-paper">{{ skill.name }}</div>
              <div class="font-mono text-[10px] text-text-muted mt-0.5">{{ skill.appliedIn }}</div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
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
</script>
