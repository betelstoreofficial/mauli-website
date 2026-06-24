import PageHero from '@/components/PageHero'
import Seo from '@/components/Seo'
import Catering from '@/sections/Catering'
import Steps from '@/components/Steps'
import { Reveal, RevealHeading } from '@/lib/motion'

const GALLERY = [
  '/img/catering/counter.jpg',
  '/img/catering/signature.jpeg',
  '/img/catering/celebration.jpg',
  '/img/catering/live.jpg',
  '/img/catering/cat1.jpg',
  '/img/catering/cat3.jpg',
]

export default function CateringPage() {
  return (
    <>
      <Seo title="Catering — Mauli Live Paan & Dessert Counter for Weddings & Events" description="Premium live paan & dessert catering for weddings, banquets and corporates in Ahmedabad. Three packages from ₹70/guest, turnkey setup, trained staff." />
      <PageHero
        eyebrow="Weddings · Banquets · Corporate"
        title="We don't just serve."
        accent="We impress."
        blurb="A premium live paan & dessert experience — editorial presentation, uniformed staff, turnkey setup. Choose a package or craft something bespoke."
        image="/img/catering/catering-banner.jpg"
      />

      <Catering showBanner={false} />

      <Steps
        eyebrow="How it works"
        heading="From enquiry to standing ovation."
        tone="light"
        bg="bg-cream-rich"
        steps={[
          { title: 'Share your event', text: 'WhatsApp us your date, venue, guest count and the vibe you’re after.' },
          { title: 'Pick a package', text: 'Classic, Celebration or Grand — or we’ll craft a bespoke menu & quote.' },
          { title: 'We set up', text: 'Our team arrives, builds the live counter and styles it — zero burden on you.' },
          { title: 'Live service', text: 'Uniformed staff fold paan fresh through the night. We arrive, dazzle, and leave clean.' },
        ]}
      />

      {/* gallery */}
      <section className="bg-forest-rich relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto max-w-[1480px] px-6 md:px-10">
          <div className="mb-10 text-center">
            <Reveal><span className="eyebrow gold-text">Real events</span></Reveal>
            <RevealHeading text="Setups our guests still talk about." as="h2" className="text-display mx-auto mt-3 max-w-[20ch] text-[clamp(1.7rem,3.6vw,2.8rem)] font-bold leading-[1.1] text-cream" />
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {GALLERY.map((src, i) => (
              <Reveal key={src} delay={(i % 3) * 0.07}>
                <div className="aspect-[4/3] overflow-hidden rounded-[3px] border border-cream/10">
                  <img src={src} alt="Mauli paan catering setup" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
