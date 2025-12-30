<template>
  <section class="min-h-screen flex justify-center items-center">
    <div class="text-white text-center">
      <h1
        class="glitch-text animate-[glitch_1s_infinite] mx-auto text-4xl md:text-5xl font-bold mb-12"
      >
        {{ randomErrorMessage }}
      </h1>
      <router-link
        to="/"
        class="relative inline-flex items-center justify-center px-8 py-4 text-xl font-bold text-white transition-all duration-200 bg-gray-900 hover:bg-gray-800 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-xl"
      >
        {{ t('errors.404.goBack') }}
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t, tm } = useI18n();

const quotes = computed(() => tm('errors.404.quotes') as string[]);

const randomErrorMessage = computed(() => {
  const list = quotes.value;
  return list[Math.floor(Math.random() * list.length)];
});
</script>
