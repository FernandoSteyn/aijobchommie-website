/* 🚀 AI JOB CHOMMIE - PROFESSIONAL SERVICE WORKER 🚀 */
/* PRIORITY: Enable PWA install capability + Performance optimization */
/* TARGET: 60% higher install rate, 40% faster load time */

const CACHE_NAME = 'aijobchommie-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// CRITICAL RESOURCES - Always cache for offline functionality
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json',
  '/logos/android-launchericon-192-192.png',
  '/logos/android-launchericon-512-512.png',
  // Fonts for offline experience
  'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap'
];

// API endpoints to cache (for traction metrics)
const API_CACHE_PATTERNS = [
  /\/api\/stats/,
  /\/api\/metrics/,
  /\/api\/traction/
];

// Install event - Cache critical resources
self.addEventListener('install', event => {
  console.log('🚀 [SW] Installing AI Job Chommie Service Worker v1.0.0');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('📦 [SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('✅ [SW] Static assets cached successfully');
        // Skip waiting to immediately activate
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('❌ [SW] Failed to cache static assets:', error);
      })
  );
});

// Activate event - Clean up old caches
self.addEventListener('activate', event => {
  console.log('🔄 [SW] Activating Service Worker');
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && 
                cacheName !== DYNAMIC_CACHE && 
                cacheName !== CACHE_NAME) {
              console.log('🗑️ [SW] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('✅ [SW] Service Worker activated');
        // Take control of all pages immediately
        return self.clients.claim();
      })
  );
});

// Fetch event - Implement caching strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-HTTP requests
  if (!request.url.startsWith('http')) {
    return;
  }
  
  // Handle different resource types with appropriate strategies
  if (request.destination === 'document') {
    // HTML documents - Network first, then cache
    event.respondWith(networkFirstStrategy(request));
  } else if (isStaticAsset(request)) {
    // Static assets - Cache first
    event.respondWith(cacheFirstStrategy(request));
  } else if (isAPIRequest(request)) {
    // API requests - Network first for fresh data, cache as fallback
    event.respondWith(networkFirstStrategy(request));
  } else {
    // Default strategy
    event.respondWith(networkFirstStrategy(request));
  }
});

// STRATEGY 1: Network First (for HTML and API)
async function networkFirstStrategy(request) {
  try {
    // Try network first
    const networkResponse = await fetch(request);
    
    // Cache successful responses
    if (networkResponse.status === 200) {
      const responseClone = networkResponse.clone();
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, responseClone);
    }
    
    return networkResponse;
  } catch (error) {
    console.log('🌐 [SW] Network failed, trying cache:', request.url);
    
    // Fallback to cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // If no cache, return offline page for documents
    if (request.destination === 'document') {
      return new Response(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>AI Job Chommie - Offline</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
              body {
                font-family: 'Rajdhani', sans-serif;
                background: linear-gradient(135deg, #000000, #0a0a0f);
                color: #00ffff;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                margin: 0;
                text-align: center;
                padding: 2rem;
              }
              h1 { color: #00ffff; margin-bottom: 1rem; }
              p { color: #e0f2fe; line-height: 1.6; }
              .offline-icon { font-size: 4rem; margin-bottom: 1rem; }
              .retry-btn {
                background: linear-gradient(45deg, #00ffff, #ff00ff);
                color: black;
                border: none;
                padding: 1rem 2rem;
                border-radius: 0.5rem;
                font-weight: bold;
                cursor: pointer;
                margin-top: 1rem;
                transition: transform 0.3s ease;
              }
              .retry-btn:hover { transform: translateY(-2px); }
            </style>
          </head>
          <body>
            <div class="offline-icon">📱</div>
            <h1>You're Offline</h1>
            <p>No internet connection detected. AI Job Chommie works offline too!</p>
            <p>Your job search continues even when you're not connected.</p>
            <button class="retry-btn" onclick="window.location.reload()">
              🔄 Try Again
            </button>
          </body>
        </html>
      `, {
        headers: { 'Content-Type': 'text/html' },
        status: 200
      });
    }
    
    // For other resources, return a basic error response
    return new Response('Offline - Resource not available', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// STRATEGY 2: Cache First (for static assets)
async function cacheFirstStrategy(request) {
  // Check cache first
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  // Fallback to network
  try {
    const networkResponse = await fetch(request);
    
    // Cache the response
    if (networkResponse.status === 200) {
      const responseClone = networkResponse.clone();
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, responseClone);
    }
    
    return networkResponse;
  } catch (error) {
    console.error('❌ [SW] Failed to fetch resource:', request.url);
    return new Response('Resource not available offline', {
      status: 503,
      statusText: 'Service Unavailable'
    });
  }
}

// Helper function to identify static assets
function isStaticAsset(request) {
  return request.destination === 'script' ||
         request.destination === 'style' ||
         request.destination === 'image' ||
         request.destination === 'font' ||
         request.url.includes('/static/') ||
         request.url.includes('/logos/');
}

// Helper function to identify API requests
function isAPIRequest(request) {
  return request.url.includes('/api/') ||
         API_CACHE_PATTERNS.some(pattern => pattern.test(request.url));
}

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('🔄 [SW] Background sync triggered');
    event.waitUntil(handleBackgroundSync());
  }
});

async function handleBackgroundSync() {
  // Handle offline form submissions when back online
  const cache = await caches.open(DYNAMIC_CACHE);
  const pendingRequests = await cache.keys();
  
  for (const request of pendingRequests) {
    if (request.url.includes('/submit') || request.url.includes('/contact')) {
      try {
        await fetch(request);
        await cache.delete(request);
        console.log('✅ [SW] Background sync completed for:', request.url);
      } catch (error) {
        console.log('⚠️ [SW] Background sync failed for:', request.url);
      }
    }
  }
}

// Push notification handling (future investor updates)
self.addEventListener('push', event => {
  if (event.data) {
    const options = {
      body: event.data.text(),
      icon: '/logos/android-launchericon-192-192.png',
      badge: '/logos/android-launchericon-96-96.png',
      vibrate: [100, 50, 100],
      data: {
        url: 'https://aijobchommie.co.za',
        timestamp: Date.now()
      },
      actions: [
        {
          action: 'explore',
          title: '🚀 Open App',
          icon: '/logos/android-launchericon-48-48.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification('AI Job Chommie', options)
    );
  }
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('https://aijobchommie.co.za')
    );
  }
});

// Performance monitoring
self.addEventListener('message', event => {
  if (event.data.type === 'PERFORMANCE_METRICS') {
    console.log('📊 [SW] Performance metrics:', event.data.metrics);
    // Send to analytics if needed
  }
  
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Cache management - Clean up old entries
self.addEventListener('message', event => {
  if (event.data.type === 'CACHE_CLEANUP') {
    event.waitUntil(cleanupCache());
  }
});

async function cleanupCache() {
  const cacheNames = await caches.keys();
  const dynamicCache = await caches.open(DYNAMIC_CACHE);
  const requests = await dynamicCache.keys();
  
  // Keep only the 50 most recent cached items
  if (requests.length > 50) {
    const oldRequests = requests.slice(50);
    await Promise.all(
      oldRequests.map(request => dynamicCache.delete(request))
    );
    console.log(`🧹 [SW] Cleaned up ${oldRequests.length} old cache entries`);
  }
}

console.log('🚀 [SW] AI Job Chommie Service Worker loaded successfully');
