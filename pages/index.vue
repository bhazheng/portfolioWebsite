<template>
  <div class="flex-1 flex flex-col w-full">
    <HomeView v-if="activeTab === 'home'" />
    <ExperienceView v-else-if="activeTab === 'experience'" />
    <EducationView v-else-if="activeTab === 'education'" />
    <ProjectsView v-else-if="activeTab === 'projects'" />
    <SkillsView v-else-if="activeTab === 'skills'" />
    <ContactView v-else-if="activeTab === 'contact'" />
    <PrivacyView v-else-if="activeTab === 'privacy'" />
    <TermsView v-else-if="activeTab === 'terms'" />
  </div>
</template>

<script setup lang="ts">
const activeTab = useState('activeTab', () => 'home');

// Main title configuration for dynamic page SEO
useHead({
  title: 'Akbar Lucky Basuki — Business Analyst & Data Storyteller'
})
</script>
