<template>
  <component :is="icon" class="icon" />
</template>

<script setup>
import { computed } from 'vue';
import InstagramIcon from './icons/InstagramIcon.vue';
import GithubIcon from './icons/GithubIcon.vue';
import LinkedInIcon from './icons/LinkedInIcon.vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  }
});

const icon = computed(() => {
  switch (props.title) {
    case 'instagram':
      return InstagramIcon;
    case 'github':
      return GithubIcon;
    case 'linkedin':
      return LinkedInIcon;
    default:
      return null;
  }
});
</script>

<style scoped>
.icon {
  width: 32px;
  height: 32px;
}
</style>
