const CACHE_NAME = 'report-assistant-v2';
const APP_SHELL = [
  './','./index.html','./style.css','./script.js','./bustech-logo.png','./manifest.json',
  './road-test/','./road-test/index.html','./road-test/road-test.css','./road-test/road-test.js','./road-test/road-test-data.js'
];
self.addEventListener('install',(event)=>event.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',(event)=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',(event)=>{
 if(event.request.method!=='GET')return;
 const url=new URL(event.request.url); if(url.origin!==self.location.origin)return;
 event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(res=>{const copy=res.clone();caches.open(CACHE_NAME).then(c=>c.put(event.request,copy));return res}).catch(()=>caches.match(event.request.mode==='navigate'?'./index.html':'./'))));
});
