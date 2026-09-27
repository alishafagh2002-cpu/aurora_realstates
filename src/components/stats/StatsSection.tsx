import React, { useEffect, useState, useRef } from 'react';

interface StatItem {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export const StatsSection: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { value: 850, prefix: '+', label: 'ملک ثبت‌شده', sublabel: 'فایل‌های انحصاری و تاییدشده' },
    { value: 320, prefix: '+', label: 'معامله موفق', sublabel: 'قراردادهای ملکی ممتاز' },
    { value: 12, prefix: '+', label: 'سال تجربه', sublabel: 'پیشرو در بازار املاک لوکس' },
    { value: 98, suffix: '%', label: 'رضایت مشتریان', sublabel: 'ارزیابی کیفیت خدمات VIP' }
  ];

  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          // Animate counts smoothly
          const duration = 1800;
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // easeOutExpo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            setCounts(stats.map((s) => Math.round(s.value * easeProgress)));

            if (frame === totalFrames) {
              clearInterval(timer);
            }
          }, frameDuration);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative border border-[#d4af37]/35 bg-white/90 backdrop-blur-xl rounded-3xl my-12 shadow-lg shadow-amber-900/5"
    >
      {/* Background Lighting Strip */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="relative group p-4">
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 font-cinzel tracking-tight mb-2 flex items-center justify-center gap-1 group-hover:text-[#8c6d17] transition-colors">
              {stat.prefix && <span className="text-[#c59b27] font-sans">{stat.prefix}</span>}
              <span>{counts[idx]}</span>
              {stat.suffix && <span className="text-[#c59b27] font-sans">{stat.suffix}</span>}
            </div>

            <div className="text-base sm:text-lg font-bold text-stone-800 mb-1">
              {stat.label}
            </div>

            <div className="text-xs text-stone-500 font-normal">
              {stat.sublabel}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
