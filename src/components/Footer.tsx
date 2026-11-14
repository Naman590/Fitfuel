import React from 'react';
import { CLUB_VISIT_DETAILS } from '../data/mockData';

interface FooterProps {
  onBookVisit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBookVisit }) => {
  return (
    <footer className="bg-[#0B0B0B] text-[#787878] text-xs py-12 sm:py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 mb-10 sm:mb-12">
          {/* Brand Summary */}
          <div className="col-span-2 md:col-span-5 space-y-3">
            <a href="#" className="text-xl font-extrabold font-display tracking-tight text-[#F5F5F5] inline-block">
              FITFUEL<span className="text-[#FFD200]">.</span>
            </a>
            <p className="text-xs text-[#787878] max-w-sm leading-relaxed">
              Faridabad’s private athletic club for calibrated strength training, combat conditioning, and contrast recovery.
            </p>
            <div className="text-xs text-[#F5F5F5]/80">
              {CLUB_VISIT_DETAILS.address}
            </div>
          </div>

          {/* Club Links */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-[#F5F5F5] font-semibold mb-3">Club</div>
            <ul className="space-y-2">
              <li><a href="#facilities" className="hover:text-[#FFD200] transition-colors">The Spaces</a></li>
              <li><a href="#schedule" className="hover:text-[#FFD200] transition-colors">Timetable</a></li>
              <li><a href="#transformations" className="hover:text-[#FFD200] transition-colors">Member Notes</a></li>
              <li><a href="#instagram" className="hover:text-[#FFD200] transition-colors">Instagram</a></li>
            </ul>
          </div>

          {/* Faculty */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-[#F5F5F5] font-semibold mb-3">Careers</div>
            <ul className="space-y-2">
              <li><a href="#trainer" className="hover:text-[#FFD200] transition-colors">Become a Trainer</a></li>
              <li><a href="#trainer" className="hover:text-[#FFD200] transition-colors">Strength Coaching</a></li>
              <li><a href="#trainer" className="hover:text-[#FFD200] transition-colors">Boxing & Muay Thai</a></li>
              <li><a href="#trainer" className="hover:text-[#FFD200] transition-colors">Movement & Rehab</a></li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="col-span-2 md:col-span-3">
            <div className="text-[#F5F5F5] font-semibold mb-3">Visit & Desk</div>
            <ul className="space-y-2">
              <li>
                <button onClick={onBookVisit} className="hover:text-[#FFD200] transition-colors cursor-pointer text-left">
                  Book a Private Walkthrough
                </button>
              </li>
              <li><a href={`tel:${CLUB_VISIT_DETAILS.phone.replace(/\s+/g, '')}`} className="hover:text-[#FFD200] transition-colors">{CLUB_VISIT_DETAILS.phone}</a></li>
              <li><a href={`mailto:${CLUB_VISIT_DETAILS.email}`} className="hover:text-[#FFD200] transition-colors">{CLUB_VISIT_DETAILS.email}</a></li>
              <li><a href={CLUB_VISIT_DETAILS.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-[#FFD200] transition-colors">{CLUB_VISIT_DETAILS.instagramHandle}</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-[#2D2D2D] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#787878]">
          <div>
            © {new Date().getFullYear()} FitFuel Fitness Faridabad. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>{CLUB_VISIT_DETAILS.hours}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
