'use client'

import { useEffect, useRef, useState } from 'react'

const PHRASES = [
  'Software Engineer',
  'Full Stack Developer',
  'Backend Engineer',
]

export function Typewriter() {
  const [typed, setTyped] = useState('')

  const phraseIndex = useRef(0)
  const characterIndex = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const tick = () => {
      const current = PHRASES[phraseIndex.current]

      if (deleting.current) {
        characterIndex.current--

        setTyped(current.slice(0, characterIndex.current))

        if (characterIndex.current === 0) {
          deleting.current = false
          phraseIndex.current =
            (phraseIndex.current + 1) % PHRASES.length

          timeout = setTimeout(tick, 400)

          return
        }

        timeout = setTimeout(tick, 40)

        return
      }

      characterIndex.current++

      setTyped(current.slice(0, characterIndex.current))

      if (characterIndex.current === current.length) {
        deleting.current = true

        timeout = setTimeout(tick, 2200)

        return
      }

      timeout = setTimeout(tick, 65)
    }

    timeout = setTimeout(tick, 600)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className="mb-5 flex items-center justify-center lg:justify-start gap-1 overflow-hidden"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        color: '#9090b0',
        fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)',
        height: '1.8em',
      }}
    >
      <span style={{ color: '#60a5fa' }}>~/</span>

      <span>{typed}</span>

      <span
        className="w-0.5 h-[1em] ml-0.5 flex-shrink-0"
        style={{
          background: '#818cf8',
          animation: 'blink 1s step-start infinite',
        }}
      />
    </div>
  )
}