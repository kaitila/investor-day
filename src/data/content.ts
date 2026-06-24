import markusHav from "../assets/markus-hav.jpg";
import emilKvarnhammar from "../assets/emil-kvarnhammar.jpg";
import ainoBergius from "../assets/aino-bergius.jpg";
import ossiTiainen from "../assets/ossi-tiainen.jpg";
import michaelDimelow from "../assets/michael-dimelow.jpg";
import aleksiPartanen from "../assets/aleksi-partanen.jpg";
import lasseLehtinen from "../assets/lasse-lehtinen.jpg";
import rikuSeppala from "../assets/riku-seppälä.jpg";
import mikaAalto from "../assets/mika-aalto.jpg";
import sethuSuvanam from "../assets/sethu-suvanam.jpg";
import markoSaul from "../assets/marko-saul.jpg";

import logoHoxhunt from "../assets/hoxhunt.jpg";
import logoReOrbit from "../assets/reorbit.jpg";
import logoCrewpoint from "../assets/crewpoint.jpg";
import logoPostScriptum from "../assets/postsrciptum.jpg";
import logoOplane from "../assets/oplane.jpg";
import logoLovable from "../assets/lovable.jpg";
import logoNgpCapital from "../assets/ngp-capital.jpg";
import logoMoltenVentures from "../assets/molten-ventures.jpg";

export const EVENT = {
  name: "Icebreaker Investor Day 2026",
  date: "September 8, 2026",
  dateLong: "Tuesday, September 8, 2026",
  time: "8:00–13:00",
  timezone: "EEST",
  venue: "Kulttuuritehdas Korjaamo",
  address: "Töölönkatu 51 A–B, Helsinki",
  lumaUrl: "https://luma.com/gbt06bby",
  icebreakerUrl: "https://icebreaker.vc",
  linkedinUrl: "https://www.linkedin.com/company/icebreaker-vc/",
  twitterUrl: "https://x.com/icebreakervc",
  privacyPolicyUrl: "https://icebreaker.vc/privacy-policy",
  codeOfConductUrl: "https://icebreaker.vc/code-of-conduct",
  esgPolicyUrl: "https://icebreaker.vc/esg-policy",
  euDisclosure:
    "Icebreaker Fund II is supported by InnovFin Equity, with the financial backing of the European Union under Horizon 2020 Financial Instruments and the European Fund for Strategic Investments (EFSI) set up under the Investment Plan for Europe. The purpose of EFSI is to help support financing and implementing productive investments in the European Union and to ensure increased access to financing.",
} as const;

export interface Speaker {
  initials: string;
  name: string;
  role: string;
  org: string;
  bio: string;
  linkedinUrl: string;
  photo?: string;
  logo?: string;
}

export const SPEAKERS: Speaker[] = [
  {
    initials: "MH",
    name: "Markus Hav",
    role: "Head of AI Automation",
    org: "PostScriptum",
    bio: "Head of AI Automation at PostScriptum (Peter Sarlin's family office), driving agentic transformation across the portfolio. Previously Head of AI Automation at Hoxhunt.",
    linkedinUrl: "https://www.linkedin.com/in/markus-hav-6420b8a2/",
    photo: markusHav,
    logo: logoPostScriptum,
  },
  {
    initials: "EK",
    name: "Emil Kvarnhammar",
    role: "CEO & Co-Founder",
    org: "Oplane",
    bio: "Building the agentic code-review platform trusted by the world's fastest-growing AI scaleups and startups.",
    linkedinUrl: "https://www.linkedin.com/in/emilkvarnhammar/",
    photo: emilKvarnhammar,
    logo: logoOplane,
  },
  {
    initials: "AB",
    name: "Aino Bergius",
    role: "Head of Nordics",
    org: "Lovable",
    bio: "Leading the Nordics for Lovable — the AI company that needs no introduction.",
    linkedinUrl: "https://www.linkedin.com/in/ainobergius/",
    photo: ainoBergius,
    logo: logoLovable,
  },
  {
    initials: "OT",
    name: "Ossi Tiainen",
    role: "Partner",
    org: "NGP Capital",
    bio: "Growth-stage investor at NGP Capital, behind space-tech portfolio companies including The Exploration Company ($400M raised), Xona Space Systems ($300M) and Skylo ($180M).",
    linkedinUrl: "https://www.linkedin.com/in/ossitiainen/",
    photo: ossiTiainen,
    logo: logoNgpCapital,
  },
  {
    initials: "MD",
    name: "Michael Dimelow",
    role: "Partner",
    org: "Molten Ventures",
    bio: "Deep roots in space and defence tech. Molten is one of the largest shareholders in ICEYE, which recently announced its €450M growth round.",
    linkedinUrl: "https://www.linkedin.com/in/michaeldimelow/",
    photo: michaelDimelow,
    logo: logoMoltenVentures,
  },
  {
    initials: "MA",
    name: "Mika Aalto",
    role: "CEO & Co-Founder",
    org: "Hoxhunt",
    bio: "Hoxhunt has the world's best product and a well-oiled US-based sales machine closing new Fortune 500 companies every quarter. As a result, the company has grown over 50% annually for several years without burning cash. It won't be long before they graduate to the €100M ARR league.",
    linkedinUrl: "https://www.linkedin.com/in/mpaalto/",
    photo: mikaAalto,
    logo: logoHoxhunt,
  },
  {
    initials: "SS",
    name: "Sethu Suvanam",
    role: "CEO & Co-Founder",
    org: "ReOrbit",
    bio: "ReOrbit is one of the most interesting space tech companies in Europe. It has closed its first major B2G deals and is about to surpass the €500M annual sales threshold.",
    linkedinUrl: "https://www.linkedin.com/in/sethu-saveda-suvanam-426a9421/",
    photo: sethuSuvanam,
    logo: logoReOrbit,
  },
  {
    initials: "MS",
    name: "Marko Saul",
    role: "CEO & Co-Founder",
    org: "Crewpoint",
    bio: "Crewpoint is a great example of a modern AI-startup capable of running its core operations a lot more efficiently than the incumbents. The company has started to grow its revenue through acquisitions and is able to improve the profitability of the acquired businesses many times over compared to traditional buy-and-build roll-ups.",
    linkedinUrl: "https://www.linkedin.com/in/markosaul/",
    photo: markoSaul,
    logo: logoCrewpoint,
  },
];

