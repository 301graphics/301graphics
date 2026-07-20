import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X, Phone, Shield } from 'lucide-react'
import Layout from '../components/Layout'
import AnimateIn from '../components/AnimateIn'

// Simple 2-category system: Vehicles, or Walls/Windows/Floors.
// No client names, no specific descriptions visible to users.
const PORTFOLIO = [
  // ── VEHICLES (anything that drives) ──
  { src: 'awp-safety-truck-decals.jpg',     cat: 'Vehicles' },
  { src: 'daves-killer-bread-box-truck.jpg', cat: 'Vehicles' },
  { src: 'assured-comfort-van-wrap.jpg',    cat: 'Vehicles' },
  { src: 'impact-fire-van-decals.jpg',      cat: 'Vehicles' },
  { src: 'room-and-board-trailer-decals.jpg', cat: 'Vehicles' },
  { src: 'groundworks-box-truck.jpg',       cat: 'Vehicles' },
  { src: 'full-vehicle-wrap-matte.jpg',     cat: 'Vehicles' },
  { src: 'sedan-fleet-wrap.jpg',            cat: 'Vehicles' },
  { src: 'catering-van-wrap.jpg',           cat: 'Vehicles' },
  { src: 'honeycomb-van.jpg',               cat: 'Vehicles' },
  { src: 'afs-van-wrap.jpg',                cat: 'Vehicles' },
  { src: 'flood-warriors-van.jpg',          cat: 'Vehicles' },
  { src: 'suv-graphics-install.jpg',        cat: 'Vehicles' },
  { src: 'fleet-truck-decals.jpg',          cat: 'Vehicles' },
  { src: 'box-truck-fleet-wrap.jpg',        cat: 'Vehicles' },
  { src: 'groundworks-truck.jpg',           cat: 'Vehicles' },
  { src: 'seagraves-truck.jpg',             cat: 'Vehicles' },
  { src: 'blue-heron-truck.jpg',            cat: 'Vehicles' },
  { src: 'service-truck-graphics.jpg',      cat: 'Vehicles' },
  { src: 'shuttle-bus-full.jpg',            cat: 'Vehicles' },
  { src: 'shuttle-bus-rear.jpg',            cat: 'Vehicles' },
  { src: 'bus-wrap.jpg',                    cat: 'Vehicles' },
  { src: 'jurassic-bus.jpg',                cat: 'Vehicles' },
  { src: 'passenger-shuttle-wrap.jpg',      cat: 'Vehicles' },

  // ── WALLS / WINDOWS / FLOORS (anything stationary) ──
  { src: 'taco-bell-storefront-graphics.jpg', cat: 'Walls / Windows / Floors' },
  { src: 'taco-bell-interior-window-film.jpg', cat: 'Walls / Windows / Floors' },
  { src: 'taco-bell-exterior-mural.jpg',    cat: 'Walls / Windows / Floors' },
  { src: 'amphitheater-wall-wrap.jpg',      cat: 'Walls / Windows / Floors' },
  { src: 'parking-garage-wayfinding.jpg',   cat: 'Walls / Windows / Floors' },
  { src: 'office-art-panel-install.jpg',    cat: 'Walls / Windows / Floors' },
  { src: 'corporate-wall-graphics.jpg',     cat: 'Walls / Windows / Floors' },
  { src: 'robotics-wall-mural.jpg',         cat: 'Walls / Windows / Floors' },
  { src: 'hiram-hornets-mural.jpg',         cat: 'Walls / Windows / Floors' },
  { src: 'exterior-wall-wrap.jpg',          cat: 'Walls / Windows / Floors' },
  { src: 'large-format-wall-panel.jpg',     cat: 'Walls / Windows / Floors' },
  { src: 'storefront-window-wrap.jpg',      cat: 'Walls / Windows / Floors' },
  { src: 'corporate-window-graphics.jpg',   cat: 'Walls / Windows / Floors' },
  { src: 'frosted-window-branding.jpg',     cat: 'Walls / Windows / Floors' },
  { src: 'interior-window-graphics.jpg',    cat: 'Walls / Windows / Floors' },
  { src: 'google-cloud-window.jpg',         cat: 'Walls / Windows / Floors' },
  { src: 'delta-100-years.jpg',             cat: 'Walls / Windows / Floors' },
  { src: 'court-floor-graphics.jpg',        cat: 'Walls / Windows / Floors' },
  { src: 'ksu-locker-wrap.jpg',             cat: 'Walls / Windows / Floors' },
  { src: 'retail-display-install.jpg',      cat: 'Walls / Windows / Floors' },
  { src: 'parcel-locker-finish.jpg',        cat: 'Walls / Windows / Floors' },
]

