<template>
  <div class="flex flex-col gap-0">
    <!-- HERO SECTION WRAPPER -->
    <div class="snap-start snap-always min-h-[85vh] flex flex-col justify-center pt-2 md:pt-6 pb-12">
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
            <button class="inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold tracking-wider bg-brass text-ink rounded-full min-h-10 px-5 py-2.5 shadow-btn-primary hover:-translate-y-0.5 hover:bg-brass-soft transition-all duration-150 ease-spring cursor-pointer" @click="activeTab = 'contact'">
              Email me
            </button>
            <a class="inline-flex items-center justify-center gap-2 font-mono text-xs font-semibold tracking-wider bg-glass-ghost text-paper rounded-full border border-line-dark backdrop-blur-sm min-h-10 px-5 py-2.5 shadow-glass-inner hover:border-brass-soft hover:text-brass-soft transition-all duration-150 ease-spring" href="#career-journey" @click.prevent="scrollToSection('career-journey')">
              Interactive Map ↓
            </a>
          </div>

          <div class="flex gap-4 mt-2 flex-wrap">
            <a class="font-mono text-[10px] font-medium tracking-wide text-text-muted inline-flex items-center gap-1 hover:text-brass-soft transition-all" href="https://www.linkedin.com/in/akbarlucky/" target="_blank" rel="noopener noreferrer">
              <i class="ph ph-linkedin-logo text-xs"></i> LinkedIn
            </a>
            <a class="font-mono text-[10px] font-medium tracking-wide text-text-muted inline-flex items-center gap-1 hover:text-brass-soft transition-all" href="https://wa.me/6285172455808" target="_blank" rel="noopener noreferrer">
              <i class="ph ph-whatsapp-logo text-xs"></i> WhatsApp
            </a>
            <a class="font-mono text-[10px] font-medium tracking-wide text-text-muted inline-flex items-center gap-1 hover:text-brass-soft transition-all" href="https://github.com/bhazheng" target="_blank" rel="noopener noreferrer">
              <i class="ph ph-github-logo text-xs"></i> GitHub
            </a>
          </div>
        </div>

        <div class="flex justify-center items-center relative max-[960px]:order-first">
          <HeroDashboard />
        </div>
      </div>

      <!-- Downward Arrow & Scroll Indicator -->
      <div class="flex flex-col items-center gap-2 mt-4">
        <a href="#career-journey" @click.prevent="scrollToSection('career-journey')" class="flex flex-col items-center gap-1.5 group cursor-pointer" aria-label="Scroll down to career journey map">
          <span class="font-mono text-[9px] uppercase tracking-widest text-text-muted group-hover:text-brass-soft transition-colors">Scroll Down</span>
          <div class="animate-bounce-arrow p-2 rounded-full border border-line-dark bg-glass-card group-hover:border-brass-soft transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-brass-soft)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
          </div>
        </a>
      </div>
    </div>

    <!-- INTERACTIVE CAREER JOURNEY MAP SECTION -->
    <section id="career-journey" class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]">
      <div class="flex items-baseline justify-between border-b border-line pb-2 mb-6">
        <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
          Interactive Career Map
        </h2>
        <div class="font-mono text-[10px] font-semibold tracking-wider text-teal bg-teal/15 px-2.5 py-0.5 rounded-full">Click Nodes to Inspect</div>
      </div>

      <!-- Horizontal SVG Node Timeline Track -->
      <div class="bg-glass border border-line-dark rounded-2xl p-6 shadow-glass mb-6">
        <div class="relative w-full">
          <!-- Desktop Connecting SVG Line -->
          <svg class="w-full h-8 max-[640px]:hidden" viewBox="0 0 800 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="100" y1="16" x2="700" y2="16" stroke="var(--color-line-dark)" stroke-width="2" stroke-dasharray="4 4" />
            <line x1="100" y1="16" x2="700" y2="16" stroke="var(--color-brass-soft)" stroke-width="2" stroke-opacity="0.3" />
          </svg>

          <!-- Milestone Node Buttons -->
          <div class="grid grid-cols-4 gap-2 max-[640px]:grid-cols-2 max-[480px]:grid-cols-1">
            <button
              v-for="m in CAREER_MILESTONES"
              :key="m.id"
              type="button"
              @click="activeMilestoneId = m.id"
              :class="[
                'flex flex-col items-center p-3 rounded-xl border transition-all duration-200 cursor-pointer text-center relative',
                activeMilestoneId === m.id
                  ? 'bg-brass/10 border-brass-soft shadow-glass-inner text-brass-soft scale-[1.02]'
                  : 'bg-glass-card border-line-dark text-text-muted hover:border-brass/40 hover:text-paper'
              ]"
            >
              <div class="font-mono text-[9px] font-bold uppercase tracking-wider text-teal mb-1">{{ m.period }}</div>
              <div class="font-display font-bold text-xs tracking-tight text-paper truncate max-w-full">{{ m.organization }}</div>
              <div class="font-mono text-[9px] text-text-faint truncate max-w-full mt-0.5">{{ m.role }}</div>
              <span v-if="activeMilestoneId === m.id" class="w-2 h-2 rounded-full bg-brass-soft shadow-[0_0_8px_var(--color-brass-soft)] mt-2"></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Active Milestone Inspector Card -->
      <div v-if="activeMilestone" class="bg-glass border border-brass/30 rounded-2xl p-6 shadow-glass hover:border-brass-soft transition-all duration-300 ease-spring">
        <div class="flex justify-between items-start gap-4 flex-wrap pb-4 border-b border-line">
          <div>
            <div class="font-mono text-[10px] font-semibold tracking-widest text-brass-soft uppercase flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-teal"></span> {{ activeMilestone.period }} · {{ activeMilestone.location }}
            </div>
            <h3 class="font-display font-extrabold text-xl text-paper tracking-tight mt-1">{{ activeMilestone.role }}</h3>
            <div class="font-mono text-xs text-text-secondary mt-0.5 font-medium">{{ activeMilestone.organization }}</div>
          </div>
          <span class="font-mono text-[10px] text-teal font-semibold bg-teal/15 px-3 py-1 rounded-full border border-teal/25">{{ activeMilestone.badge }}</span>
        </div>

        <p class="font-body text-xs text-text-secondary mt-4 leading-relaxed max-w-prose">
          {{ activeMilestone.summary }}
        </p>

        <!-- Impact Metrics Grid -->
        <div class="grid grid-cols-3 gap-3 mt-5 max-[640px]:grid-cols-1">
          <div v-for="(metric, idx) in activeMilestone.impactMetrics" :key="idx" class="bg-glass-card border border-line-dark rounded-xl p-3 shadow-glass-inner">
            <div class="font-display font-extrabold text-base text-brass-soft tabular-nums">{{ metric.value }}</div>
            <div class="font-mono text-[9px] text-text-muted mt-0.5 uppercase tracking-wider">{{ metric.label }}</div>
          </div>
        </div>

        <!-- Tech Badges & Detail CTA -->
        <div class="flex justify-between items-center flex-wrap gap-4 mt-6 pt-4 border-t border-line">
          <div class="flex gap-1.5 flex-wrap">
            <span v-for="tech in activeMilestone.techStack" :key="tech" class="font-mono text-[9px] text-text-muted bg-glass-ghost border border-line rounded px-2 py-0.5">
              {{ tech }}
            </span>
          </div>
          <button @click="activeTab = activeMilestone.detailTab" class="font-mono text-xs text-brass-soft hover:text-paper inline-flex items-center gap-1 transition-colors duration-150 font-semibold cursor-pointer">
            Explore full history →
          </button>
        </div>
      </div>
    </section>

    <!-- SUMMARY SECTIONS WRAPPER -->
    <div id="summary-sections" class="flex flex-col gap-0 scroll-mt-[90px]">
      
      <!-- 1. Recent Experience -->
      <section id="experience-summary" class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]">
        <div class="grid grid-cols-[1fr_2.2fr] gap-10 max-[1024px]:grid-cols-[1fr_1.8fr] max-[768px]:grid-cols-1 max-[768px]:gap-6 items-start w-full">
          <!-- Left Column -->
          <div class="flex flex-col gap-6 sticky top-24 max-[768px]:relative max-[768px]:top-0">
            <div>
              <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
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

            <button @click="activeTab = 'experience'" class="font-mono text-xs text-brass-soft hover:text-paper inline-flex items-center gap-1 transition-colors duration-150 text-left cursor-pointer">
              View full history →
            </button>
          </div>

          <!-- Right Column -->
          <div class="flex flex-col gap-5 w-full relative pl-6 before:content-[''] before:absolute before:left-[11px] before:top-4 before:bottom-4 before:w-[1px] before:bg-line-dark">
            <div class="relative bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass-soft hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(254,128,25,0.12)] active:scale-[0.99] transition-all duration-300 ease-spring">
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

            <div class="relative bg-glass border border-line-dark rounded-2xl p-5 shadow-glass hover:border-brass-soft hover:-translate-y-1.5 hover:shadow-[0_8px_30px_rgba(254,128,25,0.12)] active:scale-[0.99] transition-all duration-300 ease-spring">
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

      <!-- 2. Education -->
      <section id="education-summary" class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]">
        <div class="grid grid-cols-[1fr_2.2fr] gap-10 max-[1024px]:grid-cols-[1fr_1.8fr] max-[768px]:grid-cols-1 max-[768px]:gap-6 items-start w-full">
          <div class="flex flex-col gap-6 sticky top-24 max-[768px]:relative max-[768px]:top-0">
            <div>
              <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
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

            <button @click="activeTab = 'education'" class="font-mono text-xs text-brass-soft hover:text-paper inline-flex items-center gap-1 transition-colors duration-150 text-left cursor-pointer">
              View education details →
            </button>
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

      <!-- 3. Featured Projects -->
      <section id="projects-summary" class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]">
        <div class="grid grid-cols-[1fr_2.2fr] gap-10 max-[1024px]:grid-cols-[1fr_1.8fr] max-[768px]:grid-cols-1 max-[768px]:gap-6 items-start w-full">
          <div class="flex flex-col gap-6 sticky top-24 max-[768px]:relative max-[768px]:top-0">
            <div>
              <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
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

            <button @click="activeTab = 'projects'" class="font-mono text-xs text-brass-soft hover:text-paper inline-flex items-center gap-1 transition-colors duration-150 text-left cursor-pointer">
              View all projects →
            </button>
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
      <section id="skills-summary" class="snap-start min-h-0 flex flex-col justify-center py-10 md:py-14 scroll-mt-6 md:scroll-mt-[90px]">
        <div class="grid grid-cols-[1fr_2.2fr] gap-10 max-[1024px]:grid-cols-[1fr_1.8fr] max-[768px]:grid-cols-1 max-[768px]:gap-6 items-start w-full">
          <div class="flex flex-col gap-6 sticky top-24 max-[768px]:relative max-[768px]:top-0">
            <div>
              <h2 class="font-display font-bold text-[clamp(1.4rem,3vw,1.9rem)] tracking-tight text-paper">
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

            <button @click="activeTab = 'skills'" class="font-mono text-xs text-brass-soft hover:text-paper inline-flex items-center gap-1 transition-colors duration-150 text-left cursor-pointer">
              View skills details →
            </button>
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
import { ref, computed } from 'vue';
import type { CareerMilestone } from '~/types/career';

