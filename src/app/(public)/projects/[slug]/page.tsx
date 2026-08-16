'use client';

import React, { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MOCK_PROJECTS, Project } from '../../../../lib/mock-data';
import Footer from '../../../../components/Footer';
import FloatingWidgets from '../../../../components/FloatingWidgets';
import PartnersSection from '../../../../components/landing/PartnersSection';
import {
  MapPin,
  Calendar,
  Building,
  Phone,
  MessageSquare,
  FileText,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Maximize2,
  X,
  Cpu,
  Car,
  Activity,
  Sun,
  Truck,
  HardHat,
  Mail,
  Wrench,
  Building2
} from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetailsPage({ params }: Props) {
  const { slug } = use(params);
  const project = MOCK_PROJECTS.find((p) => p.slug === slug);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceInterest: 'مقاولات عامة' });

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] p-6 text-center">
        <div className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl max-w-md space-y-4">
          <Building className="w-16 h-16 text-slate-300 mx-auto" />
          <h1 className="text-xl font-bold din-bold text-slate-900">المشروع أو الخدمة غير موجودة</h1>
          <p className="text-xs text-slate-500 din-medium">يرجى التأكد من اختيار أحد مشاريع مؤسسة باثقيلي الرسمية.</p>
          <Link
            href="/"
            className="inline-block bg-[#00b4b4] text-white px-7 py-3 rounded-2xl text-xs font-bold shadow-md"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  const getFacilityIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5 text-[#00b4b4]" };
    switch (iconName) {
      case 'Cpu': return <Cpu {...iconProps} />;
      case 'Car': return <Car {...iconProps} />;
      case 'Activity': return <Activity {...iconProps} />;
      case 'ShieldCheck': return <ShieldCheck {...iconProps} />;
      case 'Truck': return <Truck {...iconProps} />;
      case 'Building': return <Building2 {...iconProps} />;
      case 'Wrench': return <Wrench {...iconProps} />;
      default: return <Sparkles {...iconProps} />;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setBrochureModalOpen(false);
      setFormSubmitted(false);
    }, 2500);
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#e6f7f7] via-[#f5fbfb] to-[#e6f7f7] text-slate-900 overflow-hidden font-sans pb-16">
      
      {/* الصفحة الرئيسية فوق الخلفية الموحدة */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-6 space-y-8">
        
        {/* شريط المسار السريع بخط DIN Arabic */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 py-4 px-6 rounded-2xl shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium din-medium">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-slate-900 transition-colors">الرئيسية</Link>
              <span>/</span>
              <Link href="/#projects" className="hover:text-slate-900 transition-colors font-semibold">مشاريع باثقيلي</Link>
              <span>/</span>
              <span className="text-[#00b4b4] font-bold din-bold">{project.titleAr}</span>
            </div>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-bold din-bold text-[#0f3d4a] hover:text-[#00b4b4] transition-colors bg-slate-100 px-3.5 py-1.5 rounded-xl border border-slate-200"
            >
              <ArrowRight className="w-3.5 h-3.5" />
              <span>رجوع لكافة المشاريع</span>
            </Link>
          </div>
        </div>

        {/* ترويسة تفاصيل مشروع باثقيلي الرسمية (FF DIN Black & Medium) */}
        <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3.5 text-right">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="bg-[#0f3d4a] text-white text-xs font-bold din-bold px-4 py-1.5 rounded-full shadow-xs">
                قطاع {project.categoryText}
              </span>
              <span className="bg-[#00b4b4]/15 text-[#00b4b4] border border-[#00b4b4]/30 text-xs font-bold din-bold px-4 py-1.5 rounded-full">
                {project.statusText}
              </span>
              <span className="bg-slate-100 text-slate-700 text-xs font-bold din-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00b4b4]" />
                {project.city} - {project.district}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black din-black text-[#0f3d4a] tracking-tight leading-tight">
              {project.titleAr}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium din-medium max-w-2xl leading-relaxed">
              {project.subtitleAr}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
            <div className="text-right sm:text-left px-2">
              <span className="block text-[11px] text-slate-400 font-bold din-bold">التسعيرة والاعتماد</span>
              <span className="text-2xl sm:text-3xl font-black din-black text-[#0f3d4a]">{project.startingPrice}</span>
            </div>
            <button
              onClick={() => setBrochureModalOpen(true)}
              className="btn-bathgili-pill text-white text-xs font-bold din-bold px-7 py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>طلب عرض سعر رسمي</span>
            </button>
          </div>
        </div>

        {/* معرض الصور التفاعلي العالي الدقة */}
        <div className="space-y-4">
          <div className="relative h-[360px] sm:h-[540px] w-full rounded-3xl overflow-hidden bg-slate-900 border-4 border-white shadow-2xl group">
            <Image
              src={project.gallery[selectedImageIndex] || project.heroImageUrl}
              alt={project.titleAr}
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-103 cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
            
            {/* زر التكبير */}
            <button
              onClick={() => setLightboxOpen(true)}
              className="absolute top-5 left-5 bg-white/95 backdrop-blur-md text-slate-900 p-3 rounded-2xl shadow-lg text-xs font-bold flex items-center gap-2 transition-transform hover:scale-105"
            >
              <Maximize2 className="w-4 h-4 text-[#00b4b4]" />
              <span>تكبير الصورة</span>
            </button>

            {/* أسهم التصفح */}
            <button
              onClick={() => setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : project.gallery.length - 1))}
              className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-3.5 rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-110"
              aria-label="الصورة السابقة"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => setSelectedImageIndex((prev) => (prev < project.gallery.length - 1 ? prev + 1 : 0))}
              className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-900 p-3.5 rounded-full shadow-lg backdrop-blur-md transition-all hover:scale-110"
              aria-label="الصورة التالية"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          {/* مصغرات المعرض */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {project.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative h-20 w-32 sm:w-40 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all ${
                  selectedImageIndex === idx
                    ? 'border-[#00b4b4] shadow-md ring-2 ring-[#00b4b4]/40 scale-102'
                    : 'border-white opacity-70 hover:opacity-100'
                }`}
              >
                <Image src={img} alt={`مصغرة ${idx + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* شبكة التفاصيل الفنية وتجربة المستخدم */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* الشرح التفصيلي والمواصفات (FF DIN Arabic) */}
          <div className="lg:col-span-8 space-y-8 text-right">
            
            {/* الشرح والمواصفات */}
            <section className="bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200/90 p-8 space-y-6 shadow-xl">
              <h2 className="text-2xl font-black din-black text-[#0f3d4a] flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-[#00b4b4]" />
                <span>عن المشروع والحلول المنفذة</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium din-medium">
                {project.descriptionAr}
              </p>

              {/* بطاقات الإحصائيات والأرقام */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-right">
                  <span className="block text-xs text-slate-400 font-bold din-bold">حجم الموقع</span>
                  <span className="text-lg font-black din-black text-slate-900 mt-1 block">{project.unitsCount} وحدة/موقع</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-right">
                  <span className="block text-xs text-slate-400 font-bold din-bold">المساحة الكلية</span>
                  <span className="text-lg font-black din-black text-slate-900 mt-1 block">{project.minArea} - {project.maxArea} م²</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-right">
                  <span className="block text-xs text-slate-400 font-bold din-bold">سنة التجهيز</span>
                  <span className="text-lg font-black din-black text-slate-900 mt-1 block">{project.deliveryYear}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-right">
                  <span className="block text-xs text-slate-400 font-bold din-bold">الحالة التشغيلية</span>
                  <span className="text-lg font-black din-black text-[#00b4b4] mt-1 block">{project.statusText}</span>
                </div>
              </div>
            </section>

            {/* النماذج الفنية والمقاسات */}
            <section className="bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200/90 p-8 space-y-6 shadow-xl">
              <h2 className="text-2xl font-black din-black text-[#0f3d4a] flex items-center gap-2.5">
                <HardHat className="w-5 h-5 text-[#00b4b4]" />
                <span>النماذج الفنية والمواصفات التعاقدية</span>
              </h2>

              <div className="space-y-4">
                {project.unitTypes.map((unit, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#00b4b4]/60 transition-colors"
                  >
                    <div className="space-y-2">
                      <h3 className="text-base font-black din-black text-slate-900">{unit.type}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold din-medium text-slate-600">
                        <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200">
                          <Maximize2 className="w-3.5 h-3.5 text-[#00b4b4]" />
                          المساحة المعتمدة: {unit.area}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full sm:w-auto gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-200">
                      <div className="text-right sm:text-left">
                        <span className="block text-[10px] text-slate-400 font-bold din-bold">التسعيرة الفنية</span>
                        <span className="text-lg font-black din-black text-[#0f3d4a]">{unit.priceStarting}</span>
                      </div>
                      <button
                        onClick={() => setBrochureModalOpen(true)}
                        className="bg-[#0f3d4a] hover:bg-[#063b46] text-white text-xs font-bold din-bold px-5 py-3 rounded-xl transition-all shadow-md"
                      >
                        طلب عرض سعر
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* أنظمة السلامة والتجهيزات */}
            <section className="bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200/90 p-8 space-y-6 shadow-xl">
              <h2 className="text-2xl font-black din-black text-[#0f3d4a] flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#00b4b4]" />
                <span>التجهيزات ومعايير السلامة المعتمدة</span>
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {project.facilities.map((fac, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200"
                  >
                    <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      {getFacilityIcon(fac.icon)}
                    </div>
                    <span className="text-xs font-bold din-bold text-slate-800">{fac.name}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* الجانب الأيسر: بطاقة التواصل المباشر ورسائل الواتساب */}
          <div className="lg:col-span-4 space-y-8 text-right">
            
            {/* بطاقة الموقع الجغرافي والإحداثيات */}
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-slate-200/90 p-6 space-y-4 shadow-xl">
              <h2 className="text-lg font-black din-black text-[#0f3d4a] flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#00b4b4]" />
                <span>موقع التنفيذ والإحداثيات</span>
              </h2>
              
              <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 flex flex-col items-center justify-center p-4 text-center">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00b4b4_1px,transparent_1px)] [background-size:14px_14px]" />
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#00b4b4] text-white flex items-center justify-center shadow-lg mb-2 text-lg">
                  📍
                </div>
                <p className="relative z-10 text-sm font-black din-black text-slate-900">{project.city} - {project.district}</p>
                <p className="relative z-10 text-xs font-medium din-medium text-slate-500 mt-1">موقع مجهز ومربوط بالشبكات اللوجستية</p>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(project.city + ' ' + project.district)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold din-bold py-3.5 rounded-2xl transition-colors"
              >
                <span>فتح الموقع بخرائط Google Maps</span>
              </a>
            </div>

            {/* بطاقة الاتصال والواتساب السريعة */}
            <div className="bg-gradient-to-br from-[#0f3d4a] via-[#063b46] to-[#0f3d4a] text-white rounded-3xl p-7 space-y-5 shadow-2xl relative overflow-hidden">
              <div className="space-y-1">
                <h3 className="text-base font-black din-black">مؤسسة باثقيلي للمقاولات والخدمات اللوجستية</h3>
                <span className="text-xs text-[#00b4b4] font-medium din-medium">قسم المبيعات والتسعير الهندسي</span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-200 font-medium din-medium border-t border-white/10 pt-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#00b4b4]" />
                  <span>0770 473 358 | +967 770473358</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00b4b4]" />
                  <span>bathg.gcls@gmail.com</span>
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <a
                  href={`tel:${project.phoneNumber}`}
                  className="flex items-center justify-center gap-2 w-full bg-white text-slate-900 hover:bg-slate-100 py-3.5 rounded-2xl text-xs font-bold din-bold transition-all shadow-md"
                >
                  <Phone className="w-4 h-4 text-[#00b4b4]" />
                  <span>اتصال مباشر: 0770 473 358</span>
                </a>

                <a
                  href={`https://wa.me/${project.whatsappNumber}?text=${encodeURIComponent(`طلب تسعيرة وتفاصيل عن مشروع ${project.titleAr}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-2xl text-xs font-bold din-bold transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>محادثة واتساب الرسمية</span>
                </a>

                <button
                  onClick={() => setBrochureModalOpen(true)}
                  className="flex items-center justify-center gap-2 w-full btn-bathgili-pill text-white py-3.5 rounded-2xl text-xs font-bold din-bold transition-all shadow-md"
                >
                  <FileText className="w-4 h-4" />
                  <span>طلب عرض سعر مكتوب</span>
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* قسم شركاء النجاح والجهات المعتمدة */}
        <PartnersSection />

        {/* الفوتر المكتمل أسفل الصفحة */}
        <Footer />

      </div>

      {/* النافذة المنبثقة لطلب عرض سعر (Modal) */}
      {brochureModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4 text-right font-sans">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-md w-full p-6 sm:p-8 space-y-6 relative">
            
            <button
              onClick={() => setBrochureModalOpen(false)}
              className="absolute top-5 left-5 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="w-11 h-11 rounded-2xl bg-[#00b4b4]/15 text-[#00b4b4] flex items-center justify-center font-bold">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-black din-black text-slate-900">طلب عرض سعر رسمي تعاقدي</h3>
              <p className="text-xs text-slate-500 din-medium">أدخل معلوماتك وسنقوم بالتواصل معك وإرسال جدول الكميات والتسعيرة الرسمية.</p>
            </div>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold din-bold text-emerald-900">تم استلام طلب التسعيرة بنجاح!</h4>
                <p className="text-xs text-emerald-700 din-medium">سيقوم مهندس المبيعات والتسعير في مؤسسة باثقيلي بالتواصل معك فوراً.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold din-bold text-slate-700 mb-1.5">اسم الجهة أو الشخص</label>
                  <input
                    type="text"
                    required
                    placeholder="اسم المؤسسة أو العميل"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#00b4b4] focus:ring-2 focus:ring-[#00b4b4]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold din-bold text-slate-700 mb-1.5">رقم الجوال (واتساب)</label>
                  <input
                    type="tel"
                    required
                    placeholder="0770 473 358"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#00b4b4] focus:ring-2 focus:ring-[#00b4b4]/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold din-bold text-slate-700 mb-1.5">قطاع الخدمة المطلوب</label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 text-xs font-medium focus:outline-none focus:border-[#00b4b4]"
                  >
                    <option value="مقاولات عامة">أعمال مقاولات عامة وتشييد</option>
                    <option value="خدمات لوجستية">خدمات لوجستية ومستودعات</option>
                    <option value="طاقة بديلة">طاقة بديلة وطاقة شمسية</option>
                    <option value="صيانة وتشغيل">صيانة وتطوير المرافق</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full btn-bathgili-pill text-white py-4 rounded-2xl text-xs font-bold din-bold transition-all shadow-md hover:shadow-lg"
                >
                  إرسال الطلب وحجز التسعيرة
                </button>
              </form>
            )}

          </div>
        </div>
      )}

      {/* Lightbox Toggling View */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 left-6 text-white p-3 hover:bg-white/10 rounded-full transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-6xl h-[85vh]">
            <Image
              src={project.gallery[selectedImageIndex] || project.heroImageUrl}
              alt={project.titleAr}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* الأدوات العائمة التفاعلية */}
      <FloatingWidgets />

    </div>
  );
}