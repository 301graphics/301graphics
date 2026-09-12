import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import { PageHero, SectionHead, Stats, StandardsList, Reviews, CTABand } from '../components/Sections'
import { standards } from '../data/services'
import { site, cities } from '../data/site'
import { byId } from '../data/work'

const coverage = [
  { t: 'Cobb County', b: 'Home base. Kennesaw, Marietta, Acworth, Smyrna and everything between.' },
  { t: 'Metro Atlanta', b: 'Routine. Intown, the Perimeter, the 400 corridor, Gwinnett, Henry and Douglas.' },
  { t: 'The Southeast', b: 'Regular. Birmingham, Chattanooga, Greenville, Nashville, the Carolinas and Florida.' },
  { t: 'Nationwide', b: 'For fleet programs and multi-site rollouts, with travel quoted up front.' },
]

export default function About() {
  const p = byId('textured-wall-wrap-exterior')
  return (
    <Layout title="About 301 Graphics | Owner-Operated 3M Certified Installer, Kennesaw GA" description="301 Graphics is an owner-operated commercial vinyl installation company in Kennesaw, Georgia. 3M Preferred Installer and Fleet Graphics Certified, 1,000+ installs, $2M general liability, mobile across the Southeast." canonical="/about" image="/work/motorhome-graphics.jpg">
      <PageHero eyebrow="About" title="Owner-operated. <em>On purpose.</em>"
        lede="301 Graphics is one installer's standard, applied to every job: the coordinator's national rollout and the neighbor's Bronco get the same edges, the same schedule and the same photos."
        photo="motorhome-graphics" short />

      <section className="shell section">
        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5">The company</p>
            <h2 className="display h2">Built by an installer, <em>for the work.</em></h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 body space-y-5 text-[1.05rem]">
            <p>Tony Nesser started installing vinyl five years ago and has put down more than a thousand jobs since: fleet lettering in truck yards at 5am, storefront changeovers after the mall closes, coach buses, murals on block walls, office interiors on opening week.</p>
            <p>301 Graphics was formed in late 2025 to do that work under its own name. It is a mobile, install-only company. We do not print, we do not design, and we do not run a shop with overhead built into your price. We come to the vehicle, the store or the site, and we partner with the best print houses in the Southeast when a client wants the whole job handled.</p>
            <p>Within the first year the company earned 3M's Preferred Installer and Fleet Graphics certifications, and became the Georgia installer for print shops, sign companies and national coordinators who need the job done to spec, on the date, with proof.</p>
          </Reveal>
        </div>
      </section>

      <section className="shell section !pt-0">
        <Stats items={[
          { value: '1,000+', label: 'Installs completed' },
          { value: '5 yrs', label: 'Installing vinyl' },
          { value: '2', label: '3M certifications' },
          { value: '$2M', label: 'General liability' },
        ]} />
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 photo grain"><img src={p.src} alt="" loading="lazy" className="!transition-none opacity-50" /><div className="absolute inset-0 bg-gradient-to-b from-carbon via-carbon/70 to-carbon" /></div>
        <div className="shell relative section">
          <SectionHead eyebrow="Certifications" title="Certified where it <em>counts.</em>" lede="3M's certifications are earned on the film, in person, against a standard. They are the reason coordinators and print shops send us work they cannot afford to redo." />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12 items-end">
            <Reveal><img src="/brand/3m-preferred-installer.png" alt="3M Preferred Installer" className="h-16 w-auto" /><p className="mute text-xs mt-5 tracking-[0.14em] uppercase">Certified May 2026</p></Reveal>
            <Reveal delay={0.05}><img src="/brand/3m-fleet-graphics.png" alt="3M Fleet Graphics Certified" className="h-14 w-auto" /><p className="mute text-xs mt-5 tracking-[0.14em] uppercase">Certified March 2026</p></Reveal>
            <Reveal delay={0.1}><p className="display h3">Avery Dennison</p><p className="mute text-xs mt-5 tracking-[0.14em] uppercase">Trained, films & wide format</p></Reveal>
            <Reveal delay={0.15}><p className="display h3">Licensed & insured</p><p className="mute text-xs mt-5 tracking-[0.14em] uppercase">{site.legalName} · {site.insurance}</p></Reveal>
          </div>
        </div>
      </section>

      <section className="shell section">
        <SectionHead eyebrow="Standards" title="What every job <em>gets.</em>" />
        <div className="mt-8"><StandardsList items={standards} /></div>
      </section>

      <section className="bg-graphite/40 hairline">
        <div className="shell section grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-5">Coverage</p>
            <h2 className="display h2">Mobile by <em>design.</em></h2>
            <p className="body mt-6">No shop means no shuttling your vehicles across town and no facility cost buried in the quote. It also means we can be in Birmingham on Tuesday and Alpharetta on Wednesday.</p>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {cities.map(c => <Link key={c.slug} href={`/areas/${c.slug}`} className="text-xs tracking-[0.14em] uppercase text-ash hover:text-champagne transition-colors">{c.name}</Link>)}
            </div>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 gap-x-10 hairline">
            {coverage.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.06} className="hairline-soft first:border-t-0 sm:[&:nth-child(2)]:border-t-0 py-7">
                <h3 className="display h3">{c.t}</h3>
                <p className="body mt-3">{c.b}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section"><Reviews /></section>

      <CTABand title="Let's talk about <em>your job.</em>" photo="crew-cab-fleet-decals" />
    </Layout>
  )
}
