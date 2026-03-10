<script setup lang="ts">
  import { useRoute } from "vue-router";
  import { products } from "../data/products";

  const route = useRoute();

  const product = products.find((p) => p.id === Number(route.params.id));
</script>

<template>
  <div v-if="product" class="container mx-auto py-12">
    <div class="grid md:grid-cols-2 gap-10">
      <img :src="product.image" class="rounded shadow" />

      <div>
        <h1 class="text-3xl font-bold mb-4">
          {{ product.name }}
        </h1>

        <p class="text-gray-600 mb-6">
          {{ product.description }}
        </p>

        <button class="bg-blue-700 text-white px-6 py-3 rounded">
          Request Quote
        </button>
      </div>
    </div>
  </div>
</template>
