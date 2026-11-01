import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO, OPERATING_HOURS } from '../../data/restaurantData';
import { Mail, Phone, MapPin, Clock, ArrowRight, Check, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#0c0c0c] text-[#B8B1A5] border-t border-[#222222] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-[#202020]">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.2em] uppercase text-[#F5F1E8]">
                Maison Royale
              </span>
            </Link>
            <p className="text-sm font-light leading-relaxed text-[#B8B1A5]/90">
              Where Every Evening Becomes an Occasion. Fine dining, artisanal wine selections, and bespoke private celebrations in Johnston, Rhode Island.
            </p>
            <div className="pt-2 flex items-center gap-4 text-[#B8B1A5] hover:text-[#C6A15B]">
              <a
                href="#instagram"
                aria-label="Instagram"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-[#181818] border border-[#2b2b2b] flex items-center justify-center hover:border-[#C6A15B] hover:text-[#C6A15B] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                aria-label="Facebook"
                onClick={(e) => e.preventDefault()}
                className="w-9 h-9 rounded-full bg-[#181818] border border-[#2b2b2b] flex items-center justify-center hover:border-[#C6A15B] hover:text-[#C6A15B] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F1E8] mb-5">
              Explore
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="hover:text-[#C6A15B] transition-colors">
                  Our Story & Heritage
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-[#C6A15B] transition-colors">
                  A La Carte Menu
                </Link>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-[#C6A15B] transition-colors text-[#C6A15B]">
                  Online Table Booking
                </Link>
              </li>
              <li>
                <Link to="/private-events" className="hover:text-[#C6A15B] transition-colors">
                  Private Events & Banquets
                </Link>
              </li>
              <li>
                <Link to="/catering" className="hover:text-[#C6A15B] transition-colors">
                  Catering Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#C6A15B] transition-colors">
                  Visual Gallery
                </Link>
              </li>
              <li>
                <Link to="/menu-kit" className="hover:text-[#C6A15B] transition-colors">
                  Printable Menu Kit
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C6A15B] transition-colors">
                  Directions & Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Location */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F1E8] mb-5">
              Hours & Location
            </h4>
            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span className="leading-snug">{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`} className="font-mono hover:text-[#C6A15B] transition-colors">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <span className="text-xs">{RESTAURANT_INFO.email}</span>
              </div>
              <div className="pt-2 text-xs text-[#B8B1A5]/80 space-y-1">
                <p className="text-[#F5F1E8] font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
                  Dinner Hours:
                </p>
                <p>Tue – Thu: 5:00 PM – 10:00 PM</p>
                <p>Fri – Sat: 4:30 PM – 11:00 PM</p>
                <p>Sunday Brunch & Dinner: 11:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>

          {/* Col 4: Royale Journal / VIP Club */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F1E8] mb-5">
              The Royale Journal
            </h4>
            <p className="text-sm font-light leading-relaxed mb-4 text-[#B8B1A5]">
              Receive invitations to rare vintage cellar releases, seasonal menu previews, and gala evenings.
            </p>
            {newsletterSubscribed ? (
              <div className="p-3 bg-[#181818] border border-[#C6A15B]/50 rounded-xs text-xs text-[#E3C98D] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#C6A15B]" />
                <span>Thank you. You are enrolled in private invitations.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full bg-[#181818] border border-[#2e2e2e] text-[#F5F1E8] text-xs px-3.5 py-3 rounded-xs focus:outline-none focus:border-[#C6A15B] placeholder-[#B8B1A5]/40"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to Journal"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-[#C6A15B] hover:bg-[#E3C98D] text-[#111111] rounded-xs flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[11px] text-[#B8B1A5]/60 italic">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#B8B1A5]/60">
          <p>© {new Date().getFullYear()} Maison Royale Fine Dining. All rights reserved.</p>
          <p className="text-center md:text-right max-w-lg text-[11px] text-[#B8B1A5]/50">
            {RESTAURANT_INFO.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
};
