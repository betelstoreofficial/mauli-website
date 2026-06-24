import { motion } from 'framer-motion'
import { BOXES, wa, MESSAGES } from '@/data/site'
import { Reveal, RevealHeading } from '@/lib/motion'
import { WhatsAppIcon } from '@/components/WhatsApp'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Boxes() {
  return (
    <section id="boxes" className="bg-forest-rich relative overflow-hidden py-24 md:py-32">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-gold-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-gold-300/70" />
                <span className="eyebrow gold-text">Assorted Gift Boxes</span>
              </div>
            </Reveal>
            <RevealHeading
              text="Gift the experience."
              className="text-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.02] text-cream"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-[34ch] text-[0.92rem] font-light leading-relaxed text-cream/55">
              Curated boxes of fresh-folded paan for festivals, parties & corporate gifting.
              <span className="mt-1 block text-gold-200/80">Hand-made fresh · Ahmedabad delivery & pickup.</span>
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {BOXES.map((box, i) => (
            <motion.a
              key={box.id}
              href={wa(MESSAGES.box(box.name, box.count, box.price))}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
              data-cursor="grow"
              className={`group relative flex flex-col overflow-hidden rounded-[3px] border transition-all duration-500 ${
                box.hero
                  ? 'border-gold-300/50 bg-gradient-to-b from-forest-700/60 to-forest-800 xl:row-span-1'
                  : 'border-cream/10 bg-forest-800/60 hover:border-gold-300/30'
              }`}
            >
              {box.hero && (
                <div className="absolute right-3 top-3 z-10 rounded-full bg-gold-300 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-wider text-forest-900">
                  ★ Most Loved
                </div>
              )}
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={box.image}
                  alt={box.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900 via-forest-900/20 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-baseline gap-2">
                  <span className="text-display text-3xl font-bold text-cream">{box.count}</span>
                  <span className="text-[0.7rem] font-medium uppercase tracking-wide text-cream/60">paan</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-display text-xl font-bold text-cream">{box.name}</h3>
                <p className="mt-2 flex-1 text-[0.74rem] leading-relaxed text-cream/50">{box.contents}</p>

                <div className="mt-5 flex items-end justify-between border-t border-cream/10 pt-4">
                  <div>
                    <div className="text-display text-2xl font-bold gold-text">₹{box.price}</div>
                    <div className="text-[0.62rem] text-cream/40">≈ ₹{box.perPaan}/paan</div>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/5 text-cream/60 transition-all duration-500 group-hover:bg-[#25d366] group-hover:text-white">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-[0.72rem] italic text-cream/40">
            Boxes are made fresh and delivered locally in Ahmedabad - shippable gifting coming soon.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
