import { ScrollFade, Parallax } from '@/lib/motion'

const NOTES = [
  { k: '16', label: 'Ayurvedic herbs', note: 'for digestion & gut health' },
  { k: '18', label: 'Natural ingredients', note: 'gulkand, dry fruits, syrups' },
  { k: '0', label: 'Tobacco & supari', note: 'pure, always - since day one' },
]

export default function HomeCraft() {
  return (
    <section className="bg-cream-rich relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-[1480px] items-center gap-12 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        <ScrollFade>
          <span className="eyebrow text-gold-600">Indulgence with a soul</span>
          <h2 className="text-display mt-3 max-w-[15ch] text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.06] text-ink">
            Sweet like dessert. <span className="ink-gold italic">Kind like medicine.</span>
          </h2>
          <p className="mt-6 max-w-[50ch] text-[1rem] font-light leading-relaxed text-ink-soft">
            Every Mauli paan is built to be a guilt-free finish to your meal - Ayurvedic herbs that aid digestion,
            natural ingredients that delight, and not a trace of tobacco. Tradition, reimagined for how we eat today.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6">
            {NOTES.map((n) => (
              <div key={n.label} className="border-t border-gold-500/25 pt-4">
                <div className="text-display text-4xl font-bold text-forest-600">{n.k}</div>
                <div className="mt-1 text-[0.78rem] font-medium text-ink">{n.label}</div>
                <div className="text-[0.68rem] leading-snug text-muted">{n.note}</div>
              </div>
            ))}
          </div>
        </ScrollFade>

        <ScrollFade lift={40}>
          <div className="relative">
            <Parallax amount={28} className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_30px_70px_-40px_rgba(0,0,0,0.5)]">
              <img src="/img/catering/signature.png" alt="Mauli paan, handcrafted and finished with silver varakh" className="h-[110%] w-full object-cover" loading="lazy" decoding="async" />
            </Parallax>
            <div className="absolute -bottom-6 -left-6 hidden border border-gold-500/30 bg-cream px-7 py-5 shadow-xl md:block">
              <div className="text-display text-2xl font-bold italic text-forest-700">Handcrafted</div>
              <div className="eyebrow mt-1 text-[0.55rem] text-gold-600">Live · Fresh · Every time</div>
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
