

self.addEventListener('activate', event => {
  console.log('Activating new service worker...');

  const cacheWhitelist = ["taskplanner"];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});


self.addEventListener('install', event => {
  console.log('Attempting to install service worker and cache static assets');
  event.waitUntil(
    caches.open("taskplanner")
    .then(cache => {
      return cache.addAll([
        '/index.html'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {

    console.log(event.request.url);
    
    event.respondWith(
    
    caches.match(event.request).then(function(response) {
    
    return response || fetch(event.request);
    
    })
    
    );
    
    });
   