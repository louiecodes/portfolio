<template>
  <div v-motion-slide-visible-once-left :delay="300" class="text-5xl font-bold text-white mb-6">
    Projects
  </div>

  <div class="container grid sm:grid-cols-1 md:grid-cols-3 gap-4">
    <ProjectCard
      v-motion-pop-visible-once
      :delay="300 * index"
      v-for="(item, index) in projects"
      v-bind:key="index"
      class="col-span-1 flex flex-col"
      :project="item"
    />
  </div>
</template>
<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';

const projects = [
  {
    title: 'Webmenu',
    description:
      'A digital menu and QR solution that helps restaurants and food shops go paperless, ensuring hygiene, instant updates, and an eco-friendly approach.',
    technologies: ['Laravel', 'Framework7', 'MySQL'],
    link: 'https://www.webmenu.com.ar/info.html',
    background: 'bg-gradient-to-r from-yellow-100 to-rose-200'
  },
  {
    title: 'Webturno',
    description:
      'A web and mobile platform that streamlines appointment management for doctors and patients, featuring electronic medical records, notifications, and 24/7 online booking.',
    technologies: ['Vue.js', 'Capacitor.js', 'Typescript'],
    link: 'https://webturno.com.ar/c/profesionales.html',
    background: 'bg-gradient-to-r from-emerald-50 to-sky-200'
  },
  {
    title: 'Webinfo',
    description:
      'An app designed to create personalized digital spaces with QR codes, perfect for quickly organizing and sharing information in a visual way.',
    technologies: ['NestJS', 'Vue.js', 'Typescript', 'MySQL'],
    link: 'https://www.webinfo.com.ar/',
    background: 'bg-gradient-to-r from-lime-200 to-yellow-100'
  }
];
</script>
