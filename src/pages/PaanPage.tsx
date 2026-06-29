import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import Seo from '@/components/Seo'
import Story from '@/sections/Story'
import PaanMenu from '@/sections/PaanMenu'
import Botanical from '@/components/Botanical'
import { Reveal, RevealHeading } from '@/lib/motion'
import { wa, MESSAGES } from '@/data/site'
import { CTA, WhatsAppIcon } from '@/components/WhatsApp'

const EASE = [0.16, 1, 0.3, 1] as const

const BUILD = [
  { step: 'Choose your leaf', note: 'Banarasi · Calcutti · Maghai' },
  { step: 'Add chutney', note: 'Signature masala & gold chutney' },
  { step: 'Pick your filling', note: 'Gulkand, dry fruit, chocolate' },
  { step: 'Add fruit crush', note: '15 signature flavours' },
  { step: 'Finish with toppings', note: 'Silver varakh & more' },
]

export default function PaanPage() {
  return (
    <>
      <Seo title="The Paan - Mauli Family Paan House" description="Every Mauli paan, folded fresh to order - classics, royals, chocolate dips, live-fire theatre and paan drinks. Rooted in Ayurveda, since 1990." />
      <PageHero
        eyebrow="The Craft Since 1990"
        title="The"
        accent="Paan"
        blurb="From classic meetha gulab to desserts - every Mauli paan is folded to order, rooted in Ayurveda, finished like a jewel."
        image="/img/catering/hero.png"
      />
      <Story />

      {/* craft your own - animated */}
      <section className="bg-forest-rich grain relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mb-4 text-center">
            <Reveal><span className="eyebrow gold-text">Make it yours · ₹149</span></Reveal>
            <RevealHeading text="Craft your own paan." as="h2" className="text-display mx-auto mt-3 max-w-[18ch] text-[clamp(1.9rem,4.4vw,3.3rem)] font-bold leading-[1.08] text-cream" />
          </div>
          <Reveal delay={0.1}><Botanical className="mb-12" /></Reveal>

          <div className="relative">
            {/* connecting line (desktop) */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 1.1, ease: EASE }}
              style={{ transformOrigin: 'left' }}
              className="pointer-events-none absolute left-[10%] right-[10%] top-9 hidden h-px bg-gradient-to-r from-gold-300/50 via-gold-400/60 to-gold-300/30 lg:block"
            />
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
              {BUILD.map((b, i) => (
                <motion.div
                  key={b.step}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-6% 0px' }}
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  <div className="text-display flex h-[72px] w-[72px] items-center justify-center rounded-full border border-gold-300/30 bg-forest-900/60 text-3xl font-bold gold-text transition-all duration-500 group-hover:border-gold-300/70 group-hover:bg-forest-800">
                    {i + 1}
                  </div>
                  <h3 className="mt-4 text-[0.86rem] font-semibold text-cream">{b.step}</h3>
                  <p className="mt-1 text-[0.7rem] leading-snug text-cream/50">{b.note}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <p className="mt-12 text-center text-[0.82rem] italic text-cream/55">
              Choose any one - chutney · flavour · topping. Crafted live, in front of you.
            </p>
          </Reveal>
        </div>
      </section>

      <PaanMenu />

      <section className="bg-forest-deep relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-[900px] px-6 text-center md:px-10">
          <Reveal><span className="eyebrow gold-text">Ready when you are</span></Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-display mx-auto mt-3 max-w-[20ch] text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] text-cream">
              Come taste it, fresh at the counter.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-[52ch] text-[0.95rem] font-light leading-relaxed text-cream/65">
              Walk in to Frizbee Food Park, or order ahead on WhatsApp. Paans start at ₹60.
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
