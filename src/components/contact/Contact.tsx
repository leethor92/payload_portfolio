import { SectionHeader } from '@/components/ui/SectionHeader'

import { ContactActions } from './ContactActions'

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="contact"
          title="Let's work together"
          subtitle="Have a role, project or idea you'd like to discuss? I'm always open to interesting opportunities."
        />

        <ContactActions />
      </div>
    </section>
  )
}