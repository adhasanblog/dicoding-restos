import { ExpirationPlugin, CacheExpiration } from 'workbox-expiration';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import {
  StaleWhileRevalidate,
  NetworkFirst,
  NetworkOnly,
  CacheFirst,
  CacheOnly,
} from 'workbox-strategies';

import API_ENDPOINT from './global/api-endpoint';

precacheAndRoute(self.__WB_MANIFEST, {
  strategy: 'StaleWhileRevalidate',
  cleanupOutdatedCaches: true,
});

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

registerRoute(
  API_ENDPOINT.LIST,
  new StaleWhileRevalidate({
    cacheName: 'restaurant-list',
    skipWaiting: true,
    plugins: [
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ],
  }),
);
