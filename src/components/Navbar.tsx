import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBookVisit: () => void;
}

const NAV_LINKS = [
  { href: '#facilities', label: 'The Club' },
  { href: '#schedule', label: 'Schedule' },
  { href: '#instagram', label: 'Instagram' },
  { href: '#trainer', label: 'Trainers' },
  { href: '#visit', label: 'Visit' }
];

export const Navbar: React.FC<NavbarProps> = ({ onBookVisit }) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 border-b border-[#2D2D2D] py-3 sm:py-3.5'
          : 'bg-gradient-to-b from-black/70 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between gap-4 sm:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-extrabold font-display tracking-tight text-[#F5F5F5] whitespace-nowrap shrink-0"
        >
          FITFUEL<span className="text-[#FFD200]">.</span>
        </a>

        {/* Zone 2: Clean Single-Line Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-wide text-[#F5F5F5]/85">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#FFD200] transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#FFD200]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onBookVisit}
            className="px-4 py-2 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-bold font-display uppercase tracking-wider bg-[#FFD200] text-black hover:bg-[#f0c600] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Book a Visit
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#F5F5F5] hover:text-[#FFD200] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#121212] border-b border-[#2D2D2D] px-4 sm:px-6 py-5 space-y-4">
          <nav className="flex flex-col divide-y divide-[#2D2D2D]/60 text-sm font-medium text-[#F5F5F5]">
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 hover:text-[#FFD200] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
