import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { site } from '../data/site'
import { byId } from '../data/work'
import { track } from '../lib/analytics'

const SLIDES = ['matte-color-change-truck', 'storefront-window-perf', 'coach-bus-full-wrap']

export default function Hero() {
  const [i, setI] = useState(0)
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce) return
    const t = setInterval(() => setI(v => (v + 1) % SLIDES.length), 6500)
    return () => clearInterval(t)
  }, [reduce])
  const ease = [0.22, 1, 0.36, 1]

  return (
    <section className="relative min-h-[88vh] md:min-h-[92vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 grain">
        {SLIDES.map((id, idx) => {
          const p = byId(id)
          return (
            <img key={id} src={p.src} alt="" fetchPriority={idx === 0 ? 'high' : 'low'}
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ease-lux"
              style={{ opacity: idx === i ? 1 : 0, transform: idx === i && !reduce ? 'scale(1.04)' : 'scale(1)', transition: 'opacity 1.6s cubic-bezier(.22,1,.36,1), transform 7s linear' }} />
          )
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-carbon/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon/70 via-transparent to-transparent" />
      </div>

      <div className="shell relative w-full pt-40 pb-14 md:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }} className="eyebrow mb-6">
              3M Preferred Installer · Kennesaw, Georgia · Mobile across the Southeast
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.1 }} className="display h1 max-w-[11ch]">
              Vinyl, installed to <em>the standard.</em>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.25 }} className="lede mt-7">
              Fleet graphics, storefront rollouts and wraps for brands that notice the details.
              Installed on site, on the date we gave you, with photos before you ask.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 0.4 }} className="mt-10 flex flex-wrap gap-4">
              <Link href="/quote" className="btn btn-solid">Request a quote <ArrowRight size={15} /></Link>
              <a href={site.phoneHref} onClick={() => track('call_click', { location: 'hero' })} className="btn btn-ghost"><Phone size={15} /> {site.phone}</a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.6 }} className="lg:col-span-4 flex lg:justify-end items-center gap-7">
            <img src="/brand/3m-preferred-installer.png" alt="3M Preferred Installer" className="h-12 md:h-14 w-auto" width="1200" height="368" />
            <img src="/brand/3m-fleet-graphics.png" alt="3M Fleet Graphics Certified" className="h-11 md:h-12 w-auto" width="880" height="321" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
