<template>
  <section id="experience" class="rei-section page-width">
    <div class="experience-grid">
      <!-- Left: intro + stamp -->
      <div class="experience-intro">
        <div class="section-heading" v-reveal>
          <h2>Experience<span class="heading-dot">.</span></h2>
          <p>My work in analytics, compliance research, and academic mentoring.</p>
        </div>
        <div v-reveal="200">
          <div class="experience-stamp">
            <v-icon icon="i-material-symbols:workspace-premium" size="28" />
            <span>Security &amp; software, data-driven.</span>
          </div>
        </div>
      </div>

      <!-- Right: timeline list -->
      <div class="experience-timeline">
        <div
          v-for="(entry, i) in EXPERIENCE"
          :key="entry.id"
          class="exp-entry"
          :class="{ current: entry.current }"
          v-reveal
        >
          <!-- Timeline rail + company avatar -->
          <div class="exp-rail">
            <div class="exp-avatar" :class="{ ongoing: entry.current }">
              {{ entry.organization.charAt(0) }}
            </div>
          </div>

          <!-- Card body (M3 filled card — tonal elevation, no outline) -->
          <div class="exp-card">
            <!-- Vector accessory: decorative corner shape -->
            <svg
              class="card-accessory"
              :class="`acc-${i % 3}`"
              viewBox="0 0 120 120"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="60" cy="60" r="48" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 8" opacity="0.35" />
              <circle cx="60" cy="60" r="28" stroke="currentColor" stroke-width="1" opacity="0.2" />
              <circle cx="60" cy="60" r="6" fill="currentColor" opacity="0.25" />
            </svg>

            <div class="exp-card-head">
              <div class="exp-head-text">
                <h3>{{ entry.organization }}</h3>
                <div class="exp-period font-mono">
                  {{ entry.period }} · {{ entry.location }}
                </div>
              </div>
              <span class="employment-type font-mono">{{ entry.type }}</span>
            </div>

            <div class="exp-role-row">
              <h4>{{ entry.role }}</h4>
              <span v-if="entry.current" class="current-badge font-mono">Current</span>
            </div>

            <ul class="experience-bullets">
              <li v-for="(bullet, bi) in entry.bullets" :key="bi">{{ bullet }}</li>
            </ul>

            <div class="experience-metrics">
              <div
                v-for="metric in entry.metrics"
                :key="metric.label"
                class="metric-tile"
              >
                <div class="metric-value font-mono">{{ metric.value }}</div>
                <div class="metric-label">{{ metric.label }}</div>
              </div>
            </div>

            <div class="exp-tech-chips">
              <span v-for="tech in entry.tech" :key="tech" class="font-mono">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ImpactMetric } from '~/types/career'

interface ExperienceEntry {
  id: string
  role: string
  organization: string
  period: string
  location: string
  current: boolean
  type: string
  bullets: string[]
  metrics: ImpactMetric[]
  tech: string[]
}

const EXPERIENCE: ExperienceEntry[] = [
  {
    id: 'pesta-pora',
    role: 'Strategic Business Analytic Officer',
    organization: 'PT. Pesta Pora Abadi',
    period: 'Jun 2026 — Present',
    location: 'Malang, East Java, ID',
    current: true,
    type: 'Full-time',
    bullets: [
      'Manage and process daily Maintenance & Repair (MnR) data for the Store Operation division using Microsoft Excel and Google Spreadsheets to support operational efficiency analysis.',
      'Design, develop, and maintain the interactive "Operating Document Request" dashboard in Looker Studio and Power BI, providing document status visibility and process bottlenecks to stakeholders.'
    ],
    metrics: [
      { value: '5+ Dashboards', label: 'Live Systems' },
      { value: 'Store Operation MnR', label: 'Ops Coverage' },
      { value: 'Looker & Power BI', label: 'BI Stack' }
    ],
    tech: ['Looker Studio', 'Power BI', 'Google Spreadsheets', 'Excel Analytics']
  },
  {
    id: 'ojk',
    role: 'Business Analyst Intern',
    organization: 'Otoritas Jasa Keuangan (OJK) — DPPM / DPAM',
    period: 'Nov 2025 — May 2026',
    location: 'Central Jakarta, ID',
    current: false,
    type: 'Internship',
    bullets: [
      'Assisted the Capital Market Regulation and Development Directorate (DPPM) in comparative research regarding emerging digital financial assets and global regulatory frameworks.',
      'Supported the formulation of RPOJK on Digital Assets through comparative studies of international standards and global market trends.',
      'Supported the review of Capital Market Activity regulation revisions through cross-agency compliance analysis and standardization of reporting exemptions.'
    ],
    metrics: [
      { value: 'RPOJK Digital Asset', label: 'Policy Impact' },
      { value: 'Global Assets', label: 'Compliance Focus' },
      { value: 'Cross-Agency Study', label: 'Research Scope' }
    ],
    tech: ['Digital Financial Assets', 'OJK Regulations', 'Market Analysis', 'Compliance Study']
  },
  {
    id: 'lab-assistant',
    role: 'Laboratory Teaching Assistant',
    organization: 'Faculty of Computer Science, Universitas Brawijaya',
    period: 'Sep 2021 — Jul 2023',
    location: 'Malang, East Java, ID',
    current: false,
    type: 'Academic',
    bullets: [
      'Translated complex programming and database architecture concepts into easily digestible learning materials for over 270 students.',
      'Facilitated workshops on data modeling, logical system design, ERD creation, and SQL querying.',
      "Evaluated students' work and provided constructive feedback on problem-solving approaches and programming logic."
    ],
    metrics: [
      { value: '270+ Scholars', label: 'Students Mentored' },
      { value: 'SQL & Database', label: 'Domain Scope' },
      { value: '4 Semesters', label: 'Workshop Cohort' }
    ],
    tech: ['Advanced SQL', 'Data Modeling', 'ERD Architecture', 'Technical Mentoring']
  }
]
</script>
