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
 * Section shell: a ruled header on a 12-column grid with the label in the
 * left three columns and the title in the remaining nine. Content follows.
 */
export function Section({ id, index, label, title, lead, children, className = '' }) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`py-24 sm:py-28 lg:py-32 ${className}`}
    >
      <div className="shell">
        <Reveal>
          <div className="grid gap-6 border-t border-line pt-6 lg:grid-cols-12 lg:gap-8">
            <p className="eyebrow flex gap-4 lg:col-span-3">
              {index && <span>{index}</span>}
              <span>{label}</span>
            </p>
            <div className="lg:col-span-9">
              <h2 id={`${id}-heading`} className="display text-[clamp(2.5rem,5vw,4.5rem)]">
                <Emph text={title} />
              </h2>
              {lead && (
                <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
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

/** A large serif figure with its caption. */
export function Stat({ value, label, note }) {
  return (
    <div className="border-l border-line pl-5 sm:pl-6">
      <p className="numeral text-[clamp(2.75rem,4.5vw,4rem)]">{value}</p>
      <p className="mt-3 text-sm font-medium leading-snug">{label}</p>
      {note && <p className="mt-1 text-sm text-muted">{note}</p>}
    </div>
  )
}
