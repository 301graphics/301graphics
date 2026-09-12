import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'
import { site } from '../data/site'

const DEFAULT_TITLE = '301 Graphics | 3M Certified Vinyl Installation, Kennesaw & Atlanta, GA'
const DEFAULT_DESC = 'Commercial vinyl installation company based in Kennesaw, GA. 3M Preferred Installer and Fleet Graphics Certified. Fleet graphics, vehicle wraps, storefront and wall graphics, installed on site across metro Atlanta and the Southeast.'

export default function Layout({ title, description, image = '/og.jpg', canonical, jsonLd, children, noindex = false }) {
  const t = title || DEFAULT_TITLE
  const d = description || DEFAULT_DESC
  const url = canonical ? `${site.url}${canonical}` : site.url
  const img = image.startsWith('http') ? image : `${site.url}${image}`
  return (
    <>
      <Head>
        <title>{t}</title>
        <meta name="description" content={d} />
        <link rel="canonical" href={url} />
        {noindex && <meta name="robots" content="noindex" />}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="301 Graphics" />
        <meta property="og:title" content={t} />
        <meta property="og:description" content={d} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={img} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t} />
        <meta name="twitter:description" content={d} />
        <meta name="twitter:image" content={img} />
        <meta name="theme-color" content="#0B0A09" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      </Head>
      <Nav />
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
