import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import Seo from '@/components/Seo'
import CountUp from '@/components/CountUp'
import { Reveal, RevealHeading, Parallax } from '@/lib/motion'
import { CTA, WhatsAppIcon } from '@/components/WhatsApp'
import { FRANCHISE, BRAND_STATS, SITE, waFranchise, MESSAGES } from '@/data/site'

const EASE = [0.16, 1, 0.3, 1] as const

export default function FranchisePage() {
  return (
    <>
      <Seo
        title="Franchise — Mauli Family Paan House · Own a 35-year legacy"
        description="Own a Mauli franchise from ₹3,00,000 — turnkey live paan counter, ROI in 3–5 months, ₹1 lakh+ monthly potential. India's first OG family paan house, since 1990."
      />
      <PageHero
        eyebrow="Franchise Opportunity · Since 1990"
        title="Own a"
        accent="Mauli."
        blurb="India's first OG family paan house is opening its doors to partners. A 35-year legacy, a turnkey counter, and a dessert the whole country already loves."
        image="/img/franchise/counter-closed.jpg"
      />

      {/* legacy proof */}
      <section className="bg-forest-emerald relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-[1480px] px-6 md:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <span className="eyebrow gold-text">A name people already trust</span>
              </Reveal>
              <RevealHeading
                text="Not a new idea. A proven one."
                className="text-display mt-3 max-w-[16ch] text-[clamp(1.9rem,4.5vw,3.4rem)] font-bold leading-[1.06] text-cream"
              />
              <Reveal delay={0.1}>
                <p className="mt-5 max-w-[48ch] text-[1rem] font-light leading-relaxed text-cream/70">
                  Mauli began in 1990 at Shirdi, near the Sai Baba Mandir, and has grown to 11+ thriving outlets across
                  Maharashtra & Gujarat — rated Pune's No.1 paan maker. You're not starting from scratch; you're joining
                  a family.
                </p>
              </Reveal>
            </div>
            <Reveal y={40}>
              <Parallax amount={28} className="aspect-[4/3] overflow-hidden rounded-[4px] border border-gold-300/20 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.6)]">
                <img src="/img/catering/logo.png" alt="Mauli paan counter at a celebration" className="h-[110%] w-full object-cover" loading="lazy" decoding="async" />
              </Parallax>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-gold-300/20 pt-12 md:grid-cols-4">
            {BRAND_STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div>
                  <CountUp value={s.k} className="text-display block text-4xl font-bold gold-text md:text-5xl" />
                  <div className="mt-2 text-[0.84rem] font-medium text-cream">{s.label}</div>
                  <div className="text-[0.72rem] text-cream/45">{s.note}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* the numbers */}
      <section className="bg-cream-rich relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-[1480px] px-6 md:px-10">
          <div className="mb-12 text-center">
            <Reveal><span className="eyebrow text-gold-600">The opportunity</span></Reveal>
            <RevealHeading
              text="Everything to start, operate & profit - from day one."
              as="h2"
              className="text-display mx-auto mt-3 max-w-[18ch] text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.08] text-ink"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {FRANCHISE.stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
                className="rounded-[4px] border border-forest-500/15 bg-white/70 p-8 text-center shadow-[0_10px_40px_-24px_rgba(0,0,0,0.4)]"
              >
                <div className="text-display text-5xl font-bold text-forest-600 md:text-6xl">{s.k}</div>
                <div className="mt-3 text-[0.9rem] font-semibold text-ink">{s.label}</div>
                <div className="mt-1 text-[0.74rem] text-muted">{s.note}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* what's included + counter render */}
      <section className="bg-forest-rich relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-[1480px] px-6 md:px-10">
          <div className="mb-12 max-w-[46ch]">
            <Reveal><span className="eyebrow gold-text">The complete package</span></Reveal>
            <RevealHeading
              text="One box. The whole business."
              className="text-display mt-3 text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.08] text-cream"
            />
            <Reveal delay={0.1}>
              <p className="mt-5 text-[0.95rem] font-light leading-relaxed text-cream/70">
                A compact, fully-movable live paan counter — delivered, installed and stocked. No guesswork, no
                experience required.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <Reveal y={40}>
              <Parallax amount={30} className="h-full min-h-[380px] overflow-hidden rounded-[4px] border border-gold-300/20 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.6)]">
                <img src="/img/franchise/counter-open.png" alt="Mauli franchise live paan counter setup" className="h-[110%] w-full object-cover" loading="lazy" decoding="async" />
              </Parallax>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2">
              {FRANCHISE.includes.map((it, i) => (
                <motion.div
                  key={it.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-6% 0px' }}
                  transition={{ duration: 0.7, ease: EASE, delay: (i % 2) * 0.06 }}
                  className="rounded-[4px] border border-cream/10 bg-forest-900/40 p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold-300/15 text-[0.7rem] font-bold text-gold-100">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-[0.92rem] font-semibold text-cream">{it.name}</h3>
                      <p className="mt-1 text-[0.76rem] leading-relaxed text-cream/50">{it.note}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* why choose */}
      <section className="bg-cream-rich relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-[1480px] px-6 md:px-10">
          <div className="mb-12 max-w-[40ch]">
            <Reveal><span className="eyebrow text-gold-600">Why Mauli</span></Reveal>
            <RevealHeading
              text="The perfect franchise product."
              className="text-display mt-3 text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.06] text-ink"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {FRANCHISE.why.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.08}>
                <div className="h-full rounded-[4px] border border-ink/10 bg-white/70 p-7">
                  <div className="text-display text-2xl font-bold text-forest-600">0{i + 1}</div>
                  <h3 className="text-display mt-3 text-xl font-bold text-ink">{w.title}</h3>
                  <p className="mt-2 text-[0.84rem] leading-relaxed text-ink-soft">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* closing CTA */}
      <section className="bg-forest-deep grain relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-gold-400/10 blur-[130px]" />
        <div className="relative mx-auto max-w-[820px] px-6 text-center md:px-10">
          <Reveal><span className="eyebrow gold-text">Limited slots - act fast</span></Reveal>
          <RevealHeading
            text="Call now to book your franchise."
            as="h2"
            className="text-display mx-auto mt-4 max-w-[18ch] text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.05] text-cream"
          />
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-[52ch] text-[0.95rem] font-light leading-relaxed text-cream/65">
              {FRANCHISE.closing}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <CTA href={waFranchise(MESSAGES.franchise)} variant="wa" icon={<WhatsAppIcon className="h-4 w-4" />}>
                Enquire on WhatsApp
              </CTA>
              <CTA href={`tel:${SITE.franchisePhoneRaw}`} variant="outline">
                Call {SITE.franchisePhone}
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
