<template>
  <div class="container w-full md:max-w-3xl mx-auto">
    <div class="text-slate-300 flex space-x-4 justify-center">
      <!-- <a
          href="{link.url}"
          target="_blank"
          rel="noreferrer"
          class="icon hover:text-white transition-transform duration-300 hover:scale-125"
        >
          {#if link.text === 'Github'}
          <FaGithub />
          {/if} {#if link.text === 'LinkedIn'}
          <FaLinkedin />
          {/if} {#if link.text === 'Instagram'}
          <FaInstagram />
          {/if} {#if link.text === 'Facebook'}
          <FaFacebookSquare />
          {/if}
        </a> -->
    </div>
    <p class="text-slate-700 flex justify-center my-10">Made with ❤️ and 🎵 by Louie</p>
    <p class="text-slate-700 flex justify-center my-10">Copyright {{ date.getFullYear() }}</p>
  </div>
</template>
<script setup>
const date = new Date();
</script>
