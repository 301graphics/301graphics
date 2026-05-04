const SITE_URL = 'https://301graphics.com'

const pages = [
  { path: '/',                priority: '1.0', changefreq: 'weekly' },
  { path: '/services',        priority: '0.9', changefreq: 'monthly' },
  { path: '/fleet',           priority: '0.9', changefreq: 'monthly' },
  { path: '/portfolio',       priority: '0.9', changefreq: 'weekly' },
  { path: '/about',           priority: '0.8', changefreq: 'monthly' },
  { path: '/contact',         priority: '0.8', changefreq: 'monthly' },
  { path: '/areas/marietta',     priority: '0.7', changefreq: 'monthly' },
  { path: '/areas/smyrna',       priority: '0.7', changefreq: 'monthly' },
  { path: '/areas/kennesaw',     priority: '0.7', changefreq: 'monthly' },
  { path: '/areas/acworth',      priority: '0.7', changefreq: 'monthly' },
  { path: '/areas/atlanta',      priority: '0.8', changefreq: 'monthly' },
  { path: '/areas/cobb-county',  priority: '0.7', changefreq: 'monthly' },
]

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(({ path, priority, changefreq }) => `  <url>
    <loc>${SITE_URL}${path}</loc>
    <priority>${priority}</priority>
    <changefreq>${changefreq}</changefreq>
  </url>`).join('\n')}
</urlset>`
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap()
  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()
  return { props: {} }
}

export default function Sitemap() {}
