<script setup lang="ts">
  import Navbar from "./components/layout/Navbar.vue";
  import Footer from "./components/layout/Footer.vue";
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-brand-background dark:bg-slate-950 text-brand-text dark:text-slate-200 transition-colors duration-300"
  >
    <Navbar />

    <main class="flex-1">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <router-link
      to="/contact"
      class="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center bg-brand-accent hover:bg-brand-purple text-white rounded-full shadow-lg px-6 py-3 transition duration-200 hover:scale-105 w-auto"
    >
      Request Quote
    </router-link>

    <Footer />
  </div>
</template>

<style>
  .page-enter-active,
  .page-leave-active {
    transition:
      opacity 0.25s ease,
      transform 0.25s ease;
  }

  .page-enter-from {
    opacity: 0;
    transform: translateY(8px);
  }

  .page-leave-to {
    opacity: 0;
    transform: translateY(-8px);
  }
</style>
