import { HERO, STATS } from '../data'
import { Button, Wrap } from './ui'

export function Hero() {
  return (
    <section aria-label="Rajputra Aerospace" className="relative overflow-hidden border-b border-line">
      <img
        src={HERO.image}
        alt={HERO.alt}
        width={1376}
        height={768}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover object-[60%_40%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgb(10_16_24/0.94)_0%,rgb(10_16_24/0.72)_42%,rgb(10_16_24/0.1)_75%),linear-gradient(0deg,#0a1018_0%,transparent_35%)]"
      />

      <Wrap className="relative grid gap-7 pb-10 pt-[clamp(80px,13vw,170px)] sm:pb-16">
        <p className="rise font-mono text-xs font-medium uppercase tracking-[0.2em] text-stream">Rajputra Aerospace</p>
        <h1
          className="rise font-display text-[clamp(3.6rem,11vw,8.6rem)] font-black uppercase leading-[0.86]"
          style={{ animationDelay: '0.08s' }}
        >
          Rajputra
          <br />
          <span className="text-copper">Aerospace</span>
        </h1>
        <p className="rise max-w-[60ch] text-[clamp(1.05rem,1.8vw,1.22rem)] leading-relaxed text-[#c9d2dd]" style={{ animationDelay: '0.16s' }}>
          {HERO.lede}
        </p>
        <div className="rise flex flex-wrap gap-3" style={{ animationDelay: '0.24s' }}>
          <Button href="#specs" variant="solid">View specifications</Button>
          <Button href="#applications">Applications</Button>
        </div>

        <ul
          className="rise mt-[clamp(24px,5vw,56px)] grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-panel/70 backdrop-blur-sm md:grid-cols-4"
          style={{ animationDelay: '0.32s' }}
        >
          {STATS.map((s, i) => (
            <li
              key={s.label}
              className={`grid gap-1 px-5 py-5 ${i % 2 === 0 ? 'border-r' : ''} ${i < 2 ? 'border-b md:border-b-0' : ''} ${i === 1 ? 'md:border-r' : ''} border-line`}
            >
              <b className="font-display text-[clamp(1.8rem,3.4vw,2.6rem)] font-extrabold leading-none tabular-nums">
                {s.value}
                <small className="ml-1 font-mono text-[0.8rem] font-medium text-muted">{s.unit}</small>
              </b>
              <span className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.12em] text-muted">{s.label}</span>
            </li>
          ))}
        </ul>
      </Wrap>
    </section>
  )
}
