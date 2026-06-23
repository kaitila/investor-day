export const EVENT = {
  name: 'Icebreaker Investor Day 2026',
  date: 'September 8, 2026',
  dateLong: 'Tuesday, September 8, 2026',
  time: '8:00–13:00',
  timezone: 'EEST',
  venue: 'Kulttuuritehdas Korjaamo',
  address: 'Töölönkatu 51 A–B, Helsinki',
  lumaUrl: 'https://lu.ma/icebreaker-investor-day-2026', // TODO: replace with real URL
  icebreakerUrl: 'https://icebreaker.vc',
  linkedinUrl: '#',
} as const

export interface Speaker {
  initials: string
  name: string
  role: string
  org: string
  bio: string
  linkedinUrl: string
}

export const SPEAKERS: Speaker[] = [
  {
    initials: 'MH',
    name: 'Markus Hav',
    role: 'Head of AI Automation',
    org: 'PostScriptum',
    bio: "Head of AI Automation at PostScriptum (Peter Sarlin's family office), driving agentic transformation across the portfolio. Previously Head of AI Automation at Hoxhunt.",
    linkedinUrl: '#',
  },
  {
    initials: 'EK',
    name: 'Emil Kvarnhammer',
    role: 'CEO & Co-Founder',
    org: 'Oplane',
    bio: "Building the agentic code-review platform trusted by the world's fastest-growing AI scaleups and startups.",
    linkedinUrl: '#',
  },
  {
    initials: 'AB',
    name: 'Aino Bergius',
    role: 'Head of Nordics',
    org: 'Lovable',
    bio: 'Leading the Nordics for Lovable — the AI company that needs no introduction.',
    linkedinUrl: '#',
  },
  {
    initials: 'OT',
    name: 'Ossi Tiainen',
    role: 'Partner',
    org: 'NGP Capital',
    bio: 'Growth-stage investor at NGP Capital, behind space-tech portfolio companies including The Exploration Company ($400M raised), Xona Space Systems ($300M) and Skylo ($180M).',
    linkedinUrl: '#',
  },
  {
    initials: 'MD',
    name: 'Michael Dimelow',
    role: 'Partner',
    org: 'Molten Ventures',
    bio: 'Deep roots in space and defence tech. Molten is one of the largest shareholders in ICEYE, which recently announced its €450M growth round.',
    linkedinUrl: '#',
  },
]

export type AgendaItemType = 'breakfast' | 'update' | 'panel' | 'break' | 'ceo' | 'networking'

export interface AgendaSpeaker {
  initials: string
  name: string
  role: string
}

export interface AgendaItem {
  time: string
  type: AgendaItemType
  typeLabel: string
  title: string
  description: string
  speakers?: AgendaSpeaker[]
}

export const AGENDA: AgendaItem[] = [
  {
    time: '8:00–9:00',
    type: 'breakfast',
    typeLabel: 'BREAKFAST',
    title: 'Breakfast & mingle',
    description: 'Coffee, breakfast and warm introductions to open the day.',
  },
  {
    time: '9:00–9:35',
    type: 'update',
    typeLabel: 'LIVE UPDATE',
    title: 'Icebreaker Updates',
    description: "Where the funds stand and what's ahead — with Lasse Lehtinen, GP @ Icebreaker.",
  },
  {
    time: '9:45–10:30',
    type: 'panel',
    typeLabel: 'PANEL',
    title: 'AI Automation — how much work have agents actually replaced?',
    description:
      "Every desk claims agents are replacing teams. We brought in the people who've shipped them to production to separate what's genuinely useful from what's actually noise.",
    speakers: [
      { initials: 'MH', name: 'Markus Hav', role: 'Head of AI Solutions, PostScriptum' },
      { initials: 'EK', name: 'Emil Kvarnhammer', role: 'CEO & Co-Founder, Oplane' },
      { initials: 'EN', name: 'Eetu Knuutinen', role: '' },
    ],
  },
  {
    time: '10:15–10:30',
    type: 'break',
    typeLabel: 'BREAK',
    title: 'Coffee break & mingle',
    description: '',
  },
  {
    time: '10:45–11:30',
    type: 'panel',
    typeLabel: 'PANEL',
    title: 'A €350M Series-B led by Europe — bold bet or pipedream?',
    description:
      "Most rounds that size still cross the Atlantic. ReOrbit has an ambitious goal — and a strategic reason — to have its next round led by European investors. We're joined by the investors behind some of the segment's largest raises to debate whether European capital can lead at the frontier, and what it'd take.",
    speakers: [
      { initials: 'OT', name: 'Ossi Tiainen', role: 'Partner, NGP Capital' },
      { initials: 'MD', name: 'Michael Dimelow', role: 'Partner, Molten Ventures' },
      { initials: 'AP', name: 'Aleksi Partanen', role: 'Moderator · GP, Icebreaker' },
    ],
  },
  {
    time: '11:30–11:40',
    type: 'ceo',
    typeLabel: 'CEO UPDATE · FUND I',
    title: "Fund I's fastest-growing company",
    description: 'Mika Aalto, CEO & Co-Founder of Hoxhunt.',
  },
  {
    time: '11:40–11:50',
    type: 'ceo',
    typeLabel: 'CEO UPDATE · FUND II',
    title: "Fund II's fastest-growing company",
    description: 'Sethu Suvanam, CEO & Co-Founder of ReOrbit.',
  },
  {
    time: '11:50–12:00',
    type: 'ceo',
    typeLabel: 'CEO UPDATE · FUND III',
    title: "Fund III's fastest-growing company",
    description: 'Marko Saul, CEO & Co-Founder of Crewpoint.',
  },
  {
    time: '12:00–13:00',
    type: 'networking',
    typeLabel: 'NETWORKING',
    title: 'Lunch & mingle',
    description: 'Keep the conversations going over lunch before we wrap.',
  },
]

export interface AttributionPerson {
  initials: string
  name: string
  label: string
}

export const PANEL_MODERATORS: AttributionPerson[] = [
  { initials: 'RS', name: 'Riku Seppälä', label: 'GP, Icebreaker' },
  { initials: 'AP', name: 'Aleksi Partanen', label: 'GP, Icebreaker' },
]

export const CEO_UPDATERS: AttributionPerson[] = [
  { initials: 'MA', name: 'Mika Aalto', label: 'Hoxhunt' },
  { initials: 'SS', name: 'Sethu Suvanam', label: 'ReOrbit' },
  { initials: 'MS', name: 'Marko Saul', label: 'Crewpoint' },
]
