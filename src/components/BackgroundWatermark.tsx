import React from 'react';

export default function BackgroundWatermark() {
  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
      {/* شعار المؤسسة فقط كرمز عملاق وباهت بدون أي عنوان أو نص سفلي */}
      <div className="w-[85vw] max-w-[900px] h-[85vh] max-h-[900px] opacity-[0.05] transition-opacity duration-700">
        <svg viewBox="0 0 200 200" className="w-full h-full text-[#00b4b4]" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* مثلث التنبيه والسلامة الإنظارية العلوي */}
          <path
            d="M100 15 L145 90 C148 96 144 105 137 105 L63 105 C56 105 52 96 55 90 L100 15 Z"
            fill="#00b4b4"
          />
          {/* علامة التعجب داخل المثلث */}
          <path d="M100 40 L100 70" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
          <circle cx="100" cy="88" r="5" fill="#ffffff" />

          {/* الهيكل الهندسي لمباني باثقيلي والخط الكوفي السفلي بدون أي نصوص */}
          <rect x="45" y="115" width="20" height="70" rx="4" fill="#0f3d4a" />
          <rect x="70" y="130" width="20" height="55" rx="4" fill="#00b4b4" />
          <rect x="95" y="105" width="20" height="80" rx="4" fill="#0f3d4a" />
          <rect x="120" y="122" width="20" height="63" rx="4" fill="#00b4b4" />
          <rect x="145" y="110" width="20" height="75" rx="4" fill="#0f3d4a" />

          {/* خط الأفق والرافعة الهندسية العليا */}
          <path d="M45 125 L100 95 L155 125" stroke="#00b4b4" strokeWidth="6" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  );
}
