import React, { useState } from 'react';
import { CATERING_PACKAGES, IMAGES, RESTAURANT_INFO } from '../data/restaurantData';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Utensils, CheckCircle, ChefHat, Truck, Sparkles, Send, Calendar, Users, Wine } from 'lucide-react';

export const CateringPage: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<string>(CATERING_PACKAGES[0].id);
  const [guestCount, setGuestCount] = useState<number>(30);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cateringDate: '',
    deliveryLocation: '',
    serviceStyle: 'full-service',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const activePkg = CATERING_PACKAGES.find((p) => p.id === selectedPackage) || CATERING_PACKAGES[0];
  const calculatedEstimate = activePkg.pricePerPerson * Math.max(guestCount, activePkg.minimumGuests);

  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.cateringDate) errs.cateringDate = 'Date is required';
    if (!formData.deliveryLocation.trim()) errs.deliveryLocation = 'Venue / location is required';
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      const demoRef = `CAT-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(demoRef);

      try {
        const existing = JSON.parse(localStorage.getItem('maison_royale_caterings') || '[]');
        existing.push({
          id: demoRef,
          package: activePkg.name,
          guestCount,
          estimatedTotal: calculatedEstimate,
          ...formData,
          createdAt: new Date().toISOString(),
        });
        localStorage.setItem('maison_royale_caterings', JSON.stringify(existing));
      } catch (e) {
        // ignore
      }
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
              Off-Site Gastronomy
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#F5F1E8] leading-tight">
            Maison Royale Catering Services
          </h1>
          <p className="mt-4 text-lg text-[#B8B1A5] font-light leading-relaxed">
            Bring the refined culinary mastery, sommelier-curated cellars, and discrete hospitality of Maison Royale to your estate, corporate headquarters, or private venue across Rhode Island and Southern New England.
          </p>
        </div>
      </div>

      {/* Pillars of Catering Service */}
      <section className="py-16 bg-[#161616] border-b border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#1a1a1a] border border-[#2b2b2b] rounded-xs space-y-3">
              <ChefHat className="w-6 h-6 text-[#C6A15B]" />
              <h3 className="font-serif text-2xl text-[#F5F1E8]">On-Site Executive Chefs</h3>
              <p className="text-sm text-[#B8B1A5] font-light leading-relaxed">
                Our mobile culinary brigades cook and sear courses on-site, ensuring wagyu steaks and delicate sea scallops are served piping hot at peak perfection.
              </p>
            </div>

            <div className="p-8 bg-[#1a1a1a] border border-[#2b2b2b] rounded-xs space-y-3">
              <Truck className="w-6 h-6 text-[#C6A15B]" />
              <h3 className="font-serif text-2xl text-[#F5F1E8]">Temperature-Controlled Logistics</h3>
              <p className="text-sm text-[#B8B1A5] font-light leading-relaxed">
                Refrigerated fine transport for artisanal raw bars, French pastry trolleys, and rare vintages maintained at cellar temperatures.
              </p>
            </div>

            <div className="p-8 bg-[#1a1a1a] border border-[#2b2b2b] rounded-xs space-y-3">
              <Sparkles className="w-6 h-6 text-[#C6A15B]" />
              <h3 className="font-serif text-2xl text-[#F5F1E8]">Bespoke Table Settings</h3>
              <p className="text-sm text-[#B8B1A5] font-light leading-relaxed">
                Complete tableware, fine German crystal glassware, Belgian table linens, and custom floral accents managed from setup to final breakdown.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catering Packages Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Signature Packages"
          title="Curated Catering Experiences"
          subtitle="Select a package to view its course breakdown and interactive pricing estimate."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {CATERING_PACKAGES.map((pkg) => {
            const isSelected = selectedPackage === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPackage(pkg.id)}
                className={`cursor-pointer p-8 rounded-xs border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#1e1e1e] border-[#C6A15B] shadow-2xl ring-1 ring-[#C6A15B]'
                    : 'bg-[#181818] border-[#2b2b2b] hover:border-[#C6A15B]/50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase tracking-wider text-[#C6A15B] font-medium font-sans">
                      Min {pkg.minimumGuests} Guests
                    </span>
                    {isSelected && (
                      <span className="text-[11px] uppercase tracking-wider bg-[#C6A15B]/20 text-[#E3C98D] px-2 py-0.5 rounded-xs">
                        Selected
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl text-[#F5F1E8] mb-2">{pkg.name}</h3>
                  <p className="text-xs text-[#B8B1A5] font-light mb-6">{pkg.tagline}</p>

                  <div className="text-3xl font-mono font-medium text-[#C6A15B] tabular-nums mb-6">
                    ${pkg.pricePerPerson}{' '}
                    <span className="text-xs text-[#B8B1A5] font-sans font-normal uppercase tracking-wider">
                      / Guest
                    </span>
                  </div>

                  <div className="space-y-4 border-t border-[#2a2a2a] pt-4 text-xs">
                    {pkg.courses.map((course, i) => (
                      <div key={i}>
                        <p className="font-semibold text-[#F5F1E8] mb-1">{course.title}</p>
                        <ul className="text-[#B8B1A5] space-y-1 font-light">
                          {course.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-1.5">
                              <span className="text-[#C6A15B] mt-0.5">·</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#2a2a2a]">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPackage(pkg.id);
                      document.getElementById('catering-inquiry')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-2.5 text-xs uppercase tracking-wider font-semibold rounded-xs transition-colors ${
                      isSelected
                        ? 'bg-[#C6A15B] text-[#111111]'
                        : 'bg-[#222222] text-[#F5F1E8] hover:bg-[#2c2c2c]'
                    }`}
                  >
                    Select This Package
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Catering Estimator & Inquiry Form */}
        <div id="catering-inquiry" className="bg-[#181818] border border-[#2b2b2b] rounded-xs p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Live Pricing Summary Box */}
            <div className="lg:col-span-5 bg-[#141414] p-6 sm:p-8 rounded-xs border border-[#2a2a2a] space-y-6">
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                  Live Package Estimate
                </span>
                <h3 className="font-serif text-2xl text-[#F5F1E8] mt-1">{activePkg.name}</h3>
                <p className="text-xs text-[#B8B1A5] mt-1 font-light">{activePkg.tagline}</p>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-2 font-medium">
                  Guest Count: <strong className="text-[#C6A15B] font-mono">{guestCount}</strong>
                </label>
                <input
                  type="range"
                  min={activePkg.minimumGuests}
                  max={250}
                  step={5}
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value) || activePkg.minimumGuests)}
                  className="w-full accent-[#C6A15B] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#B8B1A5]/60 mt-1">
                  <span>Minimum {activePkg.minimumGuests}</span>
                  <span>Up to 250 Guests</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#262626] space-y-2 text-xs">
                <div className="flex justify-between text-[#B8B1A5]">
                  <span>Package Base Price:</span>
                  <span className="font-mono text-[#F5F1E8]">${activePkg.pricePerPerson} / guest</span>
                </div>
                <div className="flex justify-between text-[#B8B1A5]">
                  <span>Guest Tally:</span>
                  <span className="font-mono text-[#F5F1E8]">{guestCount} guests</span>
                </div>
                <div className="flex justify-between text-[#B8B1A5]">
                  <span>Staff & Service:</span>
                  <span className="text-[#C6A15B]">Included in package</span>
                </div>
                <div className="pt-3 border-t border-[#262626] flex justify-between items-baseline">
                  <span className="text-sm font-semibold uppercase tracking-wider text-[#F5F1E8]">Estimated Total:</span>
                  <span className="text-2xl font-mono font-medium text-[#C6A15B] tabular-nums">
                    ${calculatedEstimate.toLocaleString()}
                  </span>
                </div>
                <p className="text-[10px] text-[#B8B1A5]/50 italic pt-1">
                  * Final pricing may adjust based on custom wine allocations, venue kitchen infrastructure, and holiday surcharges.
                </p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7">
              {submittedRef ? (
                <div className="p-8 text-center bg-[#151515] border border-[#C6A15B]/50 rounded-xs space-y-4">
                  <CheckCircle className="w-10 h-10 text-[#C6A15B] mx-auto" />
                  <h4 className="font-serif text-2xl text-[#F5F1E8]">Catering Inquiry Sent</h4>
                  <p className="text-sm text-[#B8B1A5] font-light">
                    Thank you, <strong>{formData.name}</strong>. Your request for <strong>{activePkg.name}</strong> has been received.
                  </p>
                  <p className="font-mono text-xs text-[#C6A15B]">
                    Demo Reference: {submittedRef}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedRef(null);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        cateringDate: '',
                        deliveryLocation: '',
                        serviceStyle: 'full-service',
                        notes: '',
                      });
                    }}
                    className="mt-2 px-5 py-2 bg-[#C6A15B] text-[#111111] text-xs uppercase tracking-wider font-semibold rounded-xs"
                  >
                    Send Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                      />
                      {errors.name && <p className="text-rose-400 text-[11px] mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. eleanor@company.com"
                        className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                      />
                      {errors.email && <p className="text-rose-400 text-[11px] mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. (401) 555-0177"
                        className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                      />
                      {errors.phone && <p className="text-rose-400 text-[11px] mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                        Event Date *
                      </label>
                      <input
                        type="date"
                        min={todayStr}
                        value={formData.cateringDate}
                        onChange={(e) => setFormData({ ...formData, cateringDate: e.target.value })}
                        className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                      />
                      {errors.cateringDate && <p className="text-rose-400 text-[11px] mt-1">{errors.cateringDate}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                      Event Venue / Delivery Location *
                    </label>
                    <input
                      type="text"
                      value={formData.deliveryLocation}
                      onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                      placeholder="e.g. Private Residence, Newport / Providence Office Suite"
                      className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                    />
                    {errors.deliveryLocation && (
                      <p className="text-rose-400 text-[11px] mt-1">{errors.deliveryLocation}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                      Special Dietary Requests or Custom Courses
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Specify wine pairing requests, vegan preferences, or kitchen requirements..."
                      className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#C6A15B] hover:bg-[#E3C98D] text-[#111111] text-xs uppercase tracking-[0.2em] font-semibold transition-colors rounded-xs shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Catering Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
