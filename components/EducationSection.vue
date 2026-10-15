<template>
  <section id="education" class="rei-section page-width">
    <div class="section-heading" v-reveal>
      <h2>Education<span class="heading-dot">.</span></h2>
      <p>Academic foundations and certifications that shaped my analytical practice.</p>
    </div>

    <div class="education-timeline">
      <div
        v-for="(entry, index) in EDUCATION"
        :key="entry.id"
        class="edu-entry"
        v-reveal="index * 150"
      >
        <!-- Timeline rail + institution avatar -->
        <div class="edu-rail">
          <div class="edu-avatar" :class="{ accent: index === 0 }">
            {{ entry.institution.charAt(0) }}
          </div>
        </div>

        <!-- Card body (M3 filled card — tonal elevation, no outline) -->
        <div class="edu-card">
          <!-- Vector accessory: decorative corner shape -->
          <svg
            class="card-accessory"
            :class="`acc-${index % 3}`"
            viewBox="0 0 120 120"
            fill="none"
            aria-hidden="true"
          >
            <path d="M20 100 L20 40 Q20 20 40 20 L100 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" opacity="0.3" />
            <path d="M40 80 L40 56 Q40 46 50 46 L74 46" stroke="currentColor" stroke-width="1" stroke-linecap="round" opacity="0.2" />
            <circle cx="86" cy="46" r="4" fill="currentColor" opacity="0.3" />
          </svg>

          <div class="edu-card-head">
            <div class="edu-head-text">
              <div class="edu-period font-mono">{{ entry.period }} · {{ entry.location }}</div>
              <h4>{{ entry.institution }}</h4>
              <p class="edu-program">{{ entry.program }}</p>
            </div>
            <div class="edu-credential font-mono">
              {{ entry.credential }}
            </div>
          </div>

          <p class="edu-desc">{{ entry.description }}</p>

          <div v-if="entry.thesis" class="edu-thesis">
            <v-icon icon="i-material-symbols:menu-book" size="18" class="thesis-icon" />
            <span>{{ entry.thesis }}</span>
          </div>

          <div class="exp-tech-chips">
            <span v-for="tech in entry.tech" :key="tech" class="font-mono">{{ tech }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface EducationEntry {
  id: string
  institution: string
  program: string
  period: string
  location: string
  credential: string
  description: string
  thesis?: string
  tech: string[]
}

const EDUCATION: EducationEntry[] = [
  {
    id: 'brawijaya',
    institution: 'Universitas Brawijaya',
    program: 'Bachelor of Information Systems',
    period: '2020 — 2025',
    location: 'Malang, ID',
    credential: 'GPA 3.77 / 4.00',
    description: 'Focused on systems analysis, strategic IS planning, business process modeling, and data visualization. Graduated with a high academic score.',
    thesis: 'Thesis: "Sentiment Analysis of Ajaib Kripto App Reviews Using IndoBERT and Root Cause Analysis."',
    tech: ['Business Process', 'Systems Analysis', 'Enterprise Arch']
  },
  {
    id: 'bangkit',
    institution: 'Bangkit Academy',
    program: 'Machine Learning Cohort',
    period: 'Graduated 2023',
    location: 'Remote / Online',
    credential: 'Score 88.39 / 100',
    description: 'Intensive 900-hour Machine Learning curriculum by Google, GoTo, and Traveloka. Developed model workflows in Python using TensorFlow.',
    tech: ['TensorFlow', 'Python Core', 'Deep Learning']
  }
]
</script>
