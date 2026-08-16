'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Truck,
  Sun,
  Wrench,
  Building2,
  Zap,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Eye
} from 'lucide-react';
import { Project } from '../../lib/mock-data';

export default function ProjectCard({ project }: { project: Project }) {
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.heroImageUrl];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // التمرير التلقائي لصور المشروع عند التحويم أو العرض
  useEffect(() => {
    if (!isHovered || images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getCategoryBadgeIcon = (category: Project['category']) => {
    switch (category) {
      case 'Contracting':
        return <Building2 className="w-4 h-4 text-[#00b4b4]" />;
      case 'Logistics':
        return <Truck className="w-4 h-4 text-[#00b4b4]" />;
      case 'Infrastructure':
        return <Sun className="w-4 h-4 text-[#00b4b4]" />;
      case 'Maintenance':
        return <Wrench className="w-4 h-4 text-[#00b4b4]" />;
      default:
        return <Zap className="w-4 h-4 text-[#00b4b4]" />;
    }
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block w-full text-right font-sans transition-transform duration-500 hover:-translate-y-2"
    >
      {/* 1. صورة العمل بالكامل بدون أي حاويات أو إطارات بيضاء مغلقة (Full Photo Display) */}
      <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden bg-slate-950 shadow-2xl border border-slate-200/50">
        
        {/* العرض الكامل لصور المشروع مع التبديل السلس */}
        {images.map((imgUrl, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={imgUrl}
              alt={`${project.titleAr} - صورة ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              priority={idx === 0}
            />
          </div>
        ))}

        {/* طبقة التدرج الداكن لضمان وضوح النص فوق الصورة مباشرة */}
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/30 group-hover:from-slate-950/95 transition-all duration-300" />

        {/* ========================================================================= */}
        {/* الشارات والمعلومات العائمة فوق الصورة بالكامل (Glassmorphism Overlay) */}
        {/* ========================================================================= */}
        
        {/* الشارات العليا: التصنيف والحالة */}
        <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="bg-slate-950/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full text-xs font-bold din-bold border border-white/20 flex items-center gap-1.5 shadow-lg">
            {getCategoryBadgeIcon(project.category)}
            <span>{project.categoryText}</span>
          </div>

          <div className="bg-slate-950/80 backdrop-blur-md text-[#00b4b4] px-3.5 py-1.5 rounded-full text-xs font-bold din-bold border border-[#00b4b4]/30 flex items-center gap-1.5 shadow-lg">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00b4b4]" />
            <span>{project.statusText}</span>
          </div>
        </div>

        {/* أسهم التبديل اليدوي التفاعلية عند تحويم الماوس */}
        {images.length > 1 && (
          <div className="absolute inset-x-3 top-1/2 -translate-y-1/2 z-20 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <button
              onClick={prevImage}
              className="pointer-events-auto w-9 h-9 rounded-full bg-slate-950/80 hover:bg-[#00b4b4] text-white flex items-center justify-center transition-all shadow-xl hover:scale-110"
              aria-label="الصورة السابقة"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="pointer-events-auto w-9 h-9 rounded-full bg-slate-950/80 hover:bg-[#00b4b4] text-white flex items-center justify-center transition-all shadow-xl hover:scale-110"
              aria-label="الصورة التالية"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* تفاصيل المشروع المباشرة والمعروضة فوق الصورة بالكامل */}
        <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-20 space-y-2 text-right">
          
          {/* الموقع الجغرافي */}
          <div className="flex items-center gap-1.5 text-xs font-bold din-bold text-[#00b4b4]">
            <MapPin className="w-4 h-4 text-[#00b4b4]" />
            <span>{project.city} - {project.district}</span>
          </div>

          {/* العنوان الرئيسي للمشروع */}
          <h3 className="text-lg sm:text-xl font-black din-black text-white group-hover:text-[#00b4b4] transition-colors leading-tight">
            {project.titleAr}
          </h3>

          {/* الوصف المباشر */}
          <p className="text-xs text-slate-300 font-medium din-medium line-clamp-2 leading-relaxed opacity-90">
            {project.subtitleAr || project.descriptionAr}
          </p>

          {/* زر الاستعراض المباشر والاستكشاف */}
          <div className="pt-2 flex items-center justify-between text-xs font-black din-bold text-teal-300 group-hover:text-white transition-colors">
            <span className="flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-[#00b4b4]" />
              <span>استعراض كافة الصور والمواصفات</span>
            </span>
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1.5 text-[#00b4b4]" />
          </div>

          {/* نقاط المؤشر التفاعلية للصور */}
          {images.length > 1 && (
            <div className="pt-2 flex items-center justify-center gap-1.5">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? 'w-6 bg-[#00b4b4]' : 'w-1.5 bg-white/40'
                  }`}
                />
              ))}
            </div>
          )}

        </div>

      </div>

    </Link>
  );
}