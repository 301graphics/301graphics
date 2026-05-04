import Layout from '../components/Layout'
import AnimateIn from '../components/AnimateIn'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Shield, Zap, Clock, Award, MapPin, Phone, MessageSquare, FileText, Camera, ChevronDown } from 'lucide-react'
import { useState } from 'react'

// ── B2C Services (consumer-facing) ──────────────────────────────────────────
const consumerServices = [
  {
    icon: '🚗',
    title: 'Vehicle Wraps',
    price: 'Starting from',
    priceAmt: 'Custom Quote',
    desc: 'Transform your car, truck, or van with a full or partial vinyl wrap. Color changes, custom graphics, or business branding — we install it perfectly.',
    tags: ['Cars', 'Trucks', 'Vans', 'SUVs'],
  },
  {
    icon: '🏠',
    title: 'Home & Business Signage',
    price: 'Starting from',
    priceAmt: 'Custom Quote',
    desc: 'Window graphics, door lettering, and storefront vinyl for your shop, restaurant, or home office. Make your space stand out.',
    tags: ['Windows', 'Doors', 'Storefronts'],
  },
  {
    icon: '🎨',
    title: 'Custom Graphics',
    price: 'Starting from',
    priceAmt: 'Custom Quote',
    desc: 'Got a design idea? We install custom vinyl graphics on almost any surface — walls, floors, vehicles, equipment, and more.',
    tags: ['Walls', 'Floors', 'Equipment'],
  },
]

// ── B2B Services ─────────────────────────────────────────────────────────────
const businessServices = [
  { icon: '🚛', title: 'Fleet Graphics', href: '/fleet', desc: '3M Fleet Certified. Any fleet size, any vehicle type. Consistent quality across every unit.' },
  { icon: '🏢', title: 'Commercial Signage', href: '/services', desc: 'Storefront wraps, window graphics, wall murals for commercial properties at any scale.' },
  { icon: '🤝', title: 'Print Shop Partner', href: '/contact', desc: 'Subcontract installs for print shops and agencies. You print it, we install it. Clean documentation on every job.' },
]

const howItWorks = [
  { number: '01', icon: <MessageSquare size={24} />, title: 'Get a Free Quote', desc: 'Tell us about your project — vehicle type, surface, or what you need. We respond the same day with a clear price.' },
  { number: '02', icon: <FileText size={24} />, title: 'We Schedule Your Install', desc: "We come to you or your location. No need to drop anything off — we bring everything we need." },
  { number: '03', icon: <Camera size={24} />, title: 'Professional Finish, Documented', desc: 'Every install is photographed before and after. You get a result that looks amazing and lasts for years.' },
]

const whyUs = [
  { icon: <Award size={18} />, title: '3M Preferred Installer & Fleet Certified', desc: 'Two of the highest certifications in the industry — required by major national brands.' },
  { icon: <Shield size={18} />, title: 'Licensed LLC & Fully Insured', desc: 'Your vehicle and property are protected on every single job.' },
  { icon: <Zap size={18} />, title: 'Same-Day Quotes', desc: 'Send us your project details and we reply the same day with a clear, line-item price.' },
  { icon: <Clock size={18} />, title: 'We Come to You', desc: 'We travel to your location — home, fleet yard, business, or job site. No drop-off required.' },
  { icon: <MapPin size={18} />, title: 'Atlanta & Beyond', desc: 'Based in Cobb County. Serving all of metro Atlanta, the Southeast, and nationwide for the right project.' },
  { icon: <CheckCircle size={18} />, title: '600+ Installs Completed', desc: 'Hundreds of commercial and residential installs. The experience shows in every edge and every seam.' },
]

