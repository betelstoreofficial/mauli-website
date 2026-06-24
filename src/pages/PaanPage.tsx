import PageHero from '@/components/PageHero'
import Seo from '@/components/Seo'
import Story from '@/sections/Story'
import PaanMenu from '@/sections/PaanMenu'
import { Reveal, RevealHeading } from '@/lib/motion'
import { wa, MESSAGES } from '@/data/site'
import { CTA, WhatsAppIcon } from '@/components/WhatsApp'

const BUILD = [
  { step: 'Choose your leaf', note: 'Banarasi · Calcutti · Maghai' },
  { step: 'Add chutney', note: 'Signature masala & gold chutney' },
  { step: 'Pick your filling', note: 'Gulkand, dry fruit, chocolate…' },
  { step: 'Add fruit crush', note: '15 signature flavours' },
  { step: 'Finish with toppings', note: 'Silver varakh & more' },
]

export default function PaanPage() {
  return (
    <>
      <Seo title="The Paan — Mauli Family Paan House" description="Every Mauli paan, folded fresh to order — classics, royals, chocolate dips, live-fire theatre and paan drinks. Rooted in Ayurveda, since 1990." />
      <PageHero
        eyebrow="The Craft Since 1990"
        title="The"
        accent="Paan"
        blurb="From classic meetha gulab to desserts - every Mauli paan is folded to order, rooted in Ayurveda, finished like a jewel."
        image="/img/catering/hero.png"
      />
      <Story />

      {/* build your own */}
      <section className="bg-forest-deep relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-[1480px] px-6 md:px-10">
          <div className="mb-12 text-center">
            <Reveal><span className="eyebrow gold-text">Make it yours · ₹120</span></Reveal>
            <RevealHeading text="Craft your own paan." as="h2" className="text-display mx-auto mt-3 max-w-[18ch] text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] text-cream" />
          </div>
          <div className="relative grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {BUILD.map((b, i) => (
              <Reveal key={b.step} delay={(i % 5) * 0.06}>
                <div className="flex h-full flex-col items-center rounded-[4px] border border-cream/10 bg-forest-900/40 p-5 text-center">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-300/15 text-[0.8rem] font-bold text-gold-100">{i + 1}</span>
                  <h3 className="mt-3 text-[0.86rem] font-semibold text-cream">{b.step}</h3>
                  <p className="mt-1 text-[0.7rem] leading-snug text-cream/50">{b.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PaanMenu />

      <section className="bg-forest-deep relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-[900px] px-6 text-center md:px-10">
          <Reveal>
            <span className="eyebrow gold-text">The Full Menu</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display mx-auto mt-3 max-w-[20ch] text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] text-cream">
              Classics, royals, chocolate dips & more - built fresh at the counter.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-[52ch] text-[0.95rem] font-light leading-relaxed text-cream/65">
              Choose your leaf, chutney, filling, fruit crush and toppings - craft your own paan experience, or pick a
              house signature. Paans start at ₹60.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <CTA href={wa(MESSAGES.visit)} variant="wa" icon={<WhatsAppIcon className="h-4 w-4" />}>
                Order on WhatsApp
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
