import React from 'react';
import { Quote, Star, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      quote:
        'تجربه خرید خانه برای من همیشه استرس‌زا بود، اما تیم Aurora تمام مراحل را بسیار حرفه‌ای مدیریت کرد.',
      author: 'سارا محمدی',
      role: 'خریدار ویلای لواسان',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    {
      quote: 'از انتخاب ملک تا قرارداد، همه‌چیز شفاف و منظم بود.',
      author: 'علی رضایی',
      role: 'سرمایه‌گذار پنت‌هاوس الهیه',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    {
      quote: 'حس یک برند لوکس واقعی را در تمام مراحل همکاری تجربه کردم.',
      author: 'نیما کریمی',
      role: 'مالک ویلای ساحلی کیش',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#d4af37]/35 text-xs text-[#8c6d17] font-bold mb-3 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
          <span>صدای همراهان آرورا (محتوای نمایشی و دمو)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight mb-4">
          تجربه مشتریان <span className="font-cinzel text-[#8c6d17]">AURORA</span>
        </h2>
        <p className="text-sm sm:text-base text-stone-600 font-normal">
          روایت کسانی که خانه‌ رویایی و سرمایه‌گذاری آینده خود را با ما بنا نهادند.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="group relative bg-white rounded-3xl p-8 border border-[#d4af37]/30 hover:border-[#b38728] transition-all duration-500 hover:-translate-y-2 shadow-md hover:shadow-2xl hover:shadow-amber-900/10 flex flex-col justify-between"
          >
            <div>
              {/* Stars & Quote Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#c59b27] fill-[#c59b27]" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-[#d4af37]/40 group-hover:text-[#c59b27] transition-colors" />
              </div>

              {/* Quote Text */}
              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal mb-8">
                «{rev.quote}»
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-3 pt-4 border-t border-stone-200/80">
              <img
                src={rev.avatar}
                alt={rev.author}
                className="w-11 h-11 rounded-full object-cover border-2 border-[#d4af37]/60 shadow-xs"
              />
              <div>
                <h4 className="text-sm font-bold text-stone-900 group-hover:text-[#8c6d17] transition-colors">
                  {rev.author}
                </h4>
                <div className="text-xs text-stone-500 font-medium">{rev.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
