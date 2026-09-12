import { useEffect, useMemo, useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import { CTABand } from '../components/Sections'
import { work, categories } from '../data/work'

function Lightbox({ items, index, onClose, onStep }) {
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose(); if (e.key === 'ArrowRight') onStep(1); if (e.key === 'ArrowLeft') onStep(-1) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [onClose, onStep])
  const w = items[index]
  if (!w) return null
  return (
    <div className="fixed inset-0 z-[60] bg-carbon/95 backdrop-blur-sm flex flex-col" role="dialog" aria-modal="true" aria-label={w.caption}>
      <div className="flex items-center justify-between px-5 md:px-8 h-16 shrink-0">
        <p className="eyebrow !text-ash num">{index + 1} / {items.length}</p>
        <button onClick={onClose} className="p-2 text-ivory hover:text-champagne" aria-label="Close"><X size={24} /></button>
      </div>
      <div className="flex-1 min-h-0 relative flex items-center justify-center px-4 md:px-16">
        <button onClick={() => onStep(-1)} className="absolute left-2 md:left-6 p-3 text-ivory/70 hover:text-champagne" aria-label="Previous"><ChevronLeft size={30} /></button>
        <img src={w.src} alt={w.caption} className="max-h-full max-w-full object-contain" />
        <button onClick={() => onStep(1)} className="absolute right-2 md:right-6 p-3 text-ivory/70 hover:text-champagne" aria-label="Next"><ChevronRight size={30} /></button>
      </div>
      <div className="px-5 md:px-8 py-5 flex items-baseline justify-between gap-6 shrink-0">
        <p className="text-sm text-ivory/85">{w.caption}</p>
        <p className="eyebrow !text-ash">{w.tag}</p>
      </div>
    </div>
  )
}

export default function Work() {
  const router = useRouter()
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(-1)

  useEffect(() => {
    if (!router.isReady) return
    if (router.query.filter && categories.some(c => c.key === router.query.filter)) setFilter(router.query.filter)
  }, [router.isReady, router.query.filter])

  const items = useMemo(() => {
    if (filter === 'all') return work
    const cat = categories.find(c => c.key === filter)
    const keys = cat?.match || [filter]
    return work.filter(w => keys.includes(w.category))
  }, [filter])

  useEffect(() => {
    if (!router.isReady || !router.query.open) return
    const idx = items.findIndex(w => w.id === router.query.open)
    if (idx >= 0) setOpen(idx)
  }, [router.isReady, router.query.open, items])

  const close = useCallback(() => setOpen(-1), [])
  const step = useCallback(d => setOpen(i => (i + d + items.length) % items.length), [items.length])

  return (
    <Layout title="Work | Fleet, Vehicle, Storefront & Wall Graphics Installed by 301 Graphics" description="Selected installs by 301 Graphics: fleet graphics, vehicle wraps, storefront and window graphics, wall murals and interior graphics across Atlanta and the Southeast." canonical="/work" image="/work/coach-bus-full-wrap.jpg">
      <section className="shell pt-40 pb-12">
        <Reveal>
          <p className="eyebrow mb-6">Work</p>
          <h1 className="display h1 max-w-[12ch]">From the field, <em>names withheld.</em></h1>
          <p className="lede mt-7">Photos straight from the job, taken the day we finished. We keep client names off the site out of respect for the print shops and coordinators we work for. Ask and we will walk you through any of them.</p>
        </Reveal>
        <div className="segmented mt-12" role="group" aria-label="Filter work">
          {categories.map(c => (
            <button key={c.key} id={`filter-${c.key}`} aria-pressed={filter === c.key} onClick={() => { setFilter(c.key); setOpen(-1) }}>{c.label}</button>
          ))}
        </div>
      </section>

      <section className="shell pb-[var(--section)]">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [&>*]:mb-4">
          {items.map((w, i) => (
            <button key={w.id} onClick={() => setOpen(i)} className="group block w-full text-left break-inside-avoid" aria-label={`Open ${w.caption}`}>
              <div className="photo" style={{ aspectRatio: `${w.w} / ${w.h}` }}>
                <img src={w.small} srcSet={`${w.small} 800w, ${w.src} 1500w`} sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" alt={w.caption} loading={i < 6 ? 'eager' : 'lazy'} />
              </div>
              <div className="flex items-baseline justify-between gap-4 mt-3 mb-2">
                <p className="text-sm text-ivory/80 group-hover:text-champagne-light transition-colors">{w.caption}</p>
                <span className="eyebrow !text-ash !tracking-[0.16em] shrink-0">{w.tag}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {open >= 0 && <Lightbox items={items} index={open} onClose={close} onStep={step} />}
      <CTABand title="Want yours <em>on this page?</em>" photo="box-truck-full-wrap" />
    </Layout>
  )
}
