# Goldquest Biotechnologies — Demo Website

This repository contains a **demo website** developed to showcase the proposed design and architecture for the Goldquest Biotechnologies website.

The project demonstrates how a modern laboratory equipment supplier website could be structured using a modern frontend stack.

The goal of this demo is to present:

• a clean product catalog layout
• responsive design for desktop and mobile
• light and dark theme support
• modern UI/UX interactions
• a scalable frontend architecture

This repository is intended as a **technical prototype and design reference**, not the final production system.

---

# Demo Features

The demo currently includes:

- Homepage with product highlights
- Product catalog page with categories
- Contact page
- Responsive layout
- Light / Dark theme toggle
- Smooth page transitions
- Scroll-based section reveal animations
- Floating "Request Quote" call-to-action
- SPA routing with refresh protection

---

# Technology Stack

The demo is built using modern frontend technologies:

- **Vue 3**
- **Vite**
- **Tailwind CSS (v4)**
- **Vue Router**
- **TypeScript**
- **Vercel** for deployment

---

# Architecture Highlights

The project demonstrates a modular architecture designed for scalability:

### Theme System

A composable-based theme system:

- dark/light theme stored in `localStorage`
- `<html>` class toggle (`dark`)
- Tailwind `dark:` utilities for styling

### Deployment Ready

The project is configured for deployment on **Vercel** with SPA routing support.

A rewrite rule ensures pages like:

```
/products
/about
/contact
```

load correctly when refreshed.

### Component-Based Design

The UI is organized using reusable Vue components:

```
components/
  layout/
  products/
pages/
composables/
```

---

# Future Enhancements

The demo focuses on UI and architecture.

Future production features may include:

- full SEO implementation
- dynamic product data from a backend
- CMS integration
- product detail pages
- analytics integration

---

# Deployment

This demo is designed to be deployed using **Vercel**.

Build command:

```
npm run build
```

Output directory:

```
dist
```

---

# Purpose of This Repository

This repository serves as:

• a **design prototype**
• a **technical architecture reference**
• a **foundation for future development**

It demonstrates how the Goldquest Biotechnologies website could be implemented using modern web technologies.

---
