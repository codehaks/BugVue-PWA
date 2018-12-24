self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            return cache.addAll([
                '/lib/twitter-bootstrap/css/bootstrap.min.css',
                '/lib/twitter-bootstrap/css/bootstrap-theme.min.css',
                '/lib/toastr.js/toastr.css',
                '/lib/jquery/jquery.min.js',
                '/lib/twitter-bootstrap/js/bootstrap.min.js',
                '/lib/toastr.js/toastr.min.js',
                '/lib/vue/vue.min.js',
                '/lib/localforage/localforage.js',
                '/bug',
                '/'
            ]);
        })
    );
});


self.addEventListener('fetch', function (event) {
    console.log('[Service Worker] Fetching something ....', event);
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match(event.request);
        })
    );
});

self.addEventListener('activate', function (event) {
    console.log('[Service Worker] Activating Service Worker ...', event);
    return self.clients.claim();
});