import React, { useState } from 'react';
import { Sparkles, Building, ChevronDown } from 'lucide-react';
import { Property } from '../../types/property';
import { PropertyCard } from './PropertyCard';

interface PropertyListProps {
  properties: Property[];
  onSelectProperty: (property: Property) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  activeCategoryFilter: string;
  onCategoryFilterChange: (cat: string) => void;
  onResetFilters: () => void;
}

export const PropertyList: React.FC<PropertyListProps> = ({
  properties,
  onSelectProperty,
  favorites,
  onToggleFavorite,
  activeCategoryFilter,
  onCategoryFilterChange,
  onResetFilters
}) => {
  const [sortOption, setSortOption] = useState<'default' | 'price-asc' | 'price-desc' | 'area-desc'>('default');

  const categories = [
    { id: 'all', label: 'تمام املاک' },
    { id: 'villa', label: 'ویلاهای لوکس' },
    { id: 'penthouse', label: 'پنت‌هاوس‌ها' },
    { id: 'apartment', label: 'آپارتمان‌های مدرن' }
  ];

  // Sorting
  const sortedProperties = [...properties].sort((a, b) => {
    if (sortOption === 'price-asc') return a.price - b.price;
    if (sortOption === 'price-desc') return b.price - a.price;
    if (sortOption === 'area-desc') return b.area - a.area;
    return 0;
  });

  return (
    <section id="properties" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#d4af37]/35 text-xs text-[#8c6d17] font-bold mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>کلکسیون انحصاری آرورا</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight mb-4">
            املاک منتخب
          </h2>
          <p className="text-sm sm:text-base text-stone-600 font-normal max-w-xl">
            انتخاب‌هایی برای کسانی که به معمولی بودن قانع نیستند.
          </p>
        </div>

        {/* Quick Tabs & Sort */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Category Tabs */}
          <div className="flex items-center p-1.5 rounded-2xl bg-white border border-stone-200/80 text-xs shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onCategoryFilterChange(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl font-semibold transition-all cursor-pointer ${
                  activeCategoryFilter === cat.id
                    ? 'gold-gradient-bg text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value as any)}
              className="appearance-none bg-white border border-stone-200/90 text-xs text-stone-800 py-2.5 px-4 pr-3 pl-8 rounded-2xl focus:outline-none focus:border-[#c59b27] cursor-pointer shadow-xs font-medium"
            >
              <option value="default">ترتیب پیش‌فرض</option>
              <option value="price-desc">قیمت: بیشترین به کمترین</option>
              <option value="price-asc">قیمت: کمترین به بیشترین</option>
              <option value="area-desc">بیشترین متراژ</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Grid of Property Cards */}
      {sortedProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {sortedProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelect={onSelectProperty}
              isFavorite={favorites.includes(property.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 rounded-3xl bg-white border border-stone-200 p-8 max-w-lg mx-auto shadow-md">
          <Building className="w-12 h-12 text-stone-400 mx-auto mb-4 opacity-50" />
          <h3 className="text-xl font-bold text-stone-900 mb-2">ملکی با این مشخصات یافت نشد</h3>
          <p className="text-xs text-stone-500 mb-6">
            می‌توانید فیلترهای جستجو را بازنشانی کنید تا تمامی املاک موجود در کلکسیون نمایش داده شوند.
          </p>
          <button
            onClick={onResetFilters}
            className="px-6 py-2.5 rounded-full gold-gradient-bg text-stone-950 text-xs font-bold shadow-md shadow-[#c59b27]/25 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
          >
            مشاهده همه املاک
          </button>
        </div>
      )}
    </section>
  );
};
