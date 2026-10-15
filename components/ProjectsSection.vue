<template>
  <section id="projects" class="rei-section page-width">
    <div class="section-heading" v-reveal>
      <h2>Projects<span class="heading-dot">.</span></h2>
      <p>Some of my work in analytics, machine learning, and data storytelling.</p>
    </div>

    <div class="project-grid">
      <a
        v-for="(project, index) in PROJECTS"
        :key="project.id"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="project-card"
        :class="project.artClass"
        v-reveal="index * 150"
      >
        <div class="project-art">
          <span class="project-category font-mono">{{ project.category }}</span>
          <v-icon class="project-glyph" :icon="project.glyph" size="96" />
          <span class="project-number font-mono">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="project-arrow">
            <v-icon icon="i-material-symbols:arrow-outward" size="20" />
          </span>
        </div>
        <div class="project-content">
          <svg class="card-accessory acc-0" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <path d="M50 5 L95 50 L50 95 L5 50 Z" stroke="currentColor" stroke-width="1.5" opacity="0.25" />
            <circle cx="50" cy="50" r="15" stroke="currentColor" stroke-width="1" opacity="0.2" />
            <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.2" />
          </svg>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tags">
            <span v-for="t in project.tech" :key="t" class="font-mono">{{ t }}</span>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
interface ProjectEntry {
  id: string
  category: string
  title: string
  description: string
  tech: string[]
  glyph: string
  artClass: string
  link: string
}

const PROJECTS: ProjectEntry[] = [
  {
    id: 'indobert',
    category: 'Thesis // NLP & Analytics',
    title: 'Sentiment Analysis for Product Improvement (IndoBERT)',
    description: 'Root Cause Analysis applied to large-scale qualitative user reviews in the Ajaib Kripto app — from problem formulation to concrete product improvement recommendations.',
    tech: ['IndoBERT', 'Python NLP', 'RCA'],
    glyph: 'i-material-symbols:neurology',
    artClass: 'art-primary',
    link: 'https://github.com/bhazheng'
  },
  {
    id: 'semar',
    category: 'Capstone // Computer Vision',
    title: 'Semar — Wayang Image Classification',
    description: 'Led a cross-disciplinary team to build an image classifier preserving Indonesian cultural heritage, covering model design through prediction system integration.',
    tech: ['CNN Model', 'Cloud API', 'TensorFlow'],
    glyph: 'i-material-symbols:image-search',
    artClass: 'art-eva-orange',
    link: 'https://github.com/bhazheng'
  }
]
</script>
