# Personal Portfolio Website

> **Modern Frontend Developer Portfolio** built with Astro 5, TypeScript, and TailwindCSS v4

A responsive, theme-customizable personal portfolio website showcasing my skills as an Angular Frontend Developer. Built with modern web technologies and best practices to demonstrate technical proficiency and attention to detail.

## 🌟 Live Demo

Visit the live portfolio: https://www.alessandroincantalupo.com/

## 🎯 Project Purpose

This portfolio serves as a comprehensive showcase of my frontend development capabilities, featuring:

- **Technical Skills**: Angular, TypeScript, TailwindCSS, Astro
- **Professional Experience**: Current role as Custom Software Engineering Analyst at Accenture
- **Modern Web Standards**: Responsive design, accessibility, performance optimization - **LLM Friendly**: Optimized for AI discovery via `/llms.txt`
- **Code Quality**: Clean architecture, component-based design, type safety

## 🚀 Key Features

### 🎨 Dynamic Theme System

- **32 Professional Themes**: Including corporate, dark, light, cyberpunk, and more (powered by DaisyUI 5)
- **Real-time Theme Switching**: Instant preview with `localStorage` persistence and visual highlighting
- **Theme Persistence**: User preferences saved across sessions

### 🤖 LLM Optimization

- **AI-Ready**: Includes a [`/llms.txt`](/llms.txt) endpoint that serves a structured Markdown summary of my profile, skills, and experience for AI agents (ChatGPT, Perplexity, etc.).

### 📱 Responsive Design

- **Mobile-First Approach**: Optimized for all device sizes
- **Adaptive Navigation**: Collapsible sidebar for mobile, fixed sidebar for desktop
- **Touch-Friendly**: Optimized for mobile interactions

### ⚡ Performance Optimized

- **Astro 5 Framework**: Static site generation with island architecture and Content Layer
- **Optimized Images**: `astro:assets` for optimal format and sizing
- **Fast Loading**: Minimal JavaScript, efficient CSS via Tailwind v4 (Vite)

### 🎯 Professional Sections

- **Home**: Introduction and key highlights
- **CV/Resume**: Detailed experience, education, and skills (Data-driven via Content Collections)
- **Contacts**: Professional contact information
- **404 Page**: Custom error handling

## 🛠️ Technical Stack

| Technology      | Purpose               | Version  |
| --------------- | --------------------- | -------- |
| **Astro**       | Static Site Generator | ^5.16.15 |
| **TypeScript**  | Type Safety           | ^5.9.3   |
| **TailwindCSS** | Styling Framework     | ^4.1.18  |
| **DaisyUI**     | Component Library     | ^5.5.14  |
| **Node.js**     | Runtime               | v24.13.0 |
| **pnpm**        | Package Manager       | v10.28.2 |

## 📁 Project Architecture

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

## 🎨 Theme System Implementation

The theme system uses Tailwind v4 and DaisyUI 5, with custom logic for persistence:

```typescript
// ThemeSelector.astro
// Visual state management for 30+ themes
const updateVisualState = () => {
  const theme = localStorage.getItem('data-theme') || 'lofi';
  // ... applies active border styles dynamically
};
```

## 💼 Content Management

All professional content is managed via **Astro Content Collections** in `src/content/`, ensuring type safety and easy updates without touching code.

Example `src/content/experience/accenture.json`:

```json
{
  "title": "Custom Software Engineering Analyst",
  "subtitle": "Sep 2023 - Present | Accenture (Remote)",
  "description": "Contributing to a national-scale Angular 17+ project..."
}
```

## 🔧 Development Features

### Component Architecture

- **Astro Components**: Server-side rendering with minimal client JavaScript
- **TypeScript Integration**: Full type safety across the application
- **Modular Design**: Reusable, maintainable component structure

### SEO & Accessibility

- **Meta Tags**: Complete OpenGraph and Twitter Card support
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Responsive Images**: Optimized for all screen sizes
- **Robots.txt**: Configured for modern indexing

## 🚀 Getting Started

This project uses **Volta** to pin Node.js and pnpm versions automatically.

```bash
# Clone the repository
git clone https://github.com/Alessandro-Incantalupo/astro-personal-website

# Install dependencies (pnpm is enforced)
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 🎯 Skills Demonstrated

### Frontend Development

- ✅ **Modern Frameworks**: Astro 5, Angular ecosystem expertise
- ✅ **Styling**: TailwindCSS v4, DaisyUI 5
- ✅ **TypeScript**: Advanced type safety and Zod schemas
- ✅ **Performance**: Asset optimization, Island architecture

### Software Engineering

- ✅ **Architecture**: Content-driven architecture (Headless-like)
- ✅ **Code Quality**: Clean, maintainable code with Prettier
- ✅ **Version Control**: Git best practices
- ✅ **Tooling**: Volta for reproducible environments

## 🔗 Connect With Me

- **Email**: [alessandro.incantalupo@gmail.com](mailto:alessandro.incantalupo@gmail.com)
- **LinkedIn**: [Alessandro Incantalupo](https://www.linkedin.com/in/alessandro-incantalupo/)
- **GitHub**: [Alessandro-Incantalupo](https://github.com/Alessandro-Incantalupo)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

_Built with ❤️ by Alessandro Incantalupo | Frontend Developer_
