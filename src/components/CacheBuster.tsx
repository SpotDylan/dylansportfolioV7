'use client';

import { useEffect } from 'react';

export default function CacheBuster() {
  useEffect(() => {
    // Add cache busting timestamp as query param to force fresh content
    const addCacheBustingParam = () => {
      const timestamp = new Date().getTime();
      const cacheBuster = `_cb=${timestamp}`;
      
      // Get current URL
      let currentUrl = window.location.href;
      
      // Don't add cache buster if already present
      if (currentUrl.includes('_cb=')) {
        return;
      }
      
      // Add cache buster as a query param
      const separator = currentUrl.includes('?') ? '&' : '?';
      const newUrl = `${currentUrl}${separator}${cacheBuster}`;
      
      // Use history API to update URL without reload
      window.history.replaceState({}, '', newUrl);
    };
    
    // Execute on initial load
    addCacheBustingParam();
    
    // Add event listener for page visibility changes
    // This helps catch when user returns to your tab after being away
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        // Check if page needs a refresh by comparing last updated time
        // We could implement further logic here if needed
        addCacheBustingParam();
      }
    });
  }, []);

  return null;
}
