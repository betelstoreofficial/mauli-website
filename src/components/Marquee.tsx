import { useEffect, useRef } from 'react'
import { TRUST_BADGES } from '@/data/site'

function LeafDot() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3 flex-shrink-0" fill="none" aria-hidden="true">
      <path d="M4 20C3 11 9 3.5 20 3c.5 7.5-3 16.5-13 16.9C6 19.95 5 20 4 20Z" fill="currentColor" />
    </svg>
  )
}

/** Gentle trust marquee — JS-driven so it always moves (CSS animations are paused under
 *  reduced-motion in some browsers). Pauses on hover. */
export default function Marquee() {
  const track = useRef<HTMLDivElement>(null)
  const row = [...TRUST_BADGES, ...TRUST_BADGES]

  useEffect(() => {
    const el = track.current!
    let x = 0
    let raf = 0
    let last = performance.now()
    let paused = false
    const speed = 38 // px per second
    const onEnter = () => (paused = true)
    const onLeave = () => (paused = false)
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)

    const loop = (now: number) => {
      const dt = (now - last) / 1000
      last = now
      if (!paused) {
        x -= speed * dt
        const half = el.scrollWidth / 2
        if (-x >= half) x += half
        el.style.transform = `translate3d(${x}px,0,0)`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <div className="relative overflow-hidden border-y border-gold-300/15 bg-forest-deep py-4">
      <div ref={track} className="flex w-max items-center gap-8 whitespace-nowrap will-change-transform">
        {row.map((b, i) => (
          <span key={i} className="flex items-center gap-8 text-[0.72rem] font-medium uppercase tracking-[0.2em] text-gold-100/80">
            {b}
            <span className="text-gold-300/50"><LeafDot /></span>
          </span>
        ))}
      </div>
    </div>
  )
}
