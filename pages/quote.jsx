import { Phone, Mail, MessageSquare, Calendar } from 'lucide-react'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import QuoteForm from '../components/QuoteForm'
import { site } from '../data/site'
import { track } from '../lib/analytics'

const next = [
  { t: 'You send the job', b: 'Vehicle or site, coverage, location and photos. Two minutes.' },
  { t: 'You get a number', b: 'One flat quote with travel and everything included spelled out. Usually the same day.' },
  { t: 'We pick a date', b: 'Around your downtime, store hours or driveway. It holds.' },
]

export default function Quote() {
  return (
    <Layout title="Request a Quote | 301 Graphics" description="Request a vinyl installation quote from 301 Graphics. Fleet graphics, storefront rollouts, trade installs and personal vehicle wraps. Upload photos and get a firm number, usually the same day." canonical="/quote">
      <section className="shell pt-40 pb-[var(--section)]">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow mb-6">Get a quote</p>
              <h1 className="display h1 max-w-[12ch]">Send the job. <em>Get a number.</em></h1>
              <p className="lede mt-7">The more you give us, the firmer the quote. Photos help most.</p>
            </Reveal>
            <Reveal delay={0.1} className="mt-14"><QuoteForm /></Reveal>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={0.15} className="lg:sticky lg:top-32 grid gap-10">
              <div>
                <p className="eyebrow mb-5">Rather talk?</p>
                <ul className="grid gap-4">
                  <li><a href={site.phoneHref} onClick={() => track('call_click', { location: 'quote_aside' })} className="flex items-center gap-4 text-ivory hover:text-champagne-light transition-colors"><Phone size={18} className="text-champagne" /><span className="num text-lg">{site.phone}</span></a></li>
                  <li><a href={site.smsHref} onClick={() => track('sms_click', { location: 'quote_aside' })} className="flex items-center gap-4 text-ivory hover:text-champagne-light transition-colors"><MessageSquare size={18} className="text-champagne" /><span>Text a photo to the same number</span></a></li>
                  <li><a href={`mailto:${site.email}`} onClick={() => track('email_click', { location: 'quote_aside' })} className="flex items-center gap-4 text-ivory hover:text-champagne-light transition-colors"><Mail size={18} className="text-champagne" /><span>{site.email}</span></a></li>
                </ul>
              </div>

              {site.calendlyUrl && (
                <div className="border border-champagne/25 p-6">
                  <div className="flex items-center gap-3 text-champagne"><Calendar size={18} /><p className="eyebrow">Book a call or site survey</p></div>
                  <p className="body mt-3 text-sm">Grab a 15-minute slot and we will walk the job together.</p>
                  <a href={site.calendlyUrl} target="_blank" rel="noreferrer" onClick={() => track('calendly_open', { location: 'quote_aside' })} className="btn btn-ghost mt-5 w-full justify-center">Pick a time</a>
                </div>
              )}

              <div>
                <p className="eyebrow mb-5">What happens next</p>
                <ol className="hairline">
                  {next.map((s, i) => (
                    <li key={s.t} className="hairline-soft first:border-t-0 py-5 flex gap-5">
                      <span className="display text-2xl text-champagne num leading-none pt-0.5">{i + 1}</span>
                      <div><p className="text-ivory">{s.t}</p><p className="body text-sm mt-1">{s.b}</p></div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="text-sm text-ivory/70 leading-relaxed">
                <p className="eyebrow mb-4">For coordinators</p>
                <p>W-9, COI with your company as holder, and vendor packets turn around fast. Ask for the trade pricing guide in the form.</p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </Layout>
  )
}
