// No cached game or leaderboard responses. Updates are explicitly accepted.
const RELEASE='mg-80c17d6c5f881d';
self.addEventListener('install',()=>{});
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('message',event=>{if(event.data?.type==='MG_ACTIVATE')event.waitUntil(self.skipWaiting());if(event.data?.type==='MG_VERSION')event.ports[0]?.postMessage(RELEASE);});
