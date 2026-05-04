import { useState, useRef } from 'react'
import Layout from '../components/Layout'
import AnimateIn from '../components/AnimateIn'
import { motion } from 'framer-motion'
import { Phone, Mail, Instagram, CheckCircle, ArrowRight, Send, MapPin, Upload, X, FileText, Image as ImageIcon, File } from 'lucide-react'

const projectTypes = [
  'Fleet Graphics (Multiple Vehicles)',
  'Single Vehicle Wrap',
  'Storefront / Window Graphics',
  'Wall Mural / Interior Graphics',
  'Trade Show / Event Install',
  'Subcontract Work (Print Shop / Agency)',
  'Large Format Graphics — Other',
]

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgodaplq'
const MAX_FILES = 5
const MAX_SIZE_MB = 25
const ACCEPTED = '.pdf,.ai,.eps,.svg,.png,.jpg,.jpeg,.tiff,.zip,.psd'

function FileIcon({ type }) {
  if (type.startsWith('image/')) return <ImageIcon size={14} className="text-yellow-400" />
  if (type.includes('pdf')) return <FileText size={14} className="text-yellow-400" />
  return <File size={14} className="text-yellow-400" />
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', type: '', location: '', details: '',
  })
  const [files, setFiles] = useState([])
  const [dragOver, setDragOver] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fileError, setFileError] = useState('')
  const fileInputRef = useRef(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const addFiles = (incoming) => {
    setFileError('')
    const newFiles = [...files]
    for (const file of incoming) {
      if (newFiles.length >= MAX_FILES) {
        setFileError(`Maximum ${MAX_FILES} files allowed.`)
        break
      }
      if (file.size > MAX_SIZE_MB * 1024 * 1024) {
        setFileError(`"${file.name}" exceeds ${MAX_SIZE_MB}MB limit.`)
        continue
      }
      if (!newFiles.find(f => f.name === file.name && f.size === file.size)) {
        newFiles.push(file)
      }
    }
    setFiles(newFiles)
  }

  const handleFileInput = (e) => addFiles(Array.from(e.target.files))

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    addFiles(Array.from(e.dataTransfer.files))
  }

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index))
    setFileError('')
  }

  const formatSize = (bytes) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)}KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)}MB`
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setFileError('')

    try {
      const data = new FormData()
      Object.entries(form).forEach(([key, val]) => data.append(key, val))
      files.forEach((file) => data.append('attachments', file))

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}))
        throw new Error(errorData.error || 'Submission failed')
      }

      setSubmitted(true)
    } catch (err) {
      setFileError('Something went wrong. Please email us directly at 301graphic@gmail.com or call (815) 325-5363.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Layout
      title="Contact 301 Graphics | Free Quote — Vinyl Installation Cobb County, GA"
      description="Request a free vinyl installation quote from 301 Graphics. Upload your artwork, specs, or design files. Based in Cobb County, GA. Same-day quotes. Call (815) 325-5363 or email 301graphic@gmail.com."
    >
      {/* Hero */}
      <section className="pt-40 pb-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <AnimateIn>
            <div className="section-label">Get a Free Quote</div>
            <h1 className="section-title text-white mb-4">
              REQUEST<br />
              <span className="text-yellow-400">A QUOTE</span>
            </h1>
            <p className="text-white/50 max-w-lg leading-relaxed">
              Fill out the form below and attach any artwork, specs, or reference files.
              With dimensions provided, we turn quotes around the same day.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="pb-32 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Sidebar */}
            <AnimateIn className="lg:col-span-2" direction="right">
              <div className="space-y-10">

                {/* Direct contact */}
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-yellow-400 font-semibold mb-6">Direct Contact</div>
                  <ul className="space-y-5">
                    {[
                      { icon: <Phone size={16} />, label: 'Phone', value: '(815) 325-5363', href: 'tel:8153255363' },
                      { icon: <Mail size={16} />, label: 'Email', value: '301graphic@gmail.com', href: 'mailto:301graphic@gmail.com' },
                      { icon: <Instagram size={16} />, label: 'Instagram', value: '@301graphics_', href: 'https://instagram.com/301graphics_', external: true },
                      { icon: <MapPin size={16} />, label: 'Based In', value: 'Cobb County, GA', sub: 'Atlanta · Southeast · Nationwide' },
                    ].map(item => (
                      <li key={item.label} className="flex items-start gap-4 group">
                        <div className="w-10 h-10 border border-white/20 group-hover:border-yellow-400 flex items-center justify-center transition-colors shrink-0">
                          <span className="text-yellow-400">{item.icon}</span>
                        </div>
                        <div>
                          <div className="text-white/30 text-[10px] uppercase tracking-wider mb-0.5">{item.label}</div>
                          {item.href ? (
                            <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}
                              className="text-white hover:text-yellow-400 transition-colors font-medium text-sm">{item.value}</a>
                          ) : (
                            <div>
                              <div className="text-white font-medium text-sm">{item.value}</div>
                              {item.sub && <div className="text-white/40 text-xs mt-0.5">{item.sub}</div>}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quote process */}
                <div className="border border-yellow-400/30 p-6">
                  <div className="text-yellow-400 font-semibold text-sm mb-5">How Our Quote Process Works</div>
                  <div className="space-y-4">
                    {[
                      { n: '01', t: 'Submit your details', d: 'Include dimensions, project type, location — and attach any artwork or spec files below.' },
                      { n: '02', t: 'Same-day quote', d: 'With precise dimensions, we respond the same day with a full line-item bid.' },
                      { n: '03', t: 'Survey fee if needed', d: 'If we need to come measure on-site, a travel fee applies based on distance from Cobb County.' },
                      { n: '04', t: 'Schedule & execute', d: 'We install on schedule and send before/after photos on every job.' },
                    ].map(s => (
                      <div key={s.n} className="flex items-start gap-3">
                        <div className="font-display text-yellow-400 text-xl leading-none shrink-0 mt-0.5">{s.n}</div>
                        <div>
                          <div className="text-white text-sm font-semibold">{s.t}</div>
                          <div className="text-white/40 text-xs leading-relaxed mt-0.5">{s.d}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Accepted file types */}
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-white/40 font-semibold mb-3">Accepted File Types</div>
                  <div className="flex flex-wrap gap-1.5">
                    {['PDF', 'AI', 'EPS', 'SVG', 'PNG', 'JPG', 'TIFF', 'PSD', 'ZIP'].map(ext => (
                      <span key={ext} className="border border-white/15 px-2 py-0.5 text-white/40 text-[10px] tracking-wider uppercase font-mono">{ext}</span>
                    ))}
                  </div>
                  <p className="text-white/30 text-xs mt-2 leading-relaxed">
                    Up to {MAX_FILES} files · {MAX_SIZE_MB}MB max per file.<br />
                    For larger files, send a link in the project details field.
                  </p>
                </div>

                {/* Commitments */}
                <div>
                  <div className="text-xs tracking-[0.2em] uppercase text-white/40 font-semibold mb-4">Our Commitment</div>
                  <ul className="space-y-2.5">
                    {[
                      'Same-day quotes with precise dimensions',
                      'Clear, line-item pricing — no surprises',
                      'Full photo documentation on every job',
                      '3M Fleet Certified · Licensed LLC · Insured',
                    ].map(p => (
                      <li key={p} className="flex items-center gap-3">
                        <CheckCircle size={13} className="text-yellow-400 shrink-0" />
                        <span className="text-white/60 text-sm">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateIn>

            {/* Form */}
            <AnimateIn className="lg:col-span-3" delay={0.2}>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-white/50 mb-2">Full Name *</label>
                      <input type="text" name="name" required value={form.name} onChange={handleChange}
                        className="w-full bg-zinc-950 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-white/50 mb-2">Company</label>
                      <input type="text" name="company" value={form.company} onChange={handleChange}
                        className="w-full bg-zinc-950 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="Your company" />
                    </div>
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-white/50 mb-2">Email *</label>
                      <input type="email" name="email" required value={form.email} onChange={handleChange}
                        className="w-full bg-zinc-950 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="you@company.com" />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-white/50 mb-2">Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                        className="w-full bg-zinc-950 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="(555) 000-0000" />
                    </div>
                  </div>

                  {/* Type + Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-white/50 mb-2">Project Type *</label>
                      <select name="type" required value={form.type} onChange={handleChange}
                        className="w-full bg-zinc-950 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors appearance-none cursor-pointer">
                        <option value="" disabled>Select type...</option>
                        {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.15em] uppercase text-white/50 mb-2">Install Location</label>
                      <input type="text" name="location" value={form.location} onChange={handleChange}
                        className="w-full bg-zinc-950 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors"
                        placeholder="City, State (e.g. Atlanta, GA)" />
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-white/50 mb-2">Project Details *</label>
                    <textarea name="details" required rows={5} value={form.details} onChange={handleChange}
                      className="w-full bg-zinc-950 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-yellow-400 transition-colors resize-none"
                      placeholder="Describe your project: number of vehicles or surfaces, dimensions (sq ft or measurements), vinyl being supplied or needed, timeline, and any other relevant info. For large files, paste a Google Drive or Dropbox link here." />
                    <p className="text-white/30 text-xs mt-1.5">
                      💡 Precise dimensions = same-day quote. Rough estimates may need a follow-up.
                    </p>
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-white/50 mb-2">
                      Attach Files <span className="text-white/30 normal-case tracking-normal">(artwork, specs, proofs — optional)</span>
                    </label>

                    {/* Drop zone */}
                    <div
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-none p-8 text-center cursor-pointer transition-all duration-200 ${
                        dragOver
                          ? 'border-yellow-400 bg-yellow-400/5'
                          : 'border-white/20 hover:border-yellow-400/50 hover:bg-white/2'
                      }`}
                    >
                      <Upload size={24} className={`mx-auto mb-3 ${dragOver ? 'text-yellow-400' : 'text-white/30'}`} />
                      <p className="text-white/60 text-sm font-medium mb-1">
                        Drag & drop files here, or <span className="text-yellow-400">click to browse</span>
                      </p>
                      <p className="text-white/30 text-xs">
                        PDF · AI · EPS · PNG · JPG · PSD · ZIP · Up to {MAX_FILES} files · {MAX_SIZE_MB}MB each
                      </p>
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        accept={ACCEPTED}
                        onChange={handleFileInput}
                        className="hidden"
                      />
                    </div>

                    {/* File list */}
                    {files.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {files.map((file, i) => (
                          <div key={i} className="flex items-center justify-between bg-zinc-950 border border-white/10 px-3 py-2.5 group">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <FileIcon type={file.type} />
                              <span className="text-white/80 text-xs truncate">{file.name}</span>
                              <span className="text-white/30 text-xs shrink-0">{formatSize(file.size)}</span>
                            </div>
                            <button type="button" onClick={() => removeFile(i)}
                              className="text-white/30 hover:text-red-400 transition-colors ml-3 shrink-0">
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                        <p className="text-white/30 text-xs">{files.length}/{MAX_FILES} files attached</p>
                      </div>
                    )}

                    {/* Error */}
                    {fileError && (
                      <p className="text-red-400 text-xs mt-2">{fileError}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-yellow-400 text-black font-semibold py-4 text-sm tracking-widest uppercase hover:bg-white transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-black border-t-transparent rounded-full" />
                        Sending...
                      </>
                    ) : (
                      <>Submit Quote Request <Send size={16} /></>
                    )}
                  </button>

                  <p className="text-white/20 text-xs text-center">
                    Or email directly:{' '}
                    <a href="mailto:301graphic@gmail.com" className="text-white/40 hover:text-yellow-400 transition-colors">
                      301graphic@gmail.com
                    </a>
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-zinc-950 border border-yellow-400/30 p-12 text-center min-h-[400px] flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-black" />
                  </div>
                  <h2 className="font-display text-4xl text-white tracking-wider mb-4">REQUEST RECEIVED</h2>
                  <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-2">
                    We'll get back to you as fast as possible — same day if dimensions were included.
                  </p>
                  {files.length > 0 && (
                    <p className="text-yellow-400/60 text-xs mb-6">
                      {files.length} file{files.length > 1 ? 's' : ''} attached to your submission.
                    </p>
                  )}
                  <p className="text-white/30 text-xs">
                    Check out our work on Instagram{' '}
                    <a href="https://instagram.com/301graphics_" target="_blank" rel="noopener noreferrer"
                      className="text-yellow-400 hover:underline">@301graphics_</a>
                  </p>
                </motion.div>
              )}
            </AnimateIn>
          </div>
        </div>
      </section>
    </Layout>
  )
}
