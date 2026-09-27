export type PropertyType = 'villa' | 'penthouse' | 'apartment' | 'commercial';
export type DealType = 'sale' | 'rent' | 'mortgage';

export interface Property {
  id: string;
  title: string;
  englishTitle: string;
  type: PropertyType;
  typeLabel: string;
  dealType: DealType;
  dealTypeLabel: string;
  location: string;
  city: string;
  area: number; // square meters
  bedrooms: number;
  bathrooms: number;
  parking: number;
  price: number; // in billion Tomans or millions
  priceFormatted: string;
  priceSampleNote: string;
  badge: 'ویژه' | 'جدید' | 'منحصر‌به‌فرد';
  heroImage: string;
  gallery: string[];
  description: string;
  architecturalHighlights: string[];
  features: string[];
  coordinates: {
    lat: number;
    lng: number;
  };
  yearBuilt: number;
  views: string;
  floor?: string;
  hasVirtualTour?: boolean;
}

export interface SearchFilterState {
  dealType: string;
  propertyType: string;
  location: string;
  minPrice: number;
  maxPrice: number;
  minBedrooms: number;
}
