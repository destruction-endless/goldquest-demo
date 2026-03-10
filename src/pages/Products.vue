<script setup lang="ts">
  import { ref, computed } from "vue";
  import { products } from "../data/products";
  import { categories } from "../components/products/categories";
  import ProductCard from "../components/products/ProductCard.vue";
  import { useScrollReveal } from "../composables/useScrollReveal";

  const search = ref("");
  const selectedCategory = ref("");

  const filteredProducts = computed(() => {
    return products.filter((product) => {
      const matchesCategory =
        !selectedCategory.value || product.category === selectedCategory.value;

      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.value.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  });

  const { setRevealRef } = useScrollReveal();
</script>

<template>
  <section :ref="setRevealRef" class="max-w-7xl mx-auto py-16 md:py-20 px-6">
    <div class="mb-12">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary dark:text-white mb-4"
      >
        Product Catalog
      </h1>
      <p class="max-w-3xl text-brand-text dark:text-slate-300">
        Explore Goldquest laboratory equipment, reagents, and diagnostic tools
        using the same curated browsing experience found throughout the site.
      </p>
    </div>

    <div
      class="grid grid-cols-1 xl:grid-cols-[280px_minmax(0,1fr)] gap-10 items-start"
    >
      <!-- Sidebar -->
      <aside
        class="bg-white dark:bg-slate-800 rounded-xl shadow p-6 border border-gray-200 dark:border-slate-700 transition-colors duration-300"
      >
        <h2
          class="text-lg font-semibold text-brand-primary dark:text-white mb-4"
        >
          Categories
        </h2>

        <ul class="space-y-3 text-brand-text dark:text-slate-300">
          <li
            class="cursor-pointer text-brand-text dark:text-slate-300 transition-all duration-300 hover:text-brand-purple"
            @click="selectedCategory = ''"
          >
            <span
              :class="[
                'inline-flex rounded px-2 py-1',
                !selectedCategory
                  ? 'bg-red-50 text-brand-accent font-semibold'
                  : '',
              ]"
            >
              All Products
            </span>
          </li>

          <li
            v-for="category in categories"
            :key="category"
            class="cursor-pointer text-brand-text dark:text-slate-300 transition-all duration-300 hover:text-brand-purple"
            @click="selectedCategory = category"
          >
            <span
              :class="[
                'inline-flex rounded px-2 py-1',
                selectedCategory === category
                  ? 'bg-red-50 text-brand-accent font-semibold'
                  : '',
              ]"
            >
              {{ category }}
            </span>
          </li>
        </ul>
      </aside>

      <!-- Products -->
      <div>
        <input
          v-model="search"
          placeholder="Search products..."
          class="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white rounded-lg px-4 py-3 focus:ring-2 focus:ring-brand-accent focus:outline-none mb-8 transition-colors duration-300"
        />

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </section>
</template>
