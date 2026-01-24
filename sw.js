const CACHE_NAME = 'biblio-spirit-v1';
const ASSETS = [
  'test5.html',
  'recherche2.html',
  'manifest.json'
];

// Installation du service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
  );
});

// Stratégie de cache : Network First (on veut toujours la version fraîche si possible)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
