import { useState, type FormEvent } from 'react'
import { CONTACT_EMAIL } from '../data'
import { Reveal, SectionHeading } from './ui'

// There is no backend: submitting opens the visitor's email app with the
// request pre-filled, addressed to CONTACT_EMAIL.
export function Reserve() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = `Rajputra Aerospace enquiry: ${data.get('interest')}`
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Interest: ${data.get('interest')}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field = 'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-ivory placeholder:text-stone focus:border-copper focus:outline-none focus:ring-2 focus:ring-copper/40'

  return (
    <section id="reserve" className="relative overflow-hidden bg-carbon-2">
      <img src="/images/scene-hangar.webp" alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Reserve"
            title="Fly first with Rajputra Aerospace"
            intro="Register interest as an owner, operator, investor or partner. We'll share the dossier and the programme timeline."
          />
          <Reveal className="mt-10 flex flex-wrap gap-4">
            <a href="/docs/rajputra-aerospace-dossier.pdf" download className="rounded-full border border-ivory/30 px-6 py-3 font-semibold transition-colors hover:border-ivory hover:bg-ivory/10">Download dossier (PDF)</a>
            <a href="/docs/rajputra-aerospace-engineering.pdf" download className="rounded-full border border-ivory/30 px-6 py-3 font-semibold transition-colors hover:border-ivory hover:bg-ivory/10">Engineering pack (PDF)</a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-white/10 bg-carbon/80 p-6 backdrop-blur-md sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-sm text-sand">Name</span>
                <input name="name" required autoComplete="name" className={field} />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-sm text-sand">Email</span>
                <input name="email" type="email" required autoComplete="email" className={field} />
              </label>
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm text-sand">I'm interested as</span>
              <select name="interest" className={field} defaultValue="Private owner">
                <option className="bg-carbon">Private owner</option>
                <option className="bg-carbon">Charter or tourism operator</option>
                <option className="bg-carbon">Investor</option>
                <option className="bg-carbon">Partner or supplier</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm text-sand">Message</span>
              <textarea name="message" rows={4} className={field} placeholder="Tell us about your mission" />
            </label>
            <button type="submit" className="w-full rounded-full bg-copper px-6 py-3.5 font-semibold text-carbon transition-colors hover:bg-copper-light">
              Send enquiry
            </button>
            {sent && <p role="status" className="text-sm text-sand">Your email app should open with the enquiry ready to send.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-carbon">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-stone sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p><span className="font-display font-semibold text-ivory">Rajputra Aerospace</span> · Concept aircraft. Images are renderings.</p>
        <p>© {new Date().getFullYear()} Rajputra Aerospace</p>
      </div>
    </footer>
  )
}
