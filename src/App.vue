<script setup lang="ts">
import { initFlowbite } from 'flowbite';
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import FooterComponent from '@/components/FooterComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <div class="container w-full md:max-w-3xl mx-auto px-4 sm:px-4 md:px-4 lg:px-0">
    <header>
      <NavbarComponent />
    </header>
    <main>
      <RouterView />
    </main>
    <footer class="pt-40">
      <FooterComponent />
    </footer>
  </div>
</template>
<style>
body {
  background-color: #000;
}
</style>
