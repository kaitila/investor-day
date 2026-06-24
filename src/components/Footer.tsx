import React from 'react'
import IcebreakerLogo from './IcebreakerLogo'
import { EVENT } from '../data/content'

export default function Footer(): React.JSX.Element {
  return (
    <footer className="bg-white border-t border-border-subtle">
      <div className="max-w-[1280px] mx-auto px-16 max-md:px-5 py-10 space-y-8">

        <div className="flex items-center justify-between flex-wrap gap-4">
          <IcebreakerLogo className="h-5 text-primary" />
          <div className="flex items-center gap-6">
            <a
              href={EVENT.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={EVENT.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>

        <div className="flex items-center gap-6 flex-wrap">
          <a
            href={EVENT.privacyPolicyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href={EVENT.codeOfConductUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            Code of Conduct
          </a>
          <a
            href={EVENT.esgPolicyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            ESG Policy
          </a>
        </div>

        <div className="h-8" />

      </div>
    </footer>
  )
}
