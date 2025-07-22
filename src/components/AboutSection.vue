<template>
  <div v-motion-slide-visible-once-left :delay="300" class="text-5xl font-bold text-white mb-6">
    About me
  </div>
  <div class="p-8 bg-slate-900 rounded-xl" v-motion-pop-visible-once :delay="500">
    <div class="rounded-xl flex items-center space-x-6" v-motion-pop-visible-once :delay="800">
      <div class="p-1 bg-slate-800 rounded-full">
        <div class="p-1 bg-gradient-to-br from-fuchsia-500 to-cyan-400 rounded-full">
          <img
            class="max-h-16 max-w-16 rounded-full"
            src="@/assets/avatar.png"
            alt="A_photo_of_Louie"
          />
        </div>
      </div>
      <div>
        <div class="text-3xl font-medium text-white">Louie</div>
        <p class="text-xl text-slate-500">Full Stack Developer</p>
      </div>
    </div>
    <div v-motion-slide-visible-once-bottom :delay="1000" class="text-xl text-white mt-6 mb-10">
      <p>
        Hi there! My name is Louis and I am a full stack developer graduated in Software
        Development.
      </p>
      <br />
      <p>
        Throughout my career, I've worked on a wide range of projects, from simple websites to
        complex web applications.
      </p>
      <p>
        I'm a <i>reliable</i>, <i>detail-oriented</i> team player who loves tackling new challenges
        and solving problems with creativity.
      </p>
      <br />
      <p>
        I thrive on collaboration and building solutions that make a difference. Let's create
        something extraordinary together!
      </p>
    </div>
  </div>
</template>
