import { Link } from 'react-router-dom'
import PageHero from '@/components/PageHero'
import Seo from '@/components/Seo'
import Boxes from '@/sections/Boxes'
import Shop from '@/sections/Shop'
import FAQ from '@/components/FAQ'
import { Reveal, RevealHeading } from '@/lib/motion'
import { SITE, wa, MESSAGES } from '@/data/site'
import { CTA, WhatsAppIcon } from '@/components/WhatsApp'

const WHERE = [
  { label: 'On Zomato', note: 'Order boxes for delivery across Ahmedabad', href: SITE.zomato, cta: 'Open Zomato' },
  { label: 'At the counter', note: 'Pick up fresh from our Frizbee flagship', href: 'https://maps.google.com/?q=Mauli+Family+Paan+House+Frizbee+Food+Park+Ahmedabad', cta: 'Get directions' },
  { label: 'On WhatsApp', note: 'Message us your box, date & area', href: wa(MESSAGES.boxGeneric), cta: 'WhatsApp us' },
]

export default function ShopPage() {
  return (
    <>
      <Seo
        title="Gifts & Shop — Mauli Paan Boxes, Gulkand & Premixes"
        description="Assorted paan gift boxes (on Zomato, at the counter or WhatsApp) plus Kesar Gulkand, Ayu Digest & premixes shipped Pan-India."
      />
      <PageHero
        eyebrow="Gifts & Shop · Ahmedabad + Pan-India"
        title="Gift it."
        accent="Ship it. Savour it."
        blurb="Fresh assorted paan boxes for gifting in Ahmedabad, and our signature Gulkand & premixes shipped anywhere in India."
        image="/img/boxes/boxbanner.png"
      />

      <Boxes />

      {/* where to get the boxes */}
      <section className="bg-forest-deep relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-[1480px] px-6 md:px-10">
          <div className="mb-10 text-center">
            <Reveal><span className="eyebrow gold-text">Three easy ways</span></Reveal>
            <RevealHeading text="Get your boxes, your way." as="h2" className="text-display mx-auto mt-3 max-w-[20ch] text-[clamp(1.7rem,3.6vw,2.8rem)] font-bold leading-[1.1] text-cream" />
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {WHERE.map((w, i) => (
              <Reveal key={w.label} delay={i * 0.08}>
                <a
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="grow"
                  className="group flex h-full flex-col rounded-2xl border border-cream/10 bg-forest-900/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-300/40"
                >
                  <div className="text-display text-2xl font-bold text-cream">{w.label}</div>
                  <p className="mt-2 flex-1 text-[0.84rem] font-light leading-relaxed text-cream/55">{w.note}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-gold-100 transition-transform duration-500 group-hover:translate-x-1">
                    {w.cta} <span>→</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Shop />

      {/* experience invite + map */}
      <section className="bg-forest-emerald grain relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-[1480px] px-6 md:px-10">
          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
            {/* invite */}
            <Reveal>
              <div className="flex h-full flex-col justify-center">
                <span className="eyebrow gold-text">Better still — come visit</span>
                <RevealHeading text="Build your own paan, live." className="text-display mt-3 max-w-[16ch] text-[clamp(1.9rem,4.2vw,3.2rem)] font-bold leading-[1.08] text-cream" />
                <p className="mt-5 max-w-[46ch] text-[0.98rem] font-light leading-relaxed text-cream/65">
                  At our Frizbee flagship — India's first Build-Your-Own Paan Experience — you walk the counter and craft
                  your own, rolled fresh in front of you.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link to="/the-paan" data-cursor="grow" className="inline-flex items-center gap-2 rounded-full bg-gold-300 px-6 py-3 text-[0.8rem] font-medium text-forest-900 transition-all duration-500 hover:bg-gold-100">
                    See the experience <span>→</span>
                  </Link>
                  <CTA href={wa(MESSAGES.visit)} variant="outline" icon={<WhatsAppIcon className="h-4 w-4" />}>Order</CTA>
                </div>
                <div className="mt-8 border-t border-cream/10 pt-6">
                  <div className="eyebrow text-[0.55rem] text-gold-300/70">Find us</div>
                  <p className="mt-2 max-w-[42ch] text-[0.86rem] leading-relaxed text-cream/70">{SITE.address}</p>
                  <a href={`tel:${SITE.phoneRaw}`} className="mt-2 inline-block text-[0.86rem] font-medium text-gold-100">{SITE.phone}</a>
                </div>
              </div>
            </Reveal>

            {/* map */}
            <Reveal y={40}>
              <div className="overflow-hidden rounded-2xl border border-gold-300/20 bg-forest-900 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between border-b border-cream/10 px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gold-300" />
                    <span className="text-[0.78rem] font-semibold text-cream">Frizbee Food Park · SBR Road</span>
                  </div>
                  <span className="text-[0.66rem] text-cream/45">Ahmedabad</span>
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

      <FAQ
        heading="Boxes, shipping & shelf life"
        tone="dark"
        bg="bg-forest-rich"
        items={[
          { q: 'Where can I get the gift boxes?', a: 'Fresh paan boxes are local to Ahmedabad — order on Zomato, pick up at our Frizbee counter, or message us on WhatsApp. (Paan is made fresh, so boxes don’t ship outside the city.)' },
          { q: 'Which products ship Pan-India?', a: 'Our packaged products — Kesar Gulkand, Ayu Digest and the premixes — ship anywhere in India via Delhivery or DTDC, with tracking after dispatch.' },
          { q: 'How long do the products last?', a: 'Kesar Gulkand keeps ~3 months, Ayu Digest ~12 months, premixes several months when sealed and stored cool & dry. Each pack is dated.' },
          { q: 'Can I customise a box or order in bulk?', a: 'Yes — tell us your mix, occasion and quantity on WhatsApp and we’ll tailor it. Popular for festivals and corporate gifting.' },
        ]}
      />
    </>
  )
}
