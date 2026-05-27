import Layout from '../components/Layout'
import AnimateIn from '../components/AnimateIn'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Award, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const values = [
  {
    title: 'Precision Over Everything',
    desc: 'We never rush an install. Every edge gets sealed, every bubble gets smoothed, every panel gets inspected. The finish is everything.',
  },
  {
    title: 'Show Up Every Time',
    desc: 'We commit to a date and we honor it. No last-minute cancellations, no unreturned calls. Reliability is the foundation of every relationship we build.',
  },
  {
    title: 'Communication Is Non-Negotiable',
    desc: 'We answer the phone. We reply to emails. We keep our clients informed at every step — from quote to install to final documentation.',
  },
  {
    title: 'Document Everything',
    desc: 'Before and after photos on every single job. You always know exactly what happened on your project and what you paid for.',
  },
]

const capabilities = [
  'Vehicle wraps — cars, vans, trucks, trailers, fleets',
  'Fleet graphics at any volume — 2 to 200+ units',
  'Storefront and window vinyl installation',
  'Large-format wall murals and interior graphics',
  'Trade show and event on-site installations',
  'Subcontract installs for print shops and agencies',
  '3M vinyl (primary) and Avery 1105 specialist',
  'All major vinyl brands accepted',
  'Install-only — no printing, no competing with your business',
  'Photo documentation on every job',
  'Same-day quotes with precise dimensions provided',
]

