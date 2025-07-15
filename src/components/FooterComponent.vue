<template>
  <div class="container w-full md:max-w-3xl mx-auto">
    <div class="text-slate-300 flex space-x-4 justify-center">
      <a
        v-for="(item, index) in socialLinks"
        :key="index"
        :href="item.link"
        target="_blank"
        class="hover:text-white transition-transform duration-300 hover:scale-125"
      >
        <SocialIcon :title="item.title" />
      </a>
    </div>
    <p class="text-slate-700 flex justify-center my-10">Made with ❤️ and 🎵 by Louie</p>
    <p class="text-slate-700 flex justify-center my-10">{{ date.getFullYear() }}</p>
  </div>
</template>
<script setup lang="ts">
import SocialIcon from '@/components/SocialIcon.vue';

const date = new Date();

const socialLinks = [
  {
    title: 'instagram',
    link: 'https://instagram.com/louiewuzhere'
  },
  {
    title: 'github',
    link: 'https://github.com/louiecodes'
  }
];
</script>
