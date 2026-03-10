# Website Architecture Guidelines

## 1. Theme System Architecture

The website uses a shared theme composable (`src/composables/useTheme.ts`) with a module-level reactive state so all components read and write the same theme source of truth.

- Theme values are constrained to `"light"` and `"dark"`.
- The active theme is persisted in `localStorage` under the `theme` key.
- Theme application is performed by toggling the `dark` class on the `<html>` element.
- Theme initialization reads from storage first, then falls back to system preference, with a safe default of `dark` in non-browser contexts.

This architecture avoids duplicate theme logic across components and keeps behavior consistent.

## 2. Dark Mode Strategy

Dark mode is implemented with Tailwind `dark:` utilities and class-based activation on `<html>`.

- Components define dark styling at the utility level (for example, `bg-white dark:bg-slate-900`, `text-brand-primary dark:text-white`).
- No CSS variable theme system is introduced for dark mode switching.
- Existing color tokens and visual design remain unchanged.

This keeps dark mode behavior declarative and aligned with current component styles.

## 3. Vercel Deployment Architecture

The deployment pipeline follows a standard Vite static build.

- Build command: `npm run build`.
- Build script in `package.json`: `vite build`.
- Output directory: `dist`.
- Vercel routing behavior is configured in `vercel.json` using a catch-all rewrite.

Environment variables should be managed through Vercel Project Settings and consumed through Vite conventions (`import.meta.env`) as future features require runtime configuration.

## 4. SPA Routing on Vercel

The app uses Vue Router history mode (`createWebHistory()`), which requires host-level rewrites in static hosting environments.

- Direct browser requests to nested URLs (for example `/products`, `/about`, `/contact`) bypass the client router and hit the host first.
- Without rewrites, static hosting may return `404` because those paths do not map to physical files.
- The Vercel rewrite rule routes all requests to `/`, allowing the app shell to load and Vue Router to resolve the correct route client-side.

This prevents refresh and direct-link navigation failures.

## 5. Future SEO Implementation Plan

SEO is intentionally deferred and should be added in a dedicated phase.

Planned SEO architecture:

- Use `@vueuse/head` for declarative head management.
- Create a `useSeo` composable to centralize metadata patterns.
- Support dynamic page titles per route or page component.
- Add OpenGraph metadata for social sharing previews.
- Add JSON-LD structured data for rich search results.

When implemented, SEO logic should stay modular and avoid coupling to unrelated UI concerns.
