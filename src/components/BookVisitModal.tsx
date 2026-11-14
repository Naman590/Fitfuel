import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle, ChevronRight, Download } from 'lucide-react';
import { CLUB_VISIT_DETAILS } from '../data/mockData';
import { BookingFormData } from '../types';

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedExperience?: string;
  preselectedClassTitle?: string;
}

export const BookVisitModal: React.FC<BookVisitModalProps> = ({
  isOpen,
  onClose,
  preselectedExperience = 'architectural-tour',
  preselectedClassTitle
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [formData, setFormData] = useState<BookingFormData>({
    locationId: 'faridabad',
    experienceType: preselectedExperience,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: 'Morning (08:30 – 11:30)',
    fullName: '',
    email: '',
    phone: '',
    elixirPreference: 'Double Espresso on Ice'
  });
  const [generatedPassId, setGeneratedPassId] = useState<string>('');
  const [savedToWallet, setSavedToWallet] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setStep('form');
      setFormData(prev => ({
        ...prev,
        experienceType: preselectedExperience
      }));
    }
  }, [isOpen, preselectedExperience]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;

    const randomNum = Math.floor(10000 + Math.random() * 90000);
    setGeneratedPassId(`FF-FBD-${randomNum}`);
    setStep('confirmed');
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="relative w-full max-w-xl bg-[#141414] border border-[#2D2D2D] text-[#F5F5F5] overflow-hidden my-2 sm:my-8"
      >
        <div className="h-[2px] bg-[#FFD200]" />

        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-5 py-4 sm:px-7 sm:py-5 border-b border-[#2D2D2D] bg-[#0B0B0B]">
          <div>
            <span className="text-[11px] font-mono text-[#FFD200] block">
              Sector 15 · Faridabad Flagship
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-display uppercase tracking-tight text-[#F5F5F5] mt-0.5">
              {step === 'form' ? 'Book a Private Visit' : 'Guest Pass Confirmed'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#787878] hover:text-[#F5F5F5] transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-5">
            {preselectedClassTitle && (
              <div className="p-3 bg-[#0B0B0B] border border-[#2D2D2D] text-xs text-[#F5F5F5]">
                Reserving spot for <strong className="text-[#FFD200]">{preselectedClassTitle}</strong>. Front desk will hold your station on arrival.
              </div>
            )}

            {/* Experience Type */}
            <div>
              <label className="block text-xs text-[#787878] mb-2">
                Select Visit Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'architectural-tour', title: 'Private Club Walkthrough', desc: 'Tour the floor, lounge, and recovery suite' },
                  { id: 'signature-class', title: 'Coached Trial Session', desc: 'Join conditioning, boxing, or lifting' },
                  { id: 'private-assessment', title: '1:1 Strength & Movement Screen', desc: 'Baseline session with a Senior Coach' },
                  { id: 'thermal-contrast', title: 'Sauna & Cold Plunge Trial', desc: '60-minute contrast recovery pass' }
                ].map(exp => (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, experienceType: exp.id })}
                    className={`p-3 text-left border transition-colors cursor-pointer ${
                      formData.experienceType === exp.id
                        ? 'border-[#FFD200] bg-[#0B0B0B] text-[#F5F5F5]'
                        : 'border-[#2D2D2D] bg-[#0B0B0B] text-[#787878] hover:border-[#787878]'
                    }`}
                  >
                    <div className="text-xs sm:text-sm font-semibold text-[#F5F5F5]">{exp.title}</div>
                    <div className="text-[11px] text-[#787878] mt-0.5">{exp.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#787878] mb-1.5">
                  Preferred Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    required
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={e => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#2D2D2D] px-3.5 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#FFD200]"
                  />
                  <Calendar className="w-4 h-4 text-[#787878] absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#787878] mb-1.5">
                  Arrival Window
                </label>
                <div className="relative">
                  <select
                    value={formData.timeSlot}
                    onChange={e => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-[#0B0B0B] border border-[#2D2D2D] px-3.5 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#FFD200] appearance-none"
                  >
                    <option value="Early Morning (06:00 – 08:30)">Early Morning (06:00 – 08:30)</option>
                    <option value="Morning (08:30 – 11:30)">Morning (08:30 – 11:30)</option>
                    <option value="Midday (11:30 – 16:00)">Midday (11:30 – 16:00)</option>
                    <option value="Evening (17:00 – 21:00)">Evening (17:00 – 21:00)</option>
                  </select>
                  <Clock className="w-4 h-4 text-[#787878] absolute right-3 top-3 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Guest Info */}
            <div className="border-t border-[#2D2D2D] pt-4 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#0B0B0B] border border-[#2D2D2D] px-3.5 py-2.5 text-sm text-[#F5F5F5] placeholder-[#787878] focus:outline-none focus:border-[#FFD200]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#0B0B0B] border border-[#2D2D2D] px-3.5 py-2.5 text-sm text-[#F5F5F5] placeholder-[#787878] focus:outline-none focus:border-[#FFD200]"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0B0B0B] border border-[#2D2D2D] px-3.5 py-2.5 text-sm text-[#F5F5F5] placeholder-[#787878] focus:outline-none focus:border-[#FFD200]"
                />
                <select
                  value={formData.elixirPreference}
                  onChange={e => setFormData({ ...formData, elixirPreference: e.target.value })}
                  className="w-full bg-[#0B0B0B] border border-[#2D2D2D] px-3.5 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#FFD200]"
                >
                  <option value="Double Espresso on Ice">Lounge Drink: Iced Espresso</option>
                  <option value="Cold-Pressed Green Juice">Lounge Drink: Cold-Pressed Greens</option>
                  <option value="Whey Isolate & Banana Shake">Lounge Drink: Post-Lift Shake</option>
                  <option value="Electrolyte Still Water">Lounge Drink: Still Electrolytes</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <span className="text-[11px] sm:text-xs text-[#787878]">
                Valet parking, locker & shower towel included.
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-3 bg-[#FFD200] text-black font-display uppercase tracking-wider text-xs font-bold hover:bg-[#f0c600] transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Confirm Visit</span>
                <ChevronRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </form>
        ) : (
          <div className="p-5 sm:p-7 space-y-5">
            <div className="border border-[#2D2D2D] bg-[#0B0B0B] p-4 sm:p-5">
              <div className="flex flex-wrap justify-between items-start gap-3 border-b border-[#2D2D2D] pb-4 mb-4">
                <div>
                  <div className="text-[11px] font-mono text-[#FFD200]">
                    Day Pass Confirmed
                  </div>
                  <h4 className="text-lg font-bold font-display text-[#F5F5F5] mt-0.5">
                    {CLUB_VISIT_DETAILS.name}
                  </h4>
                  <p className="text-xs text-[#787878] mt-0.5">{CLUB_VISIT_DETAILS.address}</p>
                </div>
                <div className="sm:text-right">
                  <span className="text-[10px] font-mono text-[#787878] block">PASS REF</span>
                  <div className="text-sm font-mono font-bold text-[#FFD200]">{generatedPassId}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-[#787878] block text-[11px]">Guest</span>
                  <span className="text-[#F5F5F5] font-medium">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-[#787878] block text-[11px]">Date</span>
                  <span className="text-[#F5F5F5] font-medium font-mono">{formData.date}</span>
                </div>
                <div>
                  <span className="text-[#787878] block text-[11px]">Window</span>
                  <span className="text-[#F5F5F5] font-medium">{formData.timeSlot.split(' ')[0]}</span>
                </div>
                <div className="col-span-2 sm:col-span-3 flex items-center justify-between pt-3 border-t border-[#2D2D2D]">
                  <span className="text-[#787878]">
                    Welcome drink queued: <strong className="text-[#F5F5F5] font-normal">{formData.elixirPreference}</strong>
                  </span>
                  <span className="text-xs font-medium text-[#FFD200] inline-flex items-center gap-1 whitespace-nowrap">
                    <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                    Active
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-row items-center justify-between gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setSavedToWallet(true);
                  setTimeout(() => setSavedToWallet(false), 3000);
                }}
                className="flex-1 sm:flex-initial px-4 py-2.5 bg-[#2D2D2D] hover:bg-[#3A3A3A] text-xs font-semibold text-[#F5F5F5] flex items-center justify-center gap-2 whitespace-nowrap transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>{savedToWallet ? 'Saved ✓' : 'Save Pass'}</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-[#FFD200] hover:bg-[#f0c600] text-xs font-bold uppercase tracking-wider text-black whitespace-nowrap shrink-0 transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