const faqs = [
  { q: 'Can you wrap my personal vehicle?', a: 'Absolutely. We do personal vehicle wraps including color changes, partial wraps, and custom graphic installations. We work on cars, trucks, SUVs, vans, motorcycles, and more. Just send us your vehicle info and what you\'re looking for and we\'ll quote it.' },
  { q: 'Do you supply the vinyl or do I bring my own?', a: 'We are an install-only specialist — your print partner or design studio supplies the vinyl and we install it. If you need help finding a print partner, we can refer you to one we trust. We work with 3M and Avery Dennison materials primarily.' },
  { q: 'How long does a vehicle wrap last?', a: 'A properly installed cast vinyl wrap typically lasts 5–7 years with normal care. Washing regularly, avoiding harsh chemicals, and keeping it out of direct sun when possible will maximize the lifespan.' },
  { q: 'How much does a vehicle wrap cost?', a: 'Cost depends on the vehicle size, wrap coverage (full, partial, or spot graphics), and complexity of the install. Send us your vehicle info and we\'ll give you a clear quote the same day — no vague estimates.' },
  { q: 'Do you travel to my location?', a: 'Yes — we come to you. Whether you\'re in Cobb County, anywhere in metro Atlanta, or further out in the Southeast, we travel to your home, business, or fleet yard. A travel fee may apply for longer distances.' },
  { q: 'Can you wrap my storefront or office windows?', a: 'Yes. Window graphics, frosted privacy film, cut vinyl lettering, perforated film, and full storefront wraps are all services we provide for businesses, restaurants, medical offices, salons, and more.' },
  { q: 'Are you insured?', a: 'Yes. 301 Graphics is a licensed LLC with full general liability insurance. Your vehicle and property are covered on every job.' },
]

