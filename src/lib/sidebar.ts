import { navigate } from 'astro:transitions/client';

const ACTIVE_CLASS = 'bg-base-300';
const SELECTOR = '.sidebar-nav-list a'; // Safe class selector

function updateActiveLink(path: string | null = null) {
  const currentPath = path || window.location.pathname;
  const menuItems = document.querySelectorAll(SELECTOR);

  menuItems.forEach(item => {
    const link = item as HTMLAnchorElement;
    link.classList.remove(ACTIVE_CLASS);

    const href = link.getAttribute('href');
    // Logic: Exact match or Subpath match (for nested routes)
    if (href && (href === currentPath || (href !== '/' && currentPath.startsWith(href)))) {
      link.classList.add(ACTIVE_CLASS);
    }
    // Explicit Home Check
    if (href === '/' && currentPath === '/') {
      link.classList.add(ACTIVE_CLASS);
    }
  });
}

function initSidebarLogic() {
  const menu = document.querySelector('.sidebar-nav-list');
  if (menu) {
    menu.addEventListener('click', e => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      if (link && menu.contains(link)) {
        e.preventDefault(); // Stop Astro/Browser
        const href = link.getAttribute('href');
        if (href) {
          // 1. Optimistic UI Update (Instant)
          updateActiveLink(href);
          // 2. Trigger Navigation Manually
          navigate(href);
        }
      }
    });

    // Initial check on load
    updateActiveLink(null);
  }
}

// Initialize on View Transitions
document.addEventListener('astro:page-load', () => {
  initSidebarLogic();
});

// Also run once immediately for initial hydration if needed (though page-load covers most cases)
// But to be safe against timing issues:
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  // Check if we are in a context where page-load might have missed or hasn't fired yet
  // Actually, 'astro:page-load' is robust. Just relying on it is usually safer for avoiding double-binding.
  // However, if the script loads late, we might want to run updateActiveLink once.
  updateActiveLink(null);
}
