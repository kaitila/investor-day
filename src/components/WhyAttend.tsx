import React from 'react'
import { useInView } from '../hooks/useInView'

const STATS = [
  { value: '7x', label: 'LP capital actually returned to LPs' },
  { value: '3x', label: 'Annualised rate of return' },
  { value: '2x', label: 'Total value to paid-in' },
] as const

const CARDS = [
  {
    title: 'Inside the funds',
    description:
      "A first-hand update on how the current funds are performing and what's ahead — including new funds on the horizon — direct from the GPs.",
  },
  {
    title: 'The real status of agents',
    description:
      "Beyond the headlines: operators who've put AI agents into production tell you what actually replaces work today — and what's still a demo.",
  },
  {
    title: 'How Europe funds growth',
    description:
      'Investors behind some of the largest European rounds debate whether ambitious European-led mega-rounds are realistic — or a pipedream.',
  },
  {
    title: 'Founders & the room',
    description:
      'Candid CEO updates from our fastest-growing companies, plus founders, operators and LPs from across the network — with breakfast, coffee and lunch to actually connect.',
  },
] as const

// Base animation classes — applied to every animated element
const T = 'transition-[opacity,transform] duration-700 ease-out'
const ac = (inView: boolean) => (inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3')

export default function WhyAttend(): React.JSX.Element {
  const { ref: introRef, inView: introInView } = useInView()
  const { ref: statsRef, inView: statsInView } = useInView()
  const { ref: cardsRef, inView: cardsInView } = useInView(0.2)

  return (
    <section id="why-attend" className="py-[120px] max-md:py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-16 max-md:px-5">

        {/* Intro — label + headline + body */}
        <div ref={introRef}>
          <span
            className={`${T} ${ac(introInView)} inline-block font-mono text-xs uppercase tracking-widest bg-surface-container text-on-surface-variant rounded px-2.5 py-1 mb-8`}
          >
            Why come
          </span>

          <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1 max-md:gap-8 mb-16">
            <h2
              className={`${T} ${ac(introInView)} font-sans font-bold text-[32px] max-md:text-2xl leading-tight tracking-[-0.01em] text-on-surface`}
              style={{ transitionDelay: '100ms' }}
            >
              A morning inside one of Europe's top-performing venture funds
            </h2>
            <p
              className={`${T} ${ac(introInView)} text-on-surface-variant text-lg max-md:text-base leading-relaxed self-end`}
              style={{ transitionDelay: '200ms' }}
            >
              LPs come for the insights and network: a first-hand update on how the funds are tracking
              and what's next alongside candid panels on AI automation in European growth-stage funding,
              and time to meet fellow LPs as well as the Icebreaker team and portfolio founders.
            </p>
          </div>
        </div>

        {/* Stats + footnote */}
        <div ref={statsRef}>
          <p
            className={`${T} ${ac(statsInView)} text-xs font-mono uppercase tracking-widest text-on-surface-variant mb-3`}
          >
            Icebreaker Fund I vs. the average benchmark fund*
          </p>
          <div
            className={`${T} ${ac(statsInView)} grid grid-cols-3 max-md:grid-cols-1 border border-border-subtle rounded bg-white divide-x max-md:divide-x-0 max-md:divide-y divide-border-subtle mb-4`}
          >
            {STATS.map((stat, i) => (
              <div
                key={stat.value}
                className={`${T} ${ac(statsInView)} px-8 py-8 max-md:px-6 max-md:py-6`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="font-mono font-bold text-[56px] max-md:text-[40px] leading-none text-deep-navy tracking-tight mb-3">
                  {stat.value}
                </div>
                <div className="text-sm text-on-surface-variant leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>

          <p
            className={`${T} ${ac(statsInView)} text-xs text-on-surface-variant mb-16 max-md:mb-12`}
            style={{ transitionDelay: '240ms' }}
          >
            *Source:{' '}
            <a
              href="https://tesi.fi/wp-content/uploads/2026/05/Tesi-survey-of-investment-returns-from-the-Finnish-PE-VC-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-on-surface transition-colors"
            >
              Tesi's Survey of Investment Results – Finnish VC &amp; PE Market
            </a>
            . Figures show Icebreaker Fund I's DPI, IRR and TVPI as a multiple of the average
            benchmark fund in the survey. The same survey also shows that Finnish venture funds have
            outperformed their European counterparts. Past performance is not a guarantee of future
            results.
          </p>
        </div>

        {/* Feature cards */}
        <div ref={cardsRef} className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`${T} ${ac(cardsInView)} border border-border-subtle rounded bg-white p-8 max-md:p-6`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="font-sans font-semibold text-lg text-on-surface mb-3">{card.title}</h3>
              <p className="text-on-surface-variant text-base leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
