import React from 'react'
import { EVENT } from '../data/content'
import { CalendarIcon, MapPinIcon, UtensilsIcon } from './Icons'

export default function Hero(): React.JSX.Element {
  return (
    <section className="bg-white">
      <div className="max-w-[1280px] mx-auto px-16 max-md:px-5 pt-20 pb-24 max-md:pt-14 max-md:pb-16 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-white border border-border-subtle rounded px-3 py-1.5 text-on-surface-variant mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-status-success flex-shrink-0" />
          Invite-only · Limited seats
        </div>

        {/* Headline */}
        <h1 className="font-sans font-semibold leading-none tracking-[-0.02em] mb-6">
          <span className="block text-primary text-[64px] max-md:text-[40px]">Icebreaker</span>
          <span className="block text-deep-navy text-[64px] max-md:text-[40px]">Investor Day 2026</span>
        </h1>

        {/* Body */}
        <p className="text-on-surface-variant text-lg max-md:text-base leading-relaxed max-w-[560px] mx-auto mb-10">
          A focused half-day with the Icebreaker team, our founders and LPs, and a few special
          guests — candid panels on AI automation and European growth-stage funding, straight-talk
          updates from our fastest-growing companies, and plenty of time to connect.
        </p>

        {/* Event meta */}
        <div className="inline-flex flex-wrap divide-x divide-border-subtle border border-border-subtle rounded bg-white mb-10">
          <div className="flex items-center gap-3 px-5 py-3.5 max-md:px-4 max-md:py-3">
            <CalendarIcon className="text-on-surface-variant flex-shrink-0" />
            <div className="text-left">
              <div className="text-sm font-semibold text-on-surface">{EVENT.date}</div>
              <div className="font-mono text-xs text-on-surface-variant mt-0.5">
                {EVENT.time} ({EVENT.timezone})
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3.5 max-md:px-4 max-md:py-3">
            <MapPinIcon className="text-on-surface-variant flex-shrink-0" />
            <div className="text-left">
              <div className="text-sm font-semibold text-on-surface">{EVENT.venue}</div>
              <div className="font-mono text-xs text-on-surface-variant mt-0.5">{EVENT.address}</div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3.5 max-md:px-4 max-md:py-3">
            <UtensilsIcon className="text-on-surface-variant flex-shrink-0" />
            <div className="text-left">
              <div className="text-sm font-semibold text-on-surface">Breakfast & lunch</div>
              <div className="font-mono text-xs text-on-surface-variant mt-0.5">Plus plenty of mingling</div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center flex-wrap gap-4">
          <a
            href={EVENT.lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary font-semibold rounded px-6 py-3 hover:bg-deep-navy transition-colors"
          >
            Reserve my seat
          </a>
          <a
            href="#agenda"
            className="font-semibold text-on-surface hover:text-on-surface-variant transition-colors"
          >
            See the agenda
          </a>
          <span className="text-sm text-on-surface-variant">
            Free to attend · Registration required
          </span>
        </div>

      </div>
    </section>
  )
}
