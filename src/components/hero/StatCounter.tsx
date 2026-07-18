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

    const increment = Math.max(
      1,
      Math.ceil(target / 40),
    )

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
    <div className="px-3 sm:px-6 text-center first:pl-0 last:pr-0">
      <div
        className="text-2xl sm:text-3xl font-extrabold"
        style={{
          fontFamily: "'Exo 2', sans-serif",
          color: '#f8fafc',
        }}
      >
        {count}

        <span style={{ color: '#60a5fa' }}>
          {suffix}
        </span>
      </div>

      <div
        className="
          mt-1
          text-[0.65rem] sm:text-xs
          leading-tight
        "
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          color: '#64748b',
        }}
      >
        {label}
      </div>
    </div>
  )
}