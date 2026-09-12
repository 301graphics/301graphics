import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import { PageHero, SectionHead, Split, WorkReel, StandardsList, CTABand } from '../components/Sections'
import { standards } from '../data/services'
import { serviceSchema } from '../lib/schema'

const process = [
  { n: '01', t: 'Send the scope', b: 'Vehicle list or site addresses, artwork or coverage, and the window you need it done in. A photo of each unit helps.' },
  { n: '02', t: 'Firm quote, fast', b: 'One number with travel and everything included spelled out. No hourly surprises, no change orders for things we should have seen.' },
  { n: '03', t: 'Spec from unit one', b: 'On multi-vehicle work the first install becomes the placement spec. Every unit after it matches, whoever is on the crew.' },
  { n: '04', t: 'Install around your downtime', b: 'Nights, weekends and early mornings are normal for us. Trucks go back on route and stores open on time.' },
  { n: '05', t: 'Photos before you ask', b: 'Before and after on every unit or location, delivered the same day, so your client or your boss has proof without chasing it.' },
]

const readiness = ['W-9 and COI with your company as certificate holder, usually same day', 'CG2010 / CG2037 additional insured, primary and non-contributory endorsements available', 'Vendor packets, NDAs and MSAs signed and returned promptly', 'Written jobsite safety and installation quality policies on file', 'Registered on state and federal procurement portals for public work']

export default function Commercial() {
  return (
    <Layout
      title="Fleet Graphics & Retail Graphics Installation | Atlanta & Southeast | 301 Graphics"
      description="3M Fleet Graphics Certified installer for fleet programs, retail window rollouts, storefront, wall and interior graphics across metro Atlanta and the Southeast. Scheduled around your downtime, photo-documented on every unit."
      canonical="/commercial"
      image="/work/crew-cab-fleet-decals.jpg"
      jsonLd={serviceSchema('Fleet and commercial graphics installation', 'Fleet graphics, retail rollouts, storefront and wall graphics installed on site by a 3M Fleet Graphics Certified installer.')}
    >
      <PageHero eyebrow="Fleet · Retail · Storefront · Interiors" title="Built for programs, <em>not one-offs.</em>"
        lede="Two vans or two hundred trucks. One store or sixty. We install commercial graphics the way a coordinator needs them installed: to spec, on schedule, documented."
        photo="crew-cab-fleet-decals" cta="Request a quote" />

      <section className="shell section">
        <Split eyebrow="Fleet programs" title="Same placement on <em>every</em> unit." photo="sponsorship-fleet-pickup" cta="Quote a fleet" ctaHref="/quote?service=fleet-graphics">
          <p>Fleet work is a consistency problem. Cab lettering, partial wraps, DOT numbers and sponsorship panels have to land in the same place on truck one and truck one hundred and forty. We build the spec from the first vehicle and hold every unit to it.</p>
          <p>3M Fleet Graphics Certified. We work in your yard or at your upfitter, in batches sized to your routes, so nothing sits idle waiting on us.</p>
        </Split>
      </section>

      <section className="shell section !pt-0">
        <Split flip eyebrow="Retail rollouts" title="The store opens with the <em>new campaign up.</em>" photo="storefront-window-perf" cta="Quote a rollout" ctaHref="/quote?service=storefront-windows">
          <p>Seasonal window changeovers, perforated film, frosted privacy film, event takeovers and grand-opening packages. Installed after close or before open, with the old graphics removed and the glass cleaned as part of the job.</p>
          <p>Multi-location? We coordinate installers we have personally vetted and hold every site to the same spec and the same photo documentation.</p>
        </Split>
      </section>

      <section className="shell section !pt-0">
        <Split eyebrow="Walls, buildings & interiors" title="Graphics that live at <em>eye level.</em>" photo="exterior-mural-panels" cta="Quote a space" ctaHref="/quote?service=walls-architectural">
          <p>Building lettering on corrugated steel, printed murals on composite panel, textured wall wraps, lobby branding, wayfinding and fixture graphics. Every substrate takes film differently, so we test before we quote and use the right product for the surface.</p>
        </Split>
      </section>

      <section className="shell section !pt-0">
        <SectionHead eyebrow="How a job runs" title="Five steps, <em>no surprises.</em>" />
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-5 gap-x-8 hairline">
          {process.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06} className="pt-8 pb-6 md:pr-6">
              <p className="display text-3xl text-champagne num">{s.n}</p>
              <h3 className="display h3 mt-5">{s.t}</h3>
              <p className="body mt-3 text-[0.95rem]">{s.b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-graphite/40 hairline">
        <div className="shell section grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5">Vendor ready</p>
            <h2 className="display h2">Paperwork <em>handled.</em></h2>
            <p className="body mt-6">Coordinators and national accounts need a sub they can onboard in an afternoon. We keep the documents current so your project manager never waits on us.</p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <ul className="hairline">
              {readiness.map(r => (
                <li key={r} className="hairline-soft first:border-t-0 py-5 flex gap-4 text-ivory/85"><Check size={18} className="text-champagne shrink-0 mt-0.5" /><span>{r}</span></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="shell section">
        <SectionHead eyebrow="Commercial work" title="From the field." right={<Link href="/work" className="btn btn-text">All work <ArrowRight size={16} /></Link>} />
        <div className="mt-12">
          <WorkReel ids={['coach-bus-full-wrap', 'box-truck-full-wrap', 'shuttle-bus-partial-wrap', 'event-window-graphics', 'warehouse-building-lettering', 'promaster-fleet-wrap', 'retail-display-graphics', 'amphitheater-wall-graphics']} />
        </div>
      </section>

      <section className="shell section !pt-0">
        <SectionHead eyebrow="Why 301" title="What you are actually <em>buying.</em>" />
        <div className="mt-8"><StandardsList items={standards} /></div>
      </section>

      <CTABand title="Send the fleet list <em>or the store list.</em>" lede="Unit count, locations, artwork status and your window. A firm number comes back, usually the same day." photo="crew-cab-fleet-decals" />
    </Layout>
  )
}
