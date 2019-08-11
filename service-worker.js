/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "92d9fbfaa87b3467d7ffd4a944d83186"
  },
  {
    "url": "assets/css/0.styles.4a2a3781.css",
    "revision": "7b229d82ceac70f526e3ac0084c5acad"
  },
  {
    "url": "assets/img/home-bg.afbd595e.jpg",
    "revision": "afbd595ed462e39a93a3b676aa2ea7a4"
  },
  {
    "url": "assets/img/iconfont.7fad68e8.svg",
    "revision": "7fad68e88a8e5c4351f2fce3c2c9da4e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5a6448a4.js",
    "revision": "b57a012f2b6b6ddd77b1fce60d2ce3f6"
  },
  {
    "url": "assets/js/10.70540cc7.js",
    "revision": "8db703ce9dba14a5b1699c8319a0aeda"
  },
  {
    "url": "assets/js/11.2c8d2812.js",
    "revision": "fdeaa8a537319da6e4109e858b16788d"
  },
  {
    "url": "assets/js/12.3ecfd8e8.js",
    "revision": "6787256123d165288f012d2f7eab76c6"
  },
  {
    "url": "assets/js/13.ba571f19.js",
    "revision": "dd4f1d1c201d5929f1a901f093899c36"
  },
  {
    "url": "assets/js/14.581a635b.js",
    "revision": "ec3582df6cc8dfd044a221c3e8a16719"
  },
  {
    "url": "assets/js/15.fa37d046.js",
    "revision": "bac69fe572646edad1e087940830cecf"
  },
  {
    "url": "assets/js/16.272b577c.js",
    "revision": "98a8e9ff6599e4c76bc23b47dc459017"
  },
  {
    "url": "assets/js/4.d8d75b7e.js",
    "revision": "5b8ed564041f6d6ef1c31906f216b892"
  },
  {
    "url": "assets/js/5.149d98e8.js",
    "revision": "ecebf3994f5cf5f0751dff18578575d0"
  },
  {
    "url": "assets/js/6.e2b3d3c5.js",
    "revision": "23fd29c34681341a455466b9b377ae54"
  },
  {
    "url": "assets/js/7.513c0543.js",
    "revision": "d53949bfd6bb57754532d9944b78f3f8"
  },
  {
    "url": "assets/js/8.c5e0e5f3.js",
    "revision": "4cae1efea5525857f1eb0c651171f603"
  },
  {
    "url": "assets/js/9.186802bf.js",
    "revision": "048b4c82afcc7dcfcb96d1272b4ea215"
  },
  {
    "url": "assets/js/app.8af20f49.js",
    "revision": "8db0d51a1b5620cfb1c9c9de286edeeb"
  },
  {
    "url": "assets/js/vendors~flowchart.f0c18fde.js",
    "revision": "14e12908b09243e29b12ab0382e3f2e3"
  },
  {
    "url": "category/category1.html",
    "revision": "a696c58f4ab82ff9fc5e14df31a6068a"
  },
  {
    "url": "category/category2.html",
    "revision": "a6bb4f7d15ff7dfa57d4f0735f83d547"
  },
  {
    "url": "category/index.html",
    "revision": "5e4bbe7370862ce4d6cd341a3eed51a7"
  },
  {
    "url": "head.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "index.html",
    "revision": "5a08b2e1fceeee69733deda75c01cd58"
  },
  {
    "url": "tag/index.html",
    "revision": "87ec4eebf3d13b47b2c3f9b8e09abd69"
  },
  {
    "url": "tag/tag1.html",
    "revision": "59dfcb419614f0f35c08d534fb5c829b"
  },
  {
    "url": "tag/tag2.html",
    "revision": "f17854f22bf26827381237bab963875f"
  },
  {
    "url": "tag/tag3.html",
    "revision": "da3dc0bc6653cafaf9b97d5027558703"
  },
  {
    "url": "tag/tag4.html",
    "revision": "9b476c20db9865a1af91fc2ddb6aeb7a"
  },
  {
    "url": "timeLine/index.html",
    "revision": "122aed81ecfc0bf6c4abcdcbb95d20be"
  },
  {
    "url": "views/category1/2018/121501.html",
    "revision": "9a80ce46da104284d46e0e79c8bff650"
  },
  {
    "url": "views/category1/2019/092101.html",
    "revision": "f3cd5eb1cfd25fda1541408c04d20087"
  },
  {
    "url": "views/category2/2016/121501.html",
    "revision": "e3c7daff4d23f63df14e3e1b04c7a15a"
  },
  {
    "url": "views/category2/2017/092101.html",
    "revision": "a814e976440ba78a6420c930a338cc8a"
  },
  {
    "url": "views/other/guide.html",
    "revision": "50bfd8cd2f0a9889f45c22469fb5e085"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
