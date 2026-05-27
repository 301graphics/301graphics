import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Shield, Award, MapPin, Truck, CheckCircle2, Star } from 'lucide-react'
import Layout from '../components/Layout'
import AnimateIn from '../components/AnimateIn'

const SERVICES = [
  { title: 'Vehicle Wraps', desc: 'Cars, trucks, vans, SUVs. Full, partial, color change, matte.', href: '/services#vehicle-wraps' },
  { title: 'Fleet Graphics', desc: 'Multi-vehicle rebrands and decal programs at scale.', href: '/fleet' },
  { title: 'Wall & Window Graphics', desc: 'Interior, exterior, perforated, frosted, large-format murals.', href: '/services#wall-window' },
  { title: 'Trade Show & Events', desc: 'On-site booth, floor, and display installs in tight windows.', href: '/services#trade-show' },
]

const PORTFOLIO_PREVIEW = [
  'box-truck-fleet-wrap.jpg',
  'catering-van-wrap.jpg',
  'full-vehicle-wrap-matte.jpg',
  'fleet-truck-decals.jpg',
  'corporate-wall-graphics.jpg',
  'storefront-window-wrap.jpg',
]

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>301 Graphics — Commercial Vinyl Installation | Atlanta, GA</title>
        <meta name="description" content="3M Preferred Installer. Vehicle wraps, fleet graphics, wall & window installs across Atlanta and nationwide. Fully insured. Get a quote." />
      </Head>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center bg-black overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image src="/portfolio/full-vehicle-wrap-matte.jpg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-yellow-400" />
              <span className="text-yellow-400 text-xs tracking-[0.3em] uppercase font-semibold">Commercial Vinyl Installation</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6 tracking-tight">
              CLEAN.<br />
              <span className="text-yellow-400">PRECISE.</span><br />
              ON SCHEDULE.
            </h1>

            <p className="text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              Install-only specialist. 3M Preferred Installer with 1000+ installs across Atlanta and beyond.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="btn-primary text-sm">
                Get a Quote <ArrowRight size={16} className="ml-2 inline" />
              </Link>
              <a href="tel:8153255363" className="text-white/90 hover:text-yellow-400 transition-colors flex items-center gap-2 text-sm font-semibold tracking-wider uppercase">
                <Phone size={16} /> (815) 325-5363
              </a>
            </div>
          </motion.div>
        </div>

        {/* Floating trust strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-t border-white/10 py-4">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-white/60 text-xs tracking-wider uppercase font-medium">
            <div className="flex items-center gap-2"><Shield size={14} className="text-yellow-400" /> Fully Insured</div>
            <div className="flex items-center gap-2"><Award size={14} className="text-yellow-400" /> 3M Preferred Installer</div>
            <div className="flex items-center gap-2"><Truck size={14} className="text-yellow-400" /> Fleet Certified</div>
            <div className="flex items-center gap-2"><MapPin size={14} className="text-yellow-400" /> Atlanta + Nationwide</div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────── */}
      <section className="bg-zinc-950 py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <div className="text-yellow-400 text-xs tracking-[0.3em] uppercase font-semibold mb-3">What We Do</div>
                <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight">Built for Commercial.</h2>
              </div>
              <Link href="/services" className="text-yellow-400 text-sm tracking-wider uppercase font-semibold hover:text-yellow-300 transition-colors flex items-center gap-2">
                All Services <ArrowRight size={14} />
              </Link>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {SERVICES.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 0.05}>
                <Link href={s.href} className="group block bg-zinc-950 p-8 hover:bg-zinc-900 transition-colors h-full">
                  <h3 className="font-display text-2xl text-white mb-3 group-hover:text-yellow-400 transition-colors">{s.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-yellow-400/70 text-xs tracking-wider uppercase font-semibold group-hover:text-yellow-400 flex items-center gap-1">
                    Learn More <ArrowRight size={12} />
                  </span>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ────────────────────────────────────────── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <div className="text-yellow-400 text-xs tracking-[0.3em] uppercase font-semibold mb-3">Recent Work</div>
                <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight">The Work Speaks.</h2>
              </div>
              <Link href="/portfolio" className="text-yellow-400 text-sm tracking-wider uppercase font-semibold hover:text-yellow-300 transition-colors flex items-center gap-2">
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {PORTFOLIO_PREVIEW.map((img, i) => (
              <AnimateIn key={img} delay={i * 0.04}>
                <Link href="/portfolio" className="relative block aspect-square overflow-hidden bg-zinc-900 group">
                  <Image src={`/portfolio/${img}`} alt="" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS — clean badge display ─────────────────────── */}
      <section className="bg-zinc-950 py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-12">
              <div className="text-yellow-400 text-xs tracking-[0.3em] uppercase font-semibold mb-3">Certifications</div>
              <h2 className="font-display text-3xl md:text-4xl text-white tracking-tight">Manufacturer-Backed.</h2>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AnimateIn>
              <div className="bg-black border border-white/10 p-8 flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0">
                  <Image src="/badge-3m-preferred.png" alt="3M Preferred Installer" fill className="object-contain" />
                </div>
                <div>
                  <div className="font-display text-xl text-white tracking-wide">3M Preferred</div>
                  <div className="font-display text-xl text-white tracking-wide mb-2">Installer</div>
                  <div className="text-white/50 text-xs tracking-wider uppercase">Certified May 2026</div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.1}>
              <div className="bg-black border border-white/10 p-8 flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0">
                  <Image src="/badge-3m-fleet.png" alt="3M Fleet Graphics Certified" fill className="object-contain" />
                </div>
                <div>
                  <div className="font-display text-xl text-white tracking-wide">3M Fleet Graphics</div>
                  <div className="font-display text-xl text-white tracking-wide mb-2">Certified</div>
                  <div className="text-white/50 text-xs tracking-wider uppercase">Certified March 2026</div>
                </div>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn delay={0.2}>
            <p className="text-center text-white/40 text-sm mt-8">
              Avery Dennison trained · Licensed LLC · $2M aggregate liability insurance
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* ── PROCESS — 4 steps, tight ─────────────────────────────────── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="mb-12">
              <div className="text-yellow-400 text-xs tracking-[0.3em] uppercase font-semibold mb-3">How It Works</div>
              <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight">Simple Process.</h2>
            </div>
          </AnimateIn>

          <div className="grid md:grid-cols-4 gap-px bg-white/5">
            {[
              ['01', 'Get a Quote', 'Send project details, photos, and timeline. Quote back within 24 hours.'],
              ['02', 'Schedule', 'Pick a date that works. Materials shipped or sourced as needed.'],
              ['03', 'Install', 'Clean, on-time install. Full photo documentation throughout.'],
              ['04', 'Deliver', 'Walkthrough, sign-off, and final photos for your records.'],
            ].map(([num, title, desc], i) => (
              <AnimateIn key={num} delay={i * 0.05}>
                <div className="bg-black p-8 h-full">
                  <div className="text-yellow-400 font-display text-3xl mb-4">{num}</div>
                  <h3 className="text-white font-semibold mb-2 tracking-wide">{title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA — punchy, dual action ───────────────────────────────── */}
      <section className="bg-yellow-400 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <AnimateIn>
            <h2 className="font-display text-5xl md:text-6xl text-black mb-4 tracking-tight">
              READY TO INSTALL?
            </h2>
            <p className="text-black/70 text-lg mb-10 max-w-xl mx-auto">
              Send your project details and we'll quote it fast.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-black text-yellow-400 px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-zinc-900 transition-colors">
                Get a Quote <ArrowRight size={16} />
              </Link>
              <a href="tel:8153255363" className="inline-flex items-center gap-2 bg-black/10 text-black border-2 border-black px-8 py-4 text-sm font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-yellow-400 transition-colors">
                <Phone size={16} /> (815) 325-5363
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </Layout>
  )
}
