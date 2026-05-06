<template>
  <div class="min-h-screen py-28">
    <div v-if="project" class="max-w-4xl mx-auto">
      <div class="bg-slate-800 rounded-xl p-8">
        <div class="mb-8">
          <router-link
            to="/#projects"
            class="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeftIcon class="w-4 h-4 mr-2" />
            {{ t('projects.back') }}
          </router-link>
        </div>

        <h1 class="text-4xl font-bold text-white mb-4">{{ project.title }}</h1>

        <a
          :href="project.link"
          target="_blank"
          class="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6"
        >
          {{ t('projects.visitProject') }}
          <ArrowIcon class="w-4 h-4 ml-1" />
        </a>

        <div class="flex flex-wrap gap-2 mb-8">
          <span
            v-for="tech in project.technologies"
            :key="tech"
            class="px-3 py-1 bg-slate-700 text-white rounded-full text-sm"
          >
            {{ tech }}
          </span>
        </div>

        <div v-if="project.images.length" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <img
            v-for="(img, index) in project.images"
            :key="index"
            :src="img"
            :alt="`${project.title} screenshot ${index + 1}`"
            class="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        <div class="prose prose-invert max-w-none" v-html="project.content"></div>
      </div>
    </div>

    <div v-else class="text-center text-white">
      <h1 class="text-2xl">{{ t('projects.notFound') }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { marked } from 'marked';
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon.vue';
import ArrowIcon from '@/components/icons/ArrowIcon.vue';

interface Project {
  title: string;
  link: string;
  description: string;
  technologies: string[];
  images: string[];
  content: string;
}

function parseFrontmatter(markdown: string): Record<string, string | string[]> {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
  const match = markdown.match(frontmatterRegex);

  if (!match) return {};

  const frontmatterBlock = match[1];
  const result: Record<string, string | string[]> = {};
  let currentKey = '';
  const lines = frontmatterBlock.split('\n');

  lines.forEach((line) => {
    if (line.startsWith('  - ')) {
      if (currentKey && Array.isArray(result[currentKey])) {
        (result[currentKey] as string[]).push(line.slice(4).trim());
      }
    } else {
      const colonIndex = line.indexOf(':');
      if (colonIndex === -1) return;

      const key = line.slice(0, colonIndex).trim();
      const rawValue = line.slice(colonIndex + 1).trim();

      if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
        result[key] = rawValue
          .slice(1, -1)
          .split(',')
          .map((v: string) => v.trim().replace(/^["']|["']$/g, ''));
      } else if (rawValue.startsWith('"') && rawValue.endsWith('"')) {
        result[key] = rawValue.slice(1, -1);
      } else if (rawValue === '') {
        result[key] = [];
        currentKey = key;
      } else {
        result[key] = rawValue;
      }
    }
  });

  return result;
}

const { t } = useI18n();
const route = useRoute();
const project = ref<Project | null>(null);

onMounted(async () => {
  const slug = route.params.slug as string;
  try {
    const markdownContent = await import(`@/content/projects/${slug}.md?raw`);
    const fullMarkdown = markdownContent.default;
    const frontmatter = parseFrontmatter(fullMarkdown);
    const content = await marked.parse(fullMarkdown.replace(/^---[\s\S]*?---/, ''));

    project.value = {
      title: frontmatter.title as string,
      link: frontmatter.link as string,
      description: frontmatter.description as string,
      technologies: (frontmatter.technologies as string[]) || [],
      images: (frontmatter.images as string[]) || [],
      content
    };
  } catch {
    project.value = null;
  }
});
</script>

<style>
.prose h1 {
  @apply text-3xl font-bold text-white mt-8 mb-4;
}
.prose h2 {
  @apply text-2xl font-bold text-white mt-6 mb-3;
}
.prose h3 {
  @apply text-xl font-semibold text-white mt-4 mb-2;
}
.prose p {
  @apply text-gray-300 mb-4;
}
.prose ul {
  @apply list-disc list-inside text-gray-300 mb-4;
}
.prose ol {
  @apply list-decimal list-inside text-gray-300 mb-4;
}
.prose li {
  @apply mb-2;
}
.prose code {
  @apply bg-slate-700 px-2 py-1 rounded text-cyan-300;
}
.prose pre {
  @apply bg-slate-900 p-4 rounded-lg overflow-x-auto mb-4;
}
.prose pre code {
  @apply bg-transparent p-0;
}
.prose a {
  @apply text-cyan-400 hover:text-cyan-300;
}
</style>
