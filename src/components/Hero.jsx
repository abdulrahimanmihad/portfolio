import { motion } from 'framer-motion'
import { profile } from '../data'
import { useTypewriter } from '../hooks'
import { ArrowIcon, DownloadIcon, GitHubIcon, LinkedInIcon, PinIcon } from './icons'

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function Hero() {
  const typed = useTypewriter(profile.typingPhrases)

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      <div className="hero-aura" aria-hidden="true" />
      <div className="grid-veil" aria-hidden="true" />

      <div className="shell relative">
        <div className="max-w-3xl">
          <motion.p
            variants={rise}
            initial="hidden"
            animate="show"
            custom={0}
            className="muted mb-6 inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl px-3 py-1.5 text-xs font-medium sm:rounded-full"
            style={{ border: '1px solid var(--border)', backgroundColor: 'var(--bg-alt)' }}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {profile.title} · {profile.tagline}
          </motion.p>

          <motion.h1
            variants={rise}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-balance text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {profile.headline}
          </motion.h1>

          <motion.p
            variants={rise}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1 font-mono text-base sm:text-lg"
          >
            <span className="muted">Building</span>
            <span className="font-medium text-accent" aria-live="polite">
              {typed}
              <span className="caret ml-0.5 h-[1.05em]" aria-hidden="true" />
            </span>
          </motion.p>

          <motion.p
            variants={rise}
            initial="hidden"
            animate="show"
            custom={3}
            className="muted mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
          >
            {profile.subline}
          </motion.p>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[var(--color-accent-hover)] hover:shadow-[0_12px_30px_-12px_var(--color-accent)]"
            >
              View My Work
              <ArrowIcon
                width={17}
                height={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
              style={{ border: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}
            >
              <DownloadIcon width={17} height={17} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={5}
            className="muted mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm"
          >
            <span className="inline-flex items-center gap-2">
              <PinIcon width={16} height={16} />
              {profile.location}
            </span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <LinkedInIcon width={16} height={16} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 transition-colors hover:text-accent"
            >
              <GitHubIcon width={16} height={16} />
              GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
