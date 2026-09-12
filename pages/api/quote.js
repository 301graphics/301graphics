// Quote request handler.
// Delivery order: Resend (with photo attachments) when RESEND_API_KEY is set, otherwise Formspree (text only).
// Env: RESEND_API_KEY, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL. Formspree ID lives in data/site.js.
import { site } from '../../data/site'

export const config = { api: { bodyParser: { sizeLimit: '4.5mb' } } }

const TYPE_LABEL = { business: 'FLEET / RETAIL', trade: 'TRADE', personal: 'PERSONAL' }

function esc(s = '') { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])) }

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' })
  const b = req.body || {}
  if (b.website) return res.status(200).json({ ok: true }) // honeypot
  if (!b.name || !b.email || !b.details) return res.status(400).json({ ok: false, error: 'Name, email and details are required.' })

  const files = Array.isArray(b.files) ? b.files.slice(0, 6).filter(f => f && f.name && f.data) : []
  const typeLabel = TYPE_LABEL[b.type] || 'QUOTE'
  const subject = `[${typeLabel}] ${b.service || 'Quote request'} — ${b.name}${b.company ? ` (${b.company})` : ''}`
  const rows = [
    ['Type', typeLabel], ['Service', b.service], ['Name', b.name], ['Company', b.company], ['Email', b.email], ['Phone', b.phone],
    ['Vehicle / location', b.subject], ['Units / quantity', b.units], ['Timeline', b.timeline], ['Referred by', b.referral],
  ].filter(([, v]) => v)

  // ---- Path 1: Resend with attachments ----
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      const to = process.env.QUOTE_TO_EMAIL || site.email
      const from = process.env.QUOTE_FROM_EMAIL || '301 Graphics Website <onboarding@resend.dev>'
      const attachments = files.map(f => ({ filename: f.name.replace(/[^\w.\-]+/g, '_'), content: Buffer.from(f.data, 'base64') }))
      const html = `
        <div style="font-family:Helvetica,Arial,sans-serif;color:#111;max-width:640px">
          <p style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#888;margin:0 0 6px">301graphics.com quote request</p>
          <h2 style="margin:0 0 18px;font-weight:600">${esc(typeLabel)} · ${esc(b.service || 'General')}</h2>
          <table style="border-collapse:collapse;width:100%;font-size:14px">
            ${rows.map(([k, v]) => `<tr><td style="padding:7px 10px 7px 0;color:#777;white-space:nowrap;vertical-align:top;border-top:1px solid #eee">${esc(k)}</td><td style="padding:7px 0;border-top:1px solid #eee">${esc(v)}</td></tr>`).join('')}
          </table>
          <p style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#888;margin:22px 0 6px">Details</p>
          <p style="white-space:pre-wrap;font-size:15px;line-height:1.5;margin:0">${esc(b.details)}</p>
          ${attachments.length ? `<p style="margin-top:22px;color:#777;font-size:13px">${attachments.length} file(s) attached.</p>` : ''}
          <p style="margin-top:26px;color:#999;font-size:12px">Reply to this email to answer ${esc(b.name)} directly.</p>
        </div>`
      const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nDetails:\n${b.details}`
      const { error } = await resend.emails.send({ from, to: [to], reply_to: b.email, subject, html, text, attachments })
      if (error) throw new Error(error.message || 'send_failed')
      return res.status(200).json({ ok: true, via: 'resend', filesSent: attachments.length })
    } catch (e) {
      console.error('resend failed', e)
      return res.status(500).json({ ok: false, error: 'send_failed' })
    }
  }

  // ---- Path 2: Formspree (text fields only; free plan does not accept files) ----
  if (site.formspreeId) {
    try {
      const payload = {
        _subject: subject,
        email: b.email, // Formspree uses this as reply-to
        name: b.name,
        type: typeLabel,
        service: b.service || '',
        company: b.company || '',
        phone: b.phone || '',
        vehicle_or_location: b.subject || '',
        units: b.units || '',
        timeline: b.timeline || '',
        details: b.details,
        referred_by: b.referral || '',
        photos: files.length ? `${files.length} photo(s) were attached on the site but could not be delivered on this plan; customer was asked to text them to ${site.phone}.` : 'none',
      }
      const r = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await r.json().catch(() => ({}))
      if (!r.ok || data.ok === false || (data.errors && data.errors.length)) throw new Error(JSON.stringify(data))
      return res.status(200).json({ ok: true, via: 'formspree', filesSent: 0, filesDropped: files.length })
    } catch (e) {
      console.error('formspree failed', e)
      return res.status(500).json({ ok: false, error: 'send_failed' })
    }
  }

  return res.status(503).json({ ok: false, error: 'not_configured' })
}
