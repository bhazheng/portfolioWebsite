<template>
  <section id="skills" class="rei-section page-width">
    <div class="section-heading" v-reveal>
      <h2>Skills<span class="heading-dot">.</span></h2>
      <p>The capabilities I use to turn raw data into decisions leaders act on.</p>
    </div>

    <div class="skills-grid">
      <div
        v-for="(cat, index) in SKILL_CATEGORIES"
        :key="cat.id"
        class="skill-card"
        v-reveal="index * 100"
      >
        <svg class="card-accessory" :class="`acc-${index % 3}`" viewBox="0 0 100 100" fill="none" aria-hidden="true">
          <rect x="20" y="20" width="60" height="60" rx="16" stroke="currentColor" stroke-width="1.5" opacity="0.25" />
          <rect x="35" y="35" width="30" height="30" rx="8" stroke="currentColor" stroke-width="1" opacity="0.2" />
          <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.2" />
        </svg>
        <div class="skill-card-head">
          <div class="skill-card-icon">
            <v-icon :icon="cat.icon" :color="cat.color" size="24" />
          </div>
          <h3>{{ cat.title }}</h3>
        </div>
        <ul class="skill-list">
          <li v-for="skill in cat.skills" :key="skill.id">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-applied font-mono">{{ skill.appliedIn }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SkillCategory } from '~/types/skills'

interface SkillCategoryWithColor extends SkillCategory {
  color: string
}

const SKILL_CATEGORIES: SkillCategoryWithColor[] = [
  {
    id: 'business',
    title: 'Business & Data Analytics',
    icon: 'i-material-symbols:monitoring',
    color: 'primary',
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
    icon: 'i-material-symbols:dashboard',
    color: 'tertiary',
    skills: [
      { id: 'looker', name: 'Looker Studio', appliedIn: 'Store Operation Dashboards' },
      { id: 'powerbi', name: 'Power BI', appliedIn: 'Operating Document Request System' },
      { id: 'exec', name: 'Executive Dashboard Design', appliedIn: 'Stakeholder Reporting' },
      { id: 'seaborn', name: 'Matplotlib / Seaborn', appliedIn: 'Python Data Storytelling' }
    ]
  },
  {
    id: 'technical',
    title: 'Technical & Database Tools',
    icon: 'i-material-symbols:database',
    color: 'secondary',
    skills: [
      { id: 'excel', name: 'Excel & Google Sheets', appliedIn: 'Daily Operational Data' },
      { id: 'sql', name: 'Advanced SQL', appliedIn: 'UB Database Lab & Analytics' },
      { id: 'python', name: 'Python Core', appliedIn: 'Data Pipelines & ML' },
      { id: 'rdbms', name: 'RDBMS & Data Modeling', appliedIn: 'ERD & System Architecture' }
    ]
  },
  {
    id: 'ml',
    title: 'Machine Learning & AI',
    icon: 'i-material-symbols:neurology',
    color: 'eva-orange',
    skills: [
      { id: 'indobert', name: 'IndoBERT & NLP', appliedIn: 'Sentiment Analysis Thesis' },
      { id: 'tf', name: 'TensorFlow & CNN', appliedIn: 'Semar Wayang Classifier (89.2%)' },
      { id: 'pandas', name: 'Pandas & NumPy', appliedIn: 'Feature Engineering' },
      { id: 'predictive', name: 'Predictive Modeling', appliedIn: 'Bangkit ML Curriculum' }
    ]
  }
]
</script>
