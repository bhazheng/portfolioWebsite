<template>
  <div class="py-4 md:py-6">
    <div class="flex items-baseline justify-between border-b border-line pb-2 mb-5">
      <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
        Contact Me
      </h2>
      <div class="font-mono text-[10px] font-semibold tracking-wider text-teal bg-teal/15 px-2.5 py-0.5 rounded-full">03 items</div>
    </div>

    <div class="bg-glass backdrop-blur-md border border-line-dark rounded-2xl p-6 shadow-glass max-[768px]:p-5 w-full">
      <div class="flex flex-col gap-6">
        <h3 class="font-display font-bold text-[clamp(1.3rem,2.8vw,1.8rem)] tracking-tight max-w-[22ch] leading-tight">
          Let's talk about data, policy, or your next dashboard.
        </h3>
        
        <div class="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 mt-2">
          <div class="bg-glass-card/80 border border-line-dark p-4 rounded-lg flex flex-col gap-0.5 hover:-translate-y-1.5 hover:border-brass-soft hover:shadow-[0_8px_30px_rgba(254,128,25,0.12)] active:scale-[0.99] transition-all duration-300 ease-spring">
            <span class="font-mono text-[10px] font-semibold tracking-widest text-text-faint uppercase">Direct Email</span>
            <a href="mailto:akbarlucky@protonmail.com" class="font-mono text-sm font-medium text-paper border-b-2 border-brass pb-0.5 w-fit hover:text-brass-soft hover:border-paper transition-all">
              akbarlucky@protonmail.com
            </a>
          </div>
          <div class="bg-glass-card/80 border border-line-dark p-4 rounded-lg flex flex-col gap-0.5 hover:-translate-y-1.5 hover:border-brass-soft hover:shadow-[0_8px_30px_rgba(254,128,25,0.12)] active:scale-[0.99] transition-all duration-300 ease-spring">
            <span class="font-mono text-[10px] font-semibold tracking-widest text-text-faint uppercase">Phone / WhatsApp</span>
            <a href="tel:+628999655808" class="font-mono text-sm font-medium text-paper border-b-2 border-brass pb-0.5 w-fit hover:text-brass-soft hover:border-paper transition-all">
              +62 899 9655 805
            </a>
          </div>
          <div class="bg-glass-card/80 border border-line-dark p-4 rounded-lg flex flex-col gap-0.5 hover:-translate-y-1.5 hover:border-brass-soft hover:shadow-[0_8px_30px_rgba(254,128,25,0.12)] active:scale-[0.99] transition-all duration-300 ease-spring">
            <span class="font-mono text-[10px] font-semibold tracking-widest text-text-faint uppercase">LinkedIn Network</span>
            <a href="https://www.linkedin.com/in/akbarlucky/" target="_blank" rel="noopener noreferrer" class="font-mono text-sm font-medium text-paper border-b-2 border-brass pb-0.5 w-fit hover:text-brass-soft hover:border-paper transition-all">
              linkedin.com/in/akbarlucky
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contact Me — Akbar Lucky Basuki'
})
</script>
