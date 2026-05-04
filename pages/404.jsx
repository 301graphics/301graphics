import Layout from '../components/Layout'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <Layout title="404 — Not Found">
      <div className="min-h-screen flex items-center justify-center px-6 bg-black">
        <div className="text-center">
          <div className="font-display text-[20rem] text-white/5 leading-none select-none">404</div>
          <div className="-mt-20">
            <h1 className="font-display text-5xl text-white tracking-wider mb-4">PAGE NOT FOUND</h1>
            <p className="text-white/50 mb-8">Looks like this page got wrapped over.</p>
            <Link href="/" className="btn-primary">
              Back to Home <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
