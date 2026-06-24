import type { ReactNode } from 'react'

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
      <path d="M16 2C8.28 2 2 8.28 2 16c0 2.49.66 4.82 1.8 6.84L2 30l7.38-1.78A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.45 11.45 0 0 1-5.83-1.59l-.42-.25-4.38 1.05 1.09-4.26-.27-.44A11.47 11.47 0 0 1 4.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5zm6.29-8.53c-.34-.17-2.03-.99-2.34-1.1-.31-.12-.54-.17-.77.17-.23.34-.88 1.1-1.08 1.33-.2.23-.4.26-.74.09-.34-.17-1.45-.53-2.76-1.69-1.02-.9-1.71-2.02-1.91-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59-.2-.01-.43-.01-.66-.01-.23 0-.6.09-.91.43-.31.34-1.19 1.16-1.19 2.83s1.22 3.28 1.39 3.51c.17.23 2.4 3.67 5.82 5.14.81.35 1.45.56 1.94.72.82.26 1.56.22 2.15.13.65-.09 2.01-.82 2.29-1.62.29-.79.29-1.47.2-1.62-.09-.14-.32-.23-.66-.4z" />
    </svg>
  )
}

type Variant = 'solid' | 'outline' | 'wa'

export function CTA({
  href,
  children,
  variant = 'solid',
  className = '',
  icon,
}: {
  href: string
  children: ReactNode
  variant?: Variant
  className?: string
  icon?: ReactNode
}) {
  const base =
    'group/cta relative inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[0.82rem] font-medium tracking-wide transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden'
  const styles: Record<Variant, string> = {
    solid:
      'bg-gold-300 text-forest-900 hover:bg-gold-100 shadow-[0_8px_30px_-8px_rgba(212,168,74,0.5)] hover:shadow-[0_12px_40px_-8px_rgba(212,168,74,0.65)]',
    outline:
      'border border-gold-300/40 text-gold-100 hover:border-gold-300 hover:bg-gold-300/5',
    wa: 'bg-gradient-to-br from-[#25d366] to-[#0e8a6e] text-white shadow-[0_8px_30px_-8px_rgba(18,140,126,0.6)] hover:shadow-[0_12px_44px_-8px_rgba(18,140,126,0.75)]',
  }
  const isExternal = href.startsWith('http')
  return (
    <a
      href={href}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} ${styles[variant]} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2.5">
        {icon}
        {children}
      </span>
    </a>
  )
}
