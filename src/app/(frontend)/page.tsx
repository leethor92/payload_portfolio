import { Navbar } from '../../components/Navbar/Navbar'

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

      <section id="about" className="min-h-screen" />
      <section id="skills" className="min-h-screen" />
      <section id="experience" className="min-h-screen" />
      <section id="projects" className="min-h-screen" />
      <section id="contact" className="min-h-screen" />
    </main>
  )
}