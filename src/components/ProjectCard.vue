<template>
  <!-- 
    class="rounded-xl shadow-lg transition-all duration-300 bg-gradient-to-br from-emerald-200 via-amber-100 to-rose-400 hover:bg-transparent" 
  -->
  <div
    class="rounded-xl shadow-lg transition-all duration-300 group border border-transparent hover:from-black hover:to-black hover:border hover:border-white"
    :class="project.background"
  >
    <div class="flex justify-end px-4 pt-4">
      <a
        :href="project.link"
        target="_blank"
        type="button"
        class="inline-block text-gray-500 text-sm p-1.5"
      >
        <span class="sr-only">Open link</span>
        <ArrowIcon></ArrowIcon>
      </a>
    </div>
    <div class="p-6 flex flex-col h-full">
      <div class="text-center mb-6">
        <div
          class="text-3xl font-black text-black transition duration-300 translate-y-full group-hover:-translate-y-0 group-hover:text-slate-50"
        >
          <a :href="project.link" target="_blank">{{ t(`projects.${project.title}.title`) }}</a>
        </div>
      </div>
      <div
        class="text-center text-gray-400 mb-10 transition duration-300 opacity-0 -translate-y-10 group-hover:translate-y-0 group-hover:opacity-100"
      >
        {{ t(`projects.${project.title}.description`) }}
      </div>
      <div class="flex flex-wrap mt-auto">
        <div
          v-for="(item, index) in project.technologies"
          v-bind:key="index"
          class="text-black font-semibold me-4 group-hover:text-white"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps(['project']);
</script>
