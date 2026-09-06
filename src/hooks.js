import { useCallback, useEffect, useRef, useState } from 'react'

const THEME_KEY = 'ui-theme'

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (e) => setReduced(e.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}

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
      ?.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff')
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

/** Counts from 0 to `target` once the element scrolls into view. */
export function useCountUp(target, { duration = 1400, decimals = 0 } = {}) {
  const reduced = usePrefersReducedMotion()
  const ref = useRef(null)
  const [value, setValue] = useState(reduced ? target : 0)

  useEffect(() => {
    const node = ref.current
    if (!node || reduced) {
      setValue(target)
      return undefined
    }

    let frame = 0
    let settle = 0
    let start = 0

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const step = (now) => {
          if (!start) start = now
          const progress = Math.min((now - start) / duration, 1)
          // Ease-out cubic: fast first, settles on the final number.
          const eased = 1 - Math.pow(1 - progress, 3)
          if (progress < 1) {
            setValue(Number((target * eased).toFixed(decimals)))
            frame = requestAnimationFrame(step)
          } else {
            setValue(target)
          }
        }
        frame = requestAnimationFrame(step)

        // requestAnimationFrame stalls while the tab is backgrounded, which
        // would otherwise strand the number mid-count. Land it either way.
        settle = setTimeout(() => {
          cancelAnimationFrame(frame)
          setValue(target)
        }, duration + 250)
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      clearTimeout(settle)
    }
  }, [target, duration, decimals, reduced])

  return { ref, value }
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
