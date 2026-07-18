import { Experience } from '@/components/experience/Expereience'
import { Navbar } from '../../components/Navbar/Navbar'
import { Hero } from '../../components/hero/Hero'
import { Skills } from '@/components/skills/Skills'

export default function HomePage() {
  return (
    <main
      className="noise-bg"
      style={{
        background: '#06060f',
        minHeight: '100vh',
      }}
    >
      <Navbar />

      <Hero />

      <Skills />

      <Experience />

      <section id="projects" className="min-h-screen" />
      <section id="contact" className="min-h-screen" />
    </main>
  )
}