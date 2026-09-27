import React, { useState } from 'react';
import { PhoneCall, MessageCircle, Sparkles, X, Headphones } from 'lucide-react';

interface FloatingContactFabProps {
  onOpenConsultation: () => void;
}

export const FloatingContactFab: React.FC<FloatingContactFabProps> = ({ onOpenConsultation }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col-reverse items-start gap-3 select-none">
      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#b38728] via-[#f3e5ab] to-[#c59b27] text-stone-950 flex items-center justify-center shadow-2xl shadow-[#c59b27]/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border-2 border-white relative group"
        aria-label="تماس با کارشناس"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#c59b27] border-2 border-white animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#c59b27] border-2 border-white" />

        {isOpen ? (
          <X className="w-6 h-6 text-stone-950 transition-transform duration-200 rotate-90" />
        ) : (
          <Headphones className="w-6 h-6 text-stone-950 transition-transform group-hover:scale-110" />
        )}
      </button>

      {/* Speed Dial Options Menu */}
      {isOpen && (
        <div className="flex flex-col gap-2.5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Option 1: Direct Call */}
          <a
            href="tel:02112345678"
            className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white hover:bg-stone-50 text-stone-900 border border-[#d4af37]/40 shadow-xl transition-all group"
          >
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-[#8c6d17] group-hover:bg-[#c59b27] group-hover:text-stone-950 transition-colors">
              <PhoneCall className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold">تماس تلفنی مستقیم</span>
          </a>

          {/* Option 2: WhatsApp Chat */}
          <a
            href="https://wa.me/989121234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white hover:bg-stone-50 text-stone-900 border border-[#d4af37]/40 shadow-xl transition-all group"
          >
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-[#8c6d17] group-hover:bg-[#c59b27] group-hover:text-stone-950 transition-colors">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold">ارتباط در واتس‌اپ</span>
          </a>

          {/* Option 3: Request VIP Consultation */}
          <button
            onClick={() => {
              setIsOpen(false);
              onOpenConsultation();
            }}
            className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white hover:bg-stone-50 text-stone-900 border border-[#d4af37]/40 shadow-xl transition-all group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-[#8c6d17] group-hover:bg-[#c59b27] group-hover:text-stone-950 transition-colors">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold">درخواست مشاوره VIP</span>
          </button>
        </div>
      )}
    </div>
  );
};
