import { Link } from 'react-router-dom'
import { ScrollFade, Parallax } from '@/lib/motion'
import { FRANCHISE } from '@/data/site'

export default function FranchiseTeaser() {
  return (
    <section className="bg-forest-deep grain relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[5px] border border-gold-300/20">
          <Parallax amount={40} className="absolute inset-0 -z-0 h-full">
            <img src="/img/franchise/counter-closed.jpg" alt="Mauli franchise live paan counter" className="h-[120%] w-full object-cover" loading="lazy" decoding="async" />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-r from-forest-950 via-forest-950/80 to-forest-950/30" />

          <div className="relative z-10 max-w-[640px] px-8 py-16 md:px-16 md:py-24">
            <ScrollFade>
              <span className="eyebrow gold-text">Partner with us</span>
              <h2 className="text-display mt-4 text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.05] text-cream">
                Bring Mauli to <span className="gradient-gold italic">your city.</span>
              </h2>
              <p className="mt-5 max-w-[44ch] text-[0.98rem] font-light leading-relaxed text-cream/70">
                A 35-year legacy, a turnkey live-paan counter, and a dessert loved by every age - from just{' '}
                {FRANCHISE.investment}, with earnings of {FRANCHISE.monthly} a month and ROI in {FRANCHISE.roi}.
              </p>
              <Link
                to="/franchise"
                data-cursor="grow"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-gold-300 px-8 py-4 text-[0.82rem] font-medium tracking-wide text-forest-900 transition-all duration-500 hover:bg-gold-100"
              >
                Explore the franchise <span>→</span>
              </Link>
            </ScrollFade>
          </div>
        </div>
      </div>
    </section>
  )
}
