import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SITE } from '@/data/site'
import { scrollTo } from '@/lib/SmoothScroll'

const EASE = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} id="top" className="grain relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-forest-950">
      <motion.div style={{ y: imgY }} className="absolute inset-0 -z-0 will-change-transform">
        <img
          src="/img/catering/history.jpg"
          alt="Mauli luxury live paan counter at a wedding"
          className="h-[114%] w-full object-cover"
          fetchPriority="high"
        />
        {/* lighter, warmer scrims so the photography breathes */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/35 to-forest-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-950/75 via-forest-950/15 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-[1480px] px-6 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.45 }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-gold-300/80" />
          <span className="eyebrow gold-text">Est. {SITE.since} · Ahmedabad</span>
        </motion.div>

        <h1 className="text-display max-w-[15ch] text-[clamp(2.9rem,8.2vw,7rem)] font-bold leading-[0.96] text-cream">
          {['Tradition meets'].map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.05, ease: EASE, delay: 0.55 + i * 0.1 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.span
              className="gradient-gold block italic"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, ease: EASE, delay: 0.78 }}
            >
              luxury
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1 }}
          className="mt-7 max-w-[46ch] text-[1.05rem] font-light leading-relaxed text-cream/80"
        >
          A premium, Ayurvedic paan house since 1990 - crafted fresh, served as theatre. No tobacco, no supari. Only what's pure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1.12 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo('#explore', -20)}
            data-cursor="grow"
            className="rounded-full bg-gold-300 px-8 py-4 text-[0.82rem] font-medium tracking-wide text-forest-900 shadow-[0_10px_34px_-10px_rgba(216,177,90,0.7)] transition-all duration-500 hover:bg-gold-100"
          >
            Explore Mauli
          </button>
          <Link
            to="/the-paan"
            data-cursor="grow"
            className="group inline-flex items-center gap-2 rounded-full border border-cream/30 px-8 py-4 text-[0.82rem] font-medium tracking-wide text-cream transition-all duration-500 hover:border-gold-300 hover:text-gold-100"
          >
            See the paan
            <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="eyebrow text-[0.55rem] text-cream/45">Scroll</span>
          <div className="h-10 w-px overflow-hidden bg-cream/20">
            <motion.div
              className="h-1/2 w-full bg-gold-300"
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
