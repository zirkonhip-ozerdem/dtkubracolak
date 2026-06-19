"use client";

import { useState } from "react";
import { Locale, faqItems, type Dictionary } from "@/lib/i18n"; 
import { PageHero } from "@/components/shared/PageHero";

type FaqPageProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function FaqPage({ lang, dictionary }: FaqPageProps) {
  // 🎯 KİLİT NOKTA: as const dizilerdeki literal tiplerle tam eşleşmesi için 'any' veya tam literal desteği veriyoruz
  const [activeId, setActiveId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  console.log("activeId:");
  console.log(activeId);

  const toggleFaq = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };
  console.log("toggleFaq:");
  console.log(toggleFaq);

  // Arama Filtresi
  console.log("Referans");
  const filteredFaqItems = faqItems.filter((item) => {
    const currentLocale = lang === "tr" ? "tr-TR" : lang === "de" ? "de-DE" : "en-US";
    const titleText = (item.title[lang] || "").toLocaleLowerCase(currentLocale);
    const contentText = (item.content[lang] || "").toLocaleLowerCase(currentLocale);
    const search = searchQuery.trim().toLocaleLowerCase(currentLocale);
    console.log("search:");
    console.log(search);

    return titleText.includes(search) || contentText.includes(search);
  });


  // SEO Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((item) => ({
      "@type": "Question",
      "name": item.title[lang] || "",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.content[lang] || "",
      },
    })),
  };

  return (
    <>
      <PageHero
        title={dictionary.faq?.title || "Sıkça Sorulan Sorular"}
        lead={dictionary.faq?.lead || "Klinik tedavileri, süreçler ve merak ettiğiniz tüm detaylar hakkında cevaplar."}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning 
      />

      {/* Arama Alanı */}
      <section className="bg-[#fbfaf8] border-b border-[#eee8df] py-12 px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold uppercase tracking-wider text-[#252525]">
                {lang === "tr" ? "Merak Edilenler" : lang === "de" ? "Häufig Gestellte Fragen" : "Frequently Asked Questions"}
              </h2>
              <p className="text-xs text-[#5d5751] mt-1 font-medium">
                {filteredFaqItems.length} {lang === "tr" ? "soru listeleniyor" : lang === "de" ? "Fragen aufgelistet" : "questions listed"}
              </p>
            </div>

            <div className="w-full md:w-auto md:min-w-[350px]">
              <div className="flex gap-2 w-full">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") e.preventDefault(); }}
                  className="w-full rounded-sm border border-[#eee8df] bg-white px-4 py-2.5 text-sm text-[#252525] placeholder-[#5d5751]/50 focus:border-[#c9a36d] focus:outline-none" 
                  placeholder={lang === "tr" ? "Soru veya konu ara…" : lang === "de" ? "Fragen suchen…" : "Search questions…"} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Akordeon Listesi */}
      <section className="bg-white px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {filteredFaqItems.length === 0 ? (
            <p className="text-center text-[#5d5751] py-8">Veri bulunamadı.</p>
          ) : (
            <div className="space-y-4">
              {filteredFaqItems.map((item) => {
                // 🎯 BURASI KRİTİK: item.id'yi string'e zorlayarak as const katılığı kırıyoruz
                const currentId = String(item.id);
                const isOpen = activeId === currentId;

                return (
                  <div
                    key={currentId}
                    className="border border-[#eee8df] bg-[#fbfaf8] rounded-sm shadow-sm"
                  >
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => toggleFaq(currentId)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleFaq(currentId);
                          console.log("Çalisti");
                        }
                      }}
                      className="w-full flex justify-between items-center p-6 text-left font-medium text-[#252525] hover:bg-[#f3eee7]/30 transition-colors cursor-pointer focus:outline-none select-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base font-semibold text-[#252525] leading-snug pr-4">
                        {item.title[lang]}
                      </span>
                      <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
                        <span className={`absolute h-0.5 w-4 bg-[#c9a36d] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                        <span className={`absolute h-4 w-0.5 bg-[#c9a36d] transition-transform duration-300 ${isOpen ? "rotate-90 opacity-0" : ""}`} />
                      </span>
                    </div>

                    {isOpen && (
                      <div className="border-t border-[#eee8df] bg-white">
                        <div className="p-6 text-sm md:text-base leading-relaxed text-[#5d5751] whitespace-pre-line">
                          {item.content[lang]}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}