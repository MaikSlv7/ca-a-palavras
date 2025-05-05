self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("caca-palavras-cache").then(function(cache) {
      return cache.addAll([
        "/ca-a-palavras/",
        "/ca-a-palavras/index.html",
        "/ca-a-palavras/manifest.json"
      ]);
    })
  );
});
self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});