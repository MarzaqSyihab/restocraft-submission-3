if(!self.define){let e,i={};const n=(n,a)=>(n=new URL(n+".js",a).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const s=e=>n(e,r),o={module:{uri:r},exports:f,require:s};i[r]=Promise.all(a.map((e=>o[e]||s(e)))).then((e=>(c(...e),f)))}}define(["./workbox-94c66d79"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"a072f1ac68e44d57d3c62314a3cabf60"},{url:"946.bundle.js",revision:"c23c5da98bb2a70ddfd63c33482680c0"},{url:"app.webmanifest",revision:"4519928eb5ce58afb64e8c0829a32509"},{url:"app~4e5ec22b.bundle.js",revision:"8fc00761439663974bfe3f295b49e76f"},{url:"app~a51fa3f5.bundle.js",revision:"716d3ccf97b4e38e40ab8487ec05ec2d"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"c0eea14ab86442da5e8b483858fb2af6"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"c1f061bb057dfd582215ea85f29cc5f6"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"hero/hero-image.jpg",revision:"4ea98fe648a0b853ab379c928b5fd0bf"},{url:"icons/icon-128x128.png",revision:"9eea38f2ff3c30b7bd19aca720c1845f"},{url:"icons/icon-144x144.png",revision:"a2c2404c674dc801482f4eaaeb9a656d"},{url:"icons/icon-152x152.png",revision:"77a3169a27bb6e42f97f41c7db777adf"},{url:"icons/icon-192x192.png",revision:"01f0579084f25b653e558f869579d9b5"},{url:"icons/icon-384x384.png",revision:"48fc1e10ea1a7e9f877781631b8a048c"},{url:"icons/icon-512x512.png",revision:"c652390de3d2fb4b3b726706fb5b3ea6"},{url:"icons/icon-72x72.png",revision:"ff1515a40d68dedc9be970b5db7c211a"},{url:"icons/icon-96x96.png",revision:"34067e3d7e4ae1b362ede4d59f4ae416"},{url:"index.html",revision:"81a813d130b0b07f722c103b1a4fd4fc"},{url:"logo.png",revision:"01f0579084f25b653e558f869579d9b5"}],{}),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/")),new e.StaleWhileRevalidate({cacheName:"restocraft-api",plugins:[]}),"GET"),e.registerRoute((({url:e})=>e.href.startsWith("https://restaurant-api.dicoding.dev/images/medium/")),new e.StaleWhileRevalidate({cacheName:"restocraft-image-api",plugins:[]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map