# Full Scrollable Home Page Summary Sections Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Re-integrate the complete, scrollable 4-section editorial layout on the Vue 3 homepage (`src/views/HomeView.vue`).

**Architecture:** Refactor `src/views/HomeView.vue` with Hero section, downward bounce arrow button, and 4 scrollable summary sections (Experience, Education, Projects, Skills) using Vue Router `<router-link>` tags and Tailwind CSS v4 styling.

**Tech Stack:** Vue 3, Vue Router 4, TypeScript, Tailwind CSS v4.

## Global Constraints
- **1:1 Parity**: Replicate the exact content, badges, and layout structure of the original Astro homepage.
- **Strict Typing**: Use `<script setup lang="ts">`.
- **Zero Errors**: Verify via `npm run type-check` and `npm run build`.

---

### Task 1: Re-integrate Full Summary Sections in `src/views/HomeView.vue` & Verify Build

**Files:**
- Modify: `src/views/HomeView.vue`

- [ ] **Step 1: Update `src/views/HomeView.vue` with full scrollable sections**

```vue
<template>
  <div>
    <!-- HERO SECTION WRAPPER -->
    <div class="snap-start min-h-dvh flex flex-col justify-center pt-16">
      <div class="grid grid-cols-[1.1fr_0.9fr] gap-8 items-center py-6 max-[960px]:grid-cols-1 max-[960px]:gap-6" id="hero">
        <div class="flex flex-col gap-4">
          <div class="font-mono text-[11px] font-semibold tracking-[0.16em] text-brass-soft uppercase inline-flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-brass-soft shadow-[0_0_10px_var(--color-brass-soft)]"></span>
            Business Analyst & Data Storyteller
          </div>
          <h1 class="font-serif italic font-normal text-[clamp(1.8rem,3.5vw,2.6rem)] leading-[1.15] tracking-tight text-paper">
            Hi, I'm<br />
            <span class="font-display not-italic font-extrabold text-brass-soft tracking-tighter text-[clamp(1.5rem,3vw,2.2rem)] whitespace-nowrap">Akbar <span class="underline decoration-1 underline-offset-4">Lucky</span> Basuki</span>.
          </h1>
          <p class="font-body text-sm font-normal leading-relaxed text-text-secondary max-w-[52ch]">
            An Information Systems graduate from Universitas Brawijaya working as a Business & Data Analyst. I focus on translating complex data points into intuitive dashboard systems, conducting strategic market analysis, and developing machine learning solutions to guide decision-making.
          </p>
          
          <div class="flex gap-3 flex-wrap">
            <a class="inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold tracking-wider bg-brass text-ink rounded-full min-h-10 px-5 py-2.5 shadow-btn-primary hover:-translate-y-0.5 hover:bg-brass-soft transition-all duration-150 ease-spring" href="mailto:akbarlucky@protonmail.com">
              Email me
            </a>
            <a class="inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold tracking-wider bg-glass-ghost text-paper rounded-full border border-line-dark backdrop-blur-sm min-h-10 px-5 py-2.5 shadow-glass-inner hover:border-brass-soft hover:text-brass-soft transition-all duration-150 ease-spring" href="#summary-sections">
              View Summary ↓
            </a>
          </div>

          <div class="flex gap-4 mt-2 flex-wrap">
            <a class="font-mono text-[10px] font-medium tracking-wide text-text-muted inline-flex items-center gap-1 hover:text-brass-soft transition-all" href="https://www.linkedin.com/in/akbarlucky/" target="_blank" rel="noopener noreferrer">
              <i class="ph ph-linkedin-logo text-xs"></i> LinkedIn
            </a>
            <a class="font-mono text-[10px] font-medium tracking-wide text-text-muted inline-flex items-center gap-1 hover:text-brass-soft transition-all" href="https://wa.me/628999655808" target="_blank" rel="noopener noreferrer">
              <i class="ph ph-whatsapp-logo text-xs"></i> WhatsApp
            </a>
            <a class="font-mono text-[10px] font-medium tracking-wide text-text-muted inline-flex items-center gap-1 hover:text-brass-soft transition-all" href="https://github.com/akbarlucky" target="_blank" rel="noopener noreferrer">
              <i class="ph ph-github-logo text-xs"></i> GitHub
            </a>
          </div>
        </div>

        <div class="flex justify-center items-center relative max-[960px]:order-first">
          <HeroDashboard />
        </div>
      </div>

      <!-- Downward Arrow -->
      <div class="flex justify-center mt-4 animate-bounce-arrow">
        <a href="#summary-sections" aria-label="Scroll to summary sections">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-brass-soft)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
        </a>
      </div>
    </div>

    <!-- SUMMARY SECTIONS -->
    <div id="summary-sections" class="mt-8 flex flex-col gap-0 scroll-mt-[90px]">
      
      <!-- 1. Recent Experience -->
      <section class="p-0 border-none snap-start min-h-dvh flex flex-col justify-center pt-20">
        <div class="grid grid-cols-[1fr_2.2fr] gap-10 max-[1024px]:grid-cols-[1fr_1.8fr] max-[768px]:grid-cols-1 max-[768px]:gap-6 items-start w-full">
          <!-- Left Column -->
          <div class="flex flex-col gap-6 sticky top-24 max-[768px]:relative max-[768px]:top-0">
            <div>
              <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight flex items-center gap-2 before:content-['//'] before:font-mono before:text-[0.55em] before:font-medium before:text-brass-soft before:tracking-tighter before:opacity-75">
                Recent Experience
              </h2>
              <p class="font-body text-xs text-text-secondary mt-2 leading-relaxed max-w-[28ch]">
                Leading analytical projects, dashboard operations, and financial research in corporate environments.
              </p>
            </div>
            
            <div class="grid grid-cols-2 gap-3 max-[768px]:hidden">
              <div class="bg-glass-card border border-line-dark rounded-xl p-3.5 flex flex-col gap-0.5 shadow-glass-inner">
                <span class="font-mono text-[8px] uppercase tracking-wider text-text-faint">Experience</span>
                <div class="font-display font-extrabold text-base text-brass-soft">2+ Years</div>
                <p class="font-mono text-[9px] text-text-muted mt-0.5">Corporate BI & Analytics</p>
              </div>
              <div class="bg-glass-card border border-line-dark rounded-xl p-3.5 flex flex-col gap-0.5 shadow-glass-inner">
                <span class="font-mono text-[8px] uppercase tracking-wider text-text-faint">Dashboards</span>
                <div class="font-display font-extrabold text-base text-brass-soft">5+ Deployed</div>
                <p class="font-mono text-[9px] text-text-muted mt-0.5">Live reporting systems</p>
              </div>
            </div>

            <router-link to="/experience" class="font-mono text-xs text-brass-soft hover:text-paper inline-flex items-center gap-1 transition-colors duration-150">
              View full history →
            </router-link>
          </div>

          <!-- Right Column -->
          <div class="flex flex-col gap-5 w-full relative pl-6 before:content-[''] before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[1px] before:bg-line-dark">
            <div class="relative bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass-soft hover:-translate-y-0.5 transition-all duration-300 ease-spring">
              <span class="absolute -left-[20px] top-[26px] w-2.5 h-2.5 rounded-full bg-brass-soft ring-4 ring-ink shadow-[0_0_10px_var(--color-brass-soft)]"></span>
              <div class="flex justify-between items-start gap-4 flex-wrap max-[480px]:flex-col max-[480px]:gap-1">
                <div>
                  <h3 class="font-display font-bold text-base text-paper tracking-tight">Strategic Business Analytic Officer</h3>
                  <div class="font-mono text-[10px] text-brass-soft mt-0.5">PT. Pesta Pora Abadi</div>
                </div>
                <div class="text-right max-[480px]:text-left font-mono">
                  <span class="text-[10px] text-teal font-semibold tabular-nums bg-teal/15 px-2.5 py-0.5 rounded-full">2026 — Present</span>
                  <div class="text-[9px] text-text-faint mt-1">Malang, ID</div>
                </div>
              </div>
              <p class="font-body text-xs text-text-secondary mt-3.5 leading-relaxed max-w-prose">
                Managing MnR data for the Store Operation division and designing integrative dashboards in Looker Studio & Power BI for operational optimization.
              </p>
              <div class="flex gap-1.5 flex-wrap mt-4">
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Looker Studio</span>
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Power BI</span>
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Google Spreadsheet</span>
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Microsoft Office</span>
              </div>
            </div>

            <div class="relative bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass-soft hover:-translate-y-0.5 transition-all duration-300 ease-spring">
              <span class="absolute -left-[20px] top-[26px] w-2.5 h-2.5 rounded-full bg-text-muted ring-4 ring-ink"></span>
              <div class="flex justify-between items-start gap-4 flex-wrap max-[480px]:flex-col max-[480px]:gap-1">
                <div>
                  <h3 class="font-display font-bold text-base text-paper tracking-tight">Business Analyst Intern</h3>
                  <div class="font-mono text-[10px] text-brass-soft mt-0.5">Otoritas Jasa Keuangan (OJK)</div>
                </div>
                <div class="text-right max-[480px]:text-left font-mono">
                  <span class="text-[10px] text-text-muted font-medium bg-glass-badge px-2.5 py-0.5 rounded-full">2025 — 2026</span>
                  <div class="text-[9px] text-text-faint mt-1">Jakarta, ID</div>
                </div>
              </div>
              <p class="font-body text-xs text-text-secondary mt-3.5 leading-relaxed max-w-prose">
                Conducted comparative research on global digital financial assets and supported the formulation of RPOJK Digital Asset regulations.
              </p>
              <div class="flex gap-1.5 flex-wrap mt-4">
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Digital Assets</span>
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">OJK Regulations</span>
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Market Analysis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 2. Education & Certifications -->
      <section class="p-0 border-none snap-start min-h-dvh flex flex-col justify-center pt-20">
        <div class="grid grid-cols-[1fr_2.2fr] gap-10 max-[1024px]:grid-cols-[1fr_1.8fr] max-[768px]:grid-cols-1 max-[768px]:gap-6 items-start w-full">
          <div class="flex flex-col gap-6 sticky top-24 max-[768px]:relative max-[768px]:top-0">
            <div>
              <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight flex items-center gap-2 before:content-['//'] before:font-mono before:text-[0.55em] before:font-medium before:text-brass-soft before:tracking-tighter before:opacity-75">
                Education & Certifications
              </h2>
              <p class="font-body text-xs text-text-secondary mt-2 leading-relaxed max-w-[28ch]">
                Formal education and specialized training programs focused on technology and analytics.
              </p>
            </div>
            
            <div class="grid grid-cols-2 gap-3 max-[768px]:hidden">
              <div class="bg-glass-card border border-line-dark rounded-xl p-3.5 flex flex-col gap-0.5 shadow-glass-inner">
                <span class="font-mono text-[8px] uppercase tracking-wider text-text-faint">Academic GPA</span>
                <div class="font-display font-extrabold text-base text-brass-soft">3.77 GPA</div>
                <p class="font-mono text-[9px] text-text-muted mt-0.5">Information Systems</p>
              </div>
              <div class="bg-glass-card border border-line-dark rounded-xl p-3.5 flex flex-col gap-0.5 shadow-glass-inner">
                <span class="font-mono text-[8px] uppercase tracking-wider text-text-faint">Bangkit Score</span>
                <div class="font-display font-extrabold text-base text-brass-soft">88.39</div>
                <p class="font-mono text-[9px] text-text-muted mt-0.5">ML cohort</p>
              </div>
            </div>

            <router-link to="/education" class="font-mono text-xs text-brass-soft hover:text-paper inline-flex items-center gap-1 transition-colors duration-150">
              View education details →
            </router-link>
          </div>

          <div class="flex flex-col gap-5 w-full relative pl-6 before:content-[''] before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[1px] before:bg-line-dark">
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
              <p class="font-body text-xs text-text-secondary mt-3.5 leading-relaxed max-w-prose">
                Focused on systems analysis, strategic IS planning, business process modeling, and data visualization. Graduated with a high academic score.
              </p>
              <div class="flex gap-1.5 flex-wrap mt-4">
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Business Process</span>
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Systems Analysis</span>
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Enterprise Arch</span>
              </div>
            </div>

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
              <p class="font-body text-xs text-text-secondary mt-3.5 leading-relaxed max-w-prose">
                Intensive 900-hour ML curriculum by Google, GoTo, and Traveloka. Developed model workflows in Python using TensorFlow.
              </p>
              <div class="flex gap-1.5 flex-wrap mt-4">
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">TensorFlow</span>
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Python Core</span>
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Deep Learning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Project Summary -->
      <section class="p-0 border-none snap-start min-h-dvh flex flex-col justify-center pt-20">
        <div class="grid grid-cols-[1fr_2.2fr] gap-10 max-[1024px]:grid-cols-[1fr_1.8fr] max-[768px]:grid-cols-1 max-[768px]:gap-6 items-start w-full">
          <div class="flex flex-col gap-6 sticky top-24 max-[768px]:relative max-[768px]:top-0">
            <div>
              <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight flex items-center gap-2 before:content-['//'] before:font-mono before:text-[0.55em] before:font-medium before:text-brass-soft before:tracking-tighter before:opacity-75">
                Project Summary
              </h2>
              <p class="font-body text-xs text-text-secondary mt-2 leading-relaxed max-w-[28ch]">
                Featured projects highlighting ML pipelines, computer vision, and structured text analytics.
              </p>
            </div>
            
            <div class="grid grid-cols-2 gap-3 max-[768px]:hidden">
              <div class="bg-glass-card border border-line-dark rounded-xl p-3.5 flex flex-col gap-0.5 shadow-glass-inner">
                <span class="font-mono text-[8px] uppercase tracking-wider text-text-faint">Computer Vision</span>
                <div class="font-display font-extrabold text-base text-brass-soft">91% Acc</div>
                <p class="font-mono text-[9px] text-text-muted mt-0.5">TensorFlow Classifier</p>
              </div>
              <div class="bg-glass-card border border-line-dark rounded-xl p-3.5 flex flex-col gap-0.5 shadow-glass-inner">
                <span class="font-mono text-[8px] uppercase tracking-wider text-text-faint">NLP Analytics</span>
                <div class="font-display font-extrabold text-base text-brass-soft">IndoBERT</div>
                <p class="font-mono text-[9px] text-text-muted mt-0.5">App reviews sentiment</p>
              </div>
            </div>

            <router-link to="/projects" class="font-mono text-xs text-brass-soft hover:text-paper inline-flex items-center gap-1 transition-colors duration-150">
              View all projects →
            </router-link>
          </div>

          <div class="flex flex-col gap-5 w-full">
            <div class="relative bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass hover:shadow-card-hover transition-all duration-300 ease-spring">
              <div class="flex justify-between items-start gap-4 flex-wrap">
                <div>
                  <span class="font-mono text-[9px] font-semibold tracking-wider text-brass-soft uppercase">Thesis Project · NLP</span>
                  <h3 class="font-display font-bold text-base text-paper mt-1">Sentiment Analysis & Root Cause Analysis</h3>
                </div>
                <span class="font-mono text-[10px] text-teal font-semibold bg-teal/15 px-2.5 py-0.5 rounded-full">IndoBERT Model</span>
              </div>
              <p class="font-body text-xs text-text-secondary mt-3 leading-relaxed max-w-prose">
                Applying advanced natural language processing (IndoBERT) and Root Cause Analysis to qualitative app store reviews of Ajaib Kripto, mapping operational pain points.
              </p>
              <div class="flex gap-1.5 flex-wrap mt-4">
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">IndoBERT</span>
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Python NLP</span>
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">RCA Analysis</span>
              </div>
            </div>

            <div class="relative bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass hover:shadow-card-hover transition-all duration-300 ease-spring">
              <div class="flex justify-between items-start gap-4 flex-wrap">
                <div>
                  <span class="font-mono text-[9px] font-semibold tracking-wider text-brass-soft uppercase">Capstone Project · CV</span>
                  <h3 class="font-display font-bold text-base text-paper mt-1">Semar — Wayang Character Classifier</h3>
                </div>
                <span class="font-mono text-[10px] text-teal font-semibold bg-teal/15 px-2.5 py-0.5 rounded-full">TensorFlow CV</span>
              </div>
              <p class="font-body text-xs text-text-secondary mt-3 leading-relaxed max-w-prose">
                Developed a deep learning convolutional neural network classification system to identify traditional Javanese Wayang characters from user-uploaded images.
              </p>
              <div class="flex gap-1.5 flex-wrap mt-4">
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">TensorFlow</span>
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">CNN Model</span>
                <span class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">Cloud Api</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Key Skills -->
      <section class="p-0 border-none snap-start min-h-dvh flex flex-col justify-center pt-20">
        <div class="grid grid-cols-[1fr_2.2fr] gap-10 max-[1024px]:grid-cols-[1fr_1.8fr] max-[768px]:grid-cols-1 max-[768px]:gap-6 items-start w-full">
          <div class="flex flex-col gap-6 sticky top-24 max-[768px]:relative max-[768px]:top-0">
            <div>
              <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight flex items-center gap-2 before:content-['//'] before:font-mono before:text-[0.55em] before:font-medium before:text-brass-soft before:tracking-tighter before:opacity-75">
                Key Skills
              </h2>
              <p class="font-body text-xs text-text-secondary mt-2 leading-relaxed max-w-[28ch]">
                Technical proficiencies and business tools utilized in core data analytics pipelines.
              </p>
            </div>
            
            <div class="grid grid-cols-2 gap-3 max-[768px]:hidden">
              <div class="bg-glass-card border border-line-dark rounded-xl p-3.5 flex flex-col gap-0.5 shadow-glass-inner">
                <span class="font-mono text-[8px] uppercase tracking-wider text-text-faint">Core Domain</span>
                <div class="font-display font-extrabold text-base text-brass-soft">BI Stack</div>
                <p class="font-mono text-[9px] text-text-muted mt-0.5">Power BI & Looker</p>
              </div>
              <div class="bg-glass-card border border-line-dark rounded-xl p-3.5 flex flex-col gap-0.5 shadow-glass-inner">
                <span class="font-mono text-[8px] uppercase tracking-wider text-text-faint">Languages</span>
                <div class="font-display font-extrabold text-base text-brass-soft">SQL & Python</div>
                <p class="font-mono text-[9px] text-text-muted mt-0.5">Database & ML script</p>
              </div>
            </div>

            <router-link to="/skills" class="font-mono text-xs text-brass-soft hover:text-paper inline-flex items-center gap-1 transition-colors duration-150">
              View skills details →
            </router-link>
          </div>

          <div class="grid grid-cols-2 gap-4 max-[480px]:grid-cols-1 w-full">
            <div class="bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass-soft hover:-translate-y-0.5 transition-all duration-300 ease-spring">
              <h4 class="font-display font-bold text-xs tracking-wider text-brass-soft uppercase border-b border-line pb-2 mb-3 flex items-center gap-1.5"><i class="ph ph-chart-line text-sm"></i> Business & Data</h4>
              <ul class="list-none space-y-2">
                <li class="font-body text-xs text-text-secondary flex items-center gap-1.5"><span class="font-mono font-bold text-brass">→</span>Root Cause Analysis</li>
                <li class="font-body text-xs text-text-secondary flex items-center gap-1.5"><span class="font-mono font-bold text-brass">→</span>Data Analytics</li>
              </ul>
            </div>
            <div class="bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass-soft hover:-translate-y-0.5 transition-all duration-300 ease-spring">
              <h4 class="font-display font-bold text-xs tracking-wider text-brass-soft uppercase border-b border-line pb-2 mb-3 flex items-center gap-1.5"><i class="ph ph-projector-screen text-sm"></i> Visualization</h4>
              <ul class="list-none space-y-2">
                <li class="font-body text-xs text-text-secondary flex items-center gap-1.5"><span class="font-mono font-bold text-brass">→</span>Looker Studio</li>
                <li class="font-body text-xs text-text-secondary flex items-center gap-1.5"><span class="font-mono font-bold text-brass">→</span>Power BI</li>
              </ul>
            </div>
            <div class="bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass-soft hover:-translate-y-0.5 transition-all duration-300 ease-spring">
              <h4 class="font-display font-bold text-xs tracking-wider text-brass-soft uppercase border-b border-line pb-2 mb-3 flex items-center gap-1.5"><i class="ph ph-database text-sm"></i> Technical Tools</h4>
              <ul class="list-none space-y-2">
                <li class="font-body text-xs text-text-secondary flex items-center gap-1.5"><span class="font-mono font-bold text-brass">→</span>Excel & Sheets</li>
                <li class="font-body text-xs text-text-secondary flex items-center gap-1.5"><span class="font-mono font-bold text-brass">→</span>Advanced SQL</li>
              </ul>
            </div>
            <div class="bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass-soft hover:-translate-y-0.5 transition-all duration-300 ease-spring">
              <h4 class="font-display font-bold text-xs tracking-wider text-brass-soft uppercase border-b border-line pb-2 mb-3 flex items-center gap-1.5"><i class="ph ph-brain text-sm"></i> Machine Learning</h4>
              <ul class="list-none space-y-2">
                <li class="font-body text-xs text-text-secondary flex items-center gap-1.5"><span class="font-mono font-bold text-brass">→</span>TensorFlow</li>
                <li class="font-body text-xs text-text-secondary flex items-center gap-1.5"><span class="font-mono font-bold text-brass">→</span>NLP (IndoBERT)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import HeroDashboard from '../components/HeroDashboard.vue';
</script>
```

- [ ] **Step 2: Run Type Checking & Production Build**

Run: `npm run type-check`
Expected: 0 type errors.

Run: `npm run build`
Expected: Successful Vite compilation.
