import { motion } from 'framer-motion'
import { navLinks, profile } from '../data'
import { useActiveSection } from '../hooks'
import { EASE, Emph } from './ui'

const SECTION_IDS = navLinks.map((l) => l.id)

const fade = (delay) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay, ease: EASE },
})

/**
 * The identity column. A full-height hero on phones; from lg it is a sticky
 * panel that stays put while the dossier scrolls beside it.
 */
export default function Panel() {
  const active = useActiveSection(SECTION_IDS)

  return (
    <aside
      id="top"
      className="flex min-h-[100svh] flex-col justify-between bg-panel px-6 py-10 text-ivory sm:px-10 lg:sticky lg:top-0 lg:h-screen lg:min-h-0 lg:overflow-y-auto lg:px-14 lg:py-10"
    >
      <motion.header {...fade(0.05)} className="hidden items-baseline justify-between gap-6 lg:flex">
        <p className="eyebrow text-ivory">{profile.name}</p>
        <p className="eyebrow text-sage">{profile.title}</p>
      </motion.header>

      <div className="py-12 lg:py-8">
        <p className="eyebrow text-sage lg:hidden">{profile.name}</p>
        <motion.h1
          {...fade(0.15)}
          className="display mt-6 text-[clamp(2.5rem,3.2vw,3.5rem)] lg:mt-0"
        >
          <Emph text={profile.headline} />
        </motion.h1>
        <motion.p {...fade(0.4)} className="mt-7 max-w-sm leading-relaxed text-sage">
          {profile.subline}
        </motion.p>
        <motion.div {...fade(0.55)} className="mt-9 flex flex-wrap gap-3">
          <a href={profile.cv} download className="btn btn-ivory">
            Download CV
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn-outline">
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div {...fade(0.7)}>
        <nav aria-label="Sections" className="hidden border-t border-panel-line pt-4 lg:block">
          <ol>
            {navLinks.map((link) => {
              const current = active === link.id
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={current ? 'true' : undefined}
                    className={`group flex items-center gap-4 py-1.5 transition-colors duration-300 ${
                      current ? 'text-ivory' : 'text-sage hover:text-ivory'
                    }`}
                  >
                    <span className="numeral w-6 text-sm text-brass">{link.index}</span>
                    <span className="eyebrow text-inherit">{link.label}</span>
                    <span
                      aria-hidden="true"
                      className={`ml-auto h-px bg-brass transition-all duration-500 ${
                        current ? 'w-8' : 'w-0'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ol>
        </nav>
        <p className="eyebrow mt-6 text-sage">
          {profile.location} · {profile.availability}
        </p>
      </motion.div>
    </aside>
  )
}
