import { motion } from 'framer-motion'
import { PRODUCTS, wa, MESSAGES } from '@/data/site'
import { Reveal, RevealHeading } from '@/lib/motion'
import { WhatsAppIcon } from '@/components/WhatsApp'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Shop() {
  return (
    <section id="shop" className="bg-forest-rich grain relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-gold-300/70" />
                <span className="eyebrow gold-text">Take Mauli home · Pan-India</span>
              </div>
            </Reveal>
            <RevealHeading
              text="Bottle the ingredients."
              className="text-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.02] text-cream"
            />
          </div>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 rounded-full border border-gold-300/30 bg-gold-300/10 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
              <span className="text-[0.74rem] font-medium text-gold-100">We ship across India</span>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-cream/10 bg-forest-800/50 transition-all duration-500 hover:-translate-y-1 hover:border-gold-300/40 hover:shadow-[0_24px_50px_-22px_rgba(0,0,0,0.7)]"
            >
              <div className="relative aspect-square overflow-hidden bg-forest-900">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                {p.tag && (
                  <div className="absolute left-3 top-3 rounded-full bg-forest-950/70 px-3 py-1 text-[0.56rem] font-semibold uppercase tracking-wider text-gold-100 backdrop-blur">
                    {p.tag}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-display text-lg font-bold text-cream">{p.name}</h3>
                <p className="mt-2 flex-1 text-[0.74rem] leading-relaxed text-cream/50">{p.blurb}</p>

                <div className="mt-4 space-y-1.5">
                  {p.variants.map((v) => (
                    <div
                      key={v.label}
                      className={`flex items-center justify-between rounded-lg px-3 py-1.5 text-[0.72rem] ${
                        v.note ? 'bg-gold-300/10 text-gold-100' : 'bg-forest-900/60 text-cream/70'
                      }`}
                    >
                      <span className="font-medium">{v.label}</span>
                      <span className="flex items-center gap-2">
                        {v.note && <span className="hidden text-[0.6rem] italic text-gold-200 sm:inline">{v.note}</span>}
                        <span className="font-semibold">₹{v.price}</span>
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={wa(MESSAGES.product(p.name))}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="grow"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-gold-300 py-2.5 text-[0.74rem] font-medium text-forest-900 transition-all duration-500 hover:bg-gold-100"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  Order & ship
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-[0.72rem] text-cream/45">
            Packaged fresh · Shipped via Delhivery / DTDC · Tracking shared after dispatch
          </p>
        </Reveal>
      </div>
    </section>
  )
}
