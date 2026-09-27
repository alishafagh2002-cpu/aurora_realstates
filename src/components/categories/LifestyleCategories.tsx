import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';

interface LifestyleCategoriesProps {
  onSelectCategory: (category: string) => void;
}

export const LifestyleCategories: React.FC<LifestyleCategoriesProps> = ({ onSelectCategory }) => {
  const categories = [
    {
      id: 'villa',
      title: 'ویلا',
      subtitle: 'زندگی در آرامش',
      description: 'عمارت‌های لوکس، استخرهای بی‌نهایت و هم‌آغوشی با طبیعت دست‌نخورده',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      count: '۱۲ ملک آماده'
    },
    {
      id: 'apartment',
      title: 'آپارتمان',
      subtitle: 'زندگی در مرکز شهر',
      description: 'واحدهای مدرن با امکانات کامل هتلینگ در معتبرترین شاهراه‌های شهری',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
      count: '۱۸ ملک آماده'
    },
    {
      id: 'penthouse',
      title: 'پنت‌هاوس',
      subtitle: 'ارتفاعی متفاوت',
      description: 'بالاترین قله تجمل شهری با دید ۳۶۰ درجه و تراس‌گاردهای معلق بر فراز ابرها',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      count: '۷ ملک آماده'
    },
    {
      id: 'commercial',
      title: 'املاک تجاری',
      subtitle: 'سرمایه‌ای برای آینده',
      description: 'دفاتر کار فوق‌مدرن و فضاهای تجاری انحصاری با بالاترین بازدهی اقتصادی',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      count: '۹ ملک آماده'
    }
  ];

  const handleCategoryClick = (catId: string) => {
    onSelectCategory(catId);
    const propertiesEl = document.getElementById('properties');
    if (propertiesEl) {
      propertiesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="categories" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#d4af37]/35 text-xs text-[#8c6d17] font-bold mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
          <span>تطابق با سبک و سلیقه شما</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight mb-4">
          برای هر سبک زندگی
        </h2>
        <p className="text-sm sm:text-base text-stone-600 font-normal">
          فضاهایی منحصر‌به‌فرد که بر اساس نیازهای روحی، شغلی و خانوادگی شما طراحی و گزینش شده‌اند.
        </p>
      </div>

      {/* 4 Large Category Cards with 3D feel */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            onClick={() => handleCategoryClick(cat.id)}
            className="group relative h-[420px] rounded-3xl overflow-hidden bg-white border border-[#d4af37]/30 hover:border-[#b38728] transition-all duration-500 hover:-translate-y-3 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-amber-900/15"
            style={{ perspective: '1000px' }}
          >
            {/* Background Image with Zoom */}
            <img
              src={cat.image}
              alt={cat.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />

            {/* Light Rim on Hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d4af37]/70 rounded-3xl transition-colors duration-500 pointer-events-none" />

            {/* Content Container */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <span className="bg-stone-900/70 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold text-amber-300 border border-[#d4af37]/30">
                  {cat.count}
                </span>
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#d4af37] group-hover:text-stone-950 transition-all">
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                </div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-amber-300 font-bold mb-1 block">
                  {cat.subtitle}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2 group-hover:text-[#f3e5ab] transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-stone-200 leading-relaxed font-light mb-4 opacity-90">
                  {cat.description}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-bold group-hover:underline">
                  <span>مشاهده کلکسیون {cat.title}</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
