import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './styles.css'

export const metadata: Metadata = {
  title: 'Lee Thornton | Software Engineer',
  description: 'Portfolio of Lee Thornton, Software Engineer.',
}

interface FrontendLayoutProps {
  children: ReactNode
}

export default function FrontendLayout({
  children,
}: FrontendLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}