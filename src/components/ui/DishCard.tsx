import React, { useState } from 'react';
import { MenuItem } from '../../types';
import { Wine, Sparkles, Utensils } from 'lucide-react';

interface DishCardProps {
  item: MenuItem;
  onSelect?: (item: MenuItem) => void;
}

export const DishCard: React.FC<DishCardProps> = ({ item, onSelect }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      onClick={() => onSelect && onSelect(item)}
      className={`group relative bg-[#191919] border border-[#2b2b2b] hover:border-[#C6A15B]/50 transition-all duration-300 rounded-sm overflow-hidden flex flex-col justify-between ${
        onSelect ? 'cursor-pointer' : ''
      }`}
    >
      <div>
        {/* Dish image or styled fallback if present */}
        {item.image && !imageError ? (
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#161616]">
            <img
              src={item.image}
              alt={item.name}
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-transparent to-transparent opacity-70"></div>
            {item.featured && (
              <span className="absolute top-3 left-3 bg-[#111111]/90 backdrop-blur-sm text-[#C6A15B] border border-[#C6A15B]/40 text-[11px] uppercase tracking-wider px-2.5 py-1 font-medium">
                Chef’s Choice
              </span>
            )}
          </div>
        ) : (
          <div className="relative aspect-[16/9] w-full bg-[#1c1c1c] flex items-center justify-center border-b border-[#262626]">
            <div className="flex flex-col items-center gap-1.5 text-[#B8B1A5]/60">
              <Utensils className="w-5 h-5 text-[#C6A15B]/50" />
              <span className="text-xs uppercase tracking-wider">Maison Specialité</span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <div className="flex items-baseline justify-between gap-4 mb-2">
            <h3 className="font-serif text-xl sm:text-2xl text-[#F5F1E8] group-hover:text-[#E3C98D] transition-colors leading-snug">
              {item.name}
            </h3>
            <span className="font-mono text-lg font-medium text-[#C6A15B] tabular-nums shrink-0">
              ${item.price}
            </span>
          </div>

          <p className="text-sm text-[#B8B1A5] font-light leading-relaxed mb-4">
            {item.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        {/* Wine pairing */}
        {item.winePairing && (
          <div className="flex items-center gap-2 text-xs text-[#B8B1A5]/80 italic pt-3 border-t border-[#262626] mb-3">
            <Wine className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
            <span className="truncate">Pairing: {item.winePairing}</span>
          </div>
        )}

        {/* Dietary indicators (unboxed per Zero-Pill rule) */}
        {item.dietary && item.dietary.length > 0 && (
          <div className="flex items-center gap-2 text-[11px] text-[#B8B1A5]/70 tracking-wider">
            {item.dietary.map((tag, idx) => (
              <React.Fragment key={tag}>
                <span className={tag === 'Chef Signature' ? 'text-[#C6A15B] font-medium' : ''}>
                  {tag}
                </span>
                {idx < item.dietary!.length - 1 && <span aria-hidden="true" className="text-[#333333]">·</span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};
