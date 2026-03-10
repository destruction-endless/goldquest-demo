<script setup lang="ts">
  import { useScrollReveal } from "../composables/useScrollReveal";

  const { setRevealRef } = useScrollReveal();
</script>

<template>
  <section :ref="setRevealRef" class="max-w-7xl mx-auto py-16 md:py-20 px-6">
    <div class="max-w-3xl mb-12">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary dark:text-white mb-4"
      >
        About Goldquest Biotechnologies
      </h1>

      <p class="text-brand-text dark:text-slate-300">
        Goldquest Biotechnologies delivers laboratory equipment, reagents, and
        biotechnology products for hospitals, diagnostic laboratories, and
        research institutions.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <div
        class="sm:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 border border-gray-200 dark:border-slate-700"
      >
        <p class="text-brand-text dark:text-slate-300 mb-6">
          Goldquest Biotechnologies Inc. is a supplier of laboratory equipment,
          reagents, and biotechnology products serving hospitals, diagnostic
          laboratories, and research institutions.
        </p>

        <p class="text-brand-text dark:text-slate-300 mb-6">
          The company focuses on delivering reliable laboratory solutions
          including microscopes, diagnostic reagents, centrifuges, and
          scientific instruments used in clinical and research environments.
        </p>

        <p class="text-brand-text dark:text-slate-300">
          With a commitment to quality and innovation, Goldquest Biotechnologies
          supports healthcare professionals and researchers with dependable
          laboratory technologies.
        </p>
      </div>

      <div
        class="bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 border border-gray-200 dark:border-slate-700"
      >
        <h2
          class="text-xl font-semibold text-brand-primary dark:text-white mb-4"
        >
          What We Deliver
        </h2>
        <div class="space-y-4 text-brand-text dark:text-slate-300">
          <p>Laboratory instruments for clinical and research workflows.</p>
          <p>Trusted reagent and diagnostic product sourcing.</p>
          <p>Dependable support for healthcare and scientific teams.</p>
        </div>
      </div>
    </div>
  </section>
</template>
