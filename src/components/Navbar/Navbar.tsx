'use client'

import { useEffect, useState } from 'react'

import type { SiteSetting } from '@/types/payload-types'

import { MobileMenu } from './MobileMenu'
import { Navigation } from './Navigation'
import { Logo } from './Logo'
import { HireButton } from './HireButton'

import { NAV_ITEMS } from '@/lib/constants'

interface NavbarProps {
  siteSettings: SiteSetting
}

export function Navbar({
  siteSettings,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > 24)

    onScroll()

    window.addEventListener(
      'scroll',
      onScroll,
      {
        passive: true,
      },
    )

    return () =>
      window.removeEventListener(
        'scroll',
        onScroll,
      )
  }, [])

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map(
      (link) => link.href.slice(1),
    )

    const observer =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(entry.target.id)
            }
          })
        },
        {
          rootMargin:
            '-40% 0px -55% 0px',
        },
      )

    sectionIds.forEach((id) => {
      const element =
        document.getElementById(id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigate = (
    href: string,
  ) => {
    setOpen(false)

    document
      .querySelector(href)
      ?.scrollIntoView({
        behavior: 'smooth',
      })
  }

  return (
    <header
      className="
        fixed left-0 right-0 top-0
        z-50
        transition-all duration-300
      "
      style={{
        background: scrolled
          ? 'rgba(9, 9, 11, 0.78)'
          : 'transparent',

        backdropFilter: scrolled
          ? 'blur(20px) saturate(140%)'
          : 'none',

        borderBottom: scrolled
          ? '1px solid rgba(148,163,184,0.1)'
          : '1px solid transparent',

        boxShadow: scrolled
          ? '0 8px 32px rgba(0,0,0,0.16)'
          : 'none',
      }}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo name={siteSettings.name} />

        <Navigation
          activeSection={active}
          onNavigate={handleNavigate}
        />

        <div className="flex items-center gap-3">
          <HireButton
            onNavigate={handleNavigate}
          />

          <MobileMenu
            open={open}
            onToggle={() =>
              setOpen(
                (current) => !current,
              )
            }
          />
        </div>
      </nav>

      <MobileMenu.Panel
        open={open}
        activeSection={active}
        onNavigate={handleNavigate}
      />
    </header>
  )
}