import { nextTick, onBeforeUnmount, onMounted, watch } from "vue";
import type { ComponentPublicInstance } from "vue";
import { useRoute } from "vue-router";

type RevealTarget = Element | ComponentPublicInstance | null;

export function useScrollReveal() {
  const route = useRoute();
  const elements = new Set<HTMLElement>();
  let observer: IntersectionObserver | null = null;

  function isInViewport(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    return rect.top < viewportHeight && rect.bottom > 0;
  }

  function revealElement(element: HTMLElement) {
    element.classList.add("is-visible");
    observer?.unobserve(element);
  }

  function revealVisibleElements() {
    elements.forEach((element) => {
      if (isInViewport(element)) {
        revealElement(element);
      }
    });
  }

  async function initializeObserver() {
    await nextTick();

    observer?.disconnect();

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("is-visible");
      });
      observer = null;
      return;
    }

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target as HTMLElement);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    elements.forEach((element) => {
      observer?.observe(element);
    });

    // Ensure elements already in view are visible even if observer callback is delayed.
    revealVisibleElements();
  }

  function resolveElement(target: RevealTarget) {
    if (target instanceof HTMLElement) {
      return target;
    }

    if (target && "$el" in target && target.$el instanceof HTMLElement) {
      return target.$el;
    }

    return null;
  }

  function setRevealRef(target: RevealTarget) {
    const element = resolveElement(target);

    if (!element || elements.has(element)) {
      return;
    }

    element.classList.add("reveal-section");
    elements.add(element);

    if (!("IntersectionObserver" in window)) {
      element.classList.add("is-visible");
      return;
    }

    observer?.observe(element);

    if (isInViewport(element)) {
      revealElement(element);
    }
  }

  onMounted(() => {
    void initializeObserver();
  });

  watch(
    () => route.path,
    () => {
      void initializeObserver();
    },
    {
      flush: "post",
    },
  );

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  return {
    setRevealRef,
  };
}
