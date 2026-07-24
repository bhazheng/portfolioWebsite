<template>
  <div class="flex flex-col items-center w-full max-w-[480px]">
    <!-- Main Graphic Card Container -->
    <div class="relative w-full bg-glass border border-brass/30 rounded-2xl p-2.5 shadow-avatar overflow-hidden hover:border-brass-soft transition-all duration-300 ease-spring" id="panel-hero-dashboard">
      <!-- Floating Glassmorphism Tooltip -->
      <div
        v-show="tooltip.visible"
        :style="{ left: tooltip.x + 'px', top: tooltip.y + 'px' }"
        class="absolute z-20 pointer-events-none transition-opacity duration-150 ease-out bg-glass-card border border-brass/30 backdrop-blur-md rounded-xl p-2.5 shadow-glass text-xs min-w-[140px]"
      >
        <div class="font-mono text-[9px] uppercase tracking-wider text-text-faint">{{ tooltip.period }}</div>
        <div class="font-display font-extrabold text-sm text-brass-soft mt-0.5">{{ tooltip.val }}</div>
        <div class="font-mono text-[8px] text-teal mt-1 inline-flex items-center gap-1">
          <span class="w-1 h-1 rounded-full bg-teal"></span> {{ currentDataset.badge }}
        </div>
      </div>

      <!-- Aspect Square SVG -->
      <div class="w-full aspect-square bg-gradient-to-br from-ink-2 to-ink rounded-xl flex items-center justify-center border border-line-dark shadow-inner overflow-hidden relative">
        <svg class="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="var(--color-teal)" stop-opacity="0.2" />
              <stop offset="50%" stop-color="var(--color-brass-soft)" stop-opacity="0.8" />
              <stop offset="100%" stop-color="var(--color-teal)" stop-opacity="0.2" />
            </linearGradient>
            <linearGradient id="forecastFanGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stop-color="var(--color-teal)" stop-opacity="0.15" />
              <stop offset="100%" stop-color="var(--color-teal)" stop-opacity="0.01" />
            </linearGradient>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="var(--color-brass-soft)" stop-opacity="0.75" />
              <stop offset="100%" stop-color="var(--color-brass)" stop-opacity="0.15" />
            </linearGradient>
            <linearGradient id="barForecastGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="var(--color-brass-soft)" stop-opacity="0.3" />
              <stop offset="100%" stop-color="var(--color-brass)" stop-opacity="0.05" />
            </linearGradient>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="var(--color-teal)" stop-opacity="0.15" />
              <stop offset="100%" stop-color="var(--color-ink)" stop-opacity="0" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- Grid Lines -->
          <g class="opacity-20" stroke="var(--color-line-dark)" stroke-width="1">
            <line x1="45" y1="80" x2="370" y2="80" stroke-dasharray="2 2" />
            <line x1="45" y1="150" x2="370" y2="150" stroke-dasharray="2 2" />
            <line x1="45" y1="220" x2="370" y2="220" stroke-dasharray="2 2" />
            <line x1="45" y1="290" x2="370" y2="290" stroke-dasharray="2 2" />
            <line x1="45" y1="360" x2="370" y2="360" stroke-width="1.5" />
            <line x1="45" y1="50" x2="45" y2="360" stroke-width="1.5" />
            <line x1="120" y1="50" x2="120" y2="360" stroke-dasharray="2 2" />
            <line x1="200" y1="50" x2="200" y2="360" stroke-dasharray="2 2" />
            <line x1="260" y1="50" x2="260" y2="360" stroke-dasharray="4 4" stroke="var(--color-teal)" stroke-opacity="0.4" stroke-width="1.5" />
            <line x1="320" y1="50" x2="320" y2="360" stroke-dasharray="2 2" />
          </g>

          <!-- X-Axis Labels -->
          <g fill="var(--color-text-muted)" class="font-mono text-[9px] select-none opacity-50" text-anchor="middle">
            <text v-for="(lbl, i) in currentDataset.xLabels" :key="i" :x="i === 0 ? 120 : i === 1 ? 200 : i === 2 ? 260 : 320" y="378" :fill="i === 2 ? 'var(--color-teal)' : undefined" :font-weight="i === 2 ? 'bold' : undefined">{{ lbl }}</text>
          </g>

          <path :d="currentDataset.fanPath" fill="url(#forecastFanGradient)" class="opacity-80 transition-all duration-500 ease-in-out" />
          <path :d="currentDataset.areaPath" fill="url(#areaGradient)" class="transition-all duration-500 ease-in-out" />
          <path :d="currentDataset.trendPath" fill="none" stroke="url(#waveGradient)" stroke-width="3" filter="url(#glow)" class="transition-all duration-500 ease-in-out" />
          <path :d="currentDataset.forecastPath" fill="none" stroke="var(--color-brass-soft)" stroke-width="3" stroke-dasharray="6 4" filter="url(#glow)" class="transition-all duration-500 ease-in-out" />

          <!-- Nodes -->
          <g v-for="(n, i) in currentDataset.nodes" :key="i" class="cursor-pointer" @mouseenter="showTooltip($event, n)" @mousemove="updateTooltip($event)" @mouseleave="hideTooltip">
            <circle :cx="n.cx" :cy="n.cy" r="14" fill="transparent" />
            <circle :cx="n.cx" :cy="n.cy" r="10" fill="var(--color-brass-soft)" opacity="0.2" class="pulse-ring" />
            <circle :cx="n.cx" :cy="n.cy" r="4" fill="var(--color-brass-soft)" class="glow-dot" />
          </g>

          <!-- Bars -->
          <g class="bar-chart">
            <rect v-for="(h, i) in currentDataset.barHeights" :key="i" :x="60 + i * 40" :y="360 - h" width="12" :height="h" rx="2" fill="url(#barGradient)" class="anim-bar opacity-30 transition-all duration-500 ease-in-out" />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue';
