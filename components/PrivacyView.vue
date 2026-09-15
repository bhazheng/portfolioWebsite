<template>
  <div class="py-6">
    <button
      @click="activeTab = 'home'"
      class="font-mono text-xs text-brass hover:text-paper inline-flex items-center gap-1.5 cursor-pointer transition-colors mb-6"
    >
      ← Return to Portfolio
    </button>

    <div class="border-b border-line pb-2 mb-6">
      <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
        Privacy Policy
      </h2>
    </div>

    <div class="bg-ink-2 border border-line-dark rounded-2xl p-6 shadow-glass max-[768px]:p-5 space-y-4">
      <p class="font-body text-xs text-text-secondary leading-relaxed">
        Your privacy is important. This portfolio website does not collect personal data from visitors unless voluntarily provided via email or direct contact channels.
      </p>
      <p class="font-body text-xs text-text-secondary leading-relaxed">
        For any inquiries, contact <a href="mailto:akbarlucky@protonmail.com" class="font-mono text-brass hover:underline">akbarlucky@protonmail.com</a>.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeTab = useState('activeTab', () => 'home');

useHead({
  title: 'Privacy Policy — Akbar Lucky Basuki'
});
</script>