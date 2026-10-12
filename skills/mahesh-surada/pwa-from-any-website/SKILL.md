---
name: pwa-from-any-website
description: Turn any static website or single HTML app into an installable, offline-capable Progressive Web App (manifest, service worker, icons, iOS Add to Home Screen). Use when someone asks to "make my website an app", "add to home screen", "work offline" or "install button" for a plain HTML/CSS/JS site.
---

# PWA from any website

Make an existing static site installable on Android, iPhone and desktop, and usable offline, without changing how it looks or behaves.

## When to use
- The user has an HTML/CSS/JS site (often a single `index.html`) and wants it "like an app".
- The site is hosted on HTTPS (GitHub Pages, Netlify, Hostinger and so on). Service workers do not run on `file://`.

## Steps

1. **Inventory first.** Find the entry page(s), any data files the page fetches (`fetch('data/x.json')`), and third-party CDNs. Decide which must be fresh (pages, data) and which can be cached (CDN libraries, icons).

2. **Icons.** Generate `icons/icon-192.png`, `icons/icon-512.png`, `icons/maskable-512.png` (artwork inside the central 80% safe zone, solid background) and `icons/apple-touch-icon.png` (180×180, no transparency). Python Pillow is enough. Keep them visually consistent with the site's main colour.

3. **`manifest.webmanifest`** next to `index.html`:
   ```json
   { "name": "Full App Name", "short_name": "Short", "start_url": "./", "scope": "./", "id": "./",
     "display": "standalone", "background_color": "#0b2545", "theme_color": "#0b2545",
     "icons": [
       {"src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png"},
       {"src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png"},
       {"src": "icons/maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"} ] }
   ```
   Use relative paths (`./`) so it works in a GitHub Pages sub-folder.

4. **Head tags** (add, don't replace existing ones):
   ```html
   <link rel="manifest" href="manifest.webmanifest">
   <meta name="theme-color" content="#0b2545">
   <link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
   <meta name="apple-mobile-web-app-capable" content="yes">
   <meta name="mobile-web-app-capable" content="yes">
   <meta name="apple-mobile-web-app-title" content="Short">
   ```

5. **`sw.js`: network-first for your own files, cache-first for CDNs.** Network-first means users always get the newest version when online and the cached copy only offline. Never cache API calls that return private or live data.
   ```js
   const CACHE = 'app-v1';                       // bump on every release
   const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png'];
   self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())));
   self.addEventListener('activate', e => e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim())));
   self.addEventListener('fetch', e => {
     const req = e.request; if (req.method !== 'GET') return;
     const sameOrigin = new URL(req.url).origin === location.origin;
     if (sameOrigin) e.respondWith(fetch(req).then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(req, c)); } return r; })
       .catch(() => caches.match(req, {ignoreSearch: true}).then(r => r || (req.mode === 'navigate' ? caches.match('index.html') : undefined))));
     else e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const c = res.clone(); caches.open(CACHE).then(x => x.put(req, c)); return res; })));
   });
   ```
   Register it just before `</body>`: `if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js');`

6. **Install button.** Listen for `beforeinstallprompt` (Android/desktop Chrome), keep the event, show your own "Install app" button that calls `prompt()`. iPhone Safari has no such event: detect iOS and show a small sheet: Share → Add to Home Screen → Add. Hide both when `matchMedia('(display-mode: standalone)').matches`.

7. **Verify.** Serve locally (`python3 -m http.server`), open DevTools → Application: manifest has no errors, service worker is activated, reload while offline still works. On GitHub Pages remember the site lives under `/<repo>/`, which is why every path is relative.

## Pitfalls
- A cached old `index.html` hides new releases: always network-first for pages and bump `CACHE`.
- `[hidden]` elements re-shown by CSS `display:` rules: add `[hidden]{display:none!important}`.
- Big sites: do not pre-cache everything; let the runtime cache fill as pages are visited.
