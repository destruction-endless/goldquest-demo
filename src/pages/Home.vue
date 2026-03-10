<script setup lang="ts">
  import heroImage from "../assets/hero-image/N-SIM-E-Super-Resolution.png";
  import nikon from "../assets/brands/nikon.png";
  import medica from "../assets/brands/medica.png";
  import kent from "../assets/brands/kent.png";
  import bioanalyse from "../assets/brands/bioanalyse.png";
  import labitec from "../assets/brands/labitec.png";
  import placeholder from "../assets/placeholders/product-placeholder.svg";
  import { products } from "../data/products";
  import ProductCard from "../components/products/ProductCard.vue";
  import { useScrollReveal } from "../composables/useScrollReveal";

  const categories = [
    { name: "Chemistry", image: placeholder },
    { name: "Hematology", image: placeholder },
    { name: "Microbiology", image: placeholder },
    { name: "Microscopes", image: placeholder },
    { name: "Immunology", image: placeholder },
    { name: "Coagulation", image: placeholder },
  ];

  const featuredProducts = products.slice(0, 3);
  const { setRevealRef } = useScrollReveal();
</script>

<template>
  <main>
    <!-- HERO -->
    <section
      :ref="setRevealRef"
      class="max-w-7xl mx-auto py-16 md:py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center rounded-[2rem] bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div>
        <h1
          class="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-primary dark:text-white mb-6"
        >
          Goldquest Biotechnologies
        </h1>

        <p class="text-brand-text dark:text-slate-300 max-w-xl">
          Supplier of laboratory equipment, reagents, and scientific instruments
          for hospitals, laboratories, and research institutions.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-sm">
          <div
            class="bg-white/80 dark:bg-slate-800/80 rounded-xl px-4 py-3 shadow"
          >
            <p class="font-semibold text-brand-primary dark:text-white">500+</p>
            <p class="text-brand-text dark:text-slate-300">
              Laboratories Served
            </p>
          </div>
          <div
            class="bg-white/80 dark:bg-slate-800/80 rounded-xl px-4 py-3 shadow"
          >
            <p class="font-semibold text-brand-primary dark:text-white">20+</p>
            <p class="text-brand-text dark:text-slate-300">Trusted Brands</p>
          </div>
          <div
            class="bg-white/80 dark:bg-slate-800/80 rounded-xl px-4 py-3 shadow"
          >
            <p class="font-semibold text-brand-primary dark:text-white">10+</p>
            <p class="text-brand-text dark:text-slate-300">
              Years Industry Experience
            </p>
          </div>
        </div>

        <router-link
          to="/products"
          class="inline-flex items-center justify-center w-full sm:w-auto mt-8 bg-brand-accent hover:bg-brand-purple text-white px-8 py-3 rounded-lg shadow transition duration-200 hover:scale-105"
        >
          Browse Products
        </router-link>
      </div>

      <!-- Image -->
      <div class="relative">
        <div
          class="absolute inset-6 -z-10 rounded-full bg-gradient-to-r from-brand-accent to-brand-purple blur-3xl opacity-30"
        ></div>
        <img :src="heroImage" class="relative rounded-xl shadow-lg w-full" />
      </div>
    </section>
    <!-- TRUSTED BRANDS -->
    <section
      :ref="setRevealRef"
      class="bg-white dark:bg-slate-900 py-16 md:py-20 transition-colors duration-300"
    >
      <div class="max-w-7xl mx-auto px-6">
        <h2
          class="text-center text-2xl font-semibold text-brand-primary dark:text-white mb-10"
        >
          Trusted Laboratory Brands
        </h2>

        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center opacity-80"
        >
          <img :src="nikon" class="mx-auto h-10" />
          <img :src="medica" class="mx-auto h-10" />
          <img :src="kent" class="mx-auto h-10" />
          <img :src="labitec" class="mx-auto h-10" />
          <img :src="bioanalyse" class="mx-auto h-10" />
        </div>
      </div>
    </section>
    <section :ref="setRevealRef" class="max-w-7xl mx-auto py-16 md:py-20 px-6">
      <h2
        class="text-3xl font-bold text-brand-primary dark:text-white text-center mb-12"
      >
        Product Categories
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div
          v-for="category in categories"
          :key="category.name"
          class="group bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
          <img
            :src="category.image"
            class="h-48 w-full object-cover bg-gray-100 dark:bg-slate-700 transition duration-300 group-hover:scale-105"
          />

          <div class="p-6 text-center">
            <h3
              class="font-semibold text-lg text-brand-primary dark:text-white"
            >
              {{ category.name }}
            </h3>

            <p class="text-xs text-gray-400 dark:text-slate-400 mt-1">
              Image placeholder
            </p>

            <router-link
              to="/products"
              class="text-sm text-brand-accent hover:text-brand-purple transition-colors duration-300"
            >
              View Products →
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section :ref="setRevealRef" class="max-w-7xl mx-auto py-16 md:py-20 px-6">
      <h2
        class="text-3xl font-bold text-brand-primary dark:text-white text-center mb-12"
      >
        Featured Products
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <ProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <div class="text-center mt-12">
        <router-link
          to="/products"
          class="inline-flex items-center justify-center w-full sm:w-auto bg-brand-primary hover:bg-brand-purple text-white px-8 py-3 rounded-lg shadow transition duration-200 hover:scale-105"
        >
          View All Products
        </router-link>
      </div>
    </section>
    <!-- WHY CHOOSE US -->

    <section
      :ref="setRevealRef"
      class="bg-white dark:bg-slate-900 py-16 md:py-20 transition-colors duration-300"
    >
      <div class="max-w-7xl mx-auto px-6">
        <h2
          class="text-3xl font-bold text-center text-brand-primary dark:text-white mb-12"
        >
          Why Choose Goldquest
        </h2>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 text-center"
        >
          <div
            class="bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
          >
            <div class="text-brand-accent text-4xl mb-4">🔬</div>
            <h3
              class="font-semibold text-lg text-brand-primary dark:text-white"
            >
              Laboratory Specialists
            </h3>
            <p class="text-gray-500 dark:text-slate-300 text-sm">
              Specialized equipment for clinical and research laboratories.
            </p>
          </div>

          <div
            class="bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
          >
            <div class="text-brand-accent text-4xl mb-4">🏥</div>
            <h3
              class="font-semibold text-lg text-brand-primary dark:text-white"
            >
              Hospital Solutions
            </h3>
            <p class="text-gray-500 dark:text-slate-300 text-sm">
              Reliable diagnostic solutions used in hospitals and labs.
            </p>
          </div>

          <div
            class="bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
          >
            <div class="text-brand-accent text-4xl mb-4">🧪</div>
            <h3
              class="font-semibold text-lg text-brand-primary dark:text-white"
            >
              Quality Reagents
            </h3>
            <p class="text-gray-500 dark:text-slate-300 text-sm">
              Trusted diagnostic reagents for accurate testing.
            </p>
          </div>

          <div
            class="bg-white dark:bg-slate-800 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6"
          >
            <div class="text-brand-accent text-4xl mb-4">🌏</div>
            <h3
              class="font-semibold text-lg text-brand-primary dark:text-white"
            >
              Global Brands
            </h3>
            <p class="text-gray-500 dark:text-slate-300 text-sm">
              Partnership with international laboratory equipment brands.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- CALL TO ACTION -->

    <section
      :ref="setRevealRef"
      class="bg-brand-primary dark:bg-slate-900 text-white py-16 md:py-20 transition-colors duration-300"
    >
      <div class="max-w-7xl mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Need Laboratory Equipment?</h2>

        <p class="mb-8 text-blue-100 dark:text-slate-300">
          Contact our team to request product information or quotations.
        </p>

        <router-link
          to="/contact"
          class="inline-flex items-center justify-center w-full sm:w-auto bg-brand-accent hover:bg-brand-purple px-8 py-3 rounded-lg shadow transition duration-200 hover:scale-105"
        >
          Contact Us
        </router-link>
      </div>
    </section>
  </main>
</template>
