import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { LIGHTBOX } from '../data'
import { LightboxContext } from '../lightbox'

const control = 'grid size-11 place-items-center rounded-full border border-line bg-panel text-ink transition-colors hover:border-copper'

export function Lightbox({ children }: { children: ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null)
  const [index, setIndex] = useState<number | null>(null)
  const [direction, setDirection] = useState(1)

  const open = useCallback((src: string) => {
    const i = LIGHTBOX.findIndex((p) => p.src === src)
    if (i >= 0) setIndex(i)
  }, [])

  const step = useCallback((by: number) => {
    setDirection(by)
    setIndex((i) => (i === null ? i : (i + by + LIGHTBOX.length) % LIGHTBOX.length))
  }, [])

  useEffect(() => {
    const d = dialog.current
    if (!d) return
    if (index !== null && !d.open) d.showModal()
    if (index === null && d.open) d.close()
  }, [index])

  useEffect(() => {
    if (index === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, step])

  const picture = index === null ? null : LIGHTBOX[index]

  return (
    <LightboxContext value={open}>
      {children}
      <dialog
        ref={dialog}
        aria-label="Image viewer"
        onClose={() => setIndex(null)}
        onClick={(e) => e.target === e.currentTarget && setIndex(null)}
        className="m-auto max-h-[94vh] w-[min(1400px,96vw)] max-w-none overflow-visible bg-transparent p-0 text-ink"
      >
        {picture && (
          <div className="grid gap-3">
            <div className="relative mx-auto grid w-fit max-w-full overflow-hidden rounded-2xl border border-line bg-panel">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={picture.src}
                  src={picture.src}
                  alt={picture.alt}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.4}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -60) step(1)
                    if (info.offset.x > 60) step(-1)
                  }}
                  className="mx-auto max-h-[80vh] w-auto cursor-grab touch-pan-y select-none active:cursor-grabbing"
                  draggable={false}
                />
              </AnimatePresence>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[0.78rem] font-medium uppercase tracking-widest">
              <p>
                <span className="mr-3 text-muted tabular-nums">{index! + 1} / {LIGHTBOX.length}</span>
                {picture.caption}
              </p>
              <div className="flex gap-2">
                <button type="button" className={control} onClick={() => step(-1)} aria-label="Previous image">←</button>
                <button type="button" className={control} onClick={() => step(1)} aria-label="Next image">→</button>
                <button type="button" className={`${control} w-auto px-5`} onClick={() => setIndex(null)}>Close</button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </LightboxContext>
  )
}
