export interface Facility {
  name: string;
  icon: string;
}

export interface UnitType {
  type: string;
  area: string;
  rooms: number;
  baths: number;
  priceStarting: string;
}

export interface Project {
  id: string;
  titleAr: string;
  slug: string;
  subtitleAr: string;
  descriptionAr: string;
  category: 'Contracting' | 'Logistics' | 'Infrastructure' | 'Maintenance';
  categoryText: string;
  city: string;
  district: string;
  status: 'BookingOpen' | 'UnderConstruction' | 'Completed';
  statusText: string;
  heroImageUrl: string;
  unitsCount: number;
  minArea: number;
  maxArea: number;
  startingPrice: string;
  whatsappNumber: string;
  phoneNumber: string;
  email: string;
  deliveryYear: string;
  gallery: string[];
  facilities: Facility[];
  unitTypes: UnitType[];
}

export const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    titleAr: "إنشاء مبنى \"برج الأمل\" الإداري",
    slug: "al-amal-tower-project",
    subtitleAr: "تنفيذ شامل للمباني السكنية والتجارية والمرافق العامة",
    descriptionAr: "مشروع إنشاء وتشييد برج الأمل الإداري والتجاري بأحدث المواصفات الهندسية العالمية. يشمل التنفيذ الهيكلي الكامل والتشطيبات الفاخرة وأنظمة السلامة المعتمدة.",
    category: "Contracting",
    categoryText: "مقاولات عامة",
    city: "حضرموت",
    district: "الشحر",
    status: "Completed",
    statusText: "مكتمل",
    heroImageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
    unitsCount: 18,
    minArea: 500,
    maxArea: 3200,
    startingPrice: "طلب تسعيرة",
    whatsappNumber: "967770473358",
    phoneNumber: "0770473358",
    email: "bathg.gcls@gmail.com",
    deliveryYear: "2026",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
    ],
    facilities: [
      { name: "إشراف هندسي وحساب كميات", icon: "Building" },
      { name: "عزل مائي وحراري معتمد", icon: "Shield" }
    ],
    unitTypes: [
      { type: "برج إداري تجاري", area: "3,200 م²", rooms: 20, baths: 12, priceStarting: "طلب سعر" }
    ]
  },
  {
    id: "2",
    titleAr: "إدارة أسطول النقل اللوجستي",
    slug: "logistics-fleet-management",
    subtitleAr: "حلول نقل متكاملة وآمنة لقطاع التجارة والصناعة",
    descriptionAr: "مشروع إدارة وتجهيز أسطول الشحن والنقل اللوجستي الثقيل لتأمين سلاسل التوريد وتوفير حلول النقل المباشر والسريع بين المحافظات.",
    category: "Logistics",
    categoryText: "خدمات لوجستية",
    city: "حضرموت",
    district: "الشحر",
    status: "Completed",
    statusText: "جاهز للتشغيل",
    heroImageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    unitsCount: 45,
    minArea: 1000,
    maxArea: 5000,
    startingPrice: "طلب تسعيرة",
    whatsappNumber: "967770473358",
    phoneNumber: "0770473358",
    email: "bathg.gcls@gmail.com",
    deliveryYear: "2026",
    gallery: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
    ],
    facilities: [
      { name: "شاحنات حديثة ومجهزة", icon: "Truck" },
      { name: "تتبع جغرافي ذكي 24/7", icon: "Cpu" }
    ],
    unitTypes: [
      { type: "أسطول شحن لوجستي", area: "5,000 م²", rooms: 0, baths: 0, priceStarting: "طلب سعر" }
    ]
  },
  {
    id: "3",
    titleAr: "مشروع محطة الريان للطاقة الشمسية",
    slug: "al-rayyan-solar-plant",
    subtitleAr: "تشغيل وصيانة الألواح الكهرضوئية لتوليد الطاقة النظيفة",
    descriptionAr: "تصميم وتنفيذ محطة كهرضوئية شمسية ضخمة لإنتاج الطاقة البديلة النظيفة وتغذية المرافق الصناعية وتخفيض تكاليف الطاقة.",
    category: "Infrastructure",
    categoryText: "طاقة بديلة",
    city: "حضرموت",
    district: "الريان - الشحر",
    status: "Completed",
    statusText: "مكتمل",
    heroImageUrl: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    unitsCount: 1,
    minArea: 2000,
    maxArea: 10000,
    startingPrice: "طلب تسعيرة",
    whatsappNumber: "967770473358",
    phoneNumber: "0770473358",
    email: "bathg.gcls@gmail.com",
    deliveryYear: "2026",
    gallery: [
      "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
    ],
    facilities: [
      { name: "ألواح كهرضوئية ذات كفاءة عالية", icon: "Sun" }
    ],
    unitTypes: [
      { type: "محطة طاقة شمسية 100KW", area: "10,000 م²", rooms: 0, baths: 0, priceStarting: "طلب سعر" }
    ]
  },
  {
    id: "4",
    titleAr: "تحديث محطة توزيع الكهرباء",
    slug: "power-substation-upgrade",
    subtitleAr: "تحسين كفاءة الشبكة ودمج مصادر الطاقة المستدامة",
    descriptionAr: "مشروع تحديث وتأهيل محطة توزيع الطاقة الكهربائية الرئيسية، تركيب شبكات المحولات الذكية، وتحسين استقرار التيار للمجمعات الصناعية.",
    category: "Infrastructure",
    categoryText: "طاقة بديلة",
    city: "حضرموت",
    district: "الشحر",
    status: "Completed",
    statusText: "مكتمل",
    heroImageUrl: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    unitsCount: 1,
    minArea: 1500,
    maxArea: 6000,
    startingPrice: "طلب تسعيرة",
    whatsappNumber: "967770473358",
    phoneNumber: "0770473358",
    email: "bathg.gcls@gmail.com",
    deliveryYear: "2026",
    gallery: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
    ],
    facilities: [
      { name: "محولات شبكة ذكية", icon: "Cpu" }
    ],
    unitTypes: [
      { type: "محطة توزيع قوى", area: "6,000 م²", rooms: 0, baths: 0, priceStarting: "طلب سعر" }
    ]
  },
  {
    id: "5",
    titleAr: "تطوير مجمع \"الصفا\" السكني",
    slug: "al-safa-residential-complex",
    subtitleAr: "بناء وتجهيز مجتمعات سكنية متكاملة",
    descriptionAr: "مشروع تشييد وتطوير مجمع الصفا السكني، يضم مبانٍ سكنية حديثة وحدائق ومرافق متكاملة منفذة وفق أرقى المعايير المعمارية.",
    category: "Contracting",
    categoryText: "مقاولات عامة",
    city: "حضرموت",
    district: "الشحر",
    status: "UnderConstruction",
    statusText: "قيد التشييد",
    heroImageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
    unitsCount: 32,
    minArea: 250,
    maxArea: 1800,
    startingPrice: "تسعيرة تعاقدية",
    whatsappNumber: "967770473358",
    phoneNumber: "0770473358",
    email: "bathg.gcls@gmail.com",
    deliveryYear: "2026",
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
    ],
    facilities: [
      { name: "مرافق سكنية متكاملة", icon: "Building" }
    ],
    unitTypes: [
      { type: "وحدة سكنية عائلية", area: "250 م²", rooms: 4, baths: 3, priceStarting: "طلب سعر" }
    ]
  },
  {
    id: "6",
    titleAr: "عقد صيانة سنوي لمصنع \"الغد\"",
    slug: "al-ghad-factory-maintenance",
    subtitleAr: "صيانة دورية وإصلاح الأنظمة الميكانيكية والكهربائية",
    descriptionAr: "تنفيذ عقد الصيانة والتشغيل الشامل لخطوط الإنتاج والأنظمة الميكانيكية والكهربائية بمصنع الغد لضمان استمرارية التشغيل وتجنب الأعطال.",
    category: "Maintenance",
    categoryText: "صيانة وتشغيل",
    city: "حضرموت",
    district: "الشحر",
    status: "Completed",
    statusText: "ساري للتشغيل",
    heroImageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    unitsCount: 1,
    minArea: 4000,
    maxArea: 12000,
    startingPrice: "عقد سنوي",
    whatsappNumber: "967770473358",
    phoneNumber: "0770473358",
    email: "bathg.gcls@gmail.com",
    deliveryYear: "2026",
    gallery: [
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
    ],
    facilities: [
      { name: "فريق هندسي متخصص للموقع", icon: "Wrench" }
    ],
    unitTypes: [
      { type: "عقد صيانة تشغيلي", area: "12,000 م²", rooms: 0, baths: 0, priceStarting: "طلب سعر" }
    ]
  }
];