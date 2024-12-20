<template>
  <component :is="icon" class="icon" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import InstagramIcon from '@/components/icons/InstagramIcon.vue';
import GithubIcon from '@/components/icons/GithubIcon.vue';
import LinkedInIcon from '@/components/icons/LinkedInIcon.vue';

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
