import PageHero from '@/components/PageHero'
import Seo from '@/components/Seo'
import LeafField from '@/components/LeafField'
import FranchiseJourney from '@/sections/FranchiseJourney'
import { Reveal, RevealHeading } from '@/lib/motion'
import { SITE, wa, MESSAGES } from '@/data/site'

const EXPECT = [
  { title: 'Made live, in front of you', text: 'Watch your paan folded to order - choose your leaf, filling, fruit crush and toppings.' },
  { title: 'The Fire Paan theatre', text: 'Our signature flaming ritual and ice-cream paan - the moment everyone films.' },
  { title: 'Paan drinks & shakes', text: 'Paan Sparkle and the Gulkand Shake - refreshing, digestive, only here.' },
]

const DELIVERY = [
  { label: 'Swiggy', href: SITE.swiggy },
  { label: 'Zomato', href: SITE.zomato },
  { label: 'WhatsApp', href: wa(MESSAGES.visit) },
]

export default function VisitPage() {
  return (
    <>
      <Seo title="Visit - Mauli Family Paan House, Frizbee Food Park, Ahmedabad" description="Visit Mauli at Frizbee Food Park, SBR Road, Ahmedabad. Watch your paan made fresh, or order ahead for local delivery & pickup." />
      <PageHero
        eyebrow="Frizbee Food Park · Ahmedabad"
        title="Find"
        accent="Mauli"
        blurb="Walk in to watch your paan made to order, or order ahead for local delivery & pickup across Ahmedabad."
        background={<LeafField />}
      />

      {/* what to expect */}
      <section className="bg-forest-rich relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] px-6 md:px-10">
          <div className="mb-12 max-w-[40ch]">
            <Reveal><span className="eyebrow gold-text">At the counter</span></Reveal>
            <RevealHeading text="What to expect." className="text-display mt-3 text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.08] text-cream" />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {EXPECT.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-cream/10 bg-forest-900/40 p-6">
                  <div className="text-display text-3xl font-bold gold-text">0{i + 1}</div>
                  <h3 className="text-display mt-3 text-lg font-bold text-cream">{e.title}</h3>
                  <p className="mt-2 text-[0.82rem] font-light leading-relaxed text-cream/55">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FranchiseJourney />

      {/* find mauli - address, delivery & polished map */}
      <section className="bg-cream-rich relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] px-6 md:px-10">
          <div className="mb-12 max-w-[44ch]">
            <Reveal><span className="eyebrow text-gold-600">Find Mauli</span></Reveal>
            <RevealHeading text="Come visit us." className="text-display mt-3 text-[clamp(1.9rem,4.4vw,3.2rem)] font-bold leading-[1.08] text-ink" />
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
            {/* details */}
            <Reveal>
              <div className="flex h-full flex-col gap-7 rounded-2xl border border-ink/10 bg-white/70 p-7 md:p-9">
                <div>
                  <div className="eyebrow text-[0.55rem] text-gold-600">Address</div>
                  <p className="mt-2 max-w-[40ch] text-[0.92rem] leading-relaxed text-ink-soft">{SITE.address}</p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <div className="eyebrow text-[0.55rem] text-gold-600">Call / WhatsApp</div>
                    <a href={`tel:${SITE.phoneRaw}`} className="mt-2 block text-[0.9rem] font-medium text-forest-700 hover:text-forest-600">{SITE.phone}</a>
                  </div>
                  <div>
                    <div className="eyebrow text-[0.55rem] text-gold-600">Instagram</div>
                    <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 block text-[0.9rem] font-medium text-forest-700 hover:text-forest-600">{SITE.instagramHandle}</a>
                  </div>
                </div>
                <div>
                  <div className="eyebrow text-[0.55rem] text-gold-600">Order in</div>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {DELIVERY.map((d) => (
                      <a
                        key={d.label}
                        href={d.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="grow"
                        className="rounded-full border border-forest-500/25 bg-forest-500/5 px-5 py-2.5 text-[0.8rem] font-semibold text-forest-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-500/50 hover:bg-forest-500/10"
                      >
                        {d.label} →
                      </a>
                    ))}
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Mauli+Family+Paan+House+Frizbee+Food+Park+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="grow"
                  className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-forest-700 px-6 py-3 text-[0.8rem] font-medium text-cream transition-all duration-500 hover:bg-forest-600"
                >
                  Get directions <span>→</span>
                </a>
              </div>
            </Reveal>

            {/* polished map frame */}
            <Reveal y={40}>
              <div className="overflow-hidden rounded-2xl border border-gold-500/20 bg-white shadow-[0_30px_70px_-40px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between border-b border-ink/8 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-forest-500" />
                    <span className="text-[0.78rem] font-semibold text-ink">Frizbee Food Park · SBR Road</span>
                  </div>
                  <span className="text-[0.66rem] text-muted">Ahmedabad</span>
                </div>
                <iframe
                  title="Mauli Family Paan House location"
                  src="https://www.google.com/maps?q=Mauli%20Family%20Paan%20House%20Frizbee%20Food%20Park%20Bodakdev%20Ahmedabad&output=embed"
                  className="h-[340px] w-full md:h-[460px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
