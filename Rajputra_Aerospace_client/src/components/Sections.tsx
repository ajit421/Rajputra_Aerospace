import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import {
  APPLICATIONS, CONTACT, CONTACT_EMAIL, DRAWINGS, ECONOMICS, ENGINEERING, FEATURES, FOUNDER_LINKEDIN, MODES, MODE_VIEWS,
  OVERVIEW, SCENES, SPECS, SPEC_VIEWS, TEAM, VIEWS, VIEW_LEFT,
} from '../data'
import { Button, Eyebrow, Reveal, SectionHeading, Wrap, Zoomable } from './ui'

const section = 'py-[clamp(64px,10vw,120px)]'
const panel = 'border-y border-line bg-panel'

export function Overview() {
  return (
    <section aria-labelledby="craft-h" className={section}>
      <Wrap className="grid items-center gap-[clamp(32px,6vw,80px)] md:grid-cols-[1.05fr_1fr]">
        <Reveal>
          <Zoomable picture={VIEW_LEFT} className="border border-line bg-paper" />
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>The aircraft</Eyebrow>
          <h2 id="craft-h" className="mb-6 mt-5 font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[0.95] text-balance">
            {OVERVIEW.title}
          </h2>
          <div className="grid gap-4 text-[1.06rem] leading-relaxed text-mist">
            {OVERVIEW.body.map((p) => <p key={p}>{p}</p>)}
          </div>
          <ul className="mt-7 flex flex-wrap gap-2">
            {OVERVIEW.tags.map((t) => (
              <li key={t} className="rounded-full border border-line px-3.5 py-2 font-mono text-[0.72rem] font-medium uppercase tracking-[0.08em] text-muted">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </Wrap>
    </section>
  )
}

// Continues the overview, so it has no top padding of its own.
export function Angles() {
  const [active, setActive] = useState(VIEWS[0].id)
  const view = VIEWS.find((v) => v.id === active) ?? VIEWS[0]

  return (
    <section aria-labelledby="angles-h" className="pb-[clamp(64px,10vw,120px)]">
      <Wrap>
        <SectionHeading id="angles-h" eyebrow="Every angle" title="Clean Flanks. Wide View. No Vertical Fin." />
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-paper">
            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={view.id}
                src={view.src}
                alt={view.alt}
                width={1376}
                height={768}
                className="aspect-[16/9] w-full object-contain"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.35 }}
              />
            </AnimatePresence>
            <p className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1.5 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-[#3a434e]">
              {view.label} view
            </p>
          </div>
          <div role="tablist" aria-label="Aircraft views" className="mt-4 flex flex-wrap gap-2">
            {VIEWS.map((v) => (
              <button
                key={v.id}
                type="button"
                role="tab"
                aria-selected={v.id === active}
                onClick={() => setActive(v.id)}
                className={`rounded-full border px-5 py-2.5 font-mono text-[0.74rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                  v.id === active ? 'border-copper bg-copper text-[#140b03]' : 'border-line text-muted hover:border-copper hover:text-ink'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.06} className="h-full">
              <article className="grid h-full content-start gap-3 rounded-2xl border border-line bg-panel p-6">
                <h3 className="font-display text-[1.35rem] font-bold uppercase leading-none tracking-[0.02em]">{f.title}</h3>
                <p className="text-[0.92rem] leading-relaxed text-muted">{f.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

export function Applications() {
  return (
    <section id="applications" aria-labelledby="apps-h" className={`${section} ${panel}`}>
      <Wrap>
        <SectionHeading
          id="apps-h"
          eyebrow="Applications"
          title="Ten missions, one airframe"
          intro="Needing no runway or helipad lets the same aircraft serve government, emergency and civilian roles."
        />
        <div className="grid gap-3 min-[460px]:grid-cols-2 lg:grid-cols-5">
          {APPLICATIONS.map((a, i) => (
            <Reveal key={a.title} delay={(i % 5) * 0.05} className="h-full">
              <article className="grid h-full content-start gap-3 rounded-2xl border border-line bg-ground/40 p-5 transition-colors hover:border-copper/50 hover:bg-panel-2">
                <svg viewBox="0 0 32 32" aria-hidden="true" className="size-8 fill-none stroke-copper" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {a.icon.map((d) => <path key={d} d={d} />)}
                </svg>
                <h3 className="font-display text-[1.3rem] font-bold uppercase leading-none tracking-[0.02em]">{a.title}</h3>
                <p className="text-[0.9rem] leading-normal text-muted">{a.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

export function Scenes() {
  return (
    <section aria-labelledby="scenes-h" className={section}>
      <Wrap>
        <SectionHeading id="scenes-h" eyebrow="In the field" title="From city skylines to open sea" />
        <div className="grid auto-rows-[170px] grid-cols-2 gap-2.5 md:auto-rows-[clamp(150px,19vw,250px)] md:grid-cols-6">
          {SCENES.map((s, i) => (
            <Zoomable
              key={s.src}
              picture={s}
              imgClassName="h-full"
              className={`bg-panel ${i === 0 ? 'col-span-2 md:col-span-4 md:row-span-2' : 'md:col-span-2'}`}
            >
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-7 text-left font-mono text-[0.7rem] font-medium uppercase tracking-[0.14em] text-white">
                {s.label}
              </span>
            </Zoomable>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

export function Takeoff() {
  return (
    <section id="vtol" aria-labelledby="vtol-h" className={section}>
      <Wrap>
        <SectionHeading
          id="vtol-h"
          eyebrow="Takeoff and landing"
          title="No runway required"
          intro="Three operating modes let the aircraft use whatever ground is available."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {MODES.map((m, i) => (
            <Reveal key={m.tag} delay={i * 0.08} className="h-full">
              <article className="grid h-full content-start gap-3.5 rounded-2xl border border-line bg-panel p-7">
                <span className="font-mono text-[0.74rem] font-medium uppercase tracking-[0.16em] text-stream">{m.tag}</span>
                <h3 className="font-display text-[1.55rem] font-bold uppercase leading-none tracking-[0.02em]">{m.title}</h3>
                <p className="leading-relaxed text-muted">{m.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 grid gap-2.5 sm:grid-cols-2">
          {MODE_VIEWS.map((v) => (
            <Reveal key={v.src}>
              <figure className="relative overflow-hidden rounded-2xl border border-line bg-paper">
                <img src={v.src} alt={v.alt} width={1376} height={768} loading="lazy" decoding="async" />
                <figcaption className="absolute left-3 top-3 rounded-full bg-white/85 px-3 py-1.5 font-mono text-[0.68rem] font-medium uppercase tracking-[0.12em] text-[#3a434e]">
                  {v.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

// Follows takeoff and landing, so it has no top padding of its own.
export function Engineering() {
  return (
    <section id="engineering" aria-labelledby="eng-h" className="pb-[clamp(64px,10vw,120px)]">
      <Wrap>
        <SectionHeading id="eng-h" eyebrow="Engineering" title={ENGINEERING.title} intro={ENGINEERING.intro} />
        <Reveal>
          <Zoomable picture={ENGINEERING.cfd} className="border border-line bg-panel" />
        </Reveal>

        <Reveal className="mt-[clamp(48px,8vw,96px)] grid gap-5">
          <Eyebrow>Propulsion and power</Eyebrow>
          <h3 className="font-display text-[clamp(1.9rem,4vw,2.8rem)] font-extrabold uppercase leading-[0.95]">{ENGINEERING.powerTitle}</h3>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ENGINEERING.power.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="h-full">
              <article className="grid h-full content-start gap-3 rounded-2xl border border-line bg-panel p-6">
                <h4 className="font-display text-[1.35rem] font-bold uppercase leading-none tracking-[0.02em]">{p.title}</h4>
                <p className="text-[0.92rem] leading-relaxed text-muted">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

export function Specs() {
  return (
    <section id="specs" aria-labelledby="specs-h" className={`${section} ${panel}`}>
      <Wrap>
        <SectionHeading id="specs-h" eyebrow="Specifications" title="Technical data" />
        <div className="grid gap-[clamp(24px,4vw,48px)] lg:grid-cols-2">
          {SPECS.map((column, c) => (
            <div key={c} className="grid content-start gap-[clamp(24px,4vw,48px)]">
              {column.map((plate) => (
                <Reveal key={plate.title}>
                  <div className="overflow-hidden rounded-2xl border border-line bg-ground">
                    <h3 className="border-b border-line px-5 py-4 font-display text-[1.35rem] font-bold uppercase leading-none tracking-[0.02em]">
                      {plate.title}
                    </h3>
                    {plate.rows && (
                      <dl>
                        {plate.rows.map((r) => (
                          <div key={r.label} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-dashed border-line px-5 py-3 last:border-b-0">
                            <dt className="text-[0.92rem] text-muted">{r.label}</dt>
                            <dd className="text-right font-mono text-[0.95rem] font-medium tabular-nums">
                              {r.value} {r.unit && <small className="text-[0.78rem] text-muted">{r.unit}</small>}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}
                    {plate.notes?.map((n) => (
                      <p key={n.strong} className="border-b border-dashed border-line px-5 py-3.5 text-[0.9rem] text-muted last:border-b-0">
                        <strong className="font-semibold text-ink">{n.strong}</strong>
                        {n.rest}
                      </p>
                    ))}
                  </div>
                </Reveal>
              ))}
              <Reveal>
                <Zoomable picture={SPEC_VIEWS[c]} className="border border-line bg-paper" />
              </Reveal>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

export function Drawings() {
  return (
    <section id="drawings" aria-labelledby="draw-h" className={section}>
      <Wrap>
        <SectionHeading id="draw-h" eyebrow="Engineering" title="Drawings and simulation" intro="Select a drawing to view it full size." />
        <div className="grid gap-3 md:grid-cols-6">
          {DRAWINGS.map((d, i) => (
            <Reveal key={d.src} delay={(i % 3) * 0.06} className={i < 2 ? 'md:col-span-3' : 'md:col-span-2'}>
              <Zoomable picture={d} className="border border-line bg-panel" imgClassName="aspect-[1376/768]">
                <span className="flex justify-between gap-3 border-t border-line px-4 py-3 font-mono text-[0.72rem] font-medium uppercase tracking-widest text-muted">
                  <b className="font-medium text-ink">{d.name}</b>
                  {d.code}
                </span>
              </Zoomable>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

export function Economics() {
  return (
    <section id="economics" aria-labelledby="econ-h" className={`relative overflow-hidden border-y border-line ${section}`}>
      <img src={ECONOMICS.background} alt="" width={1376} height={768} loading="lazy" className="absolute inset-0 size-full object-cover opacity-30" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,#0a1018_0%,rgb(10_16_24/0.6)_50%,#0a1018_100%)]" />
      <Wrap className="relative">
        <SectionHeading id="econ-h" eyebrow="Economics" title="Operating costs" />
        <div className="grid gap-3 md:grid-cols-3">
          {ECONOMICS.items.map((e, i) => (
            <Reveal key={e.label} delay={i * 0.08}>
              <div className="grid gap-2.5 rounded-2xl border border-line bg-ground/85 p-[clamp(24px,4vw,40px)] backdrop-blur-sm">
                <span className="font-mono text-[0.72rem] font-medium uppercase tracking-[0.14em] text-muted">{e.label}</span>
                <b className={`font-display text-[clamp(2.8rem,6vw,4.6rem)] font-black leading-[0.9] tabular-nums ${e.accent ? 'text-copper' : ''}`}>
                  {e.value}
                </b>
                <span className="text-[0.92rem] text-muted">{e.sub}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-[0.84rem] text-muted">{ECONOMICS.note}</p>
      </Wrap>
    </section>
  )
}

export function Team() {
  return (
    <section id="team" aria-labelledby="team-h" className={section}>
      <Wrap>
        <SectionHeading id="team-h" eyebrow="Promoters and advisors" title="The team" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.06} className="h-full">
              <article className="grid h-full grid-cols-[auto_1fr] content-start gap-x-4 gap-y-1.5 rounded-2xl border border-line bg-panel p-6">
                <span aria-hidden="true" className="row-span-3 grid size-13 place-items-center rounded-full border border-copper font-display text-lg font-extrabold tracking-[0.04em] text-copper-soft">
                  {p.initials}
                </span>
                <h3 className="font-display text-[1.35rem] font-bold uppercase leading-tight tracking-[0.02em]">{p.name}</h3>
                <p className="text-[0.9rem] leading-snug text-muted">{p.role}</p>
                {p.link && (
                  <a
                    href={p.link.href}
                    target="_blank"
                    rel="noopener"
                    className="mt-1 justify-self-start border-b border-transparent pb-0.5 pt-1.5 font-mono text-[0.72rem] font-medium uppercase tracking-widest text-stream hover:border-stream"
                  >
                    {p.link.label} ↗
                  </a>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="cta-h" className="pb-[clamp(64px,10vw,120px)]">
      <Wrap className="grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <Eyebrow>Enquiries</Eyebrow>
          <h2 id="cta-h" className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[0.95] text-balance">
            {CONTACT.title}
          </h2>
          <p className="mt-5 max-w-[60ch] text-[1.06rem] leading-relaxed text-muted">{CONTACT.body}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Rajputra Aerospace enquiry')}`} variant="solid">
              Email {CONTACT_EMAIL}
            </Button>
            <Button href={FOUNDER_LINKEDIN} external>Contact the founder ↗</Button>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Zoomable picture={CONTACT.image} className="border border-line" />
        </Reveal>
      </Wrap>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Wrap className="flex flex-wrap justify-between gap-4 font-mono text-[0.74rem] font-medium uppercase leading-normal tracking-[0.08em] text-muted">
        <span>© 2026 Rajputra Aerospace</span>
        <span>Incubated at IC IIT Patna</span>
      </Wrap>
    </footer>
  )
}
