import { Contact } from '@/components/contact/Contact'
import { Experience } from '@/components/experience/Experience'
import { Footer } from '@/components/footer/Footer'
import { Hero } from '@/components/hero/Hero'
import { Navbar } from '@/components/navbar/Navbar'
import { Projects } from '@/components/projects/Projects'
import { Skills } from '@/components/skills/Skills'

import { getSiteSettings } from '@/lib/payload/getSiteSettings'
import { getSkills } from '@/lib/payload/getSkills'

export default async function HomePage() {
  const [siteSettings, skills] = await Promise.all([
    getSiteSettings(),
    getSkills(),
  ])

  return (
    <>
      <Navbar />

      <main>
        <Hero siteSettings={siteSettings} />

        <Skills skills={skills} />

        <Experience />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </>
  )
}