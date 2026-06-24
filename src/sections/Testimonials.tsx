import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/data/site'
import { Reveal } from '@/lib/motion'
import Botanical from '@/components/Botanical'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Testimonials() {
  return (
    <section className="bg-cream-rich relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="mb-14 text-center">
          <Reveal><span className="eyebrow text-gold-600">Loved across India</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display mx-auto mt-3 max-w-[16ch] text-[clamp(1.9rem,4.2vw,3.2rem)] font-bold leading-[1.08] text-ink">
              The paan people remember.
            </h2>
          </Reveal>
          <Reveal delay={0.1}><Botanical tone="gold" className="mt-6" /></Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
              className="flex h-full flex-col rounded-[4px] border border-ink/10 bg-white/70 p-7"
            >
              <div className="text-display text-4xl leading-none text-gold-400">“</div>
              <blockquote className="mt-2 flex-1 text-[0.96rem] font-light italic leading-relaxed text-ink-soft">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 border-t border-ink/8 pt-4">
                <div className="text-[0.86rem] font-semibold text-ink">{t.author}</div>
                <div className="text-[0.72rem] text-muted">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
