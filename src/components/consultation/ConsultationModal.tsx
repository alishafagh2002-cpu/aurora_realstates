import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    budget: '۳۰ تا ۵۰ میلیارد تومان',
    intent: 'خرید ویلا یا پنت‌هاوس',
    note: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 55,
          spread: 65,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback
      }
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div
        className="relative w-full max-w-lg bg-[#faf8f5] border border-[#d4af37]/45 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/60 rounded-bl-full pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-950 transition-colors border border-stone-200 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#d4af37]/35 text-[#8c6d17] text-xs font-bold mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
            <span>مشاوره VIP و رایگان</span>
          </div>
          <h3 className="text-2xl font-black text-stone-900">درخواست مشاوره اختصاصی</h3>
          <p className="text-xs text-stone-600 font-medium mt-1">
            یک مشاور ارشد املاک لوکس آرورا شخصاً پرونده شما را بررسی خواهد کرد.
          </p>
        </div>

        {isSuccess ? (
          <div className="text-center py-8 space-y-4 bg-amber-50 rounded-2xl border border-amber-300 p-6 animate-in zoom-in-95">
            <CheckCircle2 className="w-14 h-14 text-[#8c6d17] mx-auto" />
            <h4 className="text-lg font-bold text-stone-900">درخواست مشاوره ثبت گردید</h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              کارشناس VIP ما حداکثر تا ۲ ساعت آینده با شماره اعلامی شما تماس خواهد گرفت تا اطلاعات و فایل‌های آف‌مارکت متناسب با بودجه شما را معرفی نماید.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#b38728] via-[#e5c158] to-[#c59b27] text-stone-950 font-bold text-xs shadow-md shadow-[#c59b27]/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer"
            >
              متشکرم، بستن
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs text-stone-700 block mb-1.5 font-semibold">
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                required
                placeholder="مثال: مهندس رادمهر"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white border border-stone-200/90 rounded-2xl px-4 py-3 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#c59b27]"
              />
            </div>

            <div>
              <label className="text-xs text-stone-700 block mb-1.5 font-semibold">
                شماره تماس مستقیم
              </label>
              <input
                type="tel"
                required
                placeholder="۰۹۱۲XXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-white border border-stone-200/90 rounded-2xl px-4 py-3 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-[#c59b27] dir-ltr text-right"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-stone-700 block mb-1.5 font-semibold">
                  هدف از مشاوره
                </label>
                <select
                  value={formData.intent}
                  onChange={(e) => setFormData({ ...formData, intent: e.target.value })}
                  className="w-full bg-white border border-stone-200/90 rounded-2xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#c59b27]"
                >
                  <option value="خرید ویلا">خرید ویلای مدرن</option>
                  <option value="خرید پنت‌هاوس">خرید پنت‌هاوس لوکس</option>
                  <option value="خرید آپارتمان">خرید آپارتمان نوساز</option>
                  <option value="سرمایه‌گذاری">سرمایه‌گذاری کلان</option>
                  <option value="فروش ملک">معرفی و فروش ملک</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-stone-700 block mb-1.5 font-semibold">
                  محدوده بودجه مد نظر
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-white border border-stone-200/90 rounded-2xl px-3 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-[#c59b27]"
                >
                  <option value="۲۰ تا ۳۵ میلیارد تومان">۲۰ تا ۳۵ میلیارد تومان</option>
                  <option value="۳۵ تا ۵۰ میلیارد تومان">۳۵ تا ۵۰ میلیارد تومان</option>
                  <option value="۵۰ تا ۸۰ میلیارد تومان">۵۰ تا ۸۰ میلیارد تومان</option>
                  <option value="بیش از ۸۰ میلیارد تومان">بیش از ۸۰ میلیارد تومان</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#b38728] via-[#e5c158] to-[#c59b27] text-stone-950 font-bold text-xs flex items-center justify-center gap-2 hover:brightness-105 transition-all shadow-md shadow-[#c59b27]/30 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? <span>در حال ثبت اطلاعات...</span> : <span>ثبت درخواست تماس فوری</span>}
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-stone-500 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c59b27]" />
              <span>اطلاعات شما با پروتکل محرمانگی محافظت می‌شود</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
