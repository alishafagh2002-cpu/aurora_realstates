import React from 'react';
import { CheckCircle2, ShieldCheck, Sparkles, Cpu, Award } from 'lucide-react';

export const WhyAurora: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="w-8 h-8 text-[#c59b27]" />,
      number: '۰۱',
      title: 'انتخاب هوشمند',
      subtitle: 'ملک‌های منتخب و بررسی‌شده',
      description:
        'هر ملکی به مجموعه آرورا راه نمی‌یابد. تمام فایل‌ها توسط تیمی از برجسته‌ترین معماران، مهندسان سازه و وکلای ملکی از نظر اصالت سند، متریال ساخت و پتانسیل رشد ارزش مادی بازرسی می‌شوند.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#c59b27]" />,
      number: '۰۲',
      title: 'مشاوره تخصصی',
      subtitle: 'همراهی از اولین جستجو تا قرارداد',
      description:
        'از تحلیل دقیق بازار و بازدیدهای محرمانه و VIP تا مدیریت مذاکرات مالی و تنظیم قراردادهای حقوقی بدون کوچک‌ترین ریسک، مشاوران اختصاصی آرورا در تمام قدم‌ها در کنار شما هستند.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#c59b27]" />,
      number: '۰۳',
      title: 'تجربه متفاوت',
      subtitle: 'تکنولوژی برای ساده‌تر شدن انتخاب شما',
      description:
        'با بهره‌گیری از مدلسازی سه‌بعدی تعاملی، تورهای واقعیت مجازی و تحلیل‌های هوشمند ارزش‌گذاری، تصویری عینی و دقیق از فضای زندگی آینده‌تان پیش از هرگونه تعهد مالی خواهید داشت.'
    }
  ];

  return (
    <section id="why-us" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#d4af37]/35 text-xs text-[#8c6d17] font-bold mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
          <span>استانداردهای بین‌المللی لوکس</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight mb-4">
          چرا <span className="gold-gradient-text font-cinzel">AURORA</span>؟
        </h2>
        <p className="text-sm sm:text-base text-stone-600 font-normal">
          ما تعریف سرمایه‌گذاری و خرید ملک را با خلق تجربه‌ای در تراز جهانی دگرگون کرده‌ایم.
        </p>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="group relative rounded-3xl p-8 bg-white border border-[#d4af37]/30 hover:border-[#b38728] transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-2xl hover:shadow-amber-900/10 flex flex-col justify-between"
          >
            <div>
              {/* Pillar Number & Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 rounded-2xl bg-amber-50/60 flex items-center justify-center border border-[#d4af37]/35 group-hover:scale-110 group-hover:bg-[#faf8f5] transition-all duration-300 shadow-sm">
                  {pillar.icon}
                </div>
                <span className="font-cinzel text-3xl font-extrabold text-stone-300 group-hover:text-[#c59b27]/60 transition-colors">
                  {pillar.number}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-2xl font-bold text-stone-900 mb-2 group-hover:text-[#8c6d17] transition-colors">
                {pillar.title}
              </h3>
              <div className="text-xs font-bold text-[#8c6d17] mb-4 tracking-wide">
                {pillar.subtitle}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-stone-600 font-normal leading-relaxed">
                {pillar.description}
              </p>
            </div>

            {/* Bottom Accent line */}
            <div className="mt-8 pt-4 border-t border-stone-200/80 flex items-center gap-2 text-xs text-stone-500 group-hover:text-stone-800 transition-colors font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#c59b27]" />
              <span>تضمین کمال و شفافیت حقوقی</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
