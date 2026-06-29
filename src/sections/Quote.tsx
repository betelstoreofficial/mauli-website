import { motion } from 'framer-motion'

export default function Quote() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="text-display absolute -left-6 -top-10 text-[18rem] leading-none text-gold-300">“</div>
      </div>
      <div className="relative mx-auto max-w-[1000px] px-6 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display text-[clamp(1.5rem,3.4vw,2.6rem)] font-medium italic leading-[1.3] text-cream"
        >
          “The paan that began in <span className="gradient-gold not-italic">1990</span> - folded by hand, finished
          like a jewel, and never once the same as anywhere else.”
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-7 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-gold-300/60" />
          <span className="eyebrow text-[0.6rem] text-gold-200/80">The Mauli Family</span>
          <span className="h-px w-8 bg-gold-300/60" />
        </motion.div>
      </div>
    </section>
  )
}
