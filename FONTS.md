# Font Loading Strategy & Performance

This document explains the "Expert" font loading strategy implemented to achieve a 100/100 Lighthouse Performance score while maintaining excellent typography.

## 1. The Strategy: "Local + Preload + Swap"

We have moved away from the default `@fontsource` import (which is blocking and uses `font-display: swap` by default with no control) to a manually optimized approach.

### Key Components

1.  **Local Files (`public/fonts/`)**:
    - We copied the specific Latin font subsets (`.woff2`) to `public/fonts/`.
    - **Why?** This gives us a stable, predictable URL (e.g., `/fonts/poppins-latin-400-normal.woff2`) that we can reference in both CSS and HTML.

2.  **Preloading (`BaseHead.astro`)**:
    - We use `<link rel="preload" as="font" ...>` tags in the `<head>`.
    - **Why?** This forces the browser to download the font files **immediately** (High Priority), before it even parses the CSS.
    - **Result:** By the time the browser calculates the layout, the font is usually already available.

3.  **`font-display: swap` (vs `optional`)**:
    - **`swap`**: The browser gives the font an infinite "swap period". If the font takes 2 seconds to load, it shows the system font for 2 seconds, then "swaps" to Poppins.
      - _Pros:_ User always sees the custom font.
      - _Cons:_ Can cause a "Flash of Unstyled Text" (FOUT) and Layout Shift (CLS) if not preloaded.
    - **`optional`**: The browser gives the font a tiny deadline (e.g., 100ms). If it's not ready, it uses the system font **forever** for that page view.
      - _Pros:_ Zero Layout Shift. Perfect Performance Score.
      - _Cons:_ On slow connections, the user might see Arial instead of Poppins.
    - **Our Choice:** We use **`font-display: swap`** combined with **Preloading**.
      - Preloading makes the font load so fast that it effectively behaves like `optional` (no flash), but `swap` ensures that if the connection _is_ slow, the user still gets the correct design eventually.

## 2. Implementation Details

### `src/styles/global.css`

Instead of `@import`, we manually define `@font-face`:

```css
@font-face {
  font-family: 'Poppins';
  src: url('/fonts/poppins-latin-400-normal.woff2') format('woff2');
  font-display: swap; /* Ensures font appears */
  unicode-range: U+0000-00FF...; /* Only download Latin chars */
}
```

### `src/components/layout/BaseHead.astro`

We preload the fonts to make `swap` purely a fallback safety net:

```html
<link
  rel="preload"
  href="/fonts/poppins-latin-400-normal.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>
```
