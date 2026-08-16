'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MOCK_PROJECTS, Project } from '../../lib/mock-data';
import ProjectCard from './ProjectCard';
import Logo from '../Logo';
import {
  Building2,
  Truck,
  Warehouse,
  ChevronLeft,
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Globe,
  Share2,
  MessageCircle,
  Send,
  Zap,
  Sparkles,
  Sun,
  Wrench,
  Layers
} from 'lucide-react';

export default function ProjectsList() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const filteredProjects = selectedCategory === 'ALL'
    ? MOCK_PROJECTS
    : MOCK_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <div className="w-full bg-transparent text-slate-900 pt-4 pb-16">
      
      {/* ========================================================================= */}
      {/* SECTION 2: أعمالنا ومشاريعنا المعتمدة (عنوان احترافي تفاعلي) */}
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

        <div className="relative z-10 space-y-10">
          
          {/* العنوان الاحترافي المطور بقواعد FF DIN Arabic */}
          <div className="space-y-4 animate-fade-up max-w-3xl mx-auto">
            
            {/* شارة العنوان البارزة */}
            <div className="inline-flex items-center gap-2 bg-[#00b4b4]/10 border border-[#00b4b4]/30 text-[#00b4b4] px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-2xs">
              <Sparkles className="w-4 h-4 text-[#00b4b4]" />
              <span>معرض الإنجازات والمشاريع المعتمدة | Projects Portfolio</span>
            </div>

            {/* العنوان الرئيسي بخط DIN Black */}
            <h2 className="text-3xl sm:text-5xl font-black din-black text-[#0f3d4a] tracking-tight leading-tight">
              سجل إنجازاتنا ومشاريعنا الرائدة
            </h2>

            {/* السطر الفرعي بخط DIN Medium */}
            <p className="text-base sm:text-lg font-medium din-medium text-[#0f3d4a]/80 leading-relaxed">
              تصفح أبرز الأعمال والحلول الهندسية واللوجستية المنفذة بأعلى معايير الجودة والإتقان
            </p>

            {/* أزرار التصفية التفاعلية بين قطاعات المشاريع */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4">
              <button
                onClick={() => setSelectedCategory('ALL')}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-xs ${
                  selectedCategory === 'ALL'
                    ? 'bg-[#0f3d4a] text-white shadow-md scale-103'
                    : 'bg-white/80 text-slate-700 hover:bg-white hover:text-[#00b4b4] border border-slate-200'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>كافة المشاريع ({MOCK_PROJECTS.length})</span>
              </button>

              <button
                onClick={() => setSelectedCategory('Contracting')}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-xs ${
                  selectedCategory === 'Contracting'
                    ? 'bg-[#00b4b4] text-white shadow-md scale-103'
                    : 'bg-white/80 text-slate-700 hover:bg-white hover:text-[#00b4b4] border border-slate-200'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>مقاولات عامة</span>
              </button>

              <button
                onClick={() => setSelectedCategory('Logistics')}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-xs ${
                  selectedCategory === 'Logistics'
                    ? 'bg-[#00b4b4] text-white shadow-md scale-103'
                    : 'bg-white/80 text-slate-700 hover:bg-white hover:text-[#00b4b4] border border-slate-200'
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                <span>خدمات لوجستية</span>
              </button>

              <button
                onClick={() => setSelectedCategory('Infrastructure')}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-xs ${
                  selectedCategory === 'Infrastructure'
                    ? 'bg-[#00b4b4] text-white shadow-md scale-103'
                    : 'bg-white/80 text-slate-700 hover:bg-white hover:text-[#00b4b4] border border-slate-200'
                }`}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>طاقة بديلة</span>
              </button>

              <button
                onClick={() => setSelectedCategory('Maintenance')}
                className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all shadow-xs ${
                  selectedCategory === 'Maintenance'
                    ? 'bg-[#00b4b4] text-white shadow-md scale-103'
                    : 'bg-white/80 text-slate-700 hover:bg-white hover:text-[#00b4b4] border border-slate-200'
                }`}
              >
                <Wrench className="w-3.5 h-3.5" />
                <span>صيانة وتشغيل</span>
              </button>
            </div>

          </div>

          {/* شبكة البطاقات المربّعة المفلترة تفاعلياً */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-right max-w-6xl mx-auto">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* الزران السفليان باللون الكحلي الداكن (#0f3d4a / #063b46) */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Link
              href="#projects"
              className="px-9 sm:px-11 py-4 rounded-full bg-[#0f3d4a] hover:bg-[#063b46] text-white text-xs sm:text-sm font-black shadow-xl transition-all duration-300 hover:scale-103 hover:shadow-cyan-900/30"
            >
              تصفح كافة المشاريع
            </Link>

            <a
              href="https://wa.me/967770473358?text=%D0%A3%D0%B1%D0%B3%D1%8B%20%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%D8%A7%D9%8B%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D9%85%D8%A4%D8%B3%D8%B3%D8%A9%20%D8%A8%D8%A7%D8%AB%D9%82%D9%8I"
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 sm:px-11 py-4 rounded-full bg-[#0f3d4a] hover:bg-[#063b46] text-white text-xs sm:text-sm font-black shadow-xl transition-all duration-300 hover:scale-103 hover:shadow-cyan-900/30"
            >
              اطلب عرض سعر لمشروعك
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}