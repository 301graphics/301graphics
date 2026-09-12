import { cities, site } from '../data/site'

const routes = ['', '/commercial', '/trade', '/personal', '/work', '/about', '/quote', ...cities.map(c => `/areas/${c.slug}`)]

export async function getServerSideProps({ res }) {
  const now = new Date().toISOString()
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes.map(r => `  <url><loc>${site.url}${r}</loc><lastmod>${now}</lastmod><changefreq>${r === '' ? 'weekly' : 'monthly'}</changefreq><priority>${r === '' ? '1.0' : r === '/quote' ? '0.9' : '0.7'}</priority></url>`).join('\n')}\n</urlset>`
  res.setHeader('Content-Type', 'application/xml')
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')
  res.write(xml)
  res.end()
  return { props: {} }
}
export default function Sitemap() { return null }
