<template>
  <div v-motion-slide-visible-left class="text-5xl font-bold text-white mb-6">About me</div>
  <div class="p-8 bg-slate-900 rounded-xl">
    <div class="rounded-xl flex items-center space-x-6" v-motion-pop-visible :delay="300">
      <div class="p-1 bg-slate-800 rounded-full">
        <div class="p-1 bg-gradient-to-br from-fuchsia-500 to-cyan-400 rounded-full">
          <img class="h-16 w-16 rounded-full" src="@/assets/avatar.png" alt="A_photo_of_Louie" />
        </div>
      </div>
      <div>
        <div class="text-3xl font-medium text-white">Louie</div>
        <p class="text-xl text-slate-500">Fullstack Developer</p>
      </div>
    </div>
    <div v-motion-slide-visible-bottom :delay="300" class="text-xl text-white mt-6 mb-10">
      <p>
        Hi there! My name is Louis and I am a fullstack developer graduated in Computer Science.
      </p>
      <p>
        During my carreer, I have had the opportunity to work on a variety of projects, from simple
        websites to complex web applications. I am a reliable and detail-oriented team player, and I
        am always eager to take on new challenges and solve problems creatively.
      </p>
      <p>
        I am excited to continue learning and growing as a developer, and I am always open to new
        opportunities to collaborate and create meaningful projects.
      </p>
    </div>
  </div>
</template>
