import { motion } from 'framer-motion'
import { SIGNATURES } from '@/data/site'
import { Reveal, RevealHeading } from '@/lib/motion'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Signatures() {
  return (
    <section id="signatures" className="bg-forest-emerald relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-gold-400/8 blur-[120px]" />
      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="mb-12 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-gold-300/70" />
                <span className="eyebrow gold-text">Signature Experiences</span>
              </div>
            </Reveal>
            <RevealHeading
              text="Paan, as theatre."
              className="text-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.02] text-cream"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[36ch] text-[0.92rem] font-light leading-relaxed text-cream/55">
              Eight curated varieties, each a moment of indulgence - made fresh, in front of you, at our counter.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {SIGNATURES.map((s, i) => (
            <motion.article
              key={s.name}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: (i % 3) * 0.08 }}
              data-cursor="grow"
              className="group relative overflow-hidden rounded-[3px] border border-cream/10 bg-forest-800"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/25 to-transparent" />
                {s.tag && (
                  <span className="absolute left-3 top-3 rounded-full bg-forest-950/70 px-3 py-1 text-[0.54rem] font-semibold uppercase tracking-wider text-gold-100 backdrop-blur-sm">
                    {s.tag}
                  </span>
                )}
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-display text-lg font-bold text-cream md:text-xl">{s.name}</h3>
                    <span className="text-display text-base font-bold gold-text">{s.price}</span>
                  </div>
                  <p className="mt-1 max-h-0 overflow-hidden text-[0.72rem] leading-relaxed text-cream/0 transition-all duration-500 group-hover:max-h-20 group-hover:text-cream/65">
                    {s.blurb}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
