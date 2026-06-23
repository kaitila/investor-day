import React from 'react'
import { AGENDA, type AgendaItem, type AgendaItemType } from '../data/content'
import { EVENT } from '../data/content'
import { useInView } from '../hooks/useInView'

const T = 'transition-[opacity,transform] duration-700 ease-out'
const ac = (inView: boolean) => (inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3')

function chipClasses(type: AgendaItemType): string {
  switch (type) {
    case 'panel':
      return 'bg-deep-navy text-white'
    case 'ceo':
      return 'bg-primary text-on-primary'
    case 'update':
      return 'bg-surface-container-high text-on-surface'
    default:
      return 'bg-surface-container text-on-surface-variant'
  }
}

function AgendaRow({ item }: { item: AgendaItem }): React.JSX.Element {
  const { ref, inView } = useInView(0.45)

  return (
    <div
      ref={ref}
      className={`${T} ${ac(inView)} grid grid-cols-[160px_1fr] max-md:grid-cols-1 border-t border-border-subtle py-8 max-md:py-6 gap-6 max-md:gap-3`}
    >
      {/* Time */}
      <div className="font-mono text-sm text-on-surface-variant pt-0.5">{item.time}</div>

      {/* Content */}
      <div>
        <span
          className={`inline-block font-mono text-xs uppercase tracking-widest rounded px-2.5 py-1 mb-4 ${chipClasses(item.type)}`}
        >
          {item.typeLabel}
        </span>

        <h3 className="font-sans font-semibold text-xl max-md:text-lg text-on-surface mb-2 leading-snug">
          {item.title}
        </h3>

        {item.description && (
          <p className="text-on-surface-variant text-base leading-relaxed">
            {item.description}
          </p>
        )}

        {item.speakers && item.speakers.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-5">
            {item.speakers.map((speaker, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 border border-border-subtle rounded bg-white px-3 py-2"
              >
                {speaker.photo ? (
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-7 h-7 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-deep-navy text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                    {speaker.initials}
                  </div>
                )}
                <div>
                  <div className="text-xs font-semibold text-on-surface leading-tight">
                    {speaker.name}
                  </div>
                  {speaker.role && (
                    <div className="text-xs text-on-surface-variant leading-tight mt-0.5">
                      {speaker.role}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Agenda(): React.JSX.Element {
  const { ref: headerRef, inView: headerInView } = useInView(0.5)

  return (
    <section id="agenda" className="py-[120px] max-md:py-20 bg-white border-t border-border-subtle">
      <div className="max-w-[1280px] mx-auto px-16 max-md:px-5">

        {/* Header */}
        <div ref={headerRef} className="mb-12">
          <span
            className={`${T} ${ac(headerInView)} inline-block font-mono text-xs uppercase tracking-widest bg-surface-container text-on-surface-variant rounded px-2.5 py-1 mb-8`}
          >
            The morning
          </span>

          <h2
            className={`${T} ${ac(headerInView)} font-sans font-bold text-[32px] max-md:text-2xl tracking-[-0.01em] text-on-surface mb-3`}
            style={{ transitionDelay: '100ms' }}
          >
            Agenda
          </h2>

          <p
            className={`${T} ${ac(headerInView)} font-mono text-sm text-on-surface-variant`}
            style={{ transitionDelay: '200ms' }}
          >
            {EVENT.date} · {EVENT.venue}, Helsinki · Times in {EVENT.timezone}
          </p>
        </div>

        {/* Timeline — each row triggers its own animation */}
        <div>
          {AGENDA.map((item, i) => (
            <AgendaRow key={i} item={item} />
          ))}
        </div>

      </div>
    </section>
  )
}
