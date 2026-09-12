import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import { PageHero, SectionHead, Split, WorkReel, CTABand } from '../components/Sections'
import { serviceSchema } from '../lib/schema'

const partners = [
  { t: 'Print & sign shops', b: 'You sell the job and print it. We install it under your name, send you the photos, and your client never has to hear ours.' },
  { t: 'National coordinators', b: 'Retail rollouts, fleet programs and multi-site campaigns. Vendor packets returned fast, COIs with your holder, photo documentation on every location.' },
  { t: 'Agencies & brands', b: 'Experiential, events and campaign work that has to be up by a date. We plan around load-in and store hours and clean up like we were never there.' },
  { t: 'Upfitters & fleet managers', b: 'We work in your bay or your yard, in batches sized to your schedule, with a placement spec built from unit one.' },
]

const sendUs = ['Print-ready panel breakdown or a proof with dimensions', 'Vehicle year, make and model, or site photos and measurements', 'Material spec (we install 3M, Avery Dennison, Arlon, Orafol and most cast and calendared films)', 'Site contact, access notes and the install window', 'Where the graphics are shipping, or when we can pick them up']

const wontDo = ['No printing, no design. We are not a competitor for your client.', 'No cold-calling your accounts. Ever.', 'No surprise line items. Travel and surveys are quoted up front.']

export default function Trade() {
  return (
    <Layout
      title="Trade Install Partner for Print Shops & Coordinators | Georgia | 301 Graphics"
      description="Install-only partner for print shops, sign companies, agencies and national coordinators across Georgia and the Southeast. 3M Preferred Installer, $2M GL, fast vendor onboarding, photo documentation on every job."
      canonical="/trade"
      image="/work/coach-bus-full-wrap.jpg"
      jsonLd={serviceSchema('Subcontract vinyl installation for the trade', 'Install-only subcontractor for print shops, sign companies, agencies and national coordinators.')}
    >
      <PageHero eyebrow="For print shops, sign companies, agencies & coordinators" title="Your installer <em>in Georgia.</em>"
        lede="You print it, sell it and own the relationship. We put it on the vehicle, the glass or the wall exactly the way your proof says, and send you the photos."
        photo="coach-bus-full-wrap" cta="Start a job" secondary={<Link href="/quote?type=trade&service=trade-guide" className="btn btn-ghost">Request the trade pricing guide</Link>} />

      <section className="shell section">
        <SectionHead eyebrow="Who we partner with" title="Built to sit <em>behind</em> your brand." />
        <div className="mt-10 grid md:grid-cols-2 gap-x-12 hairline">
          {partners.map((p, i) => (
            <Reveal key={p.t} delay={(i % 2) * 0.08} className="hairline-soft py-8 first:border-t-0 md:[&:nth-child(2)]:border-t-0">
              <h3 className="display h3">{p.t}</h3>
              <p className="body mt-4">{p.b}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell section !pt-0">
        <Split flip eyebrow="Credentials that matter to your client" title="Certified on the film <em>you sell.</em>" photo="curved-wall-wrap-corporate" aspect="aspect-[4/3]">
          <p>3M Preferred Installer and 3M Fleet Graphics Certified, listed on 3M's installer locator. Avery Dennison trained. Over a thousand installs across fleet, retail, architectural and interior work.</p>
          <p>Licensed Georgia LLC with $2M general liability. Additional insured and primary/non-contributory endorsements on request, jobsite safety and quality policies in writing.</p>
        </Split>
      </section>

      <section className="bg-graphite/40 hairline">
        <div className="shell section grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow mb-5">What to send</p>
            <h2 className="display h2">Everything we need to <em>quote in a day.</em></h2>
            <ul className="mt-8 hairline">
              {sendUs.map(s => <li key={s} className="hairline-soft first:border-t-0 py-4 flex gap-4 text-ivory/85 text-[0.95rem]"><Check size={17} className="text-champagne shrink-0 mt-0.5" /><span>{s}</span></li>)}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow mb-5">Ground rules</p>
            <h2 className="display h2">What we <em>won't</em> do.</h2>
            <ul className="mt-8 hairline">
              {wontDo.map(s => <li key={s} className="hairline-soft first:border-t-0 py-4 text-ivory/85 text-[0.95rem]">{s}</li>)}
            </ul>
            <p className="body mt-8">Removal is quoted separately and graded on film age, sun exposure and substrate. We pull a test patch before pricing so your client's estimate holds.</p>
          </Reveal>
        </div>
      </section>

      <section className="shell section">
        <SectionHead eyebrow="Trade work" title="Installed for our partners." right={<Link href="/work" className="btn btn-text">All work <ArrowRight size={16} /></Link>} />
        <div className="mt-12">
          <WorkReel ids={['curved-wall-wrap-corporate', 'event-window-graphics', 'locker-bank-wrap', 'box-truck-side-graphics', 'trailer-lettering', 'decorative-window-film-interior', 'garage-wayfinding-graphics', 'entrance-architectural-graphics']} />
        </div>
      </section>

      <CTABand title="Have a job in <em>Georgia?</em>" lede="Send the proof and the address. You will have a number and available dates, usually the same day." photo="event-window-graphics" cta="Start a trade job" />
    </Layout>
  )
}
