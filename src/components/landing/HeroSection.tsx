'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../Logo';
import { HardHat, Wrench, Truck, Sun, Phone, MapPin, Building2, Menu, X, MessageSquare } from 'lucide-react';

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] bg-transparent text-slate-900 flex flex-col justify-between p-3 sm:p-8 overflow-hidden font-sans my-1 sm:my-2">
      
      {/* خلفية أفق المباني المعمارية المائية باللون التايل الناعم */}
      <div className="absolute inset-x-0 bottom-0 h-48 sm:h-64 opacity-15 pointer-events-none flex items-end justify-center overflow-hidden">
        <svg viewBox="0 0 1200 300" className="w-full h-full text-[#00b4b4]" fill="currentColor">
          <path d="M50 300 L50 180 L110 180 L110 300 Z M130 300 L130 120 L210 120 L210 300 Z M230 300 L230 200 L290 200 L290 300 Z M330 300 L330 80 L420 80 L420 300 Z M450 300 L450 150 L520 150 L520 300 Z M560 300 L560 100 L650 100 L650 300 Z M680 300 L680 190 L750 190 L750 300 Z M780 300 L780 130 L870 130 L870 300 Z M900 300 L900 220 L960 220 L960 300 Z M990 300 L990 90 L1100 90 L1100 300 Z" />
        </svg>
      </div>

      {/* دوائر الإضاءة والوهج التركوازي الناعم */}
      <div className="absolute top-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-[#00b4b4]/10 rounded-full blur-3xl pointer-events-none animate-glow" />
      <div className="absolute bottom-10 left-10 w-64 sm:w-96 h-64 sm:h-96 bg-teal-400/10 rounded-full blur-3xl pointer-events-none animate-glow" />

      {/* ========================================================================= */}
      {/* 1. TOP HEADER / NAVIGATION BAR (تصميم فخم، ناصع، ومستجيب 100%) */}
      {/* ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto w-full bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl rounded-3xl sm:rounded-full px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 transition-all">
        
        {/* الشعار المرتكز من اليمين (RTL) */}
        <Link href="/" className="transition-transform hover:scale-103 flex-shrink-0">
          <Logo size="md" />
        </Link>

        {/* عناصر التنقل للشاشات المتوسطة والكبيرة بقواعد FF DIN Arabic */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4 text-slate-800 font-extrabold text-xs sm:text-sm">
          
          <Link href="/" className="group flex flex-col items-center px-3.5 py-1.5 rounded-2xl hover:bg-[#00b4b4]/10 transition-all duration-200 hover:-translate-y-0.5">
            <span className="text-slate-900 font-black din-black group-hover:text-[#00b4b4] transition-colors">الصفحة الرئيسية</span>
            <span className="text-[10px] font-medium din-medium text-slate-400 tracking-wider">Home</span>
          </Link>

          <Link href="#services" className="group flex flex-col items-center px-3.5 py-1.5 rounded-2xl hover:bg-[#00b4b4]/10 transition-all duration-200 hover:-translate-y-0.5">
            <span className="text-slate-800 font-black din-bold group-hover:text-[#00b4b4] transition-colors">خدماتنا</span>
            <span className="text-[10px] font-medium din-medium text-slate-400 tracking-wider">Services</span>
          </Link>

          <Link href="#about" className="group flex flex-col items-center px-3.5 py-1.5 rounded-2xl hover:bg-[#00b4b4]/10 transition-all duration-200 hover:-translate-y-0.5">
            <span className="text-slate-800 font-black din-bold group-hover:text-[#00b4b4] transition-colors">من نحن</span>
            <span className="text-[10px] font-medium din-medium text-slate-400 tracking-wider">About Us</span>
          </Link>

          <Link href="#projects" className="group flex flex-col items-center px-3.5 py-1.5 rounded-2xl hover:bg-[#00b4b4]/10 transition-all duration-200 hover:-translate-y-0.5">
            <span className="text-slate-800 font-black din-bold group-hover:text-[#00b4b4] transition-colors">المشاريع</span>
            <span className="text-[10px] font-medium din-medium text-slate-400 tracking-wider">Projects</span>
          </Link>

          <Link href="#testimonials" className="group flex flex-col items-center px-3.5 py-1.5 rounded-2xl hover:bg-[#00b4b4]/10 transition-all duration-200 hover:-translate-y-0.5">
            <span className="text-slate-800 font-black din-bold group-hover:text-[#00b4b4] transition-colors">آراء العملاء</span>
            <span className="text-[10px] font-medium din-medium text-slate-400 tracking-wider">Reviews</span>
          </Link>

          <Link href="#contact" className="group flex flex-col items-center px-3.5 py-1.5 rounded-2xl hover:bg-[#00b4b4]/10 transition-all duration-200 hover:-translate-y-0.5">
            <span className="text-slate-800 font-black din-bold group-hover:text-[#00b4b4] transition-colors">اتصل بنا</span>
            <span className="text-[10px] font-medium din-medium text-slate-400 tracking-wider">Contact Us</span>
          </Link>

        </nav>

        {/* زر التواصل المباشر في الهيدر (يسار الهيدر) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://wa.me/967770473358"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-bathgili-pill inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black din-bold shadow-md hover:scale-103"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>0770 473 358</span>
          </a>
        </div>

        {/* زر المنيو للهواتف */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 focus:outline-none"
          aria-label="القائمة الرئيسية"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#00b4b4]" /> : <Menu className="w-6 h-6 text-[#0f3d4a]" />}
        </button>

      </div>

      {/* القائمة المنبثقة للهواتف (Mobile Navigation Drawer) */}
      {mobileMenuOpen && (
        <div className="md:hidden relative z-30 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl p-5 my-3 shadow-2xl animate-fade-up text-right space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-4 rounded-2xl hover:bg-slate-100 font-black din-black text-slate-900 text-sm"
          >
            الصفحة الرئيسية (Home)
          </Link>
          <Link
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-4 rounded-2xl hover:bg-slate-100 font-bold din-bold text-slate-800 text-sm"
          >
            خدماتنا (Services)
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-4 rounded-2xl hover:bg-slate-100 font-bold din-bold text-slate-800 text-sm"
          >
            من نحن (About Us)
          </Link>
          <Link
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-4 rounded-2xl hover:bg-slate-100 font-bold din-bold text-slate-800 text-sm"
          >
            المشاريع والإنجازات (Projects)
          </Link>
          <Link
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-4 rounded-2xl hover:bg-slate-100 font-bold din-bold text-slate-800 text-sm"
          >
            آراء العملاء (Reviews)
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-3 px-4 rounded-2xl hover:bg-slate-100 font-bold din-bold text-slate-800 text-sm"
          >
            اتصل بنا (Contact Us)
          </Link>

          <div className="pt-2 border-t border-slate-100">
            <a
              href="https://wa.me/967770473358"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full btn-bathgili-pill py-3 rounded-2xl text-xs font-bold din-bold shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>تواصل مباشر: 0770 473 358</span>
            </a>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. HERO CENTRAL HEADLINES */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto w-full text-center space-y-6 sm:space-y-8 py-6 sm:py-10 animate-fade-up">
        
        {/* Headline 1: نُقدم الجودة والإتقان في كل مشروع */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black din-black text-[#0f3d4a] tracking-tight leading-tight px-2">
            نُقدم الجودة والإتقان في كل مشروع
          </h1>
          <p className="text-sm sm:text-2xl font-medium din-medium text-[#0f3d4a]/90 tracking-wide">
            Building your future, with integrated services.
          </p>
        </div>

        {/* Headline 2: مؤسسة باثقيلي للمقاولات والخدمات اللوجستية */}
        <div className="space-y-1 pt-1 sm:pt-2">
          <h2 className="text-lg sm:text-3xl font-black din-black text-slate-900 tracking-tight px-2">
            مؤسسة باثقيلي للمقاولات والخدمات اللوجستية
          </h2>
          <p className="text-xs sm:text-lg font-medium din-medium text-slate-600 tracking-wide">
            Ba Thaqaili General Contracting and Logistics
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 3. THE 4 SERVICES ICONS GRID */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 pt-4 sm:pt-6 max-w-4xl mx-auto">
          
          {/* Service 1: مقاولات عامة / General Contracting */}
          <div className="group flex flex-col items-center space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-2xl bg-white/40 sm:bg-transparent border border-slate-200/50 sm:border-0 shadow-xs sm:shadow-none transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-[#00b4b4]/10 border border-[#00b4b4]/20 text-[#00b4b4] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#00b4b4] group-hover:text-white transition-all duration-500 animate-float">
              <Building2 className="w-7 h-7 sm:w-12 sm:h-12 stroke-[1.5]" />
            </div>
            <div className="text-center space-y-0.5">
              <span className="block text-xs sm:text-base font-black din-black text-slate-900 group-hover:text-[#00b4b4] transition-colors">
                مقاولات عامة
              </span>
              <span className="block text-[10px] font-bold din-medium text-slate-500">
                General Contracting
              </span>
            </div>
          </div>

          {/* Service 2: صيانة وتشغيل / Maintenance */}
          <div className="group flex flex-col items-center space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-2xl bg-white/40 sm:bg-transparent border border-slate-200/50 sm:border-0 shadow-xs sm:shadow-none transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-[#00b4b4]/10 border border-[#00b4b4]/20 text-[#00b4b4] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#00b4b4] group-hover:text-white transition-all duration-500 animate-float" style={{ animationDelay: '0.2s' }}>
              <Wrench className="w-7 h-7 sm:w-12 sm:h-12 stroke-[1.5]" />
            </div>
            <div className="text-center space-y-0.5">
              <span className="block text-xs sm:text-base font-black din-black text-slate-900 group-hover:text-[#00b4b4] transition-colors">
                صيانة وتشغيل
              </span>
              <span className="block text-[10px] font-bold din-medium text-slate-500">
                Maintenance
              </span>
            </div>
          </div>

          {/* Service 3: خدمات لوجستية / Logistics Services */}
          <div className="group flex flex-col items-center space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-2xl bg-white/40 sm:bg-transparent border border-slate-200/50 sm:border-0 shadow-xs sm:shadow-none transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-[#00b4b4]/10 border border-[#00b4b4]/20 text-[#00b4b4] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#00b4b4] group-hover:text-white transition-all duration-500 animate-float" style={{ animationDelay: '0.4s' }}>
              <Truck className="w-7 h-7 sm:w-12 sm:h-12 stroke-[1.5]" />
            </div>
            <div className="text-center space-y-0.5">
              <span className="block text-xs sm:text-base font-black din-black text-slate-900 group-hover:text-[#00b4b4] transition-colors">
                خدمات لوجستية
              </span>
              <span className="block text-[10px] font-bold din-medium text-slate-500">
                Logistics Services
              </span>
            </div>
          </div>

          {/* Service 4: طاقة بديلة / Renewable Energy */}
          <div className="group flex flex-col items-center space-y-2 sm:space-y-3 p-3 sm:p-4 rounded-2xl bg-white/40 sm:bg-transparent border border-slate-200/50 sm:border-0 shadow-xs sm:shadow-none transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 sm:w-24 sm:h-24 rounded-2xl sm:rounded-3xl bg-[#00b4b4]/10 border border-[#00b4b4]/20 text-[#00b4b4] flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-[#00b4b4] group-hover:text-white transition-all duration-500 animate-float" style={{ animationDelay: '0.6s' }}>
              <Sun className="w-7 h-7 sm:w-12 sm:h-12 stroke-[1.5]" />
            </div>
            <div className="text-center space-y-0.5">
              <span className="block text-xs sm:text-base font-black din-black text-slate-900 group-hover:text-[#00b4b4] transition-colors">
                طاقة بديلة
              </span>
              <span className="block text-[10px] font-bold din-medium text-slate-500">
                Renewable Energy
              </span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. ACTION BUTTONS */}
        {/* ========================================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3 sm:pt-4 w-full px-4 sm:px-0">
          
          {/* Button 1: تصفح قطاعات الأعمال */}
          <Link
            href="#projects"
            className="btn-bathgili-pill w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm font-black din-bold shadow-lg text-center"
          >
            تصفح قطاعات الأعمال
          </Link>

          {/* Button 2: تواصل مباشر */}
          <a
            href="https://wa.me/967770473358"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-[#38a169] hover:bg-[#2f855a] text-white text-xs sm:text-sm font-black din-bold shadow-lg text-center transition-all duration-300 hover:scale-103"
          >
            تواصل مباشر Contact
          </a>

        </div>

      </div>

      {/* ========================================================================= */}
      {/* 5. FOOTER INFO LINE IN HERO */}
      {/* ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto w-full pt-4 border-t border-teal-900/10 flex items-center justify-center text-[11px] sm:text-sm font-medium din-medium text-slate-700">
        <div className="flex items-center gap-2 text-center px-2">
          <Phone className="w-4 h-4 text-[#00b4b4] flex-shrink-0" />
          <span>358 473 0770 Hadhramaut, Yemen | حضرموت، اليمن</span>
        </div>
      </div>

    </section>
  );
}
