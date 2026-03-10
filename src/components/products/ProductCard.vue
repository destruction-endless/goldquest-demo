<script setup lang="ts">
  import type { Product } from "../../data/products";

  defineProps<{
    product: Product;
  }>();
</script>

<template>
  <div
    class="group bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
  >
    <img
      :src="product.image"
      :alt="product.name"
      class="h-48 w-full object-contain bg-gray-100 dark:bg-slate-700 transition duration-300 group-hover:scale-105"
    />

    <div class="p-6">
      <span
        class="inline-flex text-xs font-semibold text-brand-accent bg-red-50 px-2 py-1 rounded"
      >
        {{ product.category }}
      </span>

      <h3 class="text-lg font-semibold text-brand-primary dark:text-white mt-3">
        {{ product.name }}
      </h3>

      <p class="text-brand-text dark:text-slate-300 text-sm mt-2">
        {{ product.description }}
      </p>

      <button
        class="mt-4 text-sm text-brand-accent transition-colors duration-300 hover:text-brand-purple"
      >
        View Details
      </button>
    </div>
  </div>
</template>
