# Architecture: Hybrid Persistent Navigation

This document explains the custom navigation architecture implemented to achieve an "App-like" feel in this Astro Static Site (SSG).

## The Challenge

Static Sites (SSG) typically reload the entire page on navigation. While Astro's View Transitions API (`<ClientRouter />`) allows for smooth animations, it re-renders the DOM. This caused two main issues:

1.  **Sidebar Flashing**: The sidebar background would briefly disappear or "blink" during the swap.
2.  **State Lag**: The active menu highlight would only update _after_ the new page finished loading.

## The Solution: "Hybrid Persistence"

We implemented a strategy that combines **DOM Persistence** with **Manual State Management**.

### 1. Persistent Shell (`SideBar.astro`)

We use `transition:persist` on the `<aside>` element.

- **Effect**: The Sidebar DOM element is **never destroyed**. It is preserved exactly as-is when navigating between pages.
- **Benefit**: This guarantees **Zero Flashing** because the pixels never change.
- **Trade-off**: Since the HTML is not replaced, the "Active Link" class (which is usually calculated by the server) **does not update automatically**.

### 2. Custom Navigation Controller (`SideBarMenu.astro`)

To fix the "State Lag" and the "Non-updating Active Link", we take full control of the navigation process using a custom client-side script.

#### A. Optimistic UI Updates (Click Handler)

When a user clicks a menu link:

1.  **Intercept**: We call `e.preventDefault()` to stop the browser's default navigation.
2.  **Update Instantly**: We immediately move the active class (`bg-base-300`) to the clicked link. This happens in ~1ms, providing instant feedback (Optimistic UI).
3.  **Navigate**: We manually trigger the router using `active.navigate(href)`.

#### B. State Synchronization (Back Button)

Because the sidebar is persistent, hitting the Browser "Back" button would normally leave the wrong link highlighted (e.g., URL is `/`, but Sidebar works says `/cv`).

- **Fix**: We listen for the `astro:page-load` event.
- **Logic**: On every load (initial or history), the script checks `window.location.pathname` and forcibly corrects the active link class to match reality.

### 3. Transition Optimization

- **Prefetching**: Links use `data-astro-prefetch="viewport"` to download pages as soon as they appear, reducing network latency.
- **Transition Lock**: A global script in `BaseHead.astro` prevents CSS theme transitions from firing during the crucial swap phase, preventing "Dark Mode Flashes".

## Stability & Performance Assessment

### Performance

- **Impact**: **Positive**.
- The Optimistic UI update masking the network latency makes the site feel significantly faster to perception (perceived performance).
- Persistence prevents unnecessary DOM destruction/re-creation of the sidebar.

### Security

- **Impact**: **Neutral**.
- The `preventDefault` pattern is standard in Single Page Applications (SPAs).
- No user input involves; strictly internal navigation logic.

### Stability

- **Impact**: **Stable**.
- The fallback mechanism (`astro:page-load`) ensures that even if state drifts (e.g., via Back button), it self-corrects immediately.
- **Browser Compatibility**: View Transitions gracefully fall back to normal page loads in older browsers. Our script checks for element existence (`if (menu)`) to avoid errors.
