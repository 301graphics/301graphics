import Layout from '../../components/Layout'
import AnimateIn from '../../components/AnimateIn'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, Phone, MapPin, Clock, Award } from 'lucide-react'

const cities = [
  { slug: 'marietta', name: 'Marietta', meta: 'Vinyl installation, vehicle wraps, and fleet graphics in Marietta, GA' },
  { slug: 'smyrna', name: 'Smyrna', meta: 'Commercial vinyl installer serving Smyrna, GA' },
  { slug: 'kennesaw', name: 'Kennesaw', meta: 'Vehicle wraps and signage installation in Kennesaw, GA' },
  { slug: 'acworth', name: 'Acworth', meta: 'Vinyl wrap and graphics installer in Acworth, GA' },
  { slug: 'atlanta', name: 'Atlanta', meta: 'Commercial vinyl installer serving metro Atlanta' },
  { slug: 'cobb-county', name: 'Cobb County', meta: 'Vinyl installation services across Cobb County, GA' },
]

export async function getStaticPaths() {
  return {
    paths: cities.map(c => ({ params: { city: c.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const city = cities.find(c => c.slug === params.city)
  return { props: { city } }
}

export default function CityPage({ city }) {
  return (
    <Layout
      title={`Vinyl Installation in ${city.name}, GA | 301 Graphics`}
      description={`${city.meta}. 3M Preferred Installer & Fleet Certified. Vehicle wraps, fleet graphics, storefront signage, wall murals. Same-day quotes. Licensed & insured.`}
    >
      <section className="pt-40 pb-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="section-label">Local Service Area</div>
            <h1 className="section-title text-white mb-6">
              VINYL INSTALLATION<br />
              <span className="text-yellow-400">IN {city.name.toUpperCase()}, GA</span>
            </h1>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-8">
              301 Graphics is a 3M Preferred Installer and Fleet Certified vinyl installation
              company serving {city.name} and the surrounding metro Atlanta area.
              From personal vehicle wraps to large-scale fleet graphics — we come to you.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              {['3M Preferred Installer', '3M Fleet Certified', 'Licensed LLC', 'Fully Insured', 'Same-Day Quotes', 'Free Estimates'].map(tag => (
                <div key={tag} className="border border-yellow-400/30 px-4 py-1.5 text-yellow-400/80 text-xs tracking-wider uppercase font-semibold">{tag}</div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">Get a Free Quote <ArrowRight size={16} /></Link>
              <a href="tel:8153255363" className="btn-outline"><Phone size={16} /> (815) 325-5363</a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="section-label">What We Install in {city.name}</div>
            <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-12">
              SERVICES AVAILABLE IN <span className="text-yellow-400">{city.name.toUpperCase()}</span>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {[
              { icon: '🚗', title: 'Vehicle Wraps', desc: `Personal and commercial vehicle wraps in ${city.name} — full color changes, partial wraps, and custom graphics.` },
              { icon: '🚛', title: 'Fleet Graphics', desc: `Multi-vehicle fleet branding for ${city.name} businesses. We come to your fleet yard.` },
              { icon: '🏢', title: 'Storefront & Window Graphics', desc: `Window vinyl, door lettering, and exterior graphics for ${city.name} businesses.` },
              { icon: '🖼️', title: 'Wall Murals & Interior', desc: `Large-format interior installs for ${city.name} offices, restaurants, and retail spaces.` },
            ].map((svc, i) => (
              <AnimateIn key={svc.title} delay={i * 0.08}>
                <div className="bg-zinc-950 p-8 group hover:bg-black transition-colors h-full">
                  <div className="text-4xl mb-4">{svc.icon}</div>
                  <h3 className="font-display text-2xl text-white tracking-wider mb-3 group-hover:text-yellow-400 transition-colors">{svc.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us locally */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimateIn>
              <div className="section-label">Local Service</div>
              <h2 className="section-title text-white mb-6">WE COME TO<br /><span className="text-yellow-400">{city.name.toUpperCase()}</span></h2>
              <p className="text-white/50 leading-relaxed mb-8">
                We are based in Cobb County and {city.name} is in our backyard.
                That means faster response times, lower travel costs, and the ability
                to schedule jobs quickly. Most {city.name} projects can be quoted
                same-day and scheduled within a week.
              </p>
              <Link href="/contact" className="btn-primary">Request a Quote <ArrowRight size={16} /></Link>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="grid grid-cols-1 gap-px bg-white/10">
                {[
                  { icon: <MapPin size={18} />, title: 'Local to Cobb County', desc: `${city.name} is in our primary service area — fast scheduling and minimal travel fees.` },
                  { icon: <Clock size={18} />, title: 'Same-Day Quotes', desc: 'Send your project details and dimensions — we respond same-day.' },
                  { icon: <Award size={18} />, title: '3M Preferred Installer', desc: 'The highest level of certification — required by national brands.' },
                  { icon: <CheckCircle size={18} />, title: 'Free Estimates', desc: 'No charge for quotes. No deposit required to get started.' },
                ].map((item, i) => (
                  <div key={item.title} className="bg-black p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-yellow-400 mt-0.5 shrink-0">{item.icon}</div>
                      <div>
                        <h3 className="text-white font-semibold mb-1 text-sm">{item.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Other service areas */}
      <section className="py-20 px-6 bg-zinc-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-10">
            <div className="section-label">Other Service Areas</div>
            <h2 className="font-display text-3xl text-white tracking-wider">WE ALSO SERVE</h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3">
              {cities.filter(c => c.slug !== city.slug).map(c => (
                <Link key={c.slug} href={`/areas/${c.slug}`}
                  className="border border-white/15 px-5 py-2.5 text-xs text-white/60 tracking-[0.15em] uppercase font-medium hover:border-yellow-400 hover:text-yellow-400 transition-all">
                  {c.name}
                </Link>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-5xl md:text-6xl text-black tracking-wider mb-4">
              SERVING {city.name.toUpperCase()}<br />SINCE 2025
            </h2>
            <p className="text-black/60 text-lg mb-8">Ready to get your project quoted? Same-day response.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-black text-white font-semibold px-10 py-5 text-sm tracking-widest uppercase hover:bg-zinc-900 transition-all hover:scale-105">
              Get a Free Quote <ArrowRight size={18} />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </Layout>
  )
}
