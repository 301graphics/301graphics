export const site = {
  name: '301 Graphics',
  legalName: '301Graphics LLC',
  tagline: 'Vinyl installation, done to a standard.',
  url: 'https://301graphics.com',
  phone: '(815) 325-5363',
  phoneHref: 'tel:+18153255363',
  smsHref: 'sms:+18153255363',
  email: '301graphic@gmail.com',
  instagram: 'https://www.instagram.com/301graphics_/',
  instagramHandle: '@301graphics_',
  city: 'Kennesaw',
  region: 'GA',
  areaServed: 'Metro Atlanta, the Southeast, and nationwide for fleet programs',
  founded: '2025',
  installs: '1,000+',
  insurance: '$2M general liability',
  hours: 'By appointment. Nights and weekends available for retail and fleet downtime.',
  reviewsUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL || 'https://www.google.com/maps?cid=13903693235106248183',
  writeReviewUrl: process.env.NEXT_PUBLIC_GOOGLE_WRITE_REVIEW_URL || '',
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || '',
  gaId: process.env.NEXT_PUBLIC_GA_ID || '',
  // Formspree form "quote request" on Tony's account. Used when no RESEND_API_KEY is set. Free plan = no file attachments.
  formspreeId: 'xgodaplq',
}

export const nav = [
  { href: '/commercial', label: 'Fleet & retail' },
  { href: '/trade', label: 'Trade partners' },
  { href: '/personal', label: 'Your ride' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
]

export const cities = [
  { slug: 'kennesaw', name: 'Kennesaw', blurb: 'Home base. Same-week scheduling for most jobs in Kennesaw, Acworth and Woodstock.' },
  { slug: 'marietta', name: 'Marietta', blurb: 'Fleet yards, storefronts and office interiors across Marietta and East Cobb.' },
  { slug: 'smyrna', name: 'Smyrna', blurb: 'Vinings, Smyrna and the Cumberland corridor for retail, corporate and fleet work.' },
  { slug: 'acworth', name: 'Acworth', blurb: 'Acworth, Dallas and Cartersville, including trade work for local print shops.' },
  { slug: 'alpharetta', name: 'Alpharetta', blurb: 'Avalon, North Point and the 400 corridor for retail rollouts and corporate interiors.' },
  { slug: 'atlanta', name: 'Atlanta', blurb: 'Intown Atlanta, Buckhead and Midtown for retail, hospitality and fleet programs.' },
  { slug: 'cobb-county', name: 'Cobb County', blurb: 'Everywhere in Cobb, from Mableton to Kennesaw. This is where we live and work.' },
]
