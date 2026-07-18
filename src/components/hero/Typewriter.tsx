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

        setTyped(
          current.slice(0, characterIndex.current),
        )

        if (characterIndex.current === 0) {
          deleting.current = false

          phraseIndex.current =
            (phraseIndex.current + 1) %
            PHRASES.length

          timeout = setTimeout(tick, 450)

          return
        }

        timeout = setTimeout(tick, 35)

        return
      }

      characterIndex.current++

      setTyped(
        current.slice(0, characterIndex.current),
      )

      if (
        characterIndex.current === current.length
      ) {
        deleting.current = true

        timeout = setTimeout(tick, 2200)

        return
      }

      timeout = setTimeout(tick, 60)
    }

    timeout = setTimeout(tick, 700)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div
      className="
        mx-auto w-full max-w-md
        overflow-hidden
        rounded-xl border
        text-left
        lg:mx-0
      "
      style={{
        background: 'rgba(15,18,24,0.82)',
        borderColor: 'rgba(148,163,184,0.14)',
        boxShadow:
          '0 18px 50px rgba(0,0,0,0.22)',
      }}
    >
      {/* macOS title bar */}
      <div
        className="
          flex h-9
          items-center
          justify-between
          border-b
          px-3
        "
        style={{
          background: 'rgba(255,255,255,0.025)',
          borderColor: 'rgba(148,163,184,0.08)',
        }}
      >
        <div className="flex items-center gap-1.5">
          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: '#ff5f57' }}
          />

          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: '#febc2e' }}
          />

          <span
            className="h-2.5 w-2.5 rounded-full"
            style={{ background: '#28c840' }}
          />
        </div>

        <span
          className="text-[0.6rem]"
          style={{
            fontFamily:
              "'JetBrains Mono', monospace",
            color: '#64748b',
          }}
        >
          lee@portfolio
        </span>

        {/* Balances the traffic lights */}
        <div className="w-[42px]" />
      </div>

      {/* Terminal */}
      <div
        className="px-4 py-4 sm:px-5"
        style={{
          fontFamily:
            "'JetBrains Mono', monospace",
        }}
      >
        <div className="flex items-center gap-2 text-xs">
          <span style={{ color: '#60a5fa' }}>
            ~
          </span>

          <span style={{ color: '#64748b' }}>
            $
          </span>

          <span style={{ color: '#94a3b8' }}>
            whoami
          </span>
        </div>

        <div className="mt-2 flex min-h-[1.5rem] items-center">
          <span
            className="text-sm sm:text-base"
            style={{
              color: '#e2e8f0',
            }}
          >
            {typed}
          </span>

          <span
            className="
              ml-1
              h-[1em]
              w-[2px]
              shrink-0
            "
            style={{
              background: '#60a5fa',
              animation:
                'blink 1s step-start infinite',
            }}
          />
        </div>
      </div>
    </div>
  )
}