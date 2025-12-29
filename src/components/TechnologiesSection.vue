<template>
  <div v-motion-slide-visible-once-left :delay="300" class="text-5xl font-bold text-white mb-6">
    {{ t('technologies.title') }}
  </div>
  <div class="container flex flex-wrap justify-center gap-8 text-center cursor-default">
    <div
      v-motion-pop-visible-once
      :delay="50 * index"
      v-for="(item, index) in technologies"
      v-bind:key="index"
    >
      <div
        class="p-4 bg-slate-900 text-xl text-white rounded-xl hover:font-semibold transition-transform duration-300 hover:scale-110"
      >
        <p>{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const technologies = [
  {
    title: 'HTML5'
  },
  {
    title: 'CSS3'
  },
  {
    title: 'JavaScript'
  },
  {
    title: 'Node.js'
  },
  {
    title: 'TypeScript'
  },
  {
    title: 'NestJS'
  },
  {
    title: 'Angular'
  },
  {
    title: 'Vue'
  },
  {
    title: 'Nuxt'
  },
  {
    title: 'TailwindCSS'
  },
  {
    title: 'MySQL'
  },
  {
    title: 'SQL Server'
  },
  {
    title: 'PL/SQL'
  },
  {
    title: 'MongoDB'
  },
  {
    title: 'Prisma'
  },
  {
    title: 'Git'
  },
  {
    title: 'Github'
  },
  {
    title: 'Docker'
  }
];
</script>
