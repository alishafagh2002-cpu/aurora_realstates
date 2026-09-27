import React from 'react';
import { MessageSquareText, Search, Compass, Key, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      step: '۰۱',
      icon: <MessageSquareText className="w-6 h-6 text-[#c59b27]" />,
      title: 'نیاز شما را می‌شنویم',
      subtitle: 'شناخت دقیق سلیقه و سبک زندگی',
      description:
        'در یک جلسه خصوصی یا تماس صوتی، تمامی انتظارات شما شامل نوع معماری، منطقه جغرافیایی، چشم‌انداز، متراژ و افق سرمایه‌گذاری را با جزئیات بررسی می‌کنیم.'
    },
    {
      step: '۰۲',
      icon: <Search className="w-6 h-6 text-[#c59b27]" />,
      title: 'ملک مناسب را پیدا می‌کنیم',
      subtitle: 'پالایش از میان برترین املاک انحصاری',
      description:
        'از میان صدها فایل کارشناسی‌شده و املاک آف‌مارکت (فایل‌های محرمانه خارج از بازار عمومی)، گزینه‌هایی را که دقیقاً با معیارهای شما منطبق هستند دست‌چین می‌کنیم.'
    },
    {
      step: '۰۳',
      icon: <Compass className="w-6 h-6 text-[#c59b27]" />,
      title: 'بازدید و بررسی',
      subtitle: 'تور اختصاصی و کارشناسی فنی-حقوقی',
      description:
        'هماهنگی بازدیدهای VIP در ساعات ایده‌آل نورگیری همراه با حضور وکیل ملکی و کارشناس سازه جهت بررسی بی‌نقص اسناد ثبتی، پایان‌کار و سلامت فنی بنا.'
    },
    {
      step: '۰۴',
      icon: <Key className="w-6 h-6 text-[#c59b27]" />,
      title: 'تا تحویل کلید همراه شما هستیم',
      subtitle: 'انعقاد قرارداد امن و انتقال نهایی',
      description:
        'مدیریت حرفه‌ای جلسه قرارداد در اتاق VIP با نظارت حقوقی کامل تا لحظه امضای سند رسمی و تحویل کلید خانه رویایی‌تان در بالاترین سطح آسودگی خاطر.'
    }
  ];

  return (
    <section id="process" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#d4af37]/35 text-xs text-[#8c6d17] font-bold mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
          <span>مسیر دستیابی به خانه ایده‌آل</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight mb-4">
          از جستجو تا کلید خانه
        </h2>
        <p className="text-sm sm:text-base text-stone-600 font-normal">
          فرآیندی شفاف، منظم و محترمانه که آسایش و امنیت فکری شما را در اولویت قرار می‌دهد.
        </p>
      </div>

      {/* Cinematic Horizontal / Vertical Timeline */}
      <div className="relative">
        {/* Connecting line on desktop */}
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[2px] bg-gradient-to-r from-[#d4af37]/10 via-[#d4af37]/50 to-[#d4af37]/10 -translate-y-12 z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-3xl p-7 border border-[#d4af37]/30 hover:border-[#b38728] transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-2xl hover:shadow-amber-900/10 flex flex-col justify-between"
            >
              <div>
                {/* Step Pill & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50/60 flex items-center justify-center border border-[#d4af37]/35 group-hover:border-[#b38728] group-hover:scale-105 transition-all shadow-xs">
                    {item.icon}
                  </div>
                  <span className="font-cinzel text-3xl font-extrabold text-[#c59b27]/70 group-hover:text-[#8c6d17] transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-stone-900 mb-1.5 group-hover:text-[#8c6d17] transition-colors">
                  {item.title}
                </h3>
                <div className="text-xs font-bold text-[#8c6d17] mb-4">
                  {item.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs text-stone-600 font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center gap-2 text-[11px] text-stone-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>مرحله {idx + 1} از ۴</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
