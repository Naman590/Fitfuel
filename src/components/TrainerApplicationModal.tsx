import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ChevronRight } from 'lucide-react';
import { COACHING_ROLES } from '../data/mockData';

interface TrainerApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRole?: string;
}

export const TrainerApplicationModal: React.FC<TrainerApplicationModalProps> = ({
  isOpen,
  onClose,
  preselectedRole = COACHING_ROLES[0].title
}) => {
  const [step, setStep] = useState<'form' | 'confirmed'>('form');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: preselectedRole,
    experienceYears: '3–5 Years',
    certifications: 'CSCS / NASM',
    socialPortfolio: '',
    philosophy: ''
  });
  const [appReference, setAppReference] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setStep('form');
      if (preselectedRole) {
        setFormData(prev => ({ ...prev, role: preselectedRole }));
      }
    }
  }, [isOpen, preselectedRole]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setAppReference(`FF-FBD-C${randomNum}`);
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
              Coaching Faculty · Faridabad
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-display uppercase tracking-tight text-[#F5F5F5] mt-0.5">
              {step === 'form' ? 'Coach Application' : 'Application Logged'}
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
            <div>
              <label className="block text-xs text-[#787878] mb-2">
                Position
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {COACHING_ROLES.map(role => (
                  <button
                    key={role.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, role: role.title })}
                    className={`p-3 text-left border transition-colors cursor-pointer text-xs font-medium ${
                      formData.role === role.title
                        ? 'border-[#FFD200] bg-[#0B0B0B] text-[#F5F5F5]'
                        : 'border-[#2D2D2D] bg-[#0B0B0B] text-[#787878] hover:border-[#787878]'
                    }`}
                  >
                    {role.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#787878] mb-1.5">
                  Coaching Tenure
                </label>
                <select
                  value={formData.experienceYears}
                  onChange={e => setFormData({ ...formData, experienceYears: e.target.value })}
                  className="w-full bg-[#0B0B0B] border border-[#2D2D2D] px-3.5 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#FFD200]"
                >
                  <option value="1–3 Years">1–3 Years</option>
                  <option value="3–5 Years">3–5 Years</option>
                  <option value="5–8 Years">5–8 Years</option>
                  <option value="8+ Years">8+ Years</option>
                </select>
              </div>

              <div>
                <label className="block text-xs text-[#787878] mb-1.5">
                  Primary Credential
                </label>
                <select
                  value={formData.certifications}
                  onChange={e => setFormData({ ...formData, certifications: e.target.value })}
                  className="w-full bg-[#0B0B0B] border border-[#2D2D2D] px-3.5 py-2.5 text-sm text-[#F5F5F5] focus:outline-none focus:border-[#FFD200]"
                >
                  <option value="CSCS / NASM">NSCA-CSCS / NASM-PES</option>
                  <option value="Olympic Weightlifting">Olympic Weightlifting</option>
                  <option value="Combat / Muay Thai / Boxing">Boxing / Muay Thai Coaching</option>
                  <option value="Physiotherapy / Reformer">Physiotherapy / Reformer</option>
                </select>
              </div>
            </div>

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
                  placeholder="Phone Number (+91)"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0B0B0B] border border-[#2D2D2D] px-3.5 py-2.5 text-sm text-[#F5F5F5] placeholder-[#787878] focus:outline-none focus:border-[#FFD200]"
                />
                <input
                  type="text"
                  placeholder="Instagram or Video Link"
                  value={formData.socialPortfolio}
                  onChange={e => setFormData({ ...formData, socialPortfolio: e.target.value })}
                  className="w-full bg-[#0B0B0B] border border-[#2D2D2D] px-3.5 py-2.5 text-sm text-[#F5F5F5] placeholder-[#787878] focus:outline-none focus:border-[#FFD200]"
                />
              </div>
              <textarea
                rows={2}
                placeholder="Brief note on your coaching focus (optional)"
                value={formData.philosophy}
                onChange={e => setFormData({ ...formData, philosophy: e.target.value })}
                className="w-full bg-[#0B0B0B] border border-[#2D2D2D] p-3 text-sm text-[#F5F5F5] placeholder-[#787878] focus:outline-none focus:border-[#FFD200]"
              />
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 pt-2">
              <span className="text-[11px] sm:text-xs text-[#787878]">
                Floor auditions reviewed within 48 hours.
              </span>
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-3 bg-[#FFD200] text-black font-display uppercase tracking-wider text-xs font-bold hover:bg-[#f0c600] transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Submit Application</span>
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
                    Application Received
                  </div>
                  <h4 className="text-lg font-bold font-display text-[#F5F5F5] mt-0.5">
                    {formData.role}
                  </h4>
                </div>
                <div className="sm:text-right">
                  <span className="text-[10px] font-mono text-[#787878] block">REF ID</span>
                  <div className="text-sm font-mono font-bold text-[#FFD200]">{appReference}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-[#787878] block text-[11px]">Candidate</span>
                  <span className="text-[#F5F5F5] font-medium">{formData.fullName}</span>
                </div>
                <div>
                  <span className="text-[#787878] block text-[11px]">Tenure</span>
                  <span className="text-[#F5F5F5] font-medium">{formData.experienceYears}</span>
                </div>
                <div>
                  <span className="text-[#787878] block text-[11px]">Credential</span>
                  <span className="text-[#F5F5F5] font-medium">{formData.certifications}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#2D2D2D] flex items-center justify-between text-xs">
                <span className="text-[#787878]">We’ll reach out to schedule a floor session in Sector 15.</span>
                <span className="text-[#FFD200] inline-flex items-center gap-1 whitespace-nowrap">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  Logged
                </span>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#FFD200] hover:bg-[#f0c600] text-xs font-bold uppercase tracking-wider text-black whitespace-nowrap transition-colors cursor-pointer"
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
