// import { cache } from 'webpack';
// import CONFIG from '../global/config';

// const CacheHalper = {
//   async cachingAppShell(request) {
//     const cache = await this._openCache();
//     cache.addAll(request);
//   },

//   async deleteOldCache() {
//     const cacheName = await caches.keys();
//     cacheName
//       .filter((name) => name !== CONFIG.CACHE_NAME)
//       .map((filtedName) => caches.delete(filtedName));
//   },

//   async revalidateCache(request) {
//     const response = await caches.match(request);

//     if (response) {
//       this._fetchRequest(request);
//       return response;
//     }

//     return this._fetchRequest(request);
//   },

//   _openCache() {
//     return caches.open(CONFIG.CACHE_NAME);
//   },

//   async _fetchRequest(request) {
//     const response = await fetch(request);

//     if (!response || response.status !== 200) {
//       return response;
//     }

//     await this.addCache(request);
//     return response;
//   },

//   async _addCache(request) {
//     const cache = await this._openCache();
//     cache.add(request);
//   },
// };

// export default CacheHalper;
