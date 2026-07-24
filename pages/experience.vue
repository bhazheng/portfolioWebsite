<template>
  <div class="py-6">
    <div class="flex items-baseline justify-between border-b border-line pb-2 mb-5">
      <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
        Work Experience
      </h2>
      <div class="font-mono text-[10px] font-semibold tracking-wider text-teal bg-teal/15 px-2.5 py-0.5 rounded-full">03 items</div>
    </div>

    <div class="bg-glass backdrop-blur-md border border-line-dark rounded-2xl p-6 shadow-glass max-[768px]:p-4">
      <div class="flex flex-col gap-5 w-full relative pl-6 before:content-[''] before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[1px] before:bg-line-dark">
        <!-- Experience Card 1 -->
        <div class="relative bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass-soft hover:-translate-y-0.5 transition-all duration-300 ease-spring">
          <span class="absolute -left-[20px] top-[26px] w-2.5 h-2.5 rounded-full bg-brass-soft ring-4 ring-ink shadow-[0_0_10px_var(--color-brass-soft)]"></span>
          <div class="flex justify-between items-start gap-4 flex-wrap max-[480px]:flex-col max-[480px]:gap-1">
            <div>
              <h3 class="font-display font-bold text-base text-paper tracking-tight">Strategic Business Analytic Officer</h3>
              <div class="font-mono text-[10px] text-brass-soft mt-0.5">PT. Pesta Pora Abadi</div>
            </div>
            <div class="text-right max-[480px]:text-left font-mono">
              <span class="text-[10px] text-teal font-semibold tabular-nums bg-teal/15 px-2.5 py-0.5 rounded-full">Jun 2026 — Present</span>
              <div class="text-[9px] text-text-faint mt-1">Malang, East Java, ID</div>
            </div>
          </div>
          <ul class="font-body text-xs text-text-secondary mt-3.5 leading-relaxed max-w-prose list-disc space-y-1.5 pl-4">
            <li>Manage and process daily Maintenance & Repair (MnR) data for the Store Operation division using Microsoft Excel and Google Spreadsheets to support operational efficiency analysis.</li>
            <li>Design, develop, and maintain the interactive "Operating Document Request" dashboard in Looker Studio and Power BI, providing document status visibility and process bottlenecks to stakeholders.</li>
          </ul>
          <div class="flex gap-1.5 flex-wrap mt-4">
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Looker Studio</span>
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Power BI</span>
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Google Spreadsheet</span>
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Microsoft Office</span>
          </div>
        </div>

        <!-- Experience Card 2 -->
        <div class="relative bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass-soft hover:-translate-y-0.5 transition-all duration-300 ease-spring">
          <span class="absolute -left-[20px] top-[26px] w-2.5 h-2.5 rounded-full bg-text-muted ring-4 ring-ink"></span>
          <div class="flex justify-between items-start gap-4 flex-wrap max-[480px]:flex-col max-[480px]:gap-1">
            <div>
              <h3 class="font-display font-bold text-base text-paper tracking-tight">Business Analyst Intern</h3>
              <div class="font-mono text-[10px] text-brass-soft mt-0.5">Otoritas Jasa Keuangan (OJK) — DPPM / DPAM</div>
            </div>
            <div class="text-right max-[480px]:text-left font-mono">
              <span class="text-[10px] text-text-muted font-medium bg-glass-badge px-2.5 py-0.5 rounded-full">Nov 2025 — May 2026</span>
              <div class="text-[9px] text-text-faint mt-1">Central Jakarta, ID</div>
            </div>
          </div>
          <ul class="font-body text-xs text-text-secondary mt-3.5 leading-relaxed max-w-prose list-disc space-y-1.5 pl-4">
            <li>Assisted the Capital Market Regulation and Development Directorate (DPPM) in comparative research regarding emerging digital financial assets and global regulatory frameworks.</li>
            <li>Supported the formulation of RPOJK on Digital Assets through comparative studies of international standards and global market trends.</li>
            <li>Supported the review of Capital Market Activity regulation revisions through cross-agency compliance analysis and standardization of reporting exemptions.</li>
          </ul>
          <div class="flex gap-1.5 flex-wrap mt-4">
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Digital Assets</span>
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">OJK Regulations</span>
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Market Analysis</span>
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Microsoft Office</span>
          </div>
        </div>

        <!-- Experience Card 3 -->
        <div class="relative bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass-soft hover:-translate-y-0.5 transition-all duration-300 ease-spring">
          <span class="absolute -left-[20px] top-[26px] w-2.5 h-2.5 rounded-full bg-text-muted ring-4 ring-ink"></span>
          <div class="flex justify-between items-start gap-4 flex-wrap max-[480px]:flex-col max-[480px]:gap-1">
            <div>
              <h3 class="font-display font-bold text-base text-paper tracking-tight">Laboratory Teaching Assistant</h3>
              <div class="font-mono text-[10px] text-brass-soft mt-0.5">Faculty of Computer Science, Universitas Brawijaya</div>
            </div>
            <div class="text-right max-[480px]:text-left font-mono">
              <span class="text-[10px] text-text-muted font-medium bg-glass-badge px-2.5 py-0.5 rounded-full">Sep 2021 — Jul 2023</span>
              <div class="text-[9px] text-text-faint mt-1">Malang, East Java, ID</div>
            </div>
          </div>
          <ul class="font-body text-xs text-text-secondary mt-3.5 leading-relaxed max-w-prose list-disc space-y-1.5 pl-4">
            <li>Translated complex programming and database architecture concepts into easily digestible learning materials for over 270 students.</li>
            <li>Facilitated workshops on data modeling, logical system design, ERD creation, and SQL querying.</li>
            <li>Evaluated students' work and provided constructive feedback on problem-solving approaches and programming logic.</li>
          </ul>
          <div class="flex gap-1.5 flex-wrap mt-4">
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Data Modeling</span>
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">SQL Database</span>
            <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Mentoring</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Work Experience — Akbar Lucky Basuki'
})
</script>
