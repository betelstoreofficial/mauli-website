import { Reveal, RevealHeading } from '@/lib/motion'

export interface Step {
  title: string
  text: string
}

/** Numbered "how it works" strip. tone controls light/dark surfaces. */
export default function Steps({
  eyebrow,
  heading,
  steps,
  tone = 'dark',
  bg = 'bg-forest-rich',
}: {
  eyebrow: string
  heading: string
  steps: Step[]
  tone?: 'dark' | 'light'
  bg?: string
}) {
  const dark = tone === 'dark'
  return (
    <section className={`${bg} relative overflow-hidden py-24 md:py-32`}>
      <div className="mx-auto max-w-[1480px] px-6 md:px-10">
        <div className="mb-12 max-w-[40ch]">
          <Reveal><span className={`eyebrow ${dark ? 'gold-text' : 'text-gold-600'}`}>{eyebrow}</span></Reveal>
          <RevealHeading
            text={heading}
            className={`text-display mt-3 text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.08] ${dark ? 'text-cream' : 'text-ink'}`}
          />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className={`flex h-full flex-col rounded-2xl border p-6 ${dark ? 'border-cream/10 bg-forest-900/40' : 'border-ink/10 bg-white/70'}`}>
                <div className={`text-display text-3xl font-bold ${dark ? 'gold-text' : 'text-forest-600'}`}>0{i + 1}</div>
                <h3 className={`text-display mt-3 text-lg font-bold ${dark ? 'text-cream' : 'text-ink'}`}>{s.title}</h3>
                <p className={`mt-2 text-[0.82rem] font-light leading-relaxed ${dark ? 'text-cream/55' : 'text-ink-soft'}`}>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
