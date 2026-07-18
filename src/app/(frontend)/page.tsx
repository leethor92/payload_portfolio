import { Experience } from '@/components/experience/Expereience'
import { Navbar } from '@/components/Navbar/Navbar'
import { Hero } from '@/components/hero/Hero'
import { Skills } from '@/components/skills/Skills'
import { Projects } from '@/components/projects/Projects'
import { Contact } from '@/components/contact/Contact'
import { Footer } from '@/components/footer/Footer'


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

      <Projects />

      <Contact />

      <Footer />

    </main>
  )
}