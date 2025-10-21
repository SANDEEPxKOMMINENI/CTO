import Section from '@/components/Section'
import ContactForm from '@/components/ContactForm'
import site from 'site.config'

export const metadata = {
  title: 'Contact',
}

export default function ContactPage() {
  const formspreeId = process.env.FORMSPREE_ID
  const hasRealEmail = site.email && !/example\.com$/.test(site.email)

  return (
    <Section>
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold tracking-tight">Get in touch</h1>
        <p className="text-muted-foreground mt-2">I'd love to hear from you. Fill out the form or send an email.</p>

        <div className="mt-8">
          {formspreeId ? (
            <ContactForm formspreeId={formspreeId} />
          ) : (
            <div className="space-y-3">
              <p className="text-sm">Formspree is not configured. You can set FORMSPREE_ID in your environment to enable the form.</p>
              {hasRealEmail ? (
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  Email me at {site.email}
                </a>
              ) : (
                <p className="text-muted-foreground text-sm">
                  Update your email in site.config.ts to show a mailto link.
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