const targetClients = [
  'Personal Vehicle Owners', 'Small Businesses', 'Restaurants & Retail',
  'Fleet & Logistics Companies', 'Print Shops & Agencies', 'Corporate Brands',
  'Auto Dealerships', 'Government & Municipal Fleets',
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
        <span className="text-white font-medium text-sm pr-8 group-hover:text-yellow-400 transition-colors">{q}</span>
        <ChevronDown size={18} className={`text-yellow-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <motion.div initial={false} animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="text-white/50 text-sm leading-relaxed pb-5">{a}</p>
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <Layout
      title="301 Graphics | Vinyl Installation — Vehicle Wraps, Fleet Graphics & Signage | Cobb County, GA"
      description="3M Preferred Installer & Fleet Certified vinyl installation in Cobb County, GA. Vehicle wraps, fleet graphics, storefront signage, and wall murals for businesses and individuals. Serving Atlanta, Southeast, and nationwide. Licensed LLC. Free quotes."
    >
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-zinc-900" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}
          className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/5 blur-[120px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-3 border border-yellow-400/40 px-5 py-2.5 mb-8">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-400 text-xs tracking-[0.22em] uppercase font-semibold">
              3M Preferred Installer · Fleet Certified · Cobb County, GA
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-display text-6xl md:text-8xl lg:text-[9rem] leading-none tracking-wider text-white mb-4">
            PRECISION
            <span className="block text-yellow-400">VINYL</span>
            INSTALLATION
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.7 }}
            className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-3 font-light leading-relaxed">
            Vehicle wraps, fleet graphics, storefront signage, and wall murals —
            for individuals, businesses, and national brands.
            Based in Cobb County, GA.
          </motion.p>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}
            className="text-yellow-400/80 text-sm tracking-widest uppercase mb-10">
            600+ Installs · 3M Preferred Installer · Fleet Certified · Since 2025
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/contact" className="btn-primary">Get a Free Quote <ArrowRight size={16} /></Link>
            <Link href="/portfolio" className="btn-outline">See Our Work</Link>
          </motion.div>

          {/* 3M Badges in hero per guidelines - brand logo above, badges below */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1.2 }}
            className="flex items-center justify-center gap-8 flex-wrap">
            <div className="bg-black/60 border border-white/10 px-6 py-3 flex items-center gap-6">
              <div className="relative h-8 w-32">
                <Image src="/badge-preferred-white.png" alt="3M Preferred Installer" fill className="object-contain" />
              </div>
              <div className="w-px h-8 bg-white/20" />
              <div className="relative h-9 w-32">
                <Image src="/badge-fleet.png" alt="3M Fleet Graphics Certified" fill className="object-contain" />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-px h-10 bg-gradient-to-b from-yellow-400/60 to-transparent" />
        </motion.div>
      </section>

      {/* ── MARQUEE ─────────────────────────────────────────────────────── */}
      <section className="bg-yellow-400 py-5 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-10 mr-10">
              {['600+ Installs Completed', '3M Preferred Installer', '3M Fleet Certified',
                'Licensed LLC & Fully Insured', 'Cobb County · Atlanta · Southeast',
                'Vehicle Wraps · Fleet · Signage · Murals', 'Free Same-Day Quotes'].map(item => (
                <div key={item} className="flex items-center gap-6">
                  <span className="font-display text-black text-2xl tracking-wider">{item}</span>
                  <span className="text-black/30 text-xl">·</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── NOTABLE CLIENTS ─────────────────────────────────────────────── */}
      <section className="py-14 px-6 bg-zinc-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <AnimateIn>
            <div className="section-label mb-4">Work we've done for</div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
              {['Delta Airlines', 'Google Cloud', 'Groundworks', 'Kennesaw State University', 'Georgia PSC', 'AFS Foundation'].map(brand => (
                <div key={brand} className="text-white/30 font-semibold text-sm tracking-widest uppercase hover:text-white/60 transition-colors cursor-default">{brand}</div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── CONSUMER SERVICES (B2C) ──────────────────────────────────────── */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="section-label">For Individuals & Small Businesses</div>
            <h2 className="section-title text-white mb-4">
              WANT YOUR VEHICLE<br />
              <span className="text-yellow-400">OR SPACE WRAPPED?</span>
            </h2>
            <p className="text-white/50 max-w-xl mb-16 leading-relaxed">
              You don't have to be a big company to get a professional vinyl install.
              We work with individuals, small business owners, and anyone who wants
              their vehicle or space to look incredible.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mb-12">
            {consumerServices.map((svc, i) => (
              <AnimateIn key={svc.title} delay={i * 0.1}>
                <div className="bg-black p-8 group hover:bg-zinc-900 transition-colors h-full">
                  <div className="text-5xl mb-5">{svc.icon}</div>
                  <h3 className="font-display text-2xl text-white tracking-wider mb-3 group-hover:text-yellow-400 transition-colors">{svc.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">{svc.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {svc.tags.map(tag => (
                      <span key={tag} className="border border-white/15 px-2.5 py-0.5 text-white/50 text-xs">{tag}</span>
                    ))}
                  </div>
                  <div className="w-0 group-hover:w-8 h-px bg-yellow-400 transition-all duration-300" />
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.2} className="text-center">
            <p className="text-white/40 text-sm mb-4">Not sure what you need? Just describe your project and we'll figure it out together.</p>
            <Link href="/contact" className="btn-primary">Get a Free Quote <ArrowRight size={16} /></Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <div className="section-label">Simple Process</div>
            <h2 className="section-title text-white">
              HOW IT<br /><span className="text-yellow-400">WORKS</span>
            </h2>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {howItWorks.map((step, i) => (
              <AnimateIn key={step.number} delay={i * 0.12}>
                <div className="bg-zinc-950 p-10 group hover:bg-black transition-colors h-full relative">
                  <div className="font-display text-7xl text-white/5 group-hover:text-yellow-400/10 transition-colors absolute top-6 right-8 leading-none">{step.number}</div>
                  <div className="text-yellow-400 mb-5">{step.icon}</div>
                  <h3 className="font-display text-2xl text-white tracking-wider mb-3 group-hover:text-yellow-400 transition-colors">{step.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                  {i < howItWorks.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 z-10">
                      <ArrowRight size={20} className="text-yellow-400/40" />
                    </div>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── B2B SERVICES ─────────────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="section-label">For Businesses & Enterprise</div>
            <h2 className="section-title text-white mb-4">
              LARGE SCALE?<br />
              <span className="text-yellow-400">WE SCALE WITH YOU.</span>
            </h2>
            <p className="text-white/50 max-w-xl mb-16 leading-relaxed">
              From a single storefront to a national fleet program —
              we are 3M Preferred Installer and Fleet Certified,
              built to handle commercial volume at the highest standard.
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mb-10">
            {businessServices.map((svc, i) => (
              <AnimateIn key={svc.title} delay={i * 0.08}>
                <Link href={svc.href} className="block">
                  <div className="bg-black p-8 group hover:bg-zinc-900 transition-colors h-full">
                    <div className="text-4xl mb-4">{svc.icon}</div>
                    <h3 className="font-display text-2xl text-white tracking-wider mb-3 group-hover:text-yellow-400 transition-colors">{svc.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{svc.desc}</p>
                    <div className="mt-6 flex items-center gap-2 text-yellow-400/60 text-xs tracking-widest uppercase group-hover:gap-4 transition-all">
                      Learn more <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>

          {/* 3M Badges - compliance: shown in context, brand logo separate in navbar above */}
          <AnimateIn delay={0.2}>
            <div className="border border-white/10 p-6 flex flex-col md:flex-row items-center gap-6 bg-zinc-950">
              <div className="text-white/50 text-sm max-w-sm leading-relaxed">
                Our certifications meet the requirements of major national brands and government fleet programs.
              </div>
              <div className="flex items-center gap-8 ml-auto flex-wrap justify-center">
                <div className="text-center">
                  <div className="relative h-10 w-36 mb-1">
                    <Image src="/badge-preferred-white.png" alt="3M Preferred Installer" fill className="object-contain" />
                  </div>
                  <div className="text-white/20 text-[9px] tracking-wider uppercase">3M Preferred Installer</div>
                </div>
                <div className="text-center">
                  <div className="relative h-10 w-36 mb-1">
                    <Image src="/badge-fleet.png" alt="3M Fleet Graphics Certified" fill className="object-contain" />
                  </div>
                  <div className="text-white/20 text-[9px] tracking-wider uppercase">3M Fleet Graphics Certified</div>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── WHO WE SERVE ─────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-zinc-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-10">
            <div className="section-label">Who We Serve</div>
            <h2 className="font-display text-3xl md:text-4xl text-white tracking-wider">INDIVIDUALS, BUSINESSES & NATIONAL BRANDS</h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <div className="flex flex-wrap justify-center gap-3">
              {targetClients.map(c => (
                <div key={c} className="border border-white/15 px-5 py-2.5 text-xs text-white/60 tracking-[0.15em] uppercase font-medium hover:border-yellow-400/50 hover:text-yellow-400 transition-all cursor-default">{c}</div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <AnimateIn>
              <div className="section-label">Why 301 Graphics</div>
              <h2 className="section-title text-white mb-6">CERTIFIED.<br /><span className="text-yellow-400">INSURED.</span><br />ACCOUNTABLE.</h2>
              <p className="text-white/50 leading-relaxed mb-8">
                Whether you're getting your personal vehicle wrapped or managing a
                national fleet program, you get the same thing: a licensed, insured,
                3M Preferred Installer who shows up, communicates clearly, and
                delivers a result you're proud of.
              </p>
              <div className="flex flex-col gap-3 mb-10">
                {['3M Preferred Installer', '3M Fleet Graphics Certified', 'Avery Dennison Trained',
                  'Licensed LLC · Fully Insured', 'We Come to Your Location', '600+ Installs Completed'].map(item => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 shrink-0" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-outline">About 301 Graphics <ArrowRight size={16} /></Link>
            </AnimateIn>
            <div className="grid grid-cols-1 gap-px bg-white/10">
              {whyUs.map((item, i) => (
                <AnimateIn key={item.title} delay={i * 0.08}>
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

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-black border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              { value: '600+', label: 'Installs Completed', sub: 'Commercial & residential' },
              { value: '3M', label: 'Preferred Installer', sub: 'Highest certification level' },
              { value: '5–7', label: 'Year Wrap Lifespan', sub: 'With certified installation' },
              { value: 'SE+', label: 'Regional Coverage', sub: 'Atlanta · Southeast · Nationwide' },
            ].map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.08}>
                <div className="bg-black p-10 text-center group hover:bg-zinc-900 transition-colors">
                  <div className="font-display text-6xl text-yellow-400 mb-2 group-hover:scale-105 transition-transform">{s.value}</div>
                  <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
                  <div className="text-white/30 text-xs tracking-wider uppercase">{s.sub}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLEET STATS ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-yellow-400">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-12">
            <div className="text-black/50 text-xs tracking-[0.3em] uppercase font-semibold mb-3">For Business Owners</div>
            <h2 className="font-display text-4xl md:text-5xl text-black tracking-wider mb-3">YOUR VEHICLES ARE YOUR BEST BILLBOARD</h2>
            <p className="text-black/60 text-sm max-w-xl mx-auto">Fleet graphics generate more daily impressions than almost any other form of advertising — at a fraction of the cost.</p>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/10 mb-10">
            {[
              { value: '16M+', label: 'Annual impressions', sub: 'per wrapped vehicle' },
              { value: '97%', label: 'Of Americans', sub: 'notice vehicle graphics' },
              { value: '5–7 yrs', label: 'Wrap lifespan', sub: 'with certified install' },
              { value: '$0.48', label: 'Per 1,000 views', sub: 'vs. $9+ for social media ads' },
            ].map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.08}>
                <div className="bg-yellow-400 p-8 text-center">
                  <div className="font-display text-5xl text-black mb-2">{s.value}</div>
                  <div className="text-black font-semibold text-sm mb-1">{s.label}</div>
                  <div className="text-black/50 text-xs">{s.sub}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <div className="text-center">
            <Link href="/fleet" className="inline-flex items-center gap-3 bg-black text-white font-semibold px-10 py-4 text-sm tracking-widest uppercase hover:bg-zinc-900 transition-all hover:scale-105">
              See Fleet Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ────────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
            <AnimateIn>
              <div className="section-label">Recent Work</div>
              <h2 className="section-title text-white">RESULTS THAT<br /><span className="text-yellow-400">SPEAK LOUD</span></h2>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <Link href="/portfolio" className="btn-outline shrink-0">Full Portfolio <ArrowRight size={16} /></Link>
            </AnimateIn>
          </div>
          <AnimateIn delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { slug: 'bus-wrap', title: 'Full Bus Wrap', client: 'Georgia PSC', span: 'col-span-2', h: 'h-64' },
                { slug: 'honeycomb-van', title: 'Van Wrap', client: 'Honeycomb Plumbing', h: 'h-64' },
                { slug: 'delta-100-years', title: 'Interior Wall Wrap', client: 'Delta Airlines', h: 'h-64' },
                { slug: 'google-cloud-window', title: 'Event Window Graphics', client: 'Google Cloud', h: 'h-48' },
                { slug: 'robotics-wall-mural', title: 'Warehouse Mural', client: 'Robotics Facility', h: 'h-48' },
                { slug: 'groundworks-truck', title: 'Truck Wrap', client: 'Groundworks', h: 'h-48' },
              ].map((item, i) => (
                <Link key={item.slug} href="/portfolio" className={`${item.span || ''} relative ${item.h} group overflow-hidden bg-zinc-800 block`}>
                  <Image
                    src={`/portfolio/${item.slug}.jpg`}
                    alt={`${item.title} by 301 Graphics`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="text-white font-bold text-xs">{item.title}</div>
                    <div className="text-white/60 text-xs">{item.client}</div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── SUBCONTRACT ──────────────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <AnimateIn>
              <div className="section-label">Print Shops & Agencies</div>
              <h2 className="section-title text-white mb-6">YOUR INSTALL<br /><span className="text-yellow-400">ARM IN THE</span><br />SOUTHEAST</h2>
              <p className="text-white/50 leading-relaxed mb-8">
                You sell it, you print it — we install it. Clean documentation, no confusion, no excuses. We are a 3M Preferred Installer — the credential your biggest clients require.
              </p>
              <Link href="/contact" className="btn-primary">Partner With Us <ArrowRight size={16} /></Link>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="space-y-2">
                {['Install-only — we never compete with your print business',
                  'Full photo documentation on every job',
                  'Same-day quotes with precise dimensions',
                  'Scalable — one job or fifty per month',
                  '3M Preferred Installer & Fleet Certified',
                  'Experienced with all major print shop workflows',
                  'Cobb County base · Southeast · Nationwide travel'].map(item => (
                  <div key={item} className="flex items-start gap-3 bg-zinc-950 p-4 border-l-2 border-yellow-400 hover:bg-zinc-900 transition-colors">
                    <CheckCircle size={15} className="text-yellow-400 shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <div className="section-label">FAQ</div>
            <h2 className="section-title text-white">COMMON<br /><span className="text-yellow-400">QUESTIONS</span></h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div>{faqs.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}</div>
          </AnimateIn>
          <AnimateIn delay={0.2} className="text-center mt-12">
            <p className="text-white/40 text-sm mb-6">Still have a question?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="btn-outline">Contact Us <ArrowRight size={16} /></Link>
              <a href="tel:8153255363" className="btn-primary"><Phone size={16} /> (815) 325-5363</a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── WHAT TO EXPECT TIMELINE ──────────────────────────────────────── */}
      <section className="py-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <div className="section-label">After You Submit a Quote</div>
            <h2 className="section-title text-white">WHAT TO<br /><span className="text-yellow-400">EXPECT</span></h2>
            <p className="text-white/40 text-sm mt-4 max-w-md mx-auto">No deposit required. No pressure. You only pay when work is approved.</p>
          </AnimateIn>
          <div className="max-w-3xl mx-auto">
            {[
              { time: 'Within 1 hour', title: 'You hear back from us', desc: 'During business hours, we typically respond within an hour. Worst case: same business day.' },
              { time: 'Same day', title: 'You get a clear quote', desc: 'A full line-item bid with pricing — no vague estimates, no hidden fees, no upsells.' },
              { time: 'You decide', title: 'No pressure to commit', desc: 'Take time to think it over. We never auto-charge or pressure you into a decision.' },
              { time: 'On install day', title: 'We come to you', desc: 'We arrive on schedule with everything we need. You don\'t need to drop anything off.' },
              { time: 'After completion', title: 'You get documentation', desc: 'Before and after photos sent to you. Final invoice only after the work is finished.' },
            ].map((item, i) => (
              <AnimateIn key={i} delay={i * 0.08}>
                <div className="flex gap-6 pb-8 mb-8 border-b border-white/5 last:border-0 last:mb-0 last:pb-0">
                  <div className="shrink-0 w-32">
                    <div className="text-yellow-400 font-display text-sm tracking-wider uppercase">{item.time}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={0.3} className="text-center mt-12">
            <Link href="/contact" className="btn-primary">Start Your Project <ArrowRight size={16} /></Link>
          </AnimateIn>
        </div>
      </section>

      {/* ── SERVICE AREAS ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-12">
            <div className="section-label">Local Service Areas</div>
            <h2 className="section-title text-white">WE COME<br /><span className="text-yellow-400">TO YOU</span></h2>
            <p className="text-white/40 text-sm mt-4 max-w-md mx-auto">Based in Cobb County. Serving metro Atlanta and beyond.</p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {[
                { slug: 'marietta', name: 'Marietta' },
                { slug: 'smyrna', name: 'Smyrna' },
                { slug: 'kennesaw', name: 'Kennesaw' },
                { slug: 'acworth', name: 'Acworth' },
                { slug: 'atlanta', name: 'Atlanta' },
                { slug: 'cobb-county', name: 'Cobb County' },
              ].map(c => (
                <Link key={c.slug} href={`/areas/${c.slug}`}
                  className="bg-black border border-white/10 p-5 text-center hover:border-yellow-400 hover:bg-zinc-900 transition-all group">
                  <div className="text-white/70 group-hover:text-yellow-400 font-display text-xl tracking-wider transition-colors">{c.name.toUpperCase()}</div>
                  <div className="text-white/30 text-[10px] tracking-wider uppercase mt-1">View Services</div>
                </Link>
              ))}
            </div>
          </AnimateIn>
          <AnimateIn delay={0.2} className="text-center mt-8">
            <p className="text-white/40 text-sm">Outside these areas? We travel throughout the Southeast and nationwide for the right project.</p>
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-32 px-6 bg-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none overflow-hidden">
          <div className="font-display text-[18rem] text-black leading-none whitespace-nowrap">301</div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <AnimateIn>
            <div className="text-black/50 text-xs tracking-[0.3em] uppercase font-semibold mb-4">Personal · Commercial · Fleet</div>
            <h2 className="font-display text-6xl md:text-8xl text-black leading-none tracking-wider mb-6">READY TO GET<br />STARTED?</h2>
            <p className="text-black/60 text-lg mb-3 max-w-lg mx-auto">
              Whether it's your personal vehicle or a fleet of 200 — tell us about your project and we'll quote it the same day.
            </p>
            <p className="text-black/50 text-sm mb-10">
              Call <a href="tel:8153255363" className="font-bold text-black hover:underline">(815) 325-5363</a> or{' '}
              <a href="mailto:301graphic@gmail.com" className="font-bold text-black hover:underline">email 301graphic@gmail.com</a>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-black text-white font-semibold px-10 py-5 text-sm tracking-widest uppercase hover:bg-zinc-900 transition-all hover:scale-105">
                Request a Free Quote <ArrowRight size={18} />
              </Link>
              <a href="tel:8153255363" className="inline-flex items-center gap-3 border-2 border-black text-black font-semibold px-10 py-5 text-sm tracking-widest uppercase hover:bg-black hover:text-yellow-400 transition-all">
                <Phone size={16} /> (815) 325-5363
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </Layout>
  )
}
