// Lightweight event tracking. Fires to GA4 (if configured) and Vercel Analytics (if installed).
export function track(event, params = {}) {
  if (typeof window === 'undefined') return
  try {
    if (window.gtag) window.gtag('event', event, params)
    if (window.va) window.va('event', { name: event, data: params })
  } catch (_) {}
}
