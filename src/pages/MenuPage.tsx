import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem, MenuCategoryType } from '../types';
import { DishCard } from '../components/ui/DishCard';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Search, Printer, Download, Sparkles, Filter, ChevronRight } from 'lucide-react';

export const MenuPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<string>('all');

  const categories: { key: MenuCategoryType; label: string }[] = [
    { key: 'all', label: 'All Offerings' },
    { key: 'starters', label: 'Starters' },
    { key: 'soups-salads', label: 'Soups & Salads' },
    { key: 'main-courses', label: 'Main Courses' },
    { key: 'seafood', label: 'Seafood' },
    { key: 'steaks', label: 'Steaks' },
    { key: 'desserts', label: 'Desserts' },
    { key: 'beverages', label: 'Beverages' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;

      // Search match
      const searchMatch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.winePairing && item.winePairing.toLowerCase().includes(searchQuery.toLowerCase()));

      // Dietary filter match
      const dietaryMatch =
        dietaryFilter === 'all' ||
        (item.dietary && item.dietary.includes(dietaryFilter as any));

      return categoryMatch && searchMatch && dietaryMatch;
    });
  }, [selectedCategory, searchQuery, dietaryFilter]);

  return (
    <div className="pt-24 sm:pt-28 pb-24 bg-[#111111] text-[#F5F1E8]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-b border-[#222222]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-6 bg-[#C6A15B]"></span>
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
                Autumn / Winter Gastronomy
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-[#F5F1E8] leading-tight">
              A La Carte Menu
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[#B8B1A5] font-light leading-relaxed">
              Every course is prepared to order using local New England catches, prime dry-aged heritage meats, and classical French culinary methods.
            </p>
          </div>

          {/* Quick PDF & Print actions */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/menu-kit"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] border border-[#C6A15B]/50 hover:border-[#C6A15B] text-xs uppercase tracking-[0.18em] font-medium text-[#F5F1E8] hover:text-[#C6A15B] transition-colors rounded-xs shadow-md"
            >
              <Printer className="w-4 h-4 text-[#C6A15B]" />
              <span>Printable Menu Kit</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Controls Bar: Category Tabs & Search & Dietary */}
        <div className="space-y-6 mb-12">
          {/* Functional Category Filter Tabs (allowed as interactive segmented controls) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#222222]">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all whitespace-nowrap shrink-0 border-b-2 ${
                    isSelected
                      ? 'border-[#C6A15B] text-[#C6A15B] bg-[#1a1a1a]'
                      : 'border-transparent text-[#B8B1A5] hover:text-[#F5F1E8] hover:border-[#333333]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input & Dietary Filters */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#B8B1A5]/60" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes, ingredients, or pairings..."
                className="w-full bg-[#181818] border border-[#2b2b2b] text-[#F5F1E8] text-xs pl-10 pr-4 py-2.5 rounded-xs focus:outline-none focus:border-[#C6A15B] placeholder-[#B8B1A5]/40"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#B8B1A5] hover:text-[#F5F1E8]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Dietary Filter Segment */}
            <div className="flex items-center gap-2 text-xs text-[#B8B1A5]">
              <span className="text-[11px] uppercase tracking-wider text-[#B8B1A5]/70 shrink-0">Dietary:</span>
              <div className="flex items-center gap-1.5 flex-wrap">
                {[
                  { id: 'all', label: 'All' },
                  { id: 'GF', label: 'Gluten-Free' },
                  { id: 'V', label: 'Vegetarian' },
                  { id: 'Chef Signature', label: 'Chef Signature' },
                ].map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setDietaryFilter(d.id)}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-xs transition-colors ${
                      dietaryFilter === d.id
                        ? 'bg-[#C6A15B] text-[#111111] font-semibold'
                        : 'bg-[#181818] text-[#B8B1A5] hover:text-[#F5F1E8] border border-[#2b2b2b]'
                    }`}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count & Filter Status */}
        <div className="flex items-center justify-between text-xs text-[#B8B1A5]/70 mb-6 pb-2 border-b border-[#1f1f1f]">
          <span>
            Showing <strong className="text-[#F5F1E8] font-mono">{filteredItems.length}</strong> culinary selections
          </span>
          {(searchQuery || dietaryFilter !== 'all' || selectedCategory !== 'all') && (
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="text-[#C6A15B] hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Dish Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((dish) => (
              <DishCard key={dish.id} item={dish} />
            ))}
          </div>
        ) : (
          <div className="p-16 text-center border border-[#262626] rounded-xs bg-[#161616]">
            <p className="font-serif text-2xl text-[#F5F1E8]">No dishes found</p>
            <p className="text-sm text-[#B8B1A5] mt-2 font-light">
              We couldn’t find any courses matching your specific search criteria.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-6 px-6 py-2.5 bg-[#C6A15B] text-[#111111] text-xs uppercase tracking-wider font-semibold rounded-xs"
            >
              View Full Menu
            </button>
          </div>
        )}

        {/* Sommelier Tasting Note */}
        <div className="mt-20 p-8 sm:p-10 bg-[#161616] border border-[#2b2b2b] rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-medium">
              The Sommelier’s Cellar Note
            </span>
            <h3 className="font-serif text-2xl text-[#F5F1E8]">
              Reserve Wine Pairings Available
            </h3>
            <p className="text-sm text-[#B8B1A5] font-light max-w-2xl leading-relaxed">
              Elevate your dining experience with custom wine flight pairings selected by Head Sommelier Élodie Mercier. Available for both 3-course and 5-course selections.
            </p>
          </div>
          <Link
            to="/reservations"
            className="px-6 py-3 bg-[#C6A15B] hover:bg-[#E3C98D] text-[#111111] text-xs uppercase tracking-[0.2em] font-semibold transition-colors rounded-xs whitespace-nowrap shrink-0 shadow-lg"
          >
            Reserve Your Experience
          </Link>
        </div>
      </div>
    </div>
  );
};
