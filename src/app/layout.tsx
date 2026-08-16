import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const dinArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-din-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مؤسسة باثقيلي للمقاولات العامة والخدمات اللوجستية | المنصة الرسمية",
  description: "مؤسسة باثقيلي للمقاولات العامة والخدمات اللوجستية - التشييد والبناء، إنشاء المستودعات والمجمعات، والحلول اللوجستية المتقدمة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={dinArabic.variable}>
      <body className="font-sans antialiased bg-[#f8fafc] text-slate-900 selection:bg-[#00b4b4]/20 selection:text-[#00b4b4]">
        {children}
      </body>
    </html>
  );
}