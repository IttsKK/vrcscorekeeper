if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(i[a])return;let c={};const o=e=>s(e,a),d={module:{uri:a},exports:c,require:o};i[a]=Promise.all(n.map((e=>d[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-c232e17c"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BUlGfxy3.css",revision:null},{url:"assets/index-H0MsHNGI.js",revision:null},{url:"favicon.ico",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/corner_negative.svg",revision:"af7df35780cd65392bad2e292646f761"},{url:"images/corner_positive.svg",revision:"a2da72ead23eee326d6bd9d924864879"},{url:"images/ring_negative.svg",revision:"364e952b9e278a4c470fa1fe6e5f3d13"},{url:"images/ring_positive.svg",revision:"da2414e18c937e42102ddd6b804a6b52"},{url:"images/ring.png",revision:"4c575180723dd60460a260087da5c9e1"},{url:"index.html",revision:"840b352edc39b7e79833e9a1042b15b0"},{url:"offline.html",revision:"2743544bb60e19e5e4f738f176085bc7"},{url:"registerSW.js",revision:"ec14c48a9f91c07d7ef5d2fd3e1b0c56"},{url:"favicon.ico",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/corner_negative.svg",revision:"af7df35780cd65392bad2e292646f761"},{url:"images/corner_positive.svg",revision:"a2da72ead23eee326d6bd9d924864879"},{url:"images/ring.png",revision:"4c575180723dd60460a260087da5c9e1"},{url:"images/ring_negative.svg",revision:"364e952b9e278a4c470fa1fe6e5f3d13"},{url:"images/ring_positive.svg",revision:"da2414e18c937e42102ddd6b804a6b52"},{url:"manifest.webmanifest",revision:"64cf49d14f3b71f81f721da58ce7d018"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\/$/,new e.NetworkFirst({cacheName:"html-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js|css)$/i,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|webp)$/i,new e.CacheFirst({cacheName:"images-cache",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^https?:\/\/api\..*/i,new e.NetworkFirst({cacheName:"api-cache",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:3600}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.js.map
