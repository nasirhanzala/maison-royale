import React, { useState } from 'react';
import { EVENT_SPACES, IMAGES, RESTAURANT_INFO } from '../data/restaurantData';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Users, CheckCircle, Send, Calendar, Clock, MapPin, Sparkles, Building, Heart, Wine } from 'lucide-react';

export const PrivateEventsPage: React.FC = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventType: 'corporate',
    spacePreference: 'space-grand-ballroom',
    eventDate: '',
    guestCount: 25,
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Today for date restriction
  const todayStr = new Date().toISOString().split('T')[0];

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.eventDate) errors.eventDate = 'Event date is required';
    if (formData.guestCount < 1) errors.guestCount = 'Guest count must be at least 1';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        const demoRef = `EVT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
        setSubmittedRef(demoRef);
        setIsSubmitting(false);

        // Store to localStorage demo events
        try {
          const existing = JSON.parse(localStorage.getItem('maison_royale_events') || '[]');
          existing.push({
            id: demoRef,
            ...formData,
            submittedAt: new Date().toISOString(),
          });
          localStorage.setItem('maison_royale_events', JSON.stringify(existing));
        } catch (err) {
          // Ignore localStorage errors
        }
      }, 500);
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-[#111111] text-[#F5F1E8]">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#222222]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-[#C6A15B]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
              Private Dining & Banquets
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#F5F1E8] leading-tight">
            Distinguished Spaces for Unforgettable Gatherings
          </h1>
          <p className="mt-4 text-lg text-[#B8B1A5] font-light leading-relaxed">
            From candlelit wine vault dinners to lavish wedding galas in The Grand Ballroom, Maison Royale provides architectural grandeur, dedicated kitchen execution, and white-glove hospitality in Johnston, Rhode Island.
          </p>
        </div>
      </div>

      {/* Occasion Types Strip */}
      <section className="py-12 bg-[#161616] border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-xs">
            <div className="p-4 border border-[#2b2b2b] rounded-xs bg-[#191919]">
              <Wine className="w-5 h-5 text-[#C6A15B] mx-auto mb-2" />
              <p className="font-semibold text-[#F5F1E8] uppercase tracking-wider">Private Dining</p>
              <p className="text-[#B8B1A5] mt-1">Multi-course tastings</p>
            </div>
            <div className="p-4 border border-[#2b2b2b] rounded-xs bg-[#191919]">
              <Sparkles className="w-5 h-5 text-[#C6A15B] mx-auto mb-2" />
              <p className="font-semibold text-[#F5F1E8] uppercase tracking-wider">Milestone Birthdays</p>
              <p className="text-[#B8B1A5] mt-1">Bespoke celebrations</p>
            </div>
            <div className="p-4 border border-[#2b2b2b] rounded-xs bg-[#191919]">
              <Heart className="w-5 h-5 text-[#C6A15B] mx-auto mb-2" />
              <p className="font-semibold text-[#F5F1E8] uppercase tracking-wider">Weddings & Receptions</p>
              <p className="text-[#B8B1A5] mt-1">Grand banquet hall</p>
            </div>
            <div className="p-4 border border-[#2b2b2b] rounded-xs bg-[#191919]">
              <Building className="w-5 h-5 text-[#C6A15B] mx-auto mb-2" />
              <p className="font-semibold text-[#F5F1E8] uppercase tracking-wider">Corporate Dinners</p>
              <p className="text-[#B8B1A5] mt-1">Executive privacy</p>
            </div>
            <div className="p-4 border border-[#2b2b2b] rounded-xs bg-[#191919] col-span-2 md:col-span-1">
              <Calendar className="w-5 h-5 text-[#C6A15B] mx-auto mb-2" />
              <p className="font-semibold text-[#F5F1E8] uppercase tracking-wider">Special Occasions</p>
              <p className="text-[#B8B1A5] mt-1">Custom itineraries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Spaces Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Architectural Venues"
          title="Our Curated Banquet & Dining Suites"
          subtitle="Illustrative capacities and room characteristics for our private event spaces."
        />

        <div className="space-y-16">
          {EVENT_SPACES.map((space, idx) => (
            <div
              key={space.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#181818] border border-[#2b2b2b] rounded-xs p-6 sm:p-10 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="lg:col-span-7">
                <div className="aspect-[16/10] rounded-xs overflow-hidden border border-[#333333] relative">
                  <img
                    src={space.image}
                    alt={space.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-sm text-[#C6A15B] border border-[#C6A15B]/40 text-xs uppercase tracking-wider px-3 py-1 font-medium">
                    {space.squareFeet} Sq. Ft.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F1E8] mb-2">{space.name}</h3>
                  <div className="flex items-center gap-4 text-xs font-mono text-[#C6A15B]">
                    <span>Seated: {space.capacity.seated} Guests</span>
                    <span>·</span>
                    <span>Cocktail: {space.capacity.cocktail} Guests</span>
                  </div>
                </div>

                <p className="text-sm text-[#B8B1A5] font-light leading-relaxed">
                  {space.description}
                </p>

                <div className="pt-2 border-t border-[#2a2a2a] space-y-2">
                  <p className="text-xs uppercase tracking-wider text-[#F5F1E8] font-semibold">Venue Highlights:</p>
                  <ul className="text-xs text-[#B8B1A5] space-y-1.5 font-light">
                    {space.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C6A15B]"></span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <a
                    href="#inquiry-form"
                    onClick={() => setFormData({ ...formData, spacePreference: space.id })}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#C6A15B] hover:text-[#E3C98D] transition-colors"
                  >
                    <span>Inquire About This Space</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Event Inquiry Form Section */}
      <section id="inquiry-form" className="py-20 bg-[#161616] border-t border-[#262626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Private Event Consultation"
            title="Submit a Venue Inquiry"
            subtitle="Our private event concierge will prepare a tailored proposal, menu options, and availability breakdown within 24 hours."
          />

          {submittedRef ? (
            <div className="bg-[#1b1b1b] border border-[#C6A15B]/50 p-8 sm:p-12 rounded-xs text-center space-y-5 shadow-2xl">
              <div className="w-14 h-14 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B] flex items-center justify-center mx-auto text-[#C6A15B]">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-3xl text-[#F5F1E8]">Inquiry Received with Pleasure</h3>
              <p className="text-sm text-[#B8B1A5] max-w-lg mx-auto font-light leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your event inquiry has been logged in our demonstration system.
              </p>

              <div className="inline-block p-4 bg-[#141414] border border-[#2b2b2b] rounded-xs font-mono text-sm text-[#C6A15B]">
                Inquiry Reference: <strong>{submittedRef}</strong>
              </div>

              <div className="text-xs text-[#B8B1A5]/70 max-w-md mx-auto pt-2">
                <p>Date: {formData.eventDate} · Guests: {formData.guestCount}</p>
                <p className="mt-1 italic">{RESTAURANT_INFO.disclaimer}</p>
              </div>

              <button
                type="button"
                onClick={() => {
                  setSubmittedRef(null);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    eventType: 'corporate',
                    spacePreference: 'space-grand-ballroom',
                    eventDate: '',
                    guestCount: 25,
                    message: '',
                  });
                }}
                className="mt-4 px-6 py-2.5 bg-[#C6A15B] text-[#111111] text-xs uppercase tracking-wider font-semibold rounded-xs"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-[#191919] border border-[#2b2b2b] p-8 sm:p-12 rounded-xs space-y-6 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Katherine Sterling"
                    className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-4 py-3 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                  />
                  {formErrors.fullName && (
                    <p className="text-rose-400 text-[11px] mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. katherine@example.com"
                    className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-4 py-3 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                  />
                  {formErrors.email && (
                    <p className="text-rose-400 text-[11px] mt-1">{formErrors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-2 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. (401) 555-0199"
                    className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-4 py-3 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                  />
                  {formErrors.phone && (
                    <p className="text-rose-400 text-[11px] mt-1">{formErrors.phone}</p>
                  )}
                </div>

                {/* Event Type */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-2 font-medium">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-4 py-3 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                  >
                    <option value="corporate">Corporate Gala & Executive Dinner</option>
                    <option value="wedding">Wedding Reception / Rehearsal Dinner</option>
                    <option value="birthday">Milestone Birthday Celebration</option>
                    <option value="anniversary">Anniversary Celebration</option>
                    <option value="private-dining">Private Wine Tasting / Bespoke Dining</option>
                  </select>
                </div>

                {/* Venue Preference */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-2 font-medium">
                    Preferred Space
                  </label>
                  <select
                    value={formData.spacePreference}
                    onChange={(e) => setFormData({ ...formData, spacePreference: e.target.value })}
                    className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-4 py-3 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                  >
                    {EVENT_SPACES.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name} (Up to {s.capacity.seated} Seated)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Target Date */}
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-2 font-medium">
                    Target Date *
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-4 py-3 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                  />
                  {formErrors.eventDate && (
                    <p className="text-rose-400 text-[11px] mt-1">{formErrors.eventDate}</p>
                  )}
                </div>

                {/* Estimated Guests */}
                <div className="sm:col-span-2">
                  <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-2 font-medium">
                    Estimated Guest Count: <strong className="text-[#C6A15B] font-mono">{formData.guestCount}</strong>
                  </label>
                  <input
                    type="range"
                    min={6}
                    max={160}
                    step={1}
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: parseInt(e.target.value) || 6 })}
                    className="w-full accent-[#C6A15B] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-[#B8B1A5]/60 mt-1">
                    <span>Intimate (6-18)</span>
                    <span>Salon / Solarium (20-60)</span>
                    <span>Grand Ballroom (70-160)</span>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-2 font-medium">
                  Additional Details & Culinary Preferences
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about special dietary requirements, audiovisual needs, wine preferences, or schedule timing..."
                  className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-4 py-3 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-[#B8B1A5]/60 italic">
                  * All event inquiries are processed as demonstration submissions.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#C6A15B] hover:bg-[#E3C98D] text-[#111111] text-xs uppercase tracking-[0.2em] font-semibold transition-colors rounded-xs shadow-lg flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Event Inquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
