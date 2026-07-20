import Layout from '../components/Layout'
import AnimateIn from '../components/AnimateIn'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    number: '01',
    id: 'fleet',
    title: 'Fleet Graphics',
    category: 'Fleet · High Volume',
    desc: 'Fleet branding is where we shine. We are 3M Fleet Certified and built specifically for high-volume commercial work — from 2 vehicles to 200+ trailers. Every unit in your fleet gets the same precision, the same quality, and the same professional finish. We work with print shops, logistics companies, and corporate brands across Atlanta, the Southeast, and nationwide.',
    features: [
      '3M Fleet Certified installer',
      'Any fleet size — 2 to 200+ vehicles',
      'Trailers, box trucks, vans, pickups',
      'Consistent quality across all units',
      'Flexible scheduling to match your timeline',
      'Full before/after photo documentation',
    ],
    vinyl: '3M · Avery 1105 · All Major Brands',
  },
  {
    number: '02',
    id: 'vehicle-wraps',
    title: 'Vehicle Wraps',
    category: 'Vehicles · Commercial',
    desc: 'A quality vehicle wrap starts with a quality install. We handle proper surface prep, heat application, edge sealing, and final inspection on every vehicle we touch. Cars, vans, box trucks, pickups, SUVs — if it drives, we wrap it. We work with 3M and Avery 1105 primarily, and are experienced with all major vinyl brands.',
    features: [
      'Full and partial vehicle wraps',
      'Cars, vans, trucks, SUVs, and more',
      '3M and Avery 1105 specialist',
      'Proper prep — no shortcuts',
      'Clean edge sealing on every panel',
      'Photo documentation on completion',
    ],
    vinyl: '3M · Avery 1105 · Oracal · All Brands',
  },
  {
    number: '03',
    id: 'color-change',
    title: 'Color Change Wraps',
    category: 'Enthusiast · Personal Vehicles',
    desc: 'You\'ve pictured your car in that color long enough — we make it real. Full and partial color changes in gloss, matte, satin, and color-shift films, installed with the same 3M-certified precision that commercial brands trust. Panel edges wrapped, relief cuts where they belong, no bubbles, no lifted corners at the gas pump six months later. Daily drivers, weekend builds, and show cars all welcome.',
    features: [
      'Full and partial color change wraps',
      'Gloss, matte, satin, and color-shift finishes',
      'Chrome deletes and accent packages',
      '3M 2080, Avery SW900, KPMF films',
      'Real film samples to touch before you commit',
      '5–7 year rated films with proper care',
    ],
    vinyl: '3M 2080 · Avery SW900 · KPMF · Specialty Films',
  },
  {
    number: '04',
    id: 'ppf-tint',
    title: 'PPF, Tint & Ceramic',
    category: 'Enthusiast · Protection',
    desc: 'Protect the paint you paid for. Self-healing paint protection film guards against rock chips and road rash — front-end packages, track packs, or full-body coverage. Ceramic window tint keeps heat and UV out without the purple fade or bubbles. Ceramic coating adds long-term gloss and chemical protection over paint, vinyl, or PPF. Stack them however your build calls for it.',
    features: [
      'Self-healing paint protection film',
      'Front-end, track pack, and full-body PPF',
      'Ceramic window tint — automotive & commercial',
      'Ceramic coating over paint, wrap, or PPF',
      'Manufacturer-backed film warranties',
      'Wrap-safe products on every install',
    ],
    vinyl: 'Premium PPF & Ceramic Films · All Major Brands',
  },
  {
    number: '05',
    id: 'wall-window',
    title: 'Storefront & Window Graphics',
    category: 'Commercial · Retail',
    desc: 'Your storefront is your brand\'s first impression — we make sure it lands. Window vinyl, perforated film, cut lettering, frosted film, and full exterior graphics installed clean, level, and built to last. We serve retail businesses, restaurants, salons, medical offices, and commercial properties throughout the Cobb County and Atlanta area.',
    features: [
      'Window vinyl and perforated film',
      'Cut vinyl lettering and logos',
      'Frosted and privacy film',
      'Exterior building graphics',
      'Retail, restaurant, office, medical',
      'Cobb County and Atlanta metro service area',
    ],
    vinyl: '3M · Avery · Oracal',
  },
  {
    number: '06',
    id: 'wall-murals',
    title: 'Wall Murals & Interior Graphics',
    category: 'Interior · Large Format',
    desc: 'Large-format interior vinyl installs require patience, precision, and experience with substrates. We handle smooth drywall, textured walls, concrete, and more — delivering lobby murals, wayfinding graphics, office branding walls, and retail interior graphics that make spaces impossible to forget.',
    features: [
      'Large-format wall murals',
      'Smooth and textured surface capability',
      'Lobby, warehouse, retail, restaurant',
      'Office and corporate branding walls',
      'Wayfinding and directional graphics',
      'Removable options available on request',
    ],
    vinyl: '3M · Avery · Specialty Interior Vinyls',
  },
  {
    number: '07',
    id: 'trade-show',
    title: 'Trade Show & Event Installs',
    category: 'Events · Trade Show',
    desc: 'Trade shows move on tight schedules and there\'s no room for error. We show up when we say we will, install efficiently, and hand off a polished result before your client ever sees the space. Booth wraps, backdrop graphics, floor graphics, hanging banners — we handle it all on-site with speed and precision.',
    features: [
      'On-site trade show installations',
      'Booth and display wraps',
      'Backdrop and tension fabric graphics',
      'Floor and ceiling graphic installs',
      'Fast turnaround — tight deadlines met',
      'Southeast regional event travel',
    ],
    vinyl: '3M · Avery · Event-Specific Vinyls',
  },
  {
    number: '08',
    id: 'subcontract',
    title: 'Subcontract Install Partner',
    category: 'Print Shops · Agencies',
    desc: 'For print shops and marketing agencies, we are your invisible install arm. You handle the client relationship and production — we show up professional, install clean, document everything with photos, and deliver results that make your brand look exceptional. We work Southeast-wide and travel nationwide for the right volume of work.',
    features: [
      'Install-only — no competing with your print business',
      'Experienced with all print shop workflows',
      'Full before/after photo documentation sent to you',
      'Same-day quotes with precise dimensions',
      'Scalable — 1 job or 50 per month',
      '3M Fleet Certified — meets national brand standards',
    ],
    vinyl: 'All client-supplied materials accepted',
  },
]

