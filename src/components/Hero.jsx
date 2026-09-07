import { motion } from 'framer-motion'
import { profile } from '../data'
import { EASE, Marquee } from './ui'
import { ArrowIcon, DownloadIcon } from './icons'

const fade = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: EASE },
})

export default function Hero() {
  return (
    <section id="top" className="flex min-h-[100svh] flex-col justify-end pt-24">
      <div className="shell pb-12 sm:pb-16">
        <motion.p
          {...fade(0.05)}
          className="eyebrow flex flex-wrap items-center gap-x-4 gap-y-2 text-ink"
        >
          <span>
            {profile.name} · {profile.title} · {profile.location}
          </span>
          <span className="inline-flex items-center gap-2 text-muted">
            <span aria-hidden="true" className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ink" />
            </span>
            {profile.availability}
          </span>
        </motion.p>

        <h1 className="display mt-8 text-[clamp(3.25rem,11.5vw,10.5rem)] sm:mt-10">
          {profile.headlineLines.map((line, i) => (
            <span key={line} className="mask-line">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.1 + i * 0.09, ease: EASE }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-12 md:items-end sm:mt-14">
          <motion.p
            {...fade(0.45)}
            className="max-w-xl text-base leading-relaxed text-muted sm:text-lg md:col-span-7 lg:col-span-6"
          >
            {profile.subline}
          </motion.p>

          <motion.div
            {...fade(0.55)}
            className="flex flex-wrap gap-3 md:col-span-5 md:justify-end lg:col-span-6"
          >
            <a href="#experience" className="btn btn-primary">
              View work
              <ArrowIcon width={17} height={17} className="arrow-right" />
            </a>
            <a href={profile.cv} download className="btn btn-ghost">
              <DownloadIcon width={17} height={17} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <Marquee items={profile.competencies} />
      </motion.div>
    </section>
  )
}
