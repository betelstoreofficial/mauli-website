import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { wa, MESSAGES } from '@/data/site'
import { CTA, WhatsAppIcon } from './WhatsApp'

const LINKS = [
  { label: 'The Paan', to: '/the-paan' },
  { label: 'Gifts & Shop', to: '/shop' },
  { label: 'Catering', to: '/catering' },
  { label: 'Franchise', to: '/franchise' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled ? 'bg-forest-950/85 backdrop-blur-md border-b border-gold-300/10' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-[1480px] items-center justify-between px-5 py-3.5 md:px-10">
          <Link to="/" aria-label="Mauli home" className="shrink-0">
            <img src="/img/brand/logo-tagline.png" alt="Mauli - Family Paan House" className="h-10 w-auto object-contain md:h-12" />
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {LINKS.map((l) => {
              const active = pathname === l.to
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`group relative text-[0.8rem] font-medium tracking-wide transition-colors ${
                    active ? 'text-gold-100' : 'text-cream/75 hover:text-cream'
                  }`}
                >
                  {l.label}
                  <span className={`absolute -bottom-1.5 left-0 h-px bg-gold-300 transition-all duration-500 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:block">
            <CTA href={wa(MESSAGES.visit)} variant="outline" icon={<WhatsAppIcon className="h-4 w-4" />}>
              Order
            </CTA>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label="Menu"
          >
            <span className={`h-px w-6 bg-cream transition-all duration-300 ${open ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-cream transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`h-px w-6 bg-cream transition-all duration-300 ${open ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-1 bg-forest-950/97 px-8 backdrop-blur-xl lg:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link to={l.to} className="text-display block py-2 text-4xl font-bold text-cream">
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8">
              <CTA href={wa(MESSAGES.visit)} variant="wa" icon={<WhatsAppIcon className="h-4 w-4" />}>
                Order on WhatsApp
              </CTA>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
