import { ScrollFade } from '@/lib/motion'
import CountUp from '@/components/CountUp'
import { BRAND_STATS } from '@/data/site'

const CHAPTERS = [
  { year: '1990', place: 'Shirdi', text: 'A single counter near the Sai Baba Mandir - fresh, honest paan, blessed by the town that named us.' },
  { year: '2017', place: 'Pune', text: 'We carried the recipe west and became the city’s most-loved paan - rated No.1 in the “What’s Hot” survey.' },
  { year: 'Today', place: 'India', text: '11+ outlets across Maharashtra & Gujarat, 211+ varieties, and a flagship paan-dessert house in Ahmedabad.' },
]

/** Brand meaning + belief + heritage, merged into one continuous panel. */
export default function HomeStory() {
  return (
    <section className="bg-forest-rich grain relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute -right-16 top-24 opacity-[0.05]">
        <svg width="420" height="420" viewBox="0 0 24 24" fill="none">
          <path d="M4 20C3 11 9 3.5 20 3c.5 7.5-3 16.5-13 16.9C6 19.95 5 20 4 20Z" fill="#fff" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 md:px-10">
        {/* meaning + belief */}
        <ScrollFade className="text-center">
          <span className="eyebrow gold-text">माऊली</span>
          <p className="text-display mx-auto mt-6 max-w-[24ch] text-[clamp(1.5rem,3.4vw,2.5rem)] font-medium leading-[1.32] text-cream">
            In Marathi, <span className="gradient-gold italic">Mauli</span> means mother - protector, blessing, the hand
            that nurtures. It's the spirit we fold into every paan.
          </p>
          <p className="text-display mx-auto mt-10 max-w-[20ch] text-[clamp(1.8rem,4.6vw,3.2rem)] font-bold italic leading-[1.15] text-cream">
            “Dinner is not complete without a <span className="gradient-gold not-italic">paan.</span>”
          </p>
        </ScrollFade>

        {/* heritage timeline - horizontal, chapters side by side */}
        <ScrollFade className="mt-20">
          <div className="relative grid gap-10 sm:grid-cols-3 sm:gap-6">
            {/* connecting line (desktop) */}
            <div className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-[7px] hidden h-px bg-gradient-to-r from-gold-300/60 via-gold-400/60 to-gold-300/40 sm:block" />
            {CHAPTERS.map((c) => (
              <div key={c.year} className="relative sm:pt-8 sm:text-center">
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-forest-800 bg-gold-300 sm:left-1/2 sm:top-0 sm:-translate-x-1/2" />
                <div className="pl-7 sm:pl-0">
                  <div className="text-display text-3xl font-bold gold-text">{c.year}</div>
                  <div className="eyebrow mt-1 text-[0.55rem] text-cream/50">{c.place}</div>
                  <p className="mx-auto mt-3 max-w-[34ch] text-[0.88rem] font-light leading-relaxed text-cream/70">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollFade>

        {/* stats */}
        <ScrollFade className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-cream/10 pt-12 md:grid-cols-4">
          {BRAND_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <CountUp value={s.k} className="text-display block text-4xl font-bold gold-text md:text-5xl" />
              <div className="mt-2 text-[0.82rem] font-medium text-cream">{s.label}</div>
              <div className="text-[0.7rem] text-cream/45">{s.note}</div>
            </div>
          ))}
        </ScrollFade>
      </div>
    </section>
  )
}
