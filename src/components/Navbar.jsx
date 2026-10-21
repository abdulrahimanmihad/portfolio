import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, profile } from '../data'
import { useActiveSection } from '../hooks'
import { EASE } from './ui'
import { ArrowUpRightIcon, CloseIcon, MenuIcon, MoonIcon, SunIcon } from './icons'

const SECTION_IDS = navLinks.map((l) => l.id)

export default function Navbar({ theme, onToggleTheme }) {
  const active = useActiveSection(SECTION_IDS)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock the page behind the full-screen menu and close it on Escape or resize.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500 ${
          solid ? 'border-line bg-paper/85 backdrop-blur-md' : 'border-transparent'
        }`}
      >
        <nav className="shell flex h-16 items-center justify-between gap-6" aria-label="Primary">
          <a href="#top" className="eyebrow text-ink" aria-label={`${profile.name}, back to top`}>
            <span className="sm:hidden">{profile.shortName}</span>
            <span className="hidden sm:inline">{profile.name}</span>
          </a>

          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="nav-link"
                  aria-current={active === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <a
              href={profile.cv}
              download
              className="btn btn-ghost mr-3 hidden h-10 px-5 md:inline-flex"
            >
              Download CV
            </a>

            <button
              type="button"
              onClick={onToggleTheme}
              className="grid h-10 w-10 place-items-center text-muted transition-colors hover:text-ink"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <SunIcon width={17} height={17} /> : <MoonIcon width={17} height={17} />}
            </button>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center transition-colors hover:text-muted md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <CloseIcon width={20} height={20} /> : <MenuIcon width={20} height={20} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Rendered outside the header: its backdrop blur would otherwise become the containing block. */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-paper md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="shell flex flex-col pt-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  className="border-b border-line"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 + i * 0.05, ease: EASE }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? 'true' : undefined}
                    className="display block py-5 text-5xl"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="shell mt-10 flex flex-col gap-8 pb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href={profile.cv} download className="btn btn-primary w-full">
                Download CV
              </a>
              <div className="flex flex-wrap gap-6 text-sm">
                <a href={profile.linkedin} target="_blank" rel="noreferrer noopener" className="link-arrow">
                  LinkedIn
                  <ArrowUpRightIcon width={14} height={14} />
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer noopener" className="link-arrow">
                  GitHub
                  <ArrowUpRightIcon width={14} height={14} />
                </a>
                <a href={`mailto:${profile.email}`} className="link-arrow">
                  Email
                  <ArrowUpRightIcon width={14} height={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
