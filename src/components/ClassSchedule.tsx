import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SCHEDULE_DAYS, SCHEDULE_ITEMS } from '../data/mockData';
import { ClassItem } from '../types';

interface ClassScheduleProps {
  onReserveSpot: (classTitle: string) => void;
}

export const ClassSchedule: React.FC<ClassScheduleProps> = ({ onReserveSpot }) => {
  const [activeDay, setActiveDay] = useState<string>('Mon');
  const [disciplineFilter, setDisciplineFilter] = useState<string>('All');

  const rawClasses: ClassItem[] = SCHEDULE_ITEMS[activeDay] || [];
  const filteredClasses =
    disciplineFilter === 'All'
      ? rawClasses
      : rawClasses.filter(c => c.discipline.toLowerCase().includes(disciplineFilter.toLowerCase()));

  return (
    <section id="schedule" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#0B0B0B] border-b border-[#2D2D2D]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold text-[#FFD200] block mb-2">
              Weekly Timetable
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#F5F5F5] uppercase leading-[1.03]">
              COACHED SESSIONS.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#787878] max-w-sm leading-relaxed">
            Sixteen spots per room. Reserve your platform, bag, or sled lane up to seven days out.
          </p>
        </div>

        {/* Inline Controls Row: Days + Discipline Filter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 mb-2 border-b border-[#2D2D2D]">
          {/* Days */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
            {SCHEDULE_DAYS.map(day => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`shrink-0 px-3.5 sm:px-4 py-2 text-xs font-display font-bold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                  activeDay === day
                    ? 'bg-[#FFD200] text-black'
                    : 'bg-[#141414] text-[#787878] hover:text-[#F5F5F5]'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Discipline Filter */}
          <div className="flex items-center gap-1 p-1 bg-[#141414] border border-[#2D2D2D] overflow-x-auto scrollbar-none self-start lg:self-auto max-w-full">
            {['All', 'Strength & Turf', 'Combat', 'Thermal'].map(f => (
              <button
                key={f}
                onClick={() => setDisciplineFilter(f)}
                className={`shrink-0 whitespace-nowrap px-3 py-1 text-[11px] sm:text-xs font-medium transition-colors cursor-pointer ${
                  disciplineFilter === f
                    ? 'bg-[#2D2D2D] text-[#F5F5F5]'
                    : 'text-[#787878] hover:text-[#F5F5F5]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Hairline Editorial Schedule Rows */}
        {filteredClasses.length === 0 ? (
          <div className="py-12 text-center text-sm text-[#787878] border-b border-[#2D2D2D]">
            No sessions scheduled for this discipline on {activeDay}.
          </div>
        ) : (
          <div className="divide-y divide-[#2D2D2D] border-b border-[#2D2D2D]">
            {filteredClasses.map(item => (
              <div
                key={item.id}
                className="py-5 sm:py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                  {/* Time & Duration */}
                  <div className="flex items-baseline gap-3 sm:block sm:min-w-[110px]">
                    <span className="text-lg sm:text-xl font-bold font-stats text-[#F5F5F5] tabular-nums">
                      {item.time}
                    </span>
                    <span className="text-xs font-mono text-[#787878] sm:block sm:mt-0.5">
                      {item.duration}
                    </span>
                  </div>

                  {/* Title & Clean Unboxed Metadata */}
                  <div>
                    <h4 className="text-base sm:text-lg font-bold font-display text-[#F5F5F5] group-hover:text-[#FFD200] transition-colors mb-1">
                      {item.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#787878]">
                      <span className="text-[#F5F5F5]/85">{item.coach}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.studio}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.discipline}</span>
                    </div>
                  </div>
                </div>

                {/* Inline Availability & Reserve CTA */}
                <div className="flex flex-row items-center justify-between md:justify-end gap-4 sm:gap-6 pt-2 md:pt-0">
                  <span className="text-xs font-mono text-[#787878] tabular-nums">
                    <strong className="text-[#F5F5F5] font-medium">{item.spotsLeft}</strong>{' '}
                    {item.spotsLeft === 1 ? 'spot left' : 'spots left'}
                  </span>

                  <button
                    onClick={() => onReserveSpot(`${item.title} (${activeDay} · ${item.time})`)}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 border border-[#2D2D2D] group-hover:border-[#FFD200] hover:bg-[#FFD200] text-[#F5F5F5] hover:text-black text-[11px] sm:text-xs font-bold font-display uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Reserve Spot</span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
