import { motion } from 'framer-motion'

const LEAF = 'M4 20C3 11 9 3.5 20 3c.5 7.5-3 16.5-13 16.9C6 19.95 5 20 4 20Z'

// position %, size px, drift, duration, delay, opacity
const LEAVES = [
  { x: 8, y: 18, s: 64, d: 9, delay: 0, o: 0.14, r: -20 },
  { x: 82, y: 12, s: 90, d: 12, delay: 1.2, o: 0.1, r: 18 },
  { x: 24, y: 70, s: 52, d: 8, delay: 0.6, o: 0.16, r: 30 },
  { x: 68, y: 64, s: 76, d: 11, delay: 2, o: 0.12, r: -14 },
  { x: 46, y: 34, s: 44, d: 10, delay: 0.9, o: 0.1, r: 8 },
  { x: 92, y: 80, s: 58, d: 9.5, delay: 1.6, o: 0.13, r: -28 },
  { x: 14, y: 46, s: 38, d: 7.5, delay: 0.3, o: 0.12, r: 16 },
]

/** Animated drifting betel-leaf field over a forest gradient - a living backdrop. */
export default function LeafField() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-forest-emerald">
      {/* soft moving glow */}
      <motion.div
        className="absolute -left-1/4 top-0 h-[120%] w-[80%] rounded-full bg-gold-400/10 blur-[120px]"
        animate={{ x: ['-5%', '20%', '-5%'], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 bottom-0 h-[110%] w-[70%] rounded-full bg-forest-400/15 blur-[130px]"
        animate={{ x: ['8%', '-12%', '8%'], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      {LEAVES.map((l, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 24 24"
          className="absolute"
          style={{ left: `${l.x}%`, top: `${l.y}%`, width: l.s, height: l.s, color: '#7bc88a', opacity: l.o }}
          fill="currentColor"
          initial={{ rotate: l.r }}
          animate={{ y: [0, -22, 0], x: [0, 10, 0], rotate: [l.r, l.r + 12, l.r] }}
          transition={{ duration: l.d, repeat: Infinity, ease: 'easeInOut', delay: l.delay }}
        >
          <path d={LEAF} />
        </motion.svg>
      ))}

      {/* grain + bottom fade for text legibility */}
      <div className="grain absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-forest-950/40" />
    </div>
  )
}
