import React, { useState } from 'react';
import { Phone, Smartphone, Mail, MapPin, Send, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    subject: 'خرید ملک لوکس',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // Safe fallback
      }
    }, 700);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute -bottom-10 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Glass Box */}
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 border border-[#d4af37]/35 shadow-2xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Info Side (Right in RTL) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#d4af37]/35 text-xs text-[#8c6d17] font-bold mb-4 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>همراهی با شما افتخار ماست</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight mb-4 leading-tight">
                خانه بعدی شما شاید همین‌جا باشد.
              </h2>
              <p className="text-sm sm:text-base text-stone-600 font-normal leading-relaxed mb-8">
                برای خرید، فروش، اجاره یا دریافت مشاوره تخصصی با کارشناسان Aurora Real Estate در ارتباط باشید.
              </p>

              {/* Sample Contact Info List */}
              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href="tel:02112345678"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-colors text-stone-800"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#8c6d17]">
                    <Phone className="w-4 h-4 text-[#c59b27]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-500 block font-medium">تلفن ثابت دفتر مرکزی (نمونه)</span>
                    <span className="font-bold font-sans dir-ltr inline-block">۰۲۱-۱۲۳۴۵۶۷۸</span>
                  </div>
                </a>

                <a
                  href="tel:09121234567"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-colors text-stone-800"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#8c6d17]">
                    <Smartphone className="w-4 h-4 text-[#c59b27]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-500 block font-medium">خط همراه اختصاصی مشاوران VIP (نمونه)</span>
                    <span className="font-bold font-sans dir-ltr inline-block">۰۹۱۲-۱۲۳-۴۵۶۷</span>
                  </div>
                </a>

                <a
                  href="mailto:hello@aurora-realestate.ir"
                  className="flex items-center gap-3.5 p-3 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200 transition-colors text-stone-800"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#8c6d17]">
                    <Mail className="w-4 h-4 text-[#c59b27]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-500 block font-medium">پست الکترونیک رسمی</span>
                    <span className="font-sans font-medium">hello@aurora-realestate.ir</span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-stone-50 border border-stone-200 text-stone-800">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-[#8c6d17] flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#c59b27]" />
                  </div>
                  <div>
                    <span className="text-[11px] text-stone-500 block font-medium">نشانی آتلیه و دفتر معماری (نمونه)</span>
                    <span className="font-medium">تهران، الهیه، خیابان نمونه، پلاک ۲۴، برج آرورا</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-stone-200 text-[11px] text-stone-500 mt-6 font-medium">
              * تمام اطلاعات فوق صرفاً نمونه بوده و در محیط دمو نمایش داده می‌شوند.
            </div>
          </div>

          {/* Form Side (Left in RTL) */}
          <div className="lg:col-span-7">
            <div className="bg-[#faf8f5] p-6 sm:p-8 rounded-3xl border border-[#d4af37]/35 shadow-sm">
              <h3 className="text-xl font-bold text-stone-900 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#c59b27]" />
                <span>ارسال پیام یا درخواست مشاوره</span>
              </h3>
              <p className="text-xs text-stone-500 mb-6 font-medium">
                اطلاعات شما نزد تیم آرورا کاملاً محرمانه خواهد ماند.
              </p>

              {isSubmitted ? (
                <div className="py-12 px-6 text-center space-y-4 bg-amber-50 rounded-2xl border border-amber-300 animate-in zoom-in-95">
                  <CheckCircle2 className="w-16 h-16 text-[#8c6d17] mx-auto" />
                  <h4 className="text-xl font-bold text-stone-900">پیام شما با موفقیت دریافت شد</h4>
                  <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    از پیام شما سپاسگزاریم. کارشناس ارشد مجموعه آرورا در کوتاه‌ترین زمان ممکن با شماره ثبت‌شده تماس خواهند گرفت.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', phone: '', subject: 'خرید ملک لوکس', message: '' });
                    }}
                    className="text-xs text-[#8c6d17] font-bold underline pt-2 cursor-pointer"
                  >
                    ارسال پیام دیگر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-stone-700 block mb-1.5 font-semibold">
                        نام و نام خانوادگی <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="مثال: دکتر کیان مهر"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full bg-white border border-stone-200/90 rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#c59b27] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-stone-700 block mb-1.5 font-semibold">
                        شماره تماس همراه <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="۰۹۱۲XXXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-stone-200/90 rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#c59b27] transition-colors dir-ltr text-right"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-stone-700 block mb-1.5 font-semibold">
                      موضوع درخواست
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white border border-stone-200/90 rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-[#c59b27] transition-colors cursor-pointer"
                    >
                      <option value="خرید ملک لوکس">خرید ملک لوکس (ویلا، پنت‌هاوس)</option>
                      <option value="فروش یا واگذاری ملک">فروش یا معرفی ملک لوکس به آرورا</option>
                      <option value="اجاره و رهن کامل">اجاره و رهن اقامتگاه‌های ویژه</option>
                      <option value="مشاوره سرمایه‌گذاری">مشاوره جامع سرمایه‌گذاری ملکی</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-stone-700 block mb-1.5 font-semibold">
                      پیام یا توضیحات تکمیلی
                    </label>
                    <textarea
                      rows={4}
                      placeholder="بودجه مورد نظر، ترجیحات منطقه‌ای یا هر نکته دیگری که مد نظر دارید..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-stone-200/90 rounded-2xl px-4 py-3 text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#c59b27] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#b38728] via-[#e5c158] to-[#c59b27] text-stone-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md shadow-[#c59b27]/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>در حال ارسال اطلاعات...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-stone-950" />
                        <span>ارسال درخواست</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
