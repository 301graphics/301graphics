import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-5" aria-label="301 Graphics">
              <div className="relative h-12 w-40">
                <Image src="/logo.png" alt="301 Graphics" fill className="object-contain object-left" />
              </div>
            </Link>

            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              Commercial vinyl installation company based in Cobb County, GA.
              Serving businesses, fleet companies, print shops, and homeowners
              across Atlanta, the Southeast, and nationwide.
              Licensed LLC · Fully Insured.
            </p>

            {/* 3M Badges - using new official 3M certified badges */}
            <div className="flex flex-col gap-3 mb-6 p-4 bg-zinc-950 border border-white/10">
              <div className="text-[9px] tracking-[0.2em] uppercase text-white/30 font-semibold">Certifications</div>
              <div className="flex items-center gap-5 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="relative h-10 w-10 shrink-0">
                    <Image src="/badge-3m-preferred.png" alt="3M Preferred Installer" fill className="object-contain" />
                  </div>
                  <span className="text-white/70 text-[10px] font-semibold tracking-wide leading-tight">3M Preferred<br/>Installer</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative h-10 w-10 shrink-0">
                    <Image src="/badge-3m-fleet.png" alt="3M Fleet Graphics Certified" fill className="object-contain" />
                  </div>
                  <span className="text-white/70 text-[10px] font-semibold tracking-wide leading-tight">3M Fleet Graphics<br/>Certified</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://instagram.com/301graphics_" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-yellow-400 hover:text-yellow-400 transition-all">
                <Instagram size={16} />
              </a>
              <a href="mailto:301graphic@gmail.com"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-yellow-400 hover:text-yellow-400 transition-all">
                <Mail size={16} />
              </a>
              <a href="tel:8153255363"
                className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:border-yellow-400 hover:text-yellow-400 transition-all">
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-yellow-400 mb-6 font-semibold">Navigate</div>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Fleet Graphics', href: '/fleet' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-white/60 text-sm hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-px bg-yellow-400 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs tracking-[0.2em] uppercase text-yellow-400 mb-6 font-semibold">Contact</div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={14} className="text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-white/30 text-[10px] uppercase tracking-wider mb-0.5">Phone</div>
                  <a href="tel:8153255363" className="text-white/70 text-sm hover:text-white transition-colors">(815) 325-5363</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} className="text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-white/30 text-[10px] uppercase tracking-wider mb-0.5">Email</div>
                  <a href="mailto:301graphic@gmail.com" className="text-white/70 text-sm hover:text-white transition-colors">301graphic@gmail.com</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Instagram size={14} className="text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-white/30 text-[10px] uppercase tracking-wider mb-0.5">Instagram</div>
                  <a href="https://instagram.com/301graphics_" target="_blank" rel="noopener noreferrer"
                    className="text-white/70 text-sm hover:text-white transition-colors">@301graphics_</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-yellow-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-white/30 text-[10px] uppercase tracking-wider mb-0.5">Based In</div>
                  <span className="text-white/70 text-sm">Cobb County, GA<br />
                    <span className="text-white/40 text-xs">Atlanta · Southeast · Nationwide</span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} 301 Graphics LLC. All rights reserved. Cobb County, GA.</p>
          <p className="text-white/20 text-xs">Commercial · Residential · Fleet · Vehicle Wraps · Atlanta, GA</p>
        </div>
      </div>
    </footer>
  )
}
