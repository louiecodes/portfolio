<template>
  <div v-motion-slide-visible-once-left :delay="300" class="text-5xl font-bold text-white mb-6">
    {{ t('contact.title') }}
  </div>
  <div v-motion-slide-visible-once-right :delay="600" class="text-2xl font-bold text-white">
    {{ t('contact.subtitle') }}
  </div>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
