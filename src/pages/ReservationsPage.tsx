import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO, IMAGES } from '../data/restaurantData';
import { Reservation } from '../types';
import { SectionHeading } from '../components/ui/SectionHeading';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  ShieldAlert, 
  Sparkles, 
  Wine, 
  User, 
  Mail, 
  Phone, 
  Trash2, 
  AlertCircle 
} from 'lucide-react';

export const ReservationsPage: React.FC = () => {
  // Current date in YYYY-MM-DD
  const today = new Date().toISOString().split('T')[0];

  // Booking Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: today,
    time: '19:00',
    guests: 2,
    seatingArea: 'main-dining' as const,
    occasion: 'anniversary',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<'book' | 'my-reservations'>('book');
  const [lastConfirmed, setLastConfirmed] = useState<Reservation | null>(null);
  const [savedReservations, setSavedReservations] = useState<Reservation[]>([]);

  // Time slots
  const availableTimeSlots = [
    { value: '17:00', label: '5:00 PM' },
    { value: '17:30', label: '5:30 PM' },
    { value: '18:00', label: '6:00 PM' },
    { value: '18:30', label: '6:30 PM' },
    { value: '19:00', label: '7:00 PM (Prime)' },
    { value: '19:30', label: '7:30 PM (Prime)' },
    { value: '20:00', label: '8:00 PM' },
    { value: '20:30', label: '8:30 PM' },
    { value: '21:00', label: '9:00 PM' },
  ];

  // Seating areas
  const seatingAreas = [
    { id: 'main-dining', title: 'Main Dining Room', desc: 'Velvet banquettes & chandelier ambiance' },
    { id: 'wine-cellar', title: 'The Sommelier Vault', desc: 'Subterranean surrounded by vintage bottles' },
    { id: 'chefs-counter', title: 'Chef’s Counter', desc: 'Direct view of kitchen exhibition' },
    { id: 'terrace', title: 'Glass Solarium', desc: 'Courtyard garden starlight view' },
  ];

  // Load reservations from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem('maison_royale_reservations');
      if (stored) {
        setSavedReservations(JSON.parse(stored));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.date) {
      errs.date = 'Reservation date is required';
    } else if (formData.date < today) {
      errs.date = 'Reservation cannot be in the past';
    }
    if (!formData.time) errs.time = 'Please select a dining time';
    if (formData.guests < 1 || formData.guests > 12) errs.guests = 'Please select between 1 and 12 guests';
    return errs;
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      const refNum = `MR-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      const newReservation: Reservation = {
        id: `res-${Date.now()}`,
        referenceNumber: refNum,
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        guests: formData.guests,
        seatingArea: formData.seatingArea,
        occasion: formData.occasion,
        specialRequests: formData.specialRequests,
        createdAt: new Date().toISOString(),
        status: 'confirmed',
      };

      const updated = [newReservation, ...savedReservations];
      setSavedReservations(updated);
      setLastConfirmed(newReservation);

      try {
        localStorage.setItem('maison_royale_reservations', JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
    }
  };

  const cancelReservation = (id: string) => {
    const updated = savedReservations.map((r) =>
      r.id === id ? { ...r, status: 'cancelled' as const } : r
    );
    setSavedReservations(updated);
    try {
      localStorage.setItem('maison_royale_reservations', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
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
              Table Bookings
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#F5F1E8] leading-tight">
            Reserve Your Table
          </h1>
          <p className="mt-4 text-lg text-[#B8B1A5] font-light leading-relaxed">
            Reserve your evening at Maison Royale. For parties larger than 12 guests or bespoke private buyouts, please consult our Private Events concierge.
          </p>
        </div>

        {/* Tab Toggle: Book a Table vs My Reservations */}
        <div className="mt-8 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('book')}
            className={`px-5 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all rounded-xs ${
              activeTab === 'book'
                ? 'bg-[#C6A15B] text-[#111111]'
                : 'bg-[#1a1a1a] text-[#B8B1A5] hover:text-[#F5F1E8] border border-[#2b2b2b]'
            }`}
          >
            New Reservation
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('my-reservations')}
            className={`px-5 py-2.5 text-xs uppercase tracking-wider font-semibold transition-all rounded-xs flex items-center gap-2 ${
              activeTab === 'my-reservations'
                ? 'bg-[#C6A15B] text-[#111111]'
                : 'bg-[#1a1a1a] text-[#B8B1A5] hover:text-[#F5F1E8] border border-[#2b2b2b]'
            }`}
          >
            <span>My Bookings</span>
            {savedReservations.length > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#111111] text-[#C6A15B] text-[10px] flex items-center justify-center font-mono">
                {savedReservations.length}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Demonstration Notice Banner */}
        <div className="mb-8 p-4 bg-[#181818] border border-[#C6A15B]/30 rounded-xs flex items-center gap-3 text-xs text-[#E3C98D]">
          <ShieldAlert className="w-5 h-5 text-[#C6A15B] shrink-0" />
          <span>
            <strong>Demonstration Booking Portal:</strong> All bookings are simulated on the frontend and saved to your browser’s localStorage. No credit card is charged.
          </span>
        </div>

        {activeTab === 'book' ? (
          <>
            {lastConfirmed ? (
              /* Confirmation Receipt View */
              <div className="max-w-3xl mx-auto bg-[#181818] border border-[#C6A15B] p-8 sm:p-14 rounded-xs shadow-2xl text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B] flex items-center justify-center mx-auto text-[#C6A15B]">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium font-sans">
                  Reservation Confirmed
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1E8]">
                  We Eagerly Await Your Arrival
                </h2>

                <p className="text-sm text-[#B8B1A5] font-light max-w-md mx-auto">
                  An email confirmation and calendar invite have been sent to <strong>{lastConfirmed.email}</strong>.
                </p>

                {/* Receipt Card */}
                <div className="bg-[#141414] border border-[#2a2a2a] p-6 rounded-xs text-left max-w-lg mx-auto space-y-3 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-[#262626]">
                    <span className="text-[#B8B1A5]">Booking Reference:</span>
                    <span className="font-mono font-bold text-[#C6A15B] text-sm">
                      {lastConfirmed.referenceNumber}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B8B1A5]">Guest Name:</span>
                    <span className="text-[#F5F1E8] font-medium">{lastConfirmed.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B8B1A5]">Date & Time:</span>
                    <span className="text-[#F5F1E8] font-mono">
                      {lastConfirmed.date} at {lastConfirmed.time}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B8B1A5]">Party Size:</span>
                    <span className="text-[#F5F1E8]">{lastConfirmed.guests} Guests</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#B8B1A5]">Seating Area:</span>
                    <span className="text-[#F5F1E8] capitalize">
                      {lastConfirmed.seatingArea.replace('-', ' ')}
                    </span>
                  </div>
                  {lastConfirmed.occasion && (
                    <div className="flex justify-between">
                      <span className="text-[#B8B1A5]">Occasion:</span>
                      <span className="text-[#C6A15B] capitalize">{lastConfirmed.occasion}</span>
                    </div>
                  )}
                  {lastConfirmed.specialRequests && (
                    <div className="pt-2 border-t border-[#262626] text-[#B8B1A5] italic">
                      Notes: "{lastConfirmed.specialRequests}"
                    </div>
                  )}
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setLastConfirmed(null)}
                    className="w-full sm:w-auto px-8 py-3 bg-[#C6A15B] text-[#111111] text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-[#E3C98D] transition-colors"
                  >
                    Make Another Booking
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('my-reservations')}
                    className="w-full sm:w-auto px-8 py-3 border border-[#2b2b2b] text-[#F5F1E8] text-xs uppercase tracking-wider font-semibold rounded-xs hover:border-[#C6A15B] transition-colors"
                  >
                    View All My Bookings
                  </button>
                </div>
              </div>
            ) : (
              /* New Reservation Form */
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                  <form onSubmit={handleBookingSubmit} className="bg-[#181818] border border-[#2b2b2b] p-8 sm:p-12 rounded-xs shadow-2xl space-y-8">
                    
                    {/* Step 1: Date, Time & Guests */}
                    <div>
                      <h3 className="font-serif text-2xl text-[#F5F1E8] mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-[#C6A15B]" />
                        <span>1. Date & Time Selection</span>
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Date */}
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                            Date *
                          </label>
                          <input
                            type="date"
                            min={today}
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                          />
                          {errors.date && <p className="text-rose-400 text-[11px] mt-1">{errors.date}</p>}
                        </div>

                        {/* Guests */}
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                            Guests *
                          </label>
                          <select
                            value={formData.guests}
                            onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) || 2 })}
                            className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? 'Guest' : 'Guests'}
                              </option>
                            ))}
                          </select>
                          {errors.guests && <p className="text-rose-400 text-[11px] mt-1">{errors.guests}</p>}
                        </div>

                        {/* Occasion */}
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                            Occasion
                          </label>
                          <select
                            value={formData.occasion}
                            onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                            className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                          >
                            <option value="dinner">Evening Dinner</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="birthday">Birthday</option>
                            <option value="business">Business Engagement</option>
                            <option value="date">Romantic Date</option>
                          </select>
                        </div>
                      </div>

                      {/* Time Slots */}
                      <div className="mt-5">
                        <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-2 font-medium">
                          Available Seatings *
                        </label>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                          {availableTimeSlots.map((slot) => {
                            const isSelected = formData.time === slot.value;
                            return (
                              <button
                                key={slot.value}
                                type="button"
                                onClick={() => setFormData({ ...formData, time: slot.value })}
                                className={`py-2 px-2 text-xs font-mono rounded-xs border transition-colors ${
                                  isSelected
                                    ? 'bg-[#C6A15B] text-[#111111] border-[#C6A15B] font-semibold'
                                    : 'bg-[#141414] text-[#B8B1A5] hover:text-[#F5F1E8] border-[#2b2b2b]'
                                }`}
                              >
                                {slot.label}
                              </button>
                            );
                          })}
                        </div>
                        {errors.time && <p className="text-rose-400 text-[11px] mt-1">{errors.time}</p>}
                      </div>
                    </div>

                    {/* Step 2: Seating Area */}
                    <div className="pt-6 border-t border-[#262626]">
                      <h3 className="font-serif text-2xl text-[#F5F1E8] mb-4 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#C6A15B]" />
                        <span>2. Seating Atmosphere</span>
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {seatingAreas.map((area) => {
                          const isSelected = formData.seatingArea === area.id;
                          return (
                            <div
                              key={area.id}
                              onClick={() => setFormData({ ...formData, seatingArea: area.id as any })}
                              className={`cursor-pointer p-4 rounded-xs border transition-all ${
                                isSelected
                                  ? 'bg-[#1e1e1e] border-[#C6A15B] ring-1 ring-[#C6A15B]'
                                  : 'bg-[#141414] border-[#2b2b2b] hover:border-[#383838]'
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <p className="font-semibold text-xs uppercase tracking-wider text-[#F5F1E8]">
                                  {area.title}
                                </p>
                                <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'border-[#C6A15B] bg-[#C6A15B]' : 'border-[#444444]'
                                }`}>
                                  {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>}
                                </span>
                              </div>
                              <p className="text-xs text-[#B8B1A5] font-light mt-1">
                                {area.desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 3: Contact Details & Special Requests */}
                    <div className="pt-6 border-t border-[#262626]">
                      <h3 className="font-serif text-2xl text-[#F5F1E8] mb-4 flex items-center gap-2">
                        <User className="w-5 h-5 text-[#C6A15B]" />
                        <span>3. Guest Contact Details</span>
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. Sterling Hayes"
                            className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                          />
                          {errors.fullName && <p className="text-rose-400 text-[11px] mt-1">{errors.fullName}</p>}
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. sterling@hayes.com"
                            className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                          />
                          {errors.email && <p className="text-rose-400 text-[11px] mt-1">{errors.email}</p>}
                        </div>

                        <div>
                          <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                            Mobile Phone *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. (401) 555-0182"
                            className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                          />
                          {errors.phone && <p className="text-rose-400 text-[11px] mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="mt-4">
                        <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                          Dietary Preferences / Special Requests
                        </label>
                        <textarea
                          rows={3}
                          value={formData.specialRequests}
                          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                          placeholder="Allergies (shellfish, nuts, gluten), high chair requirement, sommelier greeting, or quiet booth preference..."
                          className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-4 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-xs text-[#B8B1A5]/60 italic">
                        Table held for 15 minutes past scheduled seating time.
                      </p>
                      <button
                        type="submit"
                        className="w-full sm:w-auto px-10 py-3.5 bg-[#C6A15B] hover:bg-[#E3C98D] text-[#111111] text-xs uppercase tracking-[0.2em] font-semibold transition-all rounded-xs shadow-xl flex items-center justify-center gap-2"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Confirm Reservation</span>
                      </button>
                    </div>

                  </form>
                </div>

                {/* Sidebar Summary & Policies */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="bg-[#181818] border border-[#2b2b2b] p-6 rounded-xs space-y-4">
                    <h4 className="font-serif text-xl text-[#F5F1E8]">Reservation Policies</h4>
                    <ul className="text-xs text-[#B8B1A5] space-y-3 font-light leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] mt-1 shrink-0"></span>
                        <span><strong>Dress Code:</strong> Sophisticated casual & cocktail attire. Athletic wear strictly discouraged.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] mt-1 shrink-0"></span>
                        <span><strong>Grace Period:</strong> We preserve reserved tables for 15 minutes prior to release to our standby list.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] mt-1 shrink-0"></span>
                        <span><strong>Complimentary Valet:</strong> Attendant greets guests at the porte-cochère on Atwood Avenue.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] mt-1 shrink-0"></span>
                        <span><strong>Cancellations:</strong> Please provide at least 24 hours notice for standard dinner parties.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-[#181818] border border-[#2b2b2b] p-6 rounded-xs space-y-3">
                    <span className="text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
                      Concierge Desk Assistance
                    </span>
                    <p className="text-xs text-[#B8B1A5] font-light">
                      Prefer to speak directly with our maître d'?
                    </p>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                      className="block text-[#F5F1E8] font-mono text-base font-semibold hover:text-[#C6A15B] transition-colors"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          /* "My Bookings" Tab */
          <div className="bg-[#181818] border border-[#2b2b2b] p-8 rounded-xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#262626]">
              <div>
                <h3 className="font-serif text-2xl text-[#F5F1E8]">Stored Demo Reservations</h3>
                <p className="text-xs text-[#B8B1A5] font-light">
                  Bookings stored in your local browser session.
                </p>
              </div>
              {savedReservations.length > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    localStorage.removeItem('maison_royale_reservations');
                    setSavedReservations([]);
                  }}
                  className="text-xs text-rose-400 hover:underline flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
              )}
            </div>

            {savedReservations.length === 0 ? (
              <div className="text-center py-16 text-[#B8B1A5]">
                <Calendar className="w-10 h-10 text-[#C6A15B]/50 mx-auto mb-3" />
                <p className="font-serif text-xl text-[#F5F1E8]">No active bookings</p>
                <p className="text-xs mt-1 font-light">
                  You haven't made any demo reservations yet.
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab('book')}
                  className="mt-6 px-6 py-2.5 bg-[#C6A15B] text-[#111111] text-xs uppercase tracking-wider font-semibold rounded-xs"
                >
                  Book a Table Now
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {savedReservations.map((res) => (
                  <div
                    key={res.id}
                    className={`p-5 rounded-xs border space-y-3 ${
                      res.status === 'cancelled'
                        ? 'bg-[#141414] border-[#262626] opacity-60'
                        : 'bg-[#161616] border-[#333333]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#C6A15B] font-bold">
                        {res.referenceNumber}
                      </span>
                      <span
                        className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-xs font-semibold ${
                          res.status === 'confirmed'
                            ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                            : 'bg-rose-950 text-rose-300 border border-rose-800'
                        }`}
                      >
                        {res.status}
                      </span>
                    </div>

                    <div className="text-xs space-y-1">
                      <p className="font-semibold text-[#F5F1E8] text-sm">{res.fullName}</p>
                      <p className="text-[#B8B1A5]">
                        {res.date} at {res.time} · {res.guests} Guests
                      </p>
                      <p className="text-[#B8B1A5]/70 capitalize">
                        Area: {res.seatingArea.replace('-', ' ')}
                      </p>
                    </div>

                    {res.status === 'confirmed' && (
                      <div className="pt-2 border-t border-[#262626] flex justify-end">
                        <button
                          type="button"
                          onClick={() => cancelReservation(res.id)}
                          className="text-[11px] text-rose-400 hover:text-rose-300 underline"
                        >
                          Cancel Booking
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
