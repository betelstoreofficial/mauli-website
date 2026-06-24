import { useEffect, Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SmoothScroll, { scrollTopImmediate } from '@/lib/SmoothScroll'
import Cursor from '@/lib/Cursor'
import Nav from '@/components/Nav'
import Fab from '@/components/Fab'
import BottomNav from '@/components/BottomNav'
import Footer from '@/sections/Footer'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    scrollTopImmediate()
  }, [pathname])

  return (
    <SmoothScroll>
      <Cursor />
      <Nav />
      <Fab />
      <BottomNav />

      {/* gold-leaf route wipe */}
      <AnimatePresence>
        <motion.div
          key={pathname + '-wipe'}
          className="pointer-events-none fixed inset-0 z-[60] origin-top bg-forest-950"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
          style={{ transformOrigin: 'top' }}
        />
      </AnimatePresence>

      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Suspense fallback={<div className="min-h-[60svh] bg-forest-950" />}>
              <Outlet />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </SmoothScroll>
  )
}
