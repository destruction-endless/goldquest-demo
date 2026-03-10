<script setup lang="ts"></script>

<template>
  <footer
    class="bg-brand-primary dark:bg-slate-950 text-white transition-colors duration-300"
  >
    <div
      class="max-w-7xl mx-auto px-6 py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10"
    >
      <!-- Company Info -->

      <div>
        <h3 class="text-lg font-semibold mb-4">Goldquest Biotechnologies</h3>

        <p class="text-blue-100 dark:text-slate-300 text-sm leading-relaxed">
          Supplier of laboratory equipment, diagnostic reagents, and scientific
          instruments for hospitals, laboratories, and research institutions.
        </p>
      </div>

      <!-- Quick Links -->

      <div>
        <h3 class="text-lg font-semibold mb-4">Quick Links</h3>

        <ul class="space-y-2 text-sm text-blue-100 dark:text-slate-300">
          <li>
            <router-link
              to="/"
              class="transition-colors duration-200 hover:text-white"
            >
              Home
            </router-link>
          </li>

          <li>
            <router-link
              to="/products"
              class="transition-colors duration-200 hover:text-white"
            >
              Products
            </router-link>
          </li>

          <li>
            <router-link
              to="/about"
              class="transition-colors duration-200 hover:text-white"
            >
              About
            </router-link>
          </li>

          <li>
            <router-link
              to="/contact"
              class="transition-colors duration-200 hover:text-white"
            >
              Contact
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Product Categories -->

      <div>
        <h3 class="text-lg font-semibold mb-4">Product Categories</h3>

        <ul class="space-y-2 text-sm text-blue-100 dark:text-slate-300">
          <li>Chemistry</li>
          <li>Hematology</li>
          <li>Microbiology</li>
          <li>Microscopes</li>
          <li>Immunology</li>
          <li>Coagulation</li>
        </ul>
      </div>

      <!-- Contact Info -->

      <div>
        <h3 class="text-lg font-semibold mb-4">Contact</h3>

        <ul class="space-y-2 text-sm text-blue-100 dark:text-slate-300">
          <li>Email: info@goldquestbio.com</li>

          <li>Phone: +63 XXX XXX XXXX</li>

          <li>Metro Manila, Philippines</li>
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->

    <div class="border-t border-blue-400/30 dark:border-slate-700">
      <div
        class="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-blue-200 dark:text-slate-400"
      >
        <p>© 2026 Goldquest Biotechnologies Inc.</p>

        <div class="flex gap-6 mt-3 md:mt-0">
          <router-link
            to="/"
            class="transition-colors duration-200 hover:text-white"
          >
            Home
          </router-link>

          <router-link
            to="/products"
            class="transition-colors duration-200 hover:text-white"
          >
            Products
          </router-link>

          <router-link
            to="/contact"
            class="transition-colors duration-200 hover:text-white"
          >
            Contact
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
