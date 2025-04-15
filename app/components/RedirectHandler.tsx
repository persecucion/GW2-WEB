'use client';

import { useEffect } from 'react';

export default function RedirectHandler() {
  useEffect(() => {
    // Scroll to top on initial page load
    window.scrollTo(0, 0);
    
    // Disable automatic scroll restoration for better control
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
  }, []);
  
  return null;
} 