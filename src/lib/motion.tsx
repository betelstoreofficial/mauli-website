import { useRef, type ReactNode, type ElementType } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

/** Fade + rise reveal on enter. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12% 0px' }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

/** Stagger container + child for lists. */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

/** Word-by-word display heading reveal (line-mask feel). */
export function RevealHeading({
  text,
  className,
  as: As = 'h2',
}: {
  text: string
  className?: string
  as?: ElementType
}) {
  const words = text.split(' ')
  return (
    <As className={className}>
      <motion.span
        style={{ display: 'inline' }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ staggerChildren: 0.055 }}
      >
        {words.map((w, i) => (
          <span
            key={i}
            style={{
              display: 'inline-block',
              overflow: 'hidden',
              verticalAlign: 'top',
              paddingBottom: '0.16em',
              marginBottom: '-0.16em',
            }}
          >
            <motion.span
              style={{ display: 'inline-block' }}
              variants={{
                hidden: { y: '110%' },
                show: { y: 0, transition: { duration: 0.85, ease: EASE } },
              }}
            >
              {w}
              {i < words.length - 1 ? ' ' : ''}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </As>
  )
}

/** Scroll-linked vertical parallax for images. */
export function Parallax({
  children,
  amount = 80,
  className,
}: {
  children: ReactNode
  amount?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-amount, amount])
  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y, height: '100%', willChange: 'transform' }}>{children}</motion.div>
    </div>
  )
}

/** Content that fades + lifts in as it enters the viewport and fades + lifts out as it leaves -
 *  the "appear and disappear on scroll" behaviour for a single-narrative homepage. */
export function ScrollFade({
  children,
  className,
  lift = 60,
}: {
  children: ReactNode
  className?: string
  lift?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.92', 'end 0.08'] })
  const opacity = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.22, 0.78, 1], [lift, 0, 0, -lift])
  return (
    <motion.div ref={ref} style={{ opacity, y, willChange: 'transform, opacity' }} className={className}>
      {children}
    </motion.div>
  )
}
