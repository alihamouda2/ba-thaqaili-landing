'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, Star, Quote, ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  category: string;
  rating: number;
  comment: string;
  avatarUrl: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "م. عبد الرحمن باوزير",
    role: "مدير مشروعات الإمداد والتوريد",
    company: "شركة الإمداد اللوجستي",
    category: "خدمات لوجستية",
    rating: 5,
    comment: "تعاملنا مع مؤسسة باثقيلي في تجهيز أسطول النقل والمستودعات اللوجستية بالكامل، وكان الالتزام بالمواعيد والكفاءة الفنية وسرعة التوريد تفوق التوقعات.",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "2",
    name: "الشيخ سالم بن علي العمودي",
    role: "رئيس مجلس إدارة المجمع",
    company: "مجمع برج الأمل",
    category: "مقاولات عامة",
    rating: 5,
    comment: "دقة متناهية في الهياكل الخرسانية والتشطيبات المعمارية لبرج الأمل الإداري. الإشراف الهندسي المباشر أضفى لمسة احترافية وجودة عالية على المبنى.",
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "3",
    name: "د. عمر سعيد باحشوان",
    role: "المدير التنفيذي",
    company: "مصنع الغد للصناعات",
    category: "صيانة وتشغيل",
    rating: 5,
    comment: "عقد الصيانة السنوي مع مؤسسة باثقيلي أمّن استمرارية خطوط الإنتاج والأنظمة الميكانيكية والكهربائية بدون أي توقف، طاقم مهندسين متمكن للغاية.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "4",
    name: "م. خالد عبد الله باحميد",
    role: "مدير مشاريع الطاقة",
    company: "محطة الريان للطاقة",
    category: "طاقة بديلة",
    rating: 5,
    comment: "تركيب وتشغيل منظومة الألواح الكهرضوئية الشمسية تم باحترافية عالية، مع ضمان كفاءة توليد الطاقة النظيفة وتخفيض تكاليف التغذية الكهربائية.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // التمرير التلقائي الديناميكي كل 4 ثوانٍ أفقياً
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 text-slate-900 bg-transparent">
      
      <div className="relative z-10 bg-white/75 backdrop-blur-xl rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-2xl space-y-10 overflow-hidden">
        
        {/* خلفية الإضاءة التايل الهادئة */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#00b4b4]/10 rounded-full blur-3xl pointer-events-none" />

        {/* ========================================================================= */}
        {/* 1. الترويسة الرئيسية بقواعد FF DIN Arabic */}
        {/* ========================================================================= */}
        <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-up">
          
          <div className="inline-flex items-center gap-2 bg-[#00b4b4]/10 border border-[#00b4b4]/30 text-[#00b4b4] px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#00b4b4]" />
            <span>ثقة شركائنا وعملائنا | Client Testimonials & Trust</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black din-black text-[#0f3d4a] tracking-tight leading-tight">
            آراء عملائنا وشركاء النجاح
          </h2>

          <p className="text-base sm:text-lg font-medium din-medium text-[#0f3d4a]/80 leading-relaxed">
            شهادات حيّة واعتزاز من كبرى المؤسسات بالخدمات والحلول المعمارية واللوجستية المنفذة
          </p>

        </div>

        {/* ========================================================================= */}
        {/* 2. معرض الكروت التفاعلية الأفقية الديناميكية (Horizontal Dynamic Carousel) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          
          {/* الحاوية الأفقية المتحركة للكروت الديناميكية */}
          <div
            className="lg:col-span-8 overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-700 ease-out w-full"
              style={{ transform: `translateX(${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex-shrink-0 bg-slate-50/90 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-lg relative text-right space-y-6"
                >
                  <Quote className="absolute top-6 left-6 w-12 h-12 text-[#00b4b4]/15 pointer-events-none" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <span className="text-xs font-bold px-3.5 py-1 rounded-full bg-[#00b4b4]/10 text-[#00b4b4] border border-[#00b4b4]/30">
                      قطاع {item.category}
                    </span>
                  </div>

                  <p className="text-base sm:text-xl font-medium din-medium text-slate-800 leading-relaxed italic min-h-[90px]">
                    "{item.comment}"
                  </p>

                  <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#00b4b4] shadow-md flex-shrink-0">
                        <Image
                          src={item.avatarUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-base font-black din-black text-slate-900">
                          {item.name}
                        </h4>
                        <p className="text-xs font-medium din-medium text-slate-500">
                          {item.role} — <span className="text-[#00b4b4] font-bold">{item.company}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* أزرار وتنقّلات السحب والأشعة الأفقية (Pagination & Controls) */}
            <div className="flex items-center justify-between pt-6">
              
              {/* أزرار السحب السريع */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-white text-slate-800 border border-slate-200 flex items-center justify-center hover:bg-[#00b4b4] hover:text-white transition-all shadow-xs hover:scale-105 active:scale-95"
                  aria-label="السابق"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-white text-slate-800 border border-slate-200 flex items-center justify-center hover:bg-[#00b4b4] hover:text-white transition-all shadow-xs hover:scale-105 active:scale-95"
                  aria-label="التالي"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>

              {/* نقاط المؤشر التفاعلية (Pagination Dots) */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx
                        ? 'w-8 bg-[#00b4b4]'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`انتقال لرأي ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>

          {/* الجانب الأيسر: الإحصائيات وشارات الثقة والاعتماد */}
          <div className="lg:col-span-4 space-y-4">
            
            <div className="bg-[#0f3d4a] text-white p-6 rounded-3xl shadow-xl space-y-3 text-right">
              <div className="flex items-center gap-2 text-[#00b4b4]">
                <CheckCircle className="w-5 h-5" />
                <span className="text-xs font-bold text-teal-200">معدل تقييم العملاء</span>
              </div>
              <div className="text-4xl font-black din-black text-white">4.98 / 5.0</div>
              <p className="text-xs font-medium din-medium text-slate-300 leading-relaxed">
                استناداً إلى تقييم أكثر من 150 مشروعاً منفذاً بنجاح في قطاعات المقاولات واللوجستيات.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-right">
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                <div className="text-2xl font-black din-black text-[#0f3d4a]">99.4%</div>
                <div className="text-[11px] font-medium din-medium text-slate-500">نسبة الالتزام والرضا</div>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-1">
                <div className="text-2xl font-black din-black text-[#00b4b4]">150+</div>
                <div className="text-[11px] font-medium din-medium text-slate-500">مؤسسة وشركة شريكة</div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
