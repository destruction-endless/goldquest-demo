import { nextTick, onBeforeUnmount, onMounted, watch } from "vue";
import type { ComponentPublicInstance } from "vue";
import { useRoute } from "vue-router";

type RevealTarget = Element | ComponentPublicInstance | null;

export function useScrollReveal() {
  const route = useRoute();
  const elements = new Set<HTMLElement>();
  let observer: IntersectionObserver | null = null;

  async function initializeObserver() {
    await nextTick();

    observer?.disconnect();

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
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
    observer?.observe(element);
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
