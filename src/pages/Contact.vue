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
        Contact Us
      </h1>
      <p class="text-brand-text dark:text-slate-300">
        Reach out for product inquiries, quotations, or support with laboratory
        equipment and diagnostic solutions.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      <div
        class="bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 border border-gray-200 dark:border-slate-700"
      >
        <h2
          class="text-xl font-semibold text-brand-primary dark:text-white mb-4"
        >
          Get in Touch
        </h2>
        <div class="space-y-4 text-brand-text dark:text-slate-300">
          <p>Tell us what equipment or supplies you need.</p>
          <p>
            Request quotations for hospitals, laboratories, or research teams.
          </p>
          <p>Our team will follow up with the right product information.</p>
        </div>
      </div>

      <form
        class="sm:col-span-2 bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 space-y-4 border border-gray-200 dark:border-slate-700"
      >
        <input
          type="text"
          placeholder="Full Name"
          class="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-colors duration-300"
        />

        <input
          type="email"
          placeholder="Email Address"
          class="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-colors duration-300"
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          class="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-accent focus:outline-none transition-colors duration-300"
        ></textarea>

        <button
          type="submit"
          class="inline-flex items-center justify-center w-full sm:w-auto bg-brand-primary hover:bg-brand-purple text-white px-6 py-3 rounded-lg shadow transition duration-200 hover:scale-105"
        >
          Send Inquiry
        </button>
      </form>
    </div>
  </section>
</template>
