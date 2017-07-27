self.addEventListener('install', function(e) {
    let timeStamp = Date.now();
    e.waitUntil(
        caches.open('hazlo').then(function(cache) {
            return cache.addAll([
                    '/',
                    `/index.html?timestamp=${timeStamp}`,
                    `/index.html?homescreen=1?timestamp=${timeStamp}`,
                    `/?homescreen=1?timestamp=${timeStamp}`,
                    `/src/hazlo-app.html?timestamp=${timeStamp}`,
                    `/src/hazlo-dashboard-page.html?timestamp=${timeStamp}`,
                    `/src/hazlo-drawer.html?timestamp=${timeStamp}`,
                    `/src/hazlo-label-data.html?timestamp=${timeStamp}`,
                    `/src/hazlo-new-task-overlay.html?timestamp=${timeStamp}`,
                    `/src/hazlo-welcome-page.html?timestamp=${timeStamp}`,
                    `/src/shared-styles.html?timestamp=${timeStamp}`,
                ])
                .then(_ => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then(response => {
            return response || fetch(event.request);
        })
    );
});