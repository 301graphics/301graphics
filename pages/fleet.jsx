import Layout from '../components/Layout'
import AnimateIn from '../components/AnimateIn'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Zap, Shield, Clock, Award, MapPin, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const fleetStats = [
  { value: '16M+', label: 'Annual impressions', sub: 'per wrapped vehicle on US roads' },
  { value: '$0.48', label: 'Cost per 1,000 views', sub: 'vs. $9+ for social media ads' },
  { value: '97%', label: 'Of Americans', sub: 'notice vehicle graphics daily' },
  { value: '5–7 yrs', label: 'Wrap lifespan', sub: 'with quality vinyl & install' },
]

const vehicleTypes = [
  'Cargo vans & sprinters',
  'Box trucks & straight trucks',
  'Semi-truck cabs & trailers',
  'Pickup trucks',
  'Service vehicles & utility trucks',
  'Buses & shuttles',
  'Flatbed & specialty vehicles',
  'Government & municipal fleets',
]

const process = [
  { n: '01', title: 'Send us your fleet list', desc: 'Vehicle makes, models, years, and quantity. We\'ll let you know what we need to build an accurate quote.' },
  { n: '02', title: 'Receive a line-item bid', desc: 'Same-day quote with per-unit pricing broken down by service type — removal, install, travel.' },
  { n: '03', title: 'Graphics arrive, we schedule', desc: 'Your print partner ships the graphics directly to us or to the install site. We coordinate from there.' },
  { n: '04', title: 'Install at your location', desc: 'We come to your fleet yard, warehouse, or designated site. We minimize vehicle downtime.' },
  { n: '05', title: 'Photo documentation delivered', desc: 'Before and after photos on every unit sent directly to you and your print partner.' },
]

const industries = [
  { icon: '🚚', name: 'Logistics & Delivery', desc: 'Fleet rebrands for regional and national delivery operations.' },
  { icon: '🔧', name: 'HVAC, Plumbing & Electrical', desc: 'Service vehicle wraps that build trust before the tech walks in the door.' },
  { icon: '🏗️', name: 'Construction & Contracting', desc: 'Trucks, trailers, and equipment wrapped for maximum jobsite visibility.' },
  { icon: '🏥', name: 'Medical & Healthcare', desc: 'Compliant, professional fleet branding for mobile health services.' },
  { icon: '🚐', name: 'Transportation & Shuttle', desc: 'Bus, van, and shuttle graphics for transit authorities and private operators.' },
  { icon: '🏛️', name: 'Government & Municipal', desc: 'Fleet graphics for city, county, and state vehicle programs.' },
]

