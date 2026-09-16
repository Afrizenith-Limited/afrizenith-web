import Script from "next/script";

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Google Analytics 4 through gtag.js.
 *
 * Renders nothing without a measurement ID, and nothing outside production, so
 * local and preview traffic never reaches the property. Both tags load with
 * `afterInteractive`, which keeps them off the critical path.
 *
 * Soft navigations are counted by GA4 enhanced measurement (history events),
 * so no client-side pageview wiring is needed here.
 */
export function GoogleAnalytics() {
  if (!MEASUREMENT_ID || process.env.NODE_ENV !== "production") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
