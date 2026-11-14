import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { COACHING_ROLES } from '../data/mockData';

interface BecomeATrainerProps {
  onApplyTrainer: (specialization?: string) => void;
}

export const BecomeATrainerSection: React.FC<BecomeATrainerProps> = ({ onApplyTrainer }) => {
  return (
    <section id="trainer" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0B0B0B] border-b border-[#2D2D2D]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Sticky Editorial Intro (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-xs font-semibold text-[#FFD200] block mb-2">
              Coaching Faculty
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#F5F5F5] uppercase leading-[1.03] mb-4">
              BECOME A TRAINER.
            </h2>
            <p className="text-sm text-[#787878] leading-relaxed mb-6">
              We hire coaches who treat movement as a craft—not performers chasing applause. Our floor gives serious practitioners calibrated hardware, steady retainers, and long-term private rosters.
            </p>

            {/* Concise Faculty Terms */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 py-5 border-y border-[#2D2D2D] mb-7 text-xs">
              <div>
                <div className="text-[#787878] mb-0.5">Compensation</div>
                <div className="text-[#F5F5F5] font-medium">Base + Private Split</div>
              </div>
              <div>
                <div className="text-[#787878] mb-0.5">Education</div>
                <div className="text-[#F5F5F5] font-medium">Annual Cert Stipend</div>
              </div>
              <div>
                <div className="text-[#787878] mb-0.5">Floor Access</div>
                <div className="text-[#F5F5F5] font-medium">Full Eleiko & Turf</div>
              </div>
              <div>
                <div className="text-[#787878] mb-0.5">Roster</div>
                <div className="text-[#F5F5F5] font-medium">Dedicated Client Intake</div>
              </div>
            </div>

            <button
              onClick={() => onApplyTrainer()}
              className="px-5 py-3 bg-[#FFD200] hover:bg-[#f0c600] text-black font-display text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <span>Audition for Faculty</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </button>
          </div>

          {/* Right Open Roles Index (7 cols) */}
          <div className="lg:col-span-7 divide-y divide-[#2D2D2D] border-t border-b border-[#2D2D2D]">
            {COACHING_ROLES.map((role, idx) => (
              <div
                key={role.id}
                className="py-6 sm:py-7 flex flex-col gap-3 group"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs text-[#FFD200]">
                      0{idx + 1}.
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-[#F5F5F5] group-hover:text-[#FFD200] transition-colors">
                      {role.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-[#F5F5F5]/80 tabular-nums">
                    {role.compensation}
                  </span>
                </div>

                <div className="text-xs text-[#787878] sm:pl-7">
                  {role.discipline} · {role.schedule}
                </div>

                <p className="text-xs sm:text-sm text-[#F5F5F5]/80 leading-relaxed sm:pl-7">
                  {role.summary}
                </p>

                <div className="flex flex-row items-center justify-between gap-4 pt-1 sm:pl-7">
                  <span className="text-[11px] text-[#787878]">
                    {role.credential}
                  </span>
                  <button
                    onClick={() => onApplyTrainer(role.title)}
                    className="px-3.5 py-2 border border-[#2D2D2D] group-hover:border-[#FFD200] hover:bg-[#FFD200] text-[#F5F5F5] hover:text-black text-[11px] font-display font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Apply</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
