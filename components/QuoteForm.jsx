import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Upload, X, ArrowRight, Check, Phone, Mail } from 'lucide-react'
import { site } from '../data/site'
import { services } from '../data/services'
import { track } from '../lib/analytics'

const TYPES = [
  { key: 'business', label: 'Fleet / retail / business' },
  { key: 'trade', label: 'Print shop / coordinator' },
  { key: 'personal', label: 'My own vehicle' },
]
const TIMELINES = ['As soon as possible', 'Within 2 weeks', 'Within a month', 'Flexible / planning ahead']
const MAX_FILES = 6
const MAX_TOTAL = 3.8 * 1024 * 1024 // Vercel request cap is 4.5MB; keep headroom for base64

const serviceOptions = type => {
  const base = services.filter(s => s.audience.includes(type === 'business' ? 'commercial' : type === 'trade' ? 'trade' : 'personal')).map(s => ({ value: s.slug, label: s.name }))
  if (type === 'trade') base.push({ value: 'trade-guide', label: 'Trade pricing guide request' })
  base.push({ value: 'other', label: 'Something else' })
  return base
}

async function compressImage(file) {
  if (!file.type.startsWith('image/')) return file
  const bitmap = await createImageBitmap(file).catch(() => null)
  if (!bitmap) return file
  const max = 1600
  const scale = Math.min(1, max / Math.max(bitmap.width, bitmap.height))
  const canvas = document.createElement('canvas')
  canvas.width = Math.round(bitmap.width * scale); canvas.height = Math.round(bitmap.height * scale)
  canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height)
  const blob = await new Promise(r => canvas.toBlob(r, 'image/jpeg', 0.82))
  if (!blob) return file
  return new File([blob], file.name.replace(/\.[^.]+$/, '') + '.jpg', { type: 'image/jpeg' })
}

const toBase64 = file => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result.split(',')[1]); r.onerror = rej; r.readAsDataURL(file) })

