// Service index. `audience` drives which page a service is featured on.
export const services = [
  {
    slug: 'fleet-graphics',
    name: 'Fleet graphics',
    short: 'Two vans or two hundred trucks. Same panel placement on every unit, documented.',
    long: 'Fleet work is a consistency problem, not a wrapping problem. We build a placement spec from the first vehicle, photograph every unit on completion, and work around your routes so trucks are back in service the same day. 3M Fleet Graphics Certified.',
    audience: ['commercial', 'trade'],
    photo: 'crew-cab-fleet-decals',
  },
  {
    slug: 'vehicle-wraps',
    name: 'Commercial vehicle wraps',
    short: 'Full and partial wraps on vans, box trucks, trailers, buses and specialty vehicles.',
    long: 'Post-heated edges, tucked seams, no lift on rivets or recesses. We install what your print shop produces, or bring in one of our print partners for a turnkey job.',
    audience: ['commercial', 'trade', 'personal'],
    photo: 'coach-bus-full-wrap',
  },
  {
    slug: 'storefront-windows',
    name: 'Storefront & window graphics',
    short: 'Perforated film, frosted and etched-look film, seasonal changeovers, event takeovers.',
    long: 'Retail rollouts run on a calendar, not ours. We install nights and early mornings so the store opens on time with the new campaign up, and we send completion photos before you ask.',
    audience: ['commercial', 'trade'],
    photo: 'storefront-window-perf',
  },
  {
    slug: 'walls-architectural',
    name: 'Wall & architectural graphics',
    short: 'Murals, building lettering, textured wall wraps and architectural finish films.',
    long: 'Painted block, drywall, composite panel, corrugated steel and glass all take vinyl differently. We test the substrate before we quote and use the right film for the surface.',
    audience: ['commercial', 'trade'],
    photo: 'exterior-mural-panels',
  },
  {
    slug: 'interiors-retail',
    name: 'Interior & retail graphics',
    short: 'Fixture graphics, backlit panels, floor graphics, lockers, elevators and exhibits.',
    long: 'The detail work that sits at eye level in a finished space. Clean cuts, level lines and zero bubbles, installed around your opening date.',
    audience: ['commercial', 'trade'],
    photo: 'retail-display-graphics',
  },
  {
    slug: 'color-change',
    name: 'Color change wraps',
    short: 'Satin, matte, gloss and color-shift finishes on your personal vehicle.',
    long: 'A full color change with the door jambs and panel edges handled the way a paint shop would. We source premium film in the finish you want and keep your paint underneath untouched.',
    audience: ['personal'],
    photo: 'matte-color-change-truck',
  },
  {
    slug: 'accents-ppf',
    name: 'Stripes, accents & paint protection',
    short: 'Racing stripes, chrome delete, roof wraps, and PPF through our partner network.',
    long: 'The upgrades that make a stock vehicle look like yours. Paint protection film and ceramic tint are handled by specialists we trust and stand behind.',
    audience: ['personal'],
    photo: 'bronco-accent-stripes',
  },
  {
    slug: 'removal',
    name: 'Removal & re-brand',
    short: 'Old graphics off, adhesive gone, surface ready for the new brand.',
    long: 'Removal is graded on film age, sun exposure and substrate. We pull a test patch before quoting so nobody gets surprised.',
    audience: ['commercial', 'trade'],
    photo: 'trailer-lettering',
  },
]

export const standards = [
  { title: 'Certified, not just experienced', body: '3M Preferred Installer and 3M Fleet Graphics Certified. Avery Dennison trained. Over a thousand installs across vehicles, storefronts and walls.' },
  { title: 'We come to you', body: 'Mobile by design. Your yard, your store, your job site, your driveway. No shuttling vehicles across town and no facility overhead built into the price.' },
  { title: 'The date holds', body: 'When we take a date, we show up on it. Fleet downtime and store hours are planned around, including nights and weekends.' },
  { title: 'Documented, every job', body: 'Before and after photos on every unit, delivered the same day. Your coordinator or client gets proof without chasing it.' },
  { title: 'Insured to $2M', body: 'Licensed Georgia LLC with $2M general liability. COI with your company as certificate holder, usually same day.' },
  { title: 'One point of contact', body: 'You talk to the installer. Questions get answered from the site, not routed through an office.' },
]

export const faqs = [
  { q: 'How do you price a job?', a: 'By the job, as one flat number with travel and everything included spelled out. Send vehicle or site details, coverage and location and you will get a firm quote, usually the same day. Very large flat-panel work can be priced per square foot.' },
  { q: 'Do you print?', a: 'No. We are an installation company. Print shops and coordinators send us finished graphics to install. For direct clients we bring in one of our print partners and manage the whole job for you, so you still only deal with us.' },
  { q: 'Will a wrap damage my paint?', a: 'Not when it is installed and removed properly on factory paint. Premium cast films from 3M and Avery Dennison come off clean for years. Repainted or damaged surfaces are the exception and we will tell you before we start.' },
  { q: 'How long does a wrap last?', a: 'Five to seven years is typical on vertical surfaces with quality film and a correct install. Horizontal surfaces and heavy sun shorten that. Fleet graphics are usually replaced when the brand changes, not when the film fails.' },
  { q: 'Do you travel?', a: 'Yes. Home base is Kennesaw, Georgia. Metro Atlanta is routine, the Southeast is regular, and fleet or multi-site programs take us nationwide. Travel is quoted up front, never added later.' },
  { q: 'Can you handle a rollout with dozens of locations?', a: 'Yes. We coordinate sub-installers we have vetted personally and hold every site to the same spec and the same photo documentation.' },
]
