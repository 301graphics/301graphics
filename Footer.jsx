import Link from 'next/link'
import { Instagram, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'
import { site, nav, cities } from '../data/site'
import { track } from '../lib/analytics'

export default function Footer() {
  return (
    <footer className="hairline bg-carbon">
      <div className="shell section !pb-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img src="/brand/logo-dark.png" alt="301 Graphics" className="h-14 w-auto" width="640" height="338" />
            <p className="body mt-7 max-w-[34em]">
              Commercial vinyl installation company based in {site.city}, Georgia. 3M Preferred Installer and Fleet Graphics Certified.
              Mobile across metro Atlanta and the Southeast, nationwide for fleet programs.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <img src="/brand/3m-preferred-installer.png" alt="3M Preferred Installer" className="h-11 w-auto" width="1200" height="368" />
              <img src="/brand/3m-fleet-graphics.png" alt="3M Fleet Graphics Certified" className="h-10 w-auto" width="880" height="321" />
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <p className="eyebrow mb-5">Site</p>
            <ul className="space-y-3 text-sm text-ivory/75">
              {nav.map(i => <li key={i.href}><Link href={i.href} className="hover:text-champagne-light transition-colors">{i.label}</Link></li>)}
              <li><Link href="/quote" className="hover:text-champagne-light transition-colors">Get a quote</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-5">Service area</p>
            <ul className="space-y-3 text-sm text-ivory/75">
              {cities.map(c => <li key={c.slug}><Link href={`/areas/${c.slug}`} className="hover:text-champagne-light transition-colors">{c.name}, GA</Link></li>)}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-4 text-sm">
              <li><a href={site.phoneHref} onClick={() => track('call_click', { location: 'footer' })} className="flex items-center gap-3 text-ivory hover:text-champagne-light transition-colors num"><Phone size={15} className="text-champagne" />{site.phone}</a></li>
              <li><a href={`mailto:${site.email}`} onClick={() => track('email_click', { location: 'footer' })} className="flex items-center gap-3 text-ivory hover:text-champagne-light transition-colors"><Mail size={15} className="text-champagne" />{site.email}</a></li>
              <li><a href={site.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-ivory hover:text-champagne-light transition-colors"><Instagram size={15} className="text-champagne" />{site.instagramHandle}</a></li>
              <li className="flex items-start gap-3 text-ivory/75"><MapPin size={15} className="text-champagne mt-0.5 shrink-0" /><span>{site.city}, {site.region}<br />{site.hours}</span></li>
            </ul>
            <a href={site.reviewsUrl} target="_blank" rel="noreferrer" className="btn btn-text mt-7 text-xs">Reviews on Google <ArrowUpRight size={14} /></a>
          </div>
        </div>

        <div className="hairline-soft mt-16 pt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[0.7rem] tracking-wide text-ash">
          <p>© {new Date().getFullYear()} {site.legalName}. Licensed in Georgia. {site.insurance}.</p>
          <p>Install-only company. Printed graphics shown were produced by our print partners and clients; we installed them.</p>
        </div>
      </div>
    </footer>
  )
}
