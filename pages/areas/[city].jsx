import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Layout from '../../components/Layout'
import Reveal from '../../components/Reveal'
import { PageHero, SectionHead, WorkReel, ServiceIndex, StandardsList, CTABand } from '../../components/Sections'
import { services, standards } from '../../data/services'
import { cities, site } from '../../data/site'
import { localBusiness } from '../../lib/schema'

export async function getStaticPaths() {
  return { paths: cities.map(c => ({ params: { city: c.slug } })), fallback: false }
}
export async function getStaticProps({ params }) {
  return { props: { city: cities.find(c => c.slug === params.city) } }
}

const heroByCity = { kennesaw: 'crew-cab-fleet-decals', marietta: 'sponsorship-fleet-pickup', smyrna: 'storefront-window-perf', acworth: 'service-truck-partial-wrap', alpharetta: 'event-window-graphics', atlanta: 'coach-bus-full-wrap', 'cobb-county': 'box-truck-full-wrap' }

export default function CityPage({ city }) {
  const ld = { ...localBusiness, areaServed: [{ '@type': 'City', name: city.name }] }
  return (
    <Layout
      title={`Vinyl Installation in ${city.name}, GA | Vehicle Wraps, Fleet & Window Graphics | 301 Graphics`}
      description={`3M Preferred Installer serving ${city.name}, Georgia. Fleet graphics, vehicle wraps, storefront and wall graphics installed on site. Licensed, insured, owner-operated. Same-day quotes.`}
      canonical={`/areas/${city.slug}`}
      jsonLd={ld}
    >
      <PageHero eyebrow={`Serving ${city.name}, Georgia`} title={`Vinyl installation in <em>${city.name}.</em>`}
        lede={`${city.blurb} 3M Preferred Installer and Fleet Graphics Certified, based in ${site.city}. We come to you.`}
        photo={heroByCity[city.slug] || 'crew-cab-fleet-decals'} cta="Request a quote" short />

      <section className="shell section">
        <SectionHead eyebrow={`What we install in ${city.name}`} title="Every surface, <em>every scale.</em>" />
        <div className="mt-12"><ServiceIndex items={services} /></div>
      </section>

      <section className="shell section !pt-0">
        <SectionHead eyebrow="Nearby work" title="Installed around <em>metro Atlanta.</em>" right={<Link href="/work" className="btn btn-text">All work <ArrowRight size={16} /></Link>} />
        <div className="mt-12"><WorkReel ids={['sponsorship-fleet-pickup', 'storefront-window-perf', 'exterior-mural-panels', 'promaster-fleet-wrap', 'office-art-panels', 'bronco-accent-stripes']} /></div>
      </section>

      <section className="shell section !pt-0">
        <SectionHead eyebrow="Why 301" title={`What ${city.name} businesses <em>get.</em>`} />
        <div className="mt-8"><StandardsList items={standards} /></div>
        <Reveal className="mt-14 flex flex-wrap gap-x-6 gap-y-2">
          <span className="eyebrow !text-ash">Also serving</span>
          {cities.filter(c => c.slug !== city.slug).map(c => <Link key={c.slug} href={`/areas/${c.slug}`} className="text-xs tracking-[0.14em] uppercase text-ivory/70 hover:text-champagne transition-colors">{c.name}</Link>)}
        </Reveal>
      </section>

      <CTABand title={`Working in <em>${city.name}?</em>`} lede="Send the vehicle or the address, coverage and your window. A firm number comes back, usually the same day." />
    </Layout>
  )
}
