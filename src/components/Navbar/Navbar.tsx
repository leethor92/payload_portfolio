'use client'

import { useEffect, useState } from 'react'

import { MobileMenu } from './MobileMenu'
import { Navigation } from './Navigation'
import { Logo } from './Logo'
import { ResumeButton } from './ResumeButton'

import { NAV_ITEMS } from '@/lib/constants'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((link) => link.href.slice(1))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -55% 0px',
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(6,6,15,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(129,140,248,0.12)'
          : '1px solid transparent',
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Logo />

        <Navigation
          activeSection={active}
          onNavigate={handleNavigate}
        />

        <div className="flex items-center gap-3">
          <ResumeButton onNavigate={handleNavigate} />

          <MobileMenu
            open={open}
            onToggle={() => setOpen((current) => !current)}
          />
        </div>
      </nav>

      <MobileMenu.Panel
        open={open}
        onNavigate={handleNavigate}
      />
    </header>
  )
}