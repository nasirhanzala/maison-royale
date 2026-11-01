import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, CalendarCheck, UtensilsCrossed } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Menu', path: '/menu' },
    { label: 'Private Events', path: '/private-events' },
    { label: 'Catering', path: '/catering' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111]/95 backdrop-blur-md border-b border-[#262626] py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand Wordmark */}
            <Link
              to="/"
              className="text-xl sm:text-2xl font-serif tracking-[0.2em] uppercase text-[#F5F1E8] hover:text-[#C6A15B] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
              <span>Maison Royale</span>
            </Link>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-[13px] uppercase tracking-[0.18em] font-medium text-[#B8B1A5]">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`transition-colors py-1 relative whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-[#C6A15B] font-semibold'
                        : 'hover:text-[#F5F1E8]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C6A15B]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action & Mobile Menu Toggle */}
            <div className="flex items-center gap-4 shrink-0">
              <Link
                to="/reservations"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium text-[#111111] bg-[#C6A15B] hover:bg-[#E3C98D] active:scale-[0.98] transition-all rounded-xs shadow-md whitespace-nowrap shrink-0"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                <span>Reserve a Table</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden p-2 text-[#F5F1E8] hover:text-[#C6A15B] focus:outline-none focus:ring-1 focus:ring-[#C6A15B]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-[#161616] border-l border-[#262626] p-6 pt-20 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div className="border-b border-[#262626] pb-4">
                <p className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">Fine Dining & Venue</p>
                <p className="font-serif text-2xl text-[#F5F1E8] mt-1">Maison Royale</p>
                <p className="text-xs text-[#B8B1A5] mt-1">Johnston, Rhode Island</p>
              </div>

              <nav className="flex flex-col space-y-4 text-sm uppercase tracking-[0.15em] font-medium text-[#B8B1A5]">
                <Link
                  to="/"
                  className={`hover:text-[#C6A15B] transition-colors py-1 ${
                    location.pathname === '/' ? 'text-[#C6A15B]' : ''
                  }`}
                >
                  Home
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`hover:text-[#C6A15B] transition-colors py-1 ${
                      location.pathname === link.path ? 'text-[#C6A15B]' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  to="/menu-kit"
                  className="hover:text-[#C6A15B] transition-colors py-1 flex items-center gap-2 text-xs text-[#C6A15B]/90"
                >
                  <UtensilsCrossed className="w-3.5 h-3.5" />
                  Printable Menu Kit
                </Link>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#262626] space-y-4">
              <Link
                to="/reservations"
                className="w-full flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] bg-[#C6A15B] hover:bg-[#E3C98D] transition-colors rounded-xs shadow-lg"
              >
                <CalendarCheck className="w-4 h-4" />
                Reserve a Table
              </Link>
              <div className="text-center text-xs text-[#B8B1A5]">
                <p>Reservations & Inquiries</p>
                <a href="tel:4015550188" className="text-[#F5F1E8] hover:text-[#C6A15B] transition-colors font-mono">
                  (401) 555-0188
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
