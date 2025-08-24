'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page view
    trackEvent('page_view', {
      page: pathname,
      search_params: searchParams?.toString() || '',
      referrer: document.referrer,
      timestamp: Date.now(),
    });
  }, [pathname, searchParams]);

  return null;
}

// Global analytics function
export function trackEvent(event: string, data: Record<string, unknown> = {}) {
  // Add session ID and user agent
  const sessionId = getSessionId();
  const eventData = {
    ...data,
    session_id: sessionId,
    user_agent: navigator.userAgent,
    screen_resolution: `${screen.width}x${screen.height}`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    timestamp: Date.now(),
  };

  // Send to our analytics endpoint
  fetch('/api/analytics', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      event,
      page: window.location.pathname,
      data: eventData,
    }),
  }).catch((error) => {
    console.warn('Analytics tracking failed:', error);
  });

  // Also send to Google Analytics if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event, {
      custom_parameter: JSON.stringify(eventData),
      page_path: window.location.pathname,
    });
  }
}

// Conversion tracking helpers
export function trackConversion(
  conversionType: string,
  value?: number,
  data: Record<string, unknown> = {}
) {
  trackEvent('conversion', {
    conversion_type: conversionType,
    value: value || 0,
    currency: 'USD',
    ...data,
  });
}

export function trackFormStart(formName: string) {
  trackEvent('form_start', { form_name: formName });
}

export function trackFormSubmit(formName: string, success: boolean = true) {
  trackEvent(success ? 'form_submit_success' : 'form_submit_error', {
    form_name: formName,
  });
}

export function trackButtonClick(buttonName: string, location: string) {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location,
  });
}

export function trackPackageInterest(packageName: string, price: number) {
  trackEvent('package_interest', {
    package_name: packageName,
    package_price: price,
  });
}

// Session management
function getSessionId(): string {
  if (typeof window === 'undefined') return 'server';

  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random()
      .toString(36)
      .substr(2, 9)}`;
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (command: string, action: string, parameters?: Record<string, unknown>) => void;
  }
}
