import { useEffect, useState } from 'react'

/**
 * Tracks which section owns the viewport, for the panel index.
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
      // The line just below the top of the viewport decides the active section.
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
