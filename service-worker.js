"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","117fe20efd8b15c8122857c44879370c"],["/static/css/main.e9e08f0c.css","91a772f34bcf4027f7c02ffecd4c3121"],["/static/js/main.7e02605a.js","4e76d61ec0ff972d9bc6acf77651bddc"],["/static/media/award1.37316938.png","37316938235904f7a54563f9ad1c0ea6"],["/static/media/award2.5b44af4e.png","5b44af4e187267e6b97429e7b5fda549"],["/static/media/award3.918c04a7.png","918c04a78ee4a3cd75a482a6f4bcbebe"],["/static/media/digitalVideoProduction.7256675b.png","7256675b1ddcdfa64fea0a7d0a7e1f08"],["/static/media/digitalVideoProductionMobile.0197489c.png","0197489c7fdbe786eaa5d01b785b86ee"],["/static/media/extemporaneousSpeech.5e7e9272.png","5e7e9272a2e554ecf86afb5d58c77fe2"],["/static/media/fashionDesign.f2f4d531.png","f2f4d53186249195631f0b0d9211c981"],["/static/media/mainlogo.354abb49.png","354abb491b7bf4674b25dfbe8baf3ed0"],["/static/media/photographicTechnology.92407831.jpg","9240783151b0807633b0df9c7414aeec"],["/static/media/shortlogo.c62c45fd.png","c62c45fd94f27e36f3835eb7032ec8d4"],["/static/media/videogameDesign.9a2a7922.jpg","9a2a7922218842b337c98c49053951c7"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});