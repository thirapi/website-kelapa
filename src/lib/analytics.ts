export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };
  if (typeof w.gtag === "function") {
    w.gtag("event", event, params ?? {});
  } else if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event, ...params });
  }
  if (process.env.NODE_ENV === "development") {
    console.debug(`[analytics] ${event}`, params);
  }
}
