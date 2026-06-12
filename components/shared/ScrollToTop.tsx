"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Sayfa kaydırıldıkça butonun görünürlüğünü kontrol et
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Yumuşakça en yukarı kaydır
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#c9a36d] text-white shadow-lg transition-all duration-300 hover:bg-[#b8925c] hover:scale-110 active:scale-95 focus:outline-none md:bottom-8 md:right-8 ${
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Yukarı Çık"
    >
      {/* Şık ve Modern Yukarı Oku İkonu */}
      <svg
        className="h-5 w-5 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}