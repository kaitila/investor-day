import React from 'react'
import { EVENT } from '../data/content'
import IcebreakerLogo from './IcebreakerLogo'

export default function Nav(): React.JSX.Element {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="max-w-[1280px] mx-auto px-16 max-md:px-5 h-16 flex items-center justify-between">
        <a href="/" className="text-primary flex items-center">
          <IcebreakerLogo className="h-[18px] w-auto" />
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-7">
            <a
              href="#why-attend"
              className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Why attend
            </a>
            <a
              href="#agenda"
              className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Agenda
            </a>
            <a
              href="#speakers"
              className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Speakers
            </a>
          </div>

          <a
            href={EVENT.lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary font-semibold text-sm rounded px-4 py-2 hover:bg-deep-navy transition-colors"
          >
            Register
          </a>
        </div>
      </div>
    </nav>
  )
}
