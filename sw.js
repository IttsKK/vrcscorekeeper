if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let r={};const c=e=>i(e,o),t={module:{uri:o},exports:r,require:c};s[o]=Promise.all(n.map((e=>t[e]||c(e)))).then((e=>(a(...e),r)))}}define(["./workbox-c232e17c"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-BIyITvil.css",revision:null},{url:"assets/index-Vj4SfwQu.js",revision:null},{url:"assets/workbox-window.prod.es5-B9K5rw8f.js",revision:null},{url:"index.html",revision:"18a958fef409a4a7a7976ef95c518c5b"},{url:"favicon.ico",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"images/corner_negative.svg",revision:"af7df35780cd65392bad2e292646f761"},{url:"images/corner_positive.svg",revision:"a2da72ead23eee326d6bd9d924864879"},{url:"images/ring.png",revision:"4c575180723dd60460a260087da5c9e1"},{url:"images/ring_negative.svg",revision:"364e952b9e278a4c470fa1fe6e5f3d13"},{url:"images/ring_positive.svg",revision:"da2414e18c937e42102ddd6b804a6b52"},{url:"manifest.webmanifest",revision:"efa643a8789c96805543f92794a6aea5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/offline.html"))),e.registerRoute(/^https:\/\/fonts\.googleapis\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/\/$/,new e.NetworkFirst({cacheName:"html-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js|css)$/i,new e.StaleWhileRevalidate({cacheName:"static-resources",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:png|jpg|jpeg|svg|gif|webp)$/i,new e.CacheFirst({cacheName:"images-cache",plugins:[new e.ExpirationPlugin({maxEntries:30,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/^https?:\/\/api\..*/i,new e.NetworkFirst({cacheName:"api-cache",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:3600}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
