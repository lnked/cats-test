"use strict";var precacheConfig=[["/cats-test/api/answers.json","0200cd816e244530af378ac73241d84a"],["/cats-test/api/cats.json","62da6a0fd373ef6c516d1a841028f31c"],["/cats-test/fav/android-chrome-144x144.png","5e33b01e21a8dbf5e81aec57b10ec706"],["/cats-test/fav/android-chrome-192x192.png","42f21f625d322e0b2c51da2f453398e0"],["/cats-test/fav/android-chrome-256x256.png","0cb90ae3ed62ed4ca3e8e009f2639b74"],["/cats-test/fav/android-chrome-36x36.png","2b6cd08421cbc15ba1f4859c4066dc0d"],["/cats-test/fav/android-chrome-384x384.png","99d7669c65ce0578b515896e3f4ba2c4"],["/cats-test/fav/android-chrome-48x48.png","eba89e0456586be8a2a6445d66882883"],["/cats-test/fav/android-chrome-512x512.png","78c8f56f4c7d091b9cb0564b4d50fd9f"],["/cats-test/fav/android-chrome-72x72.png","07725ce4675143d726dcaa6373e1b5f4"],["/cats-test/fav/android-chrome-96x96.png","fa4483781d1b8cbae8fe743f8b286231"],["/cats-test/fav/apple-touch-icon-114x114.png","3e19873e22a6eb1749e93c5cbe6190b8"],["/cats-test/fav/apple-touch-icon-120x120.png","bbe3701884cf6e8910ce3e0106655de9"],["/cats-test/fav/apple-touch-icon-144x144.png","864826e129e0662896ac6c059c15d707"],["/cats-test/fav/apple-touch-icon-152x152.png","8821537459205e997f08a59b6fbc6223"],["/cats-test/fav/apple-touch-icon-167x167.png","d4ac1e38908d97e622619d0782f90335"],["/cats-test/fav/apple-touch-icon-180x180.png","9820b641fe966a99abb9164cceba1b1b"],["/cats-test/fav/apple-touch-icon-57x57.png","e01a426a8249297cd69553b57114ee93"],["/cats-test/fav/apple-touch-icon-60x60.png","4de13a20698c84ec5c18b4495429ecaa"],["/cats-test/fav/apple-touch-icon-72x72.png","e4d72fb6091f7c2f1fa338f7ff39fb6d"],["/cats-test/fav/apple-touch-icon-76x76.png","80d34ae1dac8e5ecd984581d1ca1acee"],["/cats-test/fav/apple-touch-icon-precomposed.png","9820b641fe966a99abb9164cceba1b1b"],["/cats-test/fav/apple-touch-icon.png","9820b641fe966a99abb9164cceba1b1b"],["/cats-test/fav/browserconfig.xml","c01bb9b01c4571fac95d2a3c2eff8cd8"],["/cats-test/fav/favicon-16x16.png","4f79940b69b8aec54098916bd2f40b0f"],["/cats-test/fav/favicon-32x32.png","0fad4f35a3142ad9ec489ff52c80e04a"],["/cats-test/fav/favicon.ico","14f7725c23f04855c7154a501da853f8"],["/cats-test/fav/firefox_app_128x128.png","dcd693d41f3ed47b0d2ee7516c6c1ffc"],["/cats-test/fav/firefox_app_512x512.png","1774489711567e2f25b6088cb086e669"],["/cats-test/fav/firefox_app_60x60.png","fa2bf833da3cebbe68fdcdd64fbf06af"],["/cats-test/fav/manifest.json","517597c877f1f8368e6ef17b0b9cab16"],["/cats-test/fav/manifest.webapp","91299f8a52a9a268f4e6f57e7bfc0cb8"],["/cats-test/fav/mstile-144x144.png","5e33b01e21a8dbf5e81aec57b10ec706"],["/cats-test/fav/mstile-150x150.png","ad5e1a4de0e414de100f0b763f2ce972"],["/cats-test/fav/mstile-310x150.png","d7a6ff0be51069d46259c7780878c893"],["/cats-test/fav/mstile-310x310.png","5a057b0e445675b30cf2e96eae28c325"],["/cats-test/fav/mstile-70x70.png","3040d080a46bdbe0b7af0f35abdcb871"],["/cats-test/images/border.svg","20463568eee550c2d8e886a148439eb6"],["/cats-test/images/mask.svg","7aa931970ca561bf6d061876e2ac8c21"],["/cats-test/images/pattern-d6e90.png","d6e900403f6cf3f1e451ee8cd0b642e4"],["/cats-test/images/pattern.png","060bd9bbe9ac57f4ef2fee6b1b1a4fa4"],["/cats-test/images/photo-75a1d.png","75a1d4644bd18b922a1fd58d9d5ba0d7"],["/cats-test/index.html","8b3d932c485cf949669b1b30531ecd3f"],["/cats-test/js/app.cb7ce.js","126a24f823e3593e6d7b07ffa0272acd"],["/cats-test/js/app.cb7ce.js.br","aaa162f52adb81a9cd8443157643c51c"],["/cats-test/js/app.cb7ce.js.gz","b5fd0b70881b8e1db5b5c73a786940cb"],["/cats-test/js/vendors.6d041.js","23b14664b75197addea615007acca323"],["/cats-test/js/vendors.6d041.js.br","4cdd1fe8e5999a6489cb1307712d2472"],["/cats-test/js/vendors.6d041.js.gz","dad25992aca3d1892154b55396a54865"],["/cats-test/manifest.json","884615acecde30896c2b2ae44bb25f9d"],["fav/android-chrome-144x144.png","5e33b01e21a8dbf5e81aec57b10ec706"],["fav/android-chrome-192x192.png","42f21f625d322e0b2c51da2f453398e0"],["fav/android-chrome-256x256.png","0cb90ae3ed62ed4ca3e8e009f2639b74"],["fav/android-chrome-36x36.png","2b6cd08421cbc15ba1f4859c4066dc0d"],["fav/android-chrome-384x384.png","99d7669c65ce0578b515896e3f4ba2c4"],["fav/android-chrome-48x48.png","eba89e0456586be8a2a6445d66882883"],["fav/android-chrome-512x512.png","78c8f56f4c7d091b9cb0564b4d50fd9f"],["fav/android-chrome-72x72.png","07725ce4675143d726dcaa6373e1b5f4"],["fav/android-chrome-96x96.png","fa4483781d1b8cbae8fe743f8b286231"],["fav/apple-touch-icon-114x114.png","3e19873e22a6eb1749e93c5cbe6190b8"],["fav/apple-touch-icon-120x120.png","bbe3701884cf6e8910ce3e0106655de9"],["fav/apple-touch-icon-144x144.png","864826e129e0662896ac6c059c15d707"],["fav/apple-touch-icon-152x152.png","8821537459205e997f08a59b6fbc6223"],["fav/apple-touch-icon-167x167.png","d4ac1e38908d97e622619d0782f90335"],["fav/apple-touch-icon-180x180.png","9820b641fe966a99abb9164cceba1b1b"],["fav/apple-touch-icon-57x57.png","e01a426a8249297cd69553b57114ee93"],["fav/apple-touch-icon-60x60.png","4de13a20698c84ec5c18b4495429ecaa"],["fav/apple-touch-icon-72x72.png","e4d72fb6091f7c2f1fa338f7ff39fb6d"],["fav/apple-touch-icon-76x76.png","80d34ae1dac8e5ecd984581d1ca1acee"],["fav/apple-touch-icon-precomposed.png","9820b641fe966a99abb9164cceba1b1b"],["fav/apple-touch-icon.png","9820b641fe966a99abb9164cceba1b1b"],["fav/browserconfig.xml","c01bb9b01c4571fac95d2a3c2eff8cd8"],["fav/favicon-16x16.png","4f79940b69b8aec54098916bd2f40b0f"],["fav/favicon-32x32.png","0fad4f35a3142ad9ec489ff52c80e04a"],["fav/favicon.ico","14f7725c23f04855c7154a501da853f8"],["fav/firefox_app_128x128.png","dcd693d41f3ed47b0d2ee7516c6c1ffc"],["fav/firefox_app_512x512.png","1774489711567e2f25b6088cb086e669"],["fav/firefox_app_60x60.png","fa2bf833da3cebbe68fdcdd64fbf06af"],["fav/manifest.json","517597c877f1f8368e6ef17b0b9cab16"],["fav/manifest.webapp","91299f8a52a9a268f4e6f57e7bfc0cb8"],["fav/mstile-144x144.png","5e33b01e21a8dbf5e81aec57b10ec706"],["fav/mstile-150x150.png","ad5e1a4de0e414de100f0b763f2ce972"],["fav/mstile-310x150.png","d7a6ff0be51069d46259c7780878c893"],["fav/mstile-310x310.png","5a057b0e445675b30cf2e96eae28c325"],["fav/mstile-70x70.png","3040d080a46bdbe0b7af0f35abdcb871"],["images/border.svg","20463568eee550c2d8e886a148439eb6"],["images/mask.svg","7aa931970ca561bf6d061876e2ac8c21"],["images/pattern-d6e90.png","d6e900403f6cf3f1e451ee8cd0b642e4"],["images/pattern.png","060bd9bbe9ac57f4ef2fee6b1b1a4fa4"],["images/photo-75a1d.png","75a1d4644bd18b922a1fd58d9d5ba0d7"],["index.html","8b3d932c485cf949669b1b30531ecd3f"],["js/app.cb7ce.js","126a24f823e3593e6d7b07ffa0272acd"],["js/app.cb7ce.js.br","aaa162f52adb81a9cd8443157643c51c"],["js/app.cb7ce.js.gz","b5fd0b70881b8e1db5b5c73a786940cb"],["js/vendors.6d041.js","23b14664b75197addea615007acca323"],["js/vendors.6d041.js.br","4cdd1fe8e5999a6489cb1307712d2472"],["js/vendors.6d041.js.gz","dad25992aca3d1892154b55396a54865"],["manifest.json","884615acecde30896c2b2ae44bb25f9d"],["webpack-manifest.json","f32ba6471c8241ef372f6fb3d378702c"]],cacheName="sw-precache-v3-RS-PWA-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"/"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(n=new URL("/cats-test/",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,a){function r(o,s){if(!n[o]){if(!t[o]){var i="function"==typeof require&&require;if(!s&&i)return i(o,!0);if(c)return c(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var u=n[o]={exports:{}};t[o][0].call(u.exports,function(e){var n=t[o][1][e];return r(n||e)},u,u.exports,e,t,n,a)}return n[o].exports}for(var c="function"==typeof require&&require,o=0;o<a.length;o++)r(a[o]);return r}({1:[function(e,t,n){function a(e,t){((t=t||{}).debug||i.debug)&&console.log("[sw-toolbox] "+e)}function r(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||i.cache.name,caches.open(t)}function c(e,t,n){var r=e.url,c=n.maxAgeSeconds,o=n.maxEntries,s=n.name,i=Date.now();return a("Updating LRU order for "+r+". Max entries is "+o+", max age is "+c),f.getDb(s).then(function(e){return f.setTimestampForUrl(e,r,i)}).then(function(e){return f.expireEntries(e,o,c,i)}).then(function(e){a("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){a("Done with cache cleanup.")})}).catch(function(e){a(e)})}function o(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var s,i=e("./options"),f=e("./idb-cache-expiration");t.exports={debug:a,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||i.successResponses;return fetch(e.clone()).then(function(a){return"GET"===e.method&&n.test(a.status)&&r(t).then(function(n){n.put(e,a).then(function(){var a=t.cache||i.cache;(a.maxEntries||a.maxAgeSeconds)&&a.name&&function(e,t,n){var a=c.bind(null,e,t,n);s=s?s.then(a):a()}(e,n,a)})}),a.clone()})},openCache:r,renameCache:function(e,t,n){return a("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],a=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return a.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return r(t).then(function(t){return t.add(e)})},uncache:function(e,t){return r(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||o(e),i.preCacheItems=i.preCacheItems.concat(e)},validatePrecacheInput:o,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var a=e.headers.get("date");if(a&&new Date(a).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var a="sw-toolbox-",r=1,c="store",o="url",s="timestamp",i={};t.exports={getDb:function(e){return e in i||(i[e]=function(e){return new Promise(function(t,n){var i=indexedDB.open(a+e,r);i.onupgradeneeded=function(){i.result.createObjectStore(c,{keyPath:o}).createIndex(s,s,{unique:!1})},i.onsuccess=function(){t(i.result)},i.onerror=function(){n(i.error)}})}(e)),i[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(a,r){var o=e.transaction(c,"readwrite");o.objectStore(c).put({url:t,timestamp:n}),o.oncomplete=function(){a(e)},o.onabort=function(){r(o.error)}})},expireEntries:function(e,t,n,a){return function(e,t,n){return t?new Promise(function(a,r){var i=1e3*t,f=[],u=e.transaction(c,"readwrite"),p=u.objectStore(c);p.index(s).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[s]){var a=t.value[o];f.push(a),p.delete(a),t.continue()}},u.oncomplete=function(){a(f)},u.onabort=r}):Promise.resolve([])}(e,n,a).then(function(n){return function(e,t){return t?new Promise(function(n,a){var r=[],i=e.transaction(c,"readwrite"),f=i.objectStore(c),u=f.index(s),p=u.count();u.count().onsuccess=function(){var e=p.result;e>t&&(u.openCursor().onsuccess=function(n){var a=n.target.result;if(a){var c=a.value[o];r.push(c),f.delete(c),e-r.length>t&&a.continue()}})},i.oncomplete=function(){n(r)},i.onabort=a}):Promise.resolve([])}(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function a(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var r=e("./helpers"),c=e("./router"),o=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){r.debug("activate event fired");var t=o.cache.name+"$$$inactive$$$";e.waitUntil(r.renameCache(t,o.cache.name))},installListener:function(e){var t=o.cache.name+"$$$inactive$$$";r.debug("install event fired"),r.debug("creating cache ["+t+"]"),e.waitUntil(r.openCache({cache:{name:t}}).then(function(e){return Promise.all(o.preCacheItems).then(a).then(r.validatePrecacheInput).then(function(t){return r.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var a;a=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+a+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var a=new URL("./",self.location).pathname,r=e("path-to-regexp"),c=function(e,t,n,c){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=a+t),this.keys=[],this.regexp=r(t,this.keys)),this.method=e,this.options=c,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,a){t[e.name]=n[a+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){var a=e("./route"),r=e("./helpers"),c=function(e,t){for(var n=e.entries(),a=n.next(),r=[];!a.done;){new RegExp(a.value[0]).test(t)&&r.push(a.value[1]),a=n.next()}return r},o=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){o.prototype[e]=function(t,n,a){return this.add(e,t,n,a)}}),o.prototype.add=function(e,t,n,c){var o;c=c||{},t instanceof RegExp?o=RegExp:o=(o=c.origin||self.location.origin)instanceof RegExp?o.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(o),e=e.toLowerCase();var s=new a(e,t,n,c);this.routes.has(o)||this.routes.set(o,new Map);var i=this.routes.get(o);i.has(e)||i.set(e,new Map);var f=i.get(e),u=s.regexp||s.fullUrlRegExp;f.has(u.source)&&r.debug('"'+t+'" resolves to same regex as existing route.'),f.set(u.source,s)},o.prototype.matchMethod=function(e,t){var n=new URL(t),a=n.origin,r=n.pathname;return this._match(e,c(this.routes,a),r)||this._match(e,[this.routes.get(RegExp)],t)},o.prototype._match=function(e,t,n){if(0===t.length)return null;for(var a=0;a<t.length;a++){var r=t[a],o=r&&r.get(e.toLowerCase());if(o){var s=c(o,n);if(s.length>0)return s[0].makeHandler(n)}}return null},o.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new o},{"./helpers":1,"./route":5}],7:[function(e,t,n){var a=e("../options"),r=e("../helpers");t.exports=function(e,t,n){return n=n||{},r.debug("Strategy: cache first ["+e.url+"]",n),r.openCache(n).then(function(t){return t.match(e).then(function(t){var c=n.cache||a.cache,o=Date.now();return r.isResponseFresh(t,c.maxAgeSeconds,o)?t:r.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var a=e("../options"),r=e("../helpers");t.exports=function(e,t,n){return n=n||{},r.debug("Strategy: cache only ["+e.url+"]",n),r.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||a.cache,c=Date.now();if(r.isResponseFresh(e,t.maxAgeSeconds,c))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var a=e("../helpers"),r=e("./cacheOnly");t.exports=function(e,t,n){return a.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(c,o){var s=!1,i=[],f=function(e){i.push(e.toString()),s?o(new Error('Both cache and network failed: "'+i.join('", "')+'"')):s=!0},u=function(e){e instanceof Response?c(e):f("No result returned")};a.fetchAndCache(e.clone(),n).then(u,f),r(e,t,n).then(u,f)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var a=e("../options"),r=e("../helpers");t.exports=function(e,t,n){var c=(n=n||{}).successResponses||a.successResponses,o=n.networkTimeoutSeconds||a.networkTimeoutSeconds;return r.debug("Strategy: network first ["+e.url+"]",n),r.openCache(n).then(function(t){var s,i,f=[];if(o){var u=new Promise(function(c){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||a.cache,o=Date.now(),s=t.maxAgeSeconds;r.isResponseFresh(e,s,o)&&c(e)})},1e3*o)});f.push(u)}var p=r.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),c.test(e.status))return e;throw r.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(a){return r.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw a})});return f.push(p),Promise.race(f)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var a=e("../helpers");t.exports=function(e,t,n){return a.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var a=e("./options"),r=e("./router"),c=e("./helpers"),o=e("./strategies"),s=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:o.networkOnly,networkFirst:o.networkFirst,cacheOnly:o.cacheOnly,cacheFirst:o.cacheFirst,fastest:o.fastest,router:r,options:a,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function a(e,t){for(var n,a=[],r=0,c=0,o="",f=t&&t.delimiter||"/";null!=(n=l.exec(e));){var u=n[0],p=n[1],d=n.index;if(o+=e.slice(c,d),c=d+u.length,p)o+=p[1];else{var h=e[c],b=n[2],g=n[3],v=n[4],m=n[5],x=n[6],w=n[7];o&&(a.push(o),o="");var y=null!=b&&null!=h&&h!==b,R="+"===x||"*"===x,E="?"===x||"*"===x,C=n[2]||f,j=v||m;a.push({name:g||r++,prefix:b||"",delimiter:C,optional:E,repeat:R,partial:y,asterisk:!!w,pattern:j?i(j):w?".*":"[^"+s(C)+"]+?"})}}return c<e.length&&(o+=e.substr(c)),o&&a.push(o),a}function r(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function o(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,a){for(var o="",s=n||{},i=(a||{}).pretty?r:encodeURIComponent,f=0;f<e.length;f++){var u=e[f];if("string"!=typeof u){var p,d=s[u.name];if(null==d){if(u.optional){u.partial&&(o+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(h(d)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(d)+"`");if(0===d.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var l=0;l<d.length;l++){if(p=i(d[l]),!t[f].test(p))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===l?u.prefix:u.delimiter)+p}}else{if(p=u.asterisk?c(d):i(d),!t[f].test(p))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+p+'"');o+=u.prefix+p}}else o+=u}return o}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function i(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function u(e){return e.sensitive?"":"i"}function p(e,t,n){h(t)||(n=t||n,t=[]);for(var a=(n=n||{}).strict,r=!1!==n.end,c="",o=0;o<e.length;o++){var i=e[o];if("string"==typeof i)c+=s(i);else{var p=s(i.prefix),d="(?:"+i.pattern+")";t.push(i),i.repeat&&(d+="(?:"+p+d+")*"),c+=d=i.optional?i.partial?p+"("+d+")?":"(?:"+p+"("+d+"))?":p+"("+d+")"}}var l=s(n.delimiter||"/"),b=c.slice(-l.length)===l;return a||(c=(b?c.slice(0,-l.length):c)+"(?:"+l+"(?=$))?"),c+=r?"$":a&&b?"":"(?="+l+"|$)",f(new RegExp("^"+c,u(n)),t)}function d(e,t,n){return h(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var a=0;a<n.length;a++)t.push({name:a,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}(e,t):h(e)?function(e,t,n){for(var a=[],r=0;r<e.length;r++)a.push(d(e[r],t,n).source);return f(new RegExp("(?:"+a.join("|")+")",u(n)),t)}(e,t,n):function(e,t,n){return p(a(e,n),t,n)}(e,t,n)}var h=e("isarray");t.exports=d,t.exports.parse=a,t.exports.compile=function(e,t){return o(a(e,t))},t.exports.tokensToFunction=o,t.exports.tokensToRegExp=p;var l=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],a=parseInt(t[2]);e&&(!t||"Firefox"===n&&a>=46||"Chrome"===n&&a>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(a){if(a.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(a.map(function(t,a){return n.put(e[a],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/\/api(.*)/,toolbox.networkFirst,{debug:!0}),toolbox.router.get(/(.*?)/,toolbox.cacheFirst,{});