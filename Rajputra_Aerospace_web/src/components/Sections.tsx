import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { APPLICATIONS, COSTS, DRAWINGS, FEATURES, FOOTPRINT, INCUBATOR, MISSIONS, MODES, OVERVIEW_TAGS, POWER, SPECS, TEAM, VIEWS } from '../data'
import { Eyebrow, Reveal, SectionHeading } from './ui'

// The page reads as a story, from the aircraft to the people behind it.

// The aircraft: how it works, then every angle.
export function Overview() {
  return (
    <section id="aircraft" className="bg-carbon">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <img src="/images/view-left.webp" alt="Left side view of the Rajputra Aerospace aircraft on its tricycle landing gear" loading="lazy" className="w-full rounded-2xl bg-white object-contain" />
        </Reveal>
        <div>
          <SectionHeading eyebrow="The aircraft" title="Rotor for lift. Ducted fans for speed." />
          <Reveal delay={0.1}>
            <p className="mt-8 text-lg leading-relaxed text-sand">
              A free-spinning two-blade carbon-fibre autogyro rotor carries the aircraft in forward flight. Twin ducted fans at the tail push it to 300 km/h and swivel independently through 90° to steer thrust during vertical takeoff and landing.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-sand">
              The monocoque teardrop pod has no vertical tail fin, and the hybrid powertrain runs on E20 or biofuel alongside a 40 kWh solid-state battery pack.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {OVERVIEW_TAGS.map((t) => (
                <span key={t} className="rounded-full border border-white/20 px-4 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-sand">{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function Aircraft() {
  const [active, setActive] = useState(VIEWS[0].id)
  const view = VIEWS.find((v) => v.id === active) ?? VIEWS[0]

  return (
    <section className="bg-ivory text-carbon">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading eyebrow="Every angle" tone="deep" dark={false} title="Clean flanks. No side fans. No tail fin." />

        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-[#f4f4f3]">
            <AnimatePresence mode="wait">
              <motion.img
                key={view.id}
                src={view.src}
                alt={view.alt}
                className="aspect-[16/9] w-full object-contain"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </AnimatePresence>
            <p className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 font-mono text-xs uppercase tracking-[0.15em]">{view.label} view</p>
          </div>
          <div role="tablist" aria-label="Aircraft views" className="mt-4 flex flex-wrap gap-2">
            {VIEWS.map((v) => (
              <button
                key={v.id}
                role="tab"
                aria-selected={v.id === active}
                onClick={() => setActive(v.id)}
                className={`rounded-full border px-5 py-2.5 font-mono text-xs uppercase tracking-[0.15em] transition-colors ${v.id === active ? 'border-carbon bg-carbon text-ivory' : 'border-carbon/15 hover:border-carbon/40'}`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-carbon/10 bg-carbon/10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="bg-ivory-2 p-7">
              <h3 className="font-display text-xl font-bold uppercase tracking-tight">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-[#4a4540]">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Takeoff and landing: where it can operate from.
export function Takeoff() {
  return (
    <section id="takeoff" className="bg-carbon">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
         
          eyebrow="Takeoff and landing"
          title="No runway required"
          intro="Three operating modes let the aircraft use whatever ground is available."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {MODES.map((m, i) => (
            <Reveal key={m.tag} delay={i * 0.08} className="bg-carbon p-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{m.tag}</p>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-tight">{m.title}</h3>
              <p className="mt-4 leading-relaxed text-sand">{m.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <figure className="relative overflow-hidden rounded-2xl">
            <img src="/images/helipad.webp" alt="The Rajputra Aerospace aircraft parked on a rooftop helipad above a harbour at sunset" loading="lazy" className="aspect-[4/3] w-full object-cover sm:aspect-[21/9]" />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-transparent to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-5 sm:p-7">
              {FOOTPRINT.map((t) => (
                <span key={t} className="rounded-full border border-ivory/30 bg-carbon/50 px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] backdrop-blur-sm">{t}</span>
              ))}
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}

// Engineering: aerodynamics, power, drawings.
export function Engineering() {
  const [open, setOpen] = useState<number | null>(null)

  // Close the drawing viewer with Escape and stop the page scrolling behind it.
  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <section id="engineering" className="bg-navy">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
         
          eyebrow="Engineering"
          tone="cyan"
          title="Built to slip through the air"
          intro="Every unit of drag saved lowers battery discharge and extends range. CFD shows the teardrop pod keeping flow attached until the very end of the fuselage."
        />
        <Reveal className="mt-14">
          <img src="/images/cfd.webp" alt="CFD airflow simulation: streamlines flowing smoothly over the teardrop pod into the rear ducted thruster" loading="lazy" className="w-full rounded-2xl border border-white/10" />
        </Reveal>

        <div className="mt-28">
          <Reveal>
            <Eyebrow tone="cyan">Propulsion and power</Eyebrow>
            <h3 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">Electric thrust, hybrid range</h3>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {POWER.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h4 className="font-display text-lg font-semibold">{p.title}</h4>
                <p className="mt-2 leading-relaxed text-[#b9c8d8]">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-28">
          <Reveal>
            <Eyebrow tone="cyan">Engineering package</Eyebrow>
            <h3 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">Drawn, exploded and specified</h3>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DRAWINGS.map((d, i) => (
              <Reveal key={d.src} delay={i * 0.06} className={i === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}>
                <button type="button" onClick={() => setOpen(i)} className="group block w-full text-left">
                  <div className="overflow-hidden rounded-2xl border border-white/10">
                    <img src={d.src} alt={d.alt} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="mt-3 font-mono text-xs uppercase tracking-[0.15em] text-[#b9c8d8] group-hover:text-ivory">{d.title} <span aria-hidden>↗</span></p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={DRAWINGS[open].title}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 sm:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <img src={DRAWINGS[open].src} alt={DRAWINGS[open].alt} className="max-h-full max-w-full rounded-xl" />
            <button type="button" autoFocus onClick={() => setOpen(null)} className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] hover:bg-white/20">
              Close ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// Applications: who it is for, then where it flies.
export function Missions() {
  return (
    <section id="applications" className="bg-carbon">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
         
          eyebrow="Applications"
          title="Ten missions, one airframe"
          intro="Needing no runway or helipad lets the same aircraft serve government, emergency and civilian roles."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {APPLICATIONS.map((a, i) => (
            <Reveal key={a.title} delay={(i % 5) * 0.06} className="bg-carbon p-6">
              <h3 className="font-display text-lg font-bold uppercase tracking-tight">{a.title}</h3>
              <p className="mt-2 leading-relaxed text-sand">{a.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24">
          <Eyebrow>Where it flies</Eyebrow>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {MISSIONS.map((m, i) => (
            <Reveal key={m.src} delay={(i % 4) * 0.08}>
              <figure className="group relative overflow-hidden rounded-2xl">
                <img src={m.src} alt={`The Rajputra Aerospace aircraft: ${m.place.toLowerCase()}`} loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-lg font-bold uppercase tracking-tight">{m.title}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-sand">{m.place}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Specifications and operating costs.
export function Specs() {
  return (
    <section id="specs" className="bg-ivory text-carbon">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading eyebrow="Specifications" tone="deep" dark={false} title="Technical data" />
        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {SPECS.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.06}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-copper-deep sm:text-sm">{g.group}</h3>
                <span className="font-mono text-xs tracking-[0.2em] text-[#6b655e]">{g.code}</span>
              </div>
              {g.rows && (
                <dl className="mt-4 divide-y divide-carbon/10 border-y border-carbon/10">
                  {g.rows.map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-6 py-3.5">
                      <dt className="text-[#4a4540]">{k}</dt>
                      <dd className="text-right font-medium tabular-nums">{v}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {g.items && (
                <ul className="mt-4 divide-y divide-carbon/10 border-y border-carbon/10">
                  {g.items.map((item) => (
                    <li key={item} className="py-3.5 font-medium">{item}</li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-24">
          <Eyebrow tone="deep">Operating costs</Eyebrow>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-carbon/10 bg-carbon/10 sm:grid-cols-3">
            {COSTS.map((c) => (
              <div key={c.label} className="bg-ivory-2 p-7">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-copper-deep">{c.label}</p>
                <p className="mt-3 font-display text-5xl font-bold tabular-nums">{c.value}</p>
                <p className="mt-2 text-[#4a4540]">{c.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[#6b655e]">
            All figures are approximate. Price starts from ₹55 lakh. Figures are design targets for a concept aircraft and are not certified performance data.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

// Team.
export function Team() {
  return (
    <section id="team" className="bg-carbon-2">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading eyebrow="Team" title="The people behind it" intro={`Promoters and advisors. Incubated at ${INCUBATOR}.`} />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08} className="flex flex-col bg-carbon-2 p-7">
              <h3 className="font-display text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 leading-relaxed text-sand">{t.role}</p>
              {t.link && (
                <a href={t.link} target="_blank" rel="noopener noreferrer" className="mt-auto pt-5 font-mono text-xs uppercase tracking-[0.15em] text-copper-light hover:text-ivory">
                  {t.site} <span aria-hidden>↗</span>
                </a>
              )}
            </Reveal>
          ))}
          <Reveal delay={0.16} className="flex flex-col bg-copper p-7 text-carbon sm:col-span-2">
            <h3 className="font-display text-xl font-bold uppercase tracking-tight">Work with us</h3>
            <p className="mt-2 leading-relaxed">Investors, partners, suppliers and engineers: we'd like to hear from you.</p>
            <a href="#reserve" className="mt-auto pt-5 font-mono text-xs font-semibold uppercase tracking-[0.15em] hover:underline">Get in touch →</a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
