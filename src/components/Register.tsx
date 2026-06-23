import React from 'react'
import { EVENT } from '../data/content'
import { CalendarIcon, MapPinIcon, TicketIcon, ExternalLinkIcon } from './Icons'
import { useInView } from '../hooks/useInView'

const T = 'transition-[opacity,transform] duration-700 ease-out'
const ac = (inView: boolean) => (inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5')

export default function Register(): React.JSX.Element {
  const { ref, inView } = useInView()

  return (
    <section id="register" className="bg-deep-navy">
      <div ref={ref} className="max-w-[1280px] mx-auto px-16 max-md:px-5 py-[120px] max-md:py-20">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16 max-md:gap-12 items-center">

          {/* Left — info */}
          <div className={`${T} ${ac(inView)}`}>
            <span className="inline-block font-mono text-xs uppercase tracking-widest bg-white/10 text-white/70 border border-white/15 rounded px-2.5 py-1 mb-8">
              Save your seat
            </span>

            <h2 className="font-sans font-bold text-[32px] max-md:text-2xl tracking-[-0.01em] text-white mb-4 leading-tight">
              Register for Investor Day 2026
            </h2>

            <p className="text-white/70 text-lg max-md:text-base leading-relaxed mb-10">
              Seats are limited and allocated on a first-come basis. Register via lu.ma to secure
              your spot.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CalendarIcon className="text-white/50 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  {EVENT.dateLong} · {EVENT.time}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="text-white/50 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/UKjpHgoojwCP4FtBA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white/80 text-sm underline hover:text-white transition-colors"
                >
                  {EVENT.venue}, Helsinki
                  <ExternalLinkIcon className="opacity-60" />
                </a>
              </div>
              <div className="flex items-center gap-3">
                <TicketIcon className="text-white/50 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Free to attend · Invitation & registration required
                </span>
              </div>
            </div>
          </div>

          {/* Right — CTA card */}
          <div
            className={`${T} ${ac(inView)} bg-white rounded-lg p-8 max-md:p-6`}
            style={{ transitionDelay: '150ms' }}
          >
            <h3 className="font-sans font-bold text-2xl text-on-surface mb-2">
              Reserve your spot
            </h3>
            <p className="text-on-surface-variant text-sm mb-8">Takes 30 seconds.</p>

            <a
              href={EVENT.lumaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary text-on-primary font-semibold rounded py-3.5 hover:bg-deep-navy transition-colors mb-4"
            >
              Reserve my seat on lu.ma
            </a>

            <p className="text-xs text-on-surface-variant text-center leading-relaxed">
              By registering you agree to be contacted about this event. We'll never share your
              details.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
