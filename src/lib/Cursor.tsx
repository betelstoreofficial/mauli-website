import { useEffect, useRef } from 'react'

/** Paan-cone cursor — a folded green paan cone with a toothpick & cherry on top.
 *  Follows with a soft lag; scales up over interactive targets. Scale is baked into the
 *  transform string (never CSS `scale`) to avoid the jump/glitch. */
export default function Cursor() {
  const el = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return
    const node = el.current!
    let mx = window.innerWidth / 2
    let my = window.innerHeight / 2
    let x = mx
    let y = my
    let scale = 1
    let targetScale = 1
    let raf = 0
    let visible = false

    const move = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (!visible) {
        visible = true
        node.style.opacity = '1'
      }
      const t = e.target as HTMLElement
      targetScale = t.closest('a, button, [data-cursor="grow"], input, textarea') ? 1.7 : 1
    }
    const leave = () => {
      visible = false
      node.style.opacity = '0'
    }

    const loop = () => {
      x += (mx - x) * 0.22
      y += (my - y) * 0.22
      scale += (targetScale - scale) * 0.18
      const sway = Math.sin(Date.now() / 700) * 5
      node.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${sway}deg) scale(${scale})`
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={el} className="cursor-leaf" aria-hidden="true" style={{ opacity: 0 }}>
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* toothpick */}
        <line x1="20" y1="9" x2="26" y2="2.5" stroke="#caa45a" strokeWidth="1.6" strokeLinecap="round" />
        {/* cherry on top */}
        <circle cx="26.4" cy="2.4" r="2.3" fill="#c2304b" />
        <circle cx="25.6" cy="1.7" r="0.7" fill="#e87a8e" />
        {/* paan cone body */}
        <path d="M5 8.5C5 7.7 5.6 7 6.4 7H25.6C26.4 7 27 7.7 27 8.5C27 9 26.8 9.4 26.4 9.7L17.2 27.4C16.7 28.4 15.3 28.4 14.8 27.4L5.6 9.7C5.2 9.4 5 9 5 8.5Z" fill="#2c7d44" />
        {/* inner fold highlight */}
        <path d="M9 9.3H23L16 23.2L9 9.3Z" fill="#3fa15c" fillOpacity="0.85" />
        {/* filling dots at the rim */}
        <circle cx="11" cy="9.2" r="1.15" fill="#f3ead6" />
        <circle cx="16" cy="9.4" r="1.25" fill="#e0b3c0" />
        <circle cx="21" cy="9.2" r="1.15" fill="#f0d080" />
        {/* edge accent */}
        <path d="M5 8.5C5 7.7 5.6 7 6.4 7H25.6C26.4 7 27 7.7 27 8.5" stroke="#0c1f17" strokeWidth="0.8" strokeOpacity="0.35" strokeLinecap="round" />
      </svg>
    </div>
  )
}
