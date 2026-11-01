import React, { useState } from 'react';
import { RESTAURANT_INFO, OPERATING_HOURS, HOLIDAY_HOURS_NOTICE } from '../data/restaurantData';
import { SectionHeading } from '../components/ui/SectionHeading';
import { MapPin, Phone, Mail, Clock, Car, Send, CheckCircle, Navigation, ShieldAlert } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.message.trim()) errs.message = 'Message is required';
    setErrors(errs);

    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      try {
        const existing = JSON.parse(localStorage.getItem('maison_royale_messages') || '[]');
        existing.push({
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('maison_royale_messages', JSON.stringify(existing));
      } catch (e) {
        // ignore
      }
    }
  };

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-[#111111] text-[#F5F1E8]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#222222]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-[#C6A15B]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
              Concierge & Location
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#F5F1E8] leading-tight">
            Contact Maison Royale
          </h1>
          <p className="mt-4 text-lg text-[#B8B1A5] font-light leading-relaxed">
            Our concierge team is at your disposal for dinner reservations, private event inquiries, wine cellar acquisitions, and press relations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards, Hours & Map Preview */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Cards */}
            <div className="bg-[#181818] border border-[#2b2b2b] p-6 rounded-xs space-y-4">
              <h3 className="font-serif text-2xl text-[#F5F1E8]">Atwood Avenue Sanctuary</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-1" />
                  <div>
                    <p className="text-[#F5F1E8] font-medium">{RESTAURANT_INFO.address}</p>
                    <p className="text-xs text-[#B8B1A5] font-light mt-0.5">Johnston, Providence County, RI</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C6A15B] shrink-0 mt-1" />
                  <div>
                    <a href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-[#F5F1E8] font-mono hover:text-[#C6A15B] transition-colors">
                      {RESTAURANT_INFO.phone}
                    </a>
                    <p className="text-xs text-[#B8B1A5] font-light mt-0.5">Concierge desk open daily from 12:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C6A15B] shrink-0 mt-1" />
                  <div>
                    <p className="text-[#F5F1E8]">{RESTAURANT_INFO.email}</p>
                    <p className="text-xs text-[#B8B1A5] font-light mt-0.5">General correspondence & inquiries</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Parking & Valet Information */}
            <div className="bg-[#181818] border border-[#2b2b2b] p-6 rounded-xs space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C6A15B] font-semibold">
                <Car className="w-4 h-4" />
                <span>Valet & Arrival Protocols</span>
              </div>
              <p className="text-xs text-[#B8B1A5] font-light leading-relaxed">
                {RESTAURANT_INFO.parking} Private porte-cochère drop-off is located directly at our Atwood Avenue entrance.
              </p>
              <p className="text-xs text-[#B8B1A5] font-light">
                <strong>Dress Code:</strong> {RESTAURANT_INFO.dressCode}
              </p>
            </div>

            {/* Stylized Architectural Map Placeholder */}
            <div className="bg-[#181818] border border-[#2b2b2b] rounded-xs overflow-hidden">
              <div className="p-4 bg-[#1e1e1e] border-b border-[#2a2a2a] flex items-center justify-between text-xs">
                <span className="font-semibold uppercase tracking-wider text-[#F5F1E8]">Location & Transit</span>
                <span className="text-[#C6A15B] flex items-center gap-1">
                  <Navigation className="w-3.5 h-3.5" />
                  12 min from Downtown Providence
                </span>
              </div>
              <div className="relative h-64 bg-[#121417] flex items-center justify-center p-6 text-center">
                {/* Visual architectural grid map */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C6A15B_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative z-10 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B] flex items-center justify-center mx-auto text-[#C6A15B]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-serif text-lg text-[#F5F1E8]">Maison Royale Estate</p>
                    <p className="text-xs text-[#B8B1A5]">1400 Atwood Ave · Johnston, RI 02919</p>
                  </div>
                  <div className="pt-1">
                    <a
                      href="https://maps.google.com/?q=1400+Atwood+Avenue+Johnston+RI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C6A15B] text-[#111111] text-xs uppercase tracking-wider font-semibold rounded-xs hover:bg-[#E3C98D] transition-colors"
                    >
                      <span>Open in Navigation</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form & Schedule */}
          <div className="lg:col-span-7 space-y-10">
            {/* Contact Form */}
            <div className="bg-[#181818] border border-[#2b2b2b] p-8 sm:p-10 rounded-xs shadow-2xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                Direct Message
              </span>
              <h2 className="text-3xl font-serif text-[#F5F1E8] mt-1 mb-6 font-normal">
                Send a Message to the Concierge
              </h2>

              {submitted ? (
                <div className="p-8 bg-[#151515] border border-[#C6A15B]/50 rounded-xs text-center space-y-4">
                  <CheckCircle className="w-10 h-10 text-[#C6A15B] mx-auto" />
                  <h3 className="font-serif text-2xl text-[#F5F1E8]">Message Delivered</h3>
                  <p className="text-sm text-[#B8B1A5] font-light max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Your communication has been dispatched to the Maison Royale concierge. We will respond promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' });
                    }}
                    className="mt-4 px-6 py-2 bg-[#C6A15B] text-[#111111] text-xs uppercase tracking-wider font-semibold rounded-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Richard Harrington"
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
                        placeholder="e.g. richard@harrington.com"
                        className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                      />
                      {errors.email && <p className="text-rose-400 text-[11px] mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. (401) 555-0144"
                        className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                      >
                        <option value="general">General Inquiries & Feedback</option>
                        <option value="wine">Wine Cellar & Rare Vintage Procurement</option>
                        <option value="private">Private Buyout Consultation</option>
                        <option value="press">Press & Media Relations</option>
                        <option value="careers">Culinary & Sommelier Careers</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#B8B1A5] mb-1.5 font-medium">
                      Your Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How may our team assist your upcoming dining plans?"
                      className="w-full bg-[#141414] border border-[#2b2b2b] text-[#F5F1E8] text-xs px-3.5 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B]"
                    />
                    {errors.message && <p className="text-rose-400 text-[11px] mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-[#C6A15B] hover:bg-[#E3C98D] text-[#111111] text-xs uppercase tracking-[0.2em] font-semibold transition-colors rounded-xs shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>

            {/* Operating Hours Table (Requirement 11) */}
            <div className="bg-[#181818] border border-[#2b2b2b] p-8 rounded-xs space-y-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-semibold">
                <Clock className="w-4 h-4" />
                <span>Visiting Hours & Schedule (Illustrative)</span>
              </div>
              <p className="text-xs text-[#B8B1A5] font-light">
                Our kitchen operates strictly by dinner reservation to maintain culinary precision.
              </p>

              <div className="divide-y divide-[#262626] text-xs pt-2">
                {OPERATING_HOURS.map((h, i) => (
                  <div key={i} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-semibold text-[#F5F1E8]">{h.day}</span>
                    <div className="text-right">
                      <span className="font-mono text-[#C6A15B]">{h.hours}</span>
                      <span className="text-[#B8B1A5]/60 block text-[11px]">{h.note}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#141414] border border-[#2a2a2a] rounded-xs text-xs text-[#B8B1A5] mt-4 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span>
                  <strong>Holiday Notice:</strong> {HOLIDAY_HOURS_NOTICE}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
