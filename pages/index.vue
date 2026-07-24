<template>
  <div class="flex-1 flex flex-col w-full">
    <transition name="page-fade" mode="out-in">
      <HomeView v-if="activeTab === 'home'" key="home" />
      <ExperienceView v-else-if="activeTab === 'experience'" key="experience" />
      <EducationView v-else-if="activeTab === 'education'" key="education" />
      <ProjectsView v-else-if="activeTab === 'projects'" key="projects" />
      <SkillsView v-else-if="activeTab === 'skills'" key="skills" />
      <ContactView v-else-if="activeTab === 'contact'" key="contact" />
      <PrivacyView v-else-if="activeTab === 'privacy'" key="privacy" />
      <TermsView v-else-if="activeTab === 'terms'" key="terms" />
    </transition>
  </div>
</template>

<script setup lang="ts">
const activeTab = useState('activeTab', () => 'home');

// Main title configuration for dynamic page SEO
useHead({
  title: 'Akbar Lucky Basuki — Business Analyst & Data Storyteller'
})
</script>
