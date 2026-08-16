import Image from 'next/image';
import Link from 'next/link';
import { MapPin, HardHat, Truck, Sun, Wrench, Building2, Zap, ArrowLeft } from 'lucide-react';
import { Project } from '../../lib/mock-data';

export default function ProjectCard({ project }: { project: Project }) {
  const getCategoryBadgeIcon = (category: Project['category']) => {
    switch (category) {
      case 'Contracting':
        return <Building2 className="w-5 h-5 text-[#00b4b4]" />;
      case 'Logistics':
        return <Truck className="w-5 h-5 text-[#00b4b4]" />;
      case 'Infrastructure':
        return <Sun className="w-5 h-5 text-[#00b4b4]" />;
      case 'Maintenance':
        return <Wrench className="w-5 h-5 text-[#00b4b4]" />;
      default:
        return <Zap className="w-5 h-5 text-[#00b4b4]" />;
    }
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group bg-white rounded-3xl p-4 shadow-lg border border-slate-200/80 hover:border-[#00b4b4]/60 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between text-right font-sans relative overflow-hidden"
    >
      <div className="space-y-4">
        {/* صورة المشروع مع الشارة الدائرية المتداخلة */}
        <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-100">
          <Image
            src={project.heroImageUrl}
            alt={project.titleAr}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

          {/* أيقونة القطاع الدائرية المتداخلة أسفل يسار الصورة كما في الصورة بالضبط */}
          <div className="absolute bottom-3 left-3 z-10 w-11 h-11 rounded-2xl bg-white/95 text-[#00b4b4] backdrop-blur-md shadow-md border border-white/40 flex items-center justify-center transition-transform group-hover:scale-110">
            {getCategoryBadgeIcon(project.category)}
          </div>
        </div>

        {/* عنوان المشروع مع التصنيف بين قوسين والشرح */}
        <div className="space-y-2 px-1">
          <h3 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#00b4b4] transition-colors leading-tight">
            {project.titleAr}
          </h3>

          <div className="text-xs font-black text-[#00b4b4] tracking-wide">
            ({project.categoryText})
          </div>

          <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2 pt-1 border-t border-slate-100">
            {project.subtitleAr || project.descriptionAr}
          </p>
        </div>
      </div>

      {/* زر تحفيزي ناعم يبرز عند التحويم */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-extrabold text-slate-400 group-hover:text-[#00b4b4] transition-colors">
        <span>عرض تفاصيل المشروع</span>
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
      </div>
    </Link>
  );
}