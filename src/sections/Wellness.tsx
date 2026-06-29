import { useState } from 'react'
import { motion } from 'framer-motion'
import { INGREDIENTS } from '@/data/site'
import { Reveal, RevealHeading } from '@/lib/motion'
import Botanical from '@/components/Botanical'

const EASE = [0.16, 1, 0.3, 1] as const

/** The wellness ritual - Ayurvedic ingredient board. Hover/tap a herb to reveal its benefit. */
export default function Wellness() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-forest-emerald grain relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-[1100px] px-6 text-center md:px-10">
        <Reveal>
          <span className="eyebrow gold-text">Indulgence with a soul</span>
        </Reveal>
        <RevealHeading
          text="A dessert that loves you back."
          as="h2"
          className="text-display mx-auto mt-3 max-w-[18ch] text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[1.08] text-cream"
        />
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-[54ch] text-[0.96rem] font-light leading-relaxed text-cream/65">
            Sixteen Ayurvedic herbs and eighteen natural ingredients, folded into every paan - to cool, calm and aid
            digestion. Sweet like a treat, kind like medicine.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <Botanical className="my-10" />
        </Reveal>

        {/* ingredient board */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {INGREDIENTS.map((ing, i) => (
            <motion.button
              key={ing.name}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              data-cursor="grow"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-6% 0px' }}
              transition={{ duration: 0.6, ease: EASE, delay: (i % 4) * 0.06 }}
              className={`group relative flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl border p-4 text-center transition-all duration-500 ${
                active === i
                  ? 'border-gold-300/60 bg-forest-700/60'
                  : 'border-cream/10 bg-forest-800/40 hover:border-gold-300/30'
              }`}
            >
              <span className="text-3xl transition-transform duration-500 group-hover:scale-110">{ing.emoji}</span>
              <span className="text-[0.82rem] font-semibold text-cream">{ing.name}</span>
            </motion.button>
          ))}
        </div>

        {/* benefit readout */}
        <Reveal delay={0.1}>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="mx-auto mt-8 flex max-w-[44ch] items-center justify-center gap-3 rounded-full border border-gold-300/20 bg-forest-900/50 px-6 py-3"
          >
            <span className="text-xl">{INGREDIENTS[active].emoji}</span>
            <span className="text-[0.88rem] text-cream/80">
              <span className="font-semibold text-gold-100">{INGREDIENTS[active].name}</span> - {INGREDIENTS[active].benefit}
            </span>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
