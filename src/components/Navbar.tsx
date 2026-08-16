'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200/80 shadow-2xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3.5 px-4 sm:px-8">

        {/* الشعار من اليمين (RTL) */}
        <Link href="/">
          <Logo />
        </Link>

        {/* روابط التنقل الرئيسية كما بالصورة بالضبط */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-700">
          <Link href="/" className="hover:text-[#00b4b4] transition-colors py-1 text-slate-900 font-extrabold">
            الرئيسية
          </Link>
          <Link href="/#about" className="hover:text-[#00b4b4] transition-colors py-1">
            عن المؤسسة
          </Link>

          {/* القائمة المنسدلة للخدمات */}
          <div className="relative group" onMouseEnter={() => setServicesDropdown(true)} onMouseLeave={() => setServicesDropdown(false)}>
            <button className="flex items-center gap-1 hover:text-[#00b4b4] transition-colors py-1 font-bold">
              <span>الخدمات</span>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#00b4b4]" />
            </button>

            {servicesDropdown && (
              <div className="absolute top-full right-0 w-52 bg-white border border-slate-100 shadow-xl rounded-2xl p-2 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                <Link href="/#services" className="block px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-[#00b4b4]/10 hover:text-[#00b4b4] transition-colors">
                  المقاولات العامة
                </Link>
                <Link href="/#services" className="block px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-[#00b4b4]/10 hover:text-[#00b4b4] transition-colors">
                  الخدمات اللوجستية
                </Link>
                <Link href="/#services" className="block px-4 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-[#00b4b4]/10 hover:text-[#00b4b4] transition-colors">
                  إدارة سلاسل الإمداد
                </Link>
              </div>
            )}
          </div>

          <Link href="/#projects" className="hover:text-[#00b4b4] transition-colors py-1">
            المشاريع
          </Link>
        </nav>

        {/* أزرار الإجراء السريع وأرقام الاتصال */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+967770473358"
            className="btn-bathgili-pill px-6 py-2.5 text-xs font-bold shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <span>للتواصل: 0770 473 358</span>
          </a>
        </div>


        {/* زر الموبايل */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors"
          aria-label="القائمة الرئيسية"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* القائمة المنسدلة للشاشات الصغيرة */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 text-right animate-in fade-in slide-in-from-top-4 duration-200">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-900 hover:text-[#00b4b4] py-1"
          >
            الرئيسية
          </Link>
          <Link
            href="/#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-700 hover:text-[#00b4b4] py-1"
          >
            عن المؤسسة
          </Link>
          <Link
            href="/#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-700 hover:text-[#00b4b4] py-1"
          >
            الخدمات (المقاولات واللوجستيات)
          </Link>
          <Link
            href="/#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-bold text-slate-700 hover:text-[#00b4b4] py-1"
          >
            المشاريع
          </Link>
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center btn-bathgili-pill py-3 text-xs font-bold shadow-md"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}



