// Quote request handler. Sends an email via Resend with any attached photos.
// Env: RESEND_API_KEY, QUOTE_TO_EMAIL, QUOTE_FROM_EMAIL
export const config = { api: { bodyParser: { sizeLimit: '4.5mb' } } }

const TYPE_LABEL = { business: 'FLEET / RETAIL', trade: 'TRADE', personal: 'PERSONAL' }

function esc(s = '') { return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])) }

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'Method not allowed' })
  const b = req.body || {}
  if (b.website) return res.status(200).json({ ok: true }) // honeypot
  if (!b.name || !b.email || !b.details) return res.status(400).json({ ok: false, error: 'Name, email and details are required.' })
  if (!process.env.RESEND_API_KEY) return res.status(503).json({ ok: false, error: 'not_configured' })

  const { Resend } = await import('resend')
  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.QUOTE_TO_EMAIL || '301graphic@gmail.com'
  const from = process.env.QUOTE_FROM_EMAIL || '301 Graphics Website <onboarding@resend.dev>'

  const files = Array.isArray(b.files) ? b.files.slice(0, 6) : []
  const attachments = files
    .filter(f => f && f.name && f.data)
    .map(f => ({ filename: f.name.replace(/[^\w.\-]+/g, '_'), content: Buffer.from(f.data, 'base64') }))

  const rows = [
    ['Type', TYPE_LABEL[b.type] || b.type], ['Service', b.service], ['Name', b.name], ['Company', b.company], ['Email', b.email], ['Phone', b.phone],
    ['Vehicle / location', b.subject], ['Units / quantity', b.units], ['Timeline', b.timeline], ['Referred by', b.referral],
  ].filter(([, v]) => v)

  const html = `
    <div style="font-family:Helvetica,Arial,sans-serif;color:#111;max-width:640px">
      <p style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#888;margin:0 0 6px">301graphics.com quote request</p>
      <h2 style="margin:0 0 18px;font-weight:600">${esc(TYPE_LABEL[b.type] || 'QUOTE')} · ${esc(b.service || 'General')}</h2>
      <table style="border-collapse:collapse;width:100%;font-size:14px">
        ${rows.map(([k, v]) => `<tr><td style="padding:7px 10px 7px 0;color:#777;white-space:nowrap;vertical-align:top;border-top:1px solid #eee">${esc(k)}</td><td style="padding:7px 0;border-top:1px solid #eee">${esc(v)}</td></tr>`).join('')}
      </table>
      <p style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#888;margin:22px 0 6px">Details</p>
      <p style="white-space:pre-wrap;font-size:15px;line-height:1.5;margin:0">${esc(b.details)}</p>
      ${attachments.length ? `<p style="margin-top:22px;color:#777;font-size:13px">${attachments.length} file(s) attached.</p>` : ''}
      <p style="margin-top:26px;color:#999;font-size:12px">Reply to this email to answer ${esc(b.name)} directly.</p>
    </div>`

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n') + `\n\nDetails:\n${b.details}`

  try {
    const { error } = await resend.emails.send({
      from, to: [to], reply_to: b.email,
      subject: `[${TYPE_LABEL[b.type] || 'QUOTE'}] ${b.service || 'Quote request'} — ${b.name}${b.company ? ` (${b.company})` : ''}`,
      html, text, attachments,
    })
    if (error) throw new Error(error.message || 'send_failed')
    return res.status(200).json({ ok: true })
  } catch (e) {
    console.error('quote send failed', e)
    return res.status(500).json({ ok: false, error: 'send_failed' })
  }
}
