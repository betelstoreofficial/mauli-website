import PageHero from '@/components/PageHero'
import Seo from '@/components/Seo'
import Boxes from '@/sections/Boxes'
import Steps from '@/components/Steps'
import FAQ from '@/components/FAQ'
import { Reveal } from '@/lib/motion'

const OCCASIONS = ['Diwali & Festivals', 'Weddings', 'Corporate Gifting', 'House Parties', 'Return Favours', 'Just Because']

export default function GiftBoxesPage() {
  return (
    <>
      <Seo title="Gift Boxes - Mauli Family Paan House" description="Curated assorted paan gift boxes, 4 to 20 pieces, from ₹199 - for festivals, parties and corporate gifting across Ahmedabad. Hand-made fresh." />
      <PageHero
        eyebrow="Gift & Share"
        title="Assorted"
        accent="Gift Boxes"
        blurb="Curated boxes of fresh-folded paan - from a 4-piece taster to a 20-piece centrepiece - for festivals, parties and corporate gifting across Ahmedabad."
        image="/img/catering/boxbanner.png"
      />

      {/* occasions */}
      <section className="bg-forest-deep relative overflow-hidden py-12">
        <div className="mx-auto flex max-w-[1480px] flex-wrap items-center justify-center gap-2.5 px-6 md:px-10">
          <Reveal><span className="eyebrow mr-2 text-gold-200/70">Perfect for</span></Reveal>
          {OCCASIONS.map((o) => (
            <span key={o} className="rounded-full border border-gold-300/25 bg-forest-800/40 px-4 py-2 text-[0.74rem] font-medium text-cream/80">
              {o}
            </span>
          ))}
        </div>
      </section>

      <Boxes />

      <Steps
        eyebrow="How gifting works"
        heading="Three steps to a thoughtful gift."
        tone="light"
        bg="bg-cream-rich"
        steps={[
          { title: 'Pick a box', text: 'Choose Discovery, Family, Signature or Grand - or ask us for a custom mix.' },
          { title: 'WhatsApp us', text: 'Tap any box to message us your date, quantity and delivery area in Ahmedabad.' },
          { title: 'Made fresh', text: 'We hand-fold every paan the same day, beautifully boxed and ready to gift.' },
          { title: 'Delivered', text: 'Local delivery or counter pickup across Ahmedabad - fresh and on time.' },
        ]}
      />

      <FAQ
        heading="Gift box questions"
        tone="dark"
        bg="bg-forest-rich"
        items={[
          { q: 'Can I customise the paan inside a box?', a: 'Yes - tell us your preferences on WhatsApp (more chocolate, no chutney, extra dry-fruit) and we’ll tailor the mix.' },
          { q: 'How far in advance should I order?', a: 'Same-day is often possible, but for large festival or corporate orders we recommend 24–48 hours notice.' },
          { q: 'Do you deliver outside Ahmedabad?', a: 'Fresh paan boxes are local to Ahmedabad for now (delivery & pickup). For Pan-India, see our shippable products in the Shop.' },
          { q: 'Is everything tobacco-free?', a: 'Always. Every Mauli paan is 100% tobacco-free, supari-free and made with 16 Ayurvedic herbs.' },
        ]}
      />
    </>
  )
}
