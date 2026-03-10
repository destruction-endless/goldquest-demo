<script setup lang="ts">
  import { ref, watch } from "vue";
  import { useRoute } from "vue-router";
  import logo from "../../assets/logo/goldquest-logo.png";
  import ThemeToggle from "../ThemeToggle.vue";

  const route = useRoute();
  const isMenuOpen = ref(false);

  watch(
    () => route.path,
    () => {
      isMenuOpen.value = false;
    },
  );
</script>

<template>
  <header
    class="bg-white/90 dark:bg-slate-900/90 border-b border-gray-200 dark:border-slate-700 shadow sticky top-0 z-50 backdrop-blur"
  >
    <div
      class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4"
    >
      <router-link to="/" class="flex items-center gap-3 min-w-0">
        <img :src="logo" class="h-10" />

        <span
          class="font-semibold text-brand-primary dark:text-white text-base sm:text-lg truncate"
        >
          Goldquest Biotechnologies
        </span>
      </router-link>

      <div class="flex items-center gap-3">
        <button
          type="button"
          class="md:hidden rounded-lg border border-gray-200 dark:border-slate-700 px-3 py-2 text-brand-primary dark:text-white transition duration-200 hover:scale-105"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span v-if="isMenuOpen">✕</span>
          <span v-else>☰</span>
        </button>

        <nav
          class="hidden md:flex gap-8 text-brand-text dark:text-slate-200 items-center"
        >
          <router-link
            to="/"
            class="transition-colors duration-200 hover:text-brand-primary dark:hover:text-white"
          >
            Home
          </router-link>

          <router-link
            to="/products"
            class="transition-colors duration-200 hover:text-brand-primary dark:hover:text-white"
          >
            Products
          </router-link>

          <router-link
            to="/about"
            class="transition-colors duration-200 hover:text-brand-primary dark:hover:text-white"
          >
            About
          </router-link>

          <router-link
            to="/contact"
            class="transition-colors duration-200 hover:text-brand-primary dark:hover:text-white"
          >
            Contact
          </router-link>

          <ThemeToggle />
        </nav>

        <div class="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </div>

    <nav
      v-if="isMenuOpen"
      class="md:hidden max-w-7xl mx-auto px-6 pb-4 flex flex-col gap-3 text-brand-text dark:text-slate-200"
    >
      <router-link
        to="/"
        class="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 transition-colors duration-200 hover:text-brand-primary dark:hover:text-white"
      >
        Home
      </router-link>

      <router-link
        to="/products"
        class="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 transition-colors duration-200 hover:text-brand-primary dark:hover:text-white"
      >
        Products
      </router-link>

      <router-link
        to="/about"
        class="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 transition-colors duration-200 hover:text-brand-primary dark:hover:text-white"
      >
        About
      </router-link>

      <router-link
        to="/contact"
        class="rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 transition-colors duration-200 hover:text-brand-primary dark:hover:text-white"
      >
        Contact
      </router-link>
    </nav>
  </header>
</template>
