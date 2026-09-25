import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { AERO, DRAWINGS, FEATURES, MISSIONS, POWER, SPECS, VIEWS } from '../data'
import { Eyebrow, Reveal, SectionHeading } from './ui'

export function Safety() {
  return (
    <section className="bg-copper text-carbon">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.3em]">Why an autogyro</p>
          <h2 className="mt-6 max-w-5xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            A rotor that keeps flying when the power stops.
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed sm:text-xl">
            The main rotor is never driven in flight. Air flowing up through it keeps it spinning in autorotation, so the aircraft stays controllable and can glide to a landing even after total power loss. No gearbox to the rotor, no tail rotor, far fewer parts.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export function Design() {
  return (
    <section id="design" className="bg-carbon">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Design inspiration"
          title="Shaped by the swallow-tailed kite"
          intro="The kite's deeply forked tail became twin swept aft pylons, each carrying a ducted thruster at its tip. The layout also places both thrusters in the fuselage wake, where they work most efficiently."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal>
            <figure>
              <img src="/images/kite.webp" alt="A swallow-tailed kite in flight with its forked tail spread" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
              <figcaption className="mt-3 text-sm text-stone">Swallow-tailed kite · Photo: Andy Morffew, Flickr (CC)</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <figure>
              <img src="/images/view-top.webp" alt="Top plan view of the Rajputra Aerospace aircraft showing the swept aft pylons with ducted thrusters" loading="lazy" className="aspect-[4/3] w-full rounded-2xl bg-ivory object-contain" />
              <figcaption className="mt-3 text-sm text-stone">Rajputra Aerospace · top plan view</figcaption>
            </figure>
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
        <SectionHeading eyebrow="The aircraft" tone="deep" dark={false} title="Clean flanks. No side fans. No tail fin." />

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
          </div>
          <div role="tablist" aria-label="Aircraft views" className="mt-5 flex flex-wrap gap-2">
            {VIEWS.map((v) => (
              <button
                key={v.id}
                role="tab"
                aria-selected={v.id === active}
                onClick={() => setActive(v.id)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${v.id === active ? 'bg-carbon text-ivory' : 'bg-carbon/5 text-carbon hover:bg-carbon/10'}`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-carbon/10 bg-carbon/10 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08} className="bg-ivory-2 p-7">
              <p className="font-display text-sm font-semibold text-copper-deep">0{i + 1}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-[#4a4540]">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Engineering() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="engineering" className="bg-navy">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Aerodynamics"
          tone="cyan"
          title="Built to slip through the air"
          intro="Every unit of drag saved lowers battery discharge and extends range. CFD shows the teardrop pod keeping flow attached until the very end of the fuselage."
        />
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.6fr_1fr]">
          <Reveal>
            <img src="/images/cfd.webp" alt="CFD airflow simulation: streamlines flowing smoothly over the teardrop pod into the rear ducted thruster" loading="lazy" className="w-full rounded-2xl" />
          </Reveal>
          <div className="space-y-8">
            {AERO.map((a, i) => (
              <Reveal key={a.value} delay={i * 0.1}>
                <p className="font-display text-5xl font-semibold text-cyan">{a.value}</p>
                <p className="mt-2 leading-relaxed text-[#b9c8d8]">{a.label}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-28">
          <Reveal>
            <Eyebrow tone="cyan">Propulsion and power</Eyebrow>
            <h3 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Electric thrust, hybrid range</h3>
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
            <h3 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Drawn, exploded and specified</h3>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {DRAWINGS.map((d, i) => (
              <Reveal key={d.src} delay={i * 0.06} className={i === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}>
                <button type="button" onClick={() => setOpen(i)} className="group block w-full text-left">
                  <div className="overflow-hidden rounded-2xl border border-white/10">
                    <img src={d.src} alt={d.alt} loading="lazy" className="aspect-[16/9] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-[#b9c8d8] group-hover:text-ivory">{d.title} <span aria-hidden>↗</span></p>
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
            onKeyDown={(e) => e.key === 'Escape' && setOpen(null)}
          >
            <img src={DRAWINGS[open].src} alt={DRAWINGS[open].alt} className="max-h-full max-w-full rounded-lg" />
            <button type="button" autoFocus onClick={() => setOpen(null)} className="absolute right-5 top-5 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20">
              Close ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export function Specs() {
  return (
    <section id="specs" className="bg-ivory text-carbon">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Specifications"
          tone="deep"
          dark={false}
          title="Light, compact, half its weight free"
          intro="Empty weight is about half of the maximum takeoff weight, so each flight can favour passengers or fuel and battery for longer range."
        />
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {SPECS.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.06}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-copper-deep">{g.group}</h3>
              <dl className="mt-4 divide-y divide-carbon/10 border-y border-carbon/10">
                {g.rows.map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 py-3.5">
                    <dt className="text-[#4a4540]">{k}</dt>
                    <dd className="text-right font-medium tabular-nums">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-sm text-[#6b655e]">Figures are design targets for a concept aircraft and are not certified performance data.</p>
      </div>
    </section>
  )
}

export function Landing() {
  return (
    <section className="relative flex min-h-[80svh] items-end overflow-hidden">
      <img src="/images/helipad.webp" alt="The Rajputra Aerospace aircraft parked on a rooftop helipad above a harbour at sunset" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/50 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 sm:px-8 sm:pb-24">
        <Reveal>
          <Eyebrow>Infrastructure</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">Lands on rooftops, estates and vertiports</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {['5.85 m long', '3.15 m wheel track', '8.5 m rotor span'].map((t) => (
              <span key={t} className="rounded-full border border-ivory/30 bg-ivory/10 px-5 py-2 font-medium backdrop-blur-sm">{t}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function Missions() {
  return (
    <section id="missions" className="bg-carbon">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading eyebrow="Missions" title="One aircraft, many missions" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {MISSIONS.map((m, i) => (
            <Reveal key={m.src} delay={(i % 4) * 0.08}>
              <figure className="group relative overflow-hidden rounded-2xl">
                <img src={m.src} alt={`The Rajputra Aerospace aircraft: ${m.place.toLowerCase()}`} loading="lazy" className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/90 via-carbon/10 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-lg font-semibold">{m.title}</p>
                  <p className="text-sm text-sand">{m.place}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
