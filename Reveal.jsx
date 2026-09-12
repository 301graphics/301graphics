import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

// Content is visible at rest; motion only adds a short rise on first view.
// A timeout guarantees nothing stays hidden if the observer never fires (print, odd scroll containers).
export default function Reveal({ children, delay = 0, y = 24, className = '' }) {
  const reduce = useReducedMotion()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' })
  const [forced, setForced] = useState(false)
  useEffect(() => { const t = setTimeout(() => setForced(true), 2500); return () => clearTimeout(t) }, [])
  const show = inView || forced
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0.001, y }}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0.001, y }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: inView ? delay : 0 }}>
      {children}
    </motion.div>
  )
}
