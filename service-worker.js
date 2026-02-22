self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('ruqyah-cache').then(cache => {
      return cache.addAll(['index.html']);
    })
  );
});