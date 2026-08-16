'use client';

import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { MapPin, Phone, Mail, Send, Globe, Share2, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#063b46] text-white pt-16 pb-8 border-t border-[#097d7d]/30 rounded-3xl max-w-7xl mx-auto px-4 sm:px-8 mt-16 font-sans">
      <div className="space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 text-right">

          {/* Column 1: About */}
          <div className="lg:col-span-4 space-y-4">
            <Logo light />
            <p className="text-xs text-slate-300 leading-relaxed font-medium din-medium pt-2">
              مؤسسة باثقيلي للمقاولات العامة والخدمات اللوجستية — بناء، صيانة، خدمات لوجستية، وطاقة بديلة. معًا نبني المستقبل.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-black din-black text-[#00b4b4]">روابط سريعة</h3>
            <ul className="space-y-2 text-xs text-slate-300 font-medium din-medium">
              <li><Link href="/" className="hover:text-white transition-colors">الرئيسية</Link></li>
              <li><Link href="#about" className="hover:text-white transition-colors">من نحن</Link></li>
              <li><Link href="#projects" className="hover:text-white transition-colors">المشاريع والأعمال</Link></li>
              <li><Link href="#testimonials" className="hover:text-white transition-colors">آراء العملاء</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-sm font-black din-black text-[#00b4b4]">للتواصل والاستفسار</h3>
            <div className="space-y-2.5 text-xs text-slate-300 font-medium din-medium">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00b4b4]" />
                <span>اليمن - حضرموت, Ash Shihr, Yemen</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00b4b4]" />
                <span>0770 473 358 | +967 770473358 | +967 736436150</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00b4b4]" />
                <span>bathg.gcls@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Column 4: Follow Us */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-black din-black text-[#00b4b4]">تواصل معنا</h3>
            <div className="flex items-center gap-3">
              <a href="https://wa.me/967770473358" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#00b4b4] transition-colors" aria-label="تواصل">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#00b4b4] transition-colors" aria-label="الموقع">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#00b4b4] transition-colors" aria-label="مشاركة">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-[#00b4b4] transition-colors" aria-label="محادثة">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-[10px] sm:text-xs text-slate-400 font-semibold din-medium uppercase tracking-wider">
          مؤسسة باثقيلي للمقاولات العامة والخدمات اللوجستية - جميع الحقوق محفوظة © 2026
        </div>

      </div>
    </footer>
  );
}
