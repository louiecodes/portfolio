# Agent Guidelines for Louie Portfolio Vue

## Project Overview

A Vue 3 + TypeScript portfolio with TailwindCSS and Flowbite. Uses Vue Router, Pinia for state management, vue-i18n for internationalization, and @vueuse/motion for animations.

---

## Commands

### Development
```bash
npm run dev           # Start dev server
npm run build         # Full build with type-checking
npm run preview       # Preview production build
```

### Linting & Formatting
```bash
npm run lint          # Lint all files (auto-fix)
npm run format        # Format code with Prettier
npm run type-check    # TypeScript type checking
```

### Note on Testing
This project has **no test framework** configured. Do not add tests unless explicitly requested.

---

## Code Style Guidelines

### Formatting (Prettier)
- **Semicolons**: Yes
- **Single quotes**: Yes
- **Tab width**: 2 spaces
- **Print width**: 100 characters
- **Trailing commas**: None

Run `npm run format` before committing.

### Linting (ESLint)
The project uses:
- `plugin:vue/vue3-essential`
- `eslint:recommended`
- `@vue/eslint-config-typescript`
- `@vue/eslint-config-prettier/skip-formatting`

Run `npm run lint` to catch issues. ESLint auto-fixes with `--fix`.

---

## TypeScript Conventions

### Type Annotations
- Use explicit return types for functions when not obvious
- Prefer inference for simple variables
- Use interfaces for object shapes

```typescript
// Good
interface MenuItem {
  title: string;
  link: string;
}
const menuItems: MenuItem[] = [...];

// Good - inferred
const count = ref(0);
```

### Strict Mode
Enabled via `tsconfig.app.json`. Do not disable strict checks.

---

## Vue Component Conventions

### Script Setup
Use `<script setup lang="ts">` for all components.

```vue
<script setup lang="ts">
import { computed } from 'vue';
import SomeComponent from '@/components/SomeComponent.vue';

const props = defineProps<{
  title: string;
}>();

const emit = defineEmits<{
  (e: 'update', value: string): void;
}>();
</script>
```

### Component Structure
1. `<template>` first
2. `<script setup lang="ts">` second
3. `<style>` (if needed) last

### Component Naming
- PascalCase for file names: `NavbarComponent.vue`, `ProjectCard.vue`
- Descriptive names, avoid abbreviations
- Suffix components with type: `*Section`, `*Card`, `*Icon`, `*Layout`

---

## Import Conventions

### Path Aliases
Use `@/` for src-relative imports:
```typescript
import MainLayout from '@/layouts/MainLayout.vue';
import { useI18n } from 'vue-i18n';
```

### Import Order (manual, not enforced)
1. Vue/vue-router/pinia imports
2. External library imports
3. @/ imports (local)
4. Relative imports (../)

### Grouping
```typescript
import { computed, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import MainLayout from '@/layouts/MainLayout.vue';
import HomeView from '@/views/HomeView.vue';
import type { RouteRecordRaw } from 'vue-router';
```

---

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `NavbarComponent`, `ProjectCard` |
| Composables | camelCase, `use` prefix | `useCounterStore`, `useAuth` |
| Props | camelCase | `isVisible`, `itemCount` |
| Events | kebab-case | `@update-model`, `@click` |
| CSS Classes | kebab-case | `bg-slate-500`, `text-white` |
| Files | PascalCase (components), kebab-case (utilities) | `NavbarComponent.vue`, `utils.ts` |

---

## State Management (Pinia)

Use the composition API style for Pinia stores:

```typescript
import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});
```

---

## Routing

- Use lazy loading for routes: `component: () => import('@/views/...')`
- Name routes: `name: 'HomeView'`
- Use nested routes with layouts

```typescript
{
  path: '/',
  name: 'home',
  component: MainLayout,
  children: [
    {
      path: '',
      name: 'HomeView',
      component: () => import('@/views/HomeView.vue')
    }
  ]
}
```

---

## CSS & Styling

- Use TailwindCSS utility classes
- Avoid custom CSS unless necessary
- Use Flowbite components when available
- Keep templates clean; move complex logic to script

---

## Error Handling

- Use try/catch for async operations
- Provide meaningful error messages
- Handle edge cases in template conditionals

---

## General Guidelines

- Run `npm run lint` and `npm run format` before committing
- TypeScript strict mode is enabled - do not use `any` to bypass type checks
- Keep components focused and single-purpose
- Use meaningful variable and function names
- No comments unless explaining complex logic
- No console.log in production code