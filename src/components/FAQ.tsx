import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal, RevealHeading } from '@/lib/motion'

export interface QA {
  q: string
  a: string
}

export default function FAQ({
  eyebrow = 'Good to know',
  heading,
  items,
  tone = 'light',
  bg = 'bg-cream-rich',
}: {
  eyebrow?: string
  heading: string
  items: QA[]
  tone?: 'dark' | 'light'
  bg?: string
}) {
  const [open, setOpen] = useState<number | null>(0)
  const dark = tone === 'dark'
  return (
    <section className={`${bg} relative overflow-hidden py-24 md:py-32`}>
      <div className="mx-auto max-w-[820px] px-6 md:px-10">
        <div className="mb-10 text-center">
          <Reveal><span className={`eyebrow ${dark ? 'gold-text' : 'text-gold-600'}`}>{eyebrow}</span></Reveal>
          <RevealHeading text={heading} as="h2" className={`text-display mx-auto mt-3 max-w-[20ch] text-[clamp(1.7rem,3.6vw,2.6rem)] font-bold leading-[1.1] ${dark ? 'text-cream' : 'text-ink'}`} />
        </div>
        <div className="divide-y divide-current/10" style={{ color: dark ? 'rgba(251,247,238,0.15)' : 'rgba(22,32,26,0.12)' }}>
          {items.map((it, i) => {
            const isOpen = open === i
            return (
              <div key={it.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  data-cursor="grow"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[0.98rem] font-medium ${dark ? 'text-cream' : 'text-ink'}`}>{it.q}</span>
                  <span className={`text-xl leading-none transition-transform duration-300 ${dark ? 'text-gold-200' : 'text-gold-500'} ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className={`pb-5 text-[0.88rem] font-light leading-relaxed ${dark ? 'text-cream/60' : 'text-ink-soft'}`}>{it.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
