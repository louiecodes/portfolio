<script setup lang="ts">
import AboutSection from '@/components/AboutSection.vue';
import ContactSection from '@/components/ContactSection.vue';
import HeroSection from '@/components/HeroSection.vue';
import ProjectsSection from '@/components/ProjectsSection.vue';
import TechnologiesSection from '@/components/TechnologiesSection.vue';
</script>

<template>
  <!-- Hero Section -->
  <section class="min-h-screen flex justify-center items-center max-sm:pt-36" id="home">
    <HeroSection />
  </section>
  <!-- Hero Section -->

  <!-- Projects Section -->
  <section class="py-10" id="projects">
    <ProjectsSection />
  </section>
  <!-- Projects Section -->

  <!-- Tech Section -->
  <section class="py-10" id="tech">
    <TechnologiesSection />
  </section>
  <!-- Tech Section -->

  <!-- About Section -->
  <section class="py-10" id="about">
    <AboutSection />
  </section>
  <!-- About Section -->

  <!-- Contact Section -->
  <section class="py-10 overflow-hidden" id="contact">
    <ContactSection />
  </section>
  <!-- Contact Section -->
</template>
