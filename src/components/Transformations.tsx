import React from 'react';
import { CLUB_METRICS, MEMBER_STORIES, TRAINING_PORTRAIT_IMG } from '../data/mockData';

interface TransformationsProps {
  onBookVisit: () => void;
}

export const Transformations: React.FC<TransformationsProps> = ({ onBookVisit }) => {
  const [leadStory, ...secondaryStories] = MEMBER_STORIES;

  return (
    <section id="transformations" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0B0B0B] border-b border-[#2D2D2D]">
      <div className="max-w-7xl mx-auto">
        {/* Integrated Architectural Club Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8 pb-12 sm:pb-16 mb-12 sm:mb-16 border-b border-[#2D2D2D]">
          {CLUB_METRICS.map((metric, i) => (
            <div key={i} className="pt-3 border-t border-[#2D2D2D] lg:border-t-0 lg:pt-0">
              <div className="flex items-baseline gap-2 mb-1.5">
                <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-stats text-[#F5F5F5] tabular-nums">
                  {metric.value}
                </span>
                <span className="text-xs font-mono text-[#FFD200] whitespace-nowrap">
                  {metric.unit}
                </span>
              </div>
              <p className="text-xs text-[#787878] leading-relaxed max-w-[22ch]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold text-[#FFD200] block mb-2">
              Member Notes
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#F5F5F5] uppercase leading-[1.03]">
              REAL WORK. MEASURED RESULTS.
            </h2>
          </div>
          <button
            onClick={onBookVisit}
            className="text-xs font-semibold text-[#F5F5F5] hover:text-[#FFD200] border-b border-[#2D2D2D] hover:border-[#FFD200] pb-1 self-start md:self-auto transition-colors whitespace-nowrap cursor-pointer"
          >
            Schedule an assessment →
          </button>
        </div>

        {/* Asymmetric Editorial Stories Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left: Portrait Photo + Featured Member Story (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            <div className="sm:col-span-5 aspect-[3/4] bg-[#141414] overflow-hidden">
              <img
                src={TRAINING_PORTRAIT_IMG}
                alt="Member deadlifting on Olympic platform at FitFuel"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="sm:col-span-7 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-xs text-[#787878] mb-3">
                <span className="text-[#FFD200] font-mono">{leadStory.timeframe}</span>
                <span aria-hidden="true">·</span>
                <span>{leadStory.focus}</span>
              </div>

              <blockquote className="text-sm sm:text-base text-[#F5F5F5] leading-relaxed mb-5">
                “{leadStory.quote}”
              </blockquote>

              <div className="pt-4 border-t border-[#2D2D2D]">
                <div className="text-base font-bold font-display text-[#F5F5F5]">
                  {leadStory.name}
                </div>
                <div className="text-xs text-[#787878] mb-2">
                  {leadStory.role}
                </div>
                <div className="text-xs font-mono text-[#FFD200]">
                  {leadStory.outcome}
                </div>
              </div>
            </div>
          </div>

          {/* Right: 2 Hairline-Separated Member Voices (6 cols) */}
          <div className="lg:col-span-6 divide-y divide-[#2D2D2D] border-t border-b border-[#2D2D2D]">
            {secondaryStories.map(member => (
              <div key={member.id} className="py-6 sm:py-7">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-3">
                  <span className="font-mono text-[#FFD200]">{member.outcome}</span>
                  <span className="text-[#787878]">{member.timeframe} · {member.focus}</span>
                </div>

                <blockquote className="text-sm text-[#F5F5F5]/90 leading-relaxed mb-4">
                  “{member.quote}”
                </blockquote>

                <div className="flex flex-wrap items-baseline gap-x-2 text-xs">
                  <span className="font-bold font-display text-[#F5F5F5]">{member.name}</span>
                  <span aria-hidden="true" className="text-[#787878]">—</span>
                  <span className="text-[#787878]">{member.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
