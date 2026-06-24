import PageHero from '@/components/PageHero'
import Seo from '@/components/Seo'
import Visit from '@/sections/Visit'
import { Reveal, RevealHeading } from '@/lib/motion'

const EXPECT = [
  { title: 'Made live, in front of you', text: 'Watch your paan folded to order — choose your leaf, filling, fruit crush and toppings.' },
  { title: 'The Fire Paan theatre', text: 'Our signature flaming ritual and ice-cream paan — the moment everyone films.' },
  { title: 'Paan drinks & shakes', text: 'Paan Sparkle and the Gulkand Shake — refreshing, digestive, only here.' },
]

export default function VisitPage() {
  return (
    <>
      <Seo title="Visit — Mauli Family Paan House, Frizbee Food Park, Ahmedabad" description="Visit Mauli at Frizbee Food Park, SBR Road, Ahmedabad. Watch your paan made fresh, or order ahead for local delivery & pickup." />
      <PageHero
        eyebrow="Frizbee Food Park · Ahmedabad"
        title="Find"
        accent="Mauli"
        blurb="Walk in to watch your paan made to order, or order ahead for local delivery & pickup across Ahmedabad."
        image="/img/catering/visit-store.jpg"
      />

      <Visit image="/img/catering/live.jpg" />

      {/* what to expect */}
      <section className="bg-forest-rich relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-[1480px] px-6 md:px-10">
          <div className="mb-12 max-w-[40ch]">
            <Reveal><span className="eyebrow gold-text">At the counter</span></Reveal>
            <RevealHeading text="What to expect." className="text-display mt-3 text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.08] text-cream" />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {EXPECT.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.08}>
                <div className="h-full rounded-[4px] border border-cream/10 bg-forest-900/40 p-6">
                  <div className="text-display text-3xl font-bold gold-text">0{i + 1}</div>
                  <h3 className="text-display mt-3 text-lg font-bold text-cream">{e.title}</h3>
                  <p className="mt-2 text-[0.82rem] font-light leading-relaxed text-cream/55">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* map + delivery */}
      <section className="bg-cream-rich relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto grid max-w-[1480px] items-center gap-10 px-6 md:px-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow text-gold-600">Order in</span>
            <RevealHeading text="Also on delivery." className="text-display mt-3 text-[clamp(1.8rem,4vw,2.8rem)] font-bold leading-[1.1] text-ink" />
            <p className="mt-5 max-w-[46ch] text-[0.95rem] font-light leading-relaxed text-ink-soft">
              Crave it at home? Order Mauli on Swiggy and Zomato across Ahmedabad, or message us on WhatsApp for local
              delivery and pickup.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {['Swiggy', 'Zomato', 'WhatsApp'].map((d) => (
                <span key={d} className="rounded-full border border-forest-500/25 bg-forest-500/5 px-5 py-2.5 text-[0.8rem] font-semibold text-forest-700">
                  {d}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal y={40}>
            <div className="overflow-hidden rounded-[4px] border border-gold-500/15 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.5)]">
              <iframe
                title="Mauli Family Paan House location"
                src="https://www.google.com/maps?q=Mauli%20Family%20Paan%20House%20Frizbee%20Food%20Park%20Bodakdev%20Ahmedabad&output=embed"
                className="h-[320px] w-full md:h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
