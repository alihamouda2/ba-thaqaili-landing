'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../Logo';
import { HardHat, Wrench, Truck, Sun, Phone, MapPin, Building2, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[640px] bg-transparent text-slate-900 flex flex-col justify-between p-4 sm:p-8 overflow-hidden font-sans my-2">


      {/* خلفية أفق المباني المعمارية المائية باللون التايل الناعم (Background Architectural Watermark) */}
      <div className="absolute inset-x-0 bottom-0 h-64 opacity-15 pointer-events-none flex items-end justify-center overflow-hidden">
        <svg viewBox="0 0 1200 300" className="w-full h-full text-[#00b4b4]" fill="currentColor">
          <path d="M50 300 L50 180 L110 180 L110 300 Z M130 300 L130 120 L210 120 L210 300 Z M230 300 L230 200 L290 200 L290 300 Z M330 300 L330 80 L420 80 L420 300 Z M450 300 L450 150 L520 150 L520 300 Z M560 300 L560 100 L650 100 L650 300 Z M680 300 L680 190 L750 190 L750 300 Z M780 300 L780 130 L870 130 L870 300 Z M900 300 L900 220 L960 220 L960 300 Z M990 300 L990 90 L1100 90 L1100 300 Z" />
        </svg>
      </div>

      {/* دوائر الإضاءة والوهج التركوازي الناعم (Ambient Glow Balls) */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#00b4b4]/10 rounded-full blur-3xl pointer-events-none animate-glow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none animate-glow" />

      {/* ========================================================================= */}
      {/* 1. TOP HEADER / NAVIGATION BAR (كما بالصورة بالضبط) */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-teal-900/10">

        {/* الشعار المرتكز من اليمين (RTL) */}
        <Link href="/" className="transition-transform hover:scale-103">
          <Logo size="md" />
        </Link>

        {/* عناصر التنقل الخمسة مع الترجمة الإنجليزية بالأسفل كما بالصورة بالضبط */}
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-800 font-extrabold text-xs sm:text-sm">

          <Link href="/" className="group flex flex-col items-center hover:text-[#00b4b4] transition-colors">
            <span className="text-slate-900 font-black group-hover:text-[#00b4b4]">الصفحة الرئيسية</span>
            <span className="text-[10px] font-semibold text-slate-400 tracking-wider">Home</span>
          </Link>

          <Link href="#services" className="group flex flex-col items-center hover:text-[#00b4b4] transition-colors">
            <span>خدماتنا</span>
            <span className="text-[10px] font-semibold text-slate-400 tracking-wider">Services</span>
          </Link>

          <Link href="#about" className="group flex flex-col items-center hover:text-[#00b4b4] transition-colors">
            <span>من نحن</span>
            <span className="text-[10px] font-semibold text-slate-400 tracking-wider">About Us</span>
          </Link>

          <Link href="#projects" className="group flex flex-col items-center hover:text-[#00b4b4] transition-colors">
            <span>المشاريع</span>
            <span className="text-[10px] font-semibold text-slate-400 tracking-wider">Projects</span>
          </Link>

          <Link href="#contact" className="group flex flex-col items-center hover:text-[#00b4b4] transition-colors">
            <span>اتصل بنا</span>
            <span className="text-[10px] font-semibold text-slate-400 tracking-wider">Contact Us</span>
          </Link>

        </nav>
      </div>

      {/* ========================================================================= */}
      {/* 2. HERO CENTRAL HEADLINES (العناوين الرئيسية كما بالصورة بالضبط) */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-8 py-10 animate-fade-up">

        {/* Headline 1: نُقدم الجودة والإتقان في كل مشروع */}
        <div className="space-y-1">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black din-black text-[#0f3d4a] tracking-tight leading-tight">
            نُقدم الجودة والإتقان في كل مشروع
          </h1>
          <p className="text-lg sm:text-2xl font-medium din-medium text-[#0f3d4a]/90 tracking-wide">
            Building your future, with integrated services.
          </p>
        </div>

        {/* Headline 2: مؤسسة باثقيلي للمقاولات والخدمات اللوجستية */}
        <div className="space-y-1 pt-2">
          <h2 className="text-xl sm:text-3xl font-black din-black text-slate-900 tracking-tight">
            مؤسسة باثقيلي للمقاولات والخدمات اللوجستية
          </h2>
          <p className="text-sm sm:text-lg font-medium din-medium text-slate-600 tracking-wide">
            Ba Thaqaili General Contracting and Logistics
          </p>
        </div>


        {/* ========================================================================= */}
        {/* 3. THE 4 SERVICES ICONS GRID (الأيقونات الأربعة مع الموشن ديزاين) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 max-w-4xl mx-auto">

          {/* Service 1: مقاولات عامة / General Contracting */}
          <div className="group flex flex-col items-center space-y-3 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#00b4b4]/10 border border-[#00b4b4]/20 text-[#00b4b4] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#00b4b4] group-hover:text-white transition-all duration-500 animate-float">
              <Building2 className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.5] transition-transform group-hover:rotate-6" />
            </div>
            <div className="text-center space-y-0.5">
              <span className="block text-sm sm:text-base font-black text-slate-900 group-hover:text-[#00b4b4] transition-colors">
                مقاولات عامة
              </span>
              <span className="block text-[11px] font-bold text-slate-500">
                General Contracting
              </span>
            </div>
          </div>

          {/* Service 2: صيانة وتشغيل / Maintenance */}
          <div className="group flex flex-col items-center space-y-3 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#00b4b4]/10 border border-[#00b4b4]/20 text-[#00b4b4] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#00b4b4] group-hover:text-white transition-all duration-500 animate-float" style={{ animationDelay: '0.2s' }}>
              <Wrench className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.5] transition-transform group-hover:rotate-12" />
            </div>
            <div className="text-center space-y-0.5">
              <span className="block text-sm sm:text-base font-black text-slate-900 group-hover:text-[#00b4b4] transition-colors">
                صيانة وتشغيل
              </span>
              <span className="block text-[11px] font-bold text-slate-500">
                Maintenance
              </span>
            </div>
          </div>

          {/* Service 3: خدمات لوجستية / Logistics Services */}
          <div className="group flex flex-col items-center space-y-3 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#00b4b4]/10 border border-[#00b4b4]/20 text-[#00b4b4] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#00b4b4] group-hover:text-white transition-all duration-500 animate-float" style={{ animationDelay: '0.4s' }}>
              <Truck className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.5] transition-transform group-hover:translate-x-1" />
            </div>
            <div className="text-center space-y-0.5">
              <span className="block text-sm sm:text-base font-black text-slate-900 group-hover:text-[#00b4b4] transition-colors">
                خدمات لوجستية
              </span>
              <span className="block text-[11px] font-bold text-slate-500">
                Logistics Services
              </span>
            </div>
          </div>

          {/* Service 4: طاقة بديلة / Renewable Energy */}
          <div className="group flex flex-col items-center space-y-3 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-[#00b4b4]/10 border border-[#00b4b4]/20 text-[#00b4b4] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#00b4b4] group-hover:text-white transition-all duration-500 animate-float" style={{ animationDelay: '0.6s' }}>
              <Sun className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.5] transition-transform group-hover:spin-slow" />
            </div>
            <div className="text-center space-y-0.5">
              <span className="block text-sm sm:text-base font-black text-slate-900 group-hover:text-[#00b4b4] transition-colors">
                طاقة بديلة
              </span>
              <span className="block text-[11px] font-bold text-slate-500">
                Renewable Energy
              </span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. ACTION BUTTONS (الأزرار البيضاوية بالشيمر كما بالصورة) */}
        {/* ========================================================================= */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">

          {/* Button 1: تصفح قطاعات الأعمال (Cyan/Teal) */}
          <Link
            href="#projects"
            className="btn-bathgili-pill px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-extrabold shadow-lg"
          >
            تصفح قطاعات الأعمال
          </Link>

          {/* Button 2: تواصل مباشر / Contact (Emerald Green) */}
          <a
            href="https://wa.me/967770473358"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#38a169] hover:bg-[#2f855a] text-white text-xs sm:text-sm font-extrabold shadow-lg transition-all duration-300 hover:scale-103 hover:shadow-emerald-600/30"
          >
            تواصل مباشر Contact
          </a>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 5. FOOTER INFO LINE IN HERO (رقم التواصل والموقع كما بالصورة بالضبط) */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto w-full pt-4 border-t border-teal-900/10 flex items-center justify-center text-xs sm:text-sm font-bold text-slate-700">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-[#00b4b4]" />
          <span>358 473 0770 Hadhramaut, Yemen | حضرموت، اليمن</span>
        </div>
      </div>

    </section>
  );
}