import type { MetricDataset, NodeItem, TooltipState } from '@/types/dashboard';

type MetricKey = 'mnr' | 'indobert' | 'wayang';

const DATASETS: Record<MetricKey, MetricDataset> = {
  mnr: {
    xLabels: ['Q1', 'Q2', 'NOW', 'FCST'],
    nodes: [
      { cx: 45, cy: 290, val: '45% Optim', period: 'Q1 2025' },
      { cx: 120, cy: 190, val: '65% Optim', period: 'Q2 2025' },
      { cx: 260, cy: 210, val: '94% Optim', period: 'NOW (Q3)' },
      { cx: 320, cy: 140, val: '112% Target', period: 'Q4 FCST' }
    ],
    trendPath: 'M 45 290 Q 120 180, 200 250 T 260 210',
    forecastPath: 'M 260 210 Q 310 150, 360 100',
    areaPath: 'M 45 360 L 45 290 Q 120 180, 200 250 T 260 210 L 260 360 Z',
    fanPath: 'M 260 210 L 370 60 L 370 260 Z',
    barHeights: [80, 110, 95, 130, 115, 140, 170, 210],
    badge: 'Live BI Operations'
  },
  indobert: {
    xLabels: ['Ep 1', 'Ep 3', 'Ep 5', 'Target'],
    nodes: [
      { cx: 45, cy: 270, val: '55.2% F1', period: 'Epoch 1' },
      { cx: 120, cy: 210, val: '72.8% F1', period: 'Epoch 3' },
      { cx: 260, cy: 150, val: '91.4% F1', period: 'Epoch 5 (NOW)' },
      { cx: 320, cy: 110, val: '95.0% F1', period: 'Deploy Target' }
    ],
    trendPath: 'M 45 270 Q 120 230, 200 180 T 260 150',
    forecastPath: 'M 260 150 Q 310 120, 360 80',
    areaPath: 'M 45 360 L 45 270 Q 120 230, 200 180 T 260 150 L 260 360 Z',
    fanPath: 'M 260 150 L 370 50 L 370 220 Z',
    barHeights: [60, 90, 120, 140, 160, 190, 220, 250],
    badge: 'IndoBERT NLP Sentiment'
  },
  wayang: {
    xLabels: ['B 10', 'B 30', 'B 50', 'Val Acc'],
    nodes: [
      { cx: 45, cy: 300, val: '40.5% Acc', period: 'Batch 10' },
      { cx: 120, cy: 220, val: '68.0% Acc', period: 'Batch 30' },
      { cx: 260, cy: 170, val: '89.2% Acc', period: 'Batch 50 (NOW)' },
      { cx: 320, cy: 130, val: '93.5% Prec', period: 'Test Target' }
    ],
    trendPath: 'M 45 300 Q 120 240, 200 190 T 260 170',
    forecastPath: 'M 260 170 Q 310 140, 360 90',
    areaPath: 'M 45 360 L 45 300 Q 120 240, 200 190 T 260 170 L 260 360 Z',
    fanPath: 'M 260 170 L 370 70 L 370 240 Z',
    barHeights: [50, 80, 110, 130, 150, 180, 200, 230],
    badge: 'Wayang CV Classifier'
  }
};

const activeMetric = ref<MetricKey>('mnr');
const currentDataset = computed<MetricDataset>(() => DATASETS[activeMetric.value]);

const tooltip = reactive<TooltipState>({ visible: false, x: 0, y: 0, period: '', val: '' });

function showTooltip(e: MouseEvent, n: NodeItem) {
  tooltip.period = n.period;
  tooltip.val = n.val;
  tooltip.visible = true;
  updateTooltip(e);
}

function updateTooltip(e: MouseEvent) {
  const card = document.getElementById('panel-hero-dashboard');
  if (!card) return;
  const rect = card.getBoundingClientRect();
  tooltip.x = Math.max(10, Math.min(e.clientX - rect.left + 15, rect.width - 150));
  tooltip.y = Math.max(10, e.clientY - rect.top - 40);
}

function hideTooltip() {
  tooltip.visible = false;
}
</script>
