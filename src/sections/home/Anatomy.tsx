import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Reveal, RevealHeading } from '@/lib/motion'

const EASE = [0.16, 1, 0.3, 1] as const

const PROOF = [
  { k: '16', label: 'Ayurvedic herbs', body: 'A digestive blend that genuinely settles the stomach after a meal.' },
  { k: '0', label: 'Tobacco & supari', body: 'Never sold, never will. No mouth redness, no spitting — clean and social.' },
  { k: '18', label: 'Natural ingredients', body: 'Gulkand, dry fruits, rose and saffron — nothing artificial hiding inside.' },
  { k: '∞', label: 'Guilt-free cravings', body: 'Sweet enough to feel like dessert, pure enough to enjoy every day.' },
]

/** The healthy-dessert proof — paan as hero, credentials revealed on scroll. */
export default function Anatomy() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.04, 1.12])
  const rotate = useTransform(scrollYProgress, [0, 1], [-6, 6])

  return (
    <section className="bg-cream-rich relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="mb-14 max-w-[44ch]">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-500/60" />
              <span className="eyebrow text-gold-600">Indulgence with a soul</span>
            </div>
          </Reveal>
          <RevealHeading
            text="Sweet like dessert. Pure like medicine."
            className="text-display max-w-[16ch] text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[1.06] text-ink"
          />
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-[52ch] text-[1rem] font-light leading-relaxed text-ink-soft">
              Every Mauli paan is built backwards from one idea — a dessert that actually loves you back. Rooted in
              Ayurveda, made for wellness, finished like a jewel.
            </p>
          </Reveal>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* paan hero */}
          <div ref={ref} className="relative mx-auto aspect-square w-full max-w-[460px]">
            <motion.div
              className="pointer-events-none absolute inset-0 rounded-full bg-gold-300/20 blur-[60px]"
              animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.img
              src="/img/paan/dryfruit.webp"
              alt="A Mauli paan, handcrafted with Ayurvedic herbs and dry fruit"
              style={{ scale, rotate }}
              className="relative h-full w-full rounded-full object-cover shadow-[0_40px_100px_-30px_rgba(0,0,0,0.45)]"
              loading="lazy"
              decoding="async"
            />
            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-gold-500/30" />
          </div>

          {/* credentials */}
          <div className="grid gap-4 sm:grid-cols-2">
            {PROOF.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-6% 0px' }}
                transition={{ duration: 0.7, ease: EASE, delay: (i % 2) * 0.08 }}
                className="rounded-2xl border border-ink/10 bg-white/70 p-6"
              >
                <div className="text-display text-4xl font-bold text-forest-600">{p.k}</div>
                <div className="text-display mt-2 text-lg font-bold text-ink">{p.label}</div>
                <p className="mt-1.5 text-[0.8rem] font-light leading-relaxed text-ink-soft">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