const CATEGORIES = ['All', 'Vehicles', 'Walls / Windows / Floors']

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const visible = filter === 'All' ? PORTFOLIO : PORTFOLIO.filter(p => p.cat === filter)

  return (
    <Layout>
      <Head>
        <title>Portfolio — 301 Graphics</title>
        <meta name="description" content="Installation work by Tony Nesser and 301 Graphics. Vehicle wraps, fleet graphics, wall and window installs across Atlanta and beyond." />
      </Head>

      {/* ── HEADER ──────────────────────────────────────────────────── */}
      <section className="bg-black pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-yellow-400 text-xs tracking-[0.3em] uppercase font-semibold mb-3">Portfolio</div>
            <h1 className="font-display text-5xl md:text-7xl text-white tracking-tight mb-4">SELECTED WORK.</h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Installation work personally completed by Tony Nesser and 301 Graphics across the Atlanta metro and beyond.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── CATEGORY FILTER ─────────────────────────────────────────── */}
      <section className="bg-black border-t border-white/5 py-6 sticky top-[72px] z-30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`text-xs tracking-wider uppercase font-semibold px-4 py-2 transition-colors ${
                  filter === cat ? 'bg-yellow-400 text-black' : 'bg-zinc-900 text-white/70 hover:bg-zinc-800 hover:text-white'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── GRID — clean photo wall, no labels visible ──────────────── */}
      <section className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-2 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2">
            {visible.map((p, i) => (
              <motion.button
                key={p.src}
                onClick={() => setLightbox(p)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.02, 0.5) }}
                className="relative aspect-square overflow-hidden bg-zinc-900 group block"
                aria-label="View larger photo"
              >
                <Image
                  src={`/portfolio/${p.src}`}
                  alt="Installation work by 301 Graphics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                />
              </motion.button>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="text-white/40 text-center py-20">No work in this category yet.</p>
          )}
        </div>
      </section>

      {/* ── LEGAL DISCLAIMER ────────────────────────────────────────── */}
      <section className="bg-zinc-950 border-t border-white/5 py-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-4 items-start">
            <Shield size={20} className="text-yellow-400/60 shrink-0 mt-1" />
            <p className="text-white/50 text-sm leading-relaxed">
              <span className="text-white/70 font-semibold">Installation Attribution Notice:</span>{' '}
              All photographs displayed on this page represent installation work personally completed by Tony Nesser, 301 Graphics LLC, or established 3M-certified partners.
              Graphics shown were not produced in-house — they were designed and produced by third-party print and design partners; 301 Graphics is credited solely as the installation provider on those projects.
              Vehicles, properties, and graphics shown remain the intellectual property of their respective owners.
              Photos are used for portfolio documentation only.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-yellow-400 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-black mb-6 tracking-tight">HAVE A PROJECT?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-black text-yellow-400 px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-zinc-900 transition-colors">
              Get a Quote <ArrowRight size={16} />
            </Link>
            <a href="tel:8153255363" className="inline-flex items-center gap-2 bg-black/10 text-black border-2 border-black px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-yellow-400 transition-colors">
              <Phone size={16} /> (815) 325-5363
            </a>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX — shows only the broad category, never a client name ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white/80 hover:text-white z-10 p-2" aria-label="Close">
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              className="relative max-w-6xl max-h-[90vh] w-full h-full cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={`/portfolio/${lightbox.src}`} alt="" fill className="object-contain" />
              <div className="absolute bottom-4 left-4 bg-black/80 px-3 py-1.5 text-yellow-400 text-xs tracking-[0.2em] uppercase font-semibold">
                {lightbox.cat}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  )
}
