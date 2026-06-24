import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ScrollFade } from '@/lib/motion'
import { BRAND_STATS } from '@/data/site'

const CHAPTERS = [
  { year: '1990', place: 'Shirdi', text: 'It began as a single counter near the Sai Baba Mandir - fresh, honest paan, blessed by the town that named us.' },
  { year: '2017', place: 'Pune', text: 'We carried the recipe west and became the city’s most-loved paan - rated No.1 in the “What’s Hot” survey.' },
  { year: 'Today', place: 'India', text: '11+ outlets across Maharashtra & Gujarat, 211+ varieties, and a flagship paan-dessert house in Ahmedabad.' },
]

export default function HomeHeritage() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const lineH = useTransform(scrollYProgress, [0.05, 0.85], ['0%', '100%'])

  return (
    <section ref={ref} className="bg-forest-emerald relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-[1100px] px-6 md:px-10">
        <ScrollFade className="mb-16 text-center">
          <span className="eyebrow gold-text">Our heritage</span>
          <h2 className="text-display mx-auto mt-3 max-w-[16ch] text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.08] text-cream">
            Thirty-five years, folded by hand.
          </h2>
        </ScrollFade>

        {/* timeline */}
        <div className="relative mx-auto max-w-[680px] pl-10 md:pl-0">
          <div className="absolute left-[7px] top-0 h-full w-px bg-cream/12 md:left-1/2 md:-translate-x-1/2">
            <motion.div style={{ height: lineH }} className="w-full bg-gradient-to-b from-gold-300 to-gold-500" />
          </div>

          {CHAPTERS.map((c, i) => (
            <ScrollFade key={c.year} className={`relative mb-14 md:w-1/2 ${i % 2 ? 'md:ml-auto md:pl-12' : 'md:pr-12 md:text-right'}`}>
              <span className={`absolute top-1.5 h-3.5 w-3.5 rounded-full border-2 border-forest-emerald bg-gold-300 -left-[34px] md:left-auto ${i % 2 ? 'md:-left-[6px]' : 'md:-right-[6px]'}`} />
              <div className="text-display text-3xl font-bold gold-text">{c.year}</div>
              <div className="eyebrow mt-1 text-[0.55rem] text-cream/50">{c.place}</div>
              <p className="mt-3 text-[0.92rem] font-light leading-relaxed text-cream/70">{c.text}</p>
            </ScrollFade>
          ))}
        </div>

        {/* stats */}
        <ScrollFade className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-cream/10 pt-12 md:grid-cols-4">
          {BRAND_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-display text-4xl font-bold gold-text md:text-5xl">{s.k}</div>
              <div className="mt-2 text-[0.82rem] font-medium text-cream">{s.label}</div>
              <div className="text-[0.7rem] text-cream/45">{s.note}</div>
            </div>
          ))}
        </ScrollFade>
      </div>
    </section>
  )
}
