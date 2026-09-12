import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Layout from '../components/Layout'

export default function NotFound() {
  return (
    <Layout title="Page not found | 301 Graphics" noindex>
      <section className="shell min-h-[70vh] flex items-center pt-32">
        <div>
          <p className="eyebrow mb-6">404</p>
          <h1 className="display h1 max-w-[12ch]">That panel <em>isn't here.</em></h1>
          <p className="lede mt-7">The page moved or never existed. The work, the services and the quote form are all one click away.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/" className="btn btn-solid">Home <ArrowRight size={15} /></Link>
            <Link href="/work" className="btn btn-ghost">See the work</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
