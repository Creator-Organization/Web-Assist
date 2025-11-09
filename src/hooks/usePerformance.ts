// src/hooks/usePerformance.ts

'use client';

import { useEffect, useState } from 'react';
import { trackPerformance, initScrollTracking, trackSession } from '@/lib/analytics';

interface PerformanceMetrics {
  isLoading: boolean;
  loadTime: number | null;
  isVisible: boolean;
}

export function usePerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    isLoading: true,
    loadTime: null,
    isVisible: true,
  });

  useEffect(() => {
    // Track initial performance
    trackPerformance();
    trackSession();
    
    // Initialize scroll tracking
    const cleanupScrollTracking = initScrollTracking();

    // Track page load completion
    const handleLoad = () => {
      const loadTime = performance.now();
      setMetrics(prev => ({
        ...prev,
        isLoading: false,
        loadTime: Math.round(loadTime),
      }));
    };

    // Track page visibility changes
    const handleVisibilityChange = () => {
      setMetrics(prev => ({
        ...prev,
        isVisible: !document.hidden,
      }));
    };

    // Add event listeners
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (cleanupScrollTracking) cleanupScrollTracking();
    };
  }, []);

  return metrics;
}

// Hook for intersection observer (lazy loading)
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !window.IntersectionObserver) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Fixed: Handle the entries array properly
        const entry = entries[0];
        if (entry) {
          setIsIntersecting(entry.isIntersecting);
          if (entry.isIntersecting && !hasIntersected) {
            setHasIntersected(true);
          }
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [elementRef, hasIntersected, options]);

  return { isIntersecting, hasIntersected };
}

// Hook for prefetching resources
export function usePrefetch(urls: string[]) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Only prefetch on fast connections
    const connection = (navigator as any).connection;
    if (connection && (connection.saveData || connection.effectiveType === 'slow-2g')) {
      return;
    }

    urls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = url;
      document.head.appendChild(link);
    });

    // Cleanup
    return () => {
      urls.forEach(url => {
        const link = document.querySelector(`link[rel="prefetch"][href="${url}"]`);
        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, [urls]);
}

// Hook for tracking component performance
export function useComponentPerformance(componentName: string) {
  useEffect(() => {
    const startTime = performance.now();

    return () => {
      const endTime = performance.now();
      const renderTime = endTime - startTime;
      
      // Only track if render time is significant (>16ms for 60fps)
      if (renderTime > 16) {
        console.log(`${componentName} render time: ${renderTime.toFixed(2)}ms`);
      }
    };
  });
}

// Hook for detecting slow connections
export function useNetworkStatus() {
  const [networkStatus, setNetworkStatus] = useState({
    isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
    connectionType: 'unknown',
    isSlowConnection: false,
  });

  useEffect(() => {
    if (typeof navigator === 'undefined') return;

    const updateOnlineStatus = () => {
      setNetworkStatus(prev => ({
        ...prev,
        isOnline: navigator.onLine,
      }));
    };

    const updateConnectionStatus = () => {
      const connection = (navigator as any).connection;
      if (connection) {
        setNetworkStatus(prev => ({
          ...prev,
          connectionType: connection.effectiveType || 'unknown',
          isSlowConnection: connection.saveData || ['slow-2g', '2g'].includes(connection.effectiveType),
        }));
      }
    };

    // Initial check
    updateConnectionStatus();

    // Event listeners
    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    
    const connection = (navigator as any).connection;
    if (connection) {
      connection.addEventListener('change', updateConnectionStatus);
    }

    return () => {
      window.removeEventListener('online', updateOnlineStatus);
      window.removeEventListener('offline', updateOnlineStatus);
      if (connection) {
        connection.removeEventListener('change', updateConnectionStatus);
      }
    };
  }, []);

  return networkStatus;
}

// Hook for managing loading states
export function useLoadingState(initialState: boolean = false) {
  const [loading, setLoading] = useState(initialState);
  const [error, setError] = useState<Error | null>(null);

  const startLoading = () => {
    setLoading(true);
    setError(null);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  const setLoadingError = (err: Error) => {
    setLoading(false);
    setError(err);
  };

  const reset = () => {
    setLoading(initialState);
    setError(null);
  };

  return {
    loading,
    error,
    startLoading,
    stopLoading,
    setError: setLoadingError,
    reset,
  };
}
