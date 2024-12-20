<template>
  <!-- 
    class="rounded-xl shadow-lg transition-all duration-300 bg-gradient-to-br from-emerald-200 via-amber-100 to-rose-400 hover:bg-transparent" 
  -->
  <div
    class="rounded-xl shadow-lg transition-all duration-300 group border border-transparent hover:from-black hover:to-black hover:border hover:border-white"
    :class="project.background"
  >
    <div class="flex justify-end px-4 pt-4">
      <button class="inline-block text-gray-500 text-sm p-1.5" type="button">
        <span class="sr-only">Open link</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 3"
        >
          <path
            d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
          />
        </svg>
      </button>
    </div>
    <div class="p-6 flex flex-col h-full">
      <div class="text-center mb-6">
        <div
          class="text-3xl font-black text-black transition duration-300 translate-y-full group-hover:-translate-y-0 group-hover:text-slate-50"
        >
          <a :href="project.link" target="_blank">{{ project.title }}</a>
        </div>
      </div>
      <div
        class="text-center text-gray-400 mb-10 transition duration-300 opacity-0 -translate-y-10 group-hover:translate-y-0 group-hover:opacity-100"
      >
        {{ project.description }}
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
const props = defineProps(['project']);
</script>
