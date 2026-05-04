import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Image from 'next/image'

const links = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/fleet', label: 'Fleet' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [router.pathname])

  return (
    <>
      {/* Top credential bar */}
      <div className="hidden md:block bg-yellow-400 py-1.5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            {/* 3M Fleet Badge */}
            <div className="relative h-7 w-28">
              <Image
                src="/badge-fleet.png"
                alt="3M Fleet Graphics Certified"
                fill
                className="object-contain object-left"
              />
            </div>
            {/* 3M Preferred Installer Badge */}
            <div className="relative h-6 w-28">
              <Image
                src="/badge-preferred.png"
                alt="3M Preferred Installer"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
          <div className="flex items-center gap-6 text-black/60 text-xs font-medium">
            <span>Licensed LLC · Fully Insured · Cobb County, GA</span>
            <a href="tel:8153255363" className="font-bold text-black hover:underline flex items-center gap-1">
              <Phone size={11} /> (815) 325-5363
            </a>
          </div>
        </div>
      </div>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/98 backdrop-blur-sm border-b border-white/5 shadow-xl' : 'bg-black'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="301 Graphics Home">
            <div className="relative h-11 w-36">
              <Image src="/logo.png" alt="301 Graphics Logo" fill className="object-contain object-left" priority />
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(({ href, label }) => (
              <Link key={href} href={href}
                className={`text-xs tracking-[0.15em] uppercase font-medium hover-underline transition-colors duration-200 ${
                  href === '/fleet'
                    ? router.pathname === href ? 'text-yellow-400' : 'text-yellow-400/70 hover:text-yellow-400'
                    : router.pathname === href ? 'text-yellow-400' : 'text-white/80 hover:text-white'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">Free Quote</Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2" aria-label="Toggle menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-6"
          >
            <div className="relative h-12 w-44 mb-2">
              <Image src="/logo.png" alt="301 Graphics" fill className="object-contain" />
            </div>
            {/* Mobile badges */}
            <div className="flex items-center gap-6 bg-yellow-400 px-6 py-3 mb-2">
              <div className="relative h-7 w-24">
                <Image src="/badge-fleet.png" alt="3M Fleet Certified" fill className="object-contain" />
              </div>
              <div className="relative h-6 w-24">
                <Image src="/badge-preferred.png" alt="3M Preferred Installer" fill className="object-contain" />
              </div>
            </div>
            {links.map(({ href, label }, i) => (
              <motion.div key={href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                <Link href={href}
                  className={`font-display text-4xl tracking-wider transition-colors ${
                    router.pathname === href ? 'text-yellow-400' : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: links.length * 0.07 }}
              className="flex flex-col items-center gap-4 mt-2">
              <Link href="/contact" className="btn-primary">Free Quote</Link>
              <a href="tel:8153255363" className="text-white/50 text-sm hover:text-yellow-400 transition-colors flex items-center gap-2">
                <Phone size={14} /> (815) 325-5363
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile floating call button */}
      <motion.a href="tel:8153255363" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }}
        className="md:hidden fixed bottom-6 right-6 z-50 bg-yellow-400 text-black px-4 py-3 shadow-2xl flex items-center gap-2 font-bold text-xs tracking-wider uppercase"
        aria-label="Call 301 Graphics">
        <Phone size={18} /> Call Now
      </motion.a>
    </>
  )
}
