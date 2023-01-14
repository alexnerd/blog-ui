const cacheName = 'javanerd-cache-v0.0.1';
const resources = ['index.html', 'app.js', 'ViewLoader.js', 'Router.js', 'NavView.js', 'LogoView.js', 'FooterView.js',
                   'views/Post.js', 'views/ContactsView.js', 'views/AboutView.js',
                   'styles/style-footer.css', 'styles/style-last-articles.css', 'styles/style-logo.css', 'styles/style-nav.css',
                   'styles/style-not-found.css', 'styles/style-post-control.css', 'styles/style-post.css', 'styles/style.css'];

self.addEventListener('install', event => {
    console.log('install');
    self.skipWaiting();
    event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(resources)));
});

self.addEventListener('fetch', event => {
    console.log('fetch');
    const { request } = event;
    event.respondWith(caches.match(request).then(response => (response || fetch(request))));
});

self.addEventListener('activate', event => { 
    console.log('cleaning old caches');
    self.clients.claim();
    const staleCaches = caches.keys().then(keys => keys.filter(key => key !== cacheName).map(stale => caches.delete(stale)));
    event.waitUntil(staleCaches);
});