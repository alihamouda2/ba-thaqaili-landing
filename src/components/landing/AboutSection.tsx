'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Sparkles,
  ShieldCheck,
  Building2,
  Truck,
  Sun,
  Wrench,
  Target,
  Award,
  Users,
  MapPin,
  Phone,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<'vision' | 'values' | 'sectors'>('vision');

  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-16 text-slate-900 bg-transparent">

      {/* Container Box مع إضاءات وتدرجات ناعمة */}
      <div className="relative z-10 bg-white/70 backdrop-blur-xl rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-2xl space-y-12 overflow-hidden">

        {/* خلفية الوهج التايل الهادئ */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#00b4b4]/10 rounded-full blur-3xl pointer-events-none" />

        {/* ========================================================================= */}
        {/* 1. الترويسة الرئيسية بقواعد FF DIN Arabic */}
        {/* ========================================================================= */}
        <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-up">

          <div className="inline-flex items-center gap-2 bg-[#00b4b4]/10 border border-[#00b4b4]/30 text-[#00b4b4] px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xs">
            <Sparkles className="w-4 h-4 text-[#00b4b4]" />
            <span>من نحن | About Bathgili Establishment</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black din-black text-[#0f3d4a] tracking-tight leading-tight">
            مؤسسة باثقيلي للمقاولات العامة والخدمات اللوجستية
          </h2>

          <p className="text-base sm:text-lg font-medium din-medium text-[#0f3d4a]/80 leading-relaxed">
            الريادة في التشييد المعماري، إدارة أساطيل الإمداد اللوجستي، وإدخال تقنيات الطاقة البديلة في اليمن - حضرموت، الشحر.
          </p>

        </div>

        {/* ========================================================================= */}
        {/* 2. الشبكة التفاعلية الذكية (Smart Interactive Grid) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">

          {/* الجانب الأيمن: التبويبات الذكية (Vision & Mission Tabs) */}
          <div className="lg:col-span-7 space-y-6 text-right">

            {/* أزرار التبديل التفاعلية */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/80">
              <button
                onClick={() => setActiveTab('vision')}
                className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeTab === 'vision'
                    ? 'bg-[#0f3d4a] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
              >
                رؤيتنا ورسالتنا
              </button>

              <button
                onClick={() => setActiveTab('values')}
                className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeTab === 'values'
                    ? 'bg-[#0f3d4a] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
              >
                قيمنا المعتمدة
              </button>

              <button
                onClick={() => setActiveTab('sectors')}
                className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${activeTab === 'sectors'
                    ? 'bg-[#0f3d4a] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
              >
                قطاعات التخصص
              </button>
            </div>

            {/* محتوى التبويب الأول: رؤيتنا ورسالتنا */}
            {activeTab === 'vision' && (
              <div className="space-y-4 p-6 bg-slate-50/80 rounded-2xl border border-slate-200/60 animate-fade-up">
                <div className="flex items-center gap-3 text-[#00b4b4]">
                  <Target className="w-6 h-6" />
                  <h3 className="text-xl font-black din-black text-slate-900">رؤيتنا الاستراتيجية</h3>
                </div>
                <p className="text-sm font-medium din-medium text-slate-700 leading-relaxed">
                  أن نكون الخيار الأول المعتمد في اليمن لخدمات المقاولات العامة والإنشاءات الهندسية والنقل اللوجستي، عبر تطبيق أعلى معايير السلامة والجودة والحلول المستدامة.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00b4b4]" />
                    <span>التزام مطلق بمواعيد التسليم</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00b4b4]" />
                    <span>تجهيز أساطيل الإمداد الحديثة</span>
                  </div>
                </div>
              </div>
            )}

            {/* محتوى التبويب الثاني: قيمنا المعتمدة */}
            {activeTab === 'values' && (
              <div className="space-y-4 p-6 bg-slate-50/80 rounded-2xl border border-slate-200/60 animate-fade-up">
                <div className="flex items-center gap-3 text-[#00b4b4]">
                  <Award className="w-6 h-6" />
                  <h3 className="text-xl font-black din-black text-slate-900">القيم والجودة المعتمدة</h3>
                </div>
                <p className="text-sm font-medium din-medium text-slate-700 leading-relaxed">
                  نضع الإتقان والنزاهة في مقدمة أعمالنا. نضمن الحفاظ على سلامة البيئة من خلال دمج منظومات الطاقة الشمسية والبديلة في مشاريعنا.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200">
                    <ShieldCheck className="w-4 h-4 text-[#00b4b4]" />
                    <span>ضمان الجودة والسلامة</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200">
                    <Sun className="w-4 h-4 text-[#00b4b4]" />
                    <span>حلول طاقة نظيفة ومستدامة</span>
                  </div>
                </div>
              </div>
            )}

            {/* محتوى التبويب الثالث: قطاعات التخصص */}
            {activeTab === 'sectors' && (
              <div className="space-y-4 p-6 bg-slate-50/80 rounded-2xl border border-slate-200/60 animate-fade-up">
                <div className="flex items-center gap-3 text-[#00b4b4]">
                  <Building2 className="w-6 h-6" />
                  <h3 className="text-xl font-black din-black text-slate-900">القطاعات الأربعة الرئيسية</h3>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-bold">
                  <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 text-slate-900">
                    <Building2 className="w-4 h-4 text-[#00b4b4]" />
                    <span>1. بناء وتشييد</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 text-slate-900">
                    <Wrench className="w-4 h-4 text-[#00b4b4]" />
                    <span>2. صيانة وتطوير</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 text-slate-900">
                    <Truck className="w-4 h-4 text-[#00b4b4]" />
                    <span>3. خدمات لوجستية</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-slate-200 text-slate-900">
                    <Sun className="w-4 h-4 text-[#00b4b4]" />
                    <span>4. طاقة بديلة</span>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* الجانب الأيسر: الإحصائيات التفاعلية (Interactive Stat Cards Grid) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">

            <div className="bg-[#0f3d4a] text-white p-6 rounded-2xl shadow-lg space-y-2 text-right transition-transform hover:scale-103">
              <Building2 className="w-8 h-8 text-[#00b4b4]" />
              <div className="text-3xl font-black din-black text-white">250+</div>
              <div className="text-xs font-medium din-medium text-slate-300">مشروع تشييد وبناء منفّذ</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-2 text-right transition-transform hover:scale-103">
              <Truck className="w-8 h-8 text-[#00b4b4]" />
              <div className="text-3xl font-black din-black text-slate-900">100%</div>
              <div className="text-xs font-medium din-medium text-slate-600">تجهيز وإمداد لوجستي</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-2 text-right transition-transform hover:scale-103">
              <Award className="w-8 h-8 text-[#00b4b4]" />
              <div className="text-3xl font-black din-black text-slate-900">15+ سنة</div>
              <div className="text-xs font-medium din-medium text-slate-600">خبرة واعتمد مهني</div>
            </div>

            <div className="bg-[#00b4b4] text-white p-6 rounded-2xl shadow-lg space-y-2 text-right transition-transform hover:scale-103">
              <ShieldCheck className="w-8 h-8 text-white" />
              <div className="text-3xl font-black din-black text-white">100%</div>
              <div className="text-xs font-medium din-medium text-teal-50">ضمان سلامة وإتقان</div>
            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. شريط التواصل السريع والموقع الرسمي */}
        {/* ========================================================================= */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-slate-700">
          <div className="flex items-center gap-2 text-[#0f3d4a]">
            <MapPin className="w-4 h-4 text-[#00b4b4]" />
            <span>المقر الرئيسي: اليمن - حضرموت، الشحر (Ash Shihr, Hadhramaut, Yemen)</span>
          </div>

          <a
            href="https://wa.me/967770473358"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#00b4b4] hover:text-[#0f3d4a] font-extrabold transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>استفسر مباشرة: 0770 473 358</span>
            <ArrowLeft className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

    </section>
  );
}
