import { useCallback, useEffect, useState } from 'react'

const THEME_KEY = 'ui-theme'
// Mirrors --bg in index.css for the browser chrome.
const THEME_COLOR = { light: '#f4f1ea', dark: '#141311' }

/**
 * Light by default. Dark only when the visitor has toggled it, which is the
 * only time the preference is written to storage.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() =>
    typeof document !== 'undefined' &&
    document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light',
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLOR[theme])
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      try {
        localStorage.setItem(THEME_KEY, next)
      } catch {
        /* storage unavailable: the toggle still works for this session */
      }
      return next
    })
  }, [])

  return { theme, toggle }
}

/**
 * Tracks which section owns the viewport, for navbar highlighting.
 * Driven by scroll position rather than IntersectionObserver: sections
 * differ widely in height, and a plain position test stays predictable
 * (and copes with lazy sections mounting after first paint).
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    let frame = 0

    const measure = () => {
      frame = 0
      // The line just below the fixed navbar decides the active section.
      const line = window.scrollY + 96
      let current = ''

      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= line) current = id
      }

      // Anything within a pixel of the bottom means the last section is in view.
      const atBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      if (atBottom) current = ids[ids.length - 1]

      setActive(current)
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    // Lazy sections change the layout after mount; re-measure when they land.
    const mutations = new MutationObserver(onScroll)
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      mutations.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [ids])

  return active
}
