import { SITE, wa, MESSAGES } from '@/data/site'
import { Reveal, RevealHeading, Parallax } from '@/lib/motion'
import { CTA, WhatsAppIcon } from '@/components/WhatsApp'

/** `image` lets the page override the photo so it never repeats the page hero. */
export default function Visit({ image = '/img/franchise/visit.jpg' }: { image?: string }) {
  return (
    <section id="visit" className="bg-cream-rich relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-[1480px] items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-16">
        {/* text — left */}
        <div>
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-500/60" />
              <span className="eyebrow text-gold-600">Visit the Counter</span>
            </div>
          </Reveal>
          <RevealHeading
            text="Come taste it fresh."
            className="text-display text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.04] text-ink"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[46ch] text-[1rem] font-light leading-relaxed text-ink-soft">
              Watch your paan made to order — Fire Paan theatre, gulkand shakes, the full live experience. Walk in, or
              order ahead for local delivery & pickup across Ahmedabad.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-9 grid gap-5 sm:grid-cols-3">
              <div className="sm:col-span-3">
                <div className="eyebrow text-[0.55rem] text-gold-600">Find us</div>
                <p className="mt-2 max-w-[42ch] text-[0.86rem] leading-relaxed text-ink-soft">{SITE.address}</p>
              </div>
              <div>
                <div className="eyebrow text-[0.55rem] text-gold-600">Call / WhatsApp</div>
                <a href={`tel:${SITE.phoneRaw}`} className="mt-2 block text-[0.84rem] text-ink-soft hover:text-forest-600">{SITE.phone}</a>
              </div>
              <div>
                <div className="eyebrow text-[0.55rem] text-gold-600">Instagram</div>
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="mt-2 block text-[0.84rem] text-ink-soft hover:text-forest-600">{SITE.instagramHandle}</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-4">
              <CTA href={wa(MESSAGES.visit)} variant="wa" icon={<WhatsAppIcon className="h-4 w-4" />}>
                Order on WhatsApp
              </CTA>
              <CTA
                href="https://maps.google.com/?q=Mauli+Family+Paan+House+Frizbee+Food+Park+Ahmedabad"
                variant="outline"
                className="!border-gold-500/50 !text-gold-600 hover:!bg-gold-500/5"
              >
                Get directions
              </CTA>
            </div>
          </Reveal>
        </div>

        {/* image — right */}
        <Reveal y={40}>
          <Parallax amount={30} className="aspect-[4/5] overflow-hidden rounded-[3px] border border-gold-500/15 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.5)]">
            <img
              src={image}
              alt="Mauli Family Paan House — fresh paan at the counter"
              className="h-[110%] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </Parallax>
        </Reveal>
      </div>
    </section>
  )
}
