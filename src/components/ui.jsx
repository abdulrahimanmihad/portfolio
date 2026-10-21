import { motion } from 'framer-motion'

export const EASE = [0.16, 1, 0.3, 1]

/** Slow fade-and-rise on scroll. `delay` staggers siblings. */
export function Reveal({ children, delay = 0, y = 14, className = '', as = 'div' }) {
  const MotionTag = motion[as] ?? motion.div
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: '0px 0px -60px 0px' }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}

/** Sets the text between asterisks in italics: "think and *ship.*" */
export function Emph({ text }) {
  return text
    .split('*')
    .map((part, i) => (i % 2 ? <em key={i}>{part}</em> : <span key={i}>{part}</span>))
}

/**
 * A folio in the dossier column: a large brass numeral in the left gutter,
 * then label, title and content in a reading-width column.
 */
export function Section({ id, index, label, title, children, className = '' }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`border-b border-line px-6 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-24 ${className}`}
    >
      <div className="mx-auto max-w-[54rem] sm:grid sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-x-6 lg:grid-cols-[5.5rem_minmax(0,1fr)]">
        <Reveal as="p" className="numeral text-[2.25rem] text-accent sm:pt-1">
          {index}
        </Reveal>
        <div className="mt-6 max-w-[42rem] sm:mt-0">
          <Reveal>
            <p className="eyebrow">{label}</p>
            <h2 id={`${id}-heading`} className="display mt-3 text-[clamp(2rem,3vw,2.75rem)]">
              <Emph text={title} />
            </h2>
          </Reveal>
          <div className="mt-10 sm:mt-12">{children}</div>
        </div>
      </div>
    </section>
  )
}

/** A large serif figure with its caption. */
export function Stat({ value, label, note }) {
  return (
    <div>
      <p className="numeral text-[2.75rem] sm:text-[3.25rem]">{value}</p>
      <p className="mt-2 text-sm font-medium leading-snug">{label}</p>
      {note && <p className="mt-0.5 text-sm text-muted">{note}</p>}
    </div>
  )
}
