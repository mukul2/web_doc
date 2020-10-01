'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "5bddd0a6ed364c744aefdf2d76354625",
"/": "5bddd0a6ed364c744aefdf2d76354625",
"main.dart.js": "b322a919b5d0b2e3d957c74f340218ed",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e5136df0e7cc13fe2df7de21e00494d3",
"assets/AssetManifest.json": "2d25cd5a81cca88904c8afaab5c220df",
"assets/NOTICES": "d6f51ab24bfb60b373f326cf3f7117ea",
"assets/FontManifest.json": "fb9035803c262f7b1dac71c2570787c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/assets/doc_female.jpg": "55c1dbf6f610e4903478d54165af9ea9",
"assets/assets/info.png": "a058f5886f71941a37c1a1ead164585a",
"assets/assets/subscription.png": "b5d6bd1b669205b94f5a958a82d8c448",
"assets/assets/subscriptions.png": "a49bcc3f7264f85d474b1a88c75a0723",
"assets/assets/meeting.png": "b0d4d5e1ae36c0131989607777cbebde",
"assets/assets/prescription_.png": "73ff862717da6e3ea71e7f228d7cd8c6",
"assets/assets/note.png": "bff33567ffeb821cc260b550449bdb48",
"assets/assets/man_.png": "f07d66e00150e23a0d8b2e10b7b0f86b",
"assets/assets/ambulance.png": "d5ca98b59cdba21375ec42ced85061b4",
"assets/assets/live_chat.png": "99c51d39aed8e9c8162e9dcfe067bd0d",
"assets/assets/banner2.png": "497d40220082e2e36ed58f88a8240d09",
"assets/assets/doctor_chamber_.png": "509d6b48529d6911408067a16a0aaf3e",
"assets/assets/banner3.png": "d7a84b6b562b26f7239f3a7d3beb963a",
"assets/assets/chat_doctor.jpg": "36def13ba732acff2d740bd1aa2a02d3",
"assets/assets/banner1.png": "14d2e677393e5e45596f2571708885e8",
"assets/assets/logout.png": "bddd84300cc91bf563f604f4d6259c36",
"assets/assets/chemistry.png": "6545d0bc83529f752bc754cb2f22d9cd",
"assets/assets/doctor.png": "77b477a57131d801dd900fe2b140a757",
"assets/assets/riad.png": "b2a6c8baa70596a169119fef60f7e152",
"assets/assets/banner4.png": "5341302fd13e084fa16753598a2855bc",
"assets/assets/helvetica.ttf": "1b580d980532792578c54897ca387e2c",
"assets/assets/banner5.png": "e5073b003958c346b6964b67dfa1c994",
"assets/assets/stet.png": "26bebc4b55a1da6d111c37278dc46225",
"assets/assets/home_run.png": "a06025dcbdc903d7088f12eaf0950753",
"assets/assets/sf_pro.ttf": "d09549c1ab4a5947a007561521e45da3",
"assets/assets/help.png": "131c3f91dea4d6a7a2ba96e07b3fbf39",
"assets/assets/heart_disease.png": "547cc161ae7488aa1f431e3e56d56f76",
"assets/assets/logo2.jpeg": "cb75fbe1b03f105c3d51c64c9999fb3d",
"assets/assets/portfolio.png": "50240b7da70605ddf598af5f9ed31f75",
"assets/assets/window.png": "41f5a453b7cb046bfe79806fcd0743c3",
"assets/assets/rx.png": "ad9d48ce90006de556780dc95cef1785",
"assets/assets/online_doc.jpg": "72282862289f57b16910948b58fea118",
"assets/assets/examination.png": "35d4e1cc899dcf04658495950204a5c5",
"assets/assets/twitter.png": "08d274bcaf71630fe630dce7373e3fde",
"assets/assets/video_call_img.png": "864424b92905580e23cd5ce0ffe9608a",
"assets/assets/pharmacy.png": "7b3cdf0b46f4bd4576390e89c8790cfb",
"assets/assets/youtube.png": "b7c4cc285ccc40b7818486c5d68a2341",
"assets/assets/logo.jpeg": "48bcb695cb6df1228a7464689f27a9d6",
"assets/assets/doctor_chamber.png": "14b7d8167f782af76f297651b6bb5c7e",
"assets/assets/facebook.png": "41ef25cfa62bf252be9afadfe30fe14b",
"assets/assets/transfusion.png": "264d9f61ee8e6359156b82bc444d72fe",
"assets/assets/bloodbank.jpg": "865f2392d16d3cf0fc1f9d2d57e4b71c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }
  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
