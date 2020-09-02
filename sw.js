importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js')

self.addEventListener('fetch', function(e) {
  // ファイルのキャッシュ
  workbox.precaching.precacheAndRoute([
    {
      url: '/index.html',
      revision: '12345'
    },
  ])

  })