<template>
  <div class="py-4 md:py-6">
    <div class="border-b border-line pb-2 mb-6">
      <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
        Contact Me
      </h2>
    </div>

    <!-- Direct Unnested Contact Layout -->
    <div class="flex flex-col gap-6">
      <h3 class="font-display font-bold text-[clamp(1.3rem,2.8vw,1.8rem)] tracking-tight max-w-[24ch] leading-tight text-paper">
        Let's talk about data, policy, or your next dashboard.
      </h3>

      <div class="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4 mt-2">
        <!-- Direct Email -->
        <div class="bg-ink-2 border border-line-dark p-5 rounded-2xl flex flex-col justify-between gap-3 hover:border-brass/70 hover:-translate-y-1 transition-all duration-300 ease-spring shadow-glass">
          <div>
            <div class="flex items-center justify-between">
              <span class="font-mono text-[10px] font-semibold tracking-widest text-brass uppercase flex items-center gap-1.5">
                <i class="ph ph-envelope text-xs"></i> Direct Email
              </span>
              <button
                @click="copyText('akbarlucky@protonmail.com', 'email')"
                type="button"
                class="font-mono text-[10px] text-text-muted hover:text-brass transition-colors inline-flex items-center gap-1 cursor-pointer"
                title="Copy email address"
              >
                <i :class="copiedField === 'email' ? 'ph ph-check text-brass' : 'ph ph-copy'"></i>
                <span>{{ copiedField === 'email' ? 'Copied!' : 'Copy' }}</span>
              </button>
            </div>
            <a href="mailto:akbarlucky@protonmail.com" class="font-mono text-sm font-medium text-paper border-b border-brass pb-0.5 w-fit hover:text-brass hover:border-paper transition-all mt-2.5 inline-block">
              akbarlucky@protonmail.com
            </a>
          </div>
          <span class="font-mono text-[10px] text-text-faint">Primary communication channel</span>
        </div>

        <!-- Phone / WhatsApp -->
        <div class="bg-ink-2 border border-line-dark p-5 rounded-2xl flex flex-col justify-between gap-3 hover:border-brass/70 hover:-translate-y-1 transition-all duration-300 ease-spring shadow-glass">
          <div>
            <div class="flex items-center justify-between">
              <span class="font-mono text-[10px] font-semibold tracking-widest text-teal uppercase flex items-center gap-1.5">
                <i class="ph ph-whatsapp-logo text-xs"></i> WhatsApp
              </span>
              <button
                @click="copyText('+6285172455808', 'phone')"
                type="button"
                class="font-mono text-[10px] text-text-muted hover:text-teal transition-colors inline-flex items-center gap-1 cursor-pointer"
                title="Copy phone number"
              >
                <i :class="copiedField === 'phone' ? 'ph ph-check text-teal' : 'ph ph-copy'"></i>
                <span>{{ copiedField === 'phone' ? 'Copied!' : 'Copy' }}</span>
              </button>
            </div>
            <a href="tel:+6285172455808" class="font-mono text-sm font-medium text-paper border-b border-brass pb-0.5 w-fit hover:text-brass hover:border-paper transition-all mt-2.5 inline-block">
              +62 851 7245 5808
            </a>
          </div>
          <span class="font-mono text-[10px] text-text-faint">Direct messaging &amp; quick inquiries</span>
        </div>

        <!-- LinkedIn Network -->
        <div class="bg-ink-2 border border-line-dark p-5 rounded-2xl flex flex-col justify-between gap-3 hover:border-brass/70 hover:-translate-y-1 transition-all duration-300 ease-spring shadow-glass">
          <div>
            <div class="flex items-center justify-between">
              <span class="font-mono text-[10px] font-semibold tracking-widest text-paper-2 uppercase flex items-center gap-1.5">
                <i class="ph ph-linkedin-logo text-xs"></i> LinkedIn
              </span>
              <a
                href="https://www.linkedin.com/in/akbarlucky/"
                target="_blank"
                rel="noopener noreferrer"
                class="font-mono text-[10px] text-text-muted hover:text-brass transition-colors inline-flex items-center gap-1"
              >
                <span>Visit</span>
                <i class="ph ph-arrow-up-right text-[10px]"></i>
              </a>
            </div>
            <a href="https://www.linkedin.com/in/akbarlucky/" target="_blank" rel="noopener noreferrer" class="font-mono text-sm font-medium text-paper border-b border-brass pb-0.5 w-fit hover:text-brass hover:border-paper transition-all mt-2.5 inline-block">
              linkedin.com/in/akbarlucky
            </a>
          </div>
          <span class="font-mono text-[10px] text-text-faint">Professional profile &amp; network</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const copiedField = ref<string | null>(null);

async function copyText(text: string, field: string) {
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      copiedField.value = field;
      setTimeout(() => {
        if (copiedField.value === field) {
          copiedField.value = null;
        }
      }, 2000);
    }
  } catch {
    // clipboard fallback
  }
}

useHead({
  title: 'Contact Me — Akbar Lucky Basuki'
});
</script>