const activeTab = useState('activeTab', () => 'home');

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const activeMilestoneId = ref<string>('pesta-pora');

const CAREER_MILESTONES: (CareerMilestone & { detailTab: string })[] = [
  {
    id: 'brawijaya',
    period: '2020 — 2025',
    role: 'Bachelor of Information Systems',
    organization: 'Universitas Brawijaya',
    location: 'Malang, ID',
    badge: 'GPA 3.77 / 4.00',
    summary: 'Focused on systems analysis, database architecture, business process modeling, and data visualization. Mentored 270+ students as a Laboratory Teaching Assistant in SQL database modeling.',
    impactMetrics: [
      { label: 'Academic GPA', value: '3.77 / 4.00' },
      { label: 'Thesis Research', value: 'IndoBERT NLP' },
      { label: 'Students Mentored', value: '270+ Scholars' }
    ],
    techStack: ['Systems Analysis', 'Advanced SQL', 'Data Modeling', 'Python NLP'],
    detailRoute: '/education',
    detailTab: 'education'
  },
  {
    id: 'bangkit',
    period: '2023',
    role: 'Machine Learning Cohort',
    organization: 'Bangkit Academy (Google, GoTo, Traveloka)',
    location: 'Remote / Online',
    badge: 'Grade 88.39 / 100',
    summary: 'Intensive 900-hour Machine Learning program. Led computer vision model development for Semar Wayang image classifier achieving high accuracy.',
    impactMetrics: [
      { label: 'Program Score', value: '88.39 / 100' },
      { label: 'Model Accuracy', value: '91% CV Precision' },
      { label: 'Learning Hours', value: '900 Intensive Hours' }
    ],
    techStack: ['TensorFlow', 'Python Core', 'CNN Architectures', 'Deep Learning'],
    detailRoute: '/education',
    detailTab: 'education'
  },
  {
    id: 'ojk',
    period: 'Nov 2025 — May 2026',
    role: 'Business Analyst Intern',
    organization: 'Otoritas Jasa Keuangan (OJK DPPM / DPAM)',
    location: 'Central Jakarta, ID',
    badge: 'Regulatory Research',
    summary: 'Assisted the Capital Market Regulation Directorate in comparative research on global digital financial asset frameworks and supported RPOJK Digital Asset formulation.',
    impactMetrics: [
      { label: 'Policy Impact', value: 'RPOJK Digital Asset' },
      { label: 'Compliance Focus', value: 'Global Assets' },
      { label: 'Research Scope', value: 'Cross-Agency Study' }
    ],
    techStack: ['Digital Financial Assets', 'OJK Regulations', 'Market Analysis', 'Compliance Study'],
    detailRoute: '/experience',
    detailTab: 'experience'
  },
  {
    id: 'pesta-pora',
    period: 'Jun 2026 — Present',
    role: 'Strategic Business Analytic Officer',
    organization: 'PT. Pesta Pora Abadi',
    location: 'Malang, ID',
    badge: 'Corporate BI Leader',
    summary: 'Managing daily MnR data for the Store Operation division and building executive Looker Studio & Power BI reporting dashboards for operational decision making.',
    impactMetrics: [
      { label: 'Live Systems', value: '5+ Deployed Dashboards' },
      { label: 'Ops Coverage', value: 'Store Operation MnR' },
      { label: 'BI Stack', value: 'Looker & Power BI' }
    ],
    techStack: ['Looker Studio', 'Power BI', 'Google Spreadsheets', 'Excel Analytics'],
    detailRoute: '/experience',
    detailTab: 'experience'
  }
];

const activeMilestone = computed(() => {
  return CAREER_MILESTONES.find(m => m.id === activeMilestoneId.value) || CAREER_MILESTONES[3];
});
</script>
