import React from 'react'
import { EVENT } from '../data/content'

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-white border-t border-border-subtle">
      <div className="max-w-[1280px] mx-auto px-16 max-md:px-5 py-10 flex items-center justify-between flex-wrap gap-6">

        {/* Left */}
        <div>
          <div className="font-sans font-semibold text-base text-primary mb-1">Icebreaker</div>
          <div className="text-sm text-on-surface-variant">
            Supporting teams from Idea to Seed and beyond since 2017.
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href={EVENT.icebreakerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            icebreaker.vc
          </a>
          <a
            href={EVENT.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={EVENT.lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-on-surface hover:text-deep-navy transition-colors"
          >
            Register
          </a>
        </div>

      </div>
    </footer>
  )
}
