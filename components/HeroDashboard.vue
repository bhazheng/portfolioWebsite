<template>
  <div class="flex flex-col items-center w-full max-w-[480px]">
    <div
      class="relative w-full bg-ink-2 border border-line-dark rounded-2xl p-3 shadow-avatar overflow-hidden hover:border-brass/40 transition-all duration-300 ease-spring"
      id="panel-hero-dashboard"
    >
      <!-- Aspect Ratio SVG Container (Pure Data Analyst Visualization) -->
      <div class="w-full aspect-[4/3.2] bg-ink rounded-xl flex items-center justify-center border border-line-dark shadow-inner overflow-hidden relative">
        <svg
          class="w-full h-full"
          viewBox="0 0 440 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Analytical data visualization matrix"
        >
          <defs>
            <!-- Trendline Curve Gradient -->
            <!-- Trendline Curve Gradient (Acid Lime to NERV Orange) -->
            <linearGradient id="analystTrend" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="var(--color-teal)" stop-opacity="0.9" />
              <stop offset="65%" stop-color="var(--color-teal)" stop-opacity="1" />
              <stop offset="100%" stop-color="var(--color-brass)" stop-opacity="1" />
            </linearGradient>

            <!-- Gradient for Volume Bars -->
            <linearGradient id="analystBars" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="var(--color-teal)" stop-opacity="0.35" />
              <stop offset="100%" stop-color="var(--color-teal)" stop-opacity="0.05" />
            </linearGradient>

            <!-- Gradient for Area Fill (Acid Lime Glow) -->
            <linearGradient id="analystArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="var(--color-teal)" stop-opacity="0.16" />
              <stop offset="100%" stop-color="var(--color-teal)" stop-opacity="0.01" />
            </linearGradient>

            <!-- Gradient for Forecast Envelope -->
            <linearGradient id="analystFan" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="var(--color-teal)" stop-opacity="0.14" />
              <stop offset="100%" stop-color="var(--color-teal)" stop-opacity="0.02" />
            </linearGradient>
          </defs>

          <!-- Ledger Grid Lines (Horizontal) -->
          <g stroke="var(--color-line)" stroke-width="1">
            <line x1="45" y1="50" x2="405" y2="50" stroke-dasharray="2 2" />
            <line x1="45" y1="105" x2="405" y2="105" stroke-dasharray="2 2" />
            <line x1="45" y1="160" x2="405" y2="160" stroke-dasharray="2 2" />
            <line x1="45" y1="215" x2="405" y2="215" stroke-dasharray="2 2" />
            <line x1="45" y1="270" x2="405" y2="270" stroke-width="1.5" stroke="var(--color-line-dark)" />
          </g>

          <!-- Ledger Grid Lines (Vertical Divisions) -->
          <g stroke="var(--color-line)" stroke-width="1">
            <line x1="45" y1="35" x2="45" y2="270" stroke-width="1.5" stroke="var(--color-line-dark)" />
            <line x1="115" y1="35" x2="115" y2="270" stroke-dasharray="2 2" />
            <line x1="185" y1="35" x2="185" y2="270" stroke-dasharray="2 2" />
            <line x1="255" y1="35" x2="255" y2="270" stroke-dasharray="2 2" />
            <line x1="325" y1="35" x2="325" y2="270" stroke-dasharray="3 3" stroke="var(--color-teal)" stroke-opacity="0.3" />
            <line x1="395" y1="35" x2="395" y2="270" stroke-dasharray="2 2" />
          </g>

          <!-- Distribution Baseline Bars -->
          <g class="bar-distribution">
            <rect x="70" y="225" width="10" height="45" rx="1.5" fill="url(#analystBars)" />
            <rect x="105" y="200" width="10" height="70" rx="1.5" fill="url(#analystBars)" />
            <rect x="140" y="185" width="10" height="85" rx="1.5" fill="url(#analystBars)" />
            <rect x="175" y="165" width="10" height="105" rx="1.5" fill="url(#analystBars)" />
            <rect x="210" y="175" width="10" height="95" rx="1.5" fill="url(#analystBars)" />
            <rect x="245" y="150" width="10" height="120" rx="1.5" fill="url(#analystBars)" />
            <rect x="280" y="135" width="10" height="135" rx="1.5" fill="url(#analystBars)" />
            <rect x="315" y="115" width="10" height="155" rx="1.5" fill="url(#analystBars)" />
            <rect x="350" y="95" width="10" height="175" rx="1.5" fill="url(#analystBars)" />
            <rect x="380" y="80" width="10" height="190" rx="1.5" fill="url(#analystBars)" />
          </g>

          <!-- Forecast Confidence Area Fan -->
          <path d="M 280 120 L 395 50 L 395 170 Z" fill="url(#analystFan)" />

          <!-- Trend Area Fill -->
          <path
            d="M 50 270 L 50 230 Q 115 195, 185 160 T 280 120 L 395 65 L 395 270 Z"
            fill="url(#analystArea)"
          />

          <!-- Observed Trendline Curve -->
          <path
            d="M 50 230 Q 115 195, 185 160 T 280 120"
            fill="none"
            stroke="url(#analystTrend)"
            stroke-width="2.5"
            stroke-linecap="round"
          />

          <!-- Forecast Projection Path (Dashed) -->
          <path
            d="M 280 120 Q 335 90, 395 65"
            fill="none"
            stroke="var(--color-brass-soft)"
            stroke-width="2"
            stroke-dasharray="5 3"
            stroke-linecap="round"
          />

          <!-- Inflection Data Points (Circles with soft pulse rings) -->
          <g class="inflection-nodes">
            <!-- Node 1 -->
            <circle cx="50" cy="230" r="8" fill="var(--color-teal)" opacity="0.15" />
            <circle cx="50" cy="230" r="3" fill="var(--color-teal)" stroke="var(--color-ink)" stroke-width="1.5" />

            <!-- Node 2 -->
            <circle cx="115" cy="195" r="8" fill="var(--color-teal)" opacity="0.15" />
            <circle cx="115" cy="195" r="3" fill="var(--color-teal)" stroke="var(--color-ink)" stroke-width="1.5" />

            <!-- Node 3 -->
            <circle cx="185" cy="160" r="8" fill="var(--color-brass)" opacity="0.15" />
            <circle cx="185" cy="160" r="3" fill="var(--color-brass)" stroke="var(--color-ink)" stroke-width="1.5" />

            <!-- Node 4 (Key Peak Inflection) -->
            <circle cx="280" cy="120" r="11" fill="var(--color-brass)" opacity="0.22" class="pulse-ring" />
            <circle cx="280" cy="120" r="4" fill="var(--color-brass)" stroke="var(--color-ink)" stroke-width="1.5" />

            <!-- Node 5 (Target Point) -->
            <circle cx="395" cy="65" r="9" fill="var(--color-brass-soft)" opacity="0.2" />
            <circle cx="395" cy="65" r="3.5" fill="var(--color-brass-soft)" stroke="var(--color-ink)" stroke-width="1.5" />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Pure, static, zero-runtime data analyst proof visualization
</script>