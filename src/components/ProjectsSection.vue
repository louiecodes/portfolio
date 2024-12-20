<template>
  <div v-motion-slide-visible-left class="text-5xl font-bold text-white mb-6">Projects</div>

  <div class="container grid sm:grid-cols-1 md:grid-cols-3 gap-4">
    <ProjectCard
      v-motion-pop-visible
      :delay="100 * index"
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
    description: 'A digital menu and delivery app for restaurants and food shops.',
    technologies: ['Laravel', 'Framework7', 'MySQL'],
    link: 'https://www.webmenu.com.ar/info.html',
    background: 'bg-gradient-to-r from-yellow-100 to-rose-200'
  },
  {
    title: 'Webturno',
    description: 'Web and mobile app for doctors and patients appointment management',
    technologies: ['Angular', 'Framework7', 'Vue.js'],
    link: 'https://www.webturno.com.ar/info.html',
    background: 'bg-gradient-to-r from-emerald-50 to-sky-200'
  },
  {
    title: 'Real Estate',
    description: 'Web for real estate',
    technologies: ['Nuxt', 'Typescript'],
    link: 'https://www.nessi.com.ar/',
    background: 'bg-gradient-to-r from-lime-200 to-yellow-100'
  }
];
</script>
