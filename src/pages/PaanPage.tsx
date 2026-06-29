import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'
import Seo from '@/components/Seo'
import Story from '@/sections/Story'
import PaanMenu from '@/sections/PaanMenu'
import { Reveal, RevealHeading } from '@/lib/motion'
import { SITE, wa, MESSAGES } from '@/data/site'
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
        image="/img/catering/hero.jpeg"
      />
      <Story />

      {/* build your own paan — the experience (video) */}
      <section className="bg-forest-emerald grain relative overflow-hidden py-24 md:py-32">
        <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full bg-gold-400/8 blur-[130px]" />
        <div className="relative mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mx-auto mb-12 max-w-[40ch] text-center">
            <Reveal><span className="eyebrow gold-text">The Experience · Make it yours · ₹149</span></Reveal>
            <RevealHeading text="Build your own paan, live." as="h2" className="text-display mx-auto mt-3 max-w-[18ch] text-[clamp(1.9rem,4.4vw,3.3rem)] font-bold leading-[1.08] text-cream" />
            <Reveal delay={0.1}>
              <p className="mt-5 text-[0.98rem] font-light leading-relaxed text-cream/65">
                At our Ahmedabad flagship — India's first <span className="text-gold-100">Build-Your-Own Paan Experience</span> — you walk the counter and compose your own: pick the leaf, the chutney, the filling, a fruit crush and the finishing touches, all rolled fresh in front of you.
              </p>
            </Reveal>
          </div>

          {/* video */}
          <Reveal y={40}>
            <div className="relative overflow-hidden rounded-2xl border border-gold-300/20 shadow-[0_40px_90px_-45px_rgba(0,0,0,0.7)]">
              <video
                className="aspect-video w-full object-cover"
                poster="/img/franchise/visit.jpg"
                autoPlay
                muted
                loop
                playsInline
                controls
              >
                <source src="/video/build-your-own.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>

          {/* steps */}
          <div className="relative mt-14">
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
                  transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
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
            <div className="mt-14 flex flex-col items-center gap-4 text-center">
              <p className="text-[0.84rem] text-cream/55">
                Visit us at <span className="text-cream">{SITE.shortAddress}</span> — or order ahead.
              </p>
              <CTA href={wa(MESSAGES.visit)} variant="wa" icon={<WhatsAppIcon className="h-4 w-4" />}>
                Order on WhatsApp
              </CTA>
            </div>
          </Reveal>
        </div>
      </section>

      <PaanMenu />
    </>
  )
}
