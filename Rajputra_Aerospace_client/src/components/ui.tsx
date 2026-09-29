import { use, type ReactNode } from 'react'
import { motion } from 'motion/react'
import type { Picture } from '../data'
import { LightboxContext } from '../lightbox'

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

export function Wrap({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-4 sm:px-8 lg:px-10 ${className}`}>{children}</div>
}

// Small plain label above a heading, e.g. "APPLICATIONS". No numbers or lines.
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-copper-soft">{children}</p>
}

export function SectionHeading({ id, eyebrow, title, intro }: { id: string; eyebrow: string; title: string; intro?: string }) {
  return (
    <Reveal className="mb-10 grid gap-5 sm:mb-14">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[0.95] text-balance">
        {title}
      </h2>
      {intro && <p className="max-w-[60ch] text-[1.06rem] leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  )
}

const button = {
  solid: 'bg-copper text-[#140b03] hover:bg-copper-soft',
  outline: 'border border-copper text-ink hover:bg-copper hover:text-[#140b03]',
}

export function Button({ href, children, variant = 'outline', external = false }: {
  href: string
  children: ReactNode
  variant?: keyof typeof button
  external?: boolean
}) {
  return (
    <a
      href={href}
      {...(external && { target: '_blank', rel: 'noopener' })}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-mono text-[0.8rem] font-semibold uppercase tracking-widest transition-colors ${button[variant]}`}
    >
      {children}
    </a>
  )
}

export function Zoomable({ picture, className = '', imgClassName = '', children }: {
  picture: Picture
  className?: string
  imgClassName?: string
  children?: ReactNode
}) {
  const open = use(LightboxContext)
  return (
    <button
      type="button"
      onClick={() => open(picture.src)}
      aria-label={`View full size: ${picture.caption}`}
      className={`group relative block cursor-zoom-in overflow-hidden rounded-2xl ${className}`}
    >
      <img
        src={picture.src}
        alt={picture.alt}
        width={1376}
        height={768}
        loading="lazy"
        decoding="async"
        className={`w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${imgClassName}`}
      />
      {children}
    </button>
  )
}
