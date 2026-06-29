import { motion } from 'framer-motion'
import { PAAN_MENU } from '@/data/site'
import { Reveal, RevealHeading } from '@/lib/motion'

const EASE = [0.16, 1, 0.3, 1] as const

export default function PaanMenu() {
  return (
    <section className="bg-forest-emerald relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-gold-400/8 blur-[120px]" />
      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="mb-12 max-w-[44ch]">
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
              From timeless classics to chocolate dips and live-fire theatre - swipe each row to explore. Every variety
              folded fresh, to order.
            </p>
          </Reveal>
        </div>

        <div className="space-y-12">
          {PAAN_MENU.map((cat) => (
            <div key={cat.title}>
              <Reveal>
                <div className="mb-5 flex items-center gap-4">
                  <span className="inline-flex items-center rounded-full border border-gold-300/30 bg-gold-300/10 px-4 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-gold-100">
                    {cat.title}
                  </span>
                  <span className="hidden text-[0.66rem] italic text-cream/35 sm:inline">{cat.items.length} varieties</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-gold-300/30 to-transparent" />
                </div>
              </Reveal>

              {/* horizontal snap rail */}
              <div className="hide-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-4% 0px' }}
                    transition={{ duration: 0.55, ease: EASE, delay: (i % 6) * 0.05 }}
                    data-cursor="grow"
                    className="group relative w-[150px] flex-none snap-start overflow-hidden rounded-2xl border border-cream/10 bg-forest-800 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-300/50 hover:shadow-[0_24px_50px_-22px_rgba(0,0,0,0.75)] sm:w-[180px] md:w-[200px]"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ background: 'radial-gradient(120% 80% at 50% 120%, rgba(216,177,90,0.22), transparent 60%)' }} />
                      <div className="absolute inset-x-0 bottom-0 p-4">
                        <p className="text-display text-[1rem] font-bold leading-tight text-cream drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]">{item.name}</p>
                        <span className="mt-1 inline-block h-px w-6 bg-gold-300/70 transition-all duration-500 group-hover:w-10" />
                      </div>
                    </div>
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
