<template>
  <div class="py-4 md:py-6">
    <div class="border-b border-line pb-2 mb-6">
      <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
        Featured Projects
      </h2>
    </div>

    <!-- Direct Unnested 2-Column Grid -->
    <div class="grid grid-cols-2 gap-5 max-[768px]:grid-cols-1 w-full">
      <!-- Project 1: IndoBERT Thesis -->
      <div class="bg-ink-2 border border-line-dark rounded-2xl p-6 shadow-glass flex flex-col justify-between hover:border-brass/70 hover:-translate-y-1 transition-all duration-300 ease-spring">
        <div>
          <div class="font-mono text-[10px] font-semibold tracking-wider text-red uppercase mb-1">Thesis // NLP &amp; Analytics</div>
          <h3 class="font-display font-bold text-base tracking-tight leading-snug text-paper">Sentiment Analysis for Product Improvement (IndoBERT)</h3>
          <p class="font-body text-xs text-text-secondary leading-relaxed max-w-prose mt-2.5">
            Applying Root Cause Analysis to large-scale qualitative user reviews in the Ajaib Kripto app — from problem formulation to concrete product improvement recommendations.
          </p>
          <div class="font-mono text-[11px] text-text-secondary mt-4">Tech: IndoBERT · Python NLP</div>
        </div>
        <div class="mt-5 font-mono text-xs text-text-secondary border-t border-dashed border-line pt-3 tabular-nums">
          Applied <span class="font-bold text-brass">RCA</span> framework to real feedback
        </div>
      </div>

      <!-- Project 2: Semar Wayang -->
      <div class="bg-ink-2 border border-line-dark rounded-2xl p-6 shadow-glass flex flex-col justify-between hover:border-brass/70 hover:-translate-y-1 transition-all duration-300 ease-spring">
        <div>
          <div class="font-mono text-[10px] font-semibold tracking-wider text-teal uppercase mb-1">Capstone // Computer Vision</div>
          <h3 class="font-display font-bold text-base tracking-tight leading-snug text-paper">Semar — Wayang Image Classification</h3>
          <p class="font-body text-xs text-text-secondary leading-relaxed max-w-prose mt-2.5">
            Led a cross-disciplinary team collaboration to build an image classifier to preserve Indonesian cultural heritage, covering model design through prediction system integration.
          </p>
          <div class="font-mono text-[11px] text-text-secondary mt-4">Tech: CNN Model · Cloud API</div>
        </div>
        <div class="mt-5 font-mono text-xs text-text-secondary border-t border-dashed border-line pt-3 tabular-nums">
          Successfully achieved <span class="font-bold text-teal">91%</span> accuracy
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Featured Projects — Akbar Lucky Basuki'
})
</script>