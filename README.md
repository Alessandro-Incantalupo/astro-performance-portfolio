# Angular Frontend Engineer — Personal Portfolio

> Lighthouse 100/100 across Performance, Accessibility, Best Practices, and SEO. Built with Astro 5, TailwindCSS v4, and a 32-theme design system. Includes `/llms.txt` for AI agent discovery and PostHog analytics.

## Live Site

[www.alessandroincantalupo.com](https://www.alessandroincantalupo.com/)

## Stack & Architectural Decisions

| Technology | Purpose | Decision |
|---|---|---|
| **Astro 5** | Static site generator | Island architecture — JS ships only to interactive components, everything else is zero-JS HTML |
| **TailwindCSS v4** | Styling | Vite-native CSS pipeline — no PostCSS overhead, faster builds |
| **DaisyUI 5** | Component + theme library | 32 pre-built themes via CSS custom properties — design system switching at runtime via a single `data-theme` attribute |
| **Astro Content Collections** | Data layer | Type-safe JSON content with Zod schema — CV data updated without touching component code |
| **PostHog** | Analytics | Self-hostable, privacy-respecting pageview tracking |
| **`/llms.txt`** | AI discoverability | Structured Markdown summary of skills/experience served to AI agents (ChatGPT, Perplexity, etc.) |

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
| Lighthouse 100/100 — Performance, Accessibility, Best Practices, SEO | Live: [www.alessandroincantalupo.com](https://www.alessandroincantalupo.com/) |
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

