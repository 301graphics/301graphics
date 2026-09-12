import { site } from '../data/site'
import { rating } from '../data/reviews'

export const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${site.url}/#business`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  telephone: '+1-815-325-5363',
  email: site.email,
  image: `${site.url}/og.jpg`,
  logo: `${site.url}/brand/logo-light.png`,
  description: 'Commercial vinyl installation company. 3M Preferred Installer and Fleet Graphics Certified. Fleet graphics, vehicle wraps, storefront and wall graphics installed on site.',
  address: { '@type': 'PostalAddress', addressLocality: site.city, addressRegion: site.region, addressCountry: 'US' },
  areaServed: [
    { '@type': 'City', name: 'Atlanta' }, { '@type': 'City', name: 'Kennesaw' }, { '@type': 'City', name: 'Marietta' },
    { '@type': 'AdministrativeArea', name: 'Cobb County' }, { '@type': 'State', name: 'Georgia' },
  ],
  sameAs: [site.instagram],
  priceRange: '$$',
  foundingDate: site.founded,
  knowsAbout: ['Vehicle wraps', 'Fleet graphics', 'Window graphics', 'Wall graphics', 'Vinyl installation', '3M vinyl'],
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: '3M Preferred Installer' },
    { '@type': 'EducationalOccupationalCredential', name: '3M Fleet Graphics Certified' },
  ],
  aggregateRating: rating.count > 0 ? { '@type': 'AggregateRating', ratingValue: rating.value, reviewCount: rating.count } : undefined,
}

export function faqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  }
}

export function serviceSchema(name, description) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@id': `${site.url}/#business` },
    areaServed: 'Metro Atlanta and the Southeast',
  }
}
