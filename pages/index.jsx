import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import { SectionHead, WorkReel, Stats, StandardsList, ServiceIndex, Reviews, InstagramStrip, FAQ, CTABand } from '../components/Sections'
import { services, standards, faqs } from '../data/services'
import { byId } from '../data/work'
import { localBusiness, faqSchema } from '../lib/schema'

const ticker = ['Fleet graphics', 'Vehicle wraps', 'Storefront & windows', 'Walls & architectural', 'Interiors & retail', 'Color change', 'Removal & re-brand', 'Trade install partner']

function Door({ href, eyebrow, title, body, photo, cta }) {
  const p = byId(photo)
  return (
    <Link href={href} className="group relative block overflow-hidden photo aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]">
      <img src={p.small} srcSet={`${p.small} 800w, ${p.src} 1500w`} sizes="(min-width:1024px) 50vw, 100vw" alt={p.caption} loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-7 md:p-10">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h3 className="display h2 text-ivory group-hover:text-champagne-light transition-colors duration-500">{title}</h3>
        <p className="body mt-4 max-w-[34em]">{body}</p>
        <span className="btn btn-text mt-6">{cta} <ArrowRight size={16} /></span>
      </div>
    </Link>
  )
}

export default function Home() {
  return (
    <Layout canonical="/" jsonLd={[localBusiness, faqSchema(faqs)]}>
      <Hero />

      {/* Ticker */}
      <div className="hairline hairline-b overflow-hidden py-4 border-b border-[var(--hairline)]" aria-hidden="true">
        <div className="marquee">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="eyebrow !text-ivory/60 px-8 whitespace-nowrap flex items-center gap-8">{t} <span className="w-1 h-1 rounded-full bg-champagne inline-block" /></span>
          ))}
        </div>
      </div>

      {/* Two doors */}
      <section className="shell section">
        <SectionHead eyebrow="Who we work for" title="Two kinds of client. <em>One standard.</em>"
          lede="Most of what we install is for companies: fleets, retailers, print shops and the coordinators who run their rollouts. The rest is for people who want their own vehicle done right." />
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-14">
          <Reveal><Door href="/commercial" eyebrow="For your business" title="Fleet, retail & storefront" body="Multi-vehicle programs, seasonal window changeovers, wall and interior graphics. Scheduled around your downtime, documented on every unit." photo="crew-cab-fleet-decals" cta="Commercial work" /></Reveal>
          <Reveal delay={0.1}><Door href="/personal" eyebrow="For your ride" title="Color change & accents" body="Satin, matte and gloss color changes, stripes, chrome delete and paint protection. We come to your driveway." photo="matte-color-change-truck" cta="Wraps for your vehicle" /></Reveal>
        </div>
      </section>

      {/* Work reel */}
      <section className="shell section !pt-0">
        <SectionHead eyebrow="Selected work" title="Recent installs." right={<Link href="/work" className="btn btn-text">See all work <ArrowRight size={16} /></Link>} />
        <div className="mt-12">
          <WorkReel ids={['sponsorship-fleet-pickup', 'coach-bus-full-wrap', 'exterior-mural-panels', 'motorhome-graphics', 'storefront-window-perf', 'curved-wall-wrap-corporate', 'shuttle-bus-partial-wrap', 'bronco-accent-stripes']} />
        </div>
      </section>

      {/* Stats + standards */}
      <section className="shell section !pt-0">
        <Stats items={[
          { value: '1,000+', label: 'Installs completed' },
          { value: '3M ×2', label: 'Preferred Installer & Fleet Certified' },
          { value: '$2M', label: 'General liability coverage' },
          { value: 'Same day', label: 'Typical quote turnaround' },
        ]} />
        <div className="mt-20">
          <SectionHead eyebrow="How we work" title="The install <em>is</em> the product." lede="Anyone can buy the same film. What you are paying for is the placement, the edges, the schedule and the person who answers the phone." />
          <div className="mt-8"><StandardsList items={standards} /></div>
        </div>
      </section>

      {/* Services */}
      <section className="shell section !pt-0">
        <SectionHead eyebrow="Services" title="Every surface, <em>every scale.</em>" />
        <div className="mt-12"><ServiceIndex items={services} /></div>
      </section>

      {/* Reviews */}
      <section className="bg-graphite/40 hairline">
        <div className="shell section"><Reviews /></div>
      </section>

      {/* Instagram */}
      <section className="shell section">
        <InstagramStrip ids={['service-truck-partial-wrap', 'fleet-pickup-partial-wrap', 'warehouse-building-lettering', 'office-art-panels']} />
      </section>

      {/* FAQ */}
      <section className="shell section !pt-0">
        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-5">Questions</p>
            <h2 className="display h2">Straight answers.</h2>
          </Reveal>
          <div className="lg:col-span-8"><FAQ items={faqs} /></div>
        </div>
      </section>

      <CTABand />
    </Layout>
  )
}
