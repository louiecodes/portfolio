<template>
  <div class="text-5xl font-bold text-white text-center">
    <div v-motion-slide-visible-once-bottom :delay="300" :duration="500">
      Hi, I'm
      <span
        class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-pink-500 to-purple-500 animate-text"
        >Louis</span
      >.
    </div>
    <div v-motion-slide-visible-once-bottom :delay="1000" :duration="500">
      A developer & digital artist.
    </div>
    <div v-motion-slide-visible-once-bottom :delay="2000" :duration="500">
      Passionate about creating and learning.
    </div>

    <div
      v-motion-pop-visible-once
      :delay="3000"
      :duration="500"
      class="relative inline-flex group mt-16"
    >
      <div
        class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200"
      />
      <router-link
        to="#contact"
        role="button"
        class="relative inline-flex items-center justify-center px-8 py-4 text-2xl font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-xl"
      >
        Get in touch
      </router-link>
    </div>
  </div>
</template>
