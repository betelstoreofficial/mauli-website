import { motion } from 'framer-motion'
import { PAAN_MENU } from '@/data/site'
import { Reveal, RevealHeading } from '@/lib/motion'

const EASE = [0.16, 1, 0.3, 1] as const

export default function PaanMenu() {
  return (
    <section className="bg-forest-emerald relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-gold-400/8 blur-[120px]" />
      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="mb-14 max-w-[44ch]">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-300/70" />
              <span className="eyebrow gold-text">The Full Menu</span>
            </div>
          </Reveal>
          <RevealHeading
            text="Every paan we make."
            className="text-display text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.04] text-cream"
          />
          <Reveal delay={0.1}>
            <p className="mt-5 text-[0.95rem] font-light leading-relaxed text-cream/60">
              From timeless classics to chocolate dips and live-fire theatre — every variety folded fresh, to order, at
              our counter.
            </p>
          </Reveal>
        </div>

        <div className="space-y-12">
          {PAAN_MENU.map((cat) => (
            <div key={cat.title}>
              <Reveal>
                <div className="mb-5 flex items-center gap-4">
                  <h3 className="eyebrow text-[0.62rem] text-gold-200/80">{cat.title}</h3>
                  <span className="h-px flex-1 bg-cream/10" />
                </div>
              </Reveal>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-4% 0px' }}
                    transition={{ duration: 0.6, ease: EASE, delay: (i % 6) * 0.04 }}
                    data-cursor="grow"
                    className="group"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-[3px] border border-cream/10 bg-forest-800">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent" />
                    </div>
                    <p className="mt-2 text-center text-[0.74rem] font-medium leading-tight text-cream/85">{item.name}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
