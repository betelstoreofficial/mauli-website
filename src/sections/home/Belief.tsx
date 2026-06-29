import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

const WORDS = ['Dinner', 'is', 'not', 'complete', 'without', 'a', 'paan.']

function Word({ word, index, total, progress }: { word: string; index: number; total: number; progress: MotionValue<number> }) {
  const start = index / total
  const end = start + 1 / total
  const color = useTransform(progress, [start, end], ['rgba(251,247,238,0.16)', 'rgba(251,247,238,1)'])
  if (word === 'paan.') return <span className="gradient-gold italic">{word}</span>
  return <motion.span style={{ color }}>{word}</motion.span>
}

/** The brand belief — kinetic type that lights up word-by-word as you scroll through. */
export default function Belief() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })

  return (
    <section id="belief" ref={ref} className="bg-forest-rich grain relative overflow-hidden py-32 md:py-44">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04]">
        <svg width="640" height="640" viewBox="0 0 24 24" fill="none">
          <path d="M4 20C3 11 9 3.5 20 3c.5 7.5-3 16.5-13 16.9C6 19.95 5 20 4 20Z" fill="#fff" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 text-center md:px-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="eyebrow gold-text">माऊली · mother, protector, blessing</span>
        </motion.div>

        <p className="text-display flex flex-wrap justify-center gap-x-[0.28em] gap-y-1 text-[clamp(2rem,6vw,4.6rem)] font-bold leading-[1.1]">
          {WORDS.map((w, i) => (
            <Word key={i} word={w} index={i} total={WORDS.length} progress={scrollYProgress} />
          ))}
        </p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mx-auto mt-10 max-w-[52ch] text-[1rem] font-light leading-relaxed text-cream/55"
        >
          A belief carried since 1990 — that the right paan is the perfect, healthy finish to every meal. Sweet enough to
          crave, pure enough to love.
        </motion.p>
      </div>
    </section>
  )
}
