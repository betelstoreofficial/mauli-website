import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SITE, wa, MESSAGES } from '@/data/site'
import { scrollTo } from '@/lib/SmoothScroll'
import { WhatsAppIcon } from '@/components/WhatsApp'

const EASE = [0.16, 1, 0.3, 1] as const
const LEAF = 'M4 20C3 11 9 3.5 20 3c.5 7.5-3 16.5-13 16.9C6 19.95 5 20 4 20Z'

const DRIFT = [
  { x: 6, y: 16, s: 70, d: 11, delay: 0, o: 0.12, r: -18 },
  { x: 86, y: 20, s: 96, d: 13, delay: 1.4, o: 0.1, r: 20 },
  { x: 78, y: 70, s: 60, d: 10, delay: 0.6, o: 0.12, r: 28 },
  { x: 12, y: 64, s: 50, d: 9, delay: 1.1, o: 0.13, r: 12 },
]

/** Full-canvas cinematic hero - paan reimagined as a healthy dessert. */
export default function HeroCanvas() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yContent = useTransform(scrollYProgress, [0, 1], ['0%', '38%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const paanY = useTransform(scrollYProgress, [0, 1], ['0%', '-22%'])
  const paanScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])

  return (
    <section ref={ref} id="top" className="grain relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden bg-forest-emerald">
      {/* ambient glows */}
      <motion.div
        className="pointer-events-none absolute -left-1/4 top-0 h-[120%] w-[80%] rounded-full bg-gold-400/12 blur-[140px]"
        animate={{ x: ['-4%', '16%', '-4%'] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute -right-1/4 bottom-0 h-[110%] w-[70%] rounded-full bg-forest-400/18 blur-[150px]"
        animate={{ x: ['6%', '-12%', '6%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* drifting leaves */}
      {DRIFT.map((l, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 24 24"
          className="pointer-events-none absolute"
          style={{ left: `${l.x}%`, top: `${l.y}%`, width: l.s, height: l.s, color: '#7bc88a', opacity: l.o }}
          fill="currentColor"
          initial={{ rotate: l.r }}
          animate={{ y: [0, -26, 0], x: [0, 12, 0], rotate: [l.r, l.r + 14, l.r] }}
          transition={{ duration: l.d, repeat: Infinity, ease: 'easeInOut', delay: l.delay }}
        >
          <path d={LEAF} />
        </motion.svg>
      ))}

      {/* floating paan image (parallax) */}
      <motion.div
        style={{ y: paanY, scale: paanScale }}
        className="pointer-events-none absolute right-[1%] top-1/2 hidden h-[68vh] w-[46vw] -translate-y-1/2 lg:block"
      >
        <motion.img
          src="/img/products/shop.png"
          alt=""
          className="h-full w-full rounded-full object-cover opacity-90 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]"
          animate={{ y: [0, -16, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 rounded-full ring-1 ring-gold-300/20" />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-forest-950/85 via-forest-950/55 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-forest-950/40" />

      {/* content */}
      <motion.div style={{ y: yContent, opacity }} className="relative z-10 mx-auto w-full max-w-[1480px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.4 }}
          className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2"
        >
          <span className="h-px w-10 bg-gold-300/80" />
          <span className="eyebrow gold-text">Ayurvedic · Tobacco-free · Since {SITE.since}</span>
        </motion.div>

        <h1 className="text-display max-w-[15ch] text-[clamp(3rem,9vw,7.5rem)] font-bold leading-[0.94] text-cream">
          {['Paan,', 'reimagined as'].map((line, i) => (
            <span key={i} className="block overflow-hidden pb-[0.08em]">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.05, ease: EASE, delay: 0.5 + i * 0.1 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span
              className="gradient-gold block italic"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, ease: EASE, delay: 0.72 }}
            >
              dessert
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.95 }}
          className="mt-7 max-w-[44ch] text-[1.05rem] font-light leading-relaxed text-cream/75"
        >
          Sixteen Ayurvedic herbs, zero tobacco - the guilt-free way to close every meal. Handcrafted fresh, the way
          Mauli has since 1990.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1.1 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo('#belief', -10)}
            data-cursor="grow"
            className="rounded-full bg-gold-300 px-8 py-4 text-[0.82rem] font-medium tracking-wide text-forest-900 shadow-[0_10px_34px_-10px_rgba(216,177,90,0.7)] transition-all duration-500 hover:bg-gold-100"
          >
            Discover Mauli
          </button>
          <a
            href={wa(MESSAGES.visit)}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="grow"
            className="group inline-flex items-center gap-2.5 rounded-full border border-cream/30 px-7 py-4 text-[0.82rem] font-medium tracking-wide text-cream transition-all duration-500 hover:border-gold-300 hover:text-gold-100"
          >
            <WhatsAppIcon className="h-4 w-4" /> Order now
          </a>
        </motion.div>

        <Link to="/the-paan" className="sr-only">See the paan</Link>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="eyebrow text-[0.55rem] text-cream/45">Scroll</span>
          <div className="h-10 w-px overflow-hidden bg-cream/20">
            <motion.div className="h-1/2 w-full bg-gold-300" animate={{ y: ['-100%', '200%'] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }} />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
