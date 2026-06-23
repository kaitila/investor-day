import React from 'react'
const STATS = [
  { value: '7x', label: 'LP capital actually returned to LPs' },
  { value: '3x', label: 'Annualised rate of return' },
  { value: '2x', label: 'Total value to paid-in' },
] as const

const CARDS = [
  {
    title: 'Inside the funds',
    description:
      "The most current, unfiltered view on what's performing and what's next in our portfolio — including new funds on the horizon — direct from the GPs.",
  },
  {
    title: 'The real status of agents',
    description:
      "Most automation tools are in production. We've brought in the people who've shipped them to separate what's genuinely useful from what's just noise.",
  },
  {
    title: 'Europe funds growth',
    description:
      "Europe is quietly behind some of the segment's largest European-led investments. We'll stress-test whether those ambitions hold up.",
  },
  {
    title: 'Founders & the room',
    description:
      'Direct CEO updates from our portfolio companies, plus founders, co-investors, and LPs from across the network — with breakfast, coffee and lunch to actually connect.',
  },
] as const

export default function WhyAttend(): React.JSX.Element {
  return (
    <section id="why-attend" className="py-[120px] max-md:py-20 bg-surface">
      <div className="max-w-[1280px] mx-auto px-16 max-md:px-5">

        {/* Label */}
        <span className="inline-block font-mono text-xs uppercase tracking-widest bg-surface-container text-on-surface-variant rounded px-2.5 py-1 mb-8">
          Why come
        </span>

        {/* Headline + body */}
        <div className="grid grid-cols-2 gap-16 max-md:grid-cols-1 max-md:gap-8 mb-16">
          <h2 className="font-sans font-bold text-[32px] max-md:text-2xl leading-tight tracking-[-0.01em] text-on-surface">
            A morning inside one of Europe's top-performing venture funds
          </h2>
          <p className="text-on-surface-variant text-lg max-md:text-base leading-relaxed self-end">
            LPs come for the insights and network: a first-hand update on how the funds are tracking
            and what's next alongside candid panels on AI automation in European growth-stage funding,
            and time to meet fellow LPs as well as the Icebreaker team and portfolio founders.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 max-md:grid-cols-1 border border-border-subtle rounded bg-white divide-x max-md:divide-x-0 max-md:divide-y divide-border-subtle mb-4">
          {STATS.map((stat) => (
            <div key={stat.value} className="px-8 py-8 max-md:px-6 max-md:py-6">
              <div className="font-mono font-bold text-[56px] max-md:text-[40px] leading-none text-deep-navy tracking-tight mb-3">
                {stat.value}
              </div>
              <div className="text-sm text-on-surface-variant leading-snug">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Stats footnote */}
        <p className="text-xs text-on-surface-variant mb-16 max-md:mb-12">
          Source: Two Sources of Investment Returns — Icebreaker vs. the average benchmark fund.
          Based on fund manager's internal data across various reference periods.
        </p>

        {/* Feature cards */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="border border-border-subtle rounded bg-white p-8 max-md:p-6"
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
