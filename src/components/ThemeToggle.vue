<script setup lang="ts">
  import { computed } from "vue";
  import { useTheme } from "../composables/useTheme";

  const { theme, toggleTheme } = useTheme();

  const isDark = computed(() => theme.value === "dark");
  const label = computed(() => (isDark.value ? "Dark mode" : "Light mode"));
</script>

<template>
  <button
    type="button"
    :aria-label="`Toggle ${isDark ? 'light' : 'dark'} mode`"
    class="rounded-lg border border-gray-200 dark:border-slate-700 px-3 py-2 transition duration-200 bg-white dark:bg-slate-800 text-brand-primary dark:text-white hover:scale-105 hover:border-brand-accent"
    @click="toggleTheme"
  >
    <span aria-hidden="true">{{ isDark ? "🌙" : "☀️" }}</span>
    <span class="sr-only">{{ label }}</span>
  </button>
</template>
