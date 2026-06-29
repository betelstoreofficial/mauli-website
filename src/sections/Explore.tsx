import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Reveal, RevealHeading } from '@/lib/motion'

const EASE = [0.16, 1, 0.3, 1] as const

const PATHS = [
  {
    to: '/shop',
    eyebrow: 'Gift & Shop',
    title: 'Gift Boxes & Shop',
    blurb: 'Assorted paan boxes, Kesar Gulkand & premixes — on Zomato, at the counter, or shipped across India.',
    meta: 'From ₹199',
    image: '/img/boxes/12signature.png',
  },
  {
    to: '/catering',
    eyebrow: 'Weddings & Events',
    title: 'Luxury Catering',
    blurb: 'A premium live paan & dessert counter for weddings, banquets and corporates — turnkey & editorial.',
    meta: 'From ₹69 / guest',
    image: '/img/catering/catering-banner.jpg',
  },
  {
    to: '/franchise',
    eyebrow: 'Partner with us',
    title: 'Own a Mauli',
    blurb: 'From a movable counter to a flagship Build-Your-Own Paan experience store — a 35-year legacy, now yours.',
    meta: 'From ₹5 lakh',
    image: '/img/franchise/visit.jpg',
  },
]

export default function Explore() {
  return (
    <section id="explore" className="bg-forest-emerald grain relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="mb-14 text-center">
          <Reveal>
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-gold-300/50" />
              <span className="eyebrow gold-text">Three ways to enjoy Mauli</span>
              <span className="h-px w-10 bg-gold-300/50" />
            </div>
          </Reveal>
          <RevealHeading
            text="Choose your indulgence."
            as="h2"
            className="text-display mx-auto text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.05] text-cream"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {PATHS.map((p, i) => (
            <motion.div
              key={p.to}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
            >
              <Link
                to={p.to}
                data-cursor="grow"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-cream/10 bg-forest-800/60 transition-all duration-500 hover:-translate-y-1 hover:border-gold-300/40 hover:shadow-[0_28px_60px_-26px_rgba(0,0,0,0.7)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-forest-950/70 px-3 py-1 text-[0.56rem] font-semibold uppercase tracking-wider text-gold-100 backdrop-blur-sm">
                    {p.eyebrow}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-display text-2xl font-bold text-cream">{p.title}</h3>
                  <p className="mt-2.5 flex-1 text-[0.82rem] leading-relaxed text-cream/60">{p.blurb}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-cream/10 pt-4">
                    <span className="text-[0.72rem] font-medium text-gold-200">{p.meta}</span>
                    <span className="inline-flex items-center gap-1.5 text-[0.78rem] font-medium text-gold-100 transition-transform duration-500 group-hover:translate-x-1">
                      Explore <span>→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
