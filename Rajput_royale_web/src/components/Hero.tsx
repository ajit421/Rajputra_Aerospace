import { motion, useScroll, useTransform } from 'motion/react'
import { STATS } from '../data'

export function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 160])
  const scale = useTransform(scrollY, [0, 800], [1.05, 1.15])

  return (
    <section id="top" className="relative flex min-h-svh flex-col justify-end overflow-hidden">
      <motion.img
        src="/images/hero-alps.webp"
        alt="The Rajput Royale flying above snow-capped alpine peaks and a sea of clouds at sunrise"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y, scale }}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/55 to-carbon/10" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-carbon/70 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-12 pt-32 sm:px-8 sm:pb-16">
        <p className="rise font-display text-sm font-semibold uppercase tracking-[0.35em] text-copper-light" style={{ animationDelay: '0.1s' }}>
          Air One presents
        </p>
        <h1 className="rise mt-4 font-display text-6xl font-semibold leading-[0.95] tracking-tight sm:text-8xl lg:text-9xl" style={{ animationDelay: '0.2s' }}>
          Rajput Royale
        </h1>
        <p className="rise mt-6 max-w-2xl text-lg leading-relaxed text-ivory/85 sm:text-2xl" style={{ animationDelay: '0.35s' }}>
          A hybrid-electric autogyro with a bird-inspired, tailless design. Built for safe, fast regional flight.
        </p>
        <div className="rise mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.5s' }}>
          <a href="#reserve" className="rounded-full bg-copper px-7 py-3.5 font-semibold text-carbon transition-colors hover:bg-copper-light">Reserve a slot</a>
          <a href="#design" className="rounded-full border border-ivory/30 px-7 py-3.5 font-semibold backdrop-blur-sm transition-colors hover:border-ivory hover:bg-ivory/10">Explore the aircraft</a>
        </div>

        <dl className="rise mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4" style={{ animationDelay: '0.7s' }}>
          {STATS.map((s) => (
            <div key={s.label} className="bg-carbon/70 px-5 py-5 backdrop-blur-md sm:px-7 sm:py-6">
              <dt className="text-sm text-sand">{s.label}</dt>
              <dd className="mt-1 font-display text-3xl font-semibold sm:text-4xl">
                {s.value}<span className="ml-1.5 text-base font-medium text-copper-light sm:text-lg">{s.unit}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
