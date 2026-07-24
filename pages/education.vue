<template>
  <div class="py-6">
    <div class="flex items-baseline justify-between border-b border-line pb-2 mb-5">
      <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
        Education & Certifications
      </h2>
      <div class="font-mono text-[10px] font-semibold tracking-wider text-teal bg-teal/15 px-2.5 py-0.5 rounded-full">02 items</div>
    </div>

    <div class="bg-glass backdrop-blur-md border border-line-dark rounded-2xl p-6 shadow-glass max-[768px]:p-4">
      <div class="flex flex-col gap-5 w-full relative pl-6 before:content-[''] before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[1px] before:bg-line-dark">
        <!-- Education entry 1 -->
        <div class="relative bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass-soft hover:-translate-y-0.5 transition-all duration-300 ease-spring">
          <span class="absolute -left-[20px] top-[26px] w-2.5 h-2.5 rounded-full bg-brass-soft ring-4 ring-ink shadow-[0_0_10px_var(--color-brass-soft)]"></span>
          <div class="flex justify-between items-start gap-4 flex-wrap max-[480px]:flex-col max-[480px]:gap-1">
            <div>
              <h3 class="font-display font-bold text-base text-paper tracking-tight">Universitas Brawijaya</h3>
              <div class="font-mono text-[10px] text-brass-soft mt-0.5">Bachelor of Information Systems</div>
            </div>
            <div class="text-right max-[480px]:text-left font-mono">
              <span class="text-[10px] text-teal font-semibold tabular-nums bg-teal/15 px-2.5 py-0.5 rounded-full">2020 — 2025</span>
              <div class="text-[9px] text-text-faint mt-1">Malang, ID</div>
            </div>
          </div>
          <div class="inline-block bg-brass/10 border border-brass/25 text-brass-soft font-mono text-[10px] font-semibold px-2 py-0.5 rounded mt-3 tabular-nums">GPA 3.77 / 4.00</div>
          <p class="font-body text-xs text-text-secondary mt-3 leading-relaxed">Focused on systems analysis, strategic IS planning, business process modeling, and data visualization. Graduated with a high academic score.</p>
          <ul class="font-body text-xs text-text-secondary mt-3 leading-relaxed pl-4 list-disc space-y-1.5">
            <li>Thesis: "Sentiment Analysis of Ajaib Kripto App Reviews Using IndoBERT and Root Cause Analysis."</li>
          </ul>
          <div class="flex gap-1.5 flex-wrap mt-4">
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Business Process</span>
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Systems Analysis</span>
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Enterprise Arch</span>
          </div>
        </div>

        <!-- Education entry 2 -->
        <div class="relative bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass-soft hover:-translate-y-0.5 transition-all duration-300 ease-spring">
          <span class="absolute -left-[20px] top-[26px] w-2.5 h-2.5 rounded-full bg-text-muted ring-4 ring-ink"></span>
          <div class="flex justify-between items-start gap-4 flex-wrap max-[480px]:flex-col max-[480px]:gap-1">
            <div>
              <h3 class="font-display font-bold text-base text-paper tracking-tight">Bangkit Academy</h3>
              <div class="font-mono text-[10px] text-brass-soft mt-0.5">Machine Learning Cohort</div>
            </div>
            <div class="text-right max-[480px]:text-left font-mono">
              <span class="text-[10px] text-text-muted font-medium bg-glass-badge px-2.5 py-0.5 rounded-full">Graduated 2023</span>
              <div class="text-[9px] text-text-faint mt-1">Remote / Online</div>
            </div>
          </div>
          <div class="inline-block bg-brass/10 border border-brass/25 text-brass-soft font-mono text-[10px] font-semibold px-2 py-0.5 rounded mt-3 tabular-nums">Score 88.39 / 100</div>
          <p class="font-body text-xs text-text-secondary mt-3 leading-relaxed">Intensive 900-hour Machine Learning curriculum by Google, GoTo, and Traveloka. Developed model workflows in Python using TensorFlow.</p>
          <div class="flex gap-1.5 flex-wrap mt-4">
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">TensorFlow</span>
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Python Core</span>
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Deep Learning</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Education & Certifications — Akbar Lucky Basuki'
})
</script>
