# Personal Portfolio Website

> **Modern Frontend Developer Portfolio** built with Astro, TypeScript, and TailwindCSS

A responsive, theme-customizable personal portfolio website showcasing my skills as an Angular Frontend Developer. Built with modern web technologies and best practices to demonstrate technical proficiency and attention to detail.

## 🌟 Live Demo

Visit the live portfolio: https://www.alessandroincantalupo.com/

## 🎯 Project Purpose

This portfolio serves as a comprehensive showcase of my frontend development capabilities, featuring:

- **Technical Skills**: Angular, TypeScript, TailwindCSS, Astro
- **Professional Experience**: Current role as Custom Software Engineering Analyst at Accenture
- **Modern Web Standards**: Responsive design, accessibility, performance optimization
- **Code Quality**: Clean architecture, component-based design, type safety

## 🚀 Key Features

### 🎨 Dynamic Theme System

- **30+ Professional Themes**: Including corporate, dark, light, cyberpunk, and more
- **Real-time Theme Switching**: Instant preview with localStorage persistence
- **Theme Persistence**: User preferences saved across sessions

### 📱 Responsive Design

- **Mobile-First Approach**: Optimized for all device sizes
- **Adaptive Navigation**: Collapsible sidebar for mobile, fixed sidebar for desktop
- **Touch-Friendly**: Optimized for mobile interactions

### ⚡ Performance Optimized

- **Astro Framework**: Static site generation with island architecture
- **Optimized Images**: WebP format with proper sizing
- **Fast Loading**: Minimal JavaScript, efficient CSS

### 🎯 Professional Sections

- **Home**: Introduction and key highlights
- **CV/Resume**: Detailed experience, education, and skills
- **Contacts**: Professional contact information
- **404 Page**: Custom error handling

## 🛠️ Technical Stack

| Technology           | Purpose               | Version  |
| -------------------- | --------------------- | -------- |
| **Astro**            | Static Site Generator | ^4.3.2   |
| **TypeScript**       | Type Safety           | ^5.3.3   |
| **TailwindCSS**      | Styling Framework     | ^3.4.1   |
| **DaisyUI**          | Component Library     | ^4.6.1   |
| **View Transitions** | Smooth Navigation     | Built-in |

## 📁 Project Architecture

```
src/
├── components/           # Reusable UI components
│   ├── BaseHead.astro   # SEO and theme management
│   ├── Header.astro     # Navigation header
│   ├── SideBar.astro    # Navigation sidebar
│   ├── ThemeSelector.astro  # Theme switching component
│   ├── CV/              # CV-specific components
│   └── SidebarFooter/   # Social media icons
├── layouts/
│   └── BaseLayout.astro # Main layout template
├── pages/               # Route pages
│   ├── index.astro      # Home page
│   ├── cv.astro         # Resume/CV page
│   ├── contacts.astro   # Contact information
│   └── 404.astro        # Error page
├── config.ts            # Site configuration and content
└── env.d.ts            # TypeScript declarations
```

## 🎨 Theme System Implementation

The theme system demonstrates advanced frontend skills:

```typescript
// Dynamic theme switching with localStorage persistence
function updateTheme(doc: Document, newTheme: string) {
  const htmlElement = doc.querySelector('html');
  if (htmlElement) {
    htmlElement.setAttribute('data-theme', newTheme);
  }
  window.localStorage.setItem('data-theme', newTheme);
}
```

Features 30+ carefully curated themes from DaisyUI, each with:

- Consistent color schemes
- Professional appearance
- Accessibility compliance
- Real-time preview

## 💼 Professional Content Management

All content is centrally managed in [`config.ts`](src/config.ts), showcasing:

```typescript
export const cv_texts = {
  profile: {
    /* Professional summary */
  },
  experience: {
    /* Detailed work history */
  },
  education: {
    /* Academic background */
  },
  skills: {
    /* Technical competencies */
  }
};
```

## 🔧 Development Features

### Component Architecture

- **Astro Components**: Server-side rendering with minimal client JavaScript
- **TypeScript Integration**: Full type safety across the application
- **Modular Design**: Reusable, maintainable component structure

### Performance Optimizations

- **Static Generation**: Pre-built HTML for fast loading
- **Image Optimization**: WebP format with responsive sizing
- **Minimal JavaScript**: Only essential client-side code

### SEO & Accessibility

- **Meta Tags**: Complete OpenGraph and Twitter Card support
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Responsive Images**: Optimized for all screen sizes

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Alessandro-Incantalupo/astro-personal-website

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Skills Demonstrated

### Frontend Development

- ✅ **Modern Frameworks**: Astro, Angular experience
- ✅ **Styling**: TailwindCSS, responsive design
- ✅ **TypeScript**: Advanced type safety
- ✅ **Performance**: Optimization techniques

### Software Engineering

- ✅ **Architecture**: Component-based design
- ✅ **Code Quality**: Clean, maintainable code
- ✅ **Version Control**: Git best practices
- ✅ **Documentation**: Comprehensive README

### UI/UX Design

- ✅ **Responsive Design**: Mobile-first approach
- ✅ **Accessibility**: WCAG compliance
- ✅ **User Experience**: Intuitive navigation
- ✅ **Visual Design**: Professional appearance

## 🔗 Connect With Me

- **Email**: [alessandro.incantalupo@gmail.com](mailto:alessandro.incantalupo@gmail.com)
- **LinkedIn**: [Alessandro Incantalupo](https://www.linkedin.com/in/alessandro-incantalupo/)
- **GitHub**: [Alessandro-Incantalupo](https://github.com/Alessandro-Incantalupo)

## 🚀 Future Roadmap

- **Vue.js Integration**: Planning to learn Vue 3 and Composition API
- **Full-Stack Expansion**: Exploring Node.js and modern backend technologies
- **Advanced Animations**: Implementing GSAP and Framer Motion for enhanced UX

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

_Built with ❤️ by Alessandro Incantalupo | Frontend Developer_
