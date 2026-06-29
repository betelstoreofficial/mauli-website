/** Hand-drawn-style betel-leaf divider - replaces plain gold lines, adds craft/wellness feel. */
export default function Botanical({ className = '', tone = 'gold' }: { className?: string; tone?: 'gold' | 'cream' }) {
  const c = tone === 'gold' ? '#d8b15a' : 'rgba(251,247,238,0.5)'
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-current" style={{ color: c }} />
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6 6 4 12 5 21c8-1 13-7 13-14 0-2-1-4-2-5-1.4 1.4-3 2.2-4 6Z" stroke={c} strokeWidth="1.1" fill="none" />
        <path d="M5.5 20.5C8 15 11 11 16 7.5" stroke={c} strokeWidth="0.9" strokeLinecap="round" opacity="0.7" />
      </svg>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-current" style={{ color: c }} />
    </div>
  )
}
