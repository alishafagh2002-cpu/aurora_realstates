import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Sparkles, ChevronLeft } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
  onSelectCategory?: (type: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, onSelectCategory }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-white/92 backdrop-blur-xl border-b border-[#d4af37]/25 shadow-xl shadow-stone-900/5'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Right: Brand Identity (in RTL, starts on the right) */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="group flex items-center gap-3 select-none"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-[#b38728] via-[#f3e5ab] to-[#c59b27] border border-[#d4af37]/40 flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] shadow-md shadow-amber-900/10">
                <span className="font-cinzel text-xl font-bold text-stone-950 tracking-widest">
                  A
                </span>
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#c59b27] ring-2 ring-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-lg sm:text-xl font-extrabold tracking-[0.22em] text-stone-900 group-hover:text-[#b38728] transition-colors">
                  AURORA
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.28em] text-[#c59b27] uppercase -mt-0.5">
                  REAL ESTATE
                </span>
              </div>
            </a>

            {/* Desktop Navigation Menu (Center) - Luxury White & Gold */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-[#d4af37]/25 shadow-sm">
              <button
                onClick={() => scrollToSection('hero')}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-stone-700 hover:text-[#b38728] rounded-full hover:bg-[#d4af37]/10 transition-all cursor-pointer"
              >
                صفحه اصلی
              </button>
              <button
                onClick={() => scrollToSection('properties')}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-stone-700 hover:text-[#b38728] rounded-full hover:bg-[#d4af37]/10 transition-all cursor-pointer"
              >
                املاک
              </button>
              <button
                onClick={() => {
                  if (onSelectCategory) onSelectCategory('sale');
                  scrollToSection('properties');
                }}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-stone-700 hover:text-[#b38728] rounded-full hover:bg-[#d4af37]/10 transition-all cursor-pointer"
              >
                خرید
              </button>
              <button
                onClick={() => {
                  if (onSelectCategory) onSelectCategory('rent');
                  scrollToSection('properties');
                }}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-stone-700 hover:text-[#b38728] rounded-full hover:bg-[#d4af37]/10 transition-all cursor-pointer"
              >
                اجاره
              </button>
              <button
                onClick={() => scrollToSection('categories')}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-stone-700 hover:text-[#b38728] rounded-full hover:bg-[#d4af37]/10 transition-all cursor-pointer"
              >
                سبک زندگی
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-stone-700 hover:text-[#b38728] rounded-full hover:bg-[#d4af37]/10 transition-all cursor-pointer"
              >
                درباره ما
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-stone-700 hover:text-[#b38728] rounded-full hover:bg-[#d4af37]/10 transition-all cursor-pointer"
              >
                تماس با ما
              </button>
            </nav>

            {/* Left: Consultation Button (Desktop) & Hamburger (Mobile) */}
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-stone-950 bg-gradient-to-r from-[#c59b27] via-[#f3e5ab] to-[#c59b27] hover:brightness-105 transition-all duration-300 shadow-md shadow-[#c59b27]/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-stone-950 animate-pulse" />
                <span>درخواست مشاوره</span>
              </button>

              {/* Hamburger Button for Mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-white/90 text-stone-800 hover:text-[#b38728] transition-colors border border-[#d4af37]/30 shadow-sm"
                aria-label="باز کردن منو"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer - White & Gold */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#faf8f5]/98 backdrop-blur-2xl flex flex-col justify-between p-6 pt-24 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-3 text-right">
            <span className="text-xs uppercase tracking-widest text-[#c59b27] font-bold pb-2 border-b border-[#d4af37]/20">
              دسترسی سریع به بخش‌ها
            </span>
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center justify-between py-3 text-lg font-medium text-stone-800 hover:text-[#b38728] border-b border-stone-200/60"
            >
              <span>صفحه اصلی</span>
              <ChevronLeft className="w-5 h-5 text-stone-400" />
            </button>
            <button
              onClick={() => scrollToSection('properties')}
              className="flex items-center justify-between py-3 text-lg font-medium text-stone-800 hover:text-[#b38728] border-b border-stone-200/60"
            >
              <span>املاک منتخب</span>
              <ChevronLeft className="w-5 h-5 text-stone-400" />
            </button>
            <button
              onClick={() => {
                if (onSelectCategory) onSelectCategory('sale');
                scrollToSection('properties');
              }}
              className="flex items-center justify-between py-3 text-lg font-medium text-stone-800 hover:text-[#b38728] border-b border-stone-200/60"
            >
              <span>خرید ملک لوکس</span>
              <ChevronLeft className="w-5 h-5 text-stone-400" />
            </button>
            <button
              onClick={() => {
                if (onSelectCategory) onSelectCategory('rent');
                scrollToSection('properties');
              }}
              className="flex items-center justify-between py-3 text-lg font-medium text-stone-800 hover:text-[#b38728] border-b border-stone-200/60"
            >
              <span>اجاره و رهن اختصاصی</span>
              <ChevronLeft className="w-5 h-5 text-stone-400" />
            </button>
            <button
              onClick={() => scrollToSection('categories')}
              className="flex items-center justify-between py-3 text-lg font-medium text-stone-800 hover:text-[#b38728] border-b border-stone-200/60"
            >
              <span>سبک‌های زندگی و معماری</span>
              <ChevronLeft className="w-5 h-5 text-stone-400" />
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="flex items-center justify-between py-3 text-lg font-medium text-stone-800 hover:text-[#b38728] border-b border-stone-200/60"
            >
              <span>درباره Aurora Real Estate</span>
              <ChevronLeft className="w-5 h-5 text-stone-400" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center justify-between py-3 text-lg font-medium text-stone-800 hover:text-[#b38728] border-b border-stone-200/60"
            >
              <span>تماس با مشاوران</span>
              <ChevronLeft className="w-5 h-5 text-stone-400" />
            </button>
          </div>

          <div className="pt-6 border-t border-[#d4af37]/20 flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#b38728] via-[#f3e5ab] to-[#c59b27] text-stone-950 font-bold text-center shadow-lg shadow-[#c59b27]/30 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              <span>درخواست مشاوره اختصاصی</span>
            </button>
            <div className="flex items-center justify-center gap-2 text-xs text-stone-600 mt-2">
              <PhoneCall className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>پاسخگویی اختصاصی: ۰۲۱-۱۲۳۴۵۶۷۸</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
