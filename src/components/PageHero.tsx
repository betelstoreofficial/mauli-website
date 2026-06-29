import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const EASE = [0.16, 1, 0.3, 1] as const

export default function PageHero({
  eyebrow,
  title,
  accent,
  blurb,
  image,
  background,
}: {
  eyebrow: string
  title: string
  accent?: string
  blurb?: string
  image?: string
  background?: ReactNode
}) {
  return (
    <section className="grain relative flex h-[58svh] min-h-[420px] w-full items-end overflow-hidden bg-forest-950">
      {background ? (
        background
      ) : (
        <div className="absolute inset-0">
          <img src={image} alt="" className="h-full w-full object-cover" fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/40 to-forest-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950/70 to-transparent" />
        </div>
      )}

      <div className="relative z-10 mx-auto w-full max-w-[1480px] px-6 pb-14 md:px-10 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="mb-4 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-gold-300/80" />
          <span className="eyebrow gold-text">{eyebrow}</span>
        </motion.div>
        <h1 className="text-display max-w-[16ch] text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[0.98] text-cream">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 0.25 }}
            >
              {title} {accent && <span className="gradient-gold italic">{accent}</span>}
            </motion.span>
          </span>
        </h1>
        {blurb && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
            className="mt-5 max-w-[52ch] text-[1rem] font-light leading-relaxed text-cream/75"
          >
            {blurb}
          </motion.p>
        )}
      </div>
    </section>
  )
}
