/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';



/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["404.html","77f8521b75df155ab0250e21f1bdfbb6"],["assets/css/application.css","aece34a9738c7034323e5bea929ea602"],["assets/font/fontello.eot","a03c40c8e6f933d0846f6c288b512e94"],["assets/font/fontello.svg","4ccdc605c38e19e0e00f87dc6b4a26ce"],["assets/font/fontello.ttf","c17711a105293f89933bbf7fd06f17f3"],["assets/font/fontello.woff","03a9b8583c65016801a28de51c1f0916"],["assets/font/opensans.eot","c4d82460ef260eb1589e73528cbfb257"],["assets/font/opensans.svg","8185eb3059c46e4169ce107dfcf85950"],["assets/font/opensans.ttf","488d5cc145299ba07b75495100419ee6"],["assets/font/opensans.woff","79515ad0788973c533405f7012dfeccd"],["assets/images/amooma.jpg","d7188d2b53f199e47f52d45734f3370f"],["assets/images/android.jpg","c501ffbefbc7cb285578e37c7e5576dd"],["assets/images/angularjs.jpg","ccfd44a0dc1b514af225d9c29f05313e"],["assets/images/backbone.jpg","70e46a1cbb6d09646916d8caf9b91d60"],["assets/images/backbonerails.jpg","a34d6a5356f2975ea9f7f78e406ee238"],["assets/images/building-apis-with-nodejs.jpg","23b66c0a8494e5756c0f346071d9955c"],["assets/images/c_cpp.jpg","e3c6d1d8c46b8549efbf2254aa2f7a73"],["assets/images/chrome-devtools.jpg","eb1c096dd36c4de03bda30e81f236927"],["assets/images/coderstv.jpg","23a83c1375b7e9e9e28db9e5a9e365cd"],["assets/images/codeschool.jpg","78b6f7e666f85a4566ca658b73886f49"],["assets/images/conexao-java.jpg","a9a348f930fb42734b4d57b86cd2f520"],["assets/images/creativity-tuts.jpg","0d988e76cd166f9735a5d915674fe9b6"],["assets/images/csharp.jpg","2f41ad1b82224a52749a6bde27a66917"],["assets/images/css.jpg","78c7066f60cd4841523a8d16b3a57b59"],["assets/images/devcast.jpg","8a3ec26886b5d4eaf42cfe0d09206d4a"],["assets/images/devfreecasts-128.png","4d33fe197f61c5a42e76debd257cc8da"],["assets/images/devfreecasts-facebook.jpg","20560dc306c858107e5472020e9da029"],["assets/images/devfreecasts-splash.png","a48cd9181d92ea83c526c660ef75ce20"],["assets/images/devfreecasts-thumb.png","e3ff52afec4be5424827ca3af19058c2"],["assets/images/devfreecasts.png","b3d612d58b27e1cea33839bf26761697"],["assets/images/django-con.jpg","fa35c374d9358b8e9d4044538c1b785c"],["assets/images/django.jpg","1f5fbf86a9e08c6e842e8d46d59b1ae5"],["assets/images/egghead.jpg","dcfabfc9f3f33daeed28a729bf4871aa"],["assets/images/elixir.jpg","33a2f4f61d4afed250b256b618ed4e69"],["assets/images/elixirsips.jpg","1664fcd064725810d6478a989c4ff853"],["assets/images/ember-conf.jpg","10a260af6be3240ed6b19b985df6ed84"],["assets/images/emberjs.jpg","c04fced4d43fce1e26f1440c211c8b33"],["assets/images/eventedmind.jpg","f5c7f6f682ed786cc4e72df3db829998"],["assets/images/excript.jpg","9a3dc12fcd03e2f4c3bca0604de459f9"],["assets/images/famous.jpg","db1482f26bd9356bd3130defa364c2ba"],["assets/images/getting-started-with-django.jpg","eebca52917b8054bcdb32a10fa4aba23"],["assets/images/git-tower.jpg","cfbe1bf5ac59842d0d8f6c560edb6a0e"],["assets/images/git.jpg","2463932bf40644ce9c3e2999ea23d05f"],["assets/images/go.jpg","3281e21a8e1927c2a35f1b12488f9480"],["assets/images/godjango.jpg","d70ce8eb6568df835c6386a1bea4bff7"],["assets/images/golang.jpg","6ec3157e3a764fd7052f682f69390cb8"],["assets/images/gophercasts.jpg","595c9a194aa2b0e9b788503aa82c6b3b"],["assets/images/gorails.jpg","270760287b5eb66e84b34cd8c46c1d1a"],["assets/images/grails.jpg","08e26b04aca20b1d576afb9dde441dae"],["assets/images/grunt.jpg","2edf3bd5def35c1676bec2f094755333"],["assets/images/gulp.jpg","2daa7d456ac633c8a6f2fdb7ca9371ce"],["assets/images/hakka-labs.jpg","dc82c321823eb4dcf0e62a0225867dc4"],["assets/images/haskell.jpg","0de8013fc8c5f3cb0aed15abce504e1f"],["assets/images/html.jpg","1bd2f1b4e119202e25d154eceafd1daa"],["assets/images/ios.jpg","bfe051b1a1d0d1b70e2abaa101526e95"],["assets/images/java.jpg","42b0348ad898fd20a2b4e4da12028555"],["assets/images/javascript.jpg","f877c9fae6559f4f61e146f3dab9b292"],["assets/images/knowthen.jpg","106e353b803a9815201a94cc285061c1"],["assets/images/knpuniversity.jpg","efcd715fa9b50328e024b270315f773a"],["assets/images/learnallthenodes.jpg","c516409d0c02fa659d6aca40be141a8f"],["assets/images/letswritecode-create-electron.png","caf3d7387f4e97c276561bd85e0a1aea"],["assets/images/letswritecode-node-streams.png","022b3f82802ac6ab50fd13d90a0008ef"],["assets/images/levelup-tutorials.jpg","62e4d2caf490b6540c1719307c30fd3f"],["assets/images/meteor.jpg","55354ea83af0f636688cc41160420360"],["assets/images/meteortuts.jpg","eb505b229301a4876ad96013ee04d82f"],["assets/images/neckbeardrepublic.jpg","c222ef0ea3af6a52829a4b55695f876a"],["assets/images/newcircle.jpg","835ed6081d46d0837aa9ba3186fed25c"],["assets/images/ng-conf.jpg","b753a376a650913ea9b52239aaaeb5ae"],["assets/images/nodecaiocutrimclass.png","b6cca3349ccad6a9de7f91ebb858d7b5"],["assets/images/nodecasts.jpg","023942102c0501aaa35fb09635d496e9"],["assets/images/nodejs-fan.jpg","d392dd47f983b4040702cdf598139f3a"],["assets/images/nodejs.jpg","460f2c3a1ee0fbb5c54614fde53987cc"],["assets/images/nodetuts.jpg","a812a4508a8b217ac3607e12e4428028"],["assets/images/nodevember.jpg","9526b0d23457bddbb325aa7785cbcb87"],["assets/images/nsscreencast.jpg","e80e2ac4a88e0a119c20c06234d850e3"],["assets/images/odetocode.jpg","994678b48b1faba50262d82e4754a924"],["assets/images/php.jpg","6b83180a7e9bc9449858a9d00e8e5c57"],["assets/images/playframework.jpg","05acc467d08ca2c8bef2263164d64d55"],["assets/images/polymer.jpg","9ec8d236b3cfca55869bf276cc0c8e6a"],["assets/images/pragprogs.jpg","09d3f2f91bc2088243991eac559aa0a3"],["assets/images/programacao_descomplicada.jpg","3485d05699250931857e209198465195"],["assets/images/python.jpg","f132f47c8e3f90b5ce3634149faeb3c9"],["assets/images/rails.jpg","7ce05c20912f0d779ce4b480433ca16e"],["assets/images/react.jpg","2b1f47e8e58b3bc0240139c0caa495ff"],["assets/images/ruby.jpg","d77c19140c01e3e9476ac11bb6b5e9dc"],["assets/images/rubytapas.jpg","f51157d1e8768b59b53d2c7eea1ee495"],["assets/images/rubytreesoftware.jpg","a5c501fa3e1fe34e2885aba7cfda9b15"],["assets/images/russcox.jpg","8cdb4c8b2e54d9a7f73602d034fe5316"],["assets/images/scala.jpg","06a32fc32e05ca35e114d2990214d503"],["assets/images/swift.jpg","89c19f9ea287115ffd781e433dd2b38f"],["assets/images/swiftcast.jpg","e74eca45d8e90ac8a5338bdfc001871c"],["assets/images/tutsplus.jpg","9763922e17e2e9c90e4d31389802d097"],["assets/images/typesafe.jpg","e451b34780c6cada3ee99bd6ca9df1fc"],["assets/images/vim.jpg","70cf75ccb2d91115d31d5ecc0492792e"],["assets/images/vimcasts.jpg","64f685e502db6339f65fb1cd42d82254"],["assets/images/watchmecode.jpg","17aa15103804c984a02237aa1d0d8cc5"],["assets/js/aightjs.min.js","ea5c26855859fe4151816cd578c47772"],["assets/js/application.js","d554e53812f3b8e6ff42ddbaf9d0060f"],["assets/js/html5shiv.min.js","53601738769ad38926a7dd48f3c4dfba"],["favicon.ico","d1ea8f31c66d376ff2144df686bcb3e4"],["manifest.json","89e046965f1ee0c6e2e8d790f0c984ed"],["robots.txt","65c4fe3234fe95fc951e15cbd2bb9050"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-devfreecasts-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, now) {
    now = now || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') + 'sw-precache=' + now;

    return urlWithCacheBusting.toString();
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) === -1;
        }).map(function(cacheName) {
          var urlWithCacheBusting = getCacheBustedUrl(CurrentCacheNamesToAbsoluteUrl[cacheName],
            now);

          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName], response);
              }

              console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) === 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html')) {
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


/* @preserve Mon, 06 Feb 2017 12:09:40 GMT */