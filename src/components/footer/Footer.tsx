import React from 'react';
import { ArrowUp, Instagram, Linkedin, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#f5efe6] border-t border-[#d4af37]/30 pt-20 pb-12 px-4 sm:px-6 lg:px-8 text-stone-700 select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-16 border-b border-stone-300/70">
          {/* Brand Info (Col span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#b38728] via-[#f3e5ab] to-[#c59b27] border border-[#d4af37]/40 flex items-center justify-center shadow-sm">
                <span className="font-cinzel text-xl font-bold text-stone-950 tracking-widest">
                  A
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-cinzel text-xl font-extrabold tracking-[0.22em] text-stone-900">
                  AURORA
                </span>
                <span className="text-[10px] font-bold tracking-[0.28em] text-[#c59b27] uppercase -mt-0.5">
                  REAL ESTATE
                </span>
              </div>
            </div>

            <p className="text-lg font-bold text-stone-900">
              خانه‌ای برای آینده.
            </p>
            <p className="text-xs text-stone-600 font-normal leading-relaxed max-w-sm">
              پیشرو در معرفی و سرمایه‌گذاری بر روی برجسته‌ترین شاهکارهای معماری، ویلاهای اختصاصی و پنت‌هاوس‌های مدرن با استانداردهای جهانی.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#d4af37]/40 flex items-center justify-center text-stone-700 hover:text-[#b38728] hover:border-[#b38728] shadow-xs transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#d4af37]/40 flex items-center justify-center text-stone-700 hover:text-[#b38728] hover:border-[#b38728] shadow-xs transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white border border-[#d4af37]/40 flex items-center justify-center text-stone-700 hover:text-[#b38728] hover:border-[#b38728] shadow-xs transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 1: املاک */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#8c6d17] font-bold">
              املاک
            </h4>
            <ul className="space-y-2 text-xs text-stone-600 font-medium">
              <li>
                <button
                  onClick={() => scrollToSection('properties')}
                  className="hover:text-[#b38728] transition-colors cursor-pointer"
                >
                  ویلای لواسان
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('properties')}
                  className="hover:text-[#b38728] transition-colors cursor-pointer"
                >
                  پنت‌هاوس الهیه
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('properties')}
                  className="hover:text-[#b38728] transition-colors cursor-pointer"
                >
                  ویلای جنگلی رامسر
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('properties')}
                  className="hover:text-[#b38728] transition-colors cursor-pointer"
                >
                  آپارتمان زعفرانیه
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('properties')}
                  className="hover:text-[#b38728] transition-colors cursor-pointer"
                >
                  ویلای ساحلی کیش
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: خدمات */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#8c6d17] font-bold">
              خدمات
            </h4>
            <ul className="space-y-2 text-xs text-stone-600 font-medium">
              <li>
                <span className="hover:text-[#b38728] transition-colors">مشاوره خرید و سرمایه‌گذاری</span>
              </li>
              <li>
                <span className="hover:text-[#b38728] transition-colors">کارشناسی قیمت و سند</span>
              </li>
              <li>
                <span className="hover:text-[#b38728] transition-colors">عقد قراردادهای حقوقی VIP</span>
              </li>
              <li>
                <span className="hover:text-[#b38728] transition-colors">تورهای بازدید هوایی و ۳D</span>
              </li>
              <li>
                <span className="hover:text-[#b38728] transition-colors">مدیریت املاک لوکس</span>
              </li>
            </ul>
          </div>

          {/* Col 3: درباره Aurora */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#8c6d17] font-bold">
              درباره Aurora
            </h4>
            <ul className="space-y-2 text-xs text-stone-600 font-medium">
              <li>
                <button
                  onClick={() => scrollToSection('why-us')}
                  className="hover:text-[#b38728] transition-colors cursor-pointer"
                >
                  فلسفه معماری ما
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('stats')}
                  className="hover:text-[#b38728] transition-colors cursor-pointer"
                >
                  کارنامه و افتخارات
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('process')}
                  className="hover:text-[#b38728] transition-colors cursor-pointer"
                >
                  فرآیند همکاری
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="hover:text-[#b38728] transition-colors cursor-pointer"
                >
                  نظرات خریداران
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: تماس با ما */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#8c6d17] font-bold">
              ارتباط با ما
            </h4>
            <ul className="space-y-2 text-xs text-stone-600 font-medium">
              <li>دفتر مرکزی: الهیه، فرشته، پلاک ۲۴</li>
              <li className="dir-ltr text-right">۰۲۱-۱۲۳۴۵۶۷۸</li>
              <li className="dir-ltr text-right">۰۹۱۲-۱۲۳-۴۵۶۷</li>
              <li className="font-sans">hello@aurora-realestate.ir</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 font-normal">
          <div>
            © 2026 Aurora Real Estate. تمامی حقوق محفوظ است. (طراحی‌شده با تم لوکس سفید و طلایی)
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-stone-50 text-stone-700 hover:text-[#8c6d17] transition-colors border border-[#d4af37]/40 cursor-pointer shadow-xs font-medium"
          >
            <span>بازگشت به ابتدای صفحه</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#c59b27]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
