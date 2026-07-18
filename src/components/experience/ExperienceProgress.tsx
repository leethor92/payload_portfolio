'use client'

import { useEffect, useRef, useState } from 'react'

interface ExperienceProgressProps {
  children: React.ReactNode
}

export function ExperienceProgress({
  children,
}: ExperienceProgressProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const element = containerRef.current

      if (!element) return

      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight

      /*
       * Start filling when the timeline reaches roughly
       * 70% down the viewport.
       *
       * Finish when the bottom of the timeline reaches
       * roughly 35% down the viewport.
       */
      const start = windowHeight * 0.7
      const end = windowHeight * 0.35

      const totalDistance =
        rect.height + start - end

      const travelled =
        start - rect.top

      const nextProgress = Math.min(
        Math.max(travelled / totalDistance, 0),
        1,
      )

      setProgress(nextProgress)
    }

    updateProgress()

    window.addEventListener('scroll', updateProgress, {
      passive: true,
    })

    window.addEventListener('resize', updateProgress)

    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative"
      style={
        {
          '--timeline-progress': `${progress * 100}%`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  )
}