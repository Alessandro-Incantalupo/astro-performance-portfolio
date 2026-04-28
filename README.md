# Angular Frontend Engineer — Personal Portfolio

> Lighthouse 100/100 across Performance, Accessibility, Best Practices, and SEO. Built with Astro 5, TailwindCSS v4, and a 32-theme design system. Includes `/llms.txt` for AI agent discovery and PostHog analytics.

## Live Site

[alessandroincantalupo.com](https://www.alessandroincantalupo.com/)

## What It Does

A personal portfolio site serving as a live performance benchmark. Every architectural choice is made to demonstrate what a frontend engineer who cares about production quality actually ships: Lighthouse 100/100, island architecture with minimal JS hydration, a 32-theme design system with `localStorage` persistence, and structured content managed via Astro Content Collections.

## Why I Built It (And Why Astro, Not Angular)

Angular owns my production work — but it ships JavaScript. For a static portfolio I wanted zero framework overhead and a Lighthouse 100/100 I could prove with a link. Astro's island architecture lets me ship near-zero JS by default and opt into interactivity only where needed (the theme switcher). The result is a site that loads faster than any Angular SPA ever will, and demonstrates I understand when not to reach for Angular.

## Stack & Architectural Decisions

| Technology | Purpose | Decision |
|---|---|---|
| **Astro 5** | Static site generator | Island architecture — JS ships only to interactive components, everything else is zero-JS HTML |
| **TailwindCSS v4** | Styling | Vite-native CSS pipeline — no PostCSS overhead, faster builds |
| **DaisyUI 5** | Component + theme library | 32 pre-built themes via CSS custom properties — design system switching at runtime via a single `data-theme` attribute |
| **Astro Content Collections** | Data layer | Type-safe JSON content with Zod schema — CV data updated without touching component code |
| **PostHog** | Analytics | Self-hostable, privacy-respecting pageview tracking |
| **`/llms.txt`** | AI discoverability | Structured Markdown summary of skills/experience served to AI agents (ChatGPT, Perplexity, etc.) |

**Why Content Collections over hardcoded data**: Work history, skills, and education live in `src/content/` as typed JSON. Adding a new job entry is a data change, not a code change. Same pattern scales to a CMS without touching any component.

**Why 32 themes**: DaisyUI's `data-theme` attribute system switches the entire design system at runtime via a single attribute on `<html>`. The implementation is ~40 lines of vanilla JS with `localStorage` persistence across sessions.

## Screenshot

<!-- Add a screenshot here: open the live site, enable Lighthouse 100 panel + theme switcher -->
![Lighthouse 100/100 score and theme switcher](./docs/screenshot.png)

## Getting Started

```bash
git clone https://github.com/Alessandro-Incantalupo/astro-performance-portfolio
pnpm install
pnpm run dev      # http://localhost:4321
pnpm run build
pnpm run preview
```

## What This Demonstrates

| Skill | Where |
|---|---|
| Lighthouse 100/100 — Performance, Accessibility, Best Practices, SEO | Live: [alessandroincantalupo.com](https://www.alessandroincantalupo.com/) |
| Astro 5 island architecture — minimal JS hydration | `src/components/ThemeSelector.astro` |
| Content-driven architecture via Astro Content Collections | `src/content/`, `content.config.ts` |
| TailwindCSS v4 — Vite-native CSS pipeline | `src/styles/global.css` |
| 32-theme design system with `localStorage` persistence | `src/components/ThemeSelector.astro` |
| `/llms.txt` endpoint — AI agent discoverability | `src/pages/llms.txt.ts` |
| PostHog analytics integration | `src/components/BaseHead.astro` |
| TypeScript + Zod schema validation on content | `content.config.ts` |
| SEO — OpenGraph, Twitter Cards, robots.txt, sitemap | `src/components/BaseHead.astro` |

## Project Architecture

```
src/
├── components/           # Reusable UI components
│   ├── BaseHead.astro    # SEO and metadata
│   ├── Header.astro      # Navigation header
│   ├── SideBar.astro     # Navigation sidebar
│   ├── ThemeSelector.astro # Theme switching logic
│   └── ...
├── content/              # Content Collections (Data Layer)
│   ├── education/        # JSON data for education
│   ├── experience/       # JSON data for work history
│   ├── home/             # Landing page content
│   ├── profile/          # Profile summary
│   └── skills/           # Technical skills list
├── layouts/
│   └── BaseLayout.astro  # Main layout template
├── pages/                # Route pages
│   ├── index.astro       # Home page
│   ├── cv.astro          # Resume/CV page
│   ├── llms.txt.ts       # Dynamic AI-crawler endpoint
│   └── ...
├── styles/
│   └── global.css        # Tailwind v4 & DaisyUI configuration
└── content.config.ts     # Content Collections schema definition
```

## Technical Stack

| Technology      | Purpose               | Version  |
| --------------- | --------------------- | -------- |
| **Astro**       | Static Site Generator | ^5.16.15 |
| **TypeScript**  | Type Safety           | ^5.9.3   |
| **TailwindCSS** | Styling Framework     | ^4.1.18  |
| **DaisyUI**     | Component Library     | ^5.5.14  |
| **Node.js**     | Runtime               | v24.13.0 |
| **pnpm**        | Package Manager       | v10.28.2 |

## Connect

- **Email**: [alessandro.incantalupo@gmail.com](mailto:alessandro.incantalupo@gmail.com)
- **LinkedIn**: [Alessandro Incantalupo](https://www.linkedin.com/in/alessandro-incantalupo/)
- **GitHub**: [Alessandro-Incantalupo](https://github.com/Alessandro-Incantalupo)
