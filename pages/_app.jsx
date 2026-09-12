import '../styles/globals.css'
import Script from 'next/script'
import '@fontsource-variable/bodoni-moda/opsz.css'
import '@fontsource-variable/bodoni-moda/opsz-italic.css'
import '@fontsource-variable/instrument-sans/wght.css'
import { Analytics } from '@vercel/analytics/react'
import { site } from '../data/site'


export default function App({ Component, pageProps }) {
  const feedId = process.env.NEXT_PUBLIC_INSTAGRAM_FEED_ID
  return (
    <div className="font-root">
      {site.gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">{`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${site.gaId}', { anonymize_ip: true });
          `}</Script>
        </>
      )}
      {feedId && <Script src="https://w.behold.so/widget.js" type="module" strategy="lazyOnload" />}
      <Component {...pageProps} />
      <Analytics />
    </div>
  )
}
