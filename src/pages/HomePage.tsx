import React from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO, IMAGES, MENU_ITEMS, TESTIMONIALS } from '../data/restaurantData';
import { SectionHeading } from '../components/ui/SectionHeading';
import { DishCard } from '../components/ui/DishCard';
import { Calendar, ArrowRight, Utensils, Wine, Sparkles, Star, ShieldCheck, Clock } from 'lucide-react';

export const HomePage: React.FC = () => {
  const signatureDishes = MENU_ITEMS.filter((item) => item.featured).slice(0, 4);

  return (
    <div className="bg-[#111111] text-[#F5F1E8]">
      {/* 1. Fullscreen Hero Section */}
      <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Measured Scrim */}
        <div className="absolute inset-0">
          <img
            src={IMAGES.heroInterior}
            alt="Maison Royale Fine Dining Restaurant Interior"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 animate-fade-in duration-1000"
          />
          {/* Measured multi-stop scrim for pristine 4.5:1 text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/75 to-black/60" />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#C6A15B]"></span>
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#E3C98D] font-sans">
              AN EXCEPTIONAL DINING EXPERIENCE
            </span>
            <span className="h-[1px] w-8 bg-[#C6A15B]"></span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F5F1E8] tracking-tight leading-[1.1] mb-6 text-balance">
            Where Every Evening <br className="hidden sm:inline" />
            <span className="italic font-serif text-[#E3C98D]">Becomes an Occasion.</span>
          </h1>

          {/* Supporting Text */}
          <p className="max-w-2xl mx-auto text-base sm:text-xl text-[#B8B1A5] font-light leading-relaxed mb-10 text-balance">
            Experience refined American fine dining, Michelin-caliber craftsmanship, and genuine Rhode Island hospitality at Maison Royale.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/menu"
              className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#F5F1E8] border border-[#C6A15B] hover:bg-[#C6A15B]/10 active:scale-[0.98] transition-all rounded-xs text-center"
            >
              Explore Our Menu
            </Link>
            <Link
              to="/reservations"
              className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-[0.2em] font-semibold text-[#111111] bg-[#C6A15B] hover:bg-[#E3C98D] active:scale-[0.98] transition-all rounded-xs shadow-xl text-center flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserve a Table</span>
            </Link>
          </div>
        </div>

        {/* Ambient bottom location & timing strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#262626]/80 bg-[#111111]/90 backdrop-blur-md hidden md:block">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-xs text-[#B8B1A5]">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
              {RESTAURANT_INFO.address}
            </span>
            <span className="tracking-wider text-[#C6A15B]">
              Dinner Service Tue – Sun · Valet Available
            </span>
            <span className="font-mono text-[#F5F1E8]">
              Concierge: {RESTAURANT_INFO.phone}
            </span>
          </div>
        </div>
      </section>

      {/* 2. Welcome & Brand Story Section */}
      <section className="py-24 sm:py-32 bg-[#141414] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Editorial Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 bg-[#C6A15B]"></span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                  Welcome to Maison Royale
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F5F1E8] font-normal leading-tight text-balance">
                A Symphony of Timeless Elegance & Culinary Passion
              </h2>

              <p className="text-base text-[#B8B1A5] font-light leading-relaxed">
                Nestled on Atwood Avenue in Johnston, Maison Royale was born from a singular conviction: fine dining should be both extraordinary in precision and deeply generous in spirit. We bring together prime seasonal ingredients from New England purveyors, artisanal dry-aged meats, and global culinary traditions.
              </p>

              <p className="text-base text-[#B8B1A5] font-light leading-relaxed">
                Under the visionary guidance of Executive Chef Julian Laurent, every course is composed with meticulous reverence—from day-boat Georges Bank scallops caramelized to perfection, to Japanese A5 wagyu carved with precision.
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#262626]">
                <div>
                  <p className="text-[#C6A15B] font-serif text-3xl font-light">45-Day</p>
                  <p className="text-xs uppercase tracking-wider text-[#F5F1E8] mt-1 font-medium">In-House Dry Aging</p>
                  <p className="text-xs text-[#B8B1A5] mt-0.5">Prime A5 Wagyu & Black Angus</p>
                </div>
                <div>
                  <p className="text-[#C6A15B] font-serif text-3xl font-light">3,000+</p>
                  <p className="text-xs uppercase tracking-wider text-[#F5F1E8] mt-1 font-medium">Cellar Vintages</p>
                  <p className="text-xs text-[#B8B1A5] mt-0.5">Curated by our Master Sommelier</p>
                </div>
                <div>
                  <p className="text-[#C6A15B] font-serif text-3xl font-light">Private</p>
                  <p className="text-xs uppercase tracking-wider text-[#F5F1E8] mt-1 font-medium">Event Suites</p>
                  <p className="text-xs text-[#B8B1A5] mt-0.5">Accommodating 12 to 160 guests</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#C6A15B] hover:text-[#E3C98D] transition-colors group"
                >
                  <span>Read Our Full Story & Philosophy</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Visual Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full rounded-xs overflow-hidden border border-[#2b2b2b] shadow-2xl">
                <img
                  src={IMAGES.wagyuSteak}
                  alt="Executive Chef preparing signature Wagyu ribeye"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#111111]/90 backdrop-blur-sm border border-[#2b2b2b] rounded-xs">
                  <p className="font-serif italic text-[#F5F1E8] text-base">
                    "True luxury lies in the balance between disciplined technique and pure, unadorned flavor."
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#C6A15B] mt-2 font-medium">
                    Chef Julian Laurent · Executive Chef
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Signature Dishes Section */}
      <section className="py-24 sm:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Culinary Highlights"
            title="Signature Dishes of the Season"
            subtitle="Carefully composed by our kitchen to celebrate seasonal textures, rare ingredients, and bold artisanal craftsmanship."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {signatureDishes.map((dish) => (
              <DishCard key={dish.id} item={dish} />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#191919] hover:bg-[#202020] border border-[#C6A15B]/40 hover:border-[#C6A15B] text-xs uppercase tracking-[0.2em] font-medium text-[#F5F1E8] hover:text-[#C6A15B] transition-all rounded-xs shadow-md"
            >
              <span>View Complete A La Carte Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. The Dining Experience (Atmosphere & Hospitality) */}
      <section className="py-24 sm:py-32 bg-[#171717] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] rounded-xs overflow-hidden border border-[#2e2e2e]">
                  <img
                    src={IMAGES.cocktailBar}
                    alt="Artisanal cocktail bar at Maison Royale"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 bg-[#1f1f1f] border border-[#2e2e2e] rounded-xs">
                  <p className="font-serif text-lg text-[#F5F1E8]">Craft Mixology</p>
                  <p className="text-xs text-[#B8B1A5] mt-1 font-light">
                    House bitters, hand-carved ice spheres, and vintage spirits smoked tableside.
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="p-5 bg-[#1f1f1f] border border-[#2e2e2e] rounded-xs">
                  <p className="font-serif text-lg text-[#F5F1E8]">Acoustic Sanctuaries</p>
                  <p className="text-xs text-[#B8B1A5] mt-1 font-light">
                    Plush velvet drapery and tailored architectural acoustics for private conversation.
                  </p>
                </div>
                <div className="aspect-[4/5] rounded-xs overflow-hidden border border-[#2e2e2e]">
                  <img
                    src={IMAGES.panSearedScallops}
                    alt="Seared Scallops Culinary Plate"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Experience Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 bg-[#C6A15B]"></span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                  The Dining Experience
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F5F1E8] font-normal leading-tight text-balance">
                Warm Hospitality Meets Uncompromising Detail
              </h2>

              <p className="text-base text-[#B8B1A5] font-light leading-relaxed">
                At Maison Royale, every guest is received with personalized warmth. From the moment our complimentary valet welcomes you at Atwood Avenue, our service team anticipates every nuance of your evening.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <Wine className="w-5 h-5 text-[#C6A15B] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5F1E8]">Sommelier Guidance</h4>
                    <p className="text-xs text-[#B8B1A5] font-light mt-0.5">
                      Expert table pairings featuring legendary Bordeaux crus, small-grower Champagnes, and biodynamic California vintages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#C6A15B] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5F1E8]">Sensory Ambiance</h4>
                    <p className="text-xs text-[#B8B1A5] font-light mt-0.5">
                      Warm glowing candlelight, custom Italian linens, and soft jazz create an oasis of serene celebration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Utensils className="w-5 h-5 text-[#C6A15B] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[#F5F1E8]">Bespoke Dietary Accommodation</h4>
                    <p className="text-xs text-[#B8B1A5] font-light mt-0.5">
                      Our culinary team tailors dedicated multi-course adaptations for gluten-free, vegetarian, or allergen preferences with equal artistry.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/reservations"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C6A15B] hover:bg-[#E3C98D] text-[#111111] text-xs uppercase tracking-[0.2em] font-semibold transition-colors rounded-xs shadow-lg"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Your Table Tonight</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Private Events Preview */}
      <section className="py-24 sm:py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-sm overflow-hidden border border-[#2b2b2b]">
            <div className="absolute inset-0">
              <img
                src={IMAGES.privateBanquet}
                alt="Private dining hall for banquets and celebrations"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40" />
            </div>

            <div className="relative z-10 max-w-2xl p-8 sm:p-14 lg:p-20 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-6 bg-[#C6A15B]"></span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                  Private Events & Banquets
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F5F1E8] font-normal leading-tight text-balance">
                Remarkable Spaces for Your Most Cherished Milestones
              </h2>

              <p className="text-base text-[#B8B1A5] font-light leading-relaxed">
                Whether orchestrating a 120-guest wedding reception, a private boardroom dinner, or a milestone birthday anniversary, our dedicated event concierges curate every detail—from custom embossed tasting menus to private sommelier pairings.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="border border-[#333333] bg-[#111111]/70 p-3 rounded-xs">
                  <p className="text-[#C6A15B] font-serif text-xl">120 Seated</p>
                  <p className="text-[#F5F1E8] font-medium mt-0.5">Grand Ballroom</p>
                </div>
                <div className="border border-[#333333] bg-[#111111]/70 p-3 rounded-xs">
                  <p className="text-[#C6A15B] font-serif text-xl">18 Seated</p>
                  <p className="text-[#F5F1E8] font-medium mt-0.5">Wine Vault</p>
                </div>
                <div className="border border-[#333333] bg-[#111111]/70 p-3 rounded-xs">
                  <p className="text-[#C6A15B] font-serif text-xl">48 Seated</p>
                  <p className="text-[#F5F1E8] font-medium mt-0.5">Glass Solarium</p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/private-events"
                  className="px-6 py-3 bg-[#C6A15B] hover:bg-[#E3C98D] text-[#111111] text-xs uppercase tracking-[0.2em] font-semibold transition-colors rounded-xs shadow-lg inline-flex items-center gap-2"
                >
                  <span>Explore Event Spaces</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/catering"
                  className="px-6 py-3 border border-[#C6A15B]/50 hover:border-[#C6A15B] text-[#F5F1E8] text-xs uppercase tracking-[0.2em] font-semibold transition-colors rounded-xs"
                >
                  Off-Site Catering
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Guest Testimonials */}
      <section className="py-24 sm:py-32 bg-[#141414] border-t border-[#222222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Guest Impressions"
            title="Voices of Our Valued Patrons"
            subtitle="Memorable moments reflected in the words of our cherished dinner guests."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-[#1b1b1b] border border-[#2b2b2b] p-8 rounded-xs flex flex-col justify-between hover:border-[#C6A15B]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#C6A15B] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C6A15B]" />
                    ))}
                  </div>
                  <p className="font-serif italic text-[#F5F1E8] text-lg leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-[#262626] text-xs">
                  <p className="font-semibold text-[#F5F1E8] tracking-wide">{t.author}</p>
                  <p className="text-[#B8B1A5] font-light mt-0.5">{t.title}</p>
                  <p className="text-[#C6A15B]/70 font-mono text-[11px] mt-1">{t.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Reservation Invitation CTA Banner */}
      <section className="py-20 bg-gradient-to-b from-[#111111] to-[#181818] border-t border-[#262626]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="border border-[#C6A15B]/30 p-10 sm:p-16 rounded-xs bg-[#161616]/80 backdrop-blur-sm relative overflow-hidden shadow-2xl">
            <span className="text-xs uppercase tracking-[0.3em] font-medium text-[#C6A15B]">
              Tables for the Season
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F5F1E8] mt-3 mb-5 font-normal">
              Join Us for an Unforgettable Evening
            </h2>
            <p className="text-base text-[#B8B1A5] font-light max-w-xl mx-auto mb-8 leading-relaxed">
              We recommend reserving tables at least 7 to 14 days in advance for weekend dinner services and holiday seatings.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/reservations"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C6A15B] hover:bg-[#E3C98D] text-[#111111] text-xs uppercase tracking-[0.2em] font-semibold transition-all rounded-xs shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Online</span>
              </Link>
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="w-full sm:w-auto px-8 py-3.5 border border-[#333333] hover:border-[#C6A15B] text-[#F5F1E8] text-xs uppercase tracking-[0.2em] font-medium transition-colors rounded-xs text-center font-mono"
              >
                Call Concierge: {RESTAURANT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
