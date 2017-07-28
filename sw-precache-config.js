module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/images/welcome-bg.png',
    '/images/manifest/icon-192x192.png',
    '/images/manifest/icon-512x512.png',
    '/bower_components/overlay-container/overlay-container.html',
    '/bower_components/webcomponentsjs/webcomponents-loader.js'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/^(?!\/__)/]
};