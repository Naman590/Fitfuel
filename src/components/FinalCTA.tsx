import React from 'react';
import { ArrowUpRight, PhoneCall } from 'lucide-react';
import { CLUB_VISIT_DETAILS } from '../data/mockData';

interface FinalCTAProps {
  onBookVisit: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookVisit }) => {
  return (
    <section id="visit" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0B0B0B] border-b border-[#2D2D2D]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          {/* Left Dominant Closing Headline & Inline Actions (8 cols) */}
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold text-[#FFD200] block mb-3">
              Visit Faridabad Flagship
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display uppercase tracking-tight text-[#F5F5F5] leading-[0.94] mb-5 sm:mb-6 text-balance">
              YOUR STRONGEST SELF<br />
              <span className="text-[#FFD200]">STARTS HERE.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#787878] max-w-lg leading-relaxed mb-7 sm:mb-8">
              Book a private walkthrough, sample a coached session on the Eleiko floor, and meet the team before deciding anything.
            </p>

            {/* Strictly Inline Action Buttons */}
            <div className="flex flex-row items-center gap-3">
              <button
                onClick={onBookVisit}
                className="px-4 py-3.5 sm:px-8 sm:py-4 bg-[#FFD200] hover:bg-[#f0c600] text-black font-display text-[11px] sm:text-sm font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Book a Visit</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </button>

              <a
                href={`tel:${CLUB_VISIT_DETAILS.phone.replace(/\s+/g, '')}`}
                className="px-4 py-3.5 sm:px-6 sm:py-4 border border-[#2D2D2D] hover:border-[#FFD200] text-[#F5F5F5] font-display text-[11px] sm:text-sm font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
              >
                <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFD200] shrink-0" />
                <span className="sm:hidden">Call Desk</span>
                <span className="hidden sm:inline">{CLUB_VISIT_DETAILS.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Practical Club Coordinates (4 cols) */}
          <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#2D2D2D] pt-6 lg:pt-0 lg:pl-8 space-y-5 text-xs">
            <div>
              <div className="text-[#787878] mb-1">Address</div>
              <div className="text-[#F5F5F5] leading-relaxed">
                {CLUB_VISIT_DETAILS.address}
              </div>
            </div>
            <div>
              <div className="text-[#787878] mb-1">Opening Hours</div>
              <div className="text-[#F5F5F5] font-mono">
                {CLUB_VISIT_DETAILS.hours}
              </div>
            </div>
            <div>
              <div className="text-[#787878] mb-1">Arrival Notes</div>
              <div className="text-[#F5F5F5]/85 leading-relaxed">
                Complimentary valet parking · Day lockers, towels, and cold-pressed espresso included on first visit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
