import { useEffect, useState } from 'react'
import { NAV } from '../data'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? 'bg-carbon/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-baseline gap-2 font-display" onClick={() => setOpen(false)}>
          <span className="text-lg font-semibold tracking-tight">Rajputra</span>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-copper-light">Aerospace</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-sand transition-colors hover:text-ivory">{item.label}</a>
          ))}
          <a href="#reserve" className="rounded-full bg-copper px-5 py-2.5 text-sm font-semibold text-carbon transition-colors hover:bg-copper-light">Reserve</a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-carbon/50 backdrop-blur-sm md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-4">
            <span className={`absolute left-0 h-0.5 w-4 bg-ivory transition-all ${open ? 'top-1.5 rotate-45' : 'top-0'}`} />
            <span className={`absolute left-0 h-0.5 w-4 bg-ivory transition-all ${open ? 'top-1.5 -rotate-45' : 'top-2.5'}`} />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 px-5 pb-6 md:hidden">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-3 text-lg text-sand">{item.label}</a>
          ))}
          <a href="#reserve" onClick={() => setOpen(false)} className="mt-3 block rounded-full bg-copper px-5 py-3 text-center font-semibold text-carbon">Reserve</a>
        </div>
      )}
    </header>
  )
}
