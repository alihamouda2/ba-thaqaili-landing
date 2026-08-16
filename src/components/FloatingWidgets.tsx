'use client';

import React, { useState, useEffect } from 'react';
import {
  MessageSquare,
  PhoneCall,
  ArrowUp,
  X,
  CheckCircle2,
  Sparkles,
  Send,
  Building2,
  Truck,
  Sun,
  Wrench,
  ShieldCheck
} from 'lucide-react';

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceCategory: 'مقاولات عامة',
    notes: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsQuoteModalOpen(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceCategory: 'مقاولات عامة',
        notes: ''
      });
    }, 2800);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. FLOATING ACTION BUTTONS (أسفل الشاشة) */}
      {/* ========================================================================= */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        {/* زر الواتساب المباشر والتفاعلي */}
        <a
          href="https://wa.me/967770473358?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D9%85%D8%A4%D8%B3%D8%B3%D8%A9%20%D8%A8%D8%A7%D8%AB%D9%82%D9%8A%D9%84%D9%8A"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
          aria-label="محادثة واتساب مباشرة"
        >
          <MessageSquare className="w-7 h-7 fill-white text-[#25D366]" />

          {/* التلميح التفاعلي Tooltip */}
          <span className="absolute left-16 bg-slate-900 text-white text-xs font-bold din-bold px-3 py-1.5 rounded-xl shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            تواصل واتساب مباشر 0770473358
          </span>
        </a>

        {/* زر طلب سعر سريع Modal Launcher */}
        <button
          onClick={() => setIsQuoteModalOpen(true)}
          className="group relative flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#0f3d4a] hover:bg-[#00b4b4] text-white text-xs font-bold din-bold shadow-xl hover:scale-105 transition-all duration-300 border border-white/20"
        >
          <Sparkles className="w-4 h-4 text-[#00b4b4] group-hover:text-white transition-colors" />
          <span className="hidden sm:inline">طلب عرض سعر / استشارة</span>
          <span className="sm:hidden">طلب تسعيرة</span>
        </button>
      </div>

      {/* زر العودة للأعلى (اليمين) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-[#0f3d4a] border border-slate-300/80 shadow-xl flex items-center justify-center hover:bg-[#00b4b4] hover:text-white hover:border-[#00b4b4] transition-all duration-300 hover:scale-110"
          aria-label="العودة لأعلى الصفحة"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* ========================================================================= */}
      {/* 2. MODAL FORM: طلب عرض سعر واستشارة مباشرة */}
      {/* ========================================================================= */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-right space-y-6 relative overflow-hidden">
            {/* زر إغلاق النافذة */}
            <button
              onClick={() => setIsQuoteModalOpen(false)}
              className="absolute top-5 left-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* عنوان النماذج */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 bg-[#00b4b4]/10 text-[#00b4b4] px-3.5 py-1 rounded-full text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>نموذج استفسار وتسعيرة فورية</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black din-black text-[#0f3d4a]">
                طلب عرض سعر أو استشارة هندسية
              </h3>
              <p className="text-xs text-slate-500 font-medium din-medium">
                أدخل تفاصيل مشروعك وسيقوم فريق مؤسسة باثقيلي بالتواصل معك في أقرب وقت.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-teal-50/80 rounded-2xl border border-[#00b4b4]/30 text-center space-y-3 animate-fade-up">
                <CheckCircle2 className="w-12 h-12 text-[#00b4b4] mx-auto animate-bounce" />
                <h4 className="text-lg font-black din-black text-[#0f3d4a]">تم استلام طلبكم بنجاح!</h4>
                <p className="text-xs text-slate-600 font-medium din-medium">
                  شكراً لتواصلكم مع مؤسسة باثقيلي. سيتم التواصل معكم من قبل مهندسينا المختصين فوراً.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">الاسم الكامل / الجهة *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="مثال: شركة الأمل للمقاولات / م. أحمد"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#00b4b4] focus:ring-1 focus:ring-[#00b4b4] bg-slate-50/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">رقم الهاتف / الواتساب *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0770 XXX XXX"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#00b4b4] focus:ring-1 focus:ring-[#00b4b4] bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">البريد الإلكتروني (اختياري)</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#00b4b4] focus:ring-1 focus:ring-[#00b4b4] bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">القطاع / الخدمة المطلوبة</label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#00b4b4] bg-slate-50/50"
                  >
                    <option value="مقاولات عامة">مقاولات عامة وتشييد مبانٍ</option>
                    <option value="خدمات لوجستية">خدمات لوجستية ونقل أساطيل</option>
                    <option value="طاقة بديلة">طاقة بديلة ومحطات شمسية</option>
                    <option value="صيانة وتشغيل">صيانة وتأهيل مرافق ومصانع</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">تفاصيل وملاحظات المشروع</label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="اكتب نبذة مختصرة عن حجم المشروع، الموقع، المواعيد المستهدفة..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#00b4b4] focus:ring-1 focus:ring-[#00b4b4] bg-slate-50/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#0f3d4a] hover:bg-[#00b4b4] text-white font-black din-bold text-xs shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال طلب العرض الان</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
