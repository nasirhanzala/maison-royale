import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { SectionHeading } from '../components/ui/SectionHeading';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Eye } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'food' | 'interior' | 'events' | 'experience'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { key: 'all', label: 'All Photographs' },
    { key: 'interior', label: 'Restaurant Interior' },
    { key: 'food', label: 'Culinary Masterpieces' },
    { key: 'events', label: 'Private Events' },
    { key: 'experience', label: 'Dining Experience' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
    }
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-[#111111] text-[#F5F1E8]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#222222]">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-6 bg-[#C6A15B]"></span>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
              Visual Narrative
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#F5F1E8] leading-tight">
            The Maison Royale Gallery
          </h1>
          <p className="mt-4 text-lg text-[#B8B1A5] font-light leading-relaxed">
            Glimpse into the candlelit grandeur of our dining rooms, the meticulous artistry of our culinary brigade, and the refined elegance of private celebrations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-[#222222]">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.key as any);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap shrink-0 border-b-2 ${
                  isSelected
                    ? 'border-[#C6A15B] text-[#C6A15B] bg-[#1a1a1a]'
                    : 'border-transparent text-[#B8B1A5] hover:text-[#F5F1E8]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group cursor-pointer relative bg-[#181818] border border-[#2b2b2b] rounded-xs overflow-hidden hover:border-[#C6A15B]/50 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#141414]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                
                {/* Overlay details */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A15B] font-medium mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl text-[#F5F1E8] group-hover:text-[#E3C98D] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#B8B1A5] font-light mt-1 line-clamp-2 opacity-90">
                    {item.caption}
                  </p>
                </div>

                {/* Hover indicator icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
        >
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between text-xs text-[#B8B1A5]">
            <span className="font-mono text-[#C6A15B]">
              Photograph {lightboxIndex + 1} of {filteredItems.length}
            </span>
            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 text-[#F5F1E8] hover:text-[#C6A15B] transition-colors focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Central Image Viewport with Next/Prev Controls */}
          <div className="relative flex-1 flex items-center justify-center max-h-[75vh] my-auto">
            {/* Prev Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/60 border border-white/20 text-[#F5F1E8] hover:text-[#C6A15B] hover:border-[#C6A15B] transition-colors focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Active Image */}
            <div className="max-w-5xl max-h-full rounded-xs overflow-hidden border border-[#2b2b2b] shadow-2xl">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                referrerPolicy="no-referrer"
                className="max-h-[72vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/60 border border-white/20 text-[#F5F1E8] hover:text-[#C6A15B] hover:border-[#C6A15B] transition-colors focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div className="max-w-3xl mx-auto text-center space-y-1">
            <h4 className="font-serif text-2xl text-[#F5F1E8]">{currentItem.title}</h4>
            <p className="text-sm text-[#B8B1A5] font-light max-w-xl mx-auto">{currentItem.caption}</p>
            <p className="text-[11px] text-[#B8B1A5]/50 pt-1">
              Use Left / Right arrow keys to navigate · Escape to close
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
