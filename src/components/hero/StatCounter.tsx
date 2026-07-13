'use client'

import { useEffect, useState } from 'react'

interface StatCounterProps {
  target: number
  label: string
  suffix?: string
}

export function StatCounter({
  target,
  label,
  suffix = '',
}: StatCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0

    const increment = Math.max(1, Math.ceil(target / 40))

    const timer = setInterval(() => {
      current += increment

      if (current >= target) {
        current = target
        clearInterval(timer)
      }

      setCount(current)
    }, 35)

    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="text-center px-2">
      <div
        className="text-2xl sm:text-3xl font-extrabold gradient-text"
        style={{
          fontFamily: "'Exo 2', sans-serif",
        }}
      >
        {count}
        {suffix}
      </div>

      <div
        className="text-xs mt-0.5"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: '#9090b0',
        }}
      >
        {label}
      </div>
    </div>
  )
}