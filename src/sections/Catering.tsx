import { motion } from 'framer-motion'
import { CATERING, CATERING_ADDONS, CATERING_MIN, wa, MESSAGES } from '@/data/site'
import { Reveal, Parallax } from '@/lib/motion'
import { CTA, WhatsAppIcon } from '@/components/WhatsApp'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Catering({ showBanner = true }: { showBanner?: boolean }) {
  return (
    <section id="catering" className="bg-forest-rich relative overflow-hidden py-24 md:py-32">
      {/* editorial banner */}
      {showBanner && (
      <Reveal y={0}>
        <div className="relative mx-auto mb-20 max-w-[1480px] px-6 md:px-10">
          <Parallax amount={50} className="aspect-[16/10] overflow-hidden rounded-2xl md:aspect-[21/9]">
            <img src="/img/catering/catering-banner.jpg" alt="Mauli premium paan catering setup at a celebration" className="h-[116%] w-full object-cover" loading="lazy" decoding="async" />
          </Parallax>
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-forest-950/10 md:items-center md:bg-gradient-to-r md:from-forest-950/85 md:via-forest-950/35 md:to-transparent">
            <div className="px-7 pb-7 md:px-16 md:pb-0">
              <span className="eyebrow gold-text">Catering & Events</span>
              <h2 className="text-display mt-3 max-w-[12ch] text-[clamp(1.9rem,5vw,4.2rem)] font-bold leading-[0.98] text-cream">
                We don't just serve. <span className="gradient-gold italic">We impress.</span>
              </h2>
            </div>
          </div>
        </div>
      </Reveal>
      )}

      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="mb-12 max-w-[60ch]">
          <Reveal>
            <p className="text-[1.02rem] font-light leading-relaxed text-cream/65">
              A premium live paan & dessert experience for weddings, banquets and corporates - editorial presentation,
              uniformed staff, turnkey setup. Choose a package or craft something bespoke.
            </p>
          </Reveal>
        </div>

        {/* packages */}
        <div className="grid gap-4 lg:grid-cols-3">
          {CATERING.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-500 ${
                pkg.hero
                  ? 'border-gold-300/50 bg-gradient-to-b from-forest-700/50 to-forest-800'
                  : 'border-cream/10 bg-forest-900/50 hover:border-gold-300/25'
              }`}
            >
              {pkg.hero && (
                <div className="absolute -top-3 left-7 rounded-full bg-gold-300 px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-wider text-forest-900">
                  Signature
                </div>
              )}
              <div className="eyebrow text-[0.58rem] text-gold-200/70">{pkg.forWhom}</div>
              <h3 className="text-display mt-3 text-2xl font-bold text-cream">{pkg.name}</h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-display text-4xl font-bold gold-text">₹{pkg.price}</span>
                <span className="text-[0.74rem] text-cream/50">{pkg.unit}</span>
              </div>
              <p className="mt-4 text-[0.8rem] font-light leading-relaxed text-cream/55">{pkg.blurb}</p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {pkg.inclusions.map((inc) => (
                  <li key={inc} className="flex gap-2.5 text-[0.78rem] text-cream/70">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gold-300" />
                    {inc}
                  </li>
                ))}
              </ul>

              <a
                href={wa(MESSAGES.catering(pkg.name))}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="grow"
                className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full py-3 text-[0.78rem] font-medium tracking-wide transition-all duration-500 ${
                  pkg.hero
                    ? 'bg-gold-300 text-forest-900 hover:bg-gold-100'
                    : 'border border-gold-300/40 text-gold-100 hover:bg-gold-300/5'
                }`}
              >
                Enquire <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* add-ons */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {CATERING_ADDONS.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-cream/10 bg-forest-900/40 p-6">
                <div className="eyebrow text-[0.55rem] text-gold-300/60">Add-on Experience</div>
                <h4 className="text-display mt-2 text-lg font-bold text-cream">{a.name}</h4>
                <p className="mt-2 text-[0.76rem] font-light leading-relaxed text-cream/50">{a.blurb}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* closing band */}
        <Reveal>
          <div className="mt-14 flex flex-col items-center gap-6 rounded-2xl border border-gold-300/20 bg-gradient-to-r from-forest-800/60 to-forest-700/40 px-8 py-10 text-center">
            <p className="text-display max-w-[24ch] text-2xl font-bold italic text-cream md:text-3xl">
              You bring the vision. We bring the hospitality.
            </p>
            <p className="text-[0.8rem] text-cream/50">
              Minimum event value ₹{CATERING_MIN.toLocaleString('en-IN')} · Volume pricing for large events · Bespoke experiences available
            </p>
            <CTA href={wa(MESSAGES.catering())} variant="wa" icon={<WhatsAppIcon className="h-4 w-4" />}>
              Request a custom quote
            </CTA>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
