export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#ffffff] text-[#0f172a]">
      {/* محتوى الصفحة الرئيسي الناصع */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}