import HeroSection from '../../components/landing/HeroSection';
import AboutSection from '../../components/landing/AboutSection';
import ProjectsList from '../../components/landing/ProjectsList';
import TestimonialsSection from '../../components/landing/TestimonialsSection';
import PartnersSection from '../../components/landing/PartnersSection';
import Footer from '../../components/Footer';
import FloatingWidgets from '../../components/FloatingWidgets';

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-[#e6f7f7] via-[#f5fbfb] to-[#e6f7f7] text-slate-900 overflow-hidden font-sans">
      
      {/* المحتوى الرئيسي للموقع فوق الخلفية الموحدة */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 space-y-12">
        <HeroSection />
        <AboutSection />
        <ProjectsList />
        <TestimonialsSection />
        <PartnersSection />
        <Footer />
      </div>

      {/* الأدوات العائمة التفاعلية: الواتساب، طلب السعر، والزر للأعلى */}
      <FloatingWidgets />

    </div>
  );
}