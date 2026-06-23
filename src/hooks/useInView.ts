import { useState, useCallback } from 'react'

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Returns a callback ref and an `inView` flag that flips true once the element
// crosses the threshold. Fires once then disconnects. Respects prefers-reduced-motion.
export function useInView(threshold = 0.35): {
  ref: (node: HTMLElement | null) => void
  inView: boolean
} {
  const [inView, setInView] = useState(prefersReduced)

  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (!node || prefersReduced) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.disconnect()
          }
        },
        { threshold }
      )
      observer.observe(node)
    },
    [threshold]
  )

  return { ref, inView }
}
