import React, { useState } from 'react';
import { Search, MapPin, Building, Tag, RotateCcw, SlidersHorizontal } from 'lucide-react';
import { SearchFilterState } from '../../types/property';
import { PROPERTY_TYPES, DEAL_TYPES } from '../../data/properties';

interface PropertySearchProps {
  filters: SearchFilterState;
  onFilterChange: (filters: SearchFilterState) => void;
  onResetFilters: () => void;
  resultsCount: number;
}

export const PropertySearch: React.FC<PropertySearchProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  resultsCount
}) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleInputChange = (field: keyof SearchFilterState, value: any) => {
    onFilterChange({
      ...filters,
      [field]: value
    });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const propertiesEl = document.getElementById('properties');
    if (propertiesEl) {
      propertiesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="search" className="relative z-20 -mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[#d4af37]/35 shadow-xl shadow-stone-900/5 relative overflow-hidden">
        {/* Top Glow Accent Bar (Gold) */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#8c6d17] uppercase tracking-widest mb-1">
              <Search className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>موتور جستجوی اختصاصی آرورا</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
              خانه بعدی خود را پیدا کنید
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-stone-700 bg-[#faf8f5] px-3.5 py-1.5 rounded-full border border-[#d4af37]/30 shadow-xs">
              <strong className="text-[#8c6d17] font-bold ml-1">{resultsCount}</strong>
              ملک لوکس مطابق شرایط
            </span>

            {(filters.dealType !== 'all' ||
              filters.propertyType !== 'all' ||
              filters.location !== '' ||
              filters.minPrice > 0 ||
              filters.maxPrice < 100) && (
              <button
                type="button"
                onClick={onResetFilters}
                className="text-xs text-stone-500 hover:text-[#b38728] flex items-center gap-1.5 transition-colors cursor-pointer py-1 px-2 rounded-lg hover:bg-stone-100"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>پاک کردن فیلترها</span>
              </button>
            )}
          </div>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearchSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. نوع معامله */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>نوع معامله</span>
              </label>
              <select
                value={filters.dealType}
                onChange={(e) => handleInputChange('dealType', e.target.value)}
                className="w-full bg-[#faf8f5] border border-stone-200/90 rounded-2xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-[#c59b27] focus:ring-1 focus:ring-[#c59b27]/30 transition-all cursor-pointer"
              >
                {DEAL_TYPES.map((dt) => (
                  <option key={dt.value} value={dt.value} className="bg-white text-stone-800">
                    {dt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. نوع ملک */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>نوع ملک</span>
              </label>
              <select
                value={filters.propertyType}
                onChange={(e) => handleInputChange('propertyType', e.target.value)}
                className="w-full bg-[#faf8f5] border border-stone-200/90 rounded-2xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-[#c59b27] focus:ring-1 focus:ring-[#c59b27]/30 transition-all cursor-pointer"
              >
                {PROPERTY_TYPES.map((pt) => (
                  <option key={pt.value} value={pt.value} className="bg-white text-stone-800">
                    {pt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* 3. موقعیت (شهر یا منطقه) */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>موقعیت مکانی</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="شهر یا منطقه (لواسان، الهیه، کیش...)"
                  value={filters.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="w-full bg-[#faf8f5] border border-stone-200/90 rounded-2xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-[#c59b27] focus:ring-1 focus:ring-[#c59b27]/30 transition-all"
                />
              </div>
            </div>

            {/* 4. دکمه جستجو */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-[#b38728] via-[#f3e5ab] to-[#c59b27] text-stone-950 font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#c59b27]/25 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.01] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Search className="w-4 h-4 text-stone-950" />
                <span>جستجوی ملک</span>
              </button>
            </div>
          </div>

          {/* Quick Filter Pills */}
          <div className="mt-4 pt-4 border-t border-stone-200/70 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-stone-500 font-medium">مناطق محبوب:</span>
              {['لواسان', 'الهیه', 'زعفرانیه', 'کیش', 'رامسر'].map((loc) => (
                <button
                  type="button"
                  key={loc}
                  onClick={() => handleInputChange('location', loc)}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer font-medium ${
                    filters.location === loc
                      ? 'gold-gradient-bg text-stone-950 shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:text-[#b38728] hover:bg-[#d4af37]/15'
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            {/* Toggle Advanced Filters (Price Slider & Bedrooms) */}
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-[#8c6d17] hover:text-[#b38728] flex items-center gap-1.5 font-semibold transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>{showAdvanced ? 'بستن فیلترهای تکمیلی' : 'فیلتر بودجه و متراژ'}</span>
            </button>
          </div>

          {/* Advanced Drawer: Price Range */}
          {showAdvanced && (
            <div className="mt-4 pt-4 border-t border-stone-200/70 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-stone-700 font-medium">
                  <span>حداقل قیمت:</span>
                  <span className="text-[#8c6d17] font-bold">{filters.minPrice} میلیارد تومان</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="60"
                  step="5"
                  value={filters.minPrice}
                  onChange={(e) => handleInputChange('minPrice', Number(e.target.value))}
                  className="w-full accent-[#c59b27] cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-stone-700 font-medium">
                  <span>حداکثر قیمت:</span>
                  <span className="text-[#8c6d17] font-bold">{filters.maxPrice} میلیارد تومان</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="5"
                  value={filters.maxPrice}
                  onChange={(e) => handleInputChange('maxPrice', Number(e.target.value))}
                  className="w-full accent-[#c59b27] cursor-pointer"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-stone-700 font-medium">
                  <span>حداقل تعداد خواب:</span>
                  <span className="text-[#8c6d17] font-bold">
                    {filters.minBedrooms === 0 ? 'بدون محدودیت' : `${filters.minBedrooms} خواب به بالا`}
                  </span>
                </div>
                <div className="flex gap-2">
                  {[0, 3, 4, 5].map((bed) => (
                    <button
                      type="button"
                      key={bed}
                      onClick={() => handleInputChange('minBedrooms', bed)}
                      className={`flex-1 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        filters.minBedrooms === bed
                          ? 'gold-gradient-bg text-stone-950 shadow-xs'
                          : 'bg-stone-100 text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      {bed === 0 ? 'همه' : `+${bed}`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
