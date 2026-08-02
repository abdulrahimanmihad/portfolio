import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, profile } from '../data'
import { useActiveSection } from '../hooks'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './icons'

const SECTION_IDS = navLinks.map((l) => l.id)

export default function Navbar({ theme, onToggleTheme }) {
  const active = useActiveSection(SECTION_IDS)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300"
      style={{
        backgroundColor: scrolled || open ? 'color-mix(in srgb, var(--bg) 82%, transparent)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled || open ? 'var(--border)' : 'transparent'}`,
      }}
    >
      <nav className="shell flex h-16 items-center justify-between gap-4" aria-label="Primary">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-tight"
        >
          <span
            aria-hidden="true"
            className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-[13px] font-bold text-white"
          >
            AM
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                aria-current={active === link.id ? 'true' : undefined}
                className="relative block rounded-md px-3 py-2 text-sm font-medium transition-colors"
                style={{ color: active === link.id ? 'var(--text)' : 'var(--text-muted)' }}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2.5 -bottom-px h-0.5 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={onToggleTheme}
            className="grid h-9 w-9 place-items-center rounded-lg transition-colors hover:text-accent"
            style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <SunIcon width={17} height={17} /> : <MoonIcon width={17} height={17} />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg transition-colors hover:text-accent md:hidden"
            style={{ border: '1px solid var(--border)', color: 'var(--text-muted)' }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <CloseIcon width={18} height={18} /> : <MenuIcon width={18} height={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden md:hidden"
            style={{ borderTop: '1px solid var(--border)' }}
          >
            <ul className="shell flex flex-col py-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === link.id ? 'true' : undefined}
                    className="block rounded-md px-2 py-3 text-sm font-medium"
                    style={{ color: active === link.id ? 'var(--color-accent-soft)' : 'var(--text-muted)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
