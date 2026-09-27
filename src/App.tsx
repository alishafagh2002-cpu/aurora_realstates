/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Hero3DCanvas } from './components/3d/Hero3DCanvas';
import { Navbar } from './components/navbar/Navbar';
import { HeroContent } from './components/hero/HeroContent';
import { ScrollStorySection } from './components/scroll/ScrollStorySection';
import { PropertySearch } from './components/search/PropertySearch';
import { PropertyList } from './components/properties/PropertyList';
import { PropertyDetailModal } from './components/properties/PropertyDetailModal';
import { LifestyleCategories } from './components/categories/LifestyleCategories';
import { WhyAurora } from './components/why-us/WhyAurora';
import { StatsSection } from './components/stats/StatsSection';
import { ProcessTimeline } from './components/process/ProcessTimeline';
import { Testimonials } from './components/testimonials/Testimonials';
import { ContactSection } from './components/contact/ContactSection';
import { FloatingContactFab } from './components/floating/FloatingContactFab';
import { Footer } from './components/footer/Footer';
import { ConsultationModal } from './components/consultation/ConsultationModal';
import { PROPERTIES } from './data/properties';
import { Property, SearchFilterState } from './types/property';

export default function App() {
  // Scroll tracking for 3D camera transitions
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentStoryStage, setCurrentStoryStage] = useState(1);
  const [active3DPreset, setActive3DPreset] = useState<'exterior' | 'interior' | 'pool' | 'overview' | null>('exterior');

  // Modal states
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Favorites in LocalStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('aurora_favs');
      return saved ? JSON.parse(saved) : ['prop-01', 'prop-02'];
    } catch {
      return ['prop-01', 'prop-02'];
    }
  });

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('aurora_favs', JSON.stringify(next));
      } catch {
        // Safe fallback
      }
      return next;
    });
  };

  // Search and Filter State
  const initialFilters: SearchFilterState = {
    dealType: 'all',
    propertyType: 'all',
    location: '',
    minPrice: 0,
    maxPrice: 100,
    minBedrooms: 0
  };

  const [filters, setFilters] = useState<SearchFilterState>(initialFilters);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroSection = document.getElementById('hero');
      const heroHeight = heroSection ? heroSection.offsetHeight : 900;

      // Normalized 0 to 1 progress for hero 3D sequence
      const normHeroProgress = Math.min(Math.max(scrollY / heroHeight, 0), 1);
      setScrollProgress(normHeroProgress);
      setActive3DPreset(null);

      // Map to Story Stages 1, 2, 3
      if (normHeroProgress < 0.35) {
        setCurrentStoryStage(1);
      } else if (normHeroProgress < 0.72) {
        setCurrentStoryStage(2);
      } else {
        setCurrentStoryStage(3);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter properties based on search and category tabs
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((property) => {
      // Category tab filter
      if (activeCategoryFilter !== 'all' && property.type !== activeCategoryFilter) {
        return false;
      }

      // Deal type filter
      if (filters.dealType !== 'all' && property.dealType !== filters.dealType) {
        return false;
      }

      // Property type filter
      if (filters.propertyType !== 'all' && property.type !== filters.propertyType) {
        return false;
      }

      // Location search
      if (filters.location.trim() !== '') {
        const query = filters.location.trim().toLowerCase();
        const matchesLoc = property.location.toLowerCase().includes(query);
        const matchesCity = property.city.toLowerCase().includes(query);
        const matchesTitle = property.title.toLowerCase().includes(query);
        if (!matchesLoc && !matchesCity && !matchesTitle) {
          return false;
        }
      }

      // Price filter
      if (property.price < filters.minPrice || property.price > filters.maxPrice) {
        return false;
      }

      // Bedrooms filter
      if (filters.minBedrooms > 0 && property.bedrooms < filters.minBedrooms) {
        return false;
      }

      return true;
    });
  }, [filters, activeCategoryFilter]);

  const handleResetFilters = () => {
    setFilters(initialFilters);
    setActiveCategoryFilter('all');
  };

  const handleStageClick = (stage: number) => {
    setCurrentStoryStage(stage);
    const heroEl = document.getElementById('hero');
    const heroHeight = heroEl ? heroEl.offsetHeight : window.innerHeight;
    const targetY = stage === 1 ? 0 : stage === 2 ? heroHeight * 0.45 : heroHeight * 0.95;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  const handleCategoryPillSelect = (catType: string) => {
    if (catType === 'sale' || catType === 'rent') {
      setFilters((prev) => ({ ...prev, dealType: catType }));
    } else {
      setActiveCategoryFilter(catType);
      setFilters((prev) => ({ ...prev, propertyType: catType }));
    }
  };

  const scrollToProperties = () => {
    const el = document.getElementById('properties');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Floating Glassmorphism Navbar */}
      <Navbar
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onSelectCategory={handleCategoryPillSelect}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Cinematic 3D Hero Section */}
        <section id="hero" className="relative w-full min-h-[100vh] flex flex-col justify-between overflow-hidden">
          {/* Three.js 3D Architectural Canvas Background */}
          <div className="absolute inset-0 z-0">
            <Hero3DCanvas
              scrollProgress={scrollProgress}
              activePresetView={active3DPreset}
              onPresetSelect={(preset) => setActive3DPreset(preset)}
            />
          </div>

          {/* Hero Typography & CTA Overlay */}
          <HeroContent
            onExploreProperties={scrollToProperties}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
        </section>

        {/* 2. Scroll Story Experience (Scenes 01, 02, 03) */}
        <ScrollStorySection
          currentStage={currentStoryStage}
          onStageClick={handleStageClick}
        />

        {/* 3. Property Search Panel */}
        <PropertySearch
          filters={filters}
          onFilterChange={(newFilters) => setFilters(newFilters)}
          onResetFilters={handleResetFilters}
          resultsCount={filteredProperties.length}
        />

        {/* 4. Curated Luxury Properties Grid */}
        <PropertyList
          properties={filteredProperties}
          onSelectProperty={(prop) => setSelectedProperty(prop)}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
          activeCategoryFilter={activeCategoryFilter}
          onCategoryFilterChange={(cat) => setActiveCategoryFilter(cat)}
          onResetFilters={handleResetFilters}
        />

        {/* 5. Lifestyle Categories (Villa, Apartment, Penthouse, Commercial) */}
        <LifestyleCategories
          onSelectCategory={(cat) => {
            setActiveCategoryFilter(cat);
            setFilters((prev) => ({ ...prev, propertyType: cat }));
          }}
        />

        {/* 6. Why Aurora? Pillars */}
        <WhyAurora />

        {/* 7. Stats & Numbers Section with Count-Up Animation */}
        <StatsSection />

        {/* 8. Process Timeline (01 to 04) */}
        <ProcessTimeline />

        {/* 9. Testimonials */}
        <Testimonials />

        {/* 10. Contact Section */}
        <ContactSection />
      </main>

      {/* Floating Action Button (Phone, WhatsApp, VIP Consultation) */}
      <FloatingContactFab onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Property Details Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        isFavorite={selectedProperty ? favorites.includes(selectedProperty.id) : false}
        onToggleFavorite={toggleFavorite}
        onOpenConsultationDirect={() => setIsConsultationOpen(true)}
      />

      {/* VIP Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
