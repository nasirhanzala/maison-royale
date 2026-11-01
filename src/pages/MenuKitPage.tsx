import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RESTAURANT_INFO, MENU_ITEMS } from '../data/restaurantData';
import { MenuCategoryType } from '../types';
import { Printer, ArrowLeft, Download, Check, Sparkles, UtensilsCrossed } from 'lucide-react';

export const MenuKitPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const categories: { key: MenuCategoryType; title: string }[] = [
    { key: 'starters', title: 'Les Entrées · Starters' },
    { key: 'soups-salads', title: 'Soups & Garden Greens' },
    { key: 'main-courses', title: 'Plats Principaux · Main Courses' },
    { key: 'seafood', title: 'Coastal Catches & Shellfish' },
    { key: 'steaks', title: 'Prime Dry-Aged Steaks & Chops' },
    { key: 'desserts', title: 'Les Desserts · Pastry' },
    { key: 'beverages', title: 'Artisanal Cocktails & Cellar' },
  ];

  const handleCopyText = () => {
    const textLines: string[] = [];
    textLines.push(`MAISON ROYALE - FINE DINING MENU KIT`);
    textLines.push(`1400 Atwood Avenue, Johnston, RI 02919 | Tel: (401) 555-0188`);
    textLines.push(`Executive Chef Julian Laurent\n`);

    categories.forEach((cat) => {
      textLines.push(`=== ${cat.title.toUpperCase()} ===`);
      const items = MENU_ITEMS.filter((i) => i.category === cat.key);
      items.forEach((item) => {
        textLines.push(`${item.name} ................ $${item.price}`);
        textLines.push(`   ${item.description}`);
        if (item.winePairing) textLines.push(`   Suggested Pairing: ${item.winePairing}`);
        textLines.push('');
      });
      textLines.push('');
    });

    navigator.clipboard.writeText(textLines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-[#0e0e0e] text-[#F5F1E8] min-h-screen">
      {/* Top Controls Bar (hidden during printing via CSS no-print) */}
      <div className="no-print max-w-5xl mx-auto px-4 sm:px-6 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#181818] border border-[#2b2b2b] p-4 rounded-xs">
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#B8B1A5] hover:text-[#C6A15B] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Interactive Menu</span>
        </Link>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleCopyText}
            className="px-4 py-2 bg-[#222222] hover:bg-[#2c2c2c] text-xs uppercase tracking-wider font-medium text-[#F5F1E8] rounded-xs border border-[#333333] transition-colors flex items-center gap-1.5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied Menu Text!</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Copy Menu Text</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="print-include px-5 py-2 bg-[#C6A15B] hover:bg-[#E3C98D] text-[#111111] text-xs uppercase tracking-wider font-semibold rounded-xs shadow-md transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Menu Kit</span>
          </button>
        </div>
      </div>

      {/* Printable Menu Kit Sheet (Beautiful Fine Dining Paper Layout) */}
      <div className="print-card max-w-4xl mx-auto bg-[#171717] border border-[#C6A15B]/40 p-8 sm:p-14 rounded-xs shadow-2xl space-y-12">
        {/* Menu Sheet Crest & Brand Header */}
        <div className="text-center border-b border-[#C6A15B]/30 pb-8 space-y-2">
          <div className="flex items-center justify-center gap-2 text-[#C6A15B] mb-1">
            <span className="h-[1px] w-12 bg-[#C6A15B]"></span>
            <UtensilsCrossed className="w-5 h-5" />
            <span className="h-[1px] w-12 bg-[#C6A15B]"></span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl uppercase tracking-[0.25em] text-[#F5F1E8] print-text-dark font-normal">
            Maison Royale
          </h1>
          <p className="text-xs uppercase tracking-[0.3em] text-[#C6A15B] font-medium font-sans">
            Fine Dining & Private Events Venue
          </p>
          <p className="text-xs text-[#B8B1A5] print-text-dark font-light pt-1">
            {RESTAURANT_INFO.address} · {RESTAURANT_INFO.phone}
          </p>
          <div className="text-[11px] text-[#B8B1A5]/70 italic pt-1">
            Executive Chef Julian Laurent · Sommelier Élodie Mercier
          </div>
        </div>

        {/* Menu Course Sections */}
        <div className="space-y-10">
          {categories.map((cat) => {
            const items = MENU_ITEMS.filter((i) => i.category === cat.key);
            if (items.length === 0) return null;

            return (
              <div key={cat.key} className="space-y-4">
                <div className="flex items-center gap-3">
                  <h2 className="font-serif text-xl sm:text-2xl text-[#C6A15B] uppercase tracking-wider print-border-gold">
                    {cat.title}
                  </h2>
                  <span className="h-[1px] flex-1 bg-[#262626] print-border-gold"></span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                  {items.map((item) => (
                    <div key={item.id} className="space-y-1">
                      <div className="flex items-baseline justify-between gap-2 border-b border-dotted border-[#2e2e2e] pb-0.5">
                        <span className="font-serif text-base sm:text-lg text-[#F5F1E8] print-text-dark font-medium">
                          {item.name}
                        </span>
                        <span className="font-mono text-sm font-semibold text-[#C6A15B] tabular-nums shrink-0">
                          ${item.price}
                        </span>
                      </div>
                      <p className="text-xs text-[#B8B1A5] print-text-dark font-light leading-relaxed">
                        {item.description}
                      </p>
                      {item.winePairing && (
                        <p className="text-[11px] text-[#C6A15B]/80 italic">
                          Pairing: {item.winePairing}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Menu Sheet Footer */}
        <div className="border-t border-[#C6A15B]/30 pt-8 text-center text-xs text-[#B8B1A5] print-text-dark space-y-2">
          <p className="italic">
            Please inform your service captain of any severe allergies or dietary preferences prior to ordering.
          </p>
          <p className="font-mono text-[11px] text-[#C6A15B]">
            Complimentary Valet Parking Available Thursday Through Sunday Evenings
          </p>
          <p className="text-[10px] text-[#B8B1A5]/50 print-text-dark">
            {RESTAURANT_INFO.disclaimer}
          </p>
        </div>
      </div>
    </div>
  );
};
