'use client';

import Script from 'next/script';

export default function CacheControl() {
  return (
    <>
      {/* This script runs before React hydration and clears caches aggressively */}
      <Script id="cache-control" strategy="beforeInteractive">
        {`
        (function() {
          // Generate a unique version identifier for this page load
          window.__SITE_VERSION = "${new Date().toISOString()}";
          
          // Clear application cache (deprecated but still exists in some browsers)
          if (window.applicationCache && window.applicationCache.swapCache) {
            try {
              window.applicationCache.swapCache();
            } catch (e) {}
          }
          
          // Clear service workers if they exist
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
              for (let registration of registrations) {
                registration.update();
              }
            });
          }
          
          // Add a version parameter to all fetch requests
          const originalFetch = window.fetch;
          window.fetch = function() {
            let url = arguments[0];
            if (typeof url === 'string') {
              const separator = url.includes('?') ? '&' : '?';
              url = url + separator + '_v=' + encodeURIComponent(window.__SITE_VERSION);
              arguments[0] = url;
            }
            return originalFetch.apply(this, arguments);
          };
          
          // Force a hard reload if needed based on a version check
          // You could implement version checking here against your backend
          const lastVersion = localStorage.getItem('site_version');
          localStorage.setItem('site_version', window.__SITE_VERSION);
          
          // If we detect a stale visit (version mismatch and not a direct navigation)
          if (lastVersion && 
              lastVersion !== window.__SITE_VERSION && 
              performance.navigation && 
              performance.navigation.type !== 0) {
            // Reload without using cache
            window.location.reload(true);
          }
        })();
        `}
      </Script>
    </>
  );
}
