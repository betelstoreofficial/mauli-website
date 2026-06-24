import { Link, useLocation } from 'react-router-dom'

type Item = { to: string; label: string; icon: React.ReactNode }

const I = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20C3 11 9 3.5 20 3c.5 7.5-3 16.5-13 16.9C6 19.95 5 20 4 20Z" /><path d="M5 19C8.5 14 13 9.5 18 6.5" /></svg>
  ),
  gift: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="13" rx="1.5" /><path d="M3 12h18M12 8v13M12 8S10 3 7.5 4 9 8 12 8ZM12 8s2-5 4.5-4S15 8 12 8Z" /></svg>
  ),
  cater: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M5 11a7 7 0 0 1 14 0Z" /><path d="M3 11h18M12 4V2M8 21h8M12 18v3" /></svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="2.6" /></svg>
  ),
}

const ITEMS: Item[] = [
  { to: '/', label: 'Home', icon: I.home },
  { to: '/the-paan', label: 'Paan', icon: I.leaf },
  { to: '/gift-boxes', label: 'Boxes', icon: I.gift },
  { to: '/catering', label: 'Events', icon: I.cater },
  { to: '/visit', label: 'Visit', icon: I.pin },
]

/** Floating, Apple-style glass tab bar. Mobile & tablet only (desktop uses the top nav). */
export default function BottomNav() {
  const { pathname } = useLocation()
  return (
    <nav
      className="fixed inset-x-0 z-40 flex justify-center px-4 lg:hidden"
      style={{ bottom: 'max(0.85rem, env(safe-area-inset-bottom))' }}
      aria-label="Primary"
    >
      <div className="glass-bar flex items-center gap-1 rounded-[26px] px-2.5 py-2">
        {ITEMS.map((it) => {
          const active = it.to === '/' ? pathname === '/' : pathname.startsWith(it.to)
          return (
            <Link
              key={it.to}
              to={it.to}
              aria-current={active ? 'page' : undefined}
              className={`relative flex w-[62px] flex-col items-center gap-1 rounded-[18px] py-2 text-[0.58rem] font-medium tracking-wide transition-colors duration-300 ${
                active ? 'text-forest-900' : 'text-cream/70'
              }`}
            >
              {active && <span className="absolute inset-0 rounded-[18px] bg-gold-300 shadow-[0_4px_14px_-4px_rgba(216,177,90,0.7)]" />}
              <span className="relative z-10 h-[22px] w-[22px]">{it.icon}</span>
              <span className="relative z-10">{it.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
