import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import Products from "../pages/Products.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/product/:id", component: ProductDetail },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