export type AgendaItemType =
  | "breakfast"
  | "update"
  | "panel"
  | "break"
  | "ceo"
  | "networking";

export interface AgendaSpeaker {
  initials: string;
  name: string;
  role: string;
  photo?: string;
  logo?: string;
}

export interface AgendaItem {
  time: string;
  type: AgendaItemType;
  typeLabel: string;
  title: string;
  description: string;
  speakers?: AgendaSpeaker[];
}

export const AGENDA: AgendaItem[] = [
  {
    time: "8:00–9:00",
    type: "breakfast",
    typeLabel: "BREAKFAST",
    title: "Breakfast & mingle",
    description: "Coffee, breakfast and warm introductions to open the day.",
  },
  {
    time: "9:00–9:45",
    type: "update",
    typeLabel: "LIVE UPDATE",
    title: "Icebreaker Updates",
    description: "Where the funds stand and what's ahead.",
    speakers: [
      {
        initials: "LL",
        name: "Lasse Lehtinen",
        role: "GP, Icebreaker",
        photo: lasseLehtinen,
      },
    ],
  },
  {
    time: "9:45–10:30",
    type: "panel",
    typeLabel: "PANEL",
    title: "AI Automation — how much work have agents actually replaced?",
    description:
      "Every deck claims agents are replacing teams. We brought in the people who've shipped them to production to separate what's genuinely doing the work from what's still a slick demo — and where the next year of real automation lands.",
    speakers: [
      {
        initials: "MH",
        name: "Markus Hav",
        role: "Head of AI Solutions, PostScriptum",
        photo: markusHav,
      },
      {
        initials: "EK",
        name: "Emil Kvarnhammar",
        role: "CEO & Co-Founder, Oplane",
        photo: emilKvarnhammar,
      },
      {
        initials: "AB",
        name: "Aino Bergius",
        role: "Head of Nordics, Lovable",
        photo: ainoBergius,
      },
      {
        initials: "RS",
        name: "Riku Seppälä",
        role: "Moderator · GP, Icebreaker",
        photo: rikuSeppala,
      },
    ],
  },
  {
    time: "10:15–10:30",
    type: "break",
    typeLabel: "BREAK",
    title: "Coffee break & mingle",
    description: "",
  },
  {
    time: "10:45–11:30",
    type: "panel",
    typeLabel: "PANEL",
    title: "A €350M Series-B led by Europe — bold bet or pipedream?",
    description:
      "Most rounds that size still cross the Atlantic. ReOrbit has an ambitious goal — and a strategic reason — to have its next round led by European investors. We're joined by the investors behind some of the segment's largest raises to debate whether European capital can lead at the frontier, and what it'd take.",
    speakers: [
      {
        initials: "OT",
        name: "Ossi Tiainen",
        role: "Partner, NGP Capital",
        photo: ossiTiainen,
      },
      {
        initials: "MD",
        name: "Michael Dimelow",
        role: "Partner, Molten Ventures",
        photo: michaelDimelow,
      },
      {
        initials: "AP",
        name: "Aleksi Partanen",
        role: "Moderator · GP, Icebreaker",
        photo: aleksiPartanen,
      },
    ],
  },
  {
    time: "11:30–11:40",
    type: "ceo",
    typeLabel: "CEO UPDATE · FUND I",
    title: "Fund I's fastest-growing company",
    description: "",
    speakers: [
      {
        initials: "MA",
        name: "Mika Aalto",
        role: "CEO & Co-Founder, Hoxhunt",
        photo: mikaAalto,
        logo: logoHoxhunt,
      },
    ],
  },
  {
    time: "11:40–11:50",
    type: "ceo",
    typeLabel: "CEO UPDATE · FUND II",
    title: "Fund II's fastest-growing company",
    description: "",
    speakers: [
      {
        initials: "SS",
        name: "Sethu Suvanam",
        role: "CEO & Co-Founder, ReOrbit",
        photo: sethuSuvanam,
        logo: logoReOrbit,
      },
    ],
  },
  {
    time: "11:50–12:00",
    type: "ceo",
    typeLabel: "CEO UPDATE · FUND III",
    title: "Fund III's fastest-growing company",
    description: "",
    speakers: [
      {
        initials: "MS",
        name: "Marko Saul",
        role: "CEO & Co-Founder, Crewpoint",
        photo: markoSaul,
        logo: logoCrewpoint,
      },
    ],
  },
  {
    time: "12:00–13:00",
    type: "networking",
    typeLabel: "NETWORKING",
    title: "Lunch & mingle",
    description: "Keep the conversations going over lunch before we wrap.",
  },
];

