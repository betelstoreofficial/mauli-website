import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/** Counts up to a number when scrolled into view. Keeps any prefix/suffix (e.g. "+", "★", "₹"). */
export default function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState('0')

  // split into leading number and the rest (e.g. "211+" -> 211 / "+", "4.7★" -> 4.7 / "★")
  const match = value.match(/^([\d.]+)(.*)$/)
  const target = match ? parseFloat(match[1]) : 0
  const suffix = match ? match[2] : value
  const decimals = match && match[1].includes('.') ? 1 : 0

  useEffect(() => {
    if (!inView || !match) {
      if (!match) setDisplay(value)
      return
    }
    let raf = 0
    const start = performance.now()
    const dur = 1400
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setDisplay((target * eased).toFixed(decimals) + suffix)
      if (p < 1) raf = requestAnimationFrame(tick)
      else setDisplay(target.toFixed(decimals) + suffix)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
