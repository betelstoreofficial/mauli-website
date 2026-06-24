import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { wa, MESSAGES } from '@/data/site'
import { WhatsAppIcon } from './WhatsApp'

/** Always-reachable action bar on mobile: Order · Cater · Franchise. */
export default function MobileCTA() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.9)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: 80 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-gold-300/15 bg-forest-950/90 px-3 py-3 backdrop-blur-md lg:hidden"
          style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
        >
          <a
            href={wa(MESSAGES.visit)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#25d366] to-[#0e8a6e] py-3 text-[0.78rem] font-semibold text-white"
          >
            <WhatsAppIcon className="h-4 w-4" /> Order
          </a>
          <Link to="/catering" className="flex flex-1 items-center justify-center rounded-full border border-gold-300/40 py-3 text-[0.78rem] font-medium text-gold-100">
            Cater
          </Link>
          <Link to="/franchise" className="flex flex-1 items-center justify-center rounded-full border border-gold-300/40 py-3 text-[0.78rem] font-medium text-gold-100">
            Franchise
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
