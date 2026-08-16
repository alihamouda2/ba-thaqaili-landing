'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MOCK_PROJECTS, Project } from '../../lib/mock-data';
import ProjectCard from './ProjectCard';
import {
  Building2,
  Truck,
  Sun,
  Wrench,
  Layers,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  LayoutGrid,
  SlidersHorizontal,
  ArrowLeft
} from 'lucide-react';

export default function ProjectsList() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [isPaused, setIsPaused] = useState(false);

  const filteredProjects = selectedCategory === 'ALL'
    ? MOCK_PROJECTS
    : MOCK_PROJECTS.filter(p => p.category === selectedCategory);

  // التمرير التلقائي للسلايدر الشريطي الرئيسي للمشاريع كل 5 ثوانٍ
  useEffect(() => {
    if (isPaused || viewMode !== 'carousel' || filteredProjects.length <= 1) return;
    const interval = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, viewMode, filteredProjects.length]);

  const handleNextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  // إعادة ضبط الفهرس عند تغيير التصنيف
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setActiveSlideIndex(0);
  };

  return (
    <div className="w-full bg-transparent text-slate-900 pt-4 pb-16">
      
      {/* ========================================================================= */}
      {/* SECTION 2: معرض المشاريع والأعمال المعتمدة (مع التمرير التفاعلي) */}
      {/* ========================================================================= */}
      <section id="projects" className="relative w-full max-w-7xl mx-auto px-4 sm:px-8 py-10 overflow-hidden text-center bg-transparent">
        
        {/* خلفية الرسوم الجرافيكية المعمارية والأبراج المائية */}
        <div className="absolute inset-y-0 right-0 w-80 opacity-10 pointer-events-none hidden lg:block overflow-hidden">
          <svg viewBox="0 0 300 800" className="w-full h-full text-[#0f3d4a]" fill="currentColor">
            <path d="M150 0 L170 300 L250 800 L210 800 L150 400 L90 800 L50 800 L130 300 Z M130 150 L170 150 M110 350 L190 350 M90 550 L210 550" stroke="currentColor" strokeWidth="4" />
          </svg>
        </div>

        <div className="absolute inset-y-0 left-0 w-80 opacity-10 pointer-events-none hidden lg:block overflow-hidden">
          <svg viewBox="0 0 300 800" className="w-full h-full text-[#0f3d4a]" fill="currentColor">
            <rect x="50" y="200" width="80" height="600" />
            <rect x="170" y="350" width="80" height="450" />
          </svg>
        </div>

        <div className="relative z-10 space-y-8">
          
          {/* العنوان الاحترافي المطور بقواعد FF DIN Arabic */}
          <div className="space-y-4 animate-fade-up max-w-3xl mx-auto">
            
            {/* شارة العنوان البارزة */}
            <div className="inline-flex items-center gap-2 bg-[#00b4b4]/10 border border-[#00b4b4]/30 text-[#00b4b4] px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#00b4b4]" />
              <span>معرض الأعمال والمشاريع المعتمدة | Interactive Portfolio</span>
            </div>

            {/* العنوان الرئيسي بخط DIN Black */}
            <h2 className="text-3xl sm:text-5xl font-black din-black text-[#0f3d4a] tracking-tight leading-tight">
              سجل إنجازاتنا ومشاريعنا الرائدة
            </h2>

            {/* السطر الفرعي بخط DIN Medium */}
            <p className="text-base sm:text-lg font-medium din-medium text-[#0f3d4a]/80 leading-relaxed">
              تصفح كافة أعمال التشييد، النقل اللوجستي، ومحطات الطاقة بتمرير تفاعلي ديناميكي
            </p>

            {/* أزرار التصفية التفاعلية بين قطاعات المشاريع */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4 px-1">
              <button
                onClick={() => handleCategorySelect('ALL')}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-xs ${
                  selectedCategory === 'ALL'
                    ? 'bg-[#0f3d4a] text-white shadow-md scale-105'
                    : 'bg-white/80 text-slate-700 hover:bg-white hover:text-[#00b4b4] border border-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>كافة المشاريع ({MOCK_PROJECTS.length})</span>
              </button>

              <button
                onClick={() => handleCategorySelect('Contracting')}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-xs ${
                  selectedCategory === 'Contracting'
                    ? 'bg-[#00b4b4] text-white shadow-md scale-105'
                    : 'bg-white/80 text-slate-700 hover:bg-white hover:text-[#00b4b4] border border-slate-200'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>مقاولات عامة</span>
              </button>

              <button
                onClick={() => handleCategorySelect('Logistics')}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-xs ${
                  selectedCategory === 'Logistics'
                    ? 'bg-[#00b4b4] text-white shadow-md scale-105'
                    : 'bg-white/80 text-slate-700 hover:bg-white hover:text-[#00b4b4] border border-slate-200'
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                <span>خدمات لوجستية</span>
              </button>

              <button
                onClick={() => handleCategorySelect('Infrastructure')}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-xs ${
                  selectedCategory === 'Infrastructure'
                    ? 'bg-[#00b4b4] text-white shadow-md scale-105'
                    : 'bg-white/80 text-slate-700 hover:bg-white hover:text-[#00b4b4] border border-slate-200'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>طاقة بديلة</span>
              </button>

              <button
                onClick={() => handleCategorySelect('Maintenance')}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-xs ${
                  selectedCategory === 'Maintenance'
                    ? 'bg-[#00b4b4] text-white shadow-md scale-105'
                    : 'bg-white/80 text-slate-700 hover:bg-white hover:text-[#00b4b4] border border-slate-200'
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>صيانة وتشغيل</span>
              </button>
            </div>

            {/* أزرار اختيار نمط العرض (سلايدر متحرك أو شبكة مربعات) وأسهم التحكم */}
            <div className="flex items-center justify-between pt-4 max-w-6xl mx-auto">
              {/* تبديل نمط العرض */}
              <div className="flex items-center gap-2 bg-slate-200/70 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('carousel')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'carousel'
                      ? 'bg-white text-[#0f3d4a] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>معرض سلايدر متحرك</span>
                </button>

                <button
                  onClick={() => setViewMode('grid')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    viewMode === 'grid'
                      ? 'bg-white text-[#0f3d4a] shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>شبكة مربعات</span>
                </button>
              </div>

              {/* أسهم التصفح السريع السلايدر */}
              {viewMode === 'carousel' && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevSlide}
                    className="w-10 h-10 rounded-full bg-white text-slate-800 border border-slate-200 shadow-xs flex items-center justify-center hover:bg-[#00b4b4] hover:text-white transition-all hover:scale-105"
                    aria-label="المشروع السابق"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="w-10 h-10 rounded-full bg-white text-slate-800 border border-slate-200 shadow-xs flex items-center justify-center hover:bg-[#00b4b4] hover:text-white transition-all hover:scale-105"
                    aria-label="المشروع التالي"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* ========================================================================= */}
          {/* NATIVE INTERACTIVE CAROUSEL SLIDER MODE */}
          {/* ========================================================================= */}
          {viewMode === 'carousel' ? (
            <div
              className="relative max-w-6xl mx-auto overflow-hidden py-2"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* حاوية المشاريع السلايدر المتحركة أفقياً */}
              <div
                className="flex transition-transform duration-700 ease-out text-right"
                style={{ transform: `translateX(${activeSlideIndex * 100}%)` }}
              >
                {filteredProjects.map((project) => (
                  <div key={project.id} className="w-full flex-shrink-0 px-2 sm:px-4">
                    <div className="max-w-3xl mx-auto">
                      <ProjectCard project={project} />
                    </div>
                  </div>
                ))}
              </div>

              {/* مؤشر الترقيم التفاعلي لعدد مشاريع السلايدر */}
              <div className="flex items-center justify-center gap-2 pt-6">
                {filteredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeSlideIndex === idx
                        ? 'w-8 bg-[#00b4b4]'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`المشروع ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* GRID MODE VIEW */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-right max-w-6xl mx-auto animate-fade-up">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}

          {/* أزرار الإجراءات السريعة أسفل قسم المشاريع */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <a
              href="https://wa.me/967770473358?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%B9%D8%B1%D8%B6%20%D8%B3%D8%B9%D8%B1%20%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%8A"
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 sm:px-11 py-4 rounded-full bg-[#0f3d4a] hover:bg-[#00b4b4] text-white text-xs sm:text-sm font-black shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <span>طلب عرض سعر واستشارة لمشروعك</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}