// Minimal no-op service worker to avoid 404s during development.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

// Pass-through fetch handler (no caching). Keeps behavior identical to network.
self.addEventListener('fetch', () => {
  // Intentionally empty — acts as a placeholder.
});