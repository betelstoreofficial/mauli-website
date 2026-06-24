import { Reveal, RevealHeading, Parallax } from '@/lib/motion'

const PILLARS = [
  { k: '16', label: 'Ayurvedic herbs', note: 'in every blend' },
  { k: '18', label: 'Premium condiments', note: 'hand-layered' },
  { k: '1990', label: 'Crafting since', note: 'three decades on' },
  { k: '0', label: 'Tobacco & supari', note: 'pure, always' },
]

export default function Story() {
  return (
    <section id="craft" className="bg-cream-rich relative overflow-hidden py-24 md:py-36">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 md:px-10 lg:grid-cols-2 lg:gap-20">
        {/* text */}
        <div>
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gold-500/60" />
              <span className="eyebrow text-gold-600">The Craft</span>
            </div>
          </Reveal>
          <RevealHeading
            text="Not a paan counter. A house of craft."
            className="text-display max-w-[14ch] text-[clamp(2rem,4.5vw,3.4rem)] font-bold leading-[1.05] text-ink"
          />
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-[52ch] text-[1.02rem] font-light leading-relaxed text-ink-soft">
              Every Mauli paan is folded to order, in front of you - a quiet ritual of leaf, gulkand, dry fruit and silver
              varakh. Rooted in Ayurveda, made for wellness, finished like a jewel. It's the same paan that began in 1990,
              now crafted for India's finest weddings, gifts and celebrations.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.label} delay={i * 0.08}>
                <div className="border-t border-gold-500/25 pt-4">
                  <div className="text-display text-4xl font-bold text-forest-700">{p.k}</div>
                  <div className="mt-1 text-[0.82rem] font-medium text-ink">{p.label}</div>
                  <div className="text-[0.72rem] text-muted">{p.note}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* image */}
        <Reveal y={40}>
          <div className="relative">
            <Parallax amount={28} className="aspect-[4/5] overflow-hidden rounded-[2px]">
              <img
                src="/img/catering/signature.jpeg"
                alt="Mauli signature paan presentation"
                className="h-[110%] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </Parallax>
            <div className="absolute -bottom-6 -left-6 hidden border border-gold-500/30 bg-cream px-7 py-5 shadow-xl md:block">
              <div className="text-display text-2xl font-bold italic text-forest-700">Handcrafted</div>
              <div className="eyebrow mt-1 text-[0.55rem] text-gold-600">Live · Fresh · Every time</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
