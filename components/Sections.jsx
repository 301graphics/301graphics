import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Star, Plus, Minus, Phone } from 'lucide-react'
import Reveal from './Reveal'
import { site } from '../data/site'
import { byId } from '../data/work'
import { reviews, rating } from '../data/reviews'
import { track } from '../lib/analytics'

/* ---------- Inner-page hero: one full-bleed photo, headline over it ---------- */
export function PageHero({ eyebrow, title, lede, photo, cta, ctaHref = '/quote', secondary, align = 'left', short = false }) {
  const p = byId(photo)
  return (
    <section className={`relative ${short ? 'min-h-[62vh]' : 'min-h-[78vh]'} flex items-end overflow-hidden`}>
      {p && (
        <div className="absolute inset-0 photo grain">
          <img src={p.src} alt="" fetchPriority="high" className="!transition-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/55 to-carbon/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon/75 via-carbon/25 to-transparent" />
        </div>
      )}
      <div className={`shell relative pt-40 pb-16 md:pb-24 w-full ${align === 'center' ? 'text-center' : ''}`}>
        <Reveal>
          {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
          <h1 className="display h1 max-w-[12ch]" style={align === 'center' ? { marginInline: 'auto' } : {}} dangerouslySetInnerHTML={{ __html: title }} />
          {lede && <p className={`lede mt-7 ${align === 'center' ? 'mx-auto' : ''}`}>{lede}</p>}
          {(cta || secondary) && (
            <div className={`mt-10 flex flex-wrap gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
              {cta && <Link href={ctaHref} className="btn btn-solid">{cta} <ArrowRight size={15} /></Link>}
              {secondary}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Section header ---------- */
export function SectionHead({ eyebrow, title, lede, right, className = '' }) {
  return (
    <Reveal className={`grid gap-8 lg:grid-cols-12 items-end ${className}`}>
      <div className="lg:col-span-8">
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h2 className="display h2" dangerouslySetInnerHTML={{ __html: title }} />
        {lede && <p className="lede mt-6">{lede}</p>}
      </div>
      {right && <div className="lg:col-span-4 lg:text-right">{right}</div>}
    </Reveal>
  )
}

/* ---------- Horizontal reel of work ---------- */
export function WorkReel({ ids, caption = true }) {
  return (
    <div className="reel -mx-[clamp(20px,4vw,64px)] px-[clamp(20px,4vw,64px)]">
      {ids.map(id => byId(id)).filter(Boolean).map((w, i) => (
        <Link key={w.id} href={`/work?open=${w.id}`} className="group w-[78vw] sm:w-[52vw] lg:w-[36vw] max-w-[640px]">
          <div className="photo aspect-[4/3]">
            <img src={w.small} srcSet={`${w.small} 800w, ${w.src} 1500w`} sizes="(min-width:1024px) 36vw, 78vw" alt={w.caption} loading={i < 2 ? 'eager' : 'lazy'} />
          </div>
          {caption && (
            <div className="flex items-baseline justify-between gap-4 mt-4">
              <p className="text-sm text-ivory/80 group-hover:text-champagne-light transition-colors">{w.caption}</p>
              <span className="eyebrow !text-ash !tracking-[0.16em] shrink-0">{w.tag}</span>
            </div>
          )}
        </Link>
      ))}
    </div>
  )
}

/* ---------- Editorial photo + text split ---------- */
export function Split({ eyebrow, title, children, photo, flip = false, cta, ctaHref, aspect = 'aspect-[4/5]' }) {
  const p = byId(photo)
  return (
    <div className={`grid gap-10 lg:gap-16 lg:grid-cols-12 items-center`}>
      <Reveal className={`lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}>
        {p && (
          <div className={`photo ${aspect}`}>
            <img src={p.small} srcSet={`${p.small} 800w, ${p.src} 1500w`} sizes="(min-width:1024px) 50vw, 100vw" alt={p.caption} loading="lazy" />
          </div>
        )}
      </Reveal>
      <Reveal delay={0.1} className={`lg:col-span-5 ${flip ? 'lg:order-1' : 'lg:col-start-8'}`}>
        {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
        <h2 className="display h2" dangerouslySetInnerHTML={{ __html: title }} />
        <div className="body mt-6 space-y-4">{children}</div>
        {cta && <Link href={ctaHref} className="btn btn-text mt-8">{cta} <ArrowRight size={16} /></Link>}
      </Reveal>
    </div>
  )
}

/* ---------- Stat strip ---------- */
export function Stats({ items }) {
  return (
    <Reveal className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 hairline pt-10">
      {items.map(s => (
        <div key={s.label} className="pr-6">
          <p className="display text-[clamp(2.4rem,4.5vw,4rem)] leading-none text-champagne-light num">{s.value}</p>
          <p className="mt-3 text-xs tracking-[0.16em] uppercase text-ash">{s.label}</p>
        </div>
      ))}
    </Reveal>
  )
}

/* ---------- Standards list ---------- */
export function StandardsList({ items }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12">
      {items.map((s, i) => (
        <Reveal key={s.title} delay={(i % 3) * 0.08} className="hairline-soft py-8">
          <h3 className="display h3 text-ivory">{s.title}</h3>
          <p className="body mt-4">{s.body}</p>
        </Reveal>
      ))}
    </div>
  )
}

/* ---------- Service index ---------- */
export function ServiceIndex({ items, ctaHref = '/quote' }) {
  return (
    <div className="hairline">
      {items.map((s, i) => {
        const p = byId(s.photo)
        return (
          <Reveal key={s.slug} className="hairline-soft first:border-t-0">
            <Link href={`${ctaHref}?service=${s.slug}`} className="group grid gap-6 md:grid-cols-12 items-center py-8 md:py-6">
              <div className="md:col-span-2 photo aspect-[16/9] md:aspect-[5/4] md:max-w-[220px]">
                {p && <img src={p.small} alt={p.caption} loading="lazy" />}
              </div>
              <div className="md:col-span-4">
                <h3 className="display h3 group-hover:text-champagne-light transition-colors">{s.name}</h3>
              </div>
              <p className="md:col-span-5 body">{s.short}</p>
              <div className="md:col-span-1 md:text-right"><ArrowUpRight className="inline text-champagne transition-transform duration-500 ease-lux group-hover:translate-x-1 group-hover:-translate-y-1" size={22} /></div>
            </Link>
          </Reveal>
        )
      })}
    </div>
  )
}

/* ---------- Reviews ---------- */
export function Reviews({ compact = false }) {
  if (!reviews.length) return null
  return (
    <div className={`grid gap-10 lg:grid-cols-12 ${compact ? '' : 'items-start'}`}>
      <Reveal className="lg:col-span-4">
        <p className="eyebrow mb-5">Reviews</p>
        <div className="flex items-center gap-1 text-champagne">
          {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
          <span className="ml-3 text-sm text-ivory/80 num">{rating.value.toFixed(1)} on Google</span>
        </div>
        <h2 className="display h2 mt-6">Word travels.</h2>
        <p className="body mt-5">Every review is a real customer on Google. Read them all, and if we have worked together, add yours.</p>
        <div className="mt-7 flex flex-wrap gap-4">
          <a href={site.reviewsUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">Read on Google <ArrowUpRight size={14} /></a>
          {site.writeReviewUrl && <a href={site.writeReviewUrl} target="_blank" rel="noreferrer" className="btn btn-text">Leave a review <ArrowUpRight size={14} /></a>}
        </div>
      </Reveal>
      <div className="lg:col-span-7 lg:col-start-6 grid gap-6 md:grid-cols-2">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 0.08} className="bg-graphite/70 border border-white/5 p-8">
            <div className="flex items-center gap-1 text-champagne">{[...Array(r.stars)].map((_, i) => <Star key={i} size={13} fill="currentColor" strokeWidth={0} />)}</div>
            <p className="display text-[1.35rem] leading-snug mt-5 text-ivory/90">“{r.excerpt}{r.full ? '' : '…'}”</p>
            <p className="mt-6 text-xs tracking-[0.14em] uppercase text-ash">{r.name} · {r.source} · {r.date}</p>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

/* ---------- Instagram ---------- */
export function InstagramStrip({ ids }) {
  const feedId = process.env.NEXT_PUBLIC_INSTAGRAM_FEED_ID
  return (
    <div>
      <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-10">
        <div>
          <p className="eyebrow mb-4">On Instagram</p>
          <h2 className="display h2">Fresh off the squeegee.</h2>
        </div>
        <a href={site.instagram} target="_blank" rel="noreferrer" className="btn btn-ghost">Follow {site.instagramHandle} <ArrowUpRight size={14} /></a>
      </Reveal>
      {feedId ? (
        <div data-behold-id={feedId} />
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {ids.map(id => byId(id)).filter(Boolean).map(w => (
            <a key={w.id} href={site.instagram} target="_blank" rel="noreferrer" className="photo aspect-square">
              <img src={w.small} alt={w.caption} loading="lazy" />
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

/* ---------- FAQ ---------- */
export function FAQ({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="hairline">
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className="hairline-soft first:border-t-0">
            <button className="w-full flex items-center justify-between gap-6 py-6 text-left group" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)} id={`faq-${i}`}>
              <span className="display h3 group-hover:text-champagne-light transition-colors">{f.q}</span>
              <span className="text-champagne shrink-0">{isOpen ? <Minus size={18} /> : <Plus size={18} />}</span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-500 ease-lux ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
              <div className="overflow-hidden"><p className="body pb-7 max-w-[60ch]">{f.a}</p></div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ---------- Closing CTA band ---------- */
export function CTABand({ title = 'Send the job. Get a number.', lede = 'Vehicle or site, coverage and location. A firm quote comes back, usually the same day.', photo = 'coach-bus-full-wrap', cta = 'Request a quote' }) {
  const p = byId(photo)
  return (
    <section className="relative overflow-hidden">
      {p && (
        <div className="absolute inset-0 photo grain">
          <img src={p.src} alt="" loading="lazy" className="!transition-none opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/80 to-carbon/40" />
        </div>
      )}
      <div className="shell relative section">
        <Reveal className="max-w-[40rem]">
          <h2 className="display h2" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="lede mt-6">{lede}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/quote" className="btn btn-solid">{cta} <ArrowRight size={15} /></Link>
            <a href={site.phoneHref} onClick={() => track('call_click', { location: 'cta_band' })} className="btn btn-ghost"><Phone size={15} /> {site.phone}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
