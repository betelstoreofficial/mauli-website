import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { wa, MESSAGES } from '@/data/site'
import { WhatsAppIcon } from './WhatsApp'

export default function Fab() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={wa(MESSAGES.visit)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Order on WhatsApp"
          data-cursor="grow"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-28 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#25d366] to-[#0e8a6e] text-white shadow-[0_10px_36px_-8px_rgba(18,140,126,0.7)] lg:bottom-6 lg:right-6 lg:h-14 lg:w-14"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25d366]/40" style={{ animationDuration: '2.4s' }} />
          <WhatsAppIcon className="relative h-6 w-6" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
