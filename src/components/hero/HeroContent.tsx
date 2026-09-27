import React from 'react';
import { ArrowLeft, PhoneCall } from 'lucide-react';

interface HeroContentProps {
  onExploreProperties: () => void;
  onOpenConsultation: () => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({
  onExploreProperties,
  onOpenConsultation
}) => {
  return (
    <div className="relative z-10 w-full min-h-[90vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 select-none">
      {/* Luxury Brand Tag */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#d4af37]/35 mb-8 shadow-md shadow-amber-900/5 animate-in fade-in slide-in-from-top-4 duration-700">
        <span className="w-2 h-2 rounded-full bg-[#c59b27] animate-ping" />
        <span className="text-xs sm:text-sm font-semibold text-[#8c6d17] tracking-wide">
          برند اختصاصی املاک فوق‌لوکس و مدرن
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
      </div>

      {/* Main Title: خانه‌ای برای آینده */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-stone-900 mb-6 drop-shadow-sm leading-[1.25]">
        خانه‌ای برای <span className="gold-gradient-text">آینده</span>
      </h1>

      {/* Subtitle: املاک خاص، برای زندگی خاص. */}
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-stone-800 tracking-wide mb-6">
        املاک خاص، برای زندگی خاص.
      </h2>

      {/* Small Description */}
      <p className="max-w-2xl text-sm sm:text-base md:text-lg text-stone-600 font-light leading-relaxed mb-10 text-balance">
        در <span className="font-cinzel text-[#8c6d17] font-bold tracking-wider">AURORA REAL ESTATE</span>، 
        بهترین خانه‌ها و سرمایه‌های ملکی را با تجربه‌ای متفاوت، مدرن و استاندارد بین‌المللی کشف کنید.
      </p>

      {/* Two CTAs */}
      <div className="flex flex-col sm:row items-center gap-4 sm:gap-5 w-full sm:w-auto">
        {/* مشاهده املاک ← */}
        <button
          onClick={onExploreProperties}
          className="group w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#b38728] via-[#f3e5ab] to-[#c59b27] text-stone-950 font-bold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-[#c59b27]/30 hover:shadow-[0_0_25px_rgba(212,175,55,0.45)] hover:scale-105 active:scale-95 cursor-pointer"
        >
          <span>مشاهده املاک منتخب</span>
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
        </button>

        {/* تماس با مشاور */}
        <button
          onClick={onOpenConsultation}
          className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-stone-800 hover:text-[#8c6d17] font-semibold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all duration-300 border border-[#d4af37]/40 shadow-sm hover:border-[#b38728] cursor-pointer"
        >
          <PhoneCall className="w-4 h-4 text-[#c59b27]" />
          <span>تماس با مشاور اختصاصی</span>
        </button>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <div 
        className="absolute bottom-6 flex flex-col items-center gap-2 cursor-pointer opacity-75 hover:opacity-100 transition-opacity" 
        onClick={onExploreProperties}
      >
        <span className="text-[11px] text-stone-500 font-medium tracking-wider">اسکرول کنید تا وارد فضا شوید</span>
        <div className="w-5 h-8 rounded-full border border-[#d4af37]/60 flex justify-center pt-1 bg-white/50">
          <div className="w-1 h-2 rounded-full bg-[#c59b27] animate-bounce" />
        </div>
      </div>
    </div>
  );
};
