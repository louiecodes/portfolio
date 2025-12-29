<template>
  <div v-motion-slide-visible-once-left :delay="300" class="text-5xl font-bold text-white mb-6">
    {{ t('about.title') }}
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
        {{ t('about.content1') }}
      </p>
      <br />
      <p>
        {{ t('about.content2') }}
      </p>
      <p>
        {{ t('about.content3') }}
      </p>
      <br />
      <p>
        {{ t('about.content4') }}
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
