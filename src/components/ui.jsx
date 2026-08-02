import { motion } from 'framer-motion'
import { useCountUp } from '../hooks'

/** Fade-and-rise on scroll. `delay` staggers siblings. */
export function Reveal({ children, delay = 0, y = 22, className = '', as = 'div' }) {
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

export function Section({ id, eyebrow, title, lead, children, alt = false }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="scroll-mt-24 py-20 md:py-28"
      style={alt ? { backgroundColor: 'var(--bg-alt)' } : undefined}
    >
      <div className="shell">
        <Reveal>
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-accent">
            {eyebrow}
          </p>
          <h2
            id={`${id}-heading`}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          {lead && <p className="muted mt-4 max-w-2xl text-base leading-relaxed">{lead}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}

/** Counts up when scrolled into view. */
export function Counter({ value, prefix = '', suffix = '', decimals = 0, className = '' }) {
  const { ref, value: current } = useCountUp(value, { decimals })
  return (
    <span ref={ref} className={className}>
      {prefix}
      {current.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export function Tag({ children }) {
  return <li className="chip">{children}</li>
}
