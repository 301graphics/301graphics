import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'
import Reveal from '../components/Reveal'
import { PageHero, SectionHead, Split, WorkReel, FAQ, CTABand } from '../components/Sections'
import { serviceSchema } from '../lib/schema'

const finishes = [
  { n: 'Satin black', s: 'linear-gradient(135deg,#2a2a2a,#0d0d0d 60%,#232323)' },
  { n: 'Gloss black', s: 'linear-gradient(135deg,#3a3a3a,#050505 45%,#1c1c1c 70%,#000)' },
  { n: 'Satin dark gray', s: 'linear-gradient(135deg,#5a5c5e,#2f3133 60%,#4a4c4e)' },
  { n: 'Gloss white', s: 'linear-gradient(135deg,#ffffff,#d9d9d9 55%,#f2f2f2)' },
  { n: 'Matte military green', s: 'linear-gradient(135deg,#4c5343,#2f3529 60%,#454b3c)' },
  { n: 'Midnight blue', s: 'linear-gradient(135deg,#1c2a4a,#0b1224 60%,#182340)' },
  { n: 'Deep red', s: 'linear-gradient(135deg,#8a1a24,#4a0a10 60%,#7a141e)' },
  { n: 'Color shift', s: 'linear-gradient(135deg,#3d2a6b,#1c6a7a 45%,#6b2a5a 80%,#2a3d6b)' },
  { n: 'Satin silver', s: 'linear-gradient(135deg,#c9cbcd,#8f9294 60%,#b9bbbd)' },
  { n: 'Nardo gray', s: 'linear-gradient(135deg,#8d9092,#6b6e70 60%,#828587)' },
]

const faqs = [
  { q: 'How much does a color change cost?', a: 'It depends on the vehicle, the finish and how much of it you want covered. Send a few photos and the color you are after and you will get a firm number, not a range. Deposits are 50% to hold the date, balance at pickup.' },
  { q: 'Where does the work happen?', a: 'Stripes, accents, chrome delete and small graphics can be done at your home or office. Full color changes are done indoors in a clean, enclosed bay we arrange, so the finish is right.' },
  { q: 'Will it hurt my paint?', a: 'Not on healthy factory paint. Premium cast film from 3M or Avery Dennison protects the paint underneath and removes clean. If your car has been repainted or has clear-coat damage, we will tell you before we start.' },
  { q: 'Do you do PPF and tint?', a: 'Through specialists we trust. We coordinate it so you have one point of contact, and we stand behind the work.' },
  { q: 'How long does it take?', a: 'Accents and stripes are usually a few hours. A full color change is typically several days, depending on the vehicle. You will know the schedule before you commit.' },
]

export default function Personal() {
  return (
    <Layout
      title="Color Change Wraps, Stripes & PPF in Kennesaw & Atlanta | 301 Graphics"
      description="Satin, matte and gloss color change wraps, racing stripes, chrome delete and paint protection for your personal vehicle. 3M Preferred Installer based in Kennesaw, GA. Mobile service for accents and stripes."
      canonical="/personal"
      image="/work/matte-color-change-truck.jpg"
      jsonLd={serviceSchema('Personal vehicle wraps and color change', 'Color change wraps, stripes, accents and paint protection for personal vehicles in metro Atlanta.')}
    >
      <PageHero eyebrow="For your ride" title="Make it <em>yours.</em>"
        lede="A color change, a stripe package or a chrome delete, installed by the same certified hands that do fleet work for national brands. Your paint stays perfect underneath."
        photo="matte-color-change-truck" cta="Get a quote" ctaHref="/quote?type=personal" />

      <section className="shell section">
        <Split eyebrow="Color change" title="Every panel edge, <em>handled.</em>" photo="matte-color-change-truck" cta="Quote a color change" ctaHref="/quote?type=personal&service=color-change">
          <p>A good color change is judged at the edges: door jambs, mirror caps, the line under the trim. We disassemble what needs disassembling, wrap into the recesses and put it back together the way it left the factory.</p>
          <p>Premium cast films only. We source the exact finish you want and show you a sample before we order a roll.</p>
        </Split>
      </section>

      <section className="shell section !pt-0">
        <Split flip eyebrow="Stripes, accents & delete" title="The details that make it <em>look like yours.</em>" photo="bronco-accent-stripes" cta="Quote accents" ctaHref="/quote?type=personal&service=accents-ppf" aspect="aspect-[4/3]">
          <p>Racing stripes, hood and fender graphics, roof wraps, blackout packages and chrome delete. Most of this is a half-day at your driveway or office, and it changes the whole stance of the vehicle.</p>
          <p>Paint protection film and ceramic tint are handled by specialists we trust, coordinated by us so you have one person to call.</p>
        </Split>
      </section>

      <section className="shell section !pt-0">
        <SectionHead eyebrow="Finishes" title="Pick a <em>direction.</em>" lede="These are the finishes we get asked for most. Every major film brand makes them; we help you choose based on how the vehicle is used and washed." />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {finishes.map((f, i) => (
            <Reveal key={f.n} delay={(i % 5) * 0.05}>
              <div className="aspect-[4/3] relative overflow-hidden" style={{ background: f.s }}>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
              </div>
              <p className="mt-3 text-xs tracking-[0.14em] uppercase text-ivory/75">{f.n}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell section !pt-0">
        <SectionHead eyebrow="Personal & specialty" title="Recent work." right={<Link href="/work?filter=vehicle" className="btn btn-text">More vehicles <ArrowRight size={16} /></Link>} />
        <div className="mt-12">
          <WorkReel ids={['bronco-stripes-detail', 'motorhome-graphics', 'custom-bus-wrap', 'van-full-wrap', 'bronco-accent-stripes']} />
        </div>
      </section>

      <section className="shell section !pt-0">
        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4"><p className="eyebrow mb-5">Questions</p><h2 className="display h2">Before you book.</h2></Reveal>
          <div className="lg:col-span-8"><FAQ items={faqs} /></div>
        </div>
      </section>

      <CTABand title="Send a photo. <em>Get a number.</em>" lede="Year, make, model, the finish or look you want, and a couple of photos. A firm quote comes back fast." photo="bronco-accent-stripes" cta="Quote my vehicle" />
    </Layout>
  )
}
