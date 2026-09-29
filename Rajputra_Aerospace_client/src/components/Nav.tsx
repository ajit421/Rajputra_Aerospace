import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { NAV } from '../data'
import { Wrap } from './ui'

// Highlights the nav link of the section currently in view. Sections without a
// nav link (hero, overview, gallery, contact) clear the highlight.
function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const sections = document.querySelectorAll('main > section')
    const links = new Set(NAV.map((n) => n.href))
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const id = `#${e.target.id}`
          if (e.isIntersecting) setActive(links.has(id) ? id : '')
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])
  return active
}

export function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-ground/80 backdrop-blur-md">
      <Wrap className="flex h-16 items-center justify-between gap-5">
        <a href="#top" className="min-w-0" aria-label="Rajputra Aerospace home">
          <span className="whitespace-nowrap font-display text-[1.05rem] font-extrabold uppercase tracking-[0.06em] sm:text-xl sm:tracking-[0.08em]">
            Rajputra <span className="text-copper">Aerospace</span>
          </span>
        </a>

        <nav aria-label="Sections" className="hidden gap-1 lg:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`rounded-full px-3.5 py-2 font-mono text-[0.78rem] font-medium uppercase tracking-[0.08em] transition-colors ${
                active === n.href ? 'bg-panel-2 text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full border min-[400px]:inline-block border-copper px-4 py-2.5 font-mono text-[0.78rem] font-semibold uppercase tracking-widest transition-colors hover:bg-copper hover:text-[#140b03] sm:px-5"
          >
            Enquire
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-full border border-line lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="size-5 stroke-ink" fill="none" strokeWidth="1.8" strokeLinecap="round">
              {open ? <path d="M6 6 L18 18 M18 6 L6 18" /> : <path d="M4 7 H20 M4 12 H20 M4 17 H20" />}
            </svg>
          </button>
        </div>
      </Wrap>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Sections"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-line lg:hidden"
          >
            <Wrap className="grid gap-1 py-3">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 font-mono text-sm uppercase tracking-[0.08em] text-muted hover:bg-panel-2 hover:text-ink"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-copper px-3 py-3 text-center font-mono text-sm font-semibold uppercase tracking-widest text-[#140b03] min-[400px]:hidden"
              >
                Enquire
              </a>
            </Wrap>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
