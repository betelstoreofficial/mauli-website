import { motion } from 'framer-motion'
import { PRODUCTS, wa, MESSAGES } from '@/data/site'
import { Reveal, RevealHeading } from '@/lib/motion'
import { WhatsAppIcon } from '@/components/WhatsApp'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Shop() {
  return (
    <section id="shop" className="bg-cream-rich relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-gold-500/60" />
                <span className="eyebrow text-gold-600">The Mauli Shop</span>
              </div>
            </Reveal>
            <RevealHeading
              text="Take Mauli home."
              className="text-display text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1.02] text-ink"
            />
          </div>
          <Reveal delay={0.1}>
            <div className="flex items-center gap-2 rounded-full border border-forest-500/20 bg-forest-500/5 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-forest-500" />
              <span className="text-[0.74rem] font-medium text-forest-600">We ship Pan-India</span>
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
              className="group flex flex-col overflow-hidden rounded-[3px] border border-ink/8 bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]"
            >
              <div className="relative aspect-square overflow-hidden bg-cream-deep">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                {p.tag && (
                  <div className="absolute left-3 top-3 rounded-full bg-forest-800/90 px-3 py-1 text-[0.56rem] font-semibold uppercase tracking-wider text-gold-100 backdrop-blur">
                    {p.tag}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-display text-lg font-bold text-ink">{p.name}</h3>
                <p className="mt-2 flex-1 text-[0.74rem] leading-relaxed text-muted">{p.blurb}</p>

                <div className="mt-4 space-y-1.5">
                  {p.variants.map((v) => (
                    <div
                      key={v.label}
                      className={`flex items-center justify-between rounded-[2px] px-3 py-1.5 text-[0.72rem] ${
                        v.note ? 'bg-forest-500/8 text-forest-700' : 'bg-cream-deep/60 text-ink-soft'
                      }`}
                    >
                      <span className="font-medium">{v.label}</span>
                      <span className="flex items-center gap-2">
                        {v.note && <span className="hidden text-[0.6rem] italic text-gold-600 sm:inline">{v.note}</span>}
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
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-forest-700 py-2.5 text-[0.74rem] font-medium text-cream transition-all duration-500 hover:bg-forest-600"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" />
                  Order & ship
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-[0.72rem] text-muted">
            Packaged fresh · Shipped via Delhivery / DTDC · Tracking shared after dispatch
          </p>
        </Reveal>
      </div>
    </section>
  )
}
