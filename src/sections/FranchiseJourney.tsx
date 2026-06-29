import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Reveal, RevealHeading } from '@/lib/motion'
import { OUTLETS, BRAND_STATS } from '@/data/site'

const EASE = [0.16, 1, 0.3, 1] as const

function Pin() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-shrink-0 text-gold-300" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  )
}

/** Every Mauli outlet - flagship highlight + the full network grid. */
export default function FranchiseJourney() {
  return (
    <section className="bg-forest-emerald grain relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-gold-400/8 blur-[130px]" />
      <div className="relative mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="mb-14 text-center">
          <Reveal><span className="eyebrow gold-text">Mauli across India</span></Reveal>
          <RevealHeading
            text="From a Shirdi counter to a flagship in Ahmedabad."
            as="h2"
            className="text-display mx-auto mt-3 max-w-[18ch] text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[1.08] text-cream"
          />
        </div>

        {/* stats ribbon */}
        <Reveal>
          <div className="mb-12 grid grid-cols-2 gap-6 rounded-2xl border border-cream/10 bg-forest-900/40 p-7 md:grid-cols-4">
            {BRAND_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-display text-3xl font-bold gold-text md:text-4xl">{s.k}</div>
                <div className="mt-1 text-[0.78rem] font-medium text-cream">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* flagship feature */}
        <Reveal y={40}>
          <div className="grid overflow-hidden rounded-2xl border border-gold-300/40 bg-gradient-to-br from-forest-700/50 to-forest-800 md:grid-cols-2">
            <div className="aspect-[16/11] overflow-hidden md:aspect-auto">
              <img src="/img/franchise/visit.jpg" alt="Mauli flagship store, Ahmedabad" className="h-full w-full object-cover" loading="lazy" decoding="async" />
            </div>
            <div className="flex flex-col justify-center p-7 md:p-10">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold-300 px-3 py-1 text-[0.56rem] font-semibold uppercase tracking-wider text-forest-900">
                Flagship · Ahmedabad
              </span>
              <h3 className="text-display mt-4 text-2xl font-bold text-cream md:text-3xl">The Build-Your-Own Paan Experience Store</h3>
              <p className="mt-3 max-w-[42ch] text-[0.92rem] font-light leading-relaxed text-cream/70">
                Our first full retail destination at Frizbee Food Park - where guests craft their own paan live, choosing
                leaf, chutney, filling, fruit crush and toppings.
              </p>
              <Link to="/franchise" data-cursor="grow" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gold-300 px-6 py-3 text-[0.8rem] font-medium text-forest-900 transition-all duration-500 hover:bg-gold-100">
                Open one in your city <span>→</span>
              </Link>
            </div>
          </div>
        </Reveal>

        {/* full network */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="eyebrow text-[0.6rem] text-gold-200/80">Pune · 11 outlets</span>
                <span className="h-px flex-1 bg-cream/10" />
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {OUTLETS.pune.map((o, i) => (
                <motion.div
                  key={o}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-4% 0px' }}
                  transition={{ duration: 0.5, ease: EASE, delay: (i % 2) * 0.05 }}
                  className="flex items-center gap-2.5 rounded-xl border border-cream/10 bg-forest-900/40 px-4 py-3"
                >
                  <Pin />
                  <span className="text-[0.82rem] text-cream/80">{o}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <div className="mb-5 flex items-center gap-3">
                <span className="eyebrow text-[0.6rem] text-gold-200/80">Beyond Pune</span>
                <span className="h-px flex-1 bg-cream/10" />
              </div>
            </Reveal>
            <div className="grid gap-2.5">
              {OUTLETS.beyond.map((o, i) => (
                <motion.div
                  key={o}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-4% 0px' }}
                  transition={{ duration: 0.5, ease: EASE, delay: i * 0.06 }}
                  className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 ${i === OUTLETS.beyond.length - 1 ? 'border-gold-300/40 bg-gold-300/10' : 'border-cream/10 bg-forest-900/40'}`}
                >
                  <Pin />
                  <span className="text-[0.82rem] text-cream/80">{o}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
