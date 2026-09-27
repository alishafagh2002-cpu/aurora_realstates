import React, { useState } from 'react';
import {
  X,
  MapPin,
  Maximize2,
  Bed,
  Bath,
  Car,
  Calendar,
  CheckCircle2,
  PhoneCall,
  CalendarClock,
  Sparkles,
  Share2,
  Heart,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Property } from '../../types/property';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
  onOpenConsultationDirect?: () => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  isFavorite = false,
  onToggleFavorite
}) => {
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Booking Form State
  const [visitorName, setVisitorName] = useState('');
  const [visitorPhone, setVisitorPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('فردا عصر (ساعت ۱۷ الی ۱۹)');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim() || !visitorPhone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBooked(true);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Safe fallback
      }
    }, 700);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 lg:p-10 animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-5xl bg-[#faf8f5] border border-[#d4af37]/40 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-200/80 bg-white/95 backdrop-blur-md z-20">
          <div className="flex items-center gap-3">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold shadow-xs ${
                property.badge === 'ویژه'
                  ? 'gold-gradient-bg text-stone-950'
                  : 'bg-stone-100 text-stone-800 border border-stone-200'
              }`}
            >
              {property.badge}
            </span>
            <span className="text-xs text-stone-500 border-r border-stone-200 pr-3 mr-1 font-mono">
              کد ملک: {property.id.toUpperCase()}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-stone-100 text-stone-700 hover:text-stone-950 transition-colors border border-stone-200 text-xs flex items-center gap-1.5 cursor-pointer"
              title="اشتراک‌گذاری"
            >
              <Share2 className="w-4 h-4 text-[#c59b27]" />
              <span className="hidden sm:inline font-medium">{copiedLink ? 'کپی شد!' : 'اشتراک'}</span>
            </button>

            <button
              onClick={() => onToggleFavorite && onToggleFavorite(property.id)}
              className={`p-2 rounded-xl transition-colors border cursor-pointer ${
                isFavorite
                  ? 'text-white bg-rose-500 border-rose-600 shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:text-stone-950 border-stone-200'
              }`}
              title="علاقه‌مندی"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-white' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-950 transition-colors cursor-pointer"
              aria-label="بستن"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-8 space-y-8">
          {/* Main Gallery Section */}
          <div className="space-y-3">
            <div className="relative h-72 sm:h-96 md:h-[420px] w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 shadow-sm">
              <img
                src={property.gallery[activeImageIndex] || property.heroImage}
                alt={property.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Title & Location Overlay */}
              <div className="absolute bottom-4 right-4 left-4 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-300 mb-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{property.location}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold">{property.title}</h2>
                  <span className="text-xs text-stone-300 font-cinzel tracking-wider">
                    {property.englishTitle}
                  </span>
                </div>

                <div className="text-left sm:text-right bg-stone-950/85 px-4 py-2.5 rounded-2xl backdrop-blur-md border border-white/20">
                  <div className="text-[10px] text-amber-300 font-bold">
                    {property.priceSampleNote}
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white">
                    {property.priceFormatted}
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {property.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative h-18 sm:h-24 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#c59b27] ring-2 ring-[#c59b27]/30 scale-[1.02]'
                      : 'border-stone-200 opacity-80 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`تصویر ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="bg-white p-3.5 rounded-2xl border border-stone-200/90 text-center shadow-xs">
              <Maximize2 className="w-5 h-5 text-[#c59b27] mx-auto mb-1" />
              <div className="text-[11px] text-stone-500 font-medium">متراژ زمین/بنا</div>
              <div className="text-sm font-bold text-stone-900">{property.area} متر</div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-stone-200/90 text-center shadow-xs">
              <Bed className="w-5 h-5 text-[#c59b27] mx-auto mb-1" />
              <div className="text-[11px] text-stone-500 font-medium">اتاق خواب</div>
              <div className="text-sm font-bold text-stone-900">{property.bedrooms} خواب مستر</div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-stone-200/90 text-center shadow-xs">
              <Bath className="w-5 h-5 text-[#c59b27] mx-auto mb-1" />
              <div className="text-[11px] text-stone-500 font-medium">تعداد حمام</div>
              <div className="text-sm font-bold text-stone-900">{property.bathrooms} سرویس</div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-stone-200/90 text-center shadow-xs">
              <Car className="w-5 h-5 text-[#c59b27] mx-auto mb-1" />
              <div className="text-[11px] text-stone-500 font-medium">پارکینگ سندی</div>
              <div className="text-sm font-bold text-stone-900">{property.parking} خودرو</div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-stone-200/90 text-center shadow-xs">
              <Calendar className="w-5 h-5 text-[#c59b27] mx-auto mb-1" />
              <div className="text-[11px] text-stone-500 font-medium">سال ساخت</div>
              <div className="text-sm font-bold text-stone-900">{property.yearBuilt}</div>
            </div>

            <div className="bg-white p-3.5 rounded-2xl border border-stone-200/90 text-center shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#c59b27] mx-auto mb-1" />
              <div className="text-[11px] text-stone-500 font-medium">وضعیت سند</div>
              <div className="text-sm font-bold text-stone-900">تک‌برگ ملکی</div>
            </div>
          </div>

          {/* Description & Architectural Highlights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <div className="bg-white p-6 rounded-3xl border border-[#d4af37]/30 shadow-xs">
                <h3 className="text-lg font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#c59b27]" />
                  <span>درباره این شاهکار معماری</span>
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed font-normal mb-4 text-justify">
                  {property.description}
                </p>
                <div className="text-xs text-[#8c6d17] font-semibold bg-amber-50 p-3 rounded-xl border border-amber-200/60">
                  چشم‌انداز: {property.views}
                </div>
              </div>

              {/* Architectural Highlights */}
              <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-xs">
                <h3 className="text-lg font-bold text-stone-900 mb-4">شاخصه‌های معماری و سازه‌ای</h3>
                <div className="space-y-2.5">
                  {property.architecturalHighlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-[#c59b27] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities Grid */}
              <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-xs">
                <h3 className="text-lg font-bold text-stone-900 mb-4">امکانات و تجهیزات رفاهی لوکس</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-2xl bg-stone-50 border border-stone-200/60 flex items-center gap-2.5 text-xs text-stone-800 font-medium"
                    >
                      <span className="w-2 h-2 rounded-full bg-[#c59b27]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Map Representation */}
              <div className="bg-white p-6 rounded-3xl border border-stone-200/80 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-stone-900 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#c59b27]" />
                    <span>موقعیت مکانی و دسترسی‌ها (نمای دمو)</span>
                  </h3>
                  <span className="text-[11px] text-stone-500 font-medium">منطقه: {property.city}</span>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden border border-stone-200 bg-[#faf8f5] flex items-center justify-center text-center p-4">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, #c59b27 1.5px, transparent 1.5px)',
                      backgroundSize: '24px 24px'
                    }}
                  />
                  <div className="relative z-10 flex flex-col items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-amber-100 border border-[#d4af37] flex items-center justify-center shadow-sm">
                      <MapPin className="w-6 h-6 text-[#8c6d17]" />
                    </div>
                    <div className="text-sm font-bold text-stone-900">{property.location}</div>
                    <div className="text-xs text-stone-600 max-w-sm">
                      دسترسی فوق‌العاده سریع به مراکز خرید لوکس، معابر اصلی و خدمات VIP منطقه
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking & Consultation Side Form */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-[#d4af37]/45 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-100/50 rounded-bl-full pointer-events-none" />

                <h3 className="text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <CalendarClock className="w-5 h-5 text-[#c59b27]" />
                  <span>درخواست بازدید خصوصی</span>
                </h3>
                <p className="text-xs text-stone-600 mb-6 font-normal">
                  هماهنگی تور اختصاصی با کانسیرژ اختصاصی و مشاور ویژه این ملک.
                </p>

                {isBooked ? (
                  <div className="bg-amber-50 border border-amber-300 p-6 rounded-2xl text-center space-y-3 animate-in zoom-in-95">
                    <CheckCircle2 className="w-12 h-12 text-[#8c6d17] mx-auto" />
                    <h4 className="text-base font-bold text-stone-900">درخواست شما با موفقیت ثبت شد</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      کارشناس اختصاصی این ملک ظرف حداکثر ۲ ساعت کاری جهت هماهنگی نهایی ساعت و اسکورت با شما تماس خواهند گرفت.
                    </p>
                    <button
                      onClick={() => setIsBooked(false)}
                      className="text-xs text-[#8c6d17] font-bold underline pt-2 cursor-pointer"
                    >
                      ثبت درخواست بازدید دیگر
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs text-stone-700 block mb-1.5 font-semibold">
                        نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: مهندس رادپور"
                        value={visitorName}
                        onChange={(e) => setVisitorName(e.target.value)}
                        className="w-full bg-[#faf8f5] border border-stone-200/90 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#c59b27]"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-stone-700 block mb-1.5 font-semibold">
                        شماره تماس همراه
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="۰۹۱۲XXXXXXX"
                        value={visitorPhone}
                        onChange={(e) => setVisitorPhone(e.target.value)}
                        className="w-full bg-[#faf8f5] border border-stone-200/90 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#c59b27] dir-ltr text-right"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-stone-700 block mb-1.5 font-semibold">
                        زمان پیشنهادی بازدید
                      </label>
                      <select
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full bg-[#faf8f5] border border-stone-200/90 rounded-xl px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#c59b27]"
                      >
                        <option value="امروز عصر (ساعت ۱۷ الی ۱۹)">امروز عصر (ساعت ۱۷ الی ۱۹)</option>
                        <option value="فردا صبح (ساعت ۱۰ الی ۱۲)">فردا صبح (ساعت ۱۰ الی ۱۲)</option>
                        <option value="فردا عصر (ساعت ۱۷ الی ۱۹)">فردا عصر (ساعت ۱۷ الی ۱۹)</option>
                        <option value="آخر هفته (پنجشنبه ساعت ۱۶)">آخر هفته (پنجشنبه ساعت ۱۶)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-[#b38728] via-[#e5c158] to-[#c59b27] text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-[#c59b27]/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>در حال ثبت...</span>
                      ) : (
                        <>
                          <CalendarClock className="w-4 h-4 text-stone-950" />
                          <span>رزرو قطعی تور بازدید حضوری</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

                {/* Direct Consultant Call CTA */}
                <div className="mt-6 pt-6 border-t border-stone-200/80 space-y-3">
                  <div className="text-xs text-stone-600">تماس تلفنی مستقیم با سرپرست فروش این منطقه:</div>
                  <a
                    href="tel:02112345678"
                    className="w-full py-2.5 px-4 rounded-xl bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-800 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <PhoneCall className="w-4 h-4 text-[#c59b27]" />
                    <span>تماس فوری: ۰۲۱-۱۲۳۴۵۶۷۸</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
