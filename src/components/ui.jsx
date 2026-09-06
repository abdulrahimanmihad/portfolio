import { motion } from 'framer-motion'
import { useCountUp } from '../hooks'

export const EASE = [0.16, 1, 0.3, 1]

/** Fade-and-rise on scroll. `delay` staggers siblings. */
export function Reveal({ children, delay = 0, y = 18, className = '', as = 'div' }) {
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -40px 0px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}

/**
 * Section shell: a ruled header on a 12-column grid with the label in the
 * left three columns and the title in the remaining nine. Content follows.
 */
export function Section({ id, index, label, title, lead, children, alt = false, className = '' }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`py-20 sm:py-24 lg:py-32 ${alt ? 'bg-alt' : ''} ${className}`}
    >
      <div className="shell">
        <Reveal>
          <div className="grid gap-5 border-t border-line pt-5 lg:grid-cols-12 lg:gap-8">
            <p className="eyebrow flex gap-3 lg:col-span-3">
              {index && <span className="tabular-nums">{index}</span>}
              <span>{label}</span>
            </p>
            <div className="lg:col-span-9">
              <h2 id={`${id}-heading`} className="display text-[clamp(2.25rem,5.5vw,4.5rem)]">
                {title}
              </h2>
              {lead && (
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                  {lead}
                </p>
              )}
            </div>
          </div>
        </Reveal>
        <div className="mt-14 sm:mt-20">{children}</div>
      </div>
    </section>
  )
}

/** Counts up when scrolled into view. */
export function Counter({ value, prefix = '', suffix = '', decimals = 0, className = '' }) {
  const { ref, value: current } = useCountUp(value, { decimals })
  const text = current.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
  return (
    <span ref={ref} className={className}>
      {prefix}
      {text}
      {suffix}
    </span>
  )
}

export function Tag({ children }) {
  return <li className="chip">{children}</li>
}

/** Continuous ticker of short phrases. Falls back to a wrapped list under reduced motion. */
export function Marquee({ items, label = 'Core competencies', className = '' }) {
  const list = (hidden) => (
    <ul className="flex shrink-0 items-center gap-10 sm:gap-14" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-10 text-[0.8125rem] font-semibold uppercase tracking-[0.14em] sm:gap-14"
        >
          <span>{item}</span>
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink" />
        </li>
      ))}
    </ul>
  )

  return (
    <div className={`marquee border-y border-line py-4 ${className}`} role="region" aria-label={label}>
      <div className="marquee-track">
        {list(false)}
        {list(true)}
      </div>
    </div>
  )
}
