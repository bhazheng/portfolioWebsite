<template>
  <section id="hero" class="hero-section page-width">
    <div class="hero-copy">
      <div class="hero-intro" v-reveal="0">
        <span class="hero-intro-line" />
        Hello, I'm Akbar
      </div>

      <h1 class="hero-headline" v-reveal="150">
        Business Analyst<br>
        &amp; <span class="accent">Data Storyteller</span>
      </h1>

      <p class="hero-copy" v-reveal="300">
        An Information Systems graduate from Universitas Brawijaya. I translate complex data
        into intuitive dashboards, conduct strategic market analysis, and build machine
        learning solutions that guide decisions leaders act on.
      </p>

      <div class="hero-actions" v-reveal="450">
        <v-btn href="#contact" variant="flat" color="primary" size="large" rounded="pill">
          Email me
        </v-btn>
        <a href="#projects" class="text-link">
          Explore projects
          <v-icon icon="i-material-symbols:arrow-downward" size="18" />
        </a>
      </div>

      <div class="d-flex flex-wrap ga-2 mt-6" v-reveal="550">
        <v-btn
          href="https://www.linkedin.com/in/akbarlucky/"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          size="small"
          prepend-icon="i-mdi:linkedin"
        >
          LinkedIn
        </v-btn>
        <v-btn
          href="https://wa.me/6285172455808"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          size="small"
          prepend-icon="i-mdi:whatsapp"
        >
          WhatsApp
        </v-btn>
        <v-btn
          href="https://github.com/bhazheng"
          target="_blank"
          rel="noopener noreferrer"
          variant="text"
          size="small"
          prepend-icon="i-mdi:github"
        >
          GitHub
        </v-btn>
      </div>
    </div>

    <!-- Hero art: portrait frame + stickers -->
    <div class="hero-art" v-reveal="350">
      <div class="portrait-frame">
        <img src="~/assets/profile pic.jpeg" alt="Akbar Lucky Basuki" class="hero-portrait" />
      </div>

      <div class="orbit-symbol">
        <v-icon icon="i-material-symbols:monitoring" size="40" />
      </div>

      <div class="code-sticker">
        <v-icon icon="i-material-symbols:code" size="32" />
      </div>

      <div class="identity-sticker">
        <strong>ALB.</strong>
        <span>Analyst</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
