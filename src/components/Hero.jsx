import { motion } from 'framer-motion'
import { profile } from '../data'
import { EASE, Emph } from './ui'

const fade = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: EASE },
})

export default function Hero() {
  return (
    <section id="top" className="flex min-h-[100svh] flex-col justify-end pt-24">
      <div className="shell pb-12 sm:pb-16 lg:pb-20">
        <motion.div
          {...fade(0.05)}
          className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-b border-line pb-5"
        >
          <p className="eyebrow text-ink">{profile.name}</p>
          <p className="eyebrow">
            {profile.title} · {profile.location} · {profile.availability}
          </p>
        </motion.div>

        <h1 className="display mt-12 text-[clamp(3rem,7.6vw,7.25rem)] sm:mt-16 lg:mt-20">
          {profile.headlineLines.map((line, i) => (
            <motion.span
              key={line}
              className="block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.15 + i * 0.12, ease: EASE }}
            >
              <Emph text={line} />
            </motion.span>
          ))}
        </h1>

        <div className="mt-14 grid gap-8 border-t border-line pt-8 sm:mt-20 md:grid-cols-12 md:items-start">
          <motion.p
            {...fade(0.55)}
            className="max-w-md text-base leading-relaxed text-muted sm:text-lg md:col-span-7 lg:col-span-5"
          >
            {profile.subline}
          </motion.p>

          <motion.div
            {...fade(0.65)}
            className="flex flex-wrap gap-3 md:col-span-5 md:justify-end lg:col-span-7"
          >
            <a href={profile.cv} download className="btn btn-primary">
              Download CV
            </a>
            <a href={`mailto:${profile.email}`} className="btn btn-ghost">
              Get in touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
