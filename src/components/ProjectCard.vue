<template>
  <!-- 
    class="rounded-xl shadow-lg transition-all duration-300 bg-gradient-to-br from-emerald-200 via-amber-100 to-rose-400 hover:bg-transparent" 
  -->
  <div class="rounded-xl shadow-lg transition-all duration-300" :class="project.background">
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
        <div class="text-3xl font-black text-black transition duration-300 hover:text-slate-50">
          <a href="#!" rel="noreferrer">{{ project.title }}</a>
        </div>
      </div>
      <div class="text-center text-gray-500 whitespace-pre-line mb-6">
        {{ project.description }}
      </div>
      <div class="flex flex-wrap mt-auto">
        <div
          v-for="(item, index) in project.technologies"
          v-bind:key="index"
          class="text-black font-semibold me-4"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['project']);

console.log(props.project);
</script>
