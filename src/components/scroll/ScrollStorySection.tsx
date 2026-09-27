import React from 'react';
import { Sparkles, Building, Layers } from 'lucide-react';

interface ScrollStorySectionProps {
  currentStage: number; // 1, 2, 3
  onStageClick: (stage: number) => void;
}

export const ScrollStorySection: React.FC<ScrollStorySectionProps> = ({
  currentStage,
  onStageClick
}) => {
  return (
    <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 border-y border-[#d4af37]/20 bg-white/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        {/* Stage Progress Indicator */}
        <div className="flex items-center justify-center gap-3 mb-10 flex-wrap">
          <button
            onClick={() => onStageClick(1)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              currentStage === 1
                ? 'gold-gradient-bg text-stone-950 shadow-md shadow-[#c59b27]/25'
                : 'text-stone-600 bg-white/80 border border-stone-200/80 hover:text-[#b38728] hover:border-[#d4af37]/40'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-stone-950/15 flex items-center justify-center text-[10px] font-bold">
              ۰۱
            </span>
            <span>نمای بیرونی و محوطه</span>
          </button>

          <div className="w-8 h-[1px] bg-[#d4af37]/30 hidden sm:block" />

          <button
            onClick={() => onStageClick(2)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              currentStage === 2
                ? 'gold-gradient-bg text-stone-950 shadow-md shadow-[#c59b27]/25'
                : 'text-stone-600 bg-white/80 border border-stone-200/80 hover:text-[#b38728] hover:border-[#d4af37]/40'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-stone-950/15 flex items-center justify-center text-[10px] font-bold">
              ۰۲
            </span>
            <span>فضای داخلی و نور طبیعی</span>
          </button>

          <div className="w-8 h-[1px] bg-[#d4af37]/30 hidden sm:block" />

          <button
            onClick={() => onStageClick(3)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              currentStage === 3
                ? 'gold-gradient-bg text-stone-950 shadow-md shadow-[#c59b27]/25'
                : 'text-stone-600 bg-white/80 border border-stone-200/80 hover:text-[#b38728] hover:border-[#d4af37]/40'
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-stone-950/15 flex items-center justify-center text-[10px] font-bold">
              ۰۳
            </span>
            <span>کلکسیون املاک آرورا</span>
          </button>
        </div>

        {/* Dynamic Scene Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Scene 01 Card */}
          <div
            onClick={() => onStageClick(1)}
            className={`cursor-pointer rounded-3xl p-6 sm:p-8 luxury-card-transition border ${
              currentStage === 1
                ? 'glass-panel-elevated border-[#d4af37] ring-1 ring-[#d4af37]/40 -translate-y-2 shadow-xl shadow-amber-900/10'
                : 'glass-panel-subtle border-stone-200/70 opacity-80 hover:opacity-100 hover:border-[#d4af37]/40 hover:-translate-y-1'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-[#8c6d17] font-cinzel font-bold">
                SCENE 01 — ARCHITECTURE
              </span>
              <Building className="w-5 h-5 text-[#c59b27]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">
              جایی که معماری، تبدیل به سبک زندگی می‌شود.
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed mb-6">
              خطوط مینیمال، استخرهای معلق اینفینیتی و هم‌نشینی بی‌نظیر شیشه و بتن. نمای مدرنی که چشم‌ها را به آینده باز می‌کند.
            </p>
            <div className="flex items-center gap-3 text-xs text-stone-500 pt-4 border-t border-stone-200/80 font-medium">
              <span>دید ۳۶۰ درجه</span>
              <span>•</span>
              <span>استخر اینفینیتی</span>
              <span>•</span>
              <span>نورپردازی طلایی</span>
            </div>
          </div>

          {/* Scene 02 Card */}
          <div
            onClick={() => onStageClick(2)}
            className={`cursor-pointer rounded-3xl p-6 sm:p-8 luxury-card-transition border ${
              currentStage === 2
                ? 'glass-panel-elevated border-[#d4af37] ring-1 ring-[#d4af37]/40 -translate-y-2 shadow-xl shadow-amber-900/10'
                : 'glass-panel-subtle border-stone-200/70 opacity-80 hover:opacity-100 hover:border-[#d4af37]/40 hover:-translate-y-1'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-[#8c6d17] font-cinzel font-bold">
                SCENE 02 — LIVING SPACE
              </span>
              <Sparkles className="w-5 h-5 text-[#c59b27]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-2">
              خانه فقط یک فضا نیست.
            </h3>
            <h4 className="text-sm sm:text-base font-semibold text-[#8c6d17] mb-3">
              تجربه‌ای است که هر روز در آن زندگی می‌کنید.
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed mb-6">
              اتاق نشیمن غرق در نور طبیعی با سقف‌های بلند، چشم‌انداز باز بدون مشرف و جزئیات دست‌چین‌شده از برترین برندهای روز جهان.
            </p>
            <div className="flex items-center gap-3 text-xs text-stone-500 pt-4 border-t border-stone-200/80 font-medium">
              <span>سقف ۴.۲ متری</span>
              <span>•</span>
              <span>کفپوش اسلب ایتالیایی</span>
              <span>•</span>
              <span>سیستم BMS هوشمند</span>
            </div>
          </div>

          {/* Scene 03 Card */}
          <div
            onClick={() => onStageClick(3)}
            className={`cursor-pointer rounded-3xl p-6 sm:p-8 luxury-card-transition border ${
              currentStage === 3
                ? 'glass-panel-elevated border-[#d4af37] ring-1 ring-[#d4af37]/40 -translate-y-2 shadow-xl shadow-amber-900/10'
                : 'glass-panel-subtle border-stone-200/70 opacity-80 hover:opacity-100 hover:border-[#d4af37]/40 hover:-translate-y-1'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs uppercase tracking-widest text-[#8c6d17] font-cinzel font-bold">
                SCENE 03 — COLLECTION
              </span>
              <Layers className="w-5 h-5 text-[#c59b27]" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 mb-3">
              املاک منتخب Aurora
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed mb-6">
              مجموعه‌ای اختصاصی از ارزشمندترین ویلاها، پنت‌هاوس‌ها و اقامتگاه‌های مدرن در تاپ‌ترین نقاط جغرافیایی کشور.
            </p>
            <div className="flex items-center gap-3 text-xs text-stone-500 pt-4 border-t border-stone-200/80 font-medium">
              <span>۸ ملک اختصاصی</span>
              <span>•</span>
              <span>کارشناسی حقوقی ۱۰۰٪</span>
              <span>•</span>
              <span>سند تک‌برگ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
