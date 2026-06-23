import React, { useState, useEffect } from "react";
import { EVENT } from "../data/content";
import { CalendarIcon, MapPinIcon, UtensilsIcon } from "./Icons";

const H1_LINE1 = "Icebreaker";
const H1_LINE2 = "Investor Day 2026";
const PARA =
  "A focused half-day with the Icebreaker team, our founders and LPs, and a few special guests — candid panels on AI automation and European growth-stage funding, straight-talk updates from our fastest-growing companies, and plenty of time to connect.";

const H1_FULL = H1_LINE1 + H1_LINE2; // single string for one continuous curve

// Timing constants (ms from mount)
const H1_START = 150;
const H1_DUR = 1400; // easeInQuad across all 27 chars as one unit
const P_START = 1750;
const P_DUR = 2000;
const META_AT = 3950;
const CTA_AT = 4200;

// Characters accelerate at the start and decelerate towards the end.
// time(i) = duration * easeInQuad(i/n) → intervals grow larger near the end.
function easeInQuad(x: number): number {
  return x * x;
}

function scheduleTypewriter(
  text: string,
  duration: number,
  startDelay: number,
  setter: React.Dispatch<React.SetStateAction<number>>
): ReturnType<typeof setTimeout>[] {
  return Array.from({ length: text.length }, (_, idx) => {
    const i = idx + 1;
    return setTimeout(
      () => setter(i),
      startDelay + duration * easeInQuad(i / text.length)
    );
  });
}

export default function Hero(): React.JSX.Element {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [h1Count, setH1Count] = useState(prefersReduced ? H1_FULL.length : 0);
  const [pCount, setPCount] = useState(prefersReduced ? PARA.length : 0);
  const [showMeta, setShowMeta] = useState(prefersReduced);
  const [showCta, setShowCta] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) return;

    const timers: ReturnType<typeof setTimeout>[] = [
      ...scheduleTypewriter(H1_FULL, H1_DUR, H1_START, setH1Count),
      ...scheduleTypewriter(PARA, P_DUR, P_START, setPCount),
      setTimeout(() => setShowMeta(true), META_AT),
      setTimeout(() => setShowCta(true), CTA_AT),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-12.5 max-md:px-5 pt-10 pb-24 max-md:pt-7 max-md:pb-16 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest bg-white border border-border-subtle rounded px-3 py-1.5 text-on-surface-variant mb-10${prefersReduced ? "" : " animate-fade-up"}`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-status-success shrink-0" />
          Invite-only · Limited seats
        </div>

        {/* Headline — single animation curve across both lines */}
        <h1 className="font-sans font-semibold leading-none tracking-[-0.02em] mb-6">
          <span className="block text-primary text-[64px] max-md:text-[40px] min-h-[1em]">
            {H1_FULL.slice(0, Math.min(h1Count, H1_LINE1.length))}
          </span>
          <span className="block text-deep-navy text-[64px] max-md:text-[40px] min-h-[1em]">
            {h1Count > H1_LINE1.length ? H1_FULL.slice(H1_LINE1.length, h1Count) : ""}
          </span>
        </h1>

        {/* Body — invisible spacer reserves full height; typed text overlays it */}
        <div className="relative max-w-140 mx-auto mb-10">
          <p className="text-on-surface-variant text-lg max-md:text-base leading-relaxed invisible select-none" aria-hidden="true">
            {PARA}
          </p>
          <p className="text-on-surface-variant text-lg max-md:text-base leading-relaxed absolute inset-0">
            {PARA.slice(0, pCount)}
          </p>
        </div>

        {/* Event meta */}
        <div
          className={`inline-flex flex-wrap divide-x divide-border-subtle border border-border-subtle rounded bg-white mb-10 transition-all duration-700 ${
            showMeta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <div className="flex items-center gap-3 px-5 py-3.5 max-md:px-4 max-md:py-3">
            <CalendarIcon className="text-on-surface-variant shrink-0" />
            <div className="text-left">
              <div className="text-sm font-semibold text-on-surface">
                {EVENT.date}
              </div>
              <div className="font-mono text-xs text-on-surface-variant mt-0.5">
                {EVENT.time} ({EVENT.timezone})
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3.5 max-md:px-4 max-md:py-3">
            <MapPinIcon className="text-on-surface-variant shrink-0" />
            <div className="text-left">
              <div className="text-sm font-semibold text-on-surface">
                {EVENT.venue}
              </div>
              <div className="font-mono text-xs text-on-surface-variant mt-0.5">
                {EVENT.address}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 px-5 py-3.5 max-md:px-4 max-md:py-3">
            <UtensilsIcon className="text-on-surface-variant shrink-0" />
            <div className="text-left">
              <div className="text-sm font-semibold text-on-surface">
                Breakfast & lunch
              </div>
              <div className="font-mono text-xs text-on-surface-variant mt-0.5">
                Plus plenty of mingling
              </div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div
          className={`flex items-center justify-center flex-wrap gap-4 transition-all duration-700 ${
            showCta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
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
  );
}
