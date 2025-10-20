const CACHE_NAME = 'quickpdftools-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/ads.js',
  '/manifest.json',
  '/favicon_io/apple-touch-icon.png',
  '/favicon_io/favicon-96x96.png',
  '/favicon_io/favicon.ico',
  '/favicon_io/favicon.svg',
  '/favicon_io/site.webmanifest',
  '/favicon_io/web-app-manifest-192x192.png',
  '/favicon_io/web-app-manifest-512x512.png',
  '/tools/merge.html',
  '/tools/compress.html',
  '/tools/img2pdf.html',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});