export default function Fleet() {
  return (
    <Layout
      title="Fleet Graphics Installer — Cobb County & Atlanta, GA | 301 Graphics"
      description="3M Fleet Certified commercial fleet graphics installer based in Cobb County, GA. Vehicle wraps and fleet graphics for any size fleet. Serving Atlanta, Southeast, and nationwide. Licensed LLC. Fully insured. Same-day quotes."
    >
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/4 blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimateIn>
            <div className="section-label">Fleet Graphics Installation</div>
            <h1 className="section-title text-white mb-6">
              YOUR FLEET.<br />
              <span className="text-yellow-400">YOUR BRAND.</span><br />
              INSTALLED RIGHT.
            </h1>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-8">
              301 Graphics is a 3M Fleet Certified installation company built for commercial fleet work.
              Whether you need 2 vehicles wrapped or 200, we deliver consistent quality, on-time installs,
              and full documentation — every time.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['3M Fleet Certified', 'Avery 1105 Trained', 'Licensed LLC', 'Fully Insured', 'Same-Day Quotes', 'Southeast & Nationwide'].map(tag => (
                <div key={tag} className="border border-yellow-400/30 px-4 py-1.5 text-yellow-400/80 text-xs tracking-wider uppercase font-semibold">{tag}</div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Get a Fleet Quote <ArrowRight size={16} /></Link>
              <Link href="/portfolio" className="btn-outline">See Fleet Work</Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-yellow-400">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-12">
            <h2 className="font-display text-4xl text-black tracking-wider mb-2">WHY FLEET GRAPHICS WORK</h2>
            <p className="text-black/60 text-sm">The numbers behind why your fleet is your most valuable advertising asset</p>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10">
            {fleetStats.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.08}>
                <div className="bg-yellow-400 p-8 text-center">
                  <div className="font-display text-5xl text-black mb-2">{s.value}</div>
                  <div className="text-black font-semibold text-sm mb-1">{s.label}</div>
                  <div className="text-black/50 text-xs">{s.sub}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why 301 for fleet */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <AnimateIn>
              <div className="section-label">Why Choose 301 Graphics for Fleet</div>
              <h2 className="section-title text-white mb-6">
                INSTALL-ONLY.<br />
                <span className="text-yellow-400">FLEET-FOCUSED.</span><br />
                CERTIFIED.
              </h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Most wrap companies try to do everything — design, print, and install.
                We do one thing exclusively: installation. That singular focus means
                every installer on a fleet job is optimized for precision, speed, and
                consistency across every unit.
              </p>
              <p className="text-white/50 leading-relaxed">
                We hold 3M Fleet Certification and Avery Dennison training — the credentials
                that national brands require from their install partners. When you hand us
                a 50-vehicle rebrand, we treat unit 50 with the same care as unit 1.
              </p>
            </AnimateIn>

            <div className="grid grid-cols-1 gap-px bg-white/10">
              {[
                { icon: <Award size={18} />, title: '3M Fleet Certified', desc: 'The industry-standard certification for fleet graphic installation — required by many national brands.' },
                { icon: <Zap size={18} />, title: 'Minimal Vehicle Downtime', desc: 'We work efficiently at your fleet yard to keep your vehicles on the road as much as possible.' },
                { icon: <Shield size={18} />, title: 'Install-Only = No Conflict', desc: 'We never compete with your print partner. We are a pure installer — your subcontract team.' },
                { icon: <Clock size={18} />, title: 'Consistent Across Every Unit', desc: 'Unit 1 and unit 100 look identical. That\'s what fleet branding requires and what we deliver.' },
                { icon: <MapPin size={18} />, title: 'We Come to Your Fleet', desc: 'We travel to your fleet yard, depot, or designated location — anywhere in the Southeast or nationwide.' },
                { icon: <CheckCircle size={18} />, title: 'Full Documentation', desc: 'Before and after photos on every single vehicle, organized and sent to you and your print partner.' },
              ].map((item, i) => (
                <AnimateIn key={item.title} delay={i * 0.06}>
                  <div className="bg-black p-6 group hover:bg-zinc-900 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="text-yellow-400 mt-0.5 shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="text-white font-semibold mb-1 text-sm">{item.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="mb-16">
            <div className="section-label">Fleet Install Process</div>
            <h2 className="section-title text-white">
              HOW A FLEET<br />
              <span className="text-yellow-400">JOB WORKS</span>
            </h2>
          </AnimateIn>
          <div className="space-y-px">
            {process.map((step, i) => (
              <AnimateIn key={step.n} delay={i * 0.08}>
                <div className="grid grid-cols-12 gap-8 items-start p-8 bg-zinc-950 group hover:bg-black transition-colors border-b border-white/5">
                  <div className="col-span-1">
                    <div className="font-display text-5xl text-yellow-400/20 group-hover:text-yellow-400/40 transition-colors">{step.n}</div>
                  </div>
                  <div className="col-span-11">
                    <h3 className="font-display text-2xl text-white tracking-wider mb-2 group-hover:text-yellow-400 transition-colors">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle types */}
      <section className="py-24 px-6 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <AnimateIn>
              <div className="section-label">What We Install On</div>
              <h2 className="section-title text-white mb-6">
                ANY VEHICLE.<br />
                <span className="text-yellow-400">ANY FLEET.</span>
              </h2>
              <p className="text-white/50 leading-relaxed">
                We work on every type of commercial vehicle. If it's in your fleet,
                we can install on it.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <ul className="space-y-3">
                {vehicleTypes.map((v, i) => (
                  <motion.li key={v}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 pb-3 border-b border-white/10">
                    <CheckCircle size={15} className="text-yellow-400 shrink-0" />
                    <span className="text-white/80 text-sm">{v}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="mb-16">
            <div className="section-label">Industries We Serve</div>
            <h2 className="section-title text-white">
              WE INSTALL FOR<br />
              <span className="text-yellow-400">EVERY INDUSTRY</span>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {industries.map((ind, i) => (
              <AnimateIn key={ind.name} delay={i * 0.08}>
                <div className="bg-zinc-950 p-8 group hover:bg-black transition-colors h-full">
                  <div className="text-4xl mb-4">{ind.icon}</div>
                  <h3 className="font-display text-xl text-white tracking-wider mb-2 group-hover:text-yellow-400 transition-colors">{ind.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{ind.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Materials & warranty */}
      <section className="py-24 px-6 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="section-label">Materials</div>
                <h3 className="font-display text-3xl text-white tracking-wider mb-4">WE WORK WITH THE BEST</h3>
                <div className="space-y-3">
                  {[
                    ['3M (primary)', '3M IJ180, V3/8518, fleet series'],
                    ['Avery Dennison', 'Avery 1105 and wide-format vinyls'],
                    ['All brands', 'Client-supplied materials accepted'],
                  ].map(([name, sub]) => (
                    <div key={name} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 mt-1.5 shrink-0" />
                      <div>
                        <div className="text-white font-semibold text-sm">{name}</div>
                        <div className="text-white/40 text-xs">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="section-label">Vinyl Lifespan</div>
                <h3 className="font-display text-3xl text-white tracking-wider mb-4">BUILT TO LAST</h3>
                <div className="space-y-3">
                  {[
                    ['5–7 years', 'Properly installed cast vinyl with laminate'],
                    ['Warranty', '3M and Avery materials carry manufacturer warranties'],
                    ['Outdoor rated', 'UV resistant, weather resistant, wash safe'],
                  ].map(([name, sub]) => (
                    <div key={name} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 mt-1.5 shrink-0" />
                      <div>
                        <div className="text-white font-semibold text-sm">{name}</div>
                        <div className="text-white/40 text-xs">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="section-label">Coverage Area</div>
                <h3 className="font-display text-3xl text-white tracking-wider mb-4">WE TRAVEL TO YOU</h3>
                <div className="space-y-3">
                  {[
                    ['Cobb County', 'Home base — fastest scheduling'],
                    ['Atlanta Metro', 'Full coverage — Marietta, Kennesaw, Smyrna, Alpharetta'],
                    ['Southeast', 'GA, TN, AL, NC, SC, FL'],
                    ['Nationwide', 'Available for large fleet programs'],
                  ].map(([name, sub]) => (
                    <div key={name} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 mt-1.5 shrink-0" />
                      <div>
                        <div className="text-white font-semibold text-sm">{name}</div>
                        <div className="text-white/40 text-xs">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none">
          <div className="font-display text-[16rem] text-black leading-none whitespace-nowrap">FLEET</div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-6xl md:text-8xl text-black leading-none tracking-wider mb-6">
              READY TO WRAP<br />YOUR FLEET?
            </h2>
            <p className="text-black/60 text-lg mb-3 max-w-lg mx-auto">
              Send us your fleet list and dimensions. We'll have a full line-item quote back the same day.
            </p>
            <p className="text-black/50 text-sm mb-10">
              Call <a href="tel:8153255363" className="font-bold text-black">(815) 325-5363</a> ·
              Email <a href="mailto:301graphic@gmail.com" className="font-bold text-black"> 301graphic@gmail.com</a>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-black text-white font-semibold px-10 py-5 text-sm tracking-widest uppercase hover:bg-zinc-900 transition-all hover:scale-105">
                Get a Fleet Quote <ArrowRight size={18} />
              </Link>
              <Link href="/portfolio" className="inline-flex items-center gap-3 border-2 border-black text-black font-semibold px-10 py-5 text-sm tracking-widest uppercase hover:bg-black hover:text-yellow-400 transition-all">
                View Fleet Work
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </Layout>
  )
}