export default function Services() {
  return (
    <Layout
      title="Services | 301 Graphics — Commercial Vinyl Installation Atlanta, GA"
      description="Vinyl installation services in Atlanta and Cobb County, GA. Fleet graphics, vehicle wraps, color change wraps, PPF, window tint, storefront signage, wall murals, and trade show installs. 3M Preferred Installer. Free quotes."
    >
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="section-label">Commercial Vinyl Installation Services</div>
            <h1 className="section-title text-white mb-6">
              EVERY SURFACE.<br />
              <span className="text-yellow-400">EVERY SCALE.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
              We specialize in vinyl installation — commercial fleets, print shop partnerships,
              and now full color changes, PPF, and tint for enthusiasts. One standard of
              precision across all of it. 3M Preferred Installer. Fleet Certified. Avery Trained.
              Licensed LLC. Fully insured.
            </p>
          </AnimateIn>

          {/* Quick trust bar */}
          <AnimateIn delay={0.2}>
            <div className="flex flex-wrap gap-3 mt-10">
              {['3M Fleet Certified', 'Avery 1105 Trained', 'Licensed LLC', 'Fully Insured', 'Same-Day Quotes', 'Southeast & Nationwide'].map(tag => (
                <div key={tag} className="border border-yellow-400/30 px-4 py-1.5 text-yellow-400/80 text-xs tracking-wider uppercase font-semibold">
                  {tag}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 pb-32 bg-black">
        <div className="max-w-7xl mx-auto space-y-px">
          {services.map((svc, i) => (
            <AnimateIn key={svc.number} delay={i * 0.06}>
              <div id={svc.id} className="group bg-zinc-950 hover:bg-zinc-900 transition-colors duration-300 p-10 md:p-16 scroll-mt-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                  <div className="md:col-span-1">
                    <div className="font-display text-5xl text-white/8 group-hover:text-yellow-400/25 transition-colors">
                      {svc.number}
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <div className="text-yellow-400 text-xs tracking-[0.2em] uppercase font-semibold mb-3">
                      {svc.category}
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-6 group-hover:text-yellow-400 transition-colors">
                      {svc.title}
                    </h2>
                    <p className="text-white/50 leading-relaxed mb-4">{svc.desc}</p>
                    <div className="text-white/30 text-xs tracking-widest uppercase">
                      Works with: {svc.vinyl}
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <ul className="space-y-3 mb-8">
                      {svc.features.map((f) => (
                        <li key={f} className="flex items-center gap-3">
                          <CheckCircle size={14} className="text-yellow-400 shrink-0" />
                          <span className="text-white/70 text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-yellow-400 text-sm tracking-widest uppercase font-semibold group-hover:gap-4 transition-all"
                    >
                      Get a Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* SEO service area section */}
      <section className="py-20 px-6 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <div className="section-label">Service Area</div>
                <h3 className="font-display text-3xl text-white tracking-wider mb-4">WHERE WE WORK</h3>
                <div className="space-y-2 text-white/60 text-sm leading-relaxed">
                  <p><span className="text-yellow-400 font-semibold">Primary:</span> Cobb County, GA</p>
                  <p><span className="text-yellow-400 font-semibold">Metro:</span> Atlanta, Marietta, Kennesaw, Smyrna, Austell, Acworth, Roswell, Alpharetta, Sandy Springs</p>
                  <p><span className="text-yellow-400 font-semibold">Regional:</span> Georgia, Tennessee, Alabama, North & South Carolina, Florida</p>
                  <p><span className="text-yellow-400 font-semibold">Nationwide:</span> Available for fleet and large-volume projects</p>
                </div>
              </div>
              <div>
                <div className="section-label">Certifications</div>
                <h3 className="font-display text-3xl text-white tracking-wider mb-4">CREDENTIALS</h3>
                <div className="space-y-3">
                  {[
                    ['3M Fleet Certification', 'Industry-recognized certification for fleet graphic installation'],
                    ['Avery Dennison Training', 'Trained installer for Avery 1105 and wide-format vinyl'],
                    ['Licensed LLC', 'Registered business operating in Georgia'],
                    ['Fully Insured', 'General liability coverage on every job'],
                  ].map(([title, desc]) => (
                    <div key={title}>
                      <div className="text-white font-semibold text-sm">{title}</div>
                      <div className="text-white/40 text-xs leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="section-label">Vinyl Brands</div>
                <h3 className="font-display text-3xl text-white tracking-wider mb-4">WE WORK WITH</h3>
                <div className="space-y-2">
                  {['3M (primary)', 'Avery Dennison 1105', 'Oracal', 'Arlon', 'Hexis', 'All client-supplied materials'].map(brand => (
                    <div key={brand} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-400" />
                      <span className="text-white/70 text-sm">{brand}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-6xl text-black tracking-wider mb-4">NEED A QUOTE?</h2>
            <p className="text-black/60 text-lg mb-3">
              Send us your project details with dimensions and we'll respond the same day.
            </p>
            <p className="text-black/50 text-sm mb-10">
              Call <a href="tel:8153255363" className="font-bold text-black">(815) 325-5363</a> or
              email <a href="mailto:301graphic@gmail.com" className="font-bold text-black">301graphic@gmail.com</a>
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-black text-white font-semibold px-10 py-5 text-sm tracking-widest uppercase hover:bg-zinc-900 transition-all hover:scale-105">
              Request a Free Quote <ArrowRight size={18} />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </Layout>
  )
}
