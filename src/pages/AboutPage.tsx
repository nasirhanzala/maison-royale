import React from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO, IMAGES } from '../data/restaurantData';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Award, HeartHandshake, Compass, Utensils, Wine, Clock, MapPin, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-[#111111] text-[#F5F1E8]">
      {/* Editorial Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#222222]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-[#C6A15B]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
              Heritage & Craft
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#F5F1E8] leading-tight">
            The Story of Maison Royale
          </h1>
          <p className="mt-4 text-lg text-[#B8B1A5] font-light leading-relaxed">
            Established in Johnston, Rhode Island, Maison Royale is an homage to timeless French-American culinary tradition, tailored hospitality, and the profound joy of shared occasions.
          </p>
        </div>
      </div>

      {/* 1. Our Story & Origin */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-medium">
              <span>Chapter I</span>
              <span>·</span>
              <span>The Conception</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal leading-snug">
              Born from a Reverence for Classical Discipline
            </h2>
            <p className="text-base text-[#B8B1A5] font-light leading-relaxed">
              Maison Royale was founded with an unyielding ambition: to craft a dining destination where Rhode Island’s rich coastal bounty and American culinary ingenuity meet the disciplined elegance of classical European gastronomy.
            </p>
            <p className="text-base text-[#B8B1A5] font-light leading-relaxed">
              Situated on Atwood Avenue, our historic architectural footprint was lovingly transformed into an intimate haven. Hand-carved walnut millwork, acoustic velvet drapery, and custom crystal chandeliers provide a sanctuary where time slows down, allowing our guests to truly savor each course.
            </p>
            <div className="p-4 bg-[#181818] border-l-2 border-[#C6A15B] text-xs text-[#B8B1A5] font-serif italic text-base">
              "We believe that a great restaurant is more than a stage for good cooking; it is an emotional sanctuary where memories are etched into the evening."
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="aspect-[4/3] rounded-xs overflow-hidden border border-[#2b2b2b] shadow-2xl relative">
              <img
                src={IMAGES.heroInterior}
                alt="Dining Room Boiserie and Chandeliers"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-xs text-[#B8B1A5]">
                The Main Dining Pavilion · Atwood Avenue
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Culinary Philosophy & Sourcing */}
      <section className="py-20 bg-[#161616] border-y border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Culinary Philosophy"
            title="Purity of Ingredient, Rigor of Technique"
            subtitle="We let nature dictate our seasons, while our kitchen provides the patient mastery."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#1c1c1c] p-8 border border-[#2b2b2b] rounded-xs space-y-4">
              <Compass className="w-6 h-6 text-[#C6A15B]" />
              <h3 className="font-serif text-2xl text-[#F5F1E8]">Coastal Terroir</h3>
              <p className="text-sm text-[#B8B1A5] font-light leading-relaxed">
                Direct partnerships with Point Judith and Georges Bank day-boat fishermen bring diver scallops, pristine halibut, and coldwater lobster to our prep tables within hours of harvest.
              </p>
            </div>

            <div className="bg-[#1c1c1c] p-8 border border-[#2b2b2b] rounded-xs space-y-4">
              <Utensils className="w-6 h-6 text-[#C6A15B]" />
              <h3 className="font-serif text-2xl text-[#F5F1E8]">In-House Dry Aging</h3>
              <p className="text-sm text-[#B8B1A5] font-light leading-relaxed">
                Our custom Himalayan salt-brick aging chamber cures prime beef cuts for up to 45 days, intensifying depth, nutty marbling, and unparalleled tenderness.
              </p>
            </div>

            <div className="bg-[#1c1c1c] p-8 border border-[#2b2b2b] rounded-xs space-y-4">
              <Wine className="w-6 h-6 text-[#C6A15B]" />
              <h3 className="font-serif text-2xl text-[#F5F1E8]">Harmonic Pairings</h3>
              <p className="text-sm text-[#B8B1A5] font-light leading-relaxed">
                Under Head Sommelier Élodie Mercier, our 3,000-bottle cellar bridges celebrated premier crus with biodynamic small-production vintners from Willamette to the Rhône.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Executive Chef's Philosophy */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="aspect-[4/5] rounded-xs overflow-hidden border border-[#2b2b2b] shadow-2xl relative">
              <img
                src={IMAGES.wagyuSteak}
                alt="Chef Laurent signature plating"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-widest text-[#C6A15B] font-medium">Kitchen Leadership</p>
                <p className="font-serif text-2xl text-[#F5F1E8] mt-1">Chef Julian Laurent</p>
                <p className="text-xs text-[#B8B1A5]">Executive Chef & Co-Proprietor</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-medium">
              <span>The Kitchen Vision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal leading-snug">
              "Every Plate Tells a Story of Respect and Restraint."
            </h2>
            <p className="text-base text-[#B8B1A5] font-light leading-relaxed">
              Trained in classical French techniques and deeply enamored with modern American flavor profiles, Chef Julian Laurent believes that the mark of an extraordinary chef is not unnecessary complexity, but the confidence to celebrate the purity of primary ingredients.
            </p>
            <p className="text-base text-[#B8B1A5] font-light leading-relaxed">
              "When we source a 45-day aged Wagyu ribeye or sea scallops harvested that morning, our duty is to elevate what nature already made magnificent. The reduction must simmer for twenty-four hours; the compound butter must be whipped by hand; the plating must have effortless grace."
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-6 border-t border-[#262626] text-xs">
              <div>
                <p className="text-[#F5F1E8] font-semibold uppercase tracking-wider">Culinary Focus</p>
                <p className="text-[#B8B1A5] mt-0.5">Contemporary Fine American & Continental Heritage</p>
              </div>
              <div>
                <p className="text-[#F5F1E8] font-semibold uppercase tracking-wider">Kitchen Philosophy</p>
                <p className="text-[#B8B1A5] mt-0.5">Whole-Animal Reverence & Minimal Kitchen Waste</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Hospitality and Service Ethos */}
      <section className="py-20 bg-[#161616] border-t border-[#262626]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#C6A15B]"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                The Art of Service
              </span>
              <span className="h-[1px] w-6 bg-[#C6A15B]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#F5F1E8]">
              Anticipatory, Discrete & Warmly Personal
            </h2>
            <p className="text-base text-[#B8B1A5] font-light leading-relaxed">
              Service at Maison Royale is guided by General Manager Marcus Vance. We believe true hospitality is felt rather than performed—unobtrusive when you seek intimate conversation, yet immediately present the moment your water glass or wine requires tending.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            <div className="bg-[#1c1c1c] p-6 border border-[#2b2b2b] rounded-xs text-center">
              <HeartHandshake className="w-5 h-5 text-[#C6A15B] mx-auto mb-3" />
              <h4 className="font-serif text-lg text-[#F5F1E8]">Personal Concierge</h4>
              <p className="text-xs text-[#B8B1A5] font-light mt-1">Special requests and anniversaries recorded with care.</p>
            </div>
            <div className="bg-[#1c1c1c] p-6 border border-[#2b2b2b] rounded-xs text-center">
              <Wine className="w-5 h-5 text-[#C6A15B] mx-auto mb-3" />
              <h4 className="font-serif text-lg text-[#F5F1E8]">Table-Side Decanting</h4>
              <p className="text-xs text-[#B8B1A5] font-light mt-1">Fine vintages aerated to order with Riedel crystal decanters.</p>
            </div>
            <div className="bg-[#1c1c1c] p-6 border border-[#2b2b2b] rounded-xs text-center">
              <Award className="w-5 h-5 text-[#C6A15B] mx-auto mb-3" />
              <h4 className="font-serif text-lg text-[#F5F1E8]">Artisanal Bread Cart</h4>
              <p className="text-xs text-[#B8B1A5] font-light mt-1">Warm cultured sourdough served with churned Vermont butter.</p>
            </div>
            <div className="bg-[#1c1c1c] p-6 border border-[#2b2b2b] rounded-xs text-center">
              <Clock className="w-5 h-5 text-[#C6A15B] mx-auto mb-3" />
              <h4 className="font-serif text-lg text-[#F5F1E8]">Unrushed Dining</h4>
              <p className="text-xs text-[#B8B1A5] font-light mt-1">Your table belongs to you for the duration of the evening.</p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              to="/reservations"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C6A15B] hover:bg-[#E3C98D] text-[#111111] text-xs uppercase tracking-[0.2em] font-semibold transition-colors rounded-xs shadow-lg"
            >
              <span>Experience Our Hospitality</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
