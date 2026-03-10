import { onMounted, ref } from "vue";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const theme = ref<Theme>("dark");
let isInitialized = false;

function readStoredTheme(): Theme | null {
  if (typeof window === "undefined") {
    return null;
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return null;
}

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = readStoredTheme();

  if (storedTheme) {
    return storedTheme;
  }

  if (typeof window.matchMedia !== "function") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(nextTheme: Theme) {
  theme.value = nextTheme;

  if (typeof document !== "undefined") {
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }

  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
  }
}

function initializeTheme() {
  if (isInitialized) {
    return;
  }

  isInitialized = true;
  applyTheme(getPreferredTheme());
}

function toggleTheme() {
  applyTheme(theme.value === "dark" ? "light" : "dark");
}

export function useTheme() {
  onMounted(() => {
    initializeTheme();
  });

  return {
    theme,
    toggleTheme,
  };
}
