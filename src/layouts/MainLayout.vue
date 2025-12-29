<script setup lang="ts">
import { RouterView } from 'vue-router';
import FooterComponent from '@/components/FooterComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
</script>
<template>
  <div class="min-h-screen w-full bg">
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
  </div>
</template>
