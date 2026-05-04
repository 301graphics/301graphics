import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children, title, description }) {
  const pageTitle = title || '301 Graphics | Vinyl Installation — Vehicle Wraps & Fleet Graphics | Cobb County, GA'
  const pageDesc = description || '3M Preferred Installer & Fleet Certified vinyl installation in Cobb County, GA. Vehicle wraps, fleet graphics, storefront signage, and wall murals. Serving Atlanta, Marietta, Kennesaw, Smyrna, and the Southeast. Licensed LLC. Free quotes.'

  // Enhanced schema for local SEO
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://301graphics.com/#business",
    "name": "301 Graphics",
    "description": pageDesc,
    "image": "https://301graphics.com/logo.png",
    "telephone": "+18153255363",
    "email": "301graphic@gmail.com",
    "url": "https://301graphics.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cobb County",
      "addressRegion": "GA",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.9526,
      "longitude": -84.5499
    },
    "areaServed": [
      { "@type": "City", "name": "Marietta" },
      { "@type": "City", "name": "Smyrna" },
      { "@type": "City", "name": "Kennesaw" },
      { "@type": "City", "name": "Acworth" },
      { "@type": "City", "name": "Atlanta" },
      { "@type": "AdministrativeArea", "name": "Cobb County" },
      { "@type": "State", "name": "Georgia" }
    ],
    "sameAs": ["https://instagram.com/301graphics_"],
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "08:00",
      "closes": "18:00"
    }],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Vinyl Installation Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vehicle Wraps" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fleet Graphics" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storefront Graphics" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wall Murals" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Trade Show Installs" }}
      ]
    }
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="vinyl installer Atlanta, vehicle wraps Cobb County, fleet graphics Georgia, 3M Preferred Installer Atlanta, fleet wraps Marietta, vinyl wrap Kennesaw, storefront signage Atlanta, commercial vinyl installer Smyrna, wall murals Atlanta, vehicle wrap installer near me" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://301graphics.com/logo.png" />
        <meta property="og:locale" content="en_US" />
        <meta name="geo.region" content="US-GA" />
        <meta name="geo.placename" content="Cobb County, Georgia" />
        <meta name="geo.position" content="33.9526;-84.5499" />
        <meta name="ICBM" content="33.9526, -84.5499" />
        <meta name="robots" content="index, follow" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="grain min-h-screen bg-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}
