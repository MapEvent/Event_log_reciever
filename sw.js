const CACHE_NAME='acoustic-locator-v1';
const ASSETS=[
  '/detector.html',
  '/receiver.html',
  '/manifest.webmanifest',
  '/icon-192.png',
  '/icon-512.png'
];
self.addEventListener('install', e=>{ e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e=>{
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then(r=>r || fetch(e.request).then(resp=>{
    try{ if (e.request.url.startsWith(self.location.origin)) caches.open(CACHE_NAME).then(c=>c.put(e.request, resp.clone())); }catch(e){}
    return resp;
  }).catch(()=>caches.match('/detector.html'))));
});