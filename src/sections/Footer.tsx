import { Link } from 'react-router-dom'
import { SITE, wa, MESSAGES } from '@/data/site'

const LINKS = [
  { label: 'The Paan', to: '/the-paan' },
  { label: 'Gift Boxes', to: '/gift-boxes' },
  { label: 'Shop', to: '/shop' },
  { label: 'Catering', to: '/catering' },
  { label: 'Franchise', to: '/franchise' },
  { label: 'Visit', to: '/visit' },
]

export default function Footer() {
  return (
    <footer className="relative bg-forest-950 px-6 pt-7 pb-28 md:px-10 lg:pb-7">
      <div className="mx-auto flex max-w-[1480px] flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* brand */}
        <Link to="/" className="shrink-0">
          <img src="/img/brand/logo-tagline.png" alt={SITE.full} className="h-9 w-auto object-contain object-left" />
        </Link>

        {/* nav */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} className="text-[0.8rem] text-cream/65 transition-colors hover:text-gold-100">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* contact */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[0.8rem] text-cream/65">
          <a href={`tel:${SITE.phoneRaw}`} className="hover:text-gold-100">{SITE.phone}</a>
          <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold-100">{SITE.instagramHandle}</a>
          <a href={wa(MESSAGES.visit)} target="_blank" rel="noopener noreferrer" className="hover:text-gold-100">WhatsApp</a>
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-[1480px] flex-col items-center justify-between gap-2 border-t border-cream/10 pt-4 text-[0.68rem] text-cream/40 sm:flex-row">
        <span>© {new Date().getFullYear()} {SITE.full} · {SITE.shortAddress}</span>
        <span className="italic">No tobacco · No supari · Aids digestion</span>
      </div>
    </footer>
  )
}
