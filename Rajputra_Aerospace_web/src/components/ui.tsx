import type { ReactNode } from 'react'
import { motion } from 'motion/react'

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

export function Eyebrow({ children, tone = 'copper' }: { children: ReactNode; tone?: 'copper' | 'cyan' | 'deep' }) {
  const color = { copper: 'text-copper-light', cyan: 'text-cyan', deep: 'text-copper-deep' }[tone]
  return <p className={`font-display text-sm font-semibold uppercase tracking-[0.3em] ${color}`}>{children}</p>
}

export function SectionHeading({ eyebrow, title, intro, tone, dark = true }: {
  eyebrow: string
  title: string
  intro?: string
  tone?: 'copper' | 'cyan' | 'deep'
  dark?: boolean
}) {
  return (
    <Reveal className="max-w-3xl">
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">{title}</h2>
      {intro && <p className={`mt-6 text-lg leading-relaxed ${dark ? 'text-sand' : 'text-[#4a4540]'}`}>{intro}</p>}
    </Reveal>
  )
}
