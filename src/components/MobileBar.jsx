import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, profile } from '../data'
import { EASE } from './ui'
import { CloseIcon, MenuIcon } from './icons'

/** Sticky wordmark bar and full-screen section menu, below the lg breakpoint only. */
export default function MobileBar() {
  const [open, setOpen] = useState(false)

  // Lock the page behind the menu and close it on Escape or when the panel index takes over.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
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

  return (
    <>
      <div className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-panel-line bg-panel px-6 text-ivory sm:px-10 lg:hidden">
        <a href="#top" className="eyebrow text-ivory" aria-label={`${profile.name}, back to top`}>
          {profile.shortName}
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 grid h-10 w-10 place-items-center"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <CloseIcon width={20} height={20} /> : <MenuIcon width={20} height={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-x-0 top-14 bottom-0 z-40 overflow-y-auto bg-panel px-6 text-ivory sm:px-10 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ol className="pt-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  className="border-b border-panel-line"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 + i * 0.05, ease: EASE }}
                >
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-5 py-4"
                  >
                    <span className="numeral text-sm text-brass">{link.index}</span>
                    <span className="display text-3xl">{link.label}</span>
                  </a>
                </motion.li>
              ))}
            </ol>

            <motion.div
              className="mt-8 flex flex-col gap-3 pb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <a href={profile.cv} download className="btn btn-ivory w-full">
                Download CV
              </a>
              <a href={`mailto:${profile.email}`} className="btn btn-outline w-full">
                Get in touch
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
