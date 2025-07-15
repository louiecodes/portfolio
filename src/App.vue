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
<style>
body {
  background-color: #000;
}

.bg {
  background-image:
  radial-gradient(circle 800px at 0% 100%, rgba(139, 92, 246, 0.3), transparent),
  radial-gradient(circle 800px at 100% 10%, rgba(59, 130, 246, 0.3), transparent);
  background-size: 100% 100%, 100% 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
