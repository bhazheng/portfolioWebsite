<template>
  <div class="py-4 md:py-6">
    <div class="border-b border-line pb-2 mb-6">
      <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
        Education &amp; Certifications
      </h2>
    </div>

    <!-- Direct Unnested Education Timeline -->
    <div class="flex flex-col gap-5 w-full relative pl-6 before:content-[''] before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[1px] before:bg-line-dark">
      <!-- Education entry 1 -->
      <div class="relative bg-ink-2 border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass/70 hover:-translate-y-1 transition-all duration-300 ease-spring">
        <span class="absolute -left-[20px] top-[26px] w-2.5 h-2.5 rounded-full bg-brass ring-4 ring-ink-2/60 shadow-[0_0_10px_var(--color-brass)]"></span>
        <div class="flex justify-between items-start gap-4 flex-wrap max-[480px]:flex-col max-[480px]:gap-1">
          <div>
            <h3 class="font-display font-bold text-base text-paper tracking-tight">Universitas Brawijaya</h3>
            <div class="font-mono text-[10px] text-brass mt-0.5">Bachelor of Information Systems</div>
          </div>
          <div class="text-right max-[480px]:text-left font-mono">
            <span class="text-[10px] text-teal font-semibold tabular-nums">2020 — 2025</span>
            <div class="text-[10px] text-text-faint mt-1">Malang, ID</div>
          </div>
        </div>
        <div class="font-mono text-xs font-bold text-brass mt-2 tabular-nums">GPA 3.77 / 4.00</div>
        <p class="font-body text-xs text-text-secondary mt-3 leading-relaxed">Focused on systems analysis, strategic IS planning, business process modeling, and data visualization. Graduated with a high academic score.</p>
        <ul class="font-body text-xs text-text-secondary mt-3 leading-relaxed pl-4 list-disc space-y-1.5">
          <li>Thesis: "Sentiment Analysis of Ajaib Kripto App Reviews Using IndoBERT and Root Cause Analysis."</li>
        </ul>
        <div class="font-mono text-[11px] text-text-secondary mt-3.5">Tech: Business Process · Systems Analysis · Enterprise Arch</div>
      </div>

      <!-- Education entry 2 -->
      <div class="relative bg-ink-2 border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass/70 hover:-translate-y-1 transition-all duration-300 ease-spring">
        <span class="absolute -left-[20px] top-[26px] w-2.5 h-2.5 rounded-full bg-red ring-4 ring-ink-2/60 shadow-[0_0_8px_var(--color-red)]"></span>
        <div class="flex justify-between items-start gap-4 flex-wrap max-[480px]:flex-col max-[480px]:gap-1">
          <div>
            <h3 class="font-display font-bold text-base text-paper tracking-tight">Bangkit Academy</h3>
            <div class="font-mono text-[10px] text-brass mt-0.5">Machine Learning Cohort</div>
          </div>
          <div class="text-right max-[480px]:text-left font-mono">
            <span class="text-[10px] text-text-muted font-medium tabular-nums">Graduated 2023</span>
            <div class="text-[10px] text-text-faint mt-1">Remote / Online</div>
          </div>
        </div>
        <div class="font-mono text-xs font-bold text-red mt-2 tabular-nums">Score 88.39 / 100</div>
        <p class="font-body text-xs text-text-secondary mt-3 leading-relaxed">Intensive 900-hour Machine Learning curriculum by Google, GoTo, and Traveloka. Developed model workflows in Python using TensorFlow.</p>
        <div class="font-mono text-[11px] text-text-secondary mt-3.5">Tech: TensorFlow · Python Core · Deep Learning</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Education & Certifications — Akbar Lucky Basuki'
})
</script>