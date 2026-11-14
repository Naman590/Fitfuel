import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CLUB_SPACES } from '../data/mockData';

interface ExperienceFacilitiesProps {
  onBookVisit: () => void;
}

export const ExperienceFacilities: React.FC<ExperienceFacilitiesProps> = ({ onBookVisit }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const current = CLUB_SPACES[activeTab];

  return (
    <section id="facilities" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0B0B0B] border-b border-[#2D2D2D]">
      <div className="max-w-7xl mx-auto">
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-end mb-8 sm:mb-12">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold text-[#FFD200] block mb-2">
              The Spaces
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#F5F5F5] uppercase leading-[1.03] text-balance">
              BUILT FOR SERIOUS TRAINING AND QUIET RECOVERY.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-sm text-[#787878] leading-relaxed">
              Four distinct rooms across 22,000 square feet—laid out so members never fight for a platform, a heavy bag, or space to decompress afterward.
            </p>
          </div>
        </div>

        {/* Numbered Space Selector Strip */}
        <div className="flex items-center gap-2 sm:gap-6 overflow-x-auto scrollbar-none border-b border-[#2D2D2D] mb-8 sm:mb-10">
          {CLUB_SPACES.map((space, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={space.id}
                onClick={() => setActiveTab(idx)}
                className={`pb-3.5 pt-1 px-1 text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors border-b-2 cursor-pointer flex items-baseline gap-2 ${
                  isActive
                    ? 'border-[#FFD200] text-[#F5F5F5]'
                    : 'border-transparent text-[#787878] hover:text-[#F5F5F5]'
                }`}
              >
                <span className={`font-mono text-[11px] ${isActive ? 'text-[#FFD200]' : 'text-[#787878]'}`}>
                  {space.index}.
                </span>
                <span>{space.title}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric Editorial Photo + Unboxed Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          {/* Authentic Photography (7 cols) */}
          <div className="lg:col-span-7 bg-[#141414] overflow-hidden relative aspect-[16/10] sm:aspect-[16/9]">
            <img
              src={current.image}
              alt={current.imageAlt}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center transition-opacity duration-300"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-6 flex items-center gap-2 text-xs text-[#F5F5F5]/90">
              <span className="font-mono text-[#FFD200]">{current.index}</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium">{current.subtitle}</span>
            </div>
          </div>

          {/* Unboxed Architectural Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between lg:pt-2">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#F5F5F5] uppercase tracking-tight mb-3">
                {current.title}
              </h3>
              <p className="text-sm text-[#F5F5F5]/80 leading-relaxed mb-6 sm:mb-8">
                {current.description}
              </p>

              {/* Hairline 2x2 Spec Table */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#2D2D2D] pt-5 mb-7">
                {current.specs.map((spec, i) => (
                  <div key={i}>
                    <div className="text-[11px] text-[#787878] mb-0.5">{spec.label}</div>
                    <div className="text-xs sm:text-sm font-medium text-[#F5F5F5]">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-[#2D2D2D] flex items-center justify-between gap-4">
              <button
                onClick={onBookVisit}
                className="px-5 py-3 bg-[#FFD200] hover:bg-[#f0c600] text-black font-display text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Walk the Floor</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </button>
              <span className="text-xs text-[#787878]">
                Private tours daily by appointment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
