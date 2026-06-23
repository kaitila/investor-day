import React from 'react'
import { SPEAKERS, PANEL_MODERATORS, CEO_UPDATERS, type AttributionPerson } from '../data/content'
import { useInView } from '../hooks/useInView'

const T = 'transition-[opacity,transform] duration-700 ease-out'
const ac = (inView: boolean) => (inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3')

function AttributionChip({ person }: { person: AttributionPerson }): React.JSX.Element {
  return (
    <div className="flex items-center gap-2 border border-border-subtle rounded-full bg-white pl-1 pr-3 py-1">
      {person.photo ? (
        <img
          src={person.photo}
          alt={person.name}
          className="w-6 h-6 rounded-full object-cover flex-shrink-0"
        />
      ) : (
        <div className="w-6 h-6 rounded-full bg-deep-navy text-white text-[10px] font-bold flex items-center justify-center flex-shrink-0">
          {person.initials}
        </div>
      )}
      <span className="text-sm text-on-surface">
        {person.name} · {person.label}
      </span>
    </div>
  )
}

export default function Speakers(): React.JSX.Element {
  const { ref: headerRef, inView: headerInView } = useInView(0.5)
  const { ref: gridRef, inView: gridInView } = useInView(0.15)
  const { ref: attrRef, inView: attrInView } = useInView()

  return (
    <section id="speakers" className="py-[120px] max-md:py-20 bg-surface border-t border-border-subtle">
      <div className="max-w-[1280px] mx-auto px-16 max-md:px-5">

        {/* Header */}
        <div ref={headerRef} className="mb-12">
          <h2
            className={`${T} ${ac(headerInView)} font-sans font-bold text-[32px] max-md:text-2xl tracking-[-0.01em] text-on-surface mb-3`}
          >
            Speakers
          </h2>
          <p
            className={`${T} ${ac(headerInView)} text-on-surface-variant text-lg max-md:text-base`}
            style={{ transitionDelay: '100ms' }}
          >
            Operators and investors building and funding at the frontier of AI and space.
          </p>
        </div>

        {/* Speaker grid */}
        <div ref={gridRef} className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4 mb-12">
          {SPEAKERS.map((speaker, i) => (
            <div
              key={speaker.name}
              className={`${T} ${ac(gridInView)} border border-border-subtle rounded bg-white p-6 flex flex-col`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Avatar + logo row */}
              <div className="flex items-start justify-between mb-4">
                {speaker.photo ? (
                  <img
                    src={speaker.photo}
                    alt={speaker.name}
                    className="w-14 h-14 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-deep-navy text-white font-bold text-lg flex items-center justify-center flex-shrink-0">
                    {speaker.initials}
                  </div>
                )}
                {speaker.logo && (
                  <div className="border border-border-subtle rounded p-2 flex items-center flex-shrink-0">
                    <img
                      src={speaker.logo}
                      alt={speaker.org}
                      className="h-6 w-auto max-w-[80px] object-contain"
                    />
                  </div>
                )}
              </div>

              {/* Name + role */}
              <div className="mb-3">
                <div className="font-sans font-semibold text-base text-on-surface leading-snug">
                  {speaker.name}
                </div>
                <div className="text-sm text-deep-navy font-medium mt-0.5">
                  {speaker.role}, {speaker.org}
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-on-surface-variant leading-relaxed flex-1 mb-4">
                {speaker.bio}
              </p>

              {/* LinkedIn */}
              <a
                href={speaker.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-on-surface hover:text-deep-navy transition-colors"
              >
                LinkedIn
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden="true"
                  className="opacity-50"
                >
                  <path
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4.5M9.5 2.5V7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Attribution rows */}
        <div ref={attrRef} className="border-t border-border-subtle pt-8 space-y-4">
          <div
            className={`${T} ${ac(attrInView)} flex items-center flex-wrap gap-3`}
          >
            <span className="text-sm text-on-surface-variant w-40 max-md:w-full flex-shrink-0">
              Panels moderated by
            </span>
            <div className="flex flex-wrap gap-2">
              {PANEL_MODERATORS.map((p) => (
                <AttributionChip key={p.name} person={p} />
              ))}
            </div>
          </div>

          <div
            className={`${T} ${ac(attrInView)} flex items-center flex-wrap gap-3`}
            style={{ transitionDelay: '100ms' }}
          >
            <span className="text-sm text-on-surface-variant w-40 max-md:w-full flex-shrink-0">
              CEO updates from
            </span>
            <div className="flex flex-wrap gap-2">
              {CEO_UPDATERS.map((p) => (
                <AttributionChip key={p.name} person={p} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
