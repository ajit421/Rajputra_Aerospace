import type { ReactNode } from 'react'
import { motion } from 'motion/react'

type Tone = 'copper' | 'cyan' | 'deep' | 'ink'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Small label above a heading, e.g. "THE AIRCRAFT".
export function Eyebrow({ children, tone = 'copper' }: { children: ReactNode; tone?: Tone }) {
  const color = { copper: 'text-copper-light', cyan: 'text-cyan', deep: 'text-copper-deep', ink: 'text-carbon' }[tone]
  return <p className={`font-display text-xs font-semibold uppercase tracking-[0.25em] sm:text-sm ${color}`}>{children}</p>
}

export function SectionHeading({ eyebrow, title, intro, tone, dark = true }: {
  eyebrow?: string
  title: string
  intro?: string
  tone?: Tone
  dark?: boolean
}) {
  return (
    <Reveal className="max-w-4xl">
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className={`${eyebrow ? 'mt-5 ' : ''}font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-6xl`}>{title}</h2>
      {intro && <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${dark ? 'text-sand' : 'text-[#4a4540]'}`}>{intro}</p>}
    </Reveal>
  )
}
