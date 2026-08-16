'use client';

import React from 'react';
import Image from 'next/image';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface Partner {
  id: string;
  nameAr: string;
  nameEn: string;
  sector: string;
  logoUrl: string;
}

const REAL_PARTNERS: Partner[] = [
  {
    id: 'p1',
    nameAr: 'شركة بترومسيلة للاستكشاف والإنتاج',
    nameEn: 'PetroMasila Oil & Gas',
    sector: 'قطاع النفط والطاقة',
    logoUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p2',
    nameAr: 'شركة النفط اليمنية - فرع حضرموت',
    nameEn: 'Yemen Petroleum Company (YPC)',
    sector: 'التوريد والإمداد النفطي',
    logoUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p3',
    nameAr: 'المؤسسة العامة للكهرباء - ساحل حضرموت',
    nameEn: 'Public Electricity Corporation',
    sector: 'شبكات القوى والطاقة',
    logoUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p4',
    nameAr: 'مؤسسة موانئ البحر العربي (ميناء الشحر)',
    nameEn: 'Arabian Sea Ports Corporation',
    sector: 'الخدمات الملاحية والتفريغ',
    logoUrl: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p5',
    nameAr: 'مجموعة بن لادن للمقاولات الإنشائية',
    nameEn: 'Binladin Contracting Group',
    sector: 'المقاولات العامة والإنشاءات',
    logoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p6',
    nameAr: 'شركة الريان للطاقة الكهرضوئية',
    nameEn: 'Al-Rayyan Solar Energy',
    sector: 'الطاقة البديلة المستدامة',
    logoUrl: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p7',
    nameAr: 'شركة الأمل للتطوير والاستثمار العقاري',
    nameEn: 'Al-Amal Real Estate Dev',
    sector: 'التطوير والمجمعات',
    logoUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'p8',
    nameAr: 'شركة السلسلة الذهبية للشحن واللوجستيات',
    nameEn: 'Golden Chain Logistics & Cargo',
    sector: 'إدارة أساطيل النقل',
    logoUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80'
  }
];

export default function PartnersSection() {
  // تكرار القائمة لخلق تحريك شريطي لانهائي وبدون توقف
  const duplicatedPartners = [...REAL_PARTNERS, ...REAL_PARTNERS];

  return (
    <section id="partners" className="relative w-full py-12 bg-transparent overflow-hidden text-slate-900 font-sans my-4">

      {/* 1. ترويسة ناصعة بدون أي حاوية أو خلفية إطلاقاً */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center space-y-2 mb-10">
        <div className="inline-flex items-center gap-2 bg-[#00b4b4]/10 border border-[#00b4b4]/25 text-[#00b4b4] px-4 py-1.5 rounded-full text-xs font-bold shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#00b4b4]" />
          <span>شركاء النجاح والجهات المعتمدة | Official Partners</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-black din-black text-[#0f3d4a] tracking-tight">
          شركاء النجاح
        </h2>

        <p className="text-xs sm:text-sm font-medium din-medium text-slate-600 max-w-xl mx-auto">
          عرض انسيابي متحرك لعلامات وهويات الشركات والمؤسسات الرائدة الشريكة
        </p>
      </div>

      {/* ========================================================================= */}
      {/* 2. شريط تحريك الهويات والشعارات الحقيقية (بدون أي حاويات أو كروت خلفية) */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden py-6">

        {/* التلاشي المتدرج على الحواف لجعل التصفح انسيابياً فخماً */}
        <div className="absolute top-0 bottom-0 right-0 w-28 sm:w-52 bg-gradient-to-l from-[#e6f7f7] via-[#e6f7f7]/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 left-0 w-28 sm:w-52 bg-gradient-to-r from-[#e6f7f7] via-[#e6f7f7]/90 to-transparent z-10 pointer-events-none" />

        {/* الشريط المتحرك أنيميشن أفقي (بدون خلفية وبدون إطار) */}
        <div className="animate-marquee-slow gap-8 sm:gap-14 px-4 items-center">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={`${partner.id}-${index}`}
              className="group flex-shrink-0 flex flex-col items-center justify-center text-center space-y-2.5 cursor-pointer transition-all duration-500 hover:scale-110"
            >
              {/* صورة الهوية الحقيقية بدون أي حاوية كرت (Floating Pure Logo Image) */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden filter grayscale contrast-125 opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:drop-shadow-xl transition-all duration-500">
                <Image
                  src={partner.logoUrl}
                  alt={partner.nameAr}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* اسم المؤسسة والقطاع طافية مباشرة بدون خلفية */}
              <div className="space-y-0.5">
                <h3 className="text-xs font-black din-bold text-slate-800 group-hover:text-[#00b4b4] transition-colors whitespace-nowrap">
                  {partner.nameAr}
                </h3>
                <span className="block text-[10px] font-bold din-medium text-slate-500 group-hover:text-[#0f3d4a] transition-colors whitespace-nowrap">
                  {partner.sector}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
