import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { RECEPTION_HERO_IMG } from '../data/mockData';

interface HeroProps {
  onBookVisit: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookVisit }) => {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-end pt-24 pb-7 sm:pb-10 px-4 sm:px-6 md:px-12 bg-[#0B0B0B] overflow-hidden border-b border-[#2D2D2D]">
      {/* Real Gym Reception & Member Lounge Photography */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={RECEPTION_HERO_IMG}
          alt="FitFuel Fitness Luxury Reception Area and Member Lounge in Faridabad"
          className="w-full h-full object-cover object-center brightness-[0.94] contrast-[1.03]"
        />
        {/* Measured scrim strictly behind lower-left typography so reception desk & lounge stay bright and clear */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/92 via-[#0B0B0B]/28 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-full md:w-3/5 bg-gradient-to-r from-[#0B0B0B]/70 via-[#0B0B0B]/20 to-transparent pointer-events-none" />
      </div>

      {/* Asymmetric Editorial Bottom-Left Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-2xl pb-8 sm:pb-10">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#F5F5F5]/80 mb-3 sm:mb-4">
            <span className="text-[#FFD200] font-semibold">Sector 15, Faridabad</span>
            <span aria-hidden="true" className="text-[#787878]">·</span>
            <span>Open Daily 05:30 – 23:00</span>
          </div>

          <h1 className="text-[2.25rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight leading-[0.96] text-[#F5F5F5] uppercase mb-4 sm:mb-5 text-balance">
            WHERE FITNESS<br />
            <span className="text-[#FFD200]">MEETS LIFESTYLE.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#F5F5F5]/85 font-normal max-w-md leading-relaxed mb-6 sm:mb-7">
            Calibrated Eleiko lifting bays, heavy-bag boxing studio, and 39°F contrast recovery under one quiet roof.
          </p>

          {/* Inline Action Buttons */}
          <div className="flex flex-row items-center gap-3">
            <button
              onClick={onBookVisit}
              className="px-4 py-3 sm:px-7 sm:py-3.5 bg-[#FFD200] hover:bg-[#f0c600] text-black font-display text-[11px] sm:text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 sm:gap-2.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Book a Visit</span>
              <ArrowUpRight className="w-4 h-4 text-black shrink-0" />
            </button>

            <a
              href="#facilities"
              className="px-4 py-3 sm:px-6 sm:py-3.5 bg-[#0B0B0B]/80 hover:bg-[#1A1A1A] border border-[#F5F5F5]/25 hover:border-[#FFD200] text-[#F5F5F5] font-display text-[11px] sm:text-sm font-semibold uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 flex items-center justify-center"
            >
              Explore the Club
            </a>
          </div>
        </div>

        {/* Hairline Baseline Strip */}
        <div className="pt-4 sm:pt-5 border-t border-[#F5F5F5]/15 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[11px] sm:text-xs text-[#F5F5F5]/75">
          <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-5 gap-y-1">
            <span>Grand Lounge</span>
            <span aria-hidden="true" className="text-[#787878]">/</span>
            <span>Eleiko Strength Floor</span>
            <span aria-hidden="true" className="text-[#787878]">/</span>
            <span>Boxing Studio</span>
            <span aria-hidden="true" className="hidden sm:inline text-[#787878]">/</span>
            <span className="hidden sm:inline">Cedar Sauna & Cold Plunge</span>
          </div>
          <div className="font-mono text-[11px] text-[#FFD200] whitespace-nowrap">
            Faridabad Flagship · Est. 2019
          </div>
        </div>
      </div>
    </section>
  );
};
