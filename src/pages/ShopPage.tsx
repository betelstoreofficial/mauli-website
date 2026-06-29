import PageHero from '@/components/PageHero'
import Seo from '@/components/Seo'
import Shop from '@/sections/Shop'
import FAQ from '@/components/FAQ'
import { Reveal } from '@/lib/motion'

const PROMISE = [
  { k: 'Pan-India', l: 'Shipped anywhere' },
  { k: 'Fresh-packed', l: 'Sealed on order' },
  { k: '2–6 days', l: 'Delhivery / DTDC' },
  { k: 'Tracked', l: 'Link after dispatch' },
]

export default function ShopPage() {
  return (
    <>
      <Seo title="Shop - Mauli Kesar Gulkand, Ayu Digest & Premixes (Pan-India)" description="Buy Mauli Kesar Rose Gulkand, Ayu Digest (16 Ayurvedic herbs) and signature premixes - packed fresh, shipped anywhere in India." />
      <PageHero
        eyebrow="Ships Pan-India"
        title="The Mauli"
        accent="Shop"
        blurb="The same ingredients folded into every Mauli paan - Kesar Gulkand, Ayu Digest and our signature premixes - packed fresh and delivered anywhere in India."
        image="/img/products/shop.png"
      />

      {/* shipping promise strip */}
      <section className="bg-forest-deep relative overflow-hidden py-10">
        <div className="mx-auto grid max-w-[1480px] grid-cols-2 gap-6 px-6 md:grid-cols-4 md:px-10">
          {PROMISE.map((p, i) => (
            <Reveal key={p.l} delay={i * 0.06}>
              <div className="text-center">
                <div className="text-display text-2xl font-bold gold-text">{p.k}</div>
                <div className="mt-1 text-[0.74rem] text-cream/60">{p.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Shop />

      <FAQ
        heading="Shipping & shelf life"
        tone="dark"
        bg="bg-forest-rich"
        items={[
          { q: 'How long do the products last?', a: 'Kesar Gulkand keeps ~3 months, Ayu Digest ~12 months, and the premixes several months when sealed and stored cool & dry. Each pack is dated.' },
          { q: 'Where do you ship and how long does it take?', a: 'Anywhere in India via Delhivery or DTDC - typically 2–6 days depending on your pincode. Tracking is shared after dispatch.' },
          { q: 'How are shipping charges calculated?', a: 'At actuals by weight and location (roughly ₹60–180). We confirm the exact amount on WhatsApp before dispatch.' },
          { q: 'Can I gift these or buy in bulk?', a: 'Yes - the 250g gift-ready premixes and larger Gulkand jars are popular for gifting. Message us for bulk or corporate orders.' },
        ]}
      />
    </>
  )
}
