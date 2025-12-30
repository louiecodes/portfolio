<template>
  <nav
    class="container fixed z-20 top-0 start-0 w-full sm:max-w-xl md:max-w-3xl mx-auto pt-6 px-4 sm:px-4 md:px-4 lg:px-0 m-auto left-0 right-0"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white rounded-xl bg-slate-500 backdrop-filter backdrop-blur-lg bg-opacity-30"
    >
      <router-link
        :to="isHomeView ? '#home' : '/'"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img src="@/assets/logo.png" class="h-8 rounded-full" alt="Louie Logo" />
        <span class="self-center text-2xl font-medium whitespace-nowrap">Louie</span>
      </router-link>
      <button
        v-if="isHomeView"
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div v-if="isHomeView" class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0"
        >
          <li v-for="(item, index) in menuItems" v-bind:key="index">
            <router-link
              :to="item.link"
              :class="route.hash === item.link ? 'bg-gray-600' : ''"
              class="block py-2 pl-3 pr-4 text-white rounded-lg md:hover:text-cyan-500"
              aria-current="page"
              >{{ t(`sections.${item.title}`) }}</router-link
            >
          </li>
          <li class="md:hidden py-2 text-white rounded-lg md:hover:text-cyan-500">
            <button
              @click="toggleLanguage"
              class="px-3 py-1 rounded-lg border text-white text-sm hover:bg-gray-700"
            >
              {{ locale === 'es' ? 'EN' : 'ES' }}
            </button>
          </li>
        </ul>
      </div>
      <button
        v-if="isHomeView"
        @click="toggleLanguage"
        class="hidden md:block ml-4 px-3 py-1 rounded-lg border text-white text-sm hover:bg-gray-700"
      >
        {{ locale === 'es' ? 'EN' : 'ES' }}
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const { t, locale } = useI18n();
const route = useRoute();
const isHomeView = computed(() => route.name === 'HomeView');

const savedLang = localStorage.getItem('lang');
if (savedLang) {
  locale.value = savedLang;
} else {
  localStorage.setItem('lang', locale.value);
}

const menuItems = [
  {
    title: 'projects',
    link: '#projects'
  },
  {
    title: 'technologies',
    link: '#tech'
  },
  {
    title: 'about',
    link: '#about'
  },
  {
    title: 'contact',
    link: '#contact'
  }
];

watch(locale, (newLang) => {
  localStorage.setItem('lang', newLang);
});

const toggleLanguage = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es';
};
</script>
