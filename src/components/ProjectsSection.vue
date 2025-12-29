<template>
  <div v-motion-slide-visible-once-left :delay="300" class="text-5xl font-bold text-white mb-6">
    {{ t('projects.title') }}
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
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const projects = [
  {
    title: 'webmenu',
    technologies: ['Laravel', 'Framework7', 'MySQL'],
    link: 'https://www.webmenu.com.ar/info.html',
    background: 'bg-gradient-to-r from-yellow-100 to-rose-200'
  },
  {
    title: 'webturno',
    technologies: ['Vue.js', 'Capacitor.js', 'Typescript'],
    link: 'https://webturno.com.ar/c/profesionales.html',
    background: 'bg-gradient-to-r from-emerald-50 to-sky-200'
  },
  {
    title: 'webinfo',
    technologies: ['NestJS', 'Vue.js', 'Typescript', 'MySQL'],
    link: 'https://www.webinfo.com.ar/',
    background: 'bg-gradient-to-r from-lime-200 to-yellow-100'
  },
  {
    title: 'jireh',
    technologies: ['WordPress', 'WooCommerce'],
    link: 'https://www.jireh.com.ar/',
    background:
      'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#cdf0ea] via-[#f9f9f9] to-[#f7dbf0]'
  }
];
</script>
