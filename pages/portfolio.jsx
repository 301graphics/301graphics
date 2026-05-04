import { useState } from 'react'
import Layout from '../components/Layout'
import AnimateIn from '../components/AnimateIn'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'

const categories = ['All', 'Vehicle Wraps', 'Wall Murals', 'Storefront', 'Large Format']

const items = [
  { id: 1,  slug: 'bus-wrap',                 title: 'Full Bus Wrap',                  client: 'Georgia Public Service Commission', category: 'Vehicle Wraps', tags: ['Bus Wrap', 'Large Format'],       desc: 'Full wrap installation on a large commercial bus. Complex curved surfaces, full-bleed graphics across every panel.',                                                span: 'col-span-2', aspect: 'h-64 md:h-80' },
  { id: 2,  slug: 'jurassic-bus',             title: 'Full Bus Color Change Wrap',     client: 'Jurassic Express',                  category: 'Vehicle Wraps', tags: ['Bus Wrap', 'Color Change'],       desc: 'Full color change wrap on a school bus converted to the Jurassic Express. Bold lime green with custom graphic overlays.',                                           span: '',           aspect: 'h-56' },
  { id: 3,  slug: 'honeycomb-van',            title: 'Full Van Wrap',                  client: 'Honeycomb Plumbing',                category: 'Vehicle Wraps', tags: ['Van Wrap', 'Full Wrap'],           desc: 'Full wrap on a Ford Transit high-roof van. Bold graphic design installed across all panels.',                                                                       span: '',           aspect: 'h-56' },
  { id: 4,  slug: 'delta-100-years',          title: 'Interior Wall Wrap',             client: 'Delta Airlines — 100 Years',        category: 'Wall Murals',   tags: ['Interior', 'Corporate'],           desc: 'Multi-panel interior wall wrap for Delta Airlines 100th anniversary. Curved column installation at Hartsfield-Jackson Airport.',                                   span: '',           aspect: 'h-56' },
  { id: 5,  slug: 'robotics-wall-mural',      title: 'Warehouse Wall Mural',           client: 'Robotics Facility',                 category: 'Wall Murals',   tags: ['Wall Mural', 'Large Format'],      desc: 'Large-format vinyl mural installed on painted cinderblock in an industrial warehouse environment.',                                                                  span: '',           aspect: 'h-56' },
  { id: 6,  slug: 'google-cloud-window',      title: 'Event Window Graphics',          client: 'Google Cloud — AI Agents Live',     category: 'Storefront',    tags: ['Window Graphics', 'Corporate'],    desc: 'Full building entrance window installation for a Google Cloud event. Multi-pane precision install across an entire facade.',                                        span: '',           aspect: 'h-56' },
  { id: 7,  slug: 'flood-warriors-van',       title: 'Full Van Wrap',                  client: '911 Flood Warriors',                category: 'Vehicle Wraps', tags: ['Van Wrap', 'Full Wrap'],           desc: 'Full wrap on a Dodge ProMaster van. Edge-to-edge installation across all panels and bumpers.',                                                                     span: '',           aspect: 'h-56' },
  { id: 8,  slug: 'corporate-window-graphics',title: 'Corporate Entrance Graphics',    client: 'Commercial Office Tower',           category: 'Storefront',    tags: ['Window Graphics', 'Commercial'],   desc: 'Large-scale building entrance window vinyl install across multi-story glass panels and lobby doors.',                                                               span: 'col-span-2', aspect: 'h-56' },
  { id: 9,  slug: 'afs-van-wrap',             title: 'Full Van Wrap',                  client: 'AFS — A Groundworks Company',       category: 'Vehicle Wraps', tags: ['Van Wrap', 'Fleet'],               desc: 'Fleet van wrap for AFS Foundation & Waterproofing. Part of a multi-vehicle Groundworks fleet program.',                                                            span: '',           aspect: 'h-56' },
  { id: 10, slug: 'groundworks-truck',        title: 'Pickup Truck Wrap',              client: 'Groundworks',                       category: 'Vehicle Wraps', tags: ['Truck Wrap', 'Fleet'],             desc: 'Full wrap on a Chevrolet Silverado for the Groundworks national fleet. Clean, precise panel-by-panel application.',                                                span: '',           aspect: 'h-56' },
  { id: 11, slug: 'ksu-locker-wrap',          title: 'Locker Bank Wrap',               client: 'Kennesaw State University',         category: 'Large Format',  tags: ['Custom Surface', 'Large Format'],  desc: 'Custom graphic wrap applied across an entire locker bank system at KSU — precise panel alignment throughout.',                                                     span: 'col-span-2', aspect: 'h-56' },
  { id: 12, slug: 'hiram-hornets-mural',      title: 'School Wall Mural',              client: 'Hiram High School — Hornets',       category: 'Wall Murals',   tags: ['Wall Mural', 'Interior'],          desc: 'Large-format vinyl mural on painted cinderblock. Full mascot graphic with surrounding design elements.',                                                            span: '',           aspect: 'h-56' },
  { id: 13, slug: 'blue-heron-truck',         title: 'Box Truck Wrap',                 client: 'Blue Heron Lines',                  category: 'Vehicle Wraps', tags: ['Truck Wrap', 'Fleet'],             desc: 'Cab wrap on a commercial box truck. Full color change base with brand graphics applied over complex curved surfaces.',                                               span: '',           aspect: 'h-56' },
  { id: 14, slug: 'seagraves-truck',          title: 'Pickup Truck Wrap',              client: 'Seagraves Plumbing',                category: 'Vehicle Wraps', tags: ['Truck Wrap', 'Full Wrap'],         desc: 'Full wrap on a Ford F-150 including bed and cab. Clean edge work around handles, mirrors, and moldings.',                                                           span: '',           aspect: 'h-56' },
  { id: 15, slug: 'exterior-wall-wrap',       title: 'Exterior Building Wrap',         client: 'Commercial Facility',               category: 'Wall Murals',   tags: ['Exterior', 'Large Format'],        desc: 'Full exterior wall wrap simulating stone texture on a metal utility building. Outdoor-rated vinyl, large-format install.',                                          span: 'col-span-2', aspect: 'h-56' },
]

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected] = useState(null)

  const filtered = activeCategory === 'All'
    ? items
    : items.filter(item => item.category === activeCategory)

  return (
    <Layout
      title="Portfolio | 301 Graphics — Commercial Vinyl Installation Atlanta, GA"
      description="View 301 Graphics' commercial vinyl installation portfolio — Delta Airlines, Google Cloud, Groundworks fleet wraps, vehicle wraps, wall murals, and storefront graphics across Atlanta, Cobb County, and the Southeast."
    >
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="section-label">Our Work</div>
            <h1 className="section-title text-white mb-4">
              PROOF IN<br />
              <span className="text-yellow-400">EVERY INSTALL</span>
            </h1>
            <p className="text-white/50 max-w-lg leading-relaxed">
              Every project shown here was installed by 301 Graphics — from national
              corporate brands to local businesses across the Southeast.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Delta Airlines', 'Google Cloud', 'Groundworks', 'Kennesaw State University', 'Georgia Public Service Commission'].map(brand => (
                <div key={brand} className="border border-yellow-400/25 px-4 py-1.5 text-yellow-400/70 text-xs tracking-wider uppercase font-semibold">
                  {brand}
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 pb-10 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-200 ${
                    activeCategory === cat ? 'bg-yellow-400 text-black' : 'border border-white/20 text-white/60 hover:border-yellow-400 hover:text-yellow-400'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-32 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className={`${item.span || ''} relative ${item.aspect} cursor-pointer group overflow-hidden bg-zinc-900`}
                  onClick={() => setSelected(item)}
                >
                  <Image
                    src={`/portfolio/${item.slug}.jpg`}
                    alt={`${item.title} — ${item.client} | 301 Graphics`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-3 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex flex-wrap gap-1 mb-1.5">
                      {item.tags.map(t => (
                        <span key={t} className="text-[9px] bg-yellow-400 text-black px-2 py-0.5 font-bold tracking-wider uppercase">{t}</span>
                      ))}
                    </div>
                    <h3 className="text-white font-bold text-sm leading-tight">{item.title}</h3>
                    <p className="text-white/60 text-xs mt-0.5">{item.client}</p>
                  </div>
                  <div className="absolute top-3 right-3 w-7 h-7 border border-white/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                    <ArrowRight size={11} className="text-white rotate-[-45deg]" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/97 flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              className="bg-zinc-950 max-w-3xl w-full border border-white/10 overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="relative h-64 md:h-80 bg-zinc-900">
                <Image
                  src={`/portfolio/${selected.slug}.jpg`}
                  alt={`${selected.title} — ${selected.client}`}
                  fill
                  className="object-cover"
                  sizes="800px"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-black/70 border border-yellow-400/30 px-3 py-1 text-yellow-400 text-xs tracking-widest uppercase font-semibold">
                    {selected.category}
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {selected.tags.map(t => (
                    <span key={t} className="text-[10px] bg-yellow-400 text-black px-2 py-0.5 font-bold tracking-wider uppercase">{t}</span>
                  ))}
                </div>
                <h2 className="font-display text-3xl text-white tracking-wider mb-1">{selected.title}</h2>
                <p className="text-yellow-400/80 text-sm font-semibold mb-4">{selected.client}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{selected.desc}</p>
                <p className="text-white/25 text-xs mb-6">Installed by 301 Graphics · Cobb County, GA · 3M Fleet Certified · Licensed LLC</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-primary text-xs py-3 px-6">Request Similar Work <ArrowRight size={14} /></Link>
                  <button onClick={() => setSelected(null)} className="btn-outline text-xs py-3 px-6">Close</button>
                </div>
              </div>
            </motion.div>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-5 right-5 w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:border-yellow-400 hover:text-yellow-400 transition-colors"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 px-6 bg-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-display text-6xl text-black tracking-wider mb-4">WANT WORK LIKE THIS?</h2>
            <p className="text-black/60 text-lg mb-3">National brands. Local businesses. Every install gets the same precision.</p>
            <p className="text-black/50 text-sm mb-10">
              Call <a href="tel:8153255363" className="font-bold text-black">(815) 325-5363</a> ·
              Email <a href="mailto:301graphic@gmail.com" className="font-bold text-black"> 301graphic@gmail.com</a>
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 bg-black text-white font-semibold px-10 py-5 text-sm tracking-widest uppercase hover:bg-zinc-900 transition-all hover:scale-105">
              Start Your Project <ArrowRight size={18} />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </Layout>
  )
}
