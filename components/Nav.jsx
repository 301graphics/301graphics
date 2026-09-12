import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Phone, X, Menu } from 'lucide-react'
import { site, nav } from '../data/site'
import { track } from '../lib/analytics'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [router.asPath])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-lux ${scrolled || open ? 'bg-carbon/85 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}
    >
      <div className="shell flex items-center justify-between h-[76px] md:h-[88px]">
        <Link href="/" aria-label="301 Graphics home" className="flex items-center">
          <img src="/brand/logo-dark.png" alt="301 Graphics" className="h-10 md:h-12 w-auto" width="640" height="338" />
        </Link>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
          {nav.map(item => {
            const active = router.pathname === item.href || router.asPath.startsWith(item.href + '/')
            return (
              <Link key={item.href} href={item.href}
                className={`text-[0.72rem] tracking-[0.18em] uppercase transition-colors duration-300 ${active ? 'text-champagne' : 'text-ivory/70 hover:text-ivory'}`}>
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a href={site.phoneHref} onClick={() => track('call_click', { location: 'nav' })}
            className="text-[0.78rem] tracking-[0.08em] text-ivory/80 hover:text-champagne transition-colors num flex items-center gap-2">
            <Phone size={14} className="text-champagne" /> {site.phone}
          </a>
          <Link href="/quote" className="btn btn-solid !py-3 !px-5">Get a quote</Link>
        </div>

        <button className="lg:hidden p-2 -mr-2 text-ivory" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden fixed inset-x-0 top-[76px] bottom-0 bg-carbon transition-opacity duration-400 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="shell flex flex-col h-full py-8">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item, i) => (
              <Link key={item.href} href={item.href} className="display h3 py-4 border-b border-white/5 text-ivory hover:text-champagne-light transition-colors">
                {item.label}
              </Link>
            ))}
            <Link href="/quote" className="display h3 py-4 border-b border-white/5 text-champagne">Get a quote</Link>
          </nav>
          <div className="mt-auto pt-8 flex flex-col gap-4">
            <a href={site.phoneHref} onClick={() => track('call_click', { location: 'mobile_menu' })} className="btn btn-ghost justify-center"><Phone size={16} /> {site.phone}</a>
            <p className="mute text-xs tracking-wide">{site.city}, {site.region}. Mobile across the Southeast.</p>
          </div>
        </div>
      </div>
    </header>
  )
}
