'use client'

import { useEffect, useState } from 'react'

import { NAV_ITEMS } from '@/lib/constants'

import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { Navigation } from './Navigation'
import { ResumeButton } from './ResumeButton'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) =>
      item.href.slice(1),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find(
          (entry) => entry.isIntersecting,
        )

        if (visibleEntry) {
          setActive(visibleEntry.target.id)
        }
      },
      {
        rootMargin: '-35% 0px -55% 0px',
      },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)

      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleNavigate = (href: string) => {
    setOpen(false)

    document.querySelector(href)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <header
      className="
        fixed inset-x-0 top-0 z-50
        transition-all duration-300
      "
      style={{
        background: scrolled
          ? 'rgba(9,9,11,0.78)'
          : 'rgba(9,9,11,0)',

        backdropFilter: scrolled
          ? 'blur(20px) saturate(140%)'
          : 'blur(0px)',

        WebkitBackdropFilter: scrolled
          ? 'blur(20px) saturate(140%)'
          : 'blur(0px)',

        borderBottom: scrolled
          ? '1px solid rgba(148,163,184,0.08)'
          : '1px solid transparent',

        boxShadow: scrolled
          ? '0 10px 40px rgba(0,0,0,0.16)'
          : 'none',
      }}
    >
      <nav
        className="
          mx-auto flex h-16
          max-w-6xl
          items-center justify-between
          px-4 sm:px-6
        "
      >
        <Logo />

        <Navigation
          activeSection={active}
          onNavigate={handleNavigate}
        />

        <div className="flex items-center gap-2">
          <ResumeButton onNavigate={handleNavigate} />

          <MobileMenu
            open={open}
            onToggle={() =>
              setOpen((current) => !current)
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