export default function QuoteForm() {
  const router = useRouter()
  const [type, setType] = useState('business')
  const [form, setForm] = useState({ service: '', name: '', company: '', email: '', phone: '', subject: '', units: '', timeline: TIMELINES[0], details: '', referral: '', website: '' })
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('idle') // idle | sending | sent | error | fallback
  const [msg, setMsg] = useState('')
  const [drag, setDrag] = useState(false)
  const fileRef = useRef(null)

  useEffect(() => {
    if (!router.isReady) return
    const q = router.query
    if (q.type && TYPES.some(t => t.key === q.type)) setType(q.type)
    else if (q.service && services.find(s => s.slug === q.service)?.audience.includes('personal') && !services.find(s => s.slug === q.service)?.audience.includes('commercial')) setType('personal')
    if (q.service) setForm(f => ({ ...f, service: q.service }))
  }, [router.isReady, router.query])

  const set = e => setForm({ ...form, [e.target.name]: e.target.value })
  const options = serviceOptions(type)
  const serviceValid = options.some(o => o.value === form.service)

  const addFiles = async incoming => {
    setMsg('')
    const next = [...files]
    for (const raw of incoming) {
      if (next.length >= MAX_FILES) { setMsg(`Up to ${MAX_FILES} files. Email us if you have more.`); break }
      const f = raw.type.startsWith('image/') ? await compressImage(raw) : raw
      const total = next.reduce((a, x) => a + x.size, 0) + f.size
      if (total > MAX_TOTAL) { setMsg(`That puts us over the upload limit. Send the rest to ${site.email} and mention your name.`); continue }
      if (!next.find(x => x.name === f.name && x.size === f.size)) next.push(f)
    }
    setFiles(next)
  }

  const submit = async e => {
    e.preventDefault()
    if (status === 'sending') return
    setStatus('sending'); setMsg('')
    try {
      const payload = { ...form, type, service: serviceValid ? options.find(o => o.value === form.service).label : form.service, files: await Promise.all(files.map(async f => ({ name: f.name, data: await toBase64(f) }))) }
      const res = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
      const data = await res.json().catch(() => ({}))
      if (res.ok && data.ok) { setStatus('sent'); track('quote_submit', { type, service: payload.service, files: files.length }); return }
      if (res.status === 503 && data.error === 'not_configured') { setStatus('fallback'); return }
      throw new Error(data.error || 'send_failed')
    } catch (err) {
      setStatus('error')
      setMsg(`Something went wrong sending that. Call ${site.phone} or email ${site.email} and we will take it from there.`)
    }
  }

  const mailtoBody = encodeURIComponent(`Type: ${TYPES.find(t => t.key === type)?.label}\nService: ${form.service}\nName: ${form.name}\nCompany: ${form.company}\nPhone: ${form.phone}\nVehicle / location: ${form.subject}\nUnits: ${form.units}\nTimeline: ${form.timeline}\n\n${form.details}`)

  if (status === 'sent') {
    return (
      <div className="border border-champagne/30 p-8 md:p-12">
        <Check className="text-champagne" size={28} />
        <h2 className="display h2 mt-6">Got it.</h2>
        <p className="lede mt-5">You will hear back with a number, usually today. If it is urgent, call or text.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={site.phoneHref} onClick={() => track('call_click', { location: 'quote_success' })} className="btn btn-solid"><Phone size={15} /> {site.phone}</a>
          {site.calendlyUrl && <a href={site.calendlyUrl} target="_blank" rel="noreferrer" className="btn btn-ghost">Book a call</a>}
        </div>
      </div>
    )
  }

  if (status === 'fallback') {
    return (
      <div className="border border-champagne/30 p-8 md:p-12">
        <h2 className="display h2">One more step.</h2>
        <p className="lede mt-5">Our form delivery is being set up. Tap below and your request opens in your email app, ready to send.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a href={`mailto:${site.email}?subject=${encodeURIComponent('Quote request — ' + form.name)}&body=${mailtoBody}`} className="btn btn-solid"><Mail size={15} /> Send by email</a>
          <a href={site.phoneHref} className="btn btn-ghost"><Phone size={15} /> {site.phone}</a>
        </div>
        {files.length > 0 && <p className="mute text-sm mt-6">Attach your {files.length} photo{files.length > 1 ? 's' : ''} to that email and you are set.</p>}
      </div>
    )
  }

  const personal = type === 'personal'

  return (
    <form onSubmit={submit} className="grid gap-9" noValidate>
      <div className="field">
        <label>This is for</label>
        <div className="segmented" role="group" aria-label="Request type">
          {TYPES.map(t => <button type="button" key={t.key} id={`type-${t.key}`} aria-pressed={type === t.key} onClick={() => { setType(t.key); setForm(f => ({ ...f, service: '' })) }}>{t.label}</button>)}
        </div>
      </div>

      <div className="field">
        <label htmlFor="q-service">What do you need</label>
        <select id="q-service" name="service" value={serviceValid ? form.service : ''} onChange={set} required>
          <option value="">Choose one</option>
          {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-9">
        <div className="field"><label htmlFor="q-name">Your name</label><input id="q-name" name="name" value={form.name} onChange={set} required autoComplete="name" /></div>
        {!personal && <div className="field"><label htmlFor="q-company">Company</label><input id="q-company" name="company" value={form.company} onChange={set} autoComplete="organization" /></div>}
        <div className="field"><label htmlFor="q-email">Email</label><input id="q-email" type="email" name="email" value={form.email} onChange={set} required autoComplete="email" /></div>
        <div className="field"><label htmlFor="q-phone">Phone</label><input id="q-phone" type="tel" name="phone" value={form.phone} onChange={set} autoComplete="tel" /></div>
        <div className="field"><label htmlFor="q-subject">{personal ? 'Year, make & model' : 'Location (city or address)'}</label><input id="q-subject" name="subject" value={form.subject} onChange={set} placeholder={personal ? '2024 Ford Bronco' : 'Marietta, GA'} /></div>
        <div className="field">
          {personal ? (
            <><label htmlFor="q-timeline">When</label><select id="q-timeline" name="timeline" value={form.timeline} onChange={set}>{TIMELINES.map(t => <option key={t}>{t}</option>)}</select></>
          ) : (
            <><label htmlFor="q-units">How many vehicles or locations</label><input id="q-units" name="units" value={form.units} onChange={set} placeholder="12 vans, 1 storefront…" /></>
          )}
        </div>
        {!personal && <div className="field sm:col-span-2"><label htmlFor="q-timeline2">When does it need to be done</label><select id="q-timeline2" name="timeline" value={form.timeline} onChange={set}>{TIMELINES.map(t => <option key={t}>{t}</option>)}</select></div>}
      </div>

      <div className="field">
        <label htmlFor="q-details">{personal ? 'What are you going for' : 'Scope'}</label>
        <textarea id="q-details" name="details" value={form.details} onChange={set} required placeholder={personal ? 'Satin black color change, keep the roof gloss, chrome delete on the trim…' : 'Partial wraps on 12 Transit vans, artwork ready, install at our yard in Marietta, need it done before Oct 15…'} />
      </div>

      {/* Files */}
      <div className="field">
        <label>{personal ? 'Photos of the vehicle' : 'Photos, artwork or a PDF'}</label>
        <div
          onDragOver={e => { e.preventDefault(); setDrag(true) }} onDragLeave={() => setDrag(false)}
          onDrop={e => { e.preventDefault(); setDrag(false); addFiles(Array.from(e.dataTransfer.files)) }}
          onClick={() => fileRef.current?.click()}
          className={`cursor-pointer border border-dashed p-7 text-center transition-colors ${drag ? 'border-champagne bg-champagne/5' : 'border-white/20 hover:border-champagne/60'}`}
        >
          <Upload size={20} className="mx-auto text-champagne" />
          <p className="mt-3 text-sm text-ivory/80">Drop files here or tap to choose</p>
          <p className="mute text-xs mt-1">Up to {MAX_FILES} files. Photos are resized automatically.</p>
          <input ref={fileRef} id="q-files" type="file" multiple accept="image/*,.pdf,.ai,.eps,.svg" className="hidden" onChange={e => { addFiles(Array.from(e.target.files)); e.target.value = '' }} />
        </div>
        {files.length > 0 && (
          <ul className="mt-3 grid sm:grid-cols-2 gap-2">
            {files.map((f, i) => (
              <li key={f.name + i} className="flex items-center justify-between gap-3 border border-white/10 px-3 py-2 text-sm">
                <span className="truncate text-ivory/85">{f.name} <span className="mute">· {(f.size / 1024).toFixed(0)}KB</span></span>
                <button type="button" onClick={() => setFiles(files.filter((_, j) => j !== i))} aria-label={`Remove ${f.name}`} className="text-ash hover:text-champagne"><X size={15} /></button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="field"><label htmlFor="q-referral">How did you hear about us <span className="normal-case tracking-normal text-ash/70">(optional)</span></label><input id="q-referral" name="referral" value={form.referral} onChange={set} placeholder="Google, 3M installer locator, a print shop, Instagram…" /></div>
      <input type="text" name="website" value={form.website} onChange={set} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      {msg && <p className="text-sm text-champagne-light" role="status">{msg}</p>}

      <div className="flex flex-wrap items-center gap-6">
        <button type="submit" className="btn btn-solid" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send request'} <ArrowRight size={15} /></button>
        <p className="mute text-xs max-w-[28em]">No spam, no newsletter. Your details go straight to Tony's inbox.</p>
      </div>
    </form>
  )
}