export default function About() {
  return (
    <Layout
      title="About 301 Graphics | 3M Fleet Certified Vinyl Installer — Cobb County, GA"
      description="301 Graphics is a licensed LLC and 3M Fleet Certified commercial vinyl installation company based in Cobb County, GA. 1000+ installs, Avery trained, fully insured. Serving Atlanta, Southeast, and nationwide."
    >
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="section-label">About 301 Graphics</div>
            <h1 className="section-title text-white mb-6">
              BUILT ON<br />
              <span className="text-yellow-400">PRECISION.</span><br />
              PROVEN BY<br />
              1000+ INSTALLS.
            </h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed">
              A 3M Fleet Certified, fully insured, licensed LLC based in Cobb County, GA —
              built to compete at the national level and deliver at the highest standard
              on every single job.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section className="pb-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <AnimateIn>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p className="text-white text-xl font-light">
                  301 Graphics was built with one purpose: to be the most reliable, most professional
                  commercial vinyl installation company in the Southeast.
                </p>
                <p>
                  Founded in December 2025 and based in Cobb County, GA, we came into this industry
                  with over 1000 commercial installs already behind us — a career built on doing
                  high-quality work across every commercial vinyl application imaginable.
                  Fleet graphics, vehicle wraps, storefronts, wall murals, trade show installs —
                  we have done it all, and we have done it at scale.
                </p>
                <p>
                  We are 3M Fleet Certified and Avery trained. We operate as a licensed LLC
                  with full insurance coverage on every job. We communicate clearly, show up
                  when we say we will, and we document every install from start to finish.
                </p>
                <p>
                  Our focus is on the commercial and enterprise market — fleet companies,
                  print shops, marketing agencies, and large Georgia-based operations that
                  need an installer they can actually count on. We serve Cobb County and
                  metro Atlanta as our home base, operate throughout the Southeast,
                  and travel nationwide for the right project.
                </p>
                <p className="text-white/90 font-medium">
                  When you need it done right — the first time, every time — that's where 301 Graphics comes in.
                </p>
              </div>
            </AnimateIn>

            {/* Stats */}
            <AnimateIn delay={0.2}>
              <div className="grid grid-cols-2 gap-px bg-white/10 mb-8">
                {[
                  { val: '1000+', label: 'Installs Completed', sub: 'Career total' },
                  { val: '3M', label: 'Fleet Certified', sub: 'Certified installer' },
                  { val: 'LLC', label: 'Licensed Business', sub: 'Georgia registered' },
                  { val: 'SE+', label: 'Service Coverage', sub: 'Southeast & nationwide' },
                ].map((s) => (
                  <div key={s.label} className="bg-black p-8">
                    <div className="font-display text-5xl text-yellow-400 mb-1">{s.val}</div>
                    <div className="text-white font-semibold text-sm mb-0.5">{s.label}</div>
                    <div className="text-white/30 text-xs uppercase tracking-wider">{s.sub}</div>
                  </div>
                ))}
              </div>

              {/* Certifications block */}
              <div className="border border-yellow-400/30 p-6">
                <div className="text-yellow-400 text-xs tracking-[0.2em] uppercase font-semibold mb-5">
                  Certifications & Credentials
                </div>
                <div className="space-y-4">
                  {[
                    {
                      icon: <Award size={16} />,
                      title: '3M Fleet Certification',
                      desc: 'Certified for fleet graphic installation — the industry standard for commercial fleet work',
                    },
                    {
                      icon: <Award size={16} />,
                      title: 'Avery Dennison Training',
                      desc: 'Trained installer for Avery 1105 and Avery wide-format vinyl products',
                    },
                    {
                      icon: <Shield size={16} />,
                      title: 'Licensed LLC & Fully Insured',
                      desc: 'Registered business in Georgia with general liability coverage on every job',
                    },
                  ].map((c) => (
                    <div key={c.title} className="flex items-start gap-3">
                      <div className="text-yellow-400 mt-0.5 shrink-0">{c.icon}</div>
                      <div>
                        <div className="text-white font-semibold text-sm">{c.title}</div>
                        <div className="text-white/40 text-xs leading-relaxed mt-0.5">{c.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="section-label">How We Operate</div>
            <h2 className="section-title text-white mb-16">
              OUR<br />
              <span className="text-yellow-400">STANDARDS</span>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.1}>
                <div className="bg-zinc-950 p-10 group hover:bg-zinc-900 transition-colors h-full">
                  <div className="font-display text-6xl text-white/5 group-hover:text-yellow-400/10 transition-colors mb-4">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-3xl text-white tracking-wider mb-4 group-hover:text-yellow-400 transition-colors">
                    {v.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">{v.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <AnimateIn>
              <div className="section-label">Full Capabilities</div>
              <h2 className="section-title text-white mb-6">
                WHAT WE<br />
                <span className="text-yellow-400">HANDLE</span>
              </h2>
              <p className="text-white/50 leading-relaxed">
                We are equipped and experienced across every major commercial vinyl
                application — at any scale, on any surface, in any market.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <ul className="space-y-3">
                {capabilities.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 pb-3 border-b border-white/10"
                  >
                    <CheckCircle size={15} className="text-yellow-400 shrink-0" />
                    <span className="text-white/80 text-sm">{c}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="section-label">Base</div>
                <h3 className="font-display text-2xl text-white tracking-wider mb-3">COBB COUNTY</h3>
                <p className="text-white/50 text-sm">Marietta, Kennesaw, Smyrna, Acworth, Austell and surrounding areas</p>
              </div>
              <div>
                <div className="section-label">Metro</div>
                <h3 className="font-display text-2xl text-white tracking-wider mb-3">ATLANTA</h3>
                <p className="text-white/50 text-sm">Full metro Atlanta coverage including Buckhead, Midtown, Sandy Springs, Alpharetta, Roswell</p>
              </div>
              <div>
                <div className="section-label">Regional</div>
                <h3 className="font-display text-2xl text-white tracking-wider mb-3">SOUTHEAST</h3>
                <p className="text-white/50 text-sm">Georgia, Tennessee, Alabama, North & South Carolina, Florida — full Southeast coverage</p>
              </div>
              <div>
                <div className="section-label">Extended</div>
                <h3 className="font-display text-2xl text-white tracking-wider mb-3">NATIONWIDE</h3>
                <p className="text-white/50 text-sm">Available for fleet and large-volume commercial projects anywhere in the country</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Subcontract */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="section-label">For Print Shops & Agencies</div>
                <h2 className="section-title text-white mb-6">
                  YOUR INVISIBLE<br />
                  <span className="text-yellow-400">INSTALL TEAM</span>
                </h2>
                <p className="text-white/50 leading-relaxed mb-8">
                  We work as a seamless extension of your operation. You handle the client and the print —
                  we handle the install. Professional, documented, and delivered clean.
                  Your client sees the quality, you keep the relationship.
                </p>
                <Link href="/contact" className="btn-primary">
                  Start a Partnership <ArrowRight size={16} />
                </Link>
              </div>
              <div className="space-y-2">
                {[
                  'No client-facing branding unless requested',
                  'Photo documentation sent to you on completion',
                  'Flexible scheduling around your production timelines',
                  'Scalable — one job to 50+ per month',
                  'Experienced with all major print company workflows',
                  '3M Fleet Certified — meets national brand requirements',
                  'Same-day quotes when dimensions are provided',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-zinc-950 p-4 border-l-2 border-yellow-400 hover:bg-zinc-900 transition-colors">
                    <CheckCircle size={15} className="text-yellow-400 shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-6xl text-black tracking-wider mb-4">LET'S WORK TOGETHER</h2>
            <p className="text-black/60 text-lg mb-3">
              Whether you're a fleet company, a print shop, or a brand — we're ready.
            </p>
            <p className="text-black/50 text-sm mb-10">
              Call <a href="tel:8153255363" className="font-bold text-black">(815) 325-5363</a> ·
              Email <a href="mailto:301graphic@gmail.com" className="font-bold text-black"> 301graphic@gmail.com</a>
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-black text-white font-semibold px-10 py-5 text-sm tracking-widest uppercase hover:bg-zinc-900 transition-all hover:scale-105">
              Get in Touch <ArrowRight size={18} />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </Layout>
  )
}
