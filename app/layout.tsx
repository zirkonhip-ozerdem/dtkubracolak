import type { Metadata } from "next";
import "./globals.css";
import { ScrollToTop } from "@/components/shared/ScrollToTop"; // <-- 1. Adım: Butonu import ediyoruz

export const metadata: Metadata = {
  title: "Dt. Kübra Çolak",
  description: "Ağız ve diş sağlığı kliniği web sitesi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {/* Sayfa içerikleri (Header, Sayfa Yapısı, Footer vb.) */}
        {children}
        
        {/* 2. Adım: Butonu en alta yerleştiriyoruz. Sayfanın üzerinde bağımsız (fixed) olarak duracak */}
        <ScrollToTop />
      </body>
    </html>
  );
}