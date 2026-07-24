<template>
  <footer class="mt-auto pt-6 bg-glass backdrop-blur-md border border-line-dark rounded-2xl p-6 flex flex-col gap-6 shadow-glass max-[768px]:p-5 snap-start snap-always">
    <div class="grid grid-cols-[1.5fr_1fr] gap-12 pb-6 border-b border-line max-[768px]:grid-cols-1 max-[768px]:gap-8">
      
      <!-- Left Section: Name and Bio -->
      <div class="flex flex-col gap-3">
        <NuxtLink to="/" class="font-display font-bold text-lg tracking-tight text-paper">
          Akbar Lucky <span class="text-brass-soft">Basuki</span>
        </NuxtLink>
        <p class="font-body text-xs text-text-secondary max-w-[45ch] leading-relaxed">
          Business Analyst & Data Storyteller. Translating raw data into regulatory-grade decisions with a taste for detail.
        </p>
      </div>

      <!-- Right Section: Columns -->
      <div class="flex gap-16 max-[480px]:gap-8 justify-end max-[768px]:justify-start">
        <!-- Pages Column -->
        <div class="flex flex-col gap-2.5">
          <span class="font-mono text-[9px] font-semibold tracking-wider text-text-faint uppercase">Pages</span>
          <nav class="flex flex-col gap-1.5">
            <NuxtLink to="/" class="font-body text-xs text-text-secondary hover:text-paper transition-colors duration-150">Home</NuxtLink>
            <NuxtLink to="/experience" class="font-body text-xs text-text-secondary hover:text-paper transition-colors duration-150">Experience</NuxtLink>
            <NuxtLink to="/education" class="font-body text-xs text-text-secondary hover:text-paper transition-colors duration-150">Education</NuxtLink>
            <NuxtLink to="/projects" class="font-body text-xs text-text-secondary hover:text-paper transition-colors duration-150">Projects</NuxtLink>
            <NuxtLink to="/skills" class="font-body text-xs text-text-secondary hover:text-paper transition-colors duration-150">Skills</NuxtLink>
            <NuxtLink to="/contact" class="font-body text-xs text-text-secondary hover:text-paper transition-colors duration-150">Contact</NuxtLink>
          </nav>
        </div>

        <!-- Resources Column -->
        <div class="flex flex-col gap-2.5">
          <span class="font-mono text-[9px] font-semibold tracking-wider text-text-faint uppercase">Resources</span>
          <nav class="flex flex-col gap-1.5">
            <a href="https://github.com/akbarlucky" target="_blank" rel="noopener noreferrer" class="font-body text-xs text-text-secondary hover:text-paper transition-colors duration-150">Source Code</a>
            <NuxtLink to="/privacy" class="font-body text-xs text-text-secondary hover:text-paper transition-colors duration-150">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms" class="font-body text-xs text-text-secondary hover:text-paper transition-colors duration-150">Terms & Conditions</NuxtLink>
          </nav>
        </div>
      </div>

    </div>

    <!-- Bottom Bar: Copyright and Social Icons -->
    <div class="flex justify-between items-center flex-wrap gap-4 font-mono text-[10px] text-text-muted">
      <div>© Akbar Lucky Basuki 2026 • Malang, East Java, ID</div>
      <div class="flex items-center gap-4 text-text-muted">
        <a href="mailto:akbarlucky@protonmail.com" aria-label="Email Address" class="hover:text-brass-soft transition-colors duration-150">
          <i class="ph ph-envelope text-lg"></i>
        </a>
        <a href="https://github.com/akbarlucky" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" class="hover:text-brass-soft transition-colors duration-150">
          <i class="ph ph-github-logo text-lg"></i>
        </a>
        <a href="https://www.linkedin.com/in/akbarlucky/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" class="hover:text-brass-soft transition-colors duration-150">
          <i class="ph ph-linkedin-logo text-lg"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>
