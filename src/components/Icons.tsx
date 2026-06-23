import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

export function CalendarIcon({ className = '', size = 16 }: IconProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect x="1.75" y="2.75" width="12.5" height="11.5" rx="1.25" stroke="currentColor" strokeWidth="1.25" />
      <path d="M1.75 6.25h12.5" stroke="currentColor" strokeWidth="1.25" />
      <path d="M5.25 1.25v3M10.75 1.25v3" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

export function MapPinIcon({ className = '', size = 16 }: IconProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M8 1.5C5.515 1.5 3.5 3.515 3.5 6C3.5 9.375 8 14.5 8 14.5C8 14.5 12.5 9.375 12.5 6C12.5 3.515 10.485 1.5 8 1.5Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <circle cx="8" cy="6" r="1.75" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

export function UtensilsIcon({ className = '', size = 16 }: IconProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M5.5 1.5v4A1.75 1.75 0 0 0 7.25 7.25V14.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M3.75 1.5v2.75M5.5 3.75H3.75" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M10.5 1.5c0 0 1.75 1.5 1.75 3.75A1.75 1.75 0 0 1 10.5 7V14.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
    </svg>
  )
}

export function TicketIcon({ className = '', size = 16 }: IconProps): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M1.5 5.5C1.5 4.672 2.172 4 3 4h10c.828 0 1.5.672 1.5 1.5v1a1.5 1.5 0 0 0 0 3v1C14.5 11.328 13.828 12 13 12H3c-.828 0-1.5-.672-1.5-1.5v-1a1.5 1.5 0 0 0 0-3v-1Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path d="M5.5 4v8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeDasharray="1.5 1.5" />
    </svg>
  )
}
