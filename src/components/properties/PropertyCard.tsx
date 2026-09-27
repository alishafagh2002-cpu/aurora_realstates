import React, { useState } from 'react';
import { MapPin, Bed, Bath, Maximize2, ArrowLeft, Heart, Compass } from 'lucide-react';
import { Property } from '../../types/property';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
  isFavorite?: boolean;
  onToggleFavorite?: (propertyId: string) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onSelect,
  isFavorite = false,
  onToggleFavorite
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl overflow-hidden bg-white/95 backdrop-blur-xl border border-stone-200/90 hover:border-[#d4af37] luxury-card-transition hover:-translate-y-2.5 shadow-md shadow-stone-900/5 hover:shadow-2xl hover:shadow-[#c59b27]/20 flex flex-col justify-between"
    >
      {/* Light Sweep (Gold light beam passing over the card on hover) */}
      <div
        className={`pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent transform -skew-x-12 transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isHovered ? 'translate-x-[200%]' : '-translate-x-[100%]'
        }`}
      />

      {/* Top Media Container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
        <img
          src={property.heroImage}
          alt={property.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />

        {/* Ambient Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-black/20" />

        {/* Badge (ویژه / جدید / منحصر‌به‌فرد) */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md shadow-md ${
              property.badge === 'ویژه'
                ? 'gold-gradient-bg text-stone-950'
                : property.badge === 'منحصر‌به‌فرد'
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'bg-white/90 text-stone-800 border border-[#d4af37]/40'
            }`}
          >
            {property.badge}
          </span>
          <span className="bg-stone-900/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-white border border-white/20">
            {property.typeLabel}
          </span>
        </div>

        {/* Favorite Bookmark Button */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (onToggleFavorite) onToggleFavorite(property.id);
          }}
          className={`absolute top-4 left-4 p-2.5 rounded-full backdrop-blur-md transition-all cursor-pointer ${
            isFavorite
              ? 'bg-rose-500/80 text-white shadow-md'
              : 'bg-white/80 text-stone-700 hover:text-stone-950 border border-white/40 hover:bg-white'
          }`}
          title="افزودن به علاقه‌مندی‌ها"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
        </button>

        {/* Virtual 3D Tour Badge if available */}
        {property.hasVirtualTour && (
          <div className="absolute bottom-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-[#d4af37]/40 text-[11px] text-amber-300 font-medium">
            <Compass className="w-3 h-3 animate-spin text-[#e5c158]" />
            <span>تور ۳D فعال</span>
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-2 font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#c59b27] flex-shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-stone-900 group-hover:text-[#8c6d17] transition-colors mb-2">
            {property.title}
          </h3>

          {/* Specs: Area, Bedrooms, Bathrooms */}
          <div className="grid grid-cols-3 gap-2 py-3 border-y border-stone-200/80 my-3 text-xs text-stone-700">
            <div className="flex items-center gap-1.5 justify-center py-1.5 rounded-xl bg-stone-50 border border-stone-200/50">
              <Maximize2 className="w-3.5 h-3.5 text-[#c59b27]" />
              <span className="font-semibold">{property.area} متر</span>
            </div>
            <div className="flex items-center gap-1.5 justify-center py-1.5 rounded-xl bg-stone-50 border border-stone-200/50">
              <Bed className="w-3.5 h-3.5 text-[#c59b27]" />
              <span className="font-semibold">{property.bedrooms} خواب</span>
            </div>
            <div className="flex items-center gap-1.5 justify-center py-1.5 rounded-xl bg-stone-50 border border-stone-200/50">
              <Bath className="w-3.5 h-3.5 text-[#c59b27]" />
              <span className="font-semibold">{property.bathrooms} حمام</span>
            </div>
          </div>

          {/* Subtle architectural feature preview on hover */}
          <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed mb-4">
            {property.description}
          </p>
        </div>

        {/* Card Footer: Price & CTA */}
        <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] text-[#8c6d17] font-semibold">
              {property.priceSampleNote}
            </span>
            <span className="text-lg font-black text-stone-900 tracking-tight">
              {property.priceFormatted}
            </span>
          </div>

          <button
            onClick={() => onSelect(property)}
            className="group/btn px-4 py-2.5 rounded-2xl bg-amber-50 hover:bg-gradient-to-r hover:from-[#b38728] hover:via-[#e5c158] hover:to-[#c59b27] text-[#8c6d17] hover:text-stone-950 border border-[#d4af37]/40 text-xs font-bold flex items-center gap-2 transition-all duration-300 shadow-xs hover:shadow-md hover:shadow-[#c59b27]/30 cursor-pointer"
          >
            <span>مشاهده جزئیات</span>
            <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:-